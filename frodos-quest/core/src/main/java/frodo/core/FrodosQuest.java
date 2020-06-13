package frodo.core;

import static frodo.core.PixelConstants.*;

import playn.core.Canvas;
import playn.core.Clock;
import playn.core.Key;
import playn.core.Keyboard;
import playn.core.Mouse;
import playn.scene.SceneGame;
import react.Slot;

public class FrodosQuest extends SceneGame {
  private Surface surface = new Surface(this.viewSurf);

  static int FRAME_MS = 1000 / 30;

  private boolean loadingFinished = false;
  private boolean fontLoaded = false;
  private boolean isMusicCancelled = false;
  private int frameCounter = 0;
  private int frameBuffer = 0;
  
  static boolean debugMode = false, debugRun = false;
  
  static Title title = new Title();
  static Prompt prompt = new Prompt();
  static ControlState controlState = Sprites.FRODO.controlState;
  static TextDisplay textDisplay = new TextDisplay();
  static EventManager eventManager = new EventManager(controlState, textDisplay);
  static State state = new State(eventManager);
  
  static SceneRenderer sceneRenderer = new SceneRenderer();

  public FrodosQuest(Platform platform) {
    super(platform.raw, FRAME_MS);
    surface.clipFactor = platform.raw.graphics().scale().factor;

    Font.startLoading();
    Scene.startLoading();
    Sprites.startLoading();
    Title.startLoading();

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(keySlot);

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(mouseSlot);
  }
  
  @Override
  public void update(Clock clock) {
    frameBuffer = 0;
    
    if (!title.done()) {
      title.update();
      return;
    }
    
    frameCounter++;
    sceneRenderer.move();
    eventManager.tick(state);
    
    if (debugRun) {
      frameCounter++;
      sceneRenderer.move();
      eventManager.tick(state);
    }
  }
  
  @Override
  public void paintScene() {
    if (frameBuffer >= 2) return;
    frameBuffer++;
  
    surface.saveTx();
    surface.begin();
    
    surface.clear(0.0f, 0.0f, 0.0f, 1.0f);
    surface.scale(ZOOM, ZOOM);
    
    try {
      if (!title.done()) {
        title.draw(surface);
        return;
      }

      sceneRenderer.draw(surface, frameCounter);
      textDisplay.draw(surface);
      prompt.draw(surface, eventManager.interactive());
      
    } finally {
      surface.end();
      surface.restoreTx();
    }
  }
  
  public static boolean changeLocation(Location loc) {
    if (state.changeLocation(loc)) {
      sceneRenderer.update(state);
      controlState.pause();
      return true;
    }
    return false;
  }
  
  private void enter() {
    eventManager.userDismiss();
    if (prompt.hasInput() && state.submitUserCommand(prompt)) {
      sceneRenderer.update(state);
    }
      
    prompt.clear();
  }
  
  private Slot<Keyboard.Event> keySlot = new Slot<Keyboard.Event>() {
    public void onEmit(Keyboard.Event e) {
      if (e instanceof Keyboard.TypedEvent) {
        if (!title.done()) return;
        if (!eventManager.interactive()) return;
        eventManager.softDismiss();

        char c = ((Keyboard.TypedEvent) e).typedChar;
        if (prompt.keyTyped(c)) {
          state.updateSuggestion(prompt); 
        }
      
      } else if (e instanceof Keyboard.KeyEvent) {
	    Keyboard.KeyEvent ke = (Keyboard.KeyEvent) e;
	    controlState.update(ke.key, ke.down, frameCounter);
	    
	    if (ke.key == Key.ENTER) {
	      if (ke.down) prompt.autocomplete(); else enter();
	    }
	    if (ke.key == Key.TAB) {
	      if (ke.down && prompt.keyTyped(Prompt.TAB)) state.updateSuggestion(prompt);
	    }
	    if (ke.key == Key.BACKSPACE || ke.key == Key.DELETE || ke.key == Key.BACK) {
	      if (ke.down && prompt.keyTyped(Prompt.BACKSPACE)) state.updateSuggestion(prompt);
	    }
	    if (ke.key == Key.F7 && ke.down) {
	      debugMode = true;
	    }
	    if (ke.key == Key.SHIFT) {
	      if (ke.down) debugRun = debugMode; else debugRun = false;
	    }
	    if (ke.key == Key.ESCAPE) {
	      if (!title.done()) title.skip();
	    }
	  }
    }
  };
  
  private Slot<Mouse.Event> mouseSlot = new Slot<Mouse.Event>() {
    public void onEmit(Mouse.Event e) {
      if (!debugMode) return;
      if (!(e instanceof Mouse.ButtonEvent)) return;
      if (!((Mouse.ButtonEvent) e).down) return;
      int x = ((int) e.x) / ZOOM / SCENE_X_ZOOM;
      int y = (((int) e.y) / ZOOM - HEADER_Y) / SCENE_Y_ZOOM;
      x /= STEP_PX; x *= STEP_PX;
      y /= STEP_PX; y *= STEP_PX;
      if (sceneRenderer.scene.mask.contains(x, y)) {
        Sprites.FRODO.x = x;
        Sprites.FRODO.y = y;
        controlState.pause();
      }
    }
  };
}

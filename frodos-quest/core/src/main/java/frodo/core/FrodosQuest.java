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
  
  static Prompt prompt = new Prompt();
  static ControlState controlState = Sprites.FRODO.controlState;
  static TextDisplay textDisplay = new TextDisplay();
  static EventManager eventManager = new EventManager(controlState, textDisplay);
  static State state = new State(eventManager);
  
  static SceneRenderer sceneRenderer = new SceneRenderer();

  public FrodosQuest(Platform platform) {
    super(platform.raw, FRAME_MS);

    Font.startLoading();
    Scene.startLoading();
    Sprites.startLoading();
    sceneRenderer.update(state);

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(keySlot);

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(new Slot<Mouse.Event>() {
      public void onEmit(Mouse.Event e) {
        // TODO: Mouse support for debugging.
      }
    });
  }
  
  @Override
  public void update(Clock clock) {
    frameCounter++;
    if (!loadingFinished) {
      continueLoading();
      return;
    }
    
    sceneRenderer.move();
    eventManager.tick(state);
  }
  
  private void continueLoading() {
    if (!fontLoaded && Font.RAW != null && Font.RAW.isLoaded()) {
      Font.finishLoading();
      fontLoaded = true;
    } else if (fontLoaded && !loadingFinished && Loader.isFinished()) {
      Scene.finishLoading();
      Sprites.finishLoading();
      loadingFinished = true;
    }
  }

  @Override
  public void paintScene() {
    surface.saveTx();
    surface.begin();
    
    surface.clear(0.0f, 0.0f, 0.0f, 1.0f);
    surface.scale(ZOOM, ZOOM);
    
    try {
      if (!loadingFinished) {
        paintWhileLoading(surface);
        return;
      }

      sceneRenderer.draw(surface, frameCounter / 8);
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
      Sprites.FRODO.update(state);
      controlState.pause();
      return true;
    }
    return false;
  }
  
  private void paintWhileLoading(Surface surface) {
    if (fontLoaded) {
      surface.clear(0f, 0f, 0f, 1f);
      Font.WHITE.centeredSingleLine(surface, Loader.statusText(), SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
    } else {
      surface.clear(1f, 1f, 1f, 1f);
    }
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
	  }
    }
  };
}

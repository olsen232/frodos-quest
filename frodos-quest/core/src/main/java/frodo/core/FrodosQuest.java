package frodo.core;

import static frodo.core.PixelConstants.*;

import playn.core.Canvas;
import playn.core.Clock;
import playn.core.Keyboard;
import playn.core.Mouse;
import playn.scene.SceneGame;
import react.Slot;

public class FrodosQuest extends SceneGame {

  static int FRAME_MS = 1000 / 30;

  private boolean loadingFinished = false;
  private boolean fontLoaded = false;
  private boolean isMusicCancelled = false;
  
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
    plat.input().keyboardEvents.connect(new Slot<Keyboard.Event>() {
      public void onEmit(Keyboard.Event e) {
	if (e instanceof Keyboard.KeyEvent) {
          Keyboard.KeyEvent ke = (Keyboard.KeyEvent) e;
          // TODO: Handle key event.
          if (!loadingFinished && ke.key == playn.core.Key.ESCAPE) {
            isMusicCancelled = true;
          }
        }
      }
    });

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(new Slot<Mouse.Event>() {
      public void onEmit(Mouse.Event e) {
        // TODO: Mouse support for debugging.
      }
    });
  }
  
  private int frameCounter = 0;

  @Override
  public void update(Clock clock) {
    frameCounter++;
    if (!loadingFinished) {
      continueLoading();
      return;
    }
    // TODO: main game loop
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
    viewSurf.saveTx();
    viewSurf.begin();
    
    Surface surface = new Surface(viewSurf);
    surface.clear(0.0f, 0.0f, 0.0f, 1.0f);
    
    // TODO: reuse surface, scale factor
    //surface.scaleFactor = Toolkit.platform.graphics().scale().factor;
    try {
      if (!loadingFinished) {
        paintWhileLoading(surface);
        return;
      }
      // TODO(frame rate)
      sceneRenderer.draw(surface, frameCounter / 4);
      
    } finally {
      viewSurf.end();
      viewSurf.restoreTx();
    }
  }
  
  private void paintWhileLoading(Surface surface) {
    if (fontLoaded) {
      surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0xff000000);
      surface.drawCenteredText(Font.WHITE, Loader.statusText(), SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
    } else {
      surface.clear(1.0f, 1.0f, 1.0f, 1.0f);
    }
  }
}

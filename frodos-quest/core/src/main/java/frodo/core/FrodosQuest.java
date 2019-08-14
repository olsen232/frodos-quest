package frodo.core;

import static frodo.core.PixelConstants.*;

import playn.core.Canvas;
import playn.core.Clock;
import playn.core.Image;
import playn.core.Keyboard;
import playn.core.Mouse;
import playn.core.Platform;
import playn.scene.ImageLayer;
import playn.scene.SceneGame;
import react.Slot;

public class FrodosQuest extends SceneGame {

  static int FRAME_MS = 1000 / 30;

  private boolean loadingFinished = false;
  private boolean fontLoaded = false;
  private boolean isMusicCancelled = false;

  public FrodosQuest(Platform plat, Toolkit.CanvasCreator canvasCreator) {
    this(plat);
    Toolkit.canvasCreator = canvasCreator;
  }

  public FrodosQuest(Platform plat) {
    super(plat, FRAME_MS);

    Toolkit.platform = plat;

    Font.start();

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

  @Override
  public void update(Clock clock) {
    if (loadingFinished) {
      // TODO: main game loop

    } else if (!fontLoaded && Toolkit.get("widefont.png") != null && Toolkit.get("widefont.png").isLoaded()) {
      Font.loadFont();
      fontLoaded = true;
    } 
  }

  private int frame = 0;

  @Override
  public void paintScene() {
    viewSurf.saveTx();
    viewSurf.begin();
    viewSurf.clear(0.0f, 0.0f, 0.0f, 1.0f);
    
    ZoomSurface zs = new ZoomSurface(viewSurf);
    zs.scaleFactor = Toolkit.platform.graphics().scale().factor;
    try {
      if (loadingFinished) {
        // Main game render
      } else if (fontLoaded) {
        zs.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0xff000000);
        renderLoadingProgress(zs);
      } else {
        viewSurf.clear(1.0f, 1.0f, 1.0f, 1.0f);
      }
      
    } finally {
      viewSurf.end();
      viewSurf.restoreTx();
    }
  }

  private void renderLoadingProgress(ZoomSurface xs) {
    xs.drawCenteredText(Font.WHITE_FONT, "Frodo's Quest", SCREEN_WIDTH / 2, 8 * 5);
    xs.drawCenteredText(Font.WHITE_FONT, "Coming soon", SCREEN_WIDTH / 2, 8 * 7);
  }
}

package frodo.core;

import static frodo.core.PixelConstants.*;
import playn.core.Sound;

public class Title {

  public static final int TOTAL_MS = 25000;

  static Image TITLE_RAW;
  static Image[] LAYERS;
  
  static Sound ONE_RING_INTRO;
  static Sound CONCERNING_HOBBITS_INTRO;
  
  private boolean fontLoaded = false;
  private boolean loadingFinished = false;
  private boolean done = false;

  private int startMs = 0;

  public static void startLoading() {
    TITLE_RAW = Image.load("title.png");
    ONE_RING_INTRO = Loader.loadMusic("one_ring_intro");
    CONCERNING_HOBBITS_INTRO = Loader.loadMusic("concerning_hobbits_intro");
  }
  
  public static void finishLoading() {
    LAYERS = TITLE_RAW.scale(SCENE_X_ZOOM, SCENE_Y_ZOOM).tile(SCENE_WIDTH, SCENE_HEIGHT);
  }
  
  public void update() {
    if (!fontLoaded && Font.RAW != null && Font.RAW.isLoaded()) {
      Font.finishLoading();
      fontLoaded = true;
    } else if (fontLoaded && !loadingFinished && Loader.isFinished()) {
      Scene.finishLoading();
      Sprites.finishLoading();
      Title.finishLoading();
      this.start();
      loadingFinished = true;
    } else if (loadingFinished && !done && ms() > TOTAL_MS) {
      this.finish();
      done = true;
    }
  }
  
  public void start() {
    ONE_RING_INTRO.play();
    startMs = ms();
  } 
  
  public void finish() {
    CONCERNING_HOBBITS_INTRO.play();
  } 
  
  public boolean done() {
    return done;
  }
  
  public void draw(Surface surface) {
    if (!fontLoaded) {
      surface.clear(1f, 1f, 1f, 1f);
      return;
    }
    surface.clear(0f, 0f, 0f, 1f);
    
    if (!loadingFinished) {
      Font.WHITE.centeredSingleLine(surface, Loader.statusText(), SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
      return;
    }
    
    int layerId = 0;
    int ms = ms();
    for (Image layer : LAYERS) {
      surface.draw(layer, 0, HEADER_Y);
      surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, fade(layerId++, ms));
    }
  }
  
  private int fade(int layerId, int ms) {
    ms -= 5000 * (2 - layerId);
    int alpha = 0xff - (ms / 200 * 200) * 0xff / 3000;
    alpha = Ints.clamp(alpha, 0x00, 0xff);
    return alpha << 24;
  }
  
  private int ms() {
    return Platform.INSTANCE.raw.tick() - startMs;
  }
  
  public void skip() {
    if (loadingFinished) done = true;
  }
}
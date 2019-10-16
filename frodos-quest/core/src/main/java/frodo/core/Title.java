package frodo.core;

import static frodo.core.PixelConstants.*;
import frodo.core.Events.*;
import playn.core.Sound;

public class Title {

  public static final int TOTAL_MS = 25000;
  public static final String COPYRIGHT_TEXT = "(C) 1987 by Olsen On-Line, Inc";

  static Image TITLE_RAW;
  static Image[] LAYERS;
  
  static Sound ONE_RING_INTRO;
  static Sound CONCERNING_HOBBITS_INTRO;
  static Sound CONCERNING_HOBBITS;
  
  private boolean fontLoaded = false;
  private boolean loadingFinished = false;
  private boolean done = false;

  private int startMs = 0;

  public static void startLoading() {
    TITLE_RAW = Image.load("title.png");
    ONE_RING_INTRO = Loader.loadMusic("one_ring_intro");
    CONCERNING_HOBBITS_INTRO = Loader.loadMusic("concerning_hobbits_intro");
    CONCERNING_HOBBITS = Loader.loadMusic("concerning_hobbits");
  }
  
  public static void finishLoading() {
    LAYERS = TITLE_RAW.tile(SCENE_WIDTH, SCENE_HEIGHT);
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
    Loader.stopAllMusic();
    CONCERNING_HOBBITS_INTRO.play();
    EventManager eventManager = FrodosQuest.eventManager;
    eventManager.add(new PauseEvent(Events.UNINTERACTIVE, 5));
    eventManager.add(new DisplayTextEvent("The sun rises over Hobbiton, the largest Hobbit settlement in The Shire, and shines through the windows at Bag End, the nicest Hobbit hole in Hobbiton - where you, Frodo, live with your wealthy uncle Bilbo."));
    eventManager.add(new CutSceneEvent(Location.FRODOS_ROOM));
    eventManager.add(new ShowSpriteEvent(Sprites.FRODO, true));
    eventManager.add(new PauseEvent(Events.UNINTERACTIVE, 2));
    eventManager.add(new DisplayTextEvent("You have just gotten out of bed. You hear Bilbo call from the hallway \"Frodo! There's a letter for you!\""));
    eventManager.add(new QueuedUpcomingEvent(new LocationEvent(Location.BAGEND_HILL, false, new MusicEvent(CONCERNING_HOBBITS))));
  }
  
  public void skipFinish() {
    Loader.stopAllMusic();
    EventManager eventManager = FrodosQuest.eventManager;
    eventManager.add(new CutSceneEvent(Location.FRODOS_ROOM));
    eventManager.add(new CutSceneEvent(Location.FRODOS_ROOM));
    eventManager.add(new ShowSpriteEvent(Sprites.FRODO, true));
    eventManager.add(new DisplayTextEvent("You have just gotten out of bed. You hear Bilbo call from the hallway \"Frodo! There's a letter for you!\""));
    eventManager.add(new QueuedUpcomingEvent(new LocationEvent(Location.BAGEND_HILL, false, new MusicEvent(CONCERNING_HOBBITS))));
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
      Font.WHITE.centered(surface, Loader.statusText(), SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
      return;
    }
    
    int ms = ms();
    drawLayers(surface, ms);
    if (ms > 13000) {
      Font.WHITE.centeredSingleLine(surface, COPYRIGHT_TEXT, SCREEN_WIDTH / 2, PROMPT_Y);
    }
    surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, fadeOut(ms));
  }

  private void drawLayers(Surface surface, int ms) {
    surface.saveTx();
    surface.translate(0, HEADER_Y);
    surface.scale(SCENE_X_ZOOM, SCENE_Y_ZOOM);
    int layerId = 0;
    for (Image layer : LAYERS) {
      surface.draw(layer, 0, 0);
      surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, fade(layerId++, ms));
    }
    surface.restoreTx();
  }
  
  private int fade(int layerId, int ms) {
    ms -= 5000 * (2 - layerId);
    int alpha = 0xff - (ms / 200 * 200) * 0xff / 2000;
    return black(alpha); 
  }
  
  private int fadeOut(int ms) {
    ms -= 18000;
    int alpha = (ms / 200 * 200) * 0xff / 2000;
    return black(alpha);
  }
  
  private int black(int alpha) {
    alpha = Ints.clamp(alpha, 0x00, 0xff);
    return alpha << 24;
  }
  
  private int ms() {
    return Platform.INSTANCE.raw.tick() - startMs;
  }
  
  public void skip() {
    if (loadingFinished && !done) {
      ONE_RING_INTRO.stop();
      skipFinish();
      done = true;
    }
  }
}

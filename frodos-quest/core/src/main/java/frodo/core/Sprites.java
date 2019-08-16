package frodo.core;

import static frodo.core.PixelConstants.*;

import java.io.IOException;
import java.util.Comparator;

public final class Sprites {

  public static FrodoSprite FRODO = new FrodoSprite();  
  public static AnimalSprite GOAT = new AnimalSprite();
  public static GooseSprite GOOSE = new GooseSprite();
  
  public static Image[] FRODO_LARGE;
  public static Image[] FRODO_SMALL;
  
  public static Image[] GOOSE_TILES;
  public static Image[] GOAT_TILES;
  
  private static Image FRODO_LARGE_RAW;
  private static Image FRODO_SMALL_RAW;
  private static Image GOAT_RAW;
  private static Image GOOSE_RAW;
  
  public static void startLoading() {
    FRODO_LARGE_RAW = Image.load("frodo_large.png");
    FRODO_SMALL_RAW = Image.load("frodo_small.png");
    GOAT_RAW = Image.load("goat.png");
    GOOSE_RAW = Image.load("goose.png");
  }
  
  public static void finishLoading() {
    FRODO_LARGE = scaleSprite(FRODO_LARGE_RAW).tileInto(4, 4);
    FRODO_SMALL = scaleSprite(FRODO_SMALL_RAW).tileInto(4, 4);
    
    GOAT_TILES = scaleSprite(GOAT_RAW).tileInto(4, 4);
    GOOSE_TILES = scaleSprite(GOOSE_RAW).tileInto(4, 2);
    
    FRODO.init(FRODO_LARGE);
    GOAT.init(GOAT_TILES);
    GOOSE.init(GOOSE_TILES);
  }
  
  private static Image scaleSprite(Image image) {
    return image.scale(SCENE_X_ZOOM, SCENE_Y_ZOOM);
  }
  
  public static Comparator<Sprite> SORT_BY_Y = new Comparator<Sprite>() {
    @Override
    public int compare(Sprite a, Sprite b) {
      return a.y - b.y;
    }
  };
}

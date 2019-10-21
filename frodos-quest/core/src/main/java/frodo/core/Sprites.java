package frodo.core;

import static frodo.core.PixelConstants.*;

import java.io.IOException;
import java.util.Comparator;

public final class Sprites {

  public static FrodoSprite FRODO = new FrodoSprite();  
  public static AnimalSprite GOAT = new AnimalSprite();
  public static GooseSprite GOOSE = new GooseSprite();
  public static StoolSprite STOOL = new StoolSprite();
  
  public static Sprite[] ALL = new Sprite[] {
    FRODO, GOAT, GOOSE, STOOL,
  };
  
  public static Sprite[] NONE = new Sprite[] {};
  public static Sprite[] STOOL_1 = new Sprite[] { STOOL };
  
  public static Image[] FRODO_LARGE;
  public static Image[] FRODO_SMALL;
  
  public static Image[] GOOSE_TILES;
  public static Image[] GOAT_TILES;
  
  public static Image[] STOOL_TILES;

  
  private static Image FRODO_LARGE_RAW;
  private static Image FRODO_SMALL_RAW;
  private static Image GOAT_RAW;
  private static Image GOOSE_RAW;
  private static Image STOOL_RAW;
  
  public static void startLoading() {
    FRODO_LARGE_RAW = Image.load("frodo_large.png");
    FRODO_SMALL_RAW = Image.load("frodo_small.png");
    GOAT_RAW = Image.load("goat.png");
    GOOSE_RAW = Image.load("goose.png");
    STOOL_RAW = Image.load("stool.png");
  }
  
  public static void finishLoading() {
    FRODO_LARGE = FRODO_LARGE_RAW.tileInto(4, 4);
    FRODO_SMALL = FRODO_SMALL_RAW.tileInto(4, 4);
    
    GOAT_TILES = GOAT_RAW.tileInto(4, 4);
    GOOSE_TILES = GOOSE_RAW.tileInto(4, 2);

    STOOL_TILES = STOOL_RAW.tileInto(2, 1);
    
    FRODO.init(FRODO_LARGE);
    GOAT.init(GOAT_TILES);
    GOOSE.init(GOOSE_TILES);
    STOOL.init(STOOL_TILES);
  }
  
  public static Comparator<Sprite> SORT_BY_Y = new Comparator<Sprite>() {
    @Override
    public int compare(Sprite a, Sprite b) {
      return a.y - b.y;
    }
  };
}

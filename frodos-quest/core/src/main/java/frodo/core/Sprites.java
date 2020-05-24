package frodo.core;

import static frodo.core.PixelConstants.*;

import java.io.IOException;
import java.util.Comparator;

public final class Sprites {

  public static FrodoSprite FRODO = new FrodoSprite();  
  public static AnimalSprite GOAT = new AnimalSprite();
  public static AnimalSprite PIG = new AnimalSprite();
  public static AnimalSprite PIG2 = new AnimalSprite();
  public static GooseSprite GOOSE = new GooseSprite();
  public static PonySprite PONY = new PonySprite();
  public static StoolSprite STOOL = new StoolSprite();
  public static CartSprite CART = new CartSprite();
  
  public static Sprite[] ALL = new Sprite[] {
    FRODO, GOAT, PIG, PIG2, GOOSE, PONY, STOOL, CART,
  };
  
  public static Image[] FRODO_LARGE;
  public static Image[] FRODO_SMALL;
  
  public static Image[] GOOSE_TILES;
  public static Image[] GOAT_TILES;
  public static Image[] PIG_TILES;
  public static Image[] PIG2_TILES;
  public static Image[] PONY_TILES;
  public static Image[] STOOL_TILES;
  public static Image[] CART_TILES;

  private static Image FRODO_LARGE_RAW;
  private static Image FRODO_SMALL_RAW;
  private static Image GOAT_RAW;
  private static Image PIG_RAW;
  private static Image PIG2_RAW;
  private static Image PONY_RAW;
  private static Image GOOSE_RAW;
  private static Image STOOL_RAW;
  private static Image CART_RAW;
  
  public static void startLoading() {
    FRODO_LARGE_RAW = Image.load("frodo_large.png");
    FRODO_SMALL_RAW = Image.load("frodo_small.png");
    GOAT_RAW = Image.load("goat.png");
    GOOSE_RAW = Image.load("goose.png");
    PIG_RAW = Image.load("pig.png");
    PIG2_RAW = Image.load("pig2.png");
    PONY_RAW = Image.load("pony.png");
    STOOL_RAW = Image.load("stool.png");
    CART_RAW = Image.load("cart.png");
  }
  
  public static void finishLoading() {
    FRODO_LARGE = FRODO_LARGE_RAW.tileInto(4, 4);
    FRODO_SMALL = FRODO_SMALL_RAW.tileInto(4, 4);
    
    GOAT_TILES = GOAT_RAW.tileInto(4, 4);
    PIG_TILES = PIG_RAW.tileInto(4, 4);
    PIG2_TILES = PIG2_RAW.tileInto(4, 4);
    GOOSE_TILES = GOOSE_RAW.tileInto(4, 2);
    PONY_TILES = PONY_RAW.tileInto(6, 4);

    STOOL_TILES = STOOL_RAW.tileInto(2, 1);
    CART_TILES = CART_RAW.tileInto(2, 2);
    
    FRODO.init(FRODO_LARGE);
    GOAT.init(GOAT_TILES);
    PIG.init(PIG_TILES);
    PIG2.init(PIG2_TILES);
    GOOSE.init(GOOSE_TILES);
    PONY.init(PONY_TILES);
    STOOL.init(STOOL_TILES);
    CART.init(CART_TILES);

    GOAT.x = SCENE_WIDTH / 4;
    PIG.x = SCENE_WIDTH * 3 / 4;
    PIG.framesPerWander = 22;
  }

  private static int animalsFollowing = 0;
  public static void tick() {
    animalsFollowing--;
  }
  public static boolean animalsFollowing() {
    return animalsFollowing > 0;
  }
  public static void makeAnimalsFollow() {
    animalsFollowing = 500;
  }
  
  public static Comparator<Sprite> SORT_BY_Y = new Comparator<Sprite>() {
    @Override
    public int compare(Sprite a, Sprite b) {
      return a.y - b.y;
    }
  };
}

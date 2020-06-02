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
  public static BoatSprite BOAT = new BoatSprite();
  
  public static Sprite[] ALL = new Sprite[] {
    FRODO, GOAT, PIG, PIG2, GOOSE, PONY, STOOL, CART, BOAT,
  };

  private static Image FRODO_LARGE_IMG, FRODO_SMALL_IMG;
  private static Image GOAT_IMG;
  private static Image PIG_IMG, PIG2_IMG;
  private static Image PONY_IMG;
  private static Image GOOSE_IMG;
  private static Image STOOL_IMG;
  private static Image CART_IMG;
  private static Image BOAT_IMG, SPLASH_IMG;
  
  public static void startLoading() {
    FRODO_LARGE_IMG = Image.load("frodo_large.png");
    FRODO_SMALL_IMG = Image.load("frodo_small.png");
    GOAT_IMG = Image.load("goat.png");
    GOOSE_IMG = Image.load("goose.png");
    PIG_IMG = Image.load("pig.png");
    PIG2_IMG = Image.load("pig2.png");
    PONY_IMG = Image.load("pony.png");
    STOOL_IMG = Image.load("stool.png");
    CART_IMG = Image.load("cart.png");
    BOAT_IMG = Image.load("boat.png");
    SPLASH_IMG = Image.load("splash.png");
  }
  
  public static void finishLoading() {        
    FRODO.init(FRODO_LARGE_IMG.tileInto(4, 4), FRODO_SMALL_IMG.tileInto(4, 4));
    GOAT.init(GOAT_IMG.tileInto(4, 4));
    PIG.init(PIG_IMG.tileInto(4, 4));
    PIG2.init(PIG2_IMG.tileInto(4, 4));
    GOOSE.init(GOOSE_IMG.tileInto(4, 2));
    PONY.init(PONY_IMG.tileInto(6, 4));
    STOOL.init(STOOL_IMG.tileInto(2, 1));
    CART.init(CART_IMG.tileInto(2, 2));
    BOAT.init(BOAT_IMG.tileInto(2, 4), SPLASH_IMG.tileInto(5, 1));

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

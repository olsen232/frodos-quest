package frodo.core;

import static frodo.core.PixelConstants.*;

import java.io.IOException;
import java.util.Comparator;

public final class Sprites {

  public static Comparator<Sprite> SORT_BY_Y = new Comparator<Sprite>() {
    @Override
    public int compare(Sprite a, Sprite b) {
      return a.y - b.y;
    }
  };

  public static ZImage[] FRODO_LARGE;
  public static ZImage[] FRODO_SMALL;
  
  public static ZImage[] GOOSE_TILES;
  public static ZImage[] GOAT_TILES;

  public static FrodoSprite FRODO = new FrodoSprite();  
  
  public static AnimalSprite GOAT = new AnimalSprite();
  public static GooseSprite GOOSE = new GooseSprite();  
  
  public static void load() throws IOException {
    FRODO_LARGE = Toolkit.tileInto(loadAndScale("frodo_large.png"), 4, 4);
    FRODO_SMALL = Toolkit.tileInto(loadAndScale("frodo_small.png"), 4, 4);
    
    GOAT_TILES = Toolkit.tileInto(loadAndScale("goat.png"), 4, 4);
    GOOSE_TILES = Toolkit.tileInto(loadAndScale("goose.png"), 4, 2);
    
    init(FRODO, FRODO_LARGE);
    init(GOAT, GOAT_TILES);
    init(GOOSE, GOOSE_TILES);
  }
  
  private static void init(Sprite sprite, ZImage[] images) {
    sprite.images = images;
    sprite.image = images[0];
  }
  
  private static ZImage loadAndScale(String s) throws IOException {
    return Toolkit.scale(Toolkit.zImage(s), SCENE_X_ZOOM, SCENE_Y_ZOOM);
  }
}

package frodo.core;

import static frodo.core.PixelConstants.ZOOM;

import playn.core.Image;
import playn.core.Platform;
import java.util.HashMap;
import java.util.Map;

public final class Toolkit {
  private Toolkit() {}

  private static final Map<String, Image> map = new HashMap<String, Image>();

  public static boolean isImagesLoaded() {
    if (map.size() == 0) {
      return false;
    }
    for (playn.core.Image image : map.values()) {
      if (!image.isLoaded()) {
        return false;
      }
    }
    return true;
  }

  public static String imagesLoadedDesc() {
    int loaded = 0, total = 0;
    for (playn.core.Image image : map.values()) {
      loaded += image.isLoaded() ? 1 : 0;
      total += 1;
    }
    return "Images: " + loaded + " of " + total;
  }

  public static Platform platform = null;

  public static ZImage zImage(Image in) {
    return new ZImage(in);
  }

  public static ZImage recolor(ZImage in, int recolor) {
    return new ZImage(recolor(in.image, recolor));
  }

  public static Image recolor(Image in, int recolor) {
    int w = (int) in.width();
    int h = (int) in.height();
    int[] pixels = new int[w * h];
    in.getRgb(0, 0, w, h, pixels, 0, w);
    for (int i = 0; i < pixels.length; i++) {
      pixels[i] =  recolor(pixels[i], recolor);
    }
    playn.core.Canvas c = createCanvas(w, h);
    c.image.setRgb(0, 0, w, h, pixels, 0, w);
    return c.image;
  }

  public static int recolor(int in, int recolor) {
    return in & recolor;
  }

  public static ZImage flipLTR(ZImage in) {
    return new ZImage(flipLTR(in.image));
  }

  public static Image flipLTR(Image in) {
    int w = (int) in.width();
    int h = (int) in.height();
    playn.core.Canvas c = createCanvas(w, h);
    c.scale(-1, 1);
    c.draw(in, -w, 0);
    return c.image;
  }

  public static ZImage[] tile(ZImage in, int size) {
    return tile(in, size, size);
  }

  public static Image[] tile(Image in, int size) {
    return tile(in, size, size);
  }

  public static ZImage[] tile(ZImage in, int xSize, int ySize) {
    int w = in.width() / xSize;
    int h = in.height() / ySize;

    ZImage[] result = new ZImage[w * h];
    Image[] tiles = tile(in.image, xSize, ySize);
    for (int i = 0; i < result.length; i++) {
      result[i] = new ZImage(tiles[i]);
    }
    return result;
  }

  public static Image[] tile(Image in, int xSize, int ySize) {
    int w = (int) in.width() / xSize;
    int h = (int) in.height() / ySize;
    int i = 0;
    Image result[] = new Image[w * h];
    for (int y = 0; y < h; y++) {
      for (int x = 0; x < w; x++) {
        result[i++] = subImage(in, x * xSize, y * ySize, xSize, ySize);
      }
    }
    return result;
  }

  public static Image subImage(Image in, int x, int y, int width, int height) {
    playn.core.Canvas c = createCanvas(width, height);
    c.draw(in.region(x, y, width, height), 0, 0);
    return c.image;
  }

  public static Image get(String s) {
    if (!map.containsKey(s)) {
      throw new IllegalStateException(s);
    }
    return map.get(s);
  }

  public static Image zoom(Image in) {
    return zoom(in, ZOOM);
  }

  public static Image zoom(Image in, int zoom) {
    int w = (int) in.width();
    int h = (int) in.height();
    int[] pixels = new int[w * h];
    in.getRgb(0, 0, w, h, pixels, 0, w);
    int w2 = zoom * w;
    int h2 = zoom * h;
    int[] pixels2 = new int[w2 * h2];
    for (int x = 0; x < w2; x++) {
      for (int y = 0; y < h2; y++) {
        pixels2[y * w2 + x] = pixels[(y / zoom) * w + (x / zoom)];
      }
    }
    playn.core.Canvas c = createCanvas(w2, h2);
    c.image.setRgb(0, 0, w2, h2, pixels2, 0, w2);
    return c.image;
  }

  public static void start(String s) {
    if (!map.containsKey(s)) {
      map.put(s, platform.assets().getImage(s));
    }
  }

  public static ZImage getZImage(String s) {
    return new ZImage(get(s));
  }

  public interface CanvasCreator {
    playn.core.Canvas createCanvas(int pixelWidth, int pixelHeight);
  }

  public static CanvasCreator canvasCreator;

  public static playn.core.Canvas createCanvas(int pixelWidth, int pixelHeight) {
    if (canvasCreator != null) return canvasCreator.createCanvas(pixelWidth, pixelHeight);
    return platform.graphics().createCanvas(pixelWidth, pixelHeight);
  }
}

package frodo.core;

public class Image {
  private static final int[] ONE_PIXEL = new int[1];

  public final playn.core.Image raw;
  
  private int[] lazyPixels;
  
  public static Image load(String name) {
    return Loader.loadImage(name);
  }

  protected Image(playn.core.Image raw) {
    this.raw = raw;
  }
  
  public boolean isLoaded() {
    return raw.isLoaded();
  }

  public int width() {
    return raw.pixelWidth();
  }

  public int height() {
    return raw.pixelHeight();
  }
  
  // ================= Pixels =======================
  
  public void startPixelCalls() {
    if (lazyPixels == null) {
      lazyPixels = getPixelsOnce();
    }
  }
  
  public int pixel(int x, int y) {
    return lazyPixels[y * width() + x];
  }

  public void setPixel(int x, int y, int pixel) {
    lazyPixels[y * width() + x] = pixel;
  }
  
  public void endPixelCalls() {
    lazyPixels = null;
  }
  
  public void commitPixels() {
    int w = width();
    int h = height();
    raw.setRgb(0, 0, w, h, lazyPixels, 0, w);
  }
  
  public int[] getPixelsOnce() {
    int w = width();
    int h = height();
    int[] pixels = new int[w * h];
    raw.getRgb(0, 0, w, h, pixels, 0, w);
    return pixels;
  }
  
  public int pixelOnce(int x, int y) {
    raw.getRgb(x, y, 1, 1, ONE_PIXEL, 0, width());
    return ONE_PIXEL[0];
  }
  
  public int[] pixelRow(int[] row, int y) {
    int w = width();
    if (row == null) {
      row = new int[w];
    }
    raw.getRgb(0, y, w, 1, row, 0, w);
    return row;
  }
  
  // ================= Tiling =======================
  
  public Image[] tile(int size) {
    return tile(size, size);
  }
  
  public Image[] tileInto(int numX, int numY) {
    int xSize = width() / numX;
    int ySize = height() / numY;
    return tile(xSize, ySize);
  }

  public Image[] tile(int xSize, int ySize) {
    int w = width() / xSize;
    int h = height() / ySize;
    int i = 0;
    Image result[] = new Image[w * h];
    for (int y = 0; y < h; y++) {
      for (int x = 0; x < w; x++) {
        result[i++] = subImage(x * xSize, y * ySize, xSize, ySize);
      }
    }
    return result;
  }
  
  public Image subImage(int x, int y, int width, int height) {
    playn.core.Canvas c = Platform.INSTANCE.createRawCanvas(width, height);
    c.draw(raw.region(x, y, width, height), 0, 0);
    return new Image(c.image);
  }
  
  // ================= Scaling =======================

  /*public Image scale(int scale) {
    return scale(scale, scale);
  }
  
  public Image scale(int xScale, int yScale) {
    int w = width();
    int h = height();
    int[] pixels = getPixelsOnce();
    int w2 = xScale * w;
    int h2 = yScale * h;
    int[] pixels2 = new int[w2 * h2];
    for (int x = 0; x < w2; x++) {
      for (int y = 0; y < h2; y++) {
        pixels2[y * w2 + x] = pixels[(y / yScale) * w + (x / xScale)];
      }
    }
    playn.core.Canvas c = Platform.INSTANCE.createRawCanvas(w2, h2);
    c.image.setRgb(0, 0, w2, h2, pixels2, 0, w2);
    return new Image(c.image);
  }*/
  
  // ================= Recoloring =======================

  public Image recolor(int recolor) {
    int w = width();
    int h = height();
    int[] pixels = getPixelsOnce();
    for (int i = 0; i < pixels.length; i++) {
      pixels[i] &= recolor;
    }
    playn.core.Canvas c = Platform.INSTANCE.createRawCanvas(w, h);
    c.image.setRgb(0, 0, w, h, pixels, 0, w);
    return new Image(c.image);
  }
}

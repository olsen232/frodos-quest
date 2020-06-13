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

  public Image grey(float r, float g, float b) {
    int w = width();
    int h = height();
    int[] pixels = getPixelsOnce();
    for (int i = 0; i < pixels.length; i++) {
      int alpha = pixels[i] & 0xff000000;
      int rgb = pixels[i] & 0xffffff;
      int grey = (((rgb & 0xff0000) >> 16) + ((rgb & 0xff00) >> 8) + (rgb & 0xff)) / 3;
      pixels[i] = alpha | ((int)(grey * r) << 16) | ((int)(grey * g) << 8) | (int)(grey * b);
    }
    playn.core.Canvas c = Platform.INSTANCE.createRawCanvas(w, h);
    c.image.setRgb(0, 0, w, h, pixels, 0, w);
    return new Image(c.image);
  }
  
  public void updateTexture() {
    raw.updateTexture();
  }
}

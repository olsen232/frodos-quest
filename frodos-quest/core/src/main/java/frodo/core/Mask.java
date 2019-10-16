package frodo.core;

public class Mask {
  public final Image image;
  public Bounds mainBounds = new Bounds();
  public Bounds leftEdge = new Bounds();
  public Bounds rightEdge = new Bounds();
  public Bounds topEdge = new Bounds();
  public Bounds bottomEdge = new Bounds();
  
  public static Mask shrink(Image image, int shrinkX, int shrinkY) {
    doShrink(image, shrinkX, shrinkY);
    return new Mask(image);
  }
  
  public Mask(Image image) {
    this.image = image;
    int w = image.width();
    int h = image.height();
    image.startPixelCalls();
    for (int x = 0; x < w; x++) {
      for (int y = 0; y < h; y++) {
        int pixel = image.pixel(x, y);
        if (Pixels.isWhite(pixel)) {
          updateEdges(x, y);
        } else if (Pixels.isOn(pixel)) {
          mainBounds.update(x, y);
        }
      }
    }
    image.endPixelCalls();
  }

  private void updateEdges(int x, int y) {
    if (x == mainBounds.left) leftEdge.update(x, y);
    else if (x < mainBounds.left) leftEdge.reset(x, y);
    if (x == mainBounds.right) rightEdge.update(x, y);
    else if (x > mainBounds.right) rightEdge.reset(x, y);
    if (y == mainBounds.top) topEdge.update(x, y);
    else if (y < mainBounds.top) topEdge.reset(x, y);
    if (y == mainBounds.bottom) bottomEdge.update(x, y);
    else if (y > mainBounds.bottom) bottomEdge.reset(x, y);
    mainBounds.update(x, y);
  }
  
  public boolean contains(int x, int y) {
    return mainBounds.contains(x, y);
  }
  
  public Bounds getEdge(Direction direction) {
    switch (direction) {
      case LEFT: return leftEdge;
      case RIGHT: return rightEdge;
      case UP: return topEdge;
      case DOWN: return bottomEdge;
    }
    throw new IllegalArgumentException("Invalid direction: " + direction);
  }
  
  public int pixelOnce(int x, int y) {
    return image.pixelOnce(x, y);
  }

  public String toString() {
    return "MaskBounds(" + super.toString()
     + "\n  leftEdge=" + leftEdge.toString()
     + "\n  rightEdge=" + rightEdge.toString()
     + "\n  topEdge=" + topEdge.toString()
     + "\n  bottomEdge=" + bottomEdge.toString() + ")";
  }
  
  private static int MASK_WAS_ON_CODE = 0x00abcdef;
  
  private static void doShrink(Image image, int xs, int ys) {
    image.startPixelCalls();
    int w = image.width();
    int h = image.height();
    for (int x = 0; x < w; x++) {
      for (int y = 0; y < h; y++) {
        if (Pixels.isOn(image.pixel(x, y))) {
          boolean keep = 
              wasOn(image, x - xs, y - ys) &&
              wasOn(image, x - xs, y + ys) &&
              wasOn(image, x + xs, y - ys) &&
              wasOn(image, x + xs, y + ys);
          if (!keep) {
            image.setPixel(x, y, MASK_WAS_ON_CODE);
          }
        }
      }
    }
    image.commitPixels();
    // No endPixelCalls() - this is freed up in Mask constructor.
  }
  
  private static boolean wasOn(Image image, int x, int y) {
    if (x < 0 || x >= image.width() || y < 0 || y >= image.height()) return false;
    int pixel = image.pixel(x, y);
    return Pixels.isOn(pixel) || (pixel == MASK_WAS_ON_CODE);
  }
}
      
  

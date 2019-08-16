package frodo.core;

import static frodo.core.PixelConstants.*;

public class Mask extends Bounds {
  public final Image image;
  public Bounds leftEdge = new Bounds();
  public Bounds rightEdge = new Bounds();
  public Bounds topEdge = new Bounds();
  public Bounds bottomEdge = new Bounds();
  
  public Mask(Image image) {
    this.image = image;
    int w = image.width();
    int h = image.height();
    // TODO: fix
    //for (int x = 0; x < w; x += X_STEP) {
      //for (int y = 0; y < h; y += Y_STEP) {
        //if (Toolkit.isPixelOn(image, x, y)) {
          //this.update(x, y, Toolkit.isPixelWhite(image, x, y));
        //}
      //}
    //}
  }

  public void update(int x, int y, boolean updateEdges) {
    if (updateEdges) {
      this.update(x, y);
    } else {
      super.update(x, y);
    }
  }  

  public void update(int x, int y) {
    if (x == left) leftEdge.update(x, y);
    else if (x < left) leftEdge.reset(x, y);
    if (x == right) rightEdge.update(x, y);
    else if (x > right) rightEdge.reset(x, y);
    if (y == top) topEdge.update(x, y);
    else if (y < top) topEdge.reset(x, y);
    if (y == bottom) bottomEdge.update(x, y);
    else if (y > bottom) bottomEdge.reset(x, y);
    super.update(x, y);
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
  
  public int pixel(int x, int y) {
    return image.pixel(x, y);
  }

  public String toString() {
    return "MaskBounds(" + super.toString()
     + "\n  leftEdge=" + leftEdge.toString()
     + "\n  rightEdge=" + rightEdge.toString()
     + "\n  topEdge=" + topEdge.toString()
     + "\n  bottomEdge=" + bottomEdge.toString() + ")";
  }
}
      
  

package frodo.core;

import playn.core.Image;

public class ZImage {

  public final Image image;
  private Image zoomed;

  public ZImage(Image image) {
    this.image = image;
  }

  public Image zoomed() {
    if (zoomed == null) {
      zoomed = Toolkit.zoom(image);
    }
    return zoomed;
  }

  public int width() {
    return (int) image.width();
  }

  public int height() {
    return (int) image.height();
  }
}

package frodo.core;

import static frodo.core.PixelConstants.FONT_SIZE;
import static frodo.core.PixelConstants.ZOOM;


public class Surface implements DrawImage {
  public final playn.core.Surface raw;
  public float clipFactor = 1;

  public Surface(playn.core.Surface raw) {
    this.raw = raw;
  }
  
  public void begin() { raw.begin(); }
  public void end() { raw.end(); }
  public void saveTx() { raw.saveTx(); }
  public void restoreTx() { raw.restoreTx(); }
  
  public void clear(float r, float g, float b, float a) {
    raw.clear(r, g, b, a);
  }
  
  public void scale(int x, int y) {
    raw.scale(x, y);
  }

  public void translate(int x, int y) {
    raw.translate(x, y);
  }

  public void startClipped(int x, int y, int w, int h) {
    raw.startClipped(
        (int) (x * clipFactor * ZOOM),
        (int) (y * clipFactor * ZOOM),
        (int) (w * clipFactor * ZOOM),
        (int) (h * clipFactor * ZOOM));
  }

  public void endClipped() {
    raw.endClipped();
  }

  public void draw(Image image, int x, int y) {
    Platform.INSTANCE.pixelate();
    raw.draw(image.raw.texture(), x, y);
    Platform.INSTANCE.pixelate();
  }
  
  public void fillRect(int x, int y, int w, int h, int color) {
    raw.setFillColor(color);
    Platform.INSTANCE.pixelate();
    raw.fillRect(x, y, w, h);
    Platform.INSTANCE.pixelate();
  }
}



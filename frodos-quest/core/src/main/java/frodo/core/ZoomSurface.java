package frodo.core;

import static frodo.core.PixelConstants.FONT_SIZE;
import static frodo.core.PixelConstants.ZOOM;

import playn.core.Image;
import playn.core.Surface;

public class ZoomSurface {

  public Surface surface;
  public float scaleFactor = 1;

  public ZoomSurface(Surface surface) {
    this.surface = surface;
  }

  public void translate(int x, int y) {
    surface.translate(x * ZOOM, y * ZOOM);
  }

  public void startClipped(int x, int y, int w, int h) {
    surface.startClipped(
        (int) (x * ZOOM * scaleFactor),
        (int) (y * ZOOM * scaleFactor),
        (int) (w * ZOOM * scaleFactor),
        (int) (h * ZOOM * scaleFactor));
  }

  public void endClipped() {
    surface.endClipped();
  }

  public void draw(Image image, int x, int y) {
    if (image != null) {
      surface.draw(image.texture(), x * ZOOM, y * ZOOM);
    }
  }

  public void drawImage(ZImage image, int x, int y) {
    if (image != null) {
      draw(image.zoomed(), x, y);
    }
  }

  public void drawText(ZImage[] font, CharSequence text, int x, int y) {
    for (int i = 0; i < text.length(); i++) {
      char c = text.charAt(i);
      int index = (int) (c - ' ');
      if (index >= 0 && index < font.length) {
        drawImage(font[index], x, y);
        x += FONT_SIZE;
      }
    }
  }

  public void drawTextWithNewLines(ZImage[] font, CharSequence text, int x, int y) {
    // TODO: handle newlines
    CharSequence[] lines = new CharSequence[] {text}; //text.split("\n");
    for (CharSequence line : lines) {
      drawText(font, line, x, y);
      y += FONT_SIZE;
    }
  }

  public void drawCenteredText(ZImage[] font, CharSequence text, int x, int y) {
    drawText(font, text, x - (text.length() * FONT_SIZE / 2), y - (FONT_SIZE / 2));
  }

  public void fillRect(float x, float y, float w, float h, int color) {
    surface.setFillColor(color);
    surface.fillRect(ZOOM * x, ZOOM * y, ZOOM * w, ZOOM * h);
  }
}



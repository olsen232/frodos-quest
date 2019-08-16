package frodo.core;

import static frodo.core.PixelConstants.FONT_SIZE;

public class Surface {

  public playn.core.Surface raw;

  public Surface(playn.core.Surface raw) {
    this.raw = raw;
  }
  
  public void clear(float r, float g, float b, float a) {
    raw.clear(r, g, b, a);
  }

  public void translate(int x, int y) {
    raw.translate(x, y);
  }

  public void startClipped(int x, int y, int w, int h) {
    raw.startClipped(x, y, w, h);
  }

  public void endClipped() {
    raw.endClipped();
  }

  public void draw(Image image, int x, int y) {
    raw.draw(image.raw.texture(), x, y);
  }

  public void drawText(Image[] font, CharSequence text, int x, int y) {
    for (int i = 0; i < text.length(); i++) {
      char c = text.charAt(i);
      int index = (int) (c - ' ');
      if (index >= 0 && index < font.length) {
        draw(font[index], x, y);
        x += FONT_SIZE;
      }
    }
  }

  public void drawTextWithNewLines(Image[] font, CharSequence text, int x, int y) {
    // TODO: handle newlines
    CharSequence[] lines = new CharSequence[] {text}; //text.split("\n");
    for (CharSequence line : lines) {
      drawText(font, line, x, y);
      y += FONT_SIZE;
    }
  }

  public void drawCenteredText(Image[] font, CharSequence text, int x, int y) {
    drawText(font, text, x - (text.length() * FONT_SIZE / 2), y - (FONT_SIZE / 2));
  }

  public void fillRect(float x, float y, float w, float h, int color) {
    raw.setFillColor(color);
    raw.fillRect(x, y, w, h);
  }
}



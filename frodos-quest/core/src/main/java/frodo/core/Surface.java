package frodo.core;

import static frodo.core.PixelConstants.FONT_SIZE;

public class Surface {
  public final playn.core.Surface raw;

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
    raw.startClipped(x, y, w, h);
  }

  public void endClipped() {
    raw.endClipped();
  }

  public void draw(Image image, int x, int y) {
    Platform.INSTANCE.pixelator.pixelate();
    raw.draw(image.raw.texture(), x, y);
    Platform.INSTANCE.pixelator.pixelate();
  }
  
  public void drawChar(Image[] font, char c, int x, int y) {
    int index = (int) (c - ' ');
    if (index >= 0 && index < font.length) {
      draw(font[index], x, y);
    }
  }  

  public void drawText(Image[] font, CharSequence text, int sx, int sy) {
    int x = sx;
    for (int i = 0; i < text.length(); i++) {
      drawChar(font, text.charAt(i), x, sy);
      x += FONT_SIZE;
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
}



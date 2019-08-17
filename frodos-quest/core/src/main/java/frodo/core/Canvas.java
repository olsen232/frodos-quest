package frodo.core;

import static frodo.core.PixelConstants.*;

public class Canvas {
  public final playn.core.Canvas raw;
  public final Image image;
  
  public Canvas(playn.core.Canvas raw) {
    this.raw = raw;
    this.image = new Image(raw.image);
  }
  
  public void clear() { raw.clear(); }
  
  public void draw(Image image, float x, float y) {
    raw.draw(image.raw, x, y);
  }
  
  public void fillRect(int x, int y, int w, int h, int color) {
    raw.setFillColor(color);
    raw.fillRect(x, y, w, h);
  }
  
  public void fillRectPlusBorder(int x, int y, int w, int h, int color, int b) {
    int b2 = 2 * b;
    fillRect(x - b, y - b, w + b2, h + b2, color);
  }
  
  public void strokeRect(int x, int y, int w, int h, int color) {
    raw.setFillColor(color);
    raw.fillRect(x, y, w, 1);
    raw.fillRect(x, y + h - 1, w, 1);
    raw.fillRect(x, y, 2, h);
    raw.fillRect(x + w - 2, y, 2, h);
  }
  
  public void strokeRectPlusBorder(int x, int y, int w, int h, int color, int b) {
    int b2 = 2 * b;
    strokeRect(x - b, y - b, w + b2, h + b2, color);
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

  public void drawTextWithNewLines(Image[] font, CharSequence text, int sx, int sy) {
    int x = sx, y = sy;
    for (int i = 0; i < text.length(); i++) {
      drawChar(font, text.charAt(i), x, y);
      if (text.charAt(i) == '\n') {
        x = sx;
        y += TEXT_LINE_HEIGHT;
      }
    }
  }

  public void drawCenteredText(Image[] font, CharSequence text, int x, int y) {
    drawText(font, text, x - (text.length() * FONT_SIZE / 2), y - (FONT_SIZE / 2));
  }
  
  public void drawTextJustified(Image[] font, CharSequence text, int sx, int sy, int length) {
    int x = sx;
    int spaces = Math.max(CharSequences.countChars(text, ' '), 1);
    int spaceSize = FONT_SIZE + (length - text.length()) * FONT_SIZE / spaces;
    spaceSize = Math.min(spaceSize, FONT_SIZE * 3 / 2);
    for (int i = 0; i < text.length(); i++) {
      char c = text.charAt(i);
      drawChar(font, c, x, sy);
      x += (c == ' ') ? spaceSize : FONT_SIZE;
    }
  }
  
  public void drawTextJustifiedWithNewLines(Image[] font, CharSequence text, int sx, int sy, int length) {
    int y = sy;
    int start = 0;
    for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == '\n') {
        drawTextJustified(font, text.subSequence(start, i), sx, y, length);
        y += TEXT_LINE_HEIGHT;
        start = i + 1;
      }
    }
    drawTextJustified(font, text.subSequence(start, text.length()), sx, y, length);
  }
  
  public Image snapshot() {
    return new Image(raw.snapshot());
  }
}
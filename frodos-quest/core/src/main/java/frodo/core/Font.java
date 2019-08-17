package frodo.core;

import static frodo.core.PixelConstants.*;

public class Font {
  public static final int GREY_ARGB = 0xffaaaaaa;
  public static final int BLACK_ARGB = 0xff000000;

  public static Image RAW;
  
  public static Font WHITE;
  public static Font GREY;
  public static Font BLACK;

  public static void startLoading() {
    RAW = Image.load("widefont.png");
  }

  public static void finishLoading() {
    WHITE = new Font(RAW.tile(FONT_SIZE));
    GREY =  new Font(RAW.recolor(GREY_ARGB).tile(FONT_SIZE));
    BLACK = new Font(RAW.recolor(BLACK_ARGB).tile(FONT_SIZE));
  }
  
  public final Image[] images;

  public Font(Image[] images) {
    this.images = images;
  }
  
  public void drawChar(DrawImage target, char c, int x, int y) {
    int index = (int) (c - ' ');
    if (index >= 0 && index < images.length) {
      target.draw(images[index], x, y);
    }
  }
  
  public void singleLine(DrawImage target, CharSequence text, int sx, int sy) {
    int x = sx;
    for (int i = 0; i < text.length(); i++) {
      drawChar(target, text.charAt(i), x, sy);
      x += FONT_SIZE;
    }
  }

  public void leftAligned(DrawImage target, CharSequence text, int sx, int sy) {
    int x = sx, y = sy;
    for (int i = 0; i < text.length(); i++) {
      drawChar(target, text.charAt(i), x, y);
      if (text.charAt(i) == '\n') {
        x = sx;
        y += TEXT_LINE_HEIGHT;
      }
    }
  }

  public void centeredSingleLine(DrawImage target, CharSequence text, int x, int y) {
    singleLine(target, text, x - (text.length() * FONT_SIZE / 2), y - (FONT_SIZE / 2));
  }
  
  public void justifiedSingleLine(DrawImage target, CharSequence text, int sx, int sy, int length) {
    int x = sx;
    int spaces = Math.max(CharSequences.countChars(text, ' '), 1);
    int spaceSize = FONT_SIZE + (length - text.length()) * FONT_SIZE / spaces;
    spaceSize = Math.min(spaceSize, FONT_SIZE * 3 / 2);
    for (int i = 0; i < text.length(); i++) {
      char c = text.charAt(i);
      drawChar(target, c, x, sy);
      x += (c == ' ') ? spaceSize : FONT_SIZE;
    }
  }
  
  public void justified(DrawImage target, CharSequence text, int sx, int sy, int length) {
    int y = sy;
    int start = 0;
    for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == '\n') {
        justifiedSingleLine(target, text.subSequence(start, i), sx, y, length);
        y += TEXT_LINE_HEIGHT;
        start = i + 1;
      }
    }
    justifiedSingleLine(target, text.subSequence(start, text.length()), sx, y, length);
  }
}

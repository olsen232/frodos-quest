package frodo.core;

import static frodo.core.PixelConstants.*;

public final class Font {
  private Font() {}

  public static final int GREY_ARGB = 0xffaaaaaa;
  public static final int BLACK_ARGB = 0xff000000;

  public static Image RAW;
  public static Image[] WHITE;
  public static Image[] GREY;
  public static Image[] BLACK;

  public static void startLoading() {
    RAW = Image.load("widefont.png");
  }

  public static void finishLoading() {
    WHITE = RAW.tile(FONT_SIZE);
    GREY = RAW.recolor(GREY_ARGB).tile(FONT_SIZE);
    BLACK = RAW.recolor(BLACK_ARGB).tile(FONT_SIZE);;
  }
}

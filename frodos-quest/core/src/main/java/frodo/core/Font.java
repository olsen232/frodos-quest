package frodo.core;

import static frodo.core.PixelConstants.*;

import playn.core.Image;
import playn.core.Texture;
import playn.core.Platform;

public final class Font {
  private Font() {}

  public static final int BLACK = 0xff000000;

  public static ZImage[] WHITE_FONT;
  public static ZImage[] BLACK_FONT;

  public static void start() {
    Toolkit.start("widefont.png");
  }

  public static void loadFont() {
    ZImage rawFont = Toolkit.getZImage("widefont.png");
    WHITE_FONT = Toolkit.tile(rawFont, FONT_SIZE);
    BLACK_FONT = Toolkit.tile(Toolkit.recolor(rawFont, BLACK), FONT_SIZE);
  }
}

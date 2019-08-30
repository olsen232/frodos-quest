package frodo.core;

import static frodo.core.PixelConstants.*;

public class TextDisplay {

  public static final int BOX_OUTER_COLOR = 0xffffffff;
  public static final int BOX_INNER_COLOR = 0xffff0000;

  Canvas canvas = Platform.INSTANCE.createCanvas(TEXT_WIDTH_PX, TEXT_HEIGHT_PX);
  Image snapshot = null;
  
  public void draw(Surface surface) {
    if (snapshot != null) {
      surface.draw(snapshot, TEXT_X, TEXT_Y);
    }
  }
  
  public void clear() {
    snapshot = null;
  }

  public void render(String text) {    
    StringBuilder sb = new StringBuilder(text.trim());
    int width = 0;
    int maxWidth = 0;
    int maxHeight = 0;
    outer:
    for (int i = 0; i < sb.length(); i++) {
      if (sb.charAt(i) == '\n') {
        maxWidth = Math.max(maxWidth, width);
        maxHeight++;
        width = 0; continue;
      }
      width++;
      if (width >= TEXT_WIDTH_CHARS) {
        for ( ; width >= 0; width--, i--) {
          if (sb.charAt(i) == ' ') {
            sb.setCharAt(i, '\n');
            maxWidth = Math.max(maxWidth, width);
            maxHeight++;
            width = 0;
            continue outer;
          }
        }
        throw new IllegalStateException("Cannot layout text - too few spaces:\n" + text);
      }
    }
    maxWidth = Math.max(maxWidth, width);
    maxHeight++;
    width = 0;
    
    int maxWidthPx = maxWidth * FONT_SIZE;
    int maxHeightPx = maxHeight * (TEXT_LINE_HEIGHT) - (TEXT_LINE_HEIGHT - FONT_SIZE);
    int x = (TEXT_WIDTH_PX - maxWidthPx) / 2;
    int y = (TEXT_HEIGHT_PX - maxHeightPx) / 2;

    canvas.clear();    
    canvas.fillRectPlusBorder(x, y, maxWidthPx, maxHeightPx, BOX_OUTER_COLOR, BOX_OUTER_BORDER);
    canvas.strokeRectPlusBorder(x, y, maxWidthPx, maxHeightPx, BOX_INNER_COLOR, BOX_INNER_BORDER);
    Font.BLACK.justified(canvas, sb, x, y, maxWidth);
    snapshot = canvas.snapshot();
    // TODO: try and reuse canvas.
    canvas = Platform.INSTANCE.createCanvas(TEXT_WIDTH_PX, TEXT_HEIGHT_PX);
  }
}

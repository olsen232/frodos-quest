package frodo.core;

import static frodo.core.PixelConstants.*;

import playn.core.Canvas;

public class TextDisplay {

  Canvas canvas = Platform.INSTANCE.createRawCanvas(TEXT_WIDTH_PX, TEXT_HEIGHT_PX);
  
  public void draw(Surface surface) {
    //canvas.draw(canvas.image(), TEXT_X, TEXT_Y);
  }
  
  public void clear() {
    // TODO:clear
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
    int maxHeightPx = maxHeight * (FONT_SIZE + TP) - TP;
    int x = (TEXT_WIDTH_PX - maxWidthPx) / 2;
    int y = (TEXT_HEIGHT_PX - maxHeightPx) / 2;

    clear();    

    // TODO: canvas

    //canvas.g2d.setColor(java.awt.Color.WHITE);
    //canvas.fillRect(x, y, maxWidthPx, maxHeightPx, WHITE_BORDER);
    //canvas.g2d.setColor(java.awt.Color.RED);
    //canvas.drawRect(x, y, maxWidthPx, maxHeightPx, RED_BORDER);
    //canvas.drawTextJustifiedWithNewLines(Font.BLACK, sb.toString(), x, y, TP, maxWidth);
  }
}

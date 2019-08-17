package frodo.core;

public final class PixelConstants {
  private PixelConstants() {}
  
  public static int FRAME_RATE = 30;
  public static int FRAME_MS = 1000 / FRAME_RATE;

  public static final int ZOOM = 3;
  
  public static final int SCENE_X_ZOOM = 2;
  public static final int SCENE_Y_ZOOM = 1;

  public static final int X_STEP = SCENE_X_ZOOM;
  public static final int Y_STEP = SCENE_Y_ZOOM;
    
  public static final int SCREEN_WIDTH = 320;
  public static final int SCREEN_HEIGHT = 224;

  public static final int SCENE_WIDTH = 320;
  public static final int SCENE_HEIGHT = 200;

  public static final int FONT_SIZE = 8;
  
  public static final int HEADER_Y = 12;
  public static final int PROMPT_Y = SCREEN_HEIGHT - 10;
    
  public static final int TEXT_WIDTH_CHARS = SCREEN_WIDTH * 3/4 / FONT_SIZE;
  public static final int TEXT_WIDTH_PX = (TEXT_WIDTH_CHARS + 2) * FONT_SIZE;
  
  public static final int TEXT_HEIGHT_CHARS = SCREEN_HEIGHT * 3/4 / FONT_SIZE;
  public static final int TEXT_HEIGHT_PX = (TEXT_HEIGHT_CHARS + 2) * FONT_SIZE;
  
  public static final int TEXT_X = (SCREEN_WIDTH - TEXT_WIDTH_PX) / 2;
  public static final int TEXT_Y = (SCREEN_HEIGHT - TEXT_HEIGHT_PX) / 2;
  public static final int TEXT_LINE_HEIGHT = 10;
  
  public static final int BOX_OUTER_BORDER = 8;
  public static final int BOX_INNER_BORDER = 6;
  
  public static final int MAX_PROMPT_CHARS = SCREEN_WIDTH / FONT_SIZE - 2;
}

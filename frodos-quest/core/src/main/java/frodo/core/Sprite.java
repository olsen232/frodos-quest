package frodo.core;

import static frodo.core.Direction.NUM_DIRECTIONS;
import static frodo.core.PixelConstants.*;

public abstract class Sprite {
  public Image[] images;
  public Image image;

  public int x = SCENE_WIDTH / 2;
  public int y = SCENE_HEIGHT * 2/3;
  public boolean visible = false;
  
  protected int imageFrame = 0;
  protected int framesPerImage = 4;

  protected int moveFrame = 0;
  protected int framesPerMove = 1;
    
  public void update(State state) {}

  public abstract void move(Scene scene);

  protected boolean doMove() {
    return (moveFrame++) % framesPerMove == 0;
  }
  
  public void init(Image[] images) {
    this.images = images;
    this.image = images[0];
  }
    
  public void draw(Surface surface, int frame) {
    if (!visible) return;
    drawSpriteImage(surface, image, x, y);
  }

  public static void drawSpriteImage(Surface surface, Image image, int x, int y) {
    surface.draw(image, x - (image.width() / 2), y - image.height() + 2);
  }
  
  protected Image image(Direction d, int frame) {
    int numFrames = images.length / NUM_DIRECTIONS;
    return images[d.ordinal() * numFrames + (frame % numFrames)];
  }
  
  protected boolean moveAndAnimate(Mask mask, Direction d) {
    if (move(mask, d.dx, d.dy)) {
      animate(d);
      return true;
    }
    return false;
  }
  
  protected boolean move(Mask mask, int dx, int dy) {
    if (dx == 0 && dy == 0) return false;
    int newX = x + dx;
    int newY = y + dy;
    if (mask != null) {
      if (!mask.contains(newX, newY)) return false;
      if (!canGo(mask, newX, newY) && canGo(mask, x, y)) return false;
    }
    x = newX;
    y = newY;
    return true;
  }
  
  protected void animate(Direction d) {
    imageFrame += 1;
    image = image(d, imageFrame / framesPerImage);
  }
  
  protected boolean canGo(Mask mask, int px, int py) {
    return Pixels.isOn(mask.pixelOnce(px, py));
  }
    
  public boolean isCloseTo(Sprite that, int px) {
    return that.visible
        && Math.abs(that.x - this.x) <= (px * SCENE_X_ZOOM)
        && Math.abs(that.y - this.y) <= (px * SCENE_Y_ZOOM);
  }

  public void ensureInBounds(Scene scene) {
    if (!scene.mask.contains(x, y)) {
      Bounds entrance = scene.mask.getEdge(Direction.DOWN);
      this.x = entrance.midX();
      this.y = entrance.midY();
    }
  }
}

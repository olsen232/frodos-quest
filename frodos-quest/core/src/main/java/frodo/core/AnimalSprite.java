package frodo.core;

import static frodo.core.PixelConstants.*;

public class AnimalSprite extends Sprite {

  protected int wanderFrame = 0;
  protected int framesPerWander = 20;
  
  protected Direction imageDirection = Direction.DOWN;
  protected int dx;
  protected int dy;

  {
    framesPerMove = 2;
  }

  @Override
  public void update(State state) {
    this.visible = state.at(Location.WEST_FIELD);
  }
  
  @Override
  public void move(Scene scene) {
    if (doWander() || (stopped() && isAngry())) {
      wander();
    }

    if (doMove() && move(scene.mask, dx, dy) || isAngry()) {
      animate(imageDirection);
    }
  }
  
  protected boolean stopped() {
    return dx == 0 && dy == 0;
  }
  
  protected boolean doWander() {
    return (wanderFrame++) % framesPerWander == 0;
  }
  
  protected void wander() {
    dx = isAngry() ? fastRand(STEP_PX) : slowRand(STEP_PX);
    dy = slowRand(STEP_PX);
    if (isFollowing()) doFollow();
    if (!stopped()) imageDirection = imageDirection(dx, dy, imageDirection);
  }

  protected void doFollow() {
    if (Math.signum(dx) == Math.signum(x - Sprites.FRODO.x)) dx = 0;
    if (Math.signum(dy) == Math.signum(y - Sprites.FRODO.y)) dy = 0;
  }
  
  protected Direction imageDirection(int dx, int dy, Direction prevDirection) {
    return Direction.approximate(dx, dy);
  }

  protected boolean isFollowing() {
    return Sprites.animalsFollowing();
  }
  
  protected boolean isAngry() {
    return false;
  }
  
  @Override
  protected Image image(Direction d, int frame) {
    int numFrames = images.length / Direction.NUM_DIRECTIONS;
    return images[d.ordinal() * numFrames + (frame % numFrames)];
  }
  
  @Override
  protected boolean canGo(Mask mask, int px, int py) {
    return Pixels.isNonWhite(mask.pixelOnce(px, py));
  }
  
  protected int fastRand(int step) {
    int result = (int) (2 * Math.random()); // 0, 1
    if (result == 0) result = -1;  // -1, 1
    return result * step;
  }
  
  protected int slowRand(int step) {
    int result = (int) (4 * Math.random()); // 0, 1, 2, 3
    if (result > 1) result -= 3;  // -1, 0, 0, 1;
    return result * step;
  }
}

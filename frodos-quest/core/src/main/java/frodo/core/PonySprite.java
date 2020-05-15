package frodo.core;

import java.util.Arrays;

import static frodo.core.PixelConstants.*;

public class PonySprite extends AnimalSprite {

  static int FOLLOW_DISTANCE = 20;

  private int ponyMeal = 0;
  private Location prevLocation = null;

  private int f = 0;
  private int[] followX = new int[FOLLOW_DISTANCE];
  private int[] followY = new int[FOLLOW_DISTANCE];
  private boolean hide = false;

  @Override
  public void update(State state) {
    super.update(state);
    this.ponyMeal = state.ponyMeal;
    if (state.location != prevLocation) {
      prevLocation = state.location;
      Arrays.fill(followX, -1);
      Arrays.fill(followY, -1);
    }
  }

  protected boolean isFollowing() {
    return this.ponyMeal >= 1;
  }

  protected boolean isFollowingClosely() {
    return this.ponyMeal >= 2;
  }

  @Override
  public void move(Scene scene) {
    int fx = Sprites.FRODO.x;
    int fy = Sprites.FRODO.y;
    if (followX[f] != fx || followY[f] != fy) {
      f = (f + 1) % FOLLOW_DISTANCE;
      followX[f] = fx;
      followY[f] = fy;
    }

    if (isFollowingClosely()) {
      followClosely();
    } else {
      super.move(scene);
    }
  }

  protected void followClosely() {
    int ff = (f + 1) % FOLLOW_DISTANCE;
    int fx = followX[ff];
    int fy = followY[ff];
    if (fx == -1 && fy == -1) {
      hide = true;
    } else if (hide == true) {
      x = fx;
      y = fy;
      hide = false;
    } else if (fx != x || fy != y) {
      int dx = (int) Math.signum(fx - x);
      int dy = (int) Math.signum(fy - y);
      move(null, dx, dy);
      imageDirection = imageDirection(dx, dy, imageDirection);
      animate(imageDirection);
    }
  }

  @Override
  public void draw(Surface surface, int frame) {
    if (!hide) super.draw(surface, frame);
  }
}

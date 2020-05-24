package frodo.core;

import java.util.Arrays;

import static frodo.core.PixelConstants.*;

public class PonySprite extends AnimalSprite {

  protected int followDistance() {
    return 20;
  }

  protected int ponyMeal = 0;
  protected Location prevLocation = null;

  protected int f = 0;
  protected int[] followX = new int[followDistance()];
  protected int[] followY = new int[followDistance()];
  protected boolean hide = false;

  @Override
  public void update(State state) {
    super.update(state);
    if (state.location != prevLocation) {
      if (Location.isInside(state.location) && state.ponyMeal > 0) {
        if (state.deliveredBarrel || !state.hitchedBarrel) {
          resetToField(state);
        }
      }
      prevLocation = state.location;
      Arrays.fill(followX, -1);
      Arrays.fill(followY, -1);
    }
    this.ponyMeal = state.ponyMeal;
  }

  protected void resetToField(State state) {
    state.ponyMeal = 0;
    x = SCENE_WIDTH / 2;
    y = SCENE_HEIGHT / 2;
  }

  protected boolean isFollowing() {
    return this.ponyMeal >= 1;
  }

  protected boolean isFollowingClosely() {
    return this.ponyMeal >= 2;
  }

  @Override
  public void move(Scene scene) {
    storeFollowData();

    if (isFollowingClosely()) {
      followClosely();
    } else {
      super.move(scene);
    }
  }

  protected void storeFollowData() {
    int fx = Sprites.FRODO.x;
    int fy = Sprites.FRODO.y;
    if (followX[f] != fx || followY[f] != fy) {
      f = (f + 1) % followDistance();
      followX[f] = fx;
      followY[f] = fy;
    }
  }

  protected void followClosely() {
    int ff = (f + 1) % followDistance();
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

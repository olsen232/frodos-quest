package frodo.core;

import java.util.Arrays;

import static frodo.core.PixelConstants.*;

public class PonySprite extends AnimalSprite {

  protected int followDistance() {
    return 20;
  }

  {
    x = SCENE_WIDTH / 2;
    y = SCENE_HEIGHT * 3 / 4;
  }

  protected int ponyMeal = 0;
  protected Location prevLocation = null;

  protected int f = 0;
  protected int[] followX = new int[followDistance()];
  protected int[] followY = new int[followDistance()];
  protected boolean hide = false;

  @Override
  public void update(State state) {
    if (maybeChangeLocation(state.location)) {
      if (state.isInside() && state.ponyMeal > 0 && !state.at(Progress.HITCHED_BARREL)) {
        resetToField(state);
      }
    }

    boolean wasFollowingClosely = isFollowingClosely();
    this.ponyMeal = state.ponyMeal;

    if (isFollowingClosely() && !wasFollowingClosely) {
      for (int i = 0; i < followDistance(); i++) {
        if (followX[i] == 0 && followY[i] == 0) {
          followX[i] = Sprites.FRODO.x;
          followY[i] = Sprites.FRODO.y;
        }
      }
    }
    this.visible = state.at(Location.EAST_FIELD)
        || (this.isFollowingClosely() && !state.isInside());
  }

  protected boolean maybeChangeLocation(Location location) {
    if (location != prevLocation) {
      prevLocation = location;
      if (isFollowingClosely()) {
        Arrays.fill(followX, 0);
        Arrays.fill(followY, 0);
      }
      return true;
    }
    return false;
  }

  protected void resetToField(State state) {
    state.ponyMeal = 0;
    x = SCENE_WIDTH / 2;
    y = SCENE_HEIGHT * 3 / 4;
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
    if (fx == 0 && fy == 0) {
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
    if (isFollowingClosely() && hide) return;
    super.draw(surface, frame);
  }
}

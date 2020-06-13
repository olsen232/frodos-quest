package frodo.core;

import static frodo.core.PixelConstants.*;
import frodo.core.Events.DisplayTextEvent;

import java.util.Arrays;

public class CartSprite extends PonySprite {

  private boolean ponyFollowing;
  private boolean isHitched;

  {
    x = SCENE_WIDTH / 3;
    y = SCENE_HEIGHT * 7 / 12;
  }

  @Override
  public void update(State state) {
    maybeChangeLocation(state.location);
    this.ponyFollowing = state.ponyMeal >= 2;
    this.isHitched = state.hitchedBarrel && !state.deliveredBarrel;
  }
    
  @Override
  protected int followDistance() {
    return 34;
  }

  @Override
  public void move(Scene scene) {
    storeFollowData();

    if (isFollowingClosely()) {
      followClosely();
    } else {
      image = images[0];
    }

    if (!isHitched && ponyFollowing && isCloseTo(Sprites.FRODO, 10)) {
      FrodosQuest.state.hitchBarrel();
      this.isHitched = true;
    }
  }

  protected boolean isFollowingClosely() {
    return isHitched;
  }

  @Override
  protected Image image(Direction d, int frame) {
    int numFrames = images.length / 2;
    int dValue = d.isVertical() ? 1 : 0;
    return images[dValue * numFrames + (frame % numFrames)];
  }
}
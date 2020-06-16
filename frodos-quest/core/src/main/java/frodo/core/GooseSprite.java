package frodo.core;

import static frodo.core.PixelConstants.*;

public class GooseSprite extends SidewaysAnimalSprite {

  {
    x = SCENE_WIDTH / 3;
    y = SCENE_HEIGHT * 3/4;
  }

  @Override
  public void update(State state) {
    this.visible = state.at(Location.TREE_BY_LAKE);
  }

  @Override
  protected Image image(Direction d, int frame) {
    if (!d.isHorizontal()) throw new IllegalArgumentException();
    int numFrames = images.length / Direction.NUM_HORIZONTAL_DIRECTIONS;
    int numUsableFrames = numFrames - 1;
    int offset = isAngry() ? 1 : 0;
    return images[d.ordinal() * numFrames + (frame % numUsableFrames) + offset];
  }
  
  @Override
  protected boolean isAngry() {
    return isCloseTo(Sprites.FRODO, 10);
  }

  @Override
  protected boolean isFollowing() {
    return false;
  }
}

package frodo.core;

public class GooseSprite extends SidewaysAnimalSprite {

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
}

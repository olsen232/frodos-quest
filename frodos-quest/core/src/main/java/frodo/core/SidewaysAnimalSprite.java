package frodo.core;

public abstract class SidewaysAnimalSprite extends AnimalSprite {

  { imageDirection = Direction.RIGHT; }

  @Override
  protected Image image(Direction d, int frame) {
    if (!d.isHorizontal()) throw new IllegalArgumentException();
    int numFrames = images.length / Direction.NUM_HORIZONTAL_DIRECTIONS;
    return images[d.ordinal() * numFrames + (frame % numFrames)];
  }
  
  @Override
  protected Direction imageDirection(int dx, int dy, Direction prevDirection) {
    Direction newDirection = Direction.approximate(dx, dy);
    return newDirection.isHorizontal() ? newDirection : prevDirection;
  } 
}

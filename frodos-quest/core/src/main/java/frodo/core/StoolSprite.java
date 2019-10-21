package frodo.core;

import static frodo.core.PixelConstants.*;

public class StoolSprite extends StaticSprite {

  private Image indoorImage;
  private Image outdoorImage;
  
  public void init(Image[] sizes) {
    this.indoorImage = sizes[0];
    this.outdoorImage = sizes[1];
    place(Location.BAGEND_KITCHEN);
  }
  
  public void update(State state) {
    place(state.location);
  }
  
  public void draw(Surface surface, int frame) {
    super.draw(surface, frame);
    if (visible && Sprites.FRODO.isStandingOnStool()) {
      Sprites.FRODO.draw(surface, frame);
    }
  }
  
  public void place(Location location) {
    switch (location) {
      case BAGEND_KITCHEN:
        x = SCENE_WIDTH / 3;
        y = SCENE_HEIGHT * 2/3;
        break;
      case APPLE_TREE_FIELD:
        x = SCENE_WIDTH * 4/10;
        y = SCENE_HEIGHT * 5/6;
        break;
      default:
    }
    image = Scene.isOutside(Scene.forLocation(location)) ? outdoorImage : indoorImage;
  }  
}
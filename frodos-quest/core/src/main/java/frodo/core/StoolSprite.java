package frodo.core;

import static frodo.core.PixelConstants.*;

public class StoolSprite extends StaticSprite {

  private Image insideImage;
  private Image outsideImage;
  
  private int height;
  private int radius;
  
  public int height() {
    return height;
  }
  
  public int radius() {
    return radius;
  }
  
  public void init(Image[] sizes) {
    this.insideImage = sizes[0];
    this.outsideImage = sizes[1];
    place(Location.BAGEND_KITCHEN);
  }
  
  public void update(State state) {
    this.visible = state.location == state.stoolLocation;
    place(state.location);
  }
  
  public void draw(Surface surface, int frame) {
    super.draw(surface, frame);
    if (visible && Sprites.FRODO.isStandingOnStool()) {
      Sprites.FRODO.draw(surface, frame);
    }
  }
  
  public void place(Location location) {    
    if (Location.isInside(location)) {
      image = insideImage;
      height = 20;
      radius = 4;
    } else {
      image = outsideImage;
      height = 8;
      radius = 3;
    }
    
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
  }  
}
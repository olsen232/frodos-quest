package frodo.core;

import static frodo.core.Direction.NUM_DIRECTIONS;
import static frodo.core.PixelConstants.*;

public class StaticSprite extends Sprite {
  
  public StaticSprite() {}
  
  public StaticSprite(int x, int y) {
    this.x = x;
    this.y = y;
  }
    
  public void update(State state) {}

  public void move(Scene scene) {}
  
  public void init(Image image) {
    this.image = image;
    this.images = new Image[] { image };
  }
}

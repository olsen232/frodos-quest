package frodo.core;

import static frodo.core.PixelConstants.SCREEN_HEIGHT;

public class FrodoSprite extends Sprite {

  public final ControlState controlState = new ControlState();
  public boolean touchingSpecial;

  private Direction prevDirection = Direction.DOWN;
  
  private int drunkenness = 0;
  private int staggerTimer = 0;  
  private boolean standingOnStool = false;
  
  @Override
  public void move(Scene scene) {
    drunkenness--;
    Direction direction = (controlState != null) ? controlState.outcome() : null;
    if (direction == null) return;
    
    if (direction != prevDirection) {
      staggerTimer = 0;
      prevDirection = direction;
      animate(direction);
    }
    if (!checkPortal(x, y, scene, direction)) {
      if (!isDrunk()) {
        moveAndAnimate(scene.mask, direction);
      } else {
        moveDrunkenly(scene.mask, direction);
      }
      touchingSpecial = Pixels.isNonWhite(scene.mask.pixelOnce(x, y));
      standingOnStool = isCloseTo(Sprites.STOOL, Sprites.STOOL.radius());
    }
  }
  
  @Override
  public void draw(Surface surface, int frame) {
    int stoolHeight = Sprites.STOOL.height();
    if (standingOnStool) y -= stoolHeight;
    super.draw(surface, frame);
    if (standingOnStool) y += stoolHeight;
  }
  
  public void drinkAlcohol() {
    drunkenness = 500;
  }
  
  public boolean isDrunk() {
    return drunkenness > 0;
  }
  
  public boolean isStandingOnStool() {
    return standingOnStool;
  }
  
  protected void moveDrunkenly(Mask mask, Direction direction) {
    staggerTimer++;
    if (staggerTimer <= 10) {
      moveAndAnimate(mask, direction);
      return;
    } 
    Direction stagger = ((drunkenness + staggerTimer) % 2) == 0 ? direction.clockwise() : direction.anticlockwise();
    int dx = 0, dy = 0;
    int zig = (staggerTimer / 10) % 2, zag = 1 - zig;
    if (drunkenness <= 250) {
      dx = direction.dx + zig * stagger.dx;
      dy = direction.dy + zig * stagger.dy;
    } else if (drunkenness <= 500 || staggerTimer <= 20) {
      dx = stagger.dx + zig * direction.dx;
      dy = stagger.dy + zig * direction.dy;
    } else {        
      dx = stagger.dx + zig * -direction.dx;
      dy = stagger.dy + zig * -direction.dy;
    }
    
    if (move(mask, dx, dy)) {
      animate(direction);
    }  
  }

  private boolean checkPortal(int x, int y, Scene scene, Direction direction) {
    if (scene.mask.getEdge(direction).contains(x, y)) {
      SceneLinks.Portal p = SceneLinks.getPortal(scene, direction);
      if (p != null && FrodosQuest.changeLocation(p.scene.toLocation())) {
        Bounds entrance = p.scene.mask.getEdge(p.direction);
        this.x = entrance.midX();
        this.y = entrance.midY();
        this.image = image(p.direction.opposite(), 0);
        return true; 
      }
    }
    return false;
  }
  
  @Override
  public void init(Image[] images) {
    this.images = images;
    animate(prevDirection);
  }
  
  @Override
  public void update(State state) {
    Image[] locationImages = chooseImages(state.location);
    if (this.images != locationImages) {
      this.images = locationImages;
      animate(prevDirection);
    }
  }
  
  private static Image[] chooseImages(Location location) {
    return Location.isInside(location) 
        ? Sprites.FRODO_LARGE
        : Sprites.FRODO_SMALL;
  }
}

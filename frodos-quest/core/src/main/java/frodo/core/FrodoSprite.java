package frodo.core;

import static frodo.core.PixelConstants.SCREEN_HEIGHT;

public class FrodoSprite extends Sprite {

  protected Image[] largeTiles;
  protected Image[] smallTiles;

  public final ControlState controlState = new ControlState();
  public boolean touchingSpecial;

  protected Direction prevDirection = Direction.DOWN;
  
  protected int drunkenness = 0;
  protected int staggerTimer = 0;  
  protected boolean standingOnStool = false;
  protected boolean isInBoat = false;
  protected boolean isWearingRing = false;
  protected boolean isInside = true;

  private RingEffect ringEffect = new RingEffect();
  
  @Override
  public void move(Scene scene) {
    ringEffect.move();

    drunkenness--;
    Direction direction = (controlState != null) ? controlState.outcome() : null;
    if (direction == null || !doMove()) return;
    
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
    if (!visible || isInBoat) return;
    if (!isWearingRing || isInside) {
      drawSpriteImage(surface, image, x, drawY());
    }
    if (isWearingRing) {
      ringEffect.draw(surface, image, x, drawY());
    }
  }

  protected int drawY() {
    return (standingOnStool) ? y - Sprites.STOOL.height() : y;
  }

  protected void drawRingEffects(Surface surface, int frame) {
    // pass
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
      SceneLinks.Portal in = SceneLinks.portal(scene, direction);
      SceneLinks.Portal out = SceneLinks.getLinkedPortal(in);
      if (out != null && FrodosQuest.changeLocation(out.scene.toLocation())) {
        SceneLinks.sendThroughPortal(this, in, out);
        this.image = image(out.direction.opposite(), 0);
        return true; 
      }
    }
    return false;
  }
  
  public void init(Image[] largeTiles, Image[] smallTiles) {
    super.init(largeTiles);
    this.largeTiles = largeTiles;
    this.smallTiles = smallTiles;
    animate(prevDirection);
  }
  
  @Override
  public void update(State state) {
    this.visible = state.atOrAfter(Progress.GAME_STARTED);
    if (state.at(Progress.FRODO_IN_BOAT) && !this.isInBoat) {
      this.x = Sprites.BOAT.x;
      this.y = Sprites.BOAT.y;
    } else if (!state.at(Progress.FRODO_IN_BOAT) && this.isInBoat) {
      this.y = 160;
    }

    boolean isInside = state.isInside();
    if (isInside != this.isInside) {
      this.isInside = isInside;
      this.images = this.isInside ? largeTiles : smallTiles;
      animate(prevDirection);
    }

    this.isInBoat = state.at(Progress.FRODO_IN_BOAT);
    this.framesPerImage = isInBoat ? 8 : 4;
    this.isWearingRing = state.frodoWearingRing;
  }

  @Override
  protected void animate(Direction d) {
    if (isInBoat) {
      super.animate(d.opposite());
    } else {
      super.animate(d);
    }
  }
}

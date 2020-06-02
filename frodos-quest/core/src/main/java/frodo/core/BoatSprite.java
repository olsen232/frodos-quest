package frodo.core;

public class BoatSprite extends Sprite {

  private static final int OAR_WIDTH = 7;

  private Image[] splashImages;
  private Image frontImage;
  private Splash[] splashes = {new Splash(), new Splash(), new Splash(), new Splash() };
  private int lastSplash = 0;

  public void init(Image[] boatImages, Image[] splashImages) {
    super.init(boatImages);
    this.splashImages = splashImages;
    this.image = image(Direction.LEFT, 0);
  }

  @Override
  public void move(Scene scene) {
    this.x = Sprites.FRODO.x;
    this.y = Sprites.FRODO.y;
    for (Splash s : splashes) {
      s.animate();
    }

    Direction direction = (Sprites.FRODO.controlState != null) ? Sprites.FRODO.controlState.outcome() : null;
    if (direction == null) return;

    animate(direction);
    if (splashes[lastSplash].isHalfDone()) {
      int s1 = (lastSplash + 1) % splashes.length;
      int s2 = (s1 + 1) % splashes.length;
      if (direction.isHorizontal()) {
        splashes[s1].reset(x, y);
        splashes[s2].reset(x, y);
      } else {
        splashes[s1].reset(x + OAR_WIDTH, y);
        splashes[s2].reset(x - OAR_WIDTH, y);
      }
      lastSplash = s2;
    }
  }

  @Override
  protected Image image(Direction d, int frame) {
    frontImage = images[d.ordinal() * 2 + 1];
    return images[d.ordinal() * 2];
  }

  @Override
  public void draw(Surface surface, int frame) {
    if (!visible) return;
    int y2 = y + Animations.bobOffset(frame);
    Sprite.drawSpriteImage(surface, image, x, y2);
    Sprite.drawSpriteImage(surface, Sprites.FRODO.image, x, y2);
    Sprite.drawSpriteImage(surface, frontImage, x, y2);

    for (Splash s : splashes) {
      s.draw(surface, frame);
    }
  }

  private class Splash {
    int framesPerImage = 4;
    int f = 999;
    int x = 0;
    int y = 0;
    Image image = null;

    void reset(int x, int y) {
      this.f = 0;
      this.x = x;
      this.y = y;
      image = image();
    }

    void animate() {
      f++;
      image = image();
    }

    Image image() {
      int s = f / framesPerImage;
      return (s < splashImages.length) ? splashImages[s] : null;
    }

    boolean isHalfDone() {
      return f * 2 > splashImages.length * framesPerImage;
    }

    void draw(Surface surface, int frame) {
      if (image != null) {
        Sprite.drawSpriteImage(surface, image, x, y);
      }
    }
  }
}
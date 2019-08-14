package frodo.core;

import static frodo.core.PixelConstants.*;

import java.util.Arrays;

public class SceneRenderer {

  public Scene scene;
  public Layer[] layers;
  public Sprite[] sprites;
  
  public void update(State state) {
    scene = Scene.forLocation(state.location);
    scene.update(state);
    layers = scene.layers;
    sprites = scene.sprites();
    for (Sprite sprite : sprites) {
      sprite.update(state);
    }
  }
  
  public void move() {
    for (Sprite sprite : sprites) {
      sprite.move(scene);
    }
    Arrays.sort(sprites, Sprites.SORT_BY_Y);
  }
    
  public void draw(ZoomSurface surface, int frame) {
    surface.translate(0, HEADER_Y);
    
    int spriteIndex = 0;
    int spriteZ = spriteZ(spriteIndex);
    
    for (Layer layer : layers) {      
      while (spriteZ < layer.zIndex) {
        sprites[spriteIndex].draw(surface, frame);
        spriteZ = spriteZ(++spriteIndex);
      }
      layer.draw(surface, frame);
    }
    while (spriteZ < Z.FOREGROUND.value) {
      sprites[spriteIndex].draw(surface, frame);
      spriteZ = spriteZ(++spriteIndex);
    }
    
    surface.translate(0, -HEADER_Y);
  }
  
  private int spriteZ(int spriteIndex) {
    if (spriteIndex >= sprites.length) return Z.IN_FRONT_OF_FOREGROUND.value;
    return sprites[spriteIndex].y;
  }
}

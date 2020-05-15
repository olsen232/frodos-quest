package frodo.core;

import static frodo.core.PixelConstants.*;

import java.util.Arrays;

public class SceneRenderer {

  public Scene scene;
  
  public void update(State state) {
    this.scene = Scene.forLocation(state.location);
    for (Sprite sprite : Sprites.ALL) {
      sprite.visible = scene.sprites(sprite, state);
    }
    // FIXME
    Sprites.FRODO.visible = true;

    scene.update(state);
    for (Sprite sprite : Sprites.ALL) {
      sprite.update(state);
    }
  }
  
  public void move() {
    Sprites.tick();
    for (Sprite sprite : Sprites.ALL) {
      if (sprite.visible) {
        sprite.move(scene);
      }
    }
    Arrays.sort(Sprites.ALL, Sprites.SORT_BY_Y);
  }
    
  public void draw(Surface surface, int frame) {
    surface.saveTx();
    surface.translate(0, HEADER_Y);
    surface.scale(SCENE_X_ZOOM, SCENE_Y_ZOOM);
    
    int spriteIndex = 0;
    int spriteZ = spriteZ(spriteIndex);
    
    for (Layer layer : scene.layers) {      
      while (spriteZ < layer.zIndex) {
        Sprites.ALL[spriteIndex].draw(surface, frame);
        spriteZ = spriteZ(++spriteIndex);
      }
      layer.draw(surface, frame);
    }
    while (spriteZ < Z.FOREGROUND.value) {
      Sprites.ALL[spriteIndex].draw(surface, frame);
      spriteZ = spriteZ(++spriteIndex);
    }
    
    surface.restoreTx();
  }
  
  private static void setVisible(Sprite[] sprites, boolean visible) {
    for (Sprite sprite : sprites) {
      sprite.visible = visible;
    }
  }
  
  private int spriteZ(int spriteIndex) {
    if (spriteIndex >= Sprites.ALL.length) return Z.IN_FRONT_OF_FOREGROUND.value;
    return Sprites.ALL[spriteIndex].y;
  }
}

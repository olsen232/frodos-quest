package frodo.core;

import static frodo.core.PixelConstants.*;

import java.util.Arrays;

public class SceneRenderer {

  public Scene scene;
  
  public void update(State state) {
    Scene newScene = Scene.forLocation(state.location);
    if (newScene != scene) {
      setScene(newScene);
    }

    scene.update(state);
    for (Sprite sprite : Sprites.ALL) {
      sprite.update(state);
    }
  }
  
  public void setScene(Scene newScene) {
    Scene oldScene = this.scene;
    if (oldScene != null) {
      for (Sprite sprite : oldScene.sprites()) {
        sprite.visible = false;
      }
    }
    for (Sprite sprite : newScene.sprites()) {
      sprite.visible = true;
    }
    this.scene = newScene;
  }
  
  public void move() {
    for (Sprite sprite : Sprites.ALL) {
      if (sprite.visible) {
        sprite.move(scene);
      }
    }
    Arrays.sort(Sprites.ALL, Sprites.SORT_BY_Y);
  }
    
  public void draw(Surface surface, int frame) {
    surface.translate(0, HEADER_Y);
    
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
    
    surface.translate(0, -HEADER_Y);
  }
  
  private int spriteZ(int spriteIndex) {
    if (spriteIndex >= Sprites.ALL.length) return Z.IN_FRONT_OF_FOREGROUND.value;
    return Sprites.ALL[spriteIndex].y;
  }
}

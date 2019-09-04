package frodo.core;

import static frodo.core.PixelConstants.*;

import java.util.ArrayList;
import java.util.List;

public class Layer {
  public Image image;
  public Animation animation;
  public int zIndex;
  public boolean show;
  
  public Layer() {
    this(Z.NONE.value, Animations.NONE, false);
  }
  
  public Layer(int zIndex) {
    this(zIndex, Animations.NONE, true);
  }
  
  public Layer(int zIndex, Animation animation) {
    this(zIndex, animation, true);
  }
  
  public Layer(int zIndex, Animation animation, boolean show) {
    this.zIndex = zIndex;
    this.animation = animation;
    this.show = show;
  }
  
  public void init(Image image) {
    this.image = image;
    if (zIndex == Z.AUTO.value) {
      this.zIndex = maxYContent(image);
    }
  }
  
  public void draw(Surface surface, int frame) {
    if (show) {
      animation.draw(image, surface, frame);
    }
  }
  
  public static void showIf(boolean condition, Layer... layers) {
    for (Layer layer : layers) {
      layer.show = condition;
    }
  }
  
  public static void checkLayers(Layer[] layers) {
    int zIndex = -1;
    int layerNum = 0;
    for (Layer layer : layers) {
      if (layer.zIndex == Z.NONE.value) continue;
      if (layer.zIndex == Z.MANUAL.value) {
        throw new IllegalStateException("Manual zIndex has not been set, at " + layerNum);
      }
      if (zIndex > layer.zIndex) {
        throw new IllegalStateException("Decreasing zIndex: " + zIndex + " -> " + layer.zIndex + ", at " + layerNum);
      }
      zIndex = layer.zIndex;
      layerNum++;
    }
  }
  
  private static List<Layer> ADDED_LAYERS = new ArrayList<Layer>();
  static Layer addLayer(Z zIndex) {
    return addLayer(zIndex, Animations.NONE, true);
  }
  
  static Layer addLayer(Z zIndex, Animation animation) {
    return addLayer(zIndex, animation, true);
  }
    
  static Layer addMaskLayer(Scene scene) {
    Layer mask = addLayer(Z.FOREGROUND, Animations.NONE, false);
    Layer[] layers = ADDED_LAYERS.toArray(new Layer[ADDED_LAYERS.size()]);
    ADDED_LAYERS.clear();
    scene.layers = layers;
    return mask;
  }
  
  static Layer addLayer(Z zIndex, Animation animation, boolean show) {
    Layer layer = new Layer(zIndex.value, animation, show);
    ADDED_LAYERS.add(layer);
    return layer;
  }
  
  static int maxYContent(Image image) {
    int w = image.width(); int h = image.height();
    int[] row = null;
    for (int y = h - 1; y >= 0; y--) {
      row = image.pixelRow(row, y);
      for (int x = 0; x < w; x++) {
        if (Pixels.isOn(row[x])) {
          return y;
        }
      }
    }
    return 0;
  }
}

package frodo.core;

import java.util.HashMap;
import java.util.Map;

public final class Loader {
  private Loader() {}
  
  private static Map<String, Image> IMAGES = new HashMap<>();
  
  public static Image loadImage(String name) {
    Image image = IMAGES.get(name);
    if (image == null) {
      image = new Image(Platform.INSTANCE.raw.assets().getImage(name));
      IMAGES.put(name, image);
    }
    return image;
  }
  
  public static String statusText() {
    int loaded = 0, total = 0;
    for (Image image : IMAGES.values()) {
      loaded += image.isLoaded() ? 1 : 0;
      total += 1;
    }
    return "Images: " + loaded + " of " + total;
  }
  
  public static boolean isFinished() {
    if (IMAGES.size() == 0) {
      return false;
    }
    for (Image image : IMAGES.values()) {
      if (!image.isLoaded()) {
        return false;
      }
    }
    return true;
  }
}
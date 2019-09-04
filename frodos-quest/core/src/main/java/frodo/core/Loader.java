package frodo.core;

import playn.core.Sound;

import java.util.HashMap;
import java.util.Map;

public final class Loader {
  private Loader() {}
  
  private static Map<String, Image> IMAGES = new HashMap<>();
  private static Map<String, Sound> SOUNDS = new HashMap<>();
  
  public static Image loadImage(String name) {
    Image image = IMAGES.get(name);
    if (image == null) {
      image = new Image(Platform.INSTANCE.raw.assets().getImage(name));
      IMAGES.put(name, image);
    }
    return image;
  }
  
  public static Sound loadSound(String name) {
    Sound sound = SOUNDS.get(name);
    if (sound == null) {
      sound = Platform.INSTANCE.raw.assets().getSound(name);
      SOUNDS.put(name, sound);
    }
    return sound;
  }
  
  public static Sound loadMusic(String name) {
    Sound sound = SOUNDS.get(name);
    if (sound == null) {
      sound = Platform.INSTANCE.raw.assets().getMusic(name);
      SOUNDS.put(name, sound);
    }
    return sound;
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
    for (Sound sound : SOUNDS.values()) {
      if (!sound.isLoaded()) {
        return false;
      }
    }
    return true;
  }
}
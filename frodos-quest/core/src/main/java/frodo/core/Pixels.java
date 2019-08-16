package frodo.core;

public final class Pixels {
  private Pixels() {}
  
  public static boolean isOn(int pixel) {
    return (pixel & 0xff000000) != 0;
  }
  
  public static boolean isWhite(int pixel) {
    return pixel == 0xffffffff;
  }
  
  public static boolean isNonWhite(int pixel) {
    return isOn(pixel) && !isWhite(pixel);
  }
}
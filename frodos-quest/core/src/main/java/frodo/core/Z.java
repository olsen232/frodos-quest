package frodo.core;

public enum Z {
  BEHIND_BACKGROUND(-1),
  BACKGROUND(0),
  FOREGROUND(1000),
  IN_FRONT_OF_FOREGROUND(1001),
  NONE(-10),
  MANUAL(-20),
  AUTO(-30);
  
  Z(int value) {
    this.value = value;
  }
  
  public final int value;
}

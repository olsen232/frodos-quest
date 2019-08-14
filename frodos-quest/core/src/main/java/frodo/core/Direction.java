package frodo.core;

import static frodo.core.PixelConstants.*;

import java.awt.event.KeyEvent;

public enum Direction {
  LEFT( -X_STEP,       0, KeyEvent.VK_LEFT),
  RIGHT( X_STEP,       0, KeyEvent.VK_RIGHT),
  UP(         0, -Y_STEP, KeyEvent.VK_UP),
  DOWN(       0, +Y_STEP, KeyEvent.VK_DOWN);
  
  public static final Direction[] ALL_DIRECTIONS = Direction.values();
  public static final int NUM_DIRECTIONS = ALL_DIRECTIONS.length;
  public static final int NUM_HORIZONTAL_DIRECTIONS = 2;
  
  public final int dx;
  public final int dy;
  public final int keyCode;
  
  Direction(int dx, int dy, int keyCode) {
    this.dx = dx;
    this.dy = dy;
    this.keyCode = keyCode;
  }
  
  public boolean isHorizontal() {
    return this == LEFT || this == RIGHT;
  }
  
  public boolean isVertical() {
    return !isHorizontal();
  }
  
  public static Direction forKeyCode(int keyCode) {
    for (Direction d : ALL_DIRECTIONS) {
      if (d.keyCode == keyCode) return d;
    }
    return null;
  }
  
  public static Direction approximate(int dx, int dy) {
    if (dx < 0) return LEFT;
    if (dx > 0) return RIGHT;
    if (dy < 0) return UP;
    return DOWN;
  }
  
  public Direction opposite() {
    switch (this) {
      case UP: return DOWN;
      case DOWN: return UP;
      case LEFT: return RIGHT;
      case RIGHT: return LEFT;
    }
    throw new IllegalArgumentException("Invalid direction: " + this);
  }
  
  public Direction clockwise() {
    switch (this) {
      case UP: return RIGHT;
      case RIGHT: return DOWN;
      case DOWN: return LEFT;
      case LEFT: return UP;
    }
    throw new IllegalArgumentException("Invalid direction: " + this);
  }

  public Direction anticlockwise() {
    switch (this) {
      case UP: return LEFT;
      case LEFT: return DOWN;
      case DOWN: return RIGHT;
      case RIGHT: return UP;
    }
    throw new IllegalArgumentException("Invalid direction: " + this);
  }
}

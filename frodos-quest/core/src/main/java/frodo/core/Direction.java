package frodo.core;

import static frodo.core.PixelConstants.*;

import playn.core.Key;

public enum Direction {
  LEFT( -X_STEP,       0, Key.LEFT),
  RIGHT( X_STEP,       0, Key.RIGHT),
  UP(         0, -Y_STEP, Key.UP),
  DOWN(       0, +Y_STEP, Key.DOWN);
  
  public static final Direction[] ALL_DIRECTIONS = Direction.values();
  public static final int NUM_DIRECTIONS = ALL_DIRECTIONS.length;
  public static final int NUM_HORIZONTAL_DIRECTIONS = 2;
  
  public final int dx;
  public final int dy;
  public final Key key;
  
  Direction(int dx, int dy, Key key) {
    this.dx = dx;
    this.dy = dy;
    this.key = key;
  }
  
  public boolean isHorizontal() {
    return this == LEFT || this == RIGHT;
  }
  
  public boolean isVertical() {
    return !isHorizontal();
  }
  
  public static Direction forKey(Key key) {
    for (Direction d : ALL_DIRECTIONS) {
      if (d.key == key) return d;
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

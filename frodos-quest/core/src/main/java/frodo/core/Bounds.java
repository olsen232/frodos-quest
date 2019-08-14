package frodo.core;

public class Bounds {
  public int left = Integer.MAX_VALUE;
  public int right = Integer.MIN_VALUE;
  public int top = Integer.MAX_VALUE;
  public int bottom = Integer.MIN_VALUE;
  
  public void reset() {
    left = Integer.MAX_VALUE;
    right = Integer.MIN_VALUE;
    top = Integer.MAX_VALUE;
    bottom = Integer.MIN_VALUE;
  }
    
  public void reset(int x, int y) {
    left = right = x;
    top = bottom = y;
  }
    
  public void update(int x, int y) {
    left = Math.min(left, x);
    right = Math.max(right, x);
    top = Math.min(top, y);
    bottom = Math.max(bottom, y);
  }
  
  public boolean contains(int x, int y) {
    return left <= x && x <= right
        && top <= y && y <= bottom;
  }
  
  public int midX() {
    return ((left + right) / 4) * 2;
  }
  
  public int midY() {
    return (top + bottom) / 2;
  }
  
  public int getBound(Direction direction) {
    switch (direction) {
      case LEFT: return left;
      case RIGHT: return right;
      case UP: return top;
      case DOWN: return bottom;
    }
    throw new IllegalArgumentException("Invalid direction: " + direction);  
  }
  
  public String toString() {
    return "[" + left + "--" + right + "," + top + "--" + bottom + "]";
  }
}

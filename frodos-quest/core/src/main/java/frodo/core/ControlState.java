package frodo.core;

import java.awt.event.KeyEvent;
import java.util.Arrays;

public class ControlState {

  private boolean[] held = new boolean[4];
  private int[] heldSince = new int[4];
  private int heldCount = 0;
  private Direction jammed = null;
  private Direction outcome = null;
  private boolean interactive = true;
  
  private static int TAP_SPEED = 4;
  
  public void pause() {
    Arrays.fill(heldSince, 0);
    outcome = null;
  }
  
  public void setInteractive(boolean interactive) {
    if (this.interactive != interactive) {
      this.interactive = interactive;
      pause();
    }
  }
  
  public void update(int keyCode, boolean isDown, int frameCounter) {
    if (keyCode == KeyEvent.VK_ENTER) {
      if (jammed != null) {
        outcome = jammed = null;
      }
      return;
    }
  
    Direction d = Direction.forKeyCode(keyCode);
    if (d == null) return;

    int index = d.ordinal();
    boolean wasDown = held[index];
    if (wasDown == isDown) return;
    
    held[index] = isDown;
    if (isDown && !wasDown) {
      heldCount += 1;
      heldSince[index] = frameCounter;
    } else if (wasDown && !isDown) {
      heldCount -= 1;
    }
    
    if (heldCount == 0 && !isDown) {
      boolean isTap = frameCounter - heldSince[index] < TAP_SPEED;
      boolean wasJammed = jammed == d;
      boolean isJammed = isTap && !wasJammed;
      if (isJammed) outcome = jammed = d;
      else outcome = jammed = null;
      
    } else if (heldCount == 1) {
      for (int i = 0; i < 4; i++) {
        if (held[i]) outcome = Direction.ALL_DIRECTIONS[i];
      }

    } else if (heldCount == 2 && isDown) {
      outcome = d;
    } else {
      outcome = null;
    }
  }
  
  public Direction outcome() {
    return interactive ? outcome : null;
  }     
}

package frodo.core;

public enum Animations implements Animation {

  NONE,
  QUILL {
    public void draw(Image image, Surface surface, int frame) {
      int y = 0;
      switch (frame/2 % 20) {
        case 0: case 2: case 3: case 7: case 10: case 11: case 13: case 15: case 16: case 18: case 19:
          y = 1;
      }
      frame /= 16;
      surface.draw(image, -2 * (frame % 4) + 4, y);
    }
  },
  BILBO_WRITING {
    public void draw(Image image, Surface surface, int frame) {
      frame /= 64;
      surface.draw(image, -2 * (frame % 2), 0);
    }
  },
  PIPE_SMOKE {
    public void draw(Image image, Surface surface, int frame) {
      frame /= 16;
      if ((frame / 6) % 3 != 0) return;
      surface.draw(image, 0, -1 * (frame % 6));
    }
  },
  BLINK {
    public void draw(Image image, Surface surface, int frame) {
      frame /= 8;
      switch(frame % 100) {
        case 20: case 40: case 70: case 85: surface.draw(image, 0, 0);
      }
    }
  },
  DRINK {
    public void draw(Image image, Surface surface, int frame) {
      frame /= 32;
      switch(frame % 100) {
        case 20: case 40: case 70: case 85: surface.draw(image, 0, 0);
      }
    }
  };
  
  public void draw(Image image, Surface surface, int frame) {
    surface.draw(image, 0, 0);
  }

  public static CycleAnimation cycle(int showOnFrame, int ofTotal) {
    return new CycleAnimation(showOnFrame, ofTotal);
  }
  
  static class CycleAnimation implements Animation {
    int showOnFrame;
    int ofTotal;
    int duration;
    
    CycleAnimation(int showOnFrame, int ofTotal) {
      this.showOnFrame = showOnFrame % ofTotal;
      this.ofTotal = ofTotal;
    }
    
    public void draw(Image image, Surface surface, int frame) {
      frame /= duration;
      if ((frame % ofTotal) == showOnFrame) surface.draw(image, 0, 0);
    }
    
    public CycleAnimation withDuration(int duration) {
      this.duration = duration;
      return this;
    }
  }
}
  


package frodo.core;

public enum Animations implements Animation {

  NONE,
  QUILL {
    public void draw(ZImage image, ZoomSurface surface, int frame) {
      frame /= 2;
      surface.drawImage(image, -2 * (frame % 4) + 4, (int) (2 * Math.random()));
    }
  },
  BILBO {
    public void draw(ZImage image, ZoomSurface surface, int frame) {
      frame /= 8;
      surface.drawImage(image, -2 * (frame % 2), 0);
    }
  },
  PIPE_SMOKE {
    public void draw(ZImage image, ZoomSurface surface, int frame) {
      frame /= 4;
      if ((frame / 6) % 3 != 0) return;
      surface.drawImage(image, 0, -1 * (frame % 6));
    }
  },
  BLINK {
    public void draw(ZImage image, ZoomSurface surface, int frame) {
      switch(frame % 100) {
        case 20: case 40: case 70: case 85: surface.drawImage(image, 0, 0);
      }
    }
  },
  DRINK {
    public void draw(ZImage image, ZoomSurface surface, int frame) {
      switch(frame / 8 % 100) {
        case 20: case 40: case 70: case 85: surface.drawImage(image, 0, 0);
      }
    }
  };
  
  public void draw(ZImage image, ZoomSurface surface, int frame) {
    surface.drawImage(image, 0, 0);
  }

  public static Animation cycle(final int frame, final int ofTotal) {
    return new Animation() {
      final int showOnFrame = (frame % ofTotal);
      public void draw(ZImage image, ZoomSurface surface, int frame) {
        if ((frame % ofTotal) == showOnFrame) surface.drawImage(image, 0, 0);
      }
    };
  }
}
  


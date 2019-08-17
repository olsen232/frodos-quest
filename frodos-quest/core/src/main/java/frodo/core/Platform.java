package frodo.core;

public class Platform {
  public static Platform INSTANCE;

  public final playn.core.Platform raw;
  
  public Platform(playn.core.Platform raw) {
    this.raw = raw;
    INSTANCE = this;
  }

  public static interface CanvasCreator {
    public playn.core.Canvas create(int pixelWidth, int pixelHeight);
  }

  public CanvasCreator canvasCreator = new CanvasCreator() {
    public playn.core.Canvas create(int pixelWidth, int pixelHeight) {
      return raw.graphics().createCanvas(pixelWidth, pixelHeight);
    }
  };
    
  public playn.core.Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
    return canvasCreator.create(pixelWidth, pixelHeight);
  }
  
  public Canvas createCanvas(int pixelWidth, int pixelHeight) {
    return new Canvas(canvasCreator.create(pixelWidth, pixelHeight));
  }
  
  public static interface Pixelator {
    public void pixelate();
  }
  
  public Pixelator pixelator = new Pixelator() {
    public void pixelate() {}
  };
}
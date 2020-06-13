package frodo.core;

public class RingEffect {
  public static int SIZE = 10;

  private double[] x = new double[SIZE];
  private double[] y = new double[SIZE];

  private int f;
  private double t = 0.5;

  public void move() {
    double variance = Math.random();
    t += (Math.random() - 0.5) * variance;
    t = clamp(t);
    double dx = 0.6 * Math.cos(t * Math.PI);
    double dy = -1.2 * Math.sin(t * Math.PI);
    
    for (int i = SIZE - 1; i > 0; i--) {
      x[i] = x[i - 1] + dx;
      y[i] = y[i - 1] + dy;
    }
    x[0] = dx;
    y[0] = dy;
  }

  public void draw(Surface surface, Image image, int sx, int sy) {
    for (int i = 0; i < SIZE; i++) {
      float alpha = 0.25f * (SIZE - i) / SIZE;
      surface.setAlpha(alpha);
      Sprite.drawSpriteImage(surface, image, (int) (sx + x[i]), (int) (sy + y[i]));
    }
    surface.setAlpha(1f);
  }

  private static double lerp(double v0, double v1, double a) {
    return (v1 - v0) * a + v0;
  }

  private static double clamp(double v) {
    return Math.max(0, Math.min(1, v));
  }
}
package frodo.java;

import java.awt.image.BufferedImage;
import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL12;
import org.lwjgl.opengl.GL15;
import org.lwjgl.opengl.GL20;
import org.lwjgl.opengl.GL30;

import playn.java.LWJGLPlatform;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;

import static frodo.core.PixelConstants.*;

import frodo.core.FrodosQuest;
import frodo.core.Platform;

import java.lang.reflect.Field;

public class FrodosQuestJava {

  public static void main (String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    config.width = SCREEN_WIDTH * ZOOM;
    config.height = SCREEN_HEIGHT * ZOOM;
    LWJGLPlatform raw = new LWJGLPlatform(config);
    Platform platform = new Platform(raw);
    platform.canvasCreator = new JavaCanvasCreator(raw.graphics());
    platform.pixelator = new JavaPixelator();
    
    platform.pixelator.pixelate();
    
    new FrodosQuest(platform);
    raw.start();
  }
  
  static class JavaCanvasCreator implements Platform.CanvasCreator {
    private final Graphics graphics; 
    
    JavaCanvasCreator(Graphics graphics) {
      this.graphics = graphics;
    }

    public Canvas create(int pixelWidth, int pixelHeight) {
      try {
        Field f = Graphics.class.getDeclaredField("scale");
        f.setAccessible(true);
        Scale temp = (Scale) f.get(graphics);
        f.set(graphics, Scale.ONE);
        Canvas canvas = graphics.createCanvas(pixelWidth, pixelHeight);
        f.set(graphics, temp);
        return canvas;
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
  }
  
  static class JavaPixelator implements Platform.Pixelator {
    public void pixelate() {
      GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_MIN_FILTER, GL11.GL_NEAREST);
      GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_MAG_FILTER, GL11.GL_NEAREST);
      GL11.glTexParameteri(GL30.GL_TEXTURE_2D_ARRAY, GL11.GL_TEXTURE_MIN_FILTER, GL11.GL_NEAREST);
      GL11.glTexParameteri(GL30.GL_TEXTURE_2D_ARRAY, GL11.GL_TEXTURE_MAG_FILTER, GL11.GL_NEAREST);
    }
  }
}

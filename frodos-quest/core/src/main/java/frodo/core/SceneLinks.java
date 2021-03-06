package frodo.core;

import static frodo.core.Direction.*;
import static frodo.core.Scene.*;

import java.util.HashMap;
import java.util.Map;

public class SceneLinks {
  
  private static Map<Portal, Portal> links = new HashMap<Portal, Portal>();
  
  static {
    addVerticalLinks(BAGEND_KITCHEN, BAGEND_HALLWAY, BAGEND_HILL);
    addLink(portal(FRODOS_ROOM, DOWN), portal(BAGEND_HALLWAY, LEFT));
    addLink(portal(BILBOS_ROOM, DOWN), portal(BAGEND_HALLWAY, RIGHT));
    
    
    addHorizontalLinks(               APPLE_TREE_FIELD, WEST_FIELD,  EAST_FIELD           );
    addHorizontalLinks(HOUSE_BY_LAKE, TREE_BY_LAKE,     BAGEND_HILL, NEIGHBOR,    HOBBITON);

    
    addVerticalLinks(APPLE_TREE_FIELD, TREE_BY_LAKE);
    addVerticalLinks(EAST_FIELD, NEIGHBOR);
    
    addLink(portal(HOBBITON, UP), portal(GREEN_DRAGON, LEFT));

    // Trapped in Hobbiton.
    addLink(portal(HOBBITON, RIGHT), portal(HOBBITON, RIGHT));
  }
  
  private static void addLink(Portal p1, Portal p2) {
    links.put(p1, p2);
    links.put(p2, p1);
  }
  
  private static void addOneWayLink(Portal from, Portal to) {
    links.put(from, to);
  }
  
  private static void addHorizontalLinks(Scene... scenes) {
    Scene prev = null;
    for (Scene curr : scenes) {
      if (prev != null) addLink(portal(prev, RIGHT), portal(curr, LEFT));
      prev = curr;
    }
  }
  
  private static void addVerticalLinks(Scene... scenes) {
    Scene prev = null;
    for (Scene curr : scenes) {
      if (prev != null) addLink(portal(prev, DOWN), portal(curr, UP));
      prev = curr;
    }
  }

  public static Portal portal(Scene scene, Direction direction) {
    return new Portal(scene, direction);
  }

  public static Portal getLinkedPortal(Portal portal) {
    return links.get(portal);
  }

  public static void sendThroughPortal(FrodoSprite sprite, Portal in, Portal out) {
    Bounds entrance = out.scene.mask.getEdge(out.direction);
    if (in.scene == Scene.TREE_BY_LAKE && out.scene == Scene.HOUSE_BY_LAKE) {
      sprite.x = entrance.midX();
      sprite.y = sprite.isInBoat ? 170 : 105;
      return;
    } else if (in.scene == Scene.HOUSE_BY_LAKE && out.scene == Scene.TREE_BY_LAKE) {
      sprite.x = entrance.midX();
      sprite.y = sprite.isInBoat ? 190 : 120;
      return;
    }
    sprite.x = entrance.midX();
    sprite.y = entrance.midY();
  }
  
  static class Portal {
    public final Scene scene;
    public final Direction direction;
    
    public Portal(Scene scene, Direction direction) {
      this.scene = scene;
      this.direction = direction;
    }
    
    public int hashCode() {
      return scene.hashCode() ^ direction.hashCode();
    }
    
    public boolean equals(Object other) {
      if (!(other instanceof Portal)) return false;
      Portal that = (Portal) other;
      return this.scene == that.scene
          && this.direction == that.direction;
    }
  }
}

package frodo.core;

import static frodo.core.Item.*;
import static frodo.core.Layer.*;
import static frodo.core.PixelConstants.*;
import static frodo.core.Progress.*;

import java.io.IOException;

public enum Scene {
  FRODOS_ROOM {
    Layer background = addLayer(Z.BACKGROUND);
    Layer wardrobe = addLayer(Z.MANUAL);
    Layer wdBackDoor = addLayer(Z.AUTO);
    Layer moneyPouch = addLayer(Z.MANUAL);
    Layer wdFrontDoor = addLayer(Z.AUTO);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
        
    protected void onLayersLoaded() {
      wardrobe.zIndex = wdBackDoor.zIndex;
      moneyPouch.zIndex = wdBackDoor.zIndex;
    }
    
    public void update(State state) {
      showIf(state.isWardrobeOpen, wdBackDoor, wdFrontDoor);
      showIf(state.isWardrobeOpen && !state.has(MONEY_POUCH), moneyPouch);
    }
  },
  
  BAGEND_HALLWAY {
    Layer background = addLayer(Z.BACKGROUND);
    Layer letter = addLayer(Z.BACKGROUND);
    Layer doorway = addLayer(Z.AUTO);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this); 
    
    public void update(State state) {
      showIf(!state.has(LETTER), letter);
    }
  },
  
  BILBOS_ROOM {
    Layer background = addLayer(Z.BACKGROUND);
    Layer bed = addLayer(Z.AUTO);
    Layer desk = addLayer(Z.AUTO);
    Layer bilbo = addLayer(Z.MANUAL, Animations.BILBO_WRITING);
    Layer quill = addLayer(Z.MANUAL, Animations.QUILL);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this); 
    
    protected void onLayersLoaded() {
      bilbo.zIndex = desk.zIndex;
      quill.zIndex = desk.zIndex;
    }
    
    public void update(State state) {
      showIf(state.before(BILBO_FISHING), bilbo, quill);
    }
  },
  
  BAGEND_KITCHEN {
    Layer background = addLayer(Z.BACKGROUND);
    Layer fire1 = addLayer(Z.BACKGROUND, Animations.cycle(1, 3).withDuration(4));
    Layer fire2 = addLayer(Z.BACKGROUND, Animations.cycle(2, 3).withDuration(4));
    Layer bottle = addLayer(Z.BACKGROUND);
    Layer skillet = addLayer(Z.BACKGROUND);
    Layer knife = addLayer(Z.BACKGROUND);
    Layer table = addLayer(Z.AUTO);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
    
    public void update(State state) {
      showIf(!state.has(OLIVE_OIL), bottle);
      showIf(!state.has(SKILLET), skillet);
      showIf(!state.has(KNIFE), knife);
    }
  },
  
  BAGEND_HILL {
    Layer background = addLayer(Z.BACKGROUND);
    Layer flowers = addLayer(Z.AUTO);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this); 
  },
  
  TREE_BY_LAKE {
    Layer background = addLayer(Z.BACKGROUND);
    Layer tree = addLayer(Z.AUTO);
    Layer foreground = addLayer(Z.AUTO);
    Layer bilbo = addLayer(Z.AUTO, Animations.bob(Direction.LEFT, 136));
    Layer maskLayer = addMaskLayer(this);

    public void update(State state) {
      showIf(state.atOrAfter(BILBO_FISHING) && state.before(BILBO_IN_BOAT), bilbo);
    }
  },
  
  HOUSE_BY_LAKE {
    Layer background = addLayer(Z.BACKGROUND);
    Layer house = addLayer(Z.AUTO);
    Layer tree = addLayer(Z.AUTO);
    Layer rope = addLayer(Z.AUTO, Animations.bob(Direction.LEFT, 40));
    Layer fisherman = addLayer(Z.AUTO, Animations.bob(Direction.RIGHT, 60));
    Layer maskLayer = addMaskLayer(this);

    public void update(State state) {
      showIf(state.before(FRODO_IN_BOAT), rope);
    }
  },
  
  NEIGHBOR {
    Layer background = addLayer(Z.BACKGROUND);
    Layer smoke = addLayer(Z.BACKGROUND, Animations.PIPE_SMOKE);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
  },
  
  HOBBITON {
    Layer background = addLayer(Z.BACKGROUND);
    Layer wheel1 = addLayer(Z.BACKGROUND, Animations.cycle(1, 3).withDuration(4));
    Layer wheel2 = addLayer(Z.BACKGROUND, Animations.cycle(2, 3).withDuration(4));
    Layer bridge = addLayer(Z.AUTO);
    Layer wall = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
  },
  
  GREEN_DRAGON {
    Layer background = addLayer(Z.BACKGROUND);
    Layer blink = addLayer(Z.BACKGROUND, Animations.BLINK);
    Layer gandalf = addLayer(Z.AUTO);
    Layer gandalfArm = addLayer(Z.MANUAL, Animations.DRINK);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
    
    @Override
    protected void onLayersLoaded() {
      gandalfArm.zIndex = gandalf.zIndex;
    }
  },
  
  APPLE_TREE_FIELD { 
    Layer background = addLayer(Z.BACKGROUND);
    Layer appleTree = addLayer(Z.AUTO);
    Layer foregroundTree = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
  },

  WEST_FIELD {
    Layer background = addLayer(Z.BACKGROUND);
    Layer tree = addLayer(Z.FOREGROUND);
    Layer foregroundTree = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
  },

  EAST_FIELD {
    Layer background = addLayer(Z.BACKGROUND);
    Layer foreground = addLayer(Z.FOREGROUND);
    Layer maskLayer = addMaskLayer(this);
  },
  
  /** END SCENES **/ ;
     
  private static final Scene[] ALL_SCENES = Scene.values();
    
  protected Image raw;
  public Layer[] layers;
  public Image maskShape;
  public Mask mask;
  
  public Layer maskLayer() {
    return layers[layers.length - 1];
  }
  
  public static void startLoading() {
    for (Scene s : ALL_SCENES) {
      s.doStartLoading();
    }
  }
  
  protected void doStartLoading() {
    raw = Image.load(sceneFile());
  }
  
  public static void finishLoading() {
    for (Scene s : ALL_SCENES) {
      s.doFinishLoading();
    }
  }
  
  protected void doFinishLoading() {
    Image[] images = raw.tile(SCENE_WIDTH, SCENE_HEIGHT);
    
    if (images.length != layers.length) {
      throw new IllegalArgumentException("Wrong number of layers - images=" + images.length + " layers=" + layers.length);
    }
    for (int i = 0; i < layers.length; i++) {
      layers[i].init(images[i]);
    }
    onLayersLoaded();
    Layer.checkLayers(layers);
    boolean isInside = Location.isInside(this.toLocation());
    int shrinkX = isInside ? 5 : 2;
    int shrinkY = isInside ? 2 : 0;
    this.mask = Mask.shrink(images[images.length - 1], shrinkX, shrinkY);
  }
   
  protected void onLayersLoaded() {}
    
  public void update(State state) {
    // nothing needed.  
  }
  
  // TODO: Scenes and Locations?
  public static Scene forLocation(Location location) {
    Scene scene = ALL_SCENES[location.ordinal()];
    if (scene.name().equals(location.name())) {
      return scene;
    }
    throw new IllegalStateException("Index mismatch: " + scene + " != " + location);
  }
  
  public Location toLocation() {
    Location location = Location.ALL_LOCATIONS[this.ordinal()];
    if (location.name().equals(this.name())) {
      return location;
    }
    throw new IllegalStateException("Index mismatch: " + this.name() + " != " + location);
  } 

  private String sceneFile() {
    return this.name().toLowerCase() + ".png";
  }
}

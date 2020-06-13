package frodo.core;

import playn.core.Sound;

public class Events {

  public static final boolean INTERACTIVE = true;
  public static final boolean UNINTERACTIVE = false;

  public abstract static class Event {
    public boolean interactive;
          
    protected Event(boolean interactive) {
      this.interactive = interactive;
    }
    
    public void enact() {}
  }

  public static class StartGameEvent extends Event {
    public StartGameEvent() {
      super(UNINTERACTIVE);
    }
    
    @Override
    public void enact() {
      FrodosQuest.state.gameStarted = true;
    }
  }

  public static class DisplayTextEvent extends Event {
    public final String text;
    public DisplayTextEvent(String text) {
      super(INTERACTIVE);
      this.text = text;
    }
    
    @Override
    public void enact() {
      FrodosQuest.textDisplay.render(text);
      FrodosQuest.controlState.pause();
    }
  }
  
  public static class PauseEvent extends Event {
    public final int seconds;
    public PauseEvent(boolean interactive, int seconds) {
      super(interactive);
      this.seconds = seconds;
    }
  }
  
  public static class CutSceneEvent extends Event {
    public final Location location;
    public CutSceneEvent(Location location) {
      super(UNINTERACTIVE);
      this.location = location;
    }
    
    @Override
    public void enact() {
      FrodosQuest.changeLocation(location);
    }
  }
  
  public static class MusicEvent extends Event {
    public final Sound music;
    public MusicEvent(Sound music) {
      super(INTERACTIVE);
      this.music = music;
    }
    
    @Override
    public void enact() {
      music.play();
    }
  }
  
  public static class QueuedUpcomingEvent extends Event {
    public final UpcomingEvent delegate;
    public QueuedUpcomingEvent(UpcomingEvent delegate) {
      super(INTERACTIVE);
      this.delegate = delegate;
    }
    
    @Override
    public void enact() {
      FrodosQuest.eventManager.add(delegate);
    }
  }
  
  public abstract static class UpcomingEvent extends Event {
    public final Event delegate;
    protected UpcomingEvent(Event delegate) {
      super(INTERACTIVE);
      this.delegate = delegate;
      this.delegate.interactive = false;
    }
    
    public boolean check(State state) {
      return false;
    }
  }
  
  public static class LocationEvent extends UpcomingEvent {
    public final Location location;
    public final boolean touchingSpecial;
    public LocationEvent(Location location, boolean touchingSpecial, Event delegate) {
      super(delegate);
      this.location = location;
      this.touchingSpecial = touchingSpecial;
    }
    
    public boolean check(State state) {
      if (state.at(location)) {
        return touchingSpecial ? Sprites.FRODO.touchingSpecial : true;
      }
      return false;
    }
  }

  public static class DeliveredBarrelEvent extends Event {
    public DeliveredBarrelEvent() {
      super(INTERACTIVE);
    }

    @Override
    public void enact() {
      FrodosQuest.state.deliveredBarrel = true;
      FrodosQuest.state.frodoInBoat = true;
      FrodosQuest.state.ponyMeal = 0;
      FrodosQuest.eventManager.add(new DisplayTextEvent("\"Halfred! I've brought your barrel of ale!\""));
      FrodosQuest.eventManager.add(new DisplayTextEvent("\"So you have! I didn't think you really would! I suppose you can borrow the boat, then,\" says Halfred."));
      FrodosQuest.eventManager.add(new UpdateSceneEvent());
      FrodosQuest.eventManager.add(new LocationEvent(Location.TREE_BY_LAKE, true, new DeliveredBoatEvent()));
    }
  }

  public static class UpdateSceneEvent extends Event {
    public UpdateSceneEvent() {
      super(INTERACTIVE);
    }

    @Override
    public void enact() {
      FrodosQuest.sceneRenderer.update(FrodosQuest.state);
    }
  }

  public static class DeliveredBoatEvent extends Event {
    public DeliveredBoatEvent() {
      super(INTERACTIVE);
    }

    @Override
    public void enact() {
      FrodosQuest.state.frodoInBoat = false;
      FrodosQuest.state.bilboInBoat = true;
      FrodosQuest.state.inventory.add(Item.POCKET_WATCH);
      FrodosQuest.eventManager.add(new DisplayTextEvent("\"Bilbo! I've brought you a boat to take fishing!\""));
      FrodosQuest.eventManager.add(new DisplayTextEvent("\"So you have!\" says Bilbo. \"What a treat for your uncle Bilbo!\""));
      FrodosQuest.eventManager.add(new DisplayTextEvent("Bilbo takes a golden watch out of his pocket and hands it to you. \"Mind this for me while I'm on the water, will you?\" he says. Then he paddles out onto the lake."));

      FrodosQuest.eventManager.add(new UpdateSceneEvent());
    }
  }

  public static class WearRingEvent extends Event {
    public WearRingEvent() {
      super(INTERACTIVE);
    }

    @Override
    public void enact() {
      FrodosQuest.state.frodoWearingRing = true;      
      FrodosQuest.eventManager.add(new UpdateSceneEvent());
    }
  }
}

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
}

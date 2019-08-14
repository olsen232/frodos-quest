package frodo.core;

public class Events {

  public static final boolean INTERACTIVE = true;
  public static final boolean UNINTERACTIVE = false;

  public abstract static class Event {
    public boolean interactive;
          
    protected Event(boolean interactive) {
      this.interactive = interactive;
    }
  }

  /*public static class StateChangedEvent implements Event {
    public final State newState;
    public StateChangedEvent(State newState) {
      this.newState = newState;
    }
  }*/

  public static class DisplayTextEvent extends Event {
    public final String text;
    public DisplayTextEvent(String text) {
      super(INTERACTIVE);
      this.text = text;
    }
  }
  
  public static class PauseEvent extends Event {
    public final int seconds;
    public PauseEvent(boolean interactive, int seconds) {
      super(interactive);
      this.seconds = seconds;
    }
  }
  
  public abstract static class UpcomingEvent extends Event {
    protected UpcomingEvent() {
      super(INTERACTIVE);
    }
  }
  
  public static class LocationEvent extends UpcomingEvent {
    public final Location location;
    public final Event delegate;
    public LocationEvent(Location location, Event delegate) {
      this.location = location;
      this.delegate = delegate;
      this.delegate.interactive = false;
    }
  }
}

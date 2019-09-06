package frodo.core;

import frodo.core.Events.*;

import java.util.ArrayDeque;
import java.util.Deque;

public class EventManager {

  private final ControlState controlState;
  private final TextDisplay textDisplay;

  private final Deque<Event> events = new ArrayDeque<Event>();
  private final Deque<UpcomingEvent> upcomingEvents = new ArrayDeque<UpcomingEvent>();
  private int pauseTimer = -1;
  private int textTimer = -1;
  
  public EventManager(ControlState controlState, TextDisplay textDisplay) {
    this.controlState = controlState;
    this.textDisplay = textDisplay;
  }
  
  public void add(Event event) {
    if (event instanceof UpcomingEvent) {
      upcomingEvents.add((UpcomingEvent) event);
      return;
    }
    if (!events.isEmpty()) {
      modifyInteractivity(events.peekLast(), event);
    }
    events.add(event);
    if (events.size() == 1) {
      processNext();
    }
    controlState.setInteractive(this.interactive());
  }
  
  public void tick(State state) {
    pauseTimer--;
    if (pauseTimer == 0) {
      dismissAndProcessNext();
    }

    textTimer--;
    if (textTimer == 0) {
      controlState.setInteractive(this.interactive());
    }
    if (controlState.outcome() != null) {
      softDismiss();
    }

    checkUpcoming(state);
  }
  
  protected void checkUpcoming(State state) {
    if (upcomingEvents.isEmpty()) return;
    UpcomingEvent upcoming = upcomingEvents.peek();
    checkUpcoming(upcoming, state);
  }
  
  protected void checkUpcoming(UpcomingEvent upcoming, State state) {
    if (upcoming.check(state)) {
      upcomingEvents.remove();
      add(upcoming.delegate);
    }
  }
  
  public void userDismiss() {
    Event event = events.peek();
    if (event instanceof DisplayTextEvent) {
      textDisplay.clear();
      dismissAndProcessNext();
    }
  }
  
  public void softDismiss() {
    if (!events.isEmpty() && interactive()) {
      userDismiss();
    }
  }
  
  protected void dismissAndProcessNext() {
    events.remove();
    processNext();
  }
  
  protected void processNext() {
    Event event = events.peek();
    if (event != null) {
      processEvent(event);
    }
    controlState.setInteractive(this.interactive());
  }
  
  protected void processEvent(Event event) {
    event.enact();
    if (event instanceof DisplayTextEvent) {      
      textTimer = PixelConstants.FRAME_RATE / 2;
    } else if (event instanceof PauseEvent) {
      PauseEvent pauseEvent = (PauseEvent) event;
      pauseTimer = (PixelConstants.FRAME_RATE * pauseEvent.seconds);
    } else {
      events.remove();
      processNext();
    }
  }
  
  public boolean interactive() {
    return events.isEmpty() || (textTimer <= 0 && events.peek().interactive);
  }
  
  static void modifyInteractivity(Event prev, Event next) {
    if (prev instanceof DisplayTextEvent) {
      prev.interactive = false;
    }
    if (prev instanceof PauseEvent && next instanceof DisplayTextEvent) {
      next.interactive = false;
    }
  }
}

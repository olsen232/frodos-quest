package frodo.core;

public enum Verb implements Synonym {
  INVENTORY("inventory", "inv", "i"),
  LOOK,
  EXAMINE("look at", "look"),
  READ("examine", "look at", "look"),
  TAKE("pick up", "get"),
  TALK_TO("talk"),
  USE,
  OPEN,
  CLOSE("shut"),
  OIL,
  CLIMB_IN("climb through"),
  CLIMB_OUT("climb through"),
  SLEEP_IN("use", "get in"),
  SLEEP(),
  EAT("use"),
  COOK(),
  CLIMB_UP("climb"),
  SWIM(),
  BUY("order", "ask for"),
  BUY_A("order a", "ask for a"),
  BUY_AN("order an", "ask for an"),
  DRINK,
  GIVE,
  TO();

  public final String[] variants;

  Verb(String... in) {
    this.variants = Synonyms.getVariants(this.name(), in);
  }

  @Override
  public String[] variants() {
    return variants;
  }
}


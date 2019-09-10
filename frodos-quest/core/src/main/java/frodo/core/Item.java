package frodo.core;

public enum Item implements Synonym {
  MONEY_POUCH("wallet", "money", "pouch", "Your money pouch has a nice heavy feel with the weight of many coins."),
  LETTER("It's a message for you! It says simply, that a friend is waiting to meet with you at the Green Dragon inn."),
  MUG_OF_ALE("ale", "beer", "drink", "A half-pint of ale from the Green Dragon, still refreshingly cool."),
  FISHING_ROD("rod", "A wooden fishing rod, including hook, line and sinker."),
  STOOL("wooden stool", "A wooden stool from the kitchen, for reaching high shelves."),
  OLIVE_OIL("oil", "bottle", "A bottle of olive oil from the kitchen."),
  APPLES("apple", "Several red juicy apples."),
  POCKET_WATCH("watch", "Bilbo's pocket watch is mostly brass, but it looks shiny and ornate, with a long chain. Attached to the watch is a small key, for winding it up."),
  WATCH_KEY("key", "Attached to Bilbo's pocket watch is a golden watch key, for winding it up. Unlike a house key, it has no blade, so its notched shaft would fit into a circular keyhole."),
  RING("Bilbo's ring is simple, small, but brightly shining gold. Twisting it in the light, you think you can see writing inside, but you cannot make it out.");

  public final String[] variants;
  public final String desc;

  Item(String... in) {
    this.variants = Synonyms.getVariantsSkipDesc(this.name(), in);
    this.desc = Synonyms.getDesc(in);
  }

  @Override
  public String[] variants() {
    return variants;
  }
}


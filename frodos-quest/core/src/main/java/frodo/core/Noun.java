package frodo.core;

public enum Noun implements Synonym {
  NORTH("south", "east", "west", "up", "down", "left", "right", "No description"),
  FRODO("me", "You are Frodo, a young hobbit of average height - three foot six. You have blue eyes, dark curly hair, a red vest and a green coat."),
  BILBO,
  BED,
  DESK("On the desk are Bilbo's memoirs, titled \"There and Back Again\"."),
  WARDROBE("cupboard", "cabinet", "It's your wardrobe. It is closed."),
  DRESSER("drawer", "Bilbo's dresser has a mirror and a drawer. In the drawer is a keyhole. Oddly, this has a simple circle shape."), 
  MIRROR("The mirror is fixed to a dresser. In the mirror you can see your reflection."),
  MEMOIRS("book", "\"There and Back Again\"\n\"A Hobbit's Tale\"\n\n(Then hundreds more pages of Bilbo's handwriting)"),
  WINDOW("Out the window you can see the garden and the road."),
  OLIVE_OIL_ON("oil on", ""),
  PANTRY("larder", "cupboard", "shelves", "A well-stocked pantry is perhaps the most important feature of a hobbit hole."),
  FOOD("meal", "breakfast", "lunch", "dinner", ""),
  TABLE("A hobbit sized table."),
  BENCH("The bench is for preparing food."),
  FIRE("fireplace", "A small fire burns in the fireplace, for cooking and heating."),
  TREE("A weathered old oak tree grows on top of the hill."),
  ROCK("rocks", "Nothing special. There are many small rocks around the shire."),
  FLOWERS("The flowers smell lovely at this time of year."),
  DOOR("A green door with a brass knob."),
  ROAD("The road goes ever on and on, over rock and under tree..."),
  WALL("Stone walls mark properties and keep animals from wandering."),
  LAKE("water", "pond", "Hobbiton boasts a small but shining blue lake, famous for its plentiful fish."),
  REEDS("Just some reeds. Part of the scenery, really."),
  ANDWISE("hobbit", "man", "neighbour", "neighbor", "Andwise must be at least seventy. He has a mild temperament and is never in a hurry."),
  FENCE("It's just an old wooden fence."),
  RIVER("water", "The river that runs through the middle of The Shire is simply called \"The Water\"."),
  HOUSE,
  GOOSE("duck", "swan", "A white goose is waddling along the shore of the lake."),
  INN("green dragon inn", "green dragon", "The Green Dragon is one of Hobbiton's favourite establishments - in fact it is the only public ale house."),
  MILL("water wheel", "water mill", "wheel", "A water wheel turns with the flowing water, so that the mill can grind wheat."),
  GANDALF("wizard", ""),
  ROSIE("barmaid", "woman", "Rosie Cotton is working the bar today. She is quiet by nature, and has long blonde hair in curly ringlets. Your poor friend Samwise is always tongue tied in her presence."),
  REGULARS("customers", "hobbits", "At this hour of the morning, a few older hobbits gather here to meet their friends. Younger hobbits are out fishing and farming, they tend to arrive later in the day."),
  HALFRED("hobbit", "man", "fisherman", "Like most hobbits, Halfred grows most of his food on land, but he fishes whenever he can and he even has his own boat."),
  BOAT("rowboat", "Halfred's rowboat, just large enough for a hobbit."),
  
  ;

  public final String[] variants;
  public final String desc;

  Noun(String... in) {
    this.variants = Synonyms.getVariantsSkipDesc(this.name(), in);
    this.desc = Synonyms.getDesc(in);
  }

  @Override
  public String[] variants() {
    return variants;
  }
}

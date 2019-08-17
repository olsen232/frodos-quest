package frodo.core;

import static frodo.core.Location.*;
import static frodo.core.Item.*;
import static frodo.core.Noun.*;
import static frodo.core.Verb.*;

import frodo.core.Events.*;
import static frodo.core.Events.*;

import java.io.Serializable;
import java.util.EnumSet;

public class State {

  public Location location = FRODOS_ROOM;
  public EnumSet<Item> inventory = EnumSet.noneOf(Item.class);
  public boolean isWardrobeOpen = false;
  public boolean isBilboFishing = false;
  public boolean bilboHasABoat = false;
  public boolean talkedToGandalf = false;
  public int gandalfTalk = 0;
  public int meal = 0;

  private void copyFrom(State that) {
    this.location = that.location;
    this.inventory.clear(); this.inventory.addAll(that.inventory);
  }

  transient Prompt prompt;
  transient EventManager eventManager;
  
  public State(EventManager eventManager) {
    this.prompt = new Prompt();
    this.eventManager = eventManager;
  }

  public void updateSuggestion(Prompt prompt) {
    this.prompt = prompt;
    prompt.clearSuggestions();
    promptInput();
    prompt.updateSuggestion();
    this.prompt = null;
  }
  
  public boolean submitUserCommand(Prompt prompt) {
    this.prompt = prompt;
    prompt.submit = true;
    boolean success = promptInput();
    prompt.submit = false;
    this.prompt = null;
    return success;
  }

  //public void setLocation(Location location) {
  //  this.location = location;
  //}

  private static final String NO_SWIMMING = "It is a little early in the season for swimming - the water will still be freezing.";

  private boolean promptInput() {
    //if (typed("quit")) System.exit(0);
    if (typed(INVENTORY)) return displayInventory();
    if (typed(EXAMINE, FRODO)) return display(FRODO.desc);
    if (typed("teaser")) return display("Frodo's Quest\n\nComing 2019");

    if (maybeLookAtInventory()) return true;

    if (has(MUG_OF_ALE) && typed(DRINK, MUG_OF_ALE)) {
      Sprites.FRODO.drinkAlcohol();
      changeState(inventory.remove(MUG_OF_ALE));
      return display("You drink the mug of ale. Refreshing, but quite strong.");
    }


    if (at(FRODOS_ROOM)) {
      if (typed(LOOK)) return display("This is your room at Bag End. Nice and cosy. A bed and a wardrobe meets all your needs. A window looks out into the garden.");
      if (typed(EXAMINE, BED)) return display("It's your bed.");
      if (typed(SLEEP_IN, BED) || typed(SLEEP)) return display("It's already morning!");
      if (typed(EXAMINE, WINDOW) || typed("look out window")) return display(WINDOW.desc);
      if (typed(EXAMINE, WARDROBE)) {
        if (!isWardrobeOpen) return display(WARDROBE.desc);
        if (!has(MONEY_POUCH)) return display("Hanging in your wardrobe is your money pouch.");
        return display("That's where you keep your clothes. But you're already dressed.");
      }
      if (typed(OPEN, WARDROBE)) {
        if (isWardrobeOpen) return display("It's already open!");
        changeState(isWardrobeOpen = true);
        return display("You open the wardrobe.");
      }
      if (typed(CLOSE, WARDROBE)) {
        if (!isWardrobeOpen) return display("It's already shut!");
        changeState(isWardrobeOpen = false);
        return display("You shut the wardrobe.");
      }
      if (isWardrobeOpen && typed(EXAMINE, MONEY_POUCH)) return display("Hanging in your wardrobe is your money pouch.");
      if (isWardrobeOpen && !has(MONEY_POUCH) && typed(TAKE, MONEY_POUCH)) {
        changeState(inventory.add(MONEY_POUCH));
        return display("You pick up your money pouch.");
      }
    }

    if (at(BAGEND_HALLWAY)) {
      if (typed(LOOK)) return display("This is the hallway at Bag End. Your room is to the left, Bilbo's is to the right. At the back is the kitchen. " + cond(!has(LETTER), "On the ground is a letter, just beside your door."));
      if (!has(LETTER) && (typed(TAKE, LETTER) || typed(READ, LETTER))) {
        changeState(inventory.add(LETTER));
        return display(LETTER.desc + " You take it with you.");
      }
    }

    if (at(BILBOS_ROOM)) {
      if (typed(EXAMINE, BED)) return display("It's Bilbo's bed.");
      if (typed(EXAMINE, WINDOW) || typed("look out window")) return display(WINDOW.desc);
      if (typed(SLEEP_IN, BED) || typed(SLEEP)) return display("You have your own bed and your own room!");
      if (typed(EXAMINE, WARDROBE)) return display("That's where Bilbo keeps his clothes.");
      if (typed(EXAMINE, DESK)) return display(DESK.desc);
      if (typed(EXAMINE, MIRROR)) return display(MIRROR.desc);
      if (typed(EXAMINE, DRESSER)) return display(DRESSER.desc);
      if (!isBilboFishing) {
        if (typed(LOOK)) return display("This is Bilbo's room. Bilbo is sitting at his desk, working on his memoirs. A window looks out into the garden.");
        if (typed(EXAMINE, BILBO)) return display("Bilbo is over one hundred, but still in great health. He is working on his memoirs, telling of all the adventures he had in his younger days.");
        if (typed(TALK_TO, BILBO)) {
          if (!talkedToGandalf) {
            return display("\"Good morning!\" says Bilbo. \"You can fix yourself some breakfast. " +
                "I'm writing the chapter in the cave with the goblins and I may just keep writing until I can see the sun out the other side.\"");
          } else {
            return display("\"It's such a warm spring day! When did you last go fishing?\" you ask.", "\"Not since I broke my fishing rod, I'm afraid\" says Bilbo.");
          }
        }
        if (has(FISHING_ROD)) {
          if (typed(GIVE, FISHING_ROD, BILBO) || typed(GIVE, FISHING_ROD, TO, BILBO)) {
            changeState(inventory.remove(FISHING_ROD));
            changeState(isBilboFishing = true);
            return display("\"I was talking to Halfred and he lent me this fishing rod. Do you want to go fishing?\" you ask.",
                           "Bilbo looks out the window. \"It would be a shame to waste this sunshine,\" he says. \"I'll catch us something for dinner!\"",
                           "He takes the fishing rod and sets off for the lake.");
          }
        }
        if (typed(OPEN, WARDROBE)) return display("Bilbo will let you know if he wants you to go through his wardrobe.");
        if (typed(OPEN, DRESSER)) return display("Bilbo will let you know if he wants you to go through his dresser.");
      } else {
        if (typed(LOOK)) return display("This is Bilbo's room. His memoirs are sitting on his desk. A window looks out into the garden.");
      }
      if (typed(READ, MEMOIRS)) return display(MEMOIRS.desc);
      if (typed(TAKE, MEMOIRS)) return display("Bilbo would probably prefer you left those as they are.");
    }

    if (at(BAGEND_KITCHEN)) {
      if (typed(LOOK)) {
        return display("This is the kitchen at Bag End. It is well stocked as a hobbit's should be - the pantry is filled with food."
            + cond(!has(STOOL), " Next to the pantry is a wooden stool, for reaching the top shelf.")
            + cond(!has(OLIVE_OIL), " A bottle of olive oil stands on the bench."));
      }
      if (typed(EXAMINE, STOOL)) return display("Next to the pantry is a wooden stool, for reaching the top shelf.");
      if (typed(EXAMINE, BENCH)) {
        if (!has(OLIVE_OIL)) return display("A bottle of olive oil stands on the bench.");
        else return display(BENCH.desc);
      }
      if (typed(EXAMINE, OLIVE_OIL)) return display("A bottle of olive oil stands on the bench.");
      if (!has(STOOL) && typed(TAKE, STOOL)) {
        changeState(inventory.add(STOOL));
        return display("You take the wooden stool with you, for a hobbit never knows when he might need some extra height.");
      }
      if (!has(OLIVE_OIL) && typed(TAKE, OLIVE_OIL)) {
        changeState(inventory.add(OLIVE_OIL));
        return display("You take the bottle of olive oil.");
      }
      if (typed(EXAMINE, PANTRY) || typed(EXAMINE, FOOD)) return display(PANTRY.desc);
      if (typed(EXAMINE, FIRE)) return display(FIRE.desc);
      if (typed(EXAMINE, TABLE)) return display(TABLE.desc);
      if (typed(TAKE, FOOD) || typed(EAT, FOOD) || typed(COOK, FOOD) || typed(COOK)) {
        changeState(meal += 1);
        switch (meal) {
          case 1: return display("You fix yourself some breakfast - buttered toast with scrambled eggs, and a rasher of bacon.");
          case 2: return display("Feeling peckish, you decide it is time for second breakfast, and you take a generous slice of seedcake and wash it down with a mug of tea.");
          case 3: return display("It must be time for elevenses, you realise. You help yourself to some buttered scones with raspberry jam.");
          case 4: return display("A busy morning calls for an early luncheon. You cut yourself a piece of pork pie and savor every mouthful.");
          case 5: return display("You are still quite full from your early luncheon - and besides, it is not yet time for afternoon tea.");
          case 6: return display("Just a snack, then. You slice yourself a piece of cheese, and eat it with a pickle.");
          default: return display("You are still quite full from your early luncheon - and besides, it is not yet time for afternoon tea.");
        }
      }
    }

    if (at(BAGEND_HILL)) {
      if (typed(LOOK) || typed(EXAMINE, HOUSE)) {
        return display("This is Bag End - a beautiful home on a hill, the envy of many hobbits in the Shire.");
      }
      if (typed(EXAMINE, TREE)) return display(TREE.desc);
      if (typed(EXAMINE, DOOR)) return display(DOOR.desc);
      if (typed(EXAMINE, FLOWERS)) return display(FLOWERS.desc);
      if (typed(EXAMINE, ROCK)) return display(ROCK.desc);
      if (typed(EXAMINE, ROAD)) return display(ROAD.desc);
      if (typed(EXAMINE, WALL)) return display(WALL.desc);
      if (typed(TAKE, FLOWERS)) return display("They belong in the garden.");
      if (typed(TAKE, ROCK)) return display("It's bigger than you are!");
    }

    if (at(LAKE_TREE)) {
      if (typed(LOOK)) {
        return display("You are on the shore of Hobbiton's lake.");
      }
      if (typed(EXAMINE, TREE)) return display("A huge elm tree overlooks the lake.");
      if (typed(EXAMINE, LAKE)) return display(LAKE.desc);
      if (typed(CLIMB_UP, TREE)) return display("The top of the tree has a great view! But perhaps now is not the time.");
      if (typed(EXAMINE, WALL)) return display(WALL.desc);
      if (typed(EXAMINE, ROAD)) return display(ROAD.desc);
      if (typed(EXAMINE, REEDS)) return display(REEDS.desc);
      if (typed(EXAMINE, GOOSE)) return display(GOOSE.desc);
      if (typed(TAKE, REEDS)) return display("The scenery is fine where it already is.");
      if (typed(SWIM)) return display(NO_SWIMMING);
      if (typed(TAKE, GOOSE)) return Sprites.FRODO.isCloseTo(Sprites.GOOSE, 16) ? display("Ouch! You try to pick up the goose, but you quickly change your mind.") : display("You're not close enough.");
    }

    if (at(NEIGHBOR)) {
      if (typed(LOOK)) {
        return display("This is the house of your neighbour, Andwise. Andwise himself is at his gate, smoking a pipe and watching the world go by, as he often does.");
      }
      if (typed(SWIM)) return display(NO_SWIMMING);
      if (typed(EXAMINE, HOUSE)) return display("Andwise lives alone in a small yellow house under a grassy hillock.");
      if (typed(EXAMINE, ANDWISE)) return display(ANDWISE.desc);
      if (typed(EXAMINE, ROAD)) return display(ROAD.desc);
      if (typed(EXAMINE, FENCE)) return display(FENCE.desc);
      if (typed(EXAMINE, WALL)) return display(WALL.desc);
      if (typed(EXAMINE, RIVER)) return display(RIVER.desc);
      if (typed(TALK_TO, ANDWISE)) return display("\"Good morning, young Frodo! What a lovely day to be out and about.\"");
    }

    if (at(HOBBITON)) {
      if (typed(LOOK)) {
        return display("A bridge crosses the river and leads into the Green Dragon inn, which is the centre of Hobbiton.");
      }
      if (typed(SWIM)) return display(NO_SWIMMING);
      if (typed(EXAMINE, RIVER)) return display(RIVER.desc);
      if (typed(EXAMINE, WALL)) return display(WALL.desc);
      if (typed(EXAMINE, INN)) return display(INN.desc);
      if (typed(EXAMINE, HOUSE)) return display(INN.desc);
      if (typed(EXAMINE, MILL)) return display(MILL.desc);
    }

    if (at(GREEN_DRAGON)) {
      if (typed(LOOK)) {
        return display("Most of those already seated in the Green Dragon at this hour are regulars. The only irregular is the wizard Gandalf, on his own in the corner. Behind the bar is Rosie.");
      }
      if (typed(EXAMINE, GANDALF)) return display("Bilbo and Gandalf are great friends since they went adventuring. Living at Bag End, you have become very close to him too. Gandalf looks old and he may be even older, but he always has his wits and a sense of humour.");
      if (typed(EXAMINE, REGULARS)) return display(REGULARS.desc);
      if (typed(TALK_TO, REGULARS)) return display("\"Morning young Frodo!\"\n\"Here for second breakfast?\"\n\"Good morning Frodo\"");
      if (typed(EXAMINE, ROSIE)) return display(ROSIE.desc);
      if (typed(TALK_TO, ROSIE)) return display("\"What will it be today, Mister Frodo?\"");
      if (typed(BUY, MUG_OF_ALE) || typed(BUY_A, MUG_OF_ALE) || typed(BUY_AN, MUG_OF_ALE)) {
        if (has(MUG_OF_ALE)) return display("You already have a mug of ale.");
        if (!has(MONEY_POUCH)) return display("You realise you have forgotten your money at home.");
        changeState(inventory.add(MUG_OF_ALE));
        return display("Rosie pours and hands you a mug of ale.");
      }
      if (typed(TALK_TO, GANDALF)) {
        changeState(gandalfTalk += 1);
        switch (gandalfTalk) {
          case 2:
            return display("\"Frodo my lad! I see you got my note. Come, get yourself something to drink, then come and listen to what I have to say.\"");
          case 3:
            changeState(talkedToGandalf = true);
            addLocationEvent(Location.HOBBITON, "As you cross the river, an idea comes to you. Bilbo loves fishing. If you can organise a day of fishing for him, perhaps he'll leave his ring at home.");
            return display("\"Gandalf, I thought you left the Shire yesterday?\" you ask.",
                           "\"I did give that impression, but I stayed the night here. I had a good reason for it. Tell me, have you ever seen Bilbo without his ring?\"",
                           "\"That little golden ring? He never has it on his finger, but I think he always carries it in his pocket,\" you say.",
                           "\"Exactly. There's something odd about that ring, and I think it makes Bilbo odd too. I want to have a closer look at it, but Bilbo won't let me. And now whenever he sees me, he guards it jealously.\"",
                           "\"Now that he thinks I'm gone, try and get a hold of it and bring it here. Oh and you should be aware - it is an invisibility ring.\"");
          case 4:
            return display("\"Why does Bilbo have an invisibility ring?\" you ask.",
                           "\"He found it at the bottom of a deep dark cave full of goblins. But I'm afraid it is full of dark magic. If you bring it to me, I can check.\"");
          case 5: return display("\"What sort of dark magic?\" you ask.", "\"I'm not sure... maybe a necromancer... look, it might be nothing, but it might be very serious. Try to bring me the ring.\"");                    
          case 6: return display("\"How can I get hold of the ring?\" you ask.", "\"I don't know. Bilbo must take it off sometimes - when he bathes? When he sleeps? I'll wait here until you can get it.\"");
          case 7: return display("\"What will you do when you get the ring?\" you ask.", "\"Check it for hidden writing. Then I will know if it is the same ring I have been warned about.\"");
          default: return display("\"I'll be waiting here,\" says Gandalf. \"Bring me the ring as soon as you can.\"");
        }
      }
    }

    if (at(LAKE_HOUSE)) {
      if (typed(LOOK)) {
        return display("Here you see Halfred, fishing from the side of the lake. His boat is moored here too.");
      }
      if (typed(SWIM)) return display(NO_SWIMMING);
      if (typed(EXAMINE, HALFRED)) return display(HALFRED.desc);
      if (typed(EXAMINE, LAKE)) return display(LAKE.desc);
      if (typed(EXAMINE, TREE)) return display("There are several trees, but none that stand out.");
      if (typed(EXAMINE, HOUSE)) return display("Not a proper hobbit hole - the lake house is mostly used for storing fishing nets and other gear.");
      if (typed(CLIMB_UP, TREE)) return display("There are several trees, but none that seem worth climbing.");
      if (typed(EXAMINE, FISHING_ROD)) return display("Halfred is holding a fishing rod, but doesn't seem to have a bite yet.");
      if (typed(TAKE, FISHING_ROD)) return display("Out of Halfred's hands? I think better not.");
      if (typed(EXAMINE, BOAT)) return display(BOAT.desc);
      if (typed(TAKE, BOAT)) return display("\"Mind if I borrow your boat, Halfred?\" you ask.", "\"Where are you off to?\"", "\"Just... around,\" you answer.", "\"Come back tomorrow and you can take it across the lake on an errand for me.\"");
      if (has(MUG_OF_ALE)) {
        if (typed(GIVE, MUG_OF_ALE, HALFRED) || typed(GIVE, MUG_OF_ALE, TO, HALFRED)) {
          if (!has(FISHING_ROD)) {
            changeState(inventory.remove(MUG_OF_ALE));
            changeState(inventory.add(FISHING_ROD));
            return display("\"Oh! That's very kind of you, lad. Here, you can borrow my spare fishing rod.\"", "He gives you a fishing rod.");
          } else {
            return display("\"Another one? You are too kind. Cheers!\"");
          }
        }
      }
      if (typed(TALK_TO, HALFRED)) {
        if (!talkedToGandalf) return display("\"Are they biting, Halfred?\" you ask. \"None yet this morning, Frodo!\"");
        if (!has(FISHING_ROD)) return display("\"Halfred\", you ask, \"could I borrow a fishing rod?\"",
                                            "\"I have a spare but I don't like to lend it out, it's always getting broken. But for you, Mister Frodo, you can have if you bring me a mug of ale.\"");
        return display("TODO(olsen)");
      }
    }
    return false;
  }

  private boolean maybeLookAtInventory() {
    for (Item item : Item.values()) {
      if (has(item)) {
        if ((item == LETTER && typed(READ, LETTER))
            || typed(EXAMINE, item)) {
          return display(item.desc);
        }
      }
    }
    return false;
  }

  /*private void commit() {
    committed.copyFrom(this);
  }

  private void restoreCommitted() {
    this.copyFrom(committed);
  }*/

  public boolean changeLocation(Location location) {
    if (location == Location.GREEN_DRAGON && gandalfTalk == 0) {
      changeState(gandalfTalk += 1);
      pause(INTERACTIVE, 2);
      display("To your surprise, you see your friend Gandalf the Grey sitting in the Green Dragon. Yesterday he said farewell and set off for the town of Bree. Why is he still here?");
    }

    this.location = location;
    return true;
  }

  public boolean has(Item item) {
    return inventory.contains(item);
  }

  public boolean at(Location location) {
    return this.location == location;
  }

  private boolean typed(Synonym... commands) {
    return prompt.typed(commands);
  }

  private boolean typed(String... commands) {
    return prompt.typed(commands);
  }

  private boolean display(String... texts) {
    for (String text : texts) {
      eventManager.add(new DisplayTextEvent(text));
    }
    return true;
  }

  private boolean addLocationEvent(Location location, String text) {
    eventManager.add(new LocationEvent(location, new DisplayTextEvent(text)));
    return true;
  }

  private boolean pause(boolean interactive, int seconds) {
    eventManager.add(new PauseEvent(interactive, seconds));
    return true;
  }

  private boolean changeState(Object stateChange) {
    //State newState = new State();
    //newState.copyFrom(this);
    //events.add(new StateChangedEvent(newState));
    return true;
  }

  private boolean displayInventory() {
    if (inventory.isEmpty()) return display("You are carrying nothing.");
    StringBuilder result = new StringBuilder("You are carrying:\n");
    for (Item item : inventory) {
      result.append(item.variants()[0]).append("\n");
    }
    return display(result.toString());
  }

  private String cond(boolean condition, String s) {
    return condition ? s : "";
  }
}


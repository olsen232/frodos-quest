package frodo.core;

import static frodo.core.Location.*;
import static frodo.core.Item.*;
import static frodo.core.Noun.*;
import static frodo.core.Progress.*;
import static frodo.core.Verb.*;

import frodo.core.Events.*;
import static frodo.core.Events.*;

import java.io.Serializable;
import java.util.EnumSet;

public class State {
  public Progress progress = Progress.TITLE;
  public Location location = BAGEND_HILL;
  public Location stoolLocation = BAGEND_KITCHEN;
  public boolean triedToLeave = false;

  public EnumSet<Item> inventory = EnumSet.noneOf(Item.class);
  public boolean isWardrobeOpen = false;
  public int gandalfTalk = 0;
  public int meal = 0;
  public int ponyMeal = 0;
  
  public boolean frodoWearingRing = false;
  public boolean frodoHasWornRing = false;

  public boolean gameOver = false;

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
    if (typed("help")) return display("Use arrow keys to move.\nTry typing: \n look \n look at [something] \n talk to [someone] \n take [something] \n inventory");

    if (FrodosQuest.debugMode && maybeDebugCommand()) return true;
    if (maybeLookAtInventory()) return true;

    if (has(MUG_OF_ALE) && typed(DRINK, MUG_OF_ALE)) {
      Sprites.FRODO.drinkAlcohol();
      changeState(inventory.remove(MUG_OF_ALE));
      return display("You drink the mug of ale. Refreshing, but quite strong.");
    }
    if (has(APPLES) && typed(EAT, APPLES)) {
      return display("Just one, then - don't ruin your appetite for lunch. The apple is crisp and sweet.");
    }
    if (has(RING)) {
      if (typed(WEAR, RING) || typed(USE, RING)) {
        if (frodoWearingRing) return display("You are already wearing Bilbo's ring.");
        display("You slip Bilbo's ring on your finger.");
        eventManager.add(new WearRingEvent());
        return true;
      }
      if (typed(TAKE_OFF, RING)) {
        if (!frodoWearingRing) return display("You're not wearing Bilbo's ring.");
        changeState(frodoWearingRing = false);
        return display("You take off Bilbo's ring.");
      }
    }


    if (at(FRODOS_ROOM)) {
      if (typed(GO) || typed(GO, NORTH)) return display("Use the arrow keys to move.");
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
      if (before(BILBO_FISHING)) {
        if (typed(LOOK)) return display("This is Bilbo's room. Bilbo is sitting at his desk, working on his memoirs. A window looks out into the garden.");
        if (typed(EXAMINE, BILBO)) return display("Bilbo is over one hundred, but still in great health. He is working on his memoirs, telling of all the adventures he had in his younger days.");
        if (typed(TALK_TO, BILBO)) {
          if (before(TALKED_TO_GANDALF)) {
            return display("\"Good morning!\" says Bilbo. \"You can fix yourself some breakfast. " +
                "I'm writing the chapter in the cave with the goblins and I may just keep writing until I can see the sun out the other side.\"");
          } else {
            return display("\"It's such a warm spring day! When did you last go fishing?\" you ask.", "\"Not since I broke my fishing rod, I'm afraid\" says Bilbo.");
          }
        }
        if (has(FISHING_ROD)) {
          if (typed(GIVE, FISHING_ROD, BILBO) || typed(GIVE, FISHING_ROD, TO, BILBO) || typed(GIVE, BILBO, FISHING_ROD)) {
            changeState(inventory.remove(FISHING_ROD));
            changeState(progress = BILBO_FISHING);
            return display("\"I was talking to Halfred and he lent me this fishing rod. Do you want to go fishing?\" you ask.",
                           "Bilbo looks out the window. \"It would be a shame to waste this sunshine,\" he says. \"I'll catch us something for dinner!\"",
                           "He takes the fishing rod and sets off for the lake. You don't know if he has his ring with him.");
          }
        }
        if (typed(OPEN, WARDROBE)) return display("Bilbo will let you know if he wants you to go through his wardrobe.");
        if (typed(OPEN, DRESSER)) return display("Bilbo will let you know if he wants you to go through his dresser.");
      } else {
        if (typed(LOOK)) return display("This is Bilbo's room. His memoirs are sitting on his desk. A window looks out into the garden.");
        if (typed(OPEN, WARDROBE)) return display("You open Bilbo's wardrobe and look through his clothes, but you don't find anything interesting.");
        if (typed(OPEN, DRESSER)) return display("The dresser is locked. Bilbo sometimes keeps the ring in there. He must have the key with him.");
        if (has(WATCH_KEY)) {
          if (typed(USE, WATCH_KEY, ON, DRESSER) || typed(USE, WATCH_KEY, DRESSER) || typed(UNLOCK, DRESSER) || typed(UNLOCK, DRESSER, WITH, WATCH_KEY)) {
            if (!has(RING)) {
              changeState(inventory.add(RING));
              return display("You unlock the dresser and open it. Without even having to search, you immediately see Bilbo's ring, hanging on a loop of string. You put it in your pocket.");
            } else {
              return display("You already found Bilbo's ring in the dresser.");
            }
          }
        }
        if (has(POCKET_WATCH)) {
          if (typed(USE, POCKET_WATCH, ON, DRESSER) || typed(USE, POCKET_WATCH, DRESSER) || typed(UNLOCK, DRESSER, WITH, POCKET_WATCH)) {
            if (has(RING)) {
              return display("You already found Bilbo's ring in the dresser.");
            } else {
              changeState(inventory.add(WATCH_KEY));
              return display("Attached to the watch is a small key, for winding it up.");
            }
          }
        }
      }
      if (typed(READ, MEMOIRS)) return display(MEMOIRS.desc);
      if (typed(TAKE, MEMOIRS)) return display("Bilbo would probably prefer you left those as they are.");
    }

    if (at(BAGEND_KITCHEN)) {
      if (typed(LOOK)) {
        return display("This is the kitchen at Bag End. It is well stocked as a hobbit's should be - the pantry is filled with food."
            + cond(stoolLocation == BAGEND_KITCHEN, " Next to the pantry is a wooden stool, for reaching the top shelf.")
            + cond(!has(OLIVE_OIL), " A bottle of olive oil stands on the bench."));
      }
      if (typed(EXAMINE, STOOL)) return display("Next to the pantry is a wooden stool, for reaching the top shelf.");
      if (typed(EXAMINE, BENCH)) {
        if (!has(OLIVE_OIL)) return display("A bottle of olive oil stands on the bench.");
        else return display(BENCH.desc);
      }
      if (typed(EXAMINE, OLIVE_OIL)) return display("A bottle of olive oil stands on the bench.");
      if (stoolLocation == BAGEND_KITCHEN && typed(TAKE, STOOL)) {
        changeState(inventory.add(STOOL));
        changeState(stoolLocation = null);
        return display("You take the wooden stool with you, for a hobbit never knows when he might need some extra height.");
      }
      if (!has(OLIVE_OIL) && typed(TAKE, OLIVE_OIL)) {
        changeState(inventory.add(OLIVE_OIL));
        return display("You take the bottle of olive oil.");
      }
      if (!has(SKILLET) && typed(TAKE, SKILLET)) {
        changeState(inventory.add(SKILLET));
        return display("You take your favourite skillet.");
      }
      if (!has(KNIFE) && typed(TAKE, KNIFE)) {
        changeState(inventory.add(KNIFE));
        return display("You take your favourite knife.");
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

    if (at(TREE_BY_LAKE)) {
      if (typed(LOOK)) {
        return display("You are on the shore of Hobbiton's lake.");
      }
      if (typed(EXAMINE, TREE)) return display("A huge elm tree overlooks the lake.");
      if (typed(EXAMINE, LAKE)) return display(LAKE.desc);
      if (typed(CLIMB_UP, TREE)) return display("Climbing trees is a bit tricky for hobbits. The branches are far apart and your arms are not long.");
      if (typed(EXAMINE, WALL)) return display(WALL.desc);
      if (typed(EXAMINE, ROAD)) return display(ROAD.desc);
      if (typed(EXAMINE, REEDS)) return display(REEDS.desc);
      if (typed(EXAMINE, GOOSE)) return display(GOOSE.desc);
      if (typed(TAKE, REEDS)) return display("The scenery is fine where it already is.");
      if (typed(SWIM)) return display(NO_SWIMMING);
      if (typed(TAKE, GOOSE)) return Sprites.FRODO.isCloseTo(Sprites.GOOSE, 16) ? display("Ouch! You try to pick up the goose, but you quickly change your mind.") : display("You're not close enough.");
      if (typed(TALK_TO, GOOSE)) return display(randomOneOf(GOOSE_CONVO));
      if (atOrAfter(BILBO_FISHING) && before(BILBO_IN_BOAT)) {
        if (typed(EXAMINE, BILBO)) return display("Bilbo is here fishing with the fishing rod you lent him.");
        if (typed(TALK_TO, BILBO)) return display("\"Are they biting, Bilbo?\" you ask. \"Not so far, I'm afraid. I haven't seen many fish here in the shallows. That's why Halfred has a boat I suppose.\"");
      }
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
        return display("A bridge crosses the river and leads into the Green Dragon inn, which is the centre of Hobbiton."
                       + cond(at(BOUGHT_BARREL), " A barrel of ale stands here on a little cart."));
      }
      if (typed(SWIM)) return display(NO_SWIMMING);
      if (typed(EXAMINE, RIVER)) return display(RIVER.desc);
      if (typed(EXAMINE, WALL)) return display(WALL.desc);
      if (typed(EXAMINE, INN)) return display(INN.desc);
      if (typed(EXAMINE, HOUSE)) return display(INN.desc);
      if (typed(EXAMINE, MILL)) return display(MILL.desc);
      if (at(BOUGHT_BARREL)) {
        if (typed(EXAMINE, BARREL_OF_ALE) || typed(EXAMINE, CART)) return display("A barrel of ale stands here on a litte cart.");
        if (typed(TAKE, BARREL_OF_ALE) || typed(TAKE, CART)) return display("You tug on the barrel. Even on wheels, you can barely shift it an inch.");
      }
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
      if (atOrAfter(NEED_BARREL) && (typed(BUY, BARREL_OF_ALE) || typed(BUY_A, BARREL_OF_ALE) || typed(BUY_AN, BARREL_OF_ALE))) {
        if (atOrAfter(BOUGHT_BARREL)) return display("You already bought a whole barrel of ale today.");
        changeState(progress = BOUGHT_BARREL);
        return display("Rosie looks surprised, but sells you a whole barrel of ale at quite a reasonable price. \"I'll bring it up from the cellar and leave it outside for you,\" she says.");
      }
      if (typed(TALK_TO, GANDALF)) {
        changeState(gandalfTalk += 1);
        switch (gandalfTalk) {
          case 2:
            return display("\"Frodo my lad! I see you got my note. Come, get yourself something to drink, then come and listen to what I have to say.\"");
          case 3:
            progressForward(TALKED_TO_GANDALF);
            addLocationEvent(Location.HOBBITON, true, "As you cross the river, an idea comes to you. Bilbo loves fishing. If you can organise a day of fishing for him, perhaps he'll leave his ring at home.");
            return display("\"Gandalf, I thought you left the Shire yesterday?\" you ask.",
                           "\"I did give that impression, but I stayed the night here. I had a good reason for it. Tell me, have you ever seen Bilbo without his ring?\"",
                           "\"That little golden ring? He never has it on his finger, but I think he normally carries it in his pocket,\" you say.",
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

    if (at(HOUSE_BY_LAKE)) {
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
      if (has(MUG_OF_ALE)) {
        if (typed(GIVE, MUG_OF_ALE, HALFRED) || typed(GIVE, MUG_OF_ALE, TO, HALFRED) || typed(GIVE, HALFRED, MUG_OF_ALE)) {
          if (!has(FISHING_ROD)) {
            changeState(inventory.remove(MUG_OF_ALE));
            changeState(inventory.add(FISHING_ROD));
            return display("\"Oh! That's very kind of you, lad. Here, you can borrow my spare fishing rod.\"", "He gives you a fishing rod.");
          } else {
            return display("\"Another one? You are too kind. Cheers!\"");
          }
        }
      }
      boolean askAboutBoat = false;
      if (typed(TALK_TO, HALFRED)) {
        if (atOrAfter(FRODO_IN_BOAT)) return display("\"All well Mister Frodo?\" asks Halfred. \"Very well Halfred, many thanks!\" you reply.");
        if (atOrAfter(BILBO_FISHING)) {
          askAboutBoat = true;
        } else {
          if (atOrAfter(TALKED_TO_GANDALF) && !has(FISHING_ROD)) {
            return display("\"Halfred\", you ask, \"could I borrow a fishing rod?\"",
                           "\"I have a spare but I don't like to lend it out, it's always getting broken. But for you, Mister Frodo, you can have it if you bring me a mug of ale.\"");
          }
          return display("\"Are they biting, Halfred?\" you ask. \"None yet this morning, Frodo!\"");
        }
      }
      if ((before(FRODO_IN_BOAT) && typed(TAKE, BOAT)) || askAboutBoat) {
        if (atOrAfter(BILBO_FISHING)) {
          progressForward(NEED_BARREL);
          return display("\"Halfred\", you ask, \"could I - well, can Bilbo - borrow your boat?\"",
             "\"Mister Frodo, I owe you one since our last misadventure - but I don't want people to think this boat is for hire.\" says Halfred.",
             "\"Tell you what - you can borrow the boat if you bring me a barrel of ale.\"");
        }
        return display("\"Mind if I borrow your boat, Halfred?\" you ask.", "\"Where are you off to?\"", "\"Just... around,\" you answer.", "\"Come back tomorrow and you can take it across the lake on an errand for me.\"");
      }
    }
    
    if (at(APPLE_TREE_FIELD)) {
      if (typed(LOOK)) {
        return display("In the middle of a field is a great big apple tree.");
      }
      if (typed(EXAMINE, TREE) || typed(EXAMINE, APPLE_TREE)) return display(APPLE_TREE.desc);
      if (typed(CLIMB_UP, TREE)) return display("The branches of the apple tree are much too high for you to reach.");
      if (typed(EXAMINE, APPLES)) return display("The apples are already ripe and look juicy and sweet.");
      if (typed(TAKE, APPLES)) {
        if (has(APPLES)) return display("You already have plenty of apples.");
        if (Sprites.FRODO.isStandingOnStool()) {
          changeState(inventory.add(APPLES));
          return display("From here, you can reach a dozen or so red, juicy, low-hanging apples. So you take them all.");
        }
        if (stoolLocation == APPLE_TREE_FIELD) return display("Maybe if you were standing on the stool.");
        return display("The tree is tall and even the lowest hanging apples are out of reach."); 
      }
      if (stoolLocation == null) {
        if (typed(USE, STOOL) || typed(PUT_DOWN, STOOL) || typed(CLIMB_ON, STOOL)) {
          changeState(inventory.remove(STOOL));
          return changeState(stoolLocation = Location.APPLE_TREE_FIELD);
        }
      }
      if (stoolLocation == APPLE_TREE_FIELD && typed(TAKE, STOOL)) {
        changeState(inventory.add(STOOL));
        changeState(stoolLocation = null);
        return display("You take the wooden stool with you, for a hobbit never knows when he might need some extra height.");
      }
    }

    if (at(WEST_FIELD)) {
      if (typed(LOOK)) {
        return display("In this field is a goat and two pigs.");
      }
      if (typed(EXAMINE, TREE)) return display("There are several trees, but none that stand out.");
      if (typed(EXAMINE, GOAT)) return display(GOAT.desc);
      if (typed(TALK_TO, GOAT)) return display(randomOneOf(GOAT_CONVO));
      if (typed(EXAMINE, PIG)) return display(PIG.desc);
      if (typed(TALK_TO, PIG)) return display(randomOneOf(PIG_CONVO));
      if (typed(TAKE, GOAT)) return display("A bit on the heavy side... and you don't even really want a goat.");
      if (typed(TAKE, PIG)) return display("A bit on the heavy side... and you don't even really want a pig.");
      if (has(APPLES)) {
        if (typed(GIVE, APPLES, PIG) || typed(GIVE, APPLES, TO, PIG) || typed(GIVE, PIG, APPLES)) {
          Sprites.makeAnimalsFollow();
          return display("The pig greedily munches on an apple. Now the animals are all following you, hoping for apples.");
        }
        if (typed(GIVE, APPLES, GOAT) || typed(GIVE, APPLES, TO, GOAT) || typed(GIVE, GOAT, APPLES)) {
          Sprites.makeAnimalsFollow();
          return display("The goat greedily munches on an apple. Now the animals are all following you, hoping for apples.");
        }
      }
    }

    if (at(EAST_FIELD)) {
      if (typed(LOOK)) {
        return display("This is the field of Riddle, the pony.");
      }
      if (typed(EXAMINE, TREE)) return display("There are several trees, but none that stand out.");
      if (typed(EXAMINE, PONY)) return display(PONY.desc);
      if (typed(TALK_TO, PONY)) return display(randomOneOf(PONY_CONVO));
      if (typed(TAKE, PONY)) return display("Riddle is much too heavy to carry! And much stronger than you are.");
      if (has(APPLES)) {
        if (typed(GIVE, APPLES, PONY) || typed(GIVE, APPLES, TO, PONY) || typed(GIVE, PONY, APPLES)) {
          changeState(ponyMeal += 1);
          return display("Riddle the pony eats the whole apple from your hand. He starts to follow you, hoping for more.");
        }
      }
    }
    
    return false;
  }

  private boolean maybeLookAtInventory() {
    for (Item item : Item.values()) {
      if (has(item)) {
        if ((item == LETTER && typed(READ, LETTER))
            || typed(EXAMINE, item)) {
          if (item == POCKET_WATCH) {
            changeState(inventory.add(WATCH_KEY));
          }
          return display(item.desc);
        }
      }
    }
    return false;
  }

  private boolean maybeDebugCommand() {
    if (typed("summon", "boat") && progressForward(FRODO_IN_BOAT)) {
      Sprites.BOAT.x = Sprites.FRODO.x;
      Sprites.BOAT.y = Sprites.FRODO.y;
      return display(Elvish.sayElvish() + " You have summoned: boat");
    }
    for (Item item : Item.values()) {
      if (!has(item) && typed(SUMMON, item)) {
        changeState(inventory.add(item));
        return display(Elvish.sayElvish() + " You have summoned: " + Synonyms.spacedLowerCase(item.name()));
      }
    }
    for (Location location : Location.values()) {
      if (typed("warp", Synonyms.spacedLowerCase(location.name()))) {
        return warp(location);
      }
    }
    for (Progress progress : Progress.values()) {
      if (before(progress) && typed("progress", Synonyms.spacedLowerCase(progress.name()))) {
        progressForward(progress);
        return display(Elvish.sayElvish());
      }
    }
    if (typed("halfway")) {
      inventory.add(LETTER);
      inventory.add(MONEY_POUCH);
      inventory.add(STOOL);
      inventory.add(FISHING_ROD);
      inventory.add(APPLES);
      inventory.add(MUG_OF_ALE);
      progressForward(TALKED_TO_GANDALF);
      isWardrobeOpen = true;
      gandalfTalk = 4;
      stoolLocation = null;
      return warp(BILBOS_ROOM);
    }
    return false;
  }

  private boolean warp(Location location) {
    Sprites.FRODO.ensureInBounds(Scene.forLocation(location));
    changeLocation(location);
    return true;
  }

  /*private void commit() {
    committed.copyFrom(this);
  }

  private void restoreCommitted() {
    this.copyFrom(committed);
  }*/

  public boolean changeLocation(Location location) {
    if (location == Location.HOBBITON && this.location == Location.HOBBITON) {
      if (!triedToLeave) {
        changeState(triedToLeave = true);
        if (atOrAfter(TALKED_TO_GANDALF)) {
          display("That way is the road out of Hobbiton. But you have important things to do in Hobbiton today.");
        } else if (has(LETTER)) {
          display("That way is the road out of Hobbiton. But you're supposed to be meeting someone at the Green Dragon today.");
        } else {
          display("That way is the road out of Hobbiton. For some reason - you don't know why - you feel you shouldn't leave Hobbiton today.");
        }
      }
      return false;
    }

    if (location == Location.GREEN_DRAGON && gandalfTalk == 0) {
      changeState(gandalfTalk += 1);
      pause(INTERACTIVE, 2);
      display("To your surprise, you see your friend Gandalf the Grey sitting in the Green Dragon. Yesterday he said farewell and set off for the town of Bree. Why is he still here?");
    }

    if (location == Location.BAGEND_HILL && has(RING) && !gameOver) {
      changeState(gameOver = true);
      pause(INTERACTIVE, 2);
      display("You have completed the playable demo of Frodo's Quest - no more than this has been written. It should hopefully be ready by the end of 1989!");
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

  public boolean isInside() {
    return Location.isInside(this.location);
  }

  public boolean before(Progress progress) {
    return this.progress.ordinal() < progress.ordinal();
  }

  public boolean atOrBefore(Progress progress) {
    return this.progress.ordinal() <= progress.ordinal();
  }

  public boolean after(Progress progress) {
    return this.progress.ordinal() > progress.ordinal();
  }

  public boolean atOrAfter(Progress progress) {
    return this.progress.ordinal() >= progress.ordinal();
  }

  public boolean progressForward(Progress progress) {
    if (before(progress)) {
      this.progress = progress;
      return true;
    }
    return false;
  }

  public boolean at(Progress progress) {
    return this.progress == progress;
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

  private boolean addLocationEvent(Location location, boolean touchingSpecial, String text) {
    eventManager.add(new LocationEvent(location, touchingSpecial, new DisplayTextEvent(text)));
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

  public boolean hitchBarrel() {
    progressForward(HITCHED_BARREL);
    display("Before he can back out of it, you quickly hitch Riddle to the little cart.");
    eventManager.add(new LocationEvent(HOUSE_BY_LAKE, true, new DeliveredBarrelEvent()));
    return true;
  }

  private static String[] GOOSE_CONVO = new String[] {
    "\"Good morning, Goose!\"",
    "\"Stay calm... there's a good goose.\"",
    "\"Stop following me!\"",
    "\"Don't come near me!\"",
    "\"Leave me alone!\"",
    "\"Good goose. Good goose. No! I mean you no harm!\"",
    "\"If you hiss at me one more time I'll wring your neck!\"",
  };

  private static String[] PONY_CONVO = new String[] {
    "\"Good morning, Riddle!\"",
    "\"You're a good pony.\"",
    "\"Are you still hungry?\"",
    "\"Good boy, Riddle.\"",
    "\"Can you come with me, Riddle?\"",
  };

  private static String[] GOAT_CONVO = new String[] {
    "\"Good morning, Goat!\"",
    "\"Are you still hungry?\"",
    "\"Don't even thing about headbutting me.\"",
    "\"Nice day, isn't it!\"",
  };

    private static String[] PIG_CONVO = new String[] {
    "\"Good morning, Pig!\"",
    "\"That'll do, pig. That'll do.\"",
    "\"Are you still hungry?\"",
    "\"Nice day, isn't it!\"",
  };

  private static String randomOneOf(String[] options) {
    int selected = (int) (options.length * Math.random());
    return options[selected];
  }
}

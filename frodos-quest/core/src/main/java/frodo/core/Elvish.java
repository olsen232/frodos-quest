package frodo.core;

public final class Elvish {

    public static final String[] ELVISH = new String[] {
        "A! Tollen gur na Balannor!",
        "Nu goll dhúath e nathron dhonn!",
        "Onethelais panna i nor!",
        "Gelaidh gelaid go linnod an!",
        "Nestad. Ai nae uamdir dar!",
        "Harnannin athan nestad ban!",
        "Telperion a Laurelin!",
        "In edhil si awarthar Dhun!",
        "Farol i viriath corin!",
        "E galad vedui o Aman!",
        "I aear dholl. Saer dîn vanadh!",
        "Aphadar 'lin e-fast i chin!",
        "Finarfin. Athradar athrad!",
        "Chelegnen. Si falas thrunen!",
        "I ithil eria. Romru can!",
    };

    public static String elvish() {
      return ELVISH[(int)(ELVISH.length * Math.random())];
    }

    public static String sayElvish() {
      return "\"" + elvish() + "\" you say.";
    }
}
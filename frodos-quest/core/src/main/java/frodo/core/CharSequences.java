package frodo.core;

public final class CharSequences {
  private CharSequences() {}
  
  public static boolean isEmpty(CharSequence c) {
    return c.length() == 0;
  }
  
  public static char lastCharOf(CharSequence c) {
    return c.charAt(c.length() - 1);
  }
  
  public static boolean aStartsWithB(CharSequence a, CharSequence b) {
    if (b.length() > a.length()) return false;
    for (int i = 0; i < b.length(); i++) {
      if (a.charAt(i) != b.charAt(i)) return false;
    }
    return true;
  }
  
  public static int countChars(CharSequence text, char toCount) {
    int count = 0;
    for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == toCount) count++;
    }
    return count;
  }
}
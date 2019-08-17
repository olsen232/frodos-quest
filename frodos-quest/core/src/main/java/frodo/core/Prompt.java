package frodo.core;

import static frodo.core.PixelConstants.*;
import static frodo.core.CharSequences.*;

import java.util.HashSet;
import java.util.Set;

public class Prompt {

  public static final char BACKSPACE = '\010';
  public static final char TAB = '\t';

  private static final String NO_MATCH = " \010 NO_MATCH";
  private static final String EXACT_MATCH = " \010 EXACT_MATCH";

  public boolean submit = false;
  
  protected StringBuilder input = new StringBuilder();
  protected StringBuilder userCommand = new StringBuilder();
  protected Set<String> suggestions = new HashSet<String>();
  
  public String suggestion = null; 
  
  public void clear() {
    input.setLength(0);
    userCommand.setLength(0);
    suggestions.clear();
  }
  
  public boolean hasInput() {
    return input.length() > 0;
  }
  
  public boolean keyTyped(char c) {
    if (isLetter(c)) {
      if (input.length() == MAX_PROMPT_CHARS) return false;
      input.append(c);
      userCommand.append(c);
      return true;
      
    } else if (c == ' ' && input.length() < MAX_PROMPT_CHARS) {
      input.append(c);
      if (isEmpty(userCommand) || lastCharOf(userCommand) == ' ') return false;
      userCommand.append(c);
      return true;

    } else if (c == BACKSPACE && !isEmpty(input)) {
      input.deleteCharAt(input.length() - 1);
      if (isEmpty(userCommand)) return false;
      if (lastCharOf(userCommand) == ' ' && lastCharOf(input) == ' ') return false;
      userCommand.deleteCharAt(userCommand.length() - 1);
      return true;

    } else if (c == TAB) {
      return autocomplete();
    }
    return false;
  }
  
  public boolean autocomplete() {
    if (suggestion != null) {
      input.append(suggestion);
      userCommand.append(suggestion);
      suggestion = "";
      return true;
    }
    return false;
  }    
  
  public void draw(Surface surface, boolean interactive) {
    int x = 0;
    Image[] font = interactive ? Font.WHITE : Font.GREY;
    surface.drawText(font, ">", x, PROMPT_Y);
    x += FONT_SIZE;
    
    if (!interactive) return;

    font = (suggestion != null) ? Font.WHITE : Font.GREY;
    surface.drawText(font, input, x, PROMPT_Y);
    x += input.length() * FONT_SIZE;
    surface.drawText(font, "_", x, PROMPT_Y);
    
    if (suggestion != null) {
      surface.drawText(Font.GREY, suggestion, x, PROMPT_Y);
    }
  }
  
  public boolean typed(Synonym... commands) {
    if (!submit) {
      addSuggestionIfCouldMatch(commands);
      return false;
    }

    return isExactMatch(commands);
  }

  public boolean typed(String... commands) {
    if (!submit) {
      addSuggestionIfCouldMatch(commands);
      return false;
    }

    return isExactMatch(commands);
  }

  public void addSuggestionIfCouldMatch(Synonym... commands) {
    addSuffixAsSuggestion(suggestSuffixToMatch(false, commands));
  }

  public void addSuggestionIfCouldMatch(String... commands) {
    addSuffixAsSuggestion(suggestSuffixToMatch(false, commands));
  }
  
  public void clearSuggestions() {
    suggestions.clear();
  }
  
  public void updateSuggestion() {
    suggestion = findOneSuggestion();
  }

  private String findOneSuggestion() {
    if (suggestions.isEmpty()) return null;
    if (suggestions.contains("")) return "";
    String result = null;
    for (String suggestion : suggestions) {
      if (result == null) {
        result = suggestion;
        continue;
      }
      result = longestCommonPrefix(result, suggestion);
      if (result.isEmpty()) return result;
    }
    return result;
  }

  private void addSuffixAsSuggestion(String suffix) {
    if (suffix == NO_MATCH) {
      return;
    } else if (suffix == EXACT_MATCH) {
      suggestions.add("");
    } else {
      suggestions.add(suffix);
    }
  }

  public boolean isExactMatch(Synonym... commands) {
    return suggestSuffixToMatch(true, commands) == EXACT_MATCH;
  }

  public boolean isExactMatch(String... commands) {
    return suggestSuffixToMatch(true, commands) == EXACT_MATCH;
  }

  private String suggestSuffixToMatch(boolean exactMatchOnly, Synonym... commands) {
    CharSequence userCommand = this.userCommand;

    outer:
    for (Synonym command : commands) {
      if (!exactMatchOnly && isEmpty(userCommand)) return "";

      for (String variant : command.variants()) {
        if (!exactMatchOnly && aStartsWithB(variant, userCommand)) {
          variant = variant.substring(userCommand.length());
          return variant;
        }

        if (startsWithToken(userCommand, variant)) {
          userCommand = removePrefixToken(userCommand, variant);
          continue outer;
        }
      }

      return NO_MATCH;
    }
    return isEmpty(userCommand) ? EXACT_MATCH : NO_MATCH;
  }

  private String suggestSuffixToMatch(boolean exactMatchOnly, String... commands) {
    CharSequence userCommand = this.userCommand;

    for (String command : commands) {
      if (!exactMatchOnly && isEmpty(userCommand)) return "";

      if (!exactMatchOnly && aStartsWithB(command, userCommand)) {
        command = command.substring(userCommand.length());
        return command;
      }

      if (startsWithToken(userCommand, command)) {
        userCommand = removePrefixToken(userCommand, command);
        continue;
      }

      return NO_MATCH;
    }
    return isEmpty(userCommand) ? EXACT_MATCH : NO_MATCH;
  }

  private static boolean startsWithToken(CharSequence s, String token) {
    if (!aStartsWithB(s, token)) return false;
    return (s.length() <= token.length()) || s.charAt(token.length()) == ' ';
  }

  private static CharSequence removePrefixToken(CharSequence s, String token) {
    if (s.length() <= token.length()) return "";
    return s.subSequence(token.length() + 1, s.length());
  }

  private static String longestCommonPrefix(String a, String b) {
    int min = Math.min(a.length(), b.length());
    int i;
    for (i = 0; i < min; i++) {
      if (a.charAt(i) != b.charAt(i)) break;
    }
    return a.substring(0, i);
  }
  
  private static boolean isLetter(char c) {
    return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
  }
}


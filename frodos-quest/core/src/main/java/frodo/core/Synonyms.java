package frodo.core;

public class Synonyms {
  private Synonyms() {}

  public static String spacedLowerCase(String enumName) {
    return enumName.toLowerCase().replace("_", " ");
  }
  
  public static String[] getVariants(String enumName, String[] rest) {
    int len = rest.length;
    String[] variants = new String[len + 1];
    variants[0] = Synonyms.spacedLowerCase(enumName);
    for (int i = 0; i < len; i++) {
      variants[i + 1] = rest[i];
    }
    return variants;
  }
  
  public static String[] getVariantsSkipDesc(String enumName, String[] rest) {
    int len = rest.length;
    String[] variants = new String[Math.max(len, 1)];
    variants[0] = Synonyms.spacedLowerCase(enumName);
    for (int i = 0; i < len - 1; i++) {
      variants[i + 1] = rest[i];
    }
    return variants;
  }
  
  public static String getDesc(String[] rest) {
    return rest.length > 0 ? rest[rest.length - 1] : "";
  }
}

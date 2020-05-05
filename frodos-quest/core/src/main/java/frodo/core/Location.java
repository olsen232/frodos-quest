package frodo.core;

public enum Location {
  FRODOS_ROOM,
  BAGEND_HALLWAY,
  BILBOS_ROOM,
  BAGEND_KITCHEN,
  BAGEND_HILL,
  TREE_BY_LAKE,
  HOUSE_BY_LAKE,
  NEIGHBOR,
  HOBBITON,
  GREEN_DRAGON,
  APPLE_TREE_FIELD,
  WEST_FIELD;
  
  public static final Location[] ALL_LOCATIONS = Location.values();
  
  public static boolean isInside(Location location) {
    switch (location) {
      case FRODOS_ROOM:
      case BAGEND_HALLWAY:
      case BILBOS_ROOM:
      case BAGEND_KITCHEN:
      case GREEN_DRAGON:
        return true;
      default: 
        return false;
    }
  }}

var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.frodosquest;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = '7A4FB5DAEC629EFAE754C7C91FCC0613';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 8:1}, $intern_2 = {3:1}, $intern_3 = {3:1, 13:1, 9:1, 10:1}, $intern_4 = {19:1, 33:1, 3:1, 7:1, 6:1}, $intern_5 = {19:1, 34:1, 3:1, 7:1, 6:1}, $intern_6 = {17:1, 3:1, 7:1, 6:1}, $intern_7 = {19:1, 61:1, 3:1, 7:1, 6:1}, $intern_8 = {19:1, 29:1, 3:1, 7:1, 6:1}, $intern_9 = {74:1, 3:1, 13:1, 9:1, 10:1}, $intern_10 = {88:1}, $intern_11 = {41:1}, $intern_12 = {49:1}, $intern_13 = {39:1}, $intern_14 = -16777216, $intern_15 = {79:1, 26:1, 3:1, 7:1, 6:1}, $intern_16 = -2147483648, $intern_17 = {68:1, 3:1}, $intern_18 = {14:1, 3:1, 7:1, 6:1}, $intern_19 = 65535, $intern_20 = {3:1, 89:1, 155:1}, $intern_21 = {18:1, 21:1}, $intern_22 = {30:1, 28:1, 43:1, 54:1, 50:1}, $intern_23 = 34962, $intern_24 = 34963, $intern_25 = {57:1}, $intern_26 = {18:1, 63:1, 21:1}, $intern_27 = {3:1, 7:1, 6:1, 15:1}, $intern_28 = -3.4028234663852886E38, $intern_29 = 3.4028234663852886E38;
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_5(object){
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (hashCode__I__devirtual$(object) >>> 0).toString(16);
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && (typeof src_0 === 'object' || typeof src_0 === 'function') && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  this.sequentialId = nextSequentialId++;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(typeId){
  var clazz;
  clazz = new Class;
  clazz.typeName = 'Class$' + (typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
  return clazz;
}

function createForClass(typeId){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForInterface(){
  var clazz;
  clazz = createClassObject(null);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(primitiveTypeId){
  var clazz;
  clazz = createClassObject(primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(116, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_11(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
_.sequentialId = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass(1);
var Ljava_lang_Class_2_classLit = createForClass(116);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $setPreferredSoundTypes(this$static, soundTypes){
  var s$index, s$max;
  for (s$index = 0 , s$max = soundTypes.length; s$index < s$max; ++s$index)
  ;
  this$static.preferredSoundTypes = soundTypes;
}

function SoundController(){
  var s, i, gwtVoices, style;
  $clinit_SoundController();
  this.soundContainer = ($clinit_DOM() , $doc.createElement('div'));
  $clinit_Impl();
  s = $doc.location.href;
  i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  gwtVoices = getParameter('gwt-voices');
  $equals(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 31, 0, [FLASH])):$equals(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 31, 0, [HTML5])):$equals(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 31, 0, [WEB_AUDIO])):$equals(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 31, 0, [NATIVE])):$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 31, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(($clinit_RootPanel() , $doc.body), this.soundContainer);
  style = this.soundContainer.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  style['left'] = ($clinit_Style$Unit() , '-500.0px');
  style['top'] = '-500.0px';
  style['width'] = '0.0px';
  style['height'] = '0.0px';
}

defineClass(262, 1, {}, SoundController);
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass(262);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, {3:1, 7:1, 6:1});
_.compareTo = function compareTo(other){
  return this.ordinal - other.ordinal;
}
;
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass(6);
function $clinit_SoundType(){
  $clinit_SoundType = emptyMethod;
  FLASH = new SoundType('FLASH', 0, 'flash');
  HTML5 = new SoundType('HTML5', 1, 'html5');
  NATIVE = new SoundType('NATIVE', 2, 'native');
  WEB_AUDIO = new SoundType('WEB_AUDIO', 3, 'webaudio');
}

function SoundType(enum$name, enum$ordinal, queryParameterValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.queryParameterValue = queryParameterValue;
}

function values_0(){
  $clinit_SoundType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 31, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(31, 6, {31:1, 3:1, 7:1, 6:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum(31, values_0);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass(0);
function $clearRect(this$static, x_0, y_0, w, h){
  this$static.clearRect(x_0, y_0, w, h);
}

function $drawImage(this$static, image, dx, dy){
  this$static.drawImage(image, dx, dy);
}

function $drawImage_0(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $drawImage_1(this$static, image, sx, sy, sw, sh, dx, dy, dw, dh){
  this$static.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $scale(this$static, x_0, y_0){
  this$static.scale(x_0, y_0);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 42, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument(exception != this$static);
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_2, 10, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 10, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
  ;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(10, 1, {3:1, 10:1});
_.createError = function createError(msg){
  return new $wnd.Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_2(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass(10);
defineClass(13, 10, {3:1, 13:1, 10:1});
var Ljava_lang_Exception_2_classLit = createForClass(13);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_1(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_2(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(9, 13, $intern_3, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass(9);
defineClass(94, 9, $intern_3);
var Ljava_lang_JsException_2_classLit = createForClass(94);
defineClass(167, 94, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass(167);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_5(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

defineClass(69, 167, {69:1, 3:1, 13:1, 9:1, 10:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(69);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(328, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass(328);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $reportError(handler.this$01, 'Uncaught Exception: ', e);
    return;
  }
  reportToBrowser(instanceOf(e, 69)?e.getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(294, 328, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(294);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_1(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName) || $equals(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && (stackTrace.splice(0, i + 1) , undefined);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(338, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass(338);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(168, 338, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 42, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass(168);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(339, 338, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 42, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass(339);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(169, 339, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass(169);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = this$static.className || '';
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = this$static.className || '';
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase(elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 33, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(33, 6, $intern_4);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum(33, values_1);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(222, 33, $intern_4, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum(222, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(223, 33, $intern_4, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum(223, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(224, 33, $intern_4, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum(224, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(225, 33, $intern_4, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum(225, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 34, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(34, 6, $intern_5);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum(34, values_2);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(226, 34, $intern_5, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum(226, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(227, 34, $intern_5, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum(227, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(228, 34, $intern_5, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum(228, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(229, 34, $intern_5, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum(229, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 17, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(17, 6, $intern_6);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum(17, values_3);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(213, 17, $intern_6, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum(213, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(214, 17, $intern_6, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum(214, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(215, 17, $intern_6, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum(215, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(216, 17, $intern_6, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum(216, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(217, 17, $intern_6, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum(217, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(218, 17, $intern_6, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum(218, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(219, 17, $intern_6, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum(219, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(220, 17, $intern_6, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum(220, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(221, 17, $intern_6, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum(221, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 61, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(61, 6, $intern_7);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum(61, values_4);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(230, 61, $intern_7, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum(230, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(231, 61, $intern_7, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum(231, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$WhiteSpace();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 29, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(29, 6, $intern_8);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum(29, values_5);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(232, 29, $intern_8, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum(232, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(233, 29, $intern_8, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum(233, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(234, 29, $intern_8, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum(234, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(235, 29, $intern_8, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum(235, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(236, 29, $intern_8, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum(236, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument);
}

defineClass(347, 1, {});
_.toString_0 = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass(347);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(348, 347, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass(348);
function ResizeEvent(width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
}

function fire(source, width_0, height){
  var event_0;
  if (TYPE) {
    event_0 = new ResizeEvent(width_0, height);
    $fireEvent(source, event_0);
  }
}

defineClass(295, 348, {}, ResizeEvent);
_.dispatch = function dispatch(handler){
  $onResize(handler, this);
}
;
_.getAssociatedType = function getAssociatedType(){
  return TYPE;
}
;
_.height_0 = 0;
_.width_0 = 0;
var TYPE;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass(295);
defineClass(208, 1, {});
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass(208);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(120, 208, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass(120);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler) , new LegacyHandlerWrapper;
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 74)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

defineClass(119, 1, {});
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass(119);
defineClass(349, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass(349);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_0(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType()) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put_2(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_4(this$static.map_0, type_0);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_2(this$static.map_0, type_0, sourceMap);
  }
  handlers = sourceMap.get_0(source);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = $get_4(this$static.map_0, type_0);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = sourceMap.get_0(null);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = $next_2(c$iterator);
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(209, 349, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass(209);
function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(210, 209, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass(210);
function LegacyHandlerWrapper(){
}

defineClass(316, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass(316);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:causes.iterator().next_1());
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = cause$iterator.next_1();
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    first?(first = false):(b.string += '; ' , b);
    $append_7(b, t.getMessage());
  }
  return b.string;
}

defineClass(74, 9, $intern_9, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass(74);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(317, 74, $intern_9, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass(317);
function throwIfNull(value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0('encodedURLComponent cannot be null'));
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function toJava(e){
  var javaException;
  if (instanceOf(e, 10)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += 17592186044416;
    a3 = 1048575;
  }
  a1 = round_int(value_0 / 4194304);
  a0 = round_int(value_0 - a1 * 4194304);
  return {l:a0, m:a1, h:a3};
}

function init(){
  var config, raw, platform;
  $onModuleLoad();
  config = new HtmlPlatform$Config;
  config.experimentalFullscreen = true;
  raw = new HtmlPlatform(config);
  raw.assets.pathPrefix = 'frodosquest/';
  $setSize(raw.graphics, 960, 672);
  platform = new Platform(raw);
  platform.canvasCreator = new FrodosQuestHtml$HtmlCanvasCreator(raw.graphics);
  new FrodosQuest(platform);
  $listenForVisibilityChange(raw);
  $requestAnimationFrame(new HtmlPlatform$2(raw));
}

function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(263, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass(263);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $getLength(storage){
  return $wnd[storage].length;
}

function $key_0(storage, index_0){
  return index_0 >= 0 && index_0 < $wnd[storage].length?$wnd[storage].key(index_0):null;
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = iter.next_1();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_5(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(355, 1, $intern_10);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_1(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 88)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_3(){
  return hashCode_16(this.entrySet_0());
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_1(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_6(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    $add_3(joiner, $toString_0(this, entry.getKey()) + '=' + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass(355);
function $get(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $getItem(this$static.storage, toString_5(key));
}

function $put(this$static, key, value_0){
  var old;
  if (key == null || value_0 == null) {
    throw toJs(new NullPointerException);
  }
  old = $getItem(this$static.storage, key);
  $setItem(this$static.storage, key, value_0);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(264, 355, $intern_10, StorageMap);
_.get_0 = function get_1(key){
  return $get(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.containsKey = function containsKey_0(key){
  return $get(this, key) != null;
}
;
_.entrySet_0 = function entrySet(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.size_1 = function size_2(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass(264);
function $eq(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && $equals(a, b);
}

function $hashCode(o){
  return o != null?getHashCode_0(o):0;
}

function StorageMap$StorageEntry(this$0, key){
  this.this$01 = this$0;
  this.key_0 = key;
}

defineClass(265, 1, $intern_11, StorageMap$StorageEntry);
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return $get(this.this$01, this.key_0);
}
;
_.setValue = function setValue(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
_.equals_0 = function equals_2(obj){
  var e;
  if (!instanceOf(obj, 41)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get(this.this$01, this.key_0), e.getValue());
}
;
_.hashCode_0 = function hashCode_4(){
  return $hashCode(this.key_0) ^ $hashCode($get(this.this$01, this.key_0));
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass(265);
function $next(this$static){
  if (this$static.index_0 >= $getLength(this$static.this$01.storage.storage) - 1) {
    throw toJs(new NoSuchElementException);
  }
  ++this$static.index_0;
  this$static.lastKey = $key(this$static.this$01.storage, this$static.index_0);
  return new StorageMap$StorageEntry(this$static.this$01, this$static.lastKey);
}

function StorageMap$StorageEntryIterator(this$0){
  this.this$01 = this$0;
}

defineClass(266, 1, {}, StorageMap$StorageEntryIterator);
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass(266);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

defineClass(356, 1, {});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.toString_0 = function toString_7(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_3(joiner, e === this?'(this Collection)':e == null?'null':toString_5(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass(356);
defineClass(357, 356, $intern_12);
_.equals_0 = function equals_3(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 49)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_5(){
  return hashCode_16(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass(357);
function $contains(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 41)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(267, 357, $intern_12, StorageMap$StorageEntrySet);
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass(267);
function create(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_0(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function create_1(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_2(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_3(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE && (TYPE = new GwtEvent$Type) , TYPE), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), width_0, height);
    }
  }
}

var closeHandlersInitialized = false, handlers_0, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_0 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(207, 348, {}, Window$ClosingEvent);
_.dispatch = function dispatch_0(handler){
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass(207);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 69))
          throw toJs($e0);
      }
      values = out.get_0(key);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    entry.setValue(unmodifiableList(entry.getValue()));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = listParamMap.get_0(name_0);
  return !paramsForName?null:paramsForName.get_1(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  this.eventBus = new HandlerManager$Bus;
  this.source = null;
}

defineClass(98, 119, {}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass(98);
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && (!handlers_0 && (handlers_0 = new Window$WindowHandlers) , undefined);
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  new HashMap;
  new HashSet;
}

function $setAntialias(this$static, antialias){
  this$static.antialias = antialias;
}

function $attachShader(this$static, program, shader){
  this$static.attachShader(program, shader);
}

function $bindBuffer(this$static, target, buffer){
  this$static.bindBuffer(target, buffer);
}

function $bindFramebuffer(this$static, target, framebuffer){
  this$static.bindFramebuffer(target, framebuffer);
}

function $bindTexture(this$static, target, texture){
  this$static.bindTexture(target, texture);
}

function $bufferData(this$static, target, data_0, usage){
  this$static.bufferData(target, data_0, usage);
}

function $clearColor(this$static, red, green, blue, alpha_0){
  this$static.clearColor(red, green, blue, alpha_0);
}

function $compileShader(this$static, shader){
  this$static.compileShader(shader);
}

function $createShader(this$static, type_0){
  return this$static.createShader(type_0);
}

function $deleteProgram(this$static, program){
  this$static.deleteProgram(program);
}

function $deleteShader(this$static, shader){
  this$static.deleteShader(shader);
}

function $disableVertexAttribArray(this$static, index_0){
  this$static.disableVertexAttribArray(index_0);
}

function $drawElements(this$static, mode, count, type_0, offset){
  this$static.drawElements(mode, count, type_0, offset);
}

function $enableVertexAttribArray(this$static, index_0){
  this$static.enableVertexAttribArray(index_0);
}

function $getAttribLocation(this$static, program, name_0){
  return this$static.getAttribLocation(program, name_0);
}

function $getProgramInfoLog(this$static, program){
  return this$static.getProgramInfoLog(program);
}

function $getProgramParameterb(this$static, program, pname){
  return this$static.getProgramParameter(program, pname);
}

function $getShaderInfoLog(this$static, shader){
  return this$static.getShaderInfoLog(shader);
}

function $getShaderParameterb(this$static, shader, pname){
  return this$static.getShaderParameter(shader, pname);
}

function $getUniformLocation(this$static, program, name_0){
  return this$static.getUniformLocation(program, name_0);
}

function $linkProgram(this$static, program){
  this$static.linkProgram(program);
}

function $shaderSource(this$static, shader, source){
  this$static.shaderSource(shader, source);
}

function $texImage2D(this$static, target, level, internalformat, format, type_0, image){
  this$static.texImage2D(target, level, internalformat, format, type_0, image);
}

function $texParameteri(this$static, target, pname, param){
  this$static.texParameteri(target, pname, param);
}

function $uniform1f(this$static, location_0, x_0){
  this$static.uniform1f(location_0, x_0);
}

function $uniform1i(this$static, location_0, x_0){
  this$static.uniform1i(location_0, x_0);
}

function $uniform2f(this$static, location_0, x_0, y_0){
  this$static.uniform2f(location_0, x_0, y_0);
}

function $uniform4fv(this$static, location_0, v){
  this$static.uniform4fv(location_0, v);
}

function $useProgram(this$static, program){
  this$static.useProgram(program);
}

function $vertexAttribPointer(this$static, indx, size_0, type_0, normalized, stride, offset){
  this$static.vertexAttribPointer(indx, size_0, type_0, normalized, stride, offset);
}

function $viewport(this$static, x_0, y_0, width_0, height){
  this$static.viewport(x_0, y_0, width_0, height);
}

function getContext(canvas, attributes){
  var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
  for (var i = 0; i < names.length; i++) {
    try {
      var ctx = canvas.getContext(names[i], attributes);
      if (ctx != null) {
        if ($wnd.WebGLDebugUtils) {
          $wnd.console && $wnd.console.log && console.log('WebGL debugging enabled');
          return $wnd.WebGLDebugUtils.makeDebugContext(ctx);
        }
        return ctx;
      }
    }
     catch (e) {
    }
  }
  return null;
}

function SimpleEventBus$1(){
}

defineClass(211, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass(211);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(212, 1, {371:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass(212);
function $animate(this$static, d){
  this$static.imageFrame += 1;
  this$static.image = this$static.image_0(d, this$static.imageFrame / this$static.framesPerImage | 0);
}

function $draw(this$static, surface){
  $draw_3(surface, this$static.image, this$static.x_0 - (this$static.image.raw.pixelWidth / 2 | 0), this$static.y_0 - this$static.image.raw.pixelHeight + 2);
}

function $image(this$static, d, frame_0){
  var numFrames;
  numFrames = this$static.images.length / ($clinit_Direction() , NUM_DIRECTIONS) | 0;
  return this$static.images[d.ordinal * numFrames + frame_0 % numFrames];
}

function $init(this$static, images){
  this$static.images = images;
  this$static.image = images[0];
}

function $isCloseTo(this$static, that, px){
  return abs_0(that.x_0 - this$static.x_0) <= px * 2 && abs_0(that.y_0 - this$static.y_0) <= px;
}

function $move(this$static, mask, dx, dy){
  var newX, newY;
  if (dx == 0 && dy == 0)
    return false;
  newX = this$static.x_0 + dx;
  newY = this$static.y_0 + dy;
  if ($contains_0(mask.mainBounds, newX, newY) && (this$static.canGo(mask, newX, newY) || !this$static.canGo(mask, this$static.x_0, this$static.y_0))) {
    this$static.x_0 = newX;
    this$static.y_0 = newY;
    return true;
  }
  return false;
}

function $moveAndAnimate(this$static, mask, d){
  if ($move(this$static, mask, d.dx, d.dy)) {
    this$static.imageFrame += 1;
    this$static.image = $image(this$static, d, this$static.imageFrame / this$static.framesPerImage | 0);
    return true;
  }
  return false;
}

defineClass(39, 1, $intern_13);
_.canGo = function canGo(mask, px, py){
  return ($pixelOnce(mask.image, px, py) & $intern_14) != 0;
}
;
_.image_0 = function image_0(d, frame_0){
  return $image(this, d, frame_0);
}
;
_.update = function update(state){
}
;
_.framesPerImage = 4;
_.imageFrame = 0;
_.x_0 = 160;
_.y_0 = 140;
var Lfrodo_core_Sprite_2_classLit = createForClass(39);
function $slowRand(step){
  var result;
  result = round_int(4 * $wnd.Math.random());
  result > 1 && (result -= 3);
  return result * step;
}

function AnimalSprite(){
  this.imageDirection = ($clinit_Direction() , DOWN);
}

defineClass(126, 39, $intern_13, AnimalSprite);
_.canGo = function canGo_0(mask, px, py){
  return isNonWhite($pixelOnce(mask.image, px, py));
}
;
_.image_0 = function image_1(d, frame_0){
  var numFrames;
  numFrames = this.images.length / ($clinit_Direction() , NUM_DIRECTIONS) | 0;
  return this.images[d.ordinal * numFrames + frame_0 % numFrames];
}
;
_.imageDirection_0 = function imageDirection(dx, dy, prevDirection){
  return approximate(dx, dy);
}
;
_.isAngry = function isAngry(){
  return false;
}
;
_.move = function move(scene){
  var result;
  (this.wanderFrame++ % this.framesPerWander == 0 || this.dx == 0 && this.dy == 0 && this.isAngry()) && (this.dx = this.isAngry()?(result = round_int(2 * $wnd.Math.random()) , result == 0 && (result = -1) , result * 2):$slowRand(2) , this.dy = $slowRand(1) , this.dx == 0 && this.dy == 0 || (this.imageDirection = this.imageDirection_0(this.dx, this.dy, this.imageDirection)) , undefined);
  (this.moveFrame++ % this.framesPerMove == 0 && $move(this, scene.mask, this.dx, this.dy) || this.isAngry()) && $animate(this, this.imageDirection);
}
;
_.dx = 0;
_.dy = 0;
_.framesPerMove = 2;
_.framesPerWander = 20;
_.moveFrame = 0;
_.wanderFrame = 0;
var Lfrodo_core_AnimalSprite_2_classLit = createForClass(126);
function $clinit_Animations(){
  $clinit_Animations = emptyMethod;
  NONE = new Animations('NONE', 0);
  QUILL = new Animations$1;
  BILBO = new Animations$2;
  PIPE_SMOKE = new Animations$3;
  BLINK = new Animations$4;
  DRINK = new Animations$5;
}

function Animations(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Animations();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Animations_2_classLit, 1), $intern_1, 26, 0, [NONE, QUILL, BILBO, PIPE_SMOKE, BLINK, DRINK]);
}

defineClass(26, 6, $intern_15, Animations);
_.draw = function draw(image, surface, frame_0){
  $draw_3(surface, image, 0, 0);
}
;
var BILBO, BLINK, DRINK, NONE, PIPE_SMOKE, QUILL;
var Lfrodo_core_Animations_2_classLit = createForEnum(26, values_6);
function Animations$1(){
  Animations.call(this, 'QUILL', 1);
}

defineClass(308, 26, $intern_15, Animations$1);
_.draw = function draw_0(image, surface, frame_0){
  frame_0 = frame_0 / 2 | 0;
  $draw_3(surface, image, -2 * (frame_0 % 4) + 4, round_int(2 * $wnd.Math.random()));
}
;
var Lfrodo_core_Animations$1_2_classLit = createForEnum(308, null);
function Animations$2(){
  Animations.call(this, 'BILBO', 2);
}

defineClass(309, 26, $intern_15, Animations$2);
_.draw = function draw_1(image, surface, frame_0){
  frame_0 = frame_0 / 8 | 0;
  $draw_3(surface, image, -2 * (frame_0 % 2), 0);
}
;
var Lfrodo_core_Animations$2_2_classLit = createForEnum(309, null);
function Animations$3(){
  Animations.call(this, 'PIPE_SMOKE', 3);
}

defineClass(310, 26, $intern_15, Animations$3);
_.draw = function draw_2(image, surface, frame_0){
  frame_0 = frame_0 / 4 | 0;
  if ((frame_0 / 6 | 0) % 3 != 0)
    return;
  $draw_3(surface, image, 0, -(frame_0 % 6));
}
;
var Lfrodo_core_Animations$3_2_classLit = createForEnum(310, null);
function Animations$4(){
  Animations.call(this, 'BLINK', 4);
}

defineClass(311, 26, $intern_15, Animations$4);
_.draw = function draw_3(image, surface, frame_0){
  switch (frame_0 % 100) {
    case 20:
    case 40:
    case 70:
    case 85:
      $draw_3(surface, image, 0, 0);
  }
}
;
var Lfrodo_core_Animations$4_2_classLit = createForEnum(311, null);
function Animations$5(){
  Animations.call(this, 'DRINK', 5);
}

defineClass(312, 26, $intern_15, Animations$5);
_.draw = function draw_4(image, surface, frame_0){
  switch ((frame_0 / 8 | 0) % 100) {
    case 20:
    case 40:
    case 70:
    case 85:
      $draw_3(surface, image, 0, 0);
  }
}
;
var Lfrodo_core_Animations$5_2_classLit = createForEnum(312, null);
function Animations$6(val$frame){
  this.val$frame1 = val$frame;
  this.val$ofTotal2 = 3;
  this.showOnFrame = this.val$frame1 % this.val$ofTotal2;
}

defineClass(73, 1, {79:1}, Animations$6);
_.draw = function draw_5(image, surface, frame_0){
  frame_0 % this.val$ofTotal2 == this.showOnFrame && $draw_3(surface, image, 0, 0);
}
;
_.showOnFrame = 0;
_.val$frame1 = 0;
_.val$ofTotal2 = 0;
var Lfrodo_core_Animations$6_2_classLit = createForClass(73);
function $contains_0(this$static, x_0, y_0){
  return this$static.left_0 <= x_0 && x_0 <= this$static.right && this$static.top_0 <= y_0 && y_0 <= this$static.bottom;
}

function $reset(this$static, x_0, y_0){
  this$static.left_0 = this$static.right = x_0;
  this$static.top_0 = this$static.bottom = y_0;
}

function $toString_1(this$static){
  return '[' + this$static.left_0 + '--' + this$static.right + ',' + this$static.top_0 + '--' + this$static.bottom + ']';
}

function $update(this$static, x_0, y_0){
  this$static.left_0 = min_1(this$static.left_0, x_0);
  this$static.right = max_0(this$static.right, x_0);
  this$static.top_0 = min_1(this$static.top_0, y_0);
  this$static.bottom = max_0(this$static.bottom, y_0);
}

function Bounds(){
}

defineClass(78, 1, {}, Bounds);
_.toString_0 = function toString_8(){
  return $toString_1(this);
}
;
_.bottom = $intern_16;
_.left_0 = $intern_0;
_.right = $intern_16;
_.top_0 = $intern_0;
var Lfrodo_core_Bounds_2_classLit = createForClass(78);
function $draw_0(this$static, image, x_0, y_0){
  $draw_5(this$static.raw, image.raw, x_0, y_0);
}

function $fillRectPlusBorder(this$static, x_0, y_0, w, h){
  $setFillColor(this$static.raw, -1);
  $fillRect_0(this$static.raw, x_0 - 8, y_0 - 8, w + 16, h + 16);
}

function $strokeRect(this$static, x_0, y_0, w, h){
  $setFillColor(this$static.raw, -65536);
  $fillRect_0(this$static.raw, x_0, y_0, w, 1);
  $fillRect_0(this$static.raw, x_0, y_0 + h - 1, w, 1);
  $fillRect_0(this$static.raw, x_0, y_0, 2, h);
  $fillRect_0(this$static.raw, x_0 + w - 2, y_0, 2, h);
}

function Canvas_0(raw){
  this.raw = raw;
  new Image_0(raw.image);
}

defineClass(139, 1, {}, Canvas_0);
var Lfrodo_core_Canvas_2_classLit = createForClass(139);
function aStartsWithB(a, b){
  var i;
  if (length__I__devirtual$(b) > length__I__devirtual$(a))
    return false;
  for (i = 0; i < length__I__devirtual$(b); i++) {
    if (charAt_I_C__devirtual$(a, i) != charAt_I_C__devirtual$(b, i))
      return false;
  }
  return true;
}

function countChars(text_0){
  var count, i;
  count = 0;
  for (i = 0; i < text_0.length; i++) {
    text_0.charCodeAt(i) == 32 && ++count;
  }
  return count;
}

function lastCharOf(c){
  return $charAt(c, c.string.length - 1);
}

function $outcome(this$static){
  return this$static.interactive?this$static.outcome:null;
}

function $pause(this$static){
  fill(this$static.heldSince);
  this$static.outcome = null;
}

function $setInteractive(this$static, interactive){
  if (this$static.interactive != interactive) {
    this$static.interactive = interactive;
    fill(this$static.heldSince);
    this$static.outcome = null;
  }
}

function $update_0(this$static, key, isDown, frameCounter){
  var d, i, index_0, isJammed, isTap, wasDown, wasJammed;
  if (key == ($clinit_Key() , ENTER)) {
    !!this$static.jammed && (this$static.outcome = this$static.jammed = null);
    return;
  }
  d = forKey(key);
  if (!d)
    return;
  index_0 = d.ordinal;
  wasDown = this$static.held[index_0];
  if (wasDown == isDown)
    return;
  this$static.held[index_0] = isDown;
  if (isDown && !wasDown) {
    this$static.heldCount += 1;
    this$static.heldSince[index_0] = frameCounter;
  }
   else 
    wasDown && !isDown && (this$static.heldCount -= 1);
  if (this$static.heldCount == 0 && !isDown) {
    isTap = frameCounter - this$static.heldSince[index_0] < TAP_SPEED;
    wasJammed = this$static.jammed == d;
    isJammed = isTap && !wasJammed;
    isJammed?(this$static.outcome = this$static.jammed = d):(this$static.outcome = this$static.jammed = null);
  }
   else if (this$static.heldCount == 1) {
    for (i = 0; i < 4; i++) {
      this$static.held[i] && (this$static.outcome = ($clinit_Direction() , ALL_DIRECTIONS)[i]);
    }
  }
   else 
    this$static.heldCount == 2 && isDown?(this$static.outcome = d):(this$static.outcome = null);
}

function ControlState(){
  this.held = initUnidimensionalArray(Z_classLit, $intern_2, 16, 4, 16, 1);
  this.heldSince = initUnidimensionalArray(I_classLit, $intern_2, 16, 4, 15, 1);
}

defineClass(271, 1, {}, ControlState);
_.heldCount = 0;
_.interactive = true;
_.jammed = null;
_.outcome = null;
var TAP_SPEED = 4;
var Lfrodo_core_ControlState_2_classLit = createForClass(271);
function $clinit_Direction(){
  $clinit_Direction = emptyMethod;
  LEFT = new Direction('LEFT', 0, -2, 0, ($clinit_Key() , LEFT_0));
  RIGHT = new Direction('RIGHT', 1, 2, 0, RIGHT_0);
  UP = new Direction('UP', 2, 0, -1, UP_0);
  DOWN = new Direction('DOWN', 3, 0, 1, DOWN_0);
  ALL_DIRECTIONS = stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Direction_2_classLit, 1), $intern_1, 53, 0, [LEFT, RIGHT, UP, DOWN]);
  NUM_DIRECTIONS = ALL_DIRECTIONS.length;
}

function $anticlockwise(this$static){
  switch (this$static.ordinal) {
    case 2:
      return LEFT;
    case 0:
      return DOWN;
    case 3:
      return RIGHT;
    case 1:
      return UP;
  }
  throw toJs(new IllegalArgumentException_0('Invalid direction: ' + this$static));
}

function $clockwise(this$static){
  switch (this$static.ordinal) {
    case 2:
      return RIGHT;
    case 1:
      return DOWN;
    case 3:
      return LEFT;
    case 0:
      return UP;
  }
  throw toJs(new IllegalArgumentException_0('Invalid direction: ' + this$static));
}

function $opposite(this$static){
  switch (this$static.ordinal) {
    case 2:
      return DOWN;
    case 3:
      return UP;
    case 0:
      return RIGHT;
    case 1:
      return LEFT;
  }
  throw toJs(new IllegalArgumentException_0('Invalid direction: ' + this$static));
}

function Direction(enum$name, enum$ordinal, dx, dy, key){
  Enum.call(this, enum$name, enum$ordinal);
  this.dx = dx;
  this.dy = dy;
  this.key_0 = key;
}

function approximate(dx, dy){
  $clinit_Direction();
  if (dx < 0)
    return LEFT;
  if (dx > 0)
    return RIGHT;
  if (dy < 0)
    return UP;
  return DOWN;
}

function forKey(key){
  $clinit_Direction();
  var d, d$array, d$index, d$max;
  for (d$array = ALL_DIRECTIONS , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
    d = d$array[d$index];
    if (d.key_0 == key)
      return d;
  }
  return null;
}

function values_7(){
  $clinit_Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Direction_2_classLit, 1), $intern_1, 53, 0, [LEFT, RIGHT, UP, DOWN]);
}

defineClass(53, 6, {53:1, 3:1, 7:1, 6:1}, Direction);
_.dx = 0;
_.dy = 0;
var ALL_DIRECTIONS, DOWN, LEFT, NUM_DIRECTIONS = 0, RIGHT, UP;
var Lfrodo_core_Direction_2_classLit = createForEnum(53, values_7);
function $add(this$static, event_0){
  if (instanceOf(event_0, 112)) {
    $addLast(this$static.upcomingEvents, event_0);
    return;
  }
  $isEmpty(this$static.events) || modifyInteractivity($peekLast(this$static.events), event_0);
  $addLast(this$static.events, event_0);
  $size_0(this$static.events) == 1 && $processNext(this$static);
  $setInteractive(this$static.controlState, $isEmpty(this$static.events) || this$static.textTimer <= 0 && $peek(this$static.events).interactive);
}

function $checkUpcoming(this$static, upcoming, state){
  var e;
  if (upcoming) {
    if ($at(state, upcoming.location_0) && ($clinit_Sprites() , FRODO_0).touchingSpecial) {
      e = $pollFirst(this$static.upcomingEvents);
      checkCriticalElement(e != null);
      $add(this$static, upcoming.delegate);
    }
  }
}

function $checkUpcoming_0(this$static, state){
  var upcoming;
  if ($isEmpty(this$static.upcomingEvents))
    return;
  upcoming = $peek(this$static.upcomingEvents);
  $checkUpcoming(this$static, upcoming, state);
}

function $interactive(this$static){
  return $isEmpty(this$static.events) || this$static.textTimer <= 0 && $peek(this$static.events).interactive;
}

function $processEvent(this$static, event_0){
  var displayTextEvent, pauseEvent;
  if (instanceOf(event_0, 56)) {
    displayTextEvent = event_0;
    $render(this$static.textDisplay, displayTextEvent.text_0);
    $pause(this$static.controlState);
    this$static.textTimer = FRAME_RATE / 2 | 0;
  }
   else if (instanceOf(event_0, 87)) {
    pauseEvent = event_0;
    this$static.pauseTimer = FRAME_RATE * pauseEvent.seconds;
  }
}

function $processNext(this$static){
  var event_0;
  event_0 = $peek(this$static.events);
  !!event_0 && $processEvent(this$static, event_0);
  $setInteractive(this$static.controlState, $isEmpty(this$static.events) || this$static.textTimer <= 0 && $peek(this$static.events).interactive);
}

function $softDismiss(this$static){
  !$isEmpty(this$static.events) && ($isEmpty(this$static.events) || this$static.textTimer <= 0 && $peek(this$static.events).interactive) && $userDismiss(this$static);
}

function $tick(this$static, state){
  var e;
  --this$static.pauseTimer;
  this$static.pauseTimer == 0 && (e = $pollFirst(this$static.events) , checkCriticalElement(e != null) , $processNext(this$static));
  --this$static.textTimer;
  this$static.textTimer == 0 && $setInteractive(this$static.controlState, $isEmpty(this$static.events) || this$static.textTimer <= 0 && $peek(this$static.events).interactive);
  !!$outcome(this$static.controlState) && !$isEmpty(this$static.events) && ($isEmpty(this$static.events) || this$static.textTimer <= 0 && $peek(this$static.events).interactive) && $userDismiss(this$static);
  $checkUpcoming_0(this$static, state);
}

function $userDismiss(this$static){
  var e, event_0;
  event_0 = $peek(this$static.events);
  if (instanceOf(event_0, 56)) {
    this$static.textDisplay.snapshot = null;
    e = $pollFirst(this$static.events);
    checkCriticalElement(e != null);
    $processNext(this$static);
  }
}

function EventManager(controlState, textDisplay){
  this.events = new ArrayDeque;
  this.upcomingEvents = new ArrayDeque;
  this.controlState = controlState;
  this.textDisplay = textDisplay;
}

function modifyInteractivity(prev, next){
  instanceOf(prev, 56) && (prev.interactive = false);
  instanceOf(prev, 87) && instanceOf(next, 56) && (next.interactive = false);
}

defineClass(274, 1, {}, EventManager);
_.pauseTimer = -1;
_.textTimer = -1;
var Lfrodo_core_EventManager_2_classLit = createForClass(274);
function Events$Event(){
  this.interactive = true;
}

defineClass(48, 1, {48:1});
_.interactive = false;
var Lfrodo_core_Events$Event_2_classLit = createForClass(48);
function Events$DisplayTextEvent(text_0){
  Events$Event.call(this);
  this.text_0 = text_0;
}

defineClass(56, 48, {56:1, 48:1}, Events$DisplayTextEvent);
var Lfrodo_core_Events$DisplayTextEvent_2_classLit = createForClass(56);
defineClass(111, 48, {48:1, 111:1});
var Lfrodo_core_Events$UpcomingEvent_2_classLit = createForClass(111);
function Events$LocationEvent(location_0, delegate){
  this.interactive = true;
  this.location_0 = location_0;
  this.delegate = delegate;
  this.delegate.interactive = false;
}

defineClass(112, 111, {48:1, 112:1, 111:1}, Events$LocationEvent);
var Lfrodo_core_Events$LocationEvent_2_classLit = createForClass(112);
function Events$PauseEvent(){
  Events$Event.call(this);
  this.seconds = 2;
}

defineClass(87, 48, {48:1, 87:1}, Events$PauseEvent);
_.seconds = 0;
var Lfrodo_core_Events$PauseEvent_2_classLit = createForClass(87);
function $centeredSingleLine(this$static, target, text_0){
  $singleLine(this$static, target, text_0, 160 - (text_0.length * 8 / 2 | 0), 108);
}

function $drawChar(this$static, target, c, x_0, y_0){
  var index_0;
  index_0 = c - 32;
  index_0 >= 0 && index_0 < this$static.images.length && $draw_3(target, this$static.images[index_0], x_0, y_0);
}

function $justified(this$static, target, text_0, sx, sy, length_0){
  var i, start_0, y_0;
  y_0 = sy;
  start_0 = 0;
  for (i = 0; i < text_0.string.length; i++) {
    if ($charAt_0(text_0.string, i) == 10) {
      $justifiedSingleLine(this$static, target, $substring_0(text_0.string, start_0, i), sx, y_0, length_0);
      y_0 += 10;
      start_0 = i + 1;
    }
  }
  $justifiedSingleLine(this$static, target, $subSequence(text_0, start_0, text_0.string.length), sx, y_0, length_0);
}

function $justifiedSingleLine(this$static, target, text_0, sx, sy, length_0){
  var c, i, index_0, spaceSize, spaces, x_0;
  x_0 = sx;
  spaces = max_0(countChars(text_0), 1);
  spaceSize = 8 + ((length_0 - text_0.length) * 8 / spaces | 0);
  spaceSize = spaceSize < 12?spaceSize:12;
  for (i = 0; i < text_0.length; i++) {
    c = text_0.charCodeAt(i);
    index_0 = c - 32;
    index_0 >= 0 && index_0 < this$static.images.length && $draw_0(target, this$static.images[index_0], x_0, sy);
    x_0 += c == 32?spaceSize:8;
  }
}

function $singleLine(this$static, target, text_0, sx, sy){
  var i, x_0;
  x_0 = sx;
  for (i = 0; i < length__I__devirtual$(text_0); i++) {
    $drawChar(this$static, target, charAt_I_C__devirtual$(text_0, i), x_0, sy);
    x_0 += 8;
  }
}

function Font(images){
  this.images = images;
}

defineClass(99, 1, {}, Font);
var BLACK, GREY, RAW, WHITE;
var Lfrodo_core_Font_2_classLit = createForClass(99);
function $checkPortal(this$static, x_0, y_0, scene, direction){
  var entrance, p;
  if ($contains_0($getEdge(scene.mask, direction), x_0, y_0)) {
    p = ($clinit_SceneLinks() , $get_4(links_0, new SceneLinks$Portal(scene, direction)));
    if (!!p && changeLocation($toLocation(p.scene))) {
      entrance = $getEdge(p.scene.mask, p.direction_0);
      this$static.x_0 = ((entrance.left_0 + entrance.right) / 4 | 0) * 2;
      this$static.y_0 = (entrance.top_0 + entrance.bottom) / 2 | 0;
      this$static.image = $image(this$static, $opposite(p.direction_0), 0);
      return true;
    }
  }
  return false;
}

function $moveDrunkenly(this$static, mask, direction){
  var dx, dy, stagger, zig;
  ++this$static.staggerTimer;
  if (this$static.staggerTimer <= 10) {
    $moveAndAnimate(this$static, mask, direction);
    return;
  }
  stagger = (this$static.drunkenness + this$static.staggerTimer) % 2 == 0?$clockwise(direction):$anticlockwise(direction);
  zig = (this$static.staggerTimer / 10 | 0) % 2;
  if (this$static.drunkenness <= 250) {
    dx = direction.dx + zig * stagger.dx;
    dy = direction.dy + zig * stagger.dy;
  }
   else if (this$static.drunkenness <= 500 || this$static.staggerTimer <= 20) {
    dx = stagger.dx + zig * direction.dx;
    dy = stagger.dy + zig * direction.dy;
  }
   else {
    dx = stagger.dx + zig * -direction.dx;
    dy = stagger.dy + zig * -direction.dy;
  }
  $move(this$static, mask, dx, dy) && (this$static.imageFrame += 1 , this$static.image = $image(this$static, direction, this$static.imageFrame / this$static.framesPerImage | 0));
}

function $update_1(this$static, state){
  var locationImages;
  locationImages = isOutside_0(forLocation(state.location_0))?($clinit_Sprites() , FRODO_SMALL):($clinit_Sprites() , FRODO_LARGE);
  if (maskUndefined(this$static.images) !== maskUndefined(locationImages)) {
    this$static.images = locationImages;
    $animate(this$static, this$static.prevDirection);
  }
}

function FrodoSprite(){
  this.controlState = new ControlState;
  this.prevDirection = ($clinit_Direction() , DOWN);
}

defineClass(272, 39, $intern_13, FrodoSprite);
_.move = function move_0(scene){
  var direction;
  --this.drunkenness;
  direction = $outcome(this.controlState);
  if (!direction)
    return;
  if (direction != this.prevDirection) {
    this.staggerTimer = 0;
    this.prevDirection = direction;
    this.imageFrame += 1;
    this.image = $image(this, direction, this.imageFrame / this.framesPerImage | 0);
  }
  if (!$checkPortal(this, this.x_0, this.y_0, scene, direction)) {
    this.drunkenness > 0?$moveDrunkenly(this, scene.mask, direction):$moveAndAnimate(this, scene.mask, direction);
    this.touchingSpecial = isNonWhite($pixelOnce_0(scene.mask, this.x_0, this.y_0));
  }
}
;
_.update = function update_0(state){
  $update_1(this, state);
}
;
_.drunkenness = 0;
_.staggerTimer = 0;
_.touchingSpecial = false;
var Lfrodo_core_FrodoSprite_2_classLit = createForClass(272);
function $onFrame(this$static){
  var nextUpdate, paintTick, updateDt, updateRate, updateTick, updates;
  nextUpdate = this$static.nextUpdate;
  updateTick = $tick_0(this$static.plat);
  if (updateTick >= nextUpdate) {
    updateRate = this$static.updateRate;
    updates = 0;
    while (updateTick >= nextUpdate) {
      nextUpdate += updateRate;
      ++updates;
    }
    this$static.nextUpdate = nextUpdate;
    updateDt = updates * updateRate;
    this$static.updateClock.tick += updateDt;
    $update_2(this$static);
  }
  paintTick = $tick_0(this$static.plat);
  this$static.paintClock.tick = paintTick;
  $emit(this$static.paint, this$static.paintClock);
}

defineClass(184, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass(184);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    maxVecs = usableMaxUniformVectors(gl);
    if (maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 13))
      throw toJs($e0);
  }
  return new TriangleBatch(gl);
}

function SceneGame(plat){
  var gl;
  $clinit_AbstractSignal();
  this.paint = new Signal;
  this.updateClock = new Clock;
  this.paintClock = new Clock;
  this.plat = plat;
  this.updateRate = 33;
  $addConnection(plat.frame_0, new Game$1(this));
  gl = plat.graphics.gl;
  gl.gl.disable(2884);
  gl.gl.enable(3042);
  gl.gl.blendFunc(1, 771);
  this.defaultBatch = $createDefaultBatch(gl);
  this.viewSurf = new Surface_0(plat.graphics, plat.graphics.defaultRenderTarget, this.defaultBatch);
  new RootLayer;
  $atPrio($addConnection(this.paint, new SceneGame$1(this)), -1);
}

defineClass(185, 184, {});
var Lplayn_scene_SceneGame_2_classLit = createForClass(185);
function $clinit_FrodosQuest(){
  $clinit_FrodosQuest = emptyMethod;
  prompt_1 = new Prompt;
  controlState_0 = ($clinit_Sprites() , FRODO_0).controlState;
  textDisplay_0 = new TextDisplay;
  eventManager_0 = new EventManager(controlState_0, textDisplay_0);
  state_0 = new State(eventManager_0);
  sceneRenderer = new SceneRenderer;
}

function $continueLoading(this$static){
  if (!this$static.fontLoaded && !!RAW && !!RAW.raw.state.result()) {
    WHITE = new Font($tile(RAW, 8, 8));
    GREY = new Font($tile($recolor(RAW, -5592406), 8, 8));
    BLACK = new Font($tile($recolor(RAW, $intern_14), 8, 8));
    this$static.fontLoaded = true;
  }
   else if (this$static.fontLoaded && !this$static.loadingFinished && isFinished()) {
    finishLoading();
    $clinit_Sprites();
    FRODO_LARGE = $tileInto($scale_0(FRODO_LARGE_RAW), 4);
    FRODO_SMALL = $tileInto($scale_0(FRODO_SMALL_RAW), 4);
    GOAT_TILES = $tileInto($scale_0(GOAT_RAW), 4);
    GOOSE_TILES = $tileInto($scale_0(GOOSE_RAW), 2);
    $init(FRODO_0, FRODO_LARGE);
    $init(GOAT, GOAT_TILES);
    $init(GOOSE_0, GOOSE_TILES);
    this$static.loadingFinished = true;
  }
}

function $paintScene(this$static){
  $saveTx(this$static.surface.raw);
  $begin_0(this$static.surface.raw);
  $clear_1(this$static.surface.raw, 0, 0, 0);
  $scale_1(this$static.surface.raw, 3, 3);
  try {
    if (!this$static.loadingFinished) {
      $paintWhileLoading(this$static, this$static.surface);
      return;
    }
    $draw_2(sceneRenderer, this$static.surface, this$static.frameCounter / 8 | 0);
    $draw_4(textDisplay_0, this$static.surface);
    $draw_1(prompt_1, this$static.surface, $interactive(eventManager_0));
  }
   finally {
    $end_0(this$static.surface.raw);
    $restoreTx(this$static.surface.raw);
  }
}

function $paintWhileLoading(this$static, surface){
  if (this$static.fontLoaded) {
    $clear_1(surface.raw, 0, 0, 0);
    $centeredSingleLine(WHITE, surface, statusText());
  }
   else {
    $clear_1(surface.raw, 1, 1, 1);
  }
}

function $update_2(this$static){
  ++this$static.frameCounter;
  if (!this$static.loadingFinished) {
    $continueLoading(this$static);
    return;
  }
  $move_0(sceneRenderer);
  $tick(eventManager_0, state_0);
}

function FrodosQuest(platform){
  $clinit_FrodosQuest();
  SceneGame.call(this, platform.raw);
  this.surface = new Surface(this.viewSurf);
  this.loadingFinished = false;
  this.fontLoaded = false;
  this.frameCounter = 0;
  this.keySlot = new FrodosQuest$1(this);
  RAW = ($clinit_Image() , loadImage('widefont.png'));
  startLoading();
  $clinit_Sprites();
  FRODO_LARGE_RAW = loadImage('frodo_large.png');
  FRODO_SMALL_RAW = loadImage('frodo_small.png');
  GOAT_RAW = loadImage('goat.png');
  GOOSE_RAW = loadImage('goose.png');
  $update_3(sceneRenderer, state_0);
  $addConnection(this.plat.input_0.keyboardEvents, this.keySlot);
  $addConnection(this.plat.input_0.mouseEvents, new FrodosQuest$2);
}

function changeLocation(loc){
  $clinit_FrodosQuest();
  if ($changeLocation(state_0, loc)) {
    $update_3(sceneRenderer, state_0);
    $update_1(($clinit_Sprites() , FRODO_0), state_0);
    $pause(controlState_0);
    return true;
  }
  return false;
}

defineClass(161, 185, {}, FrodosQuest);
_.fontLoaded = false;
_.frameCounter = 0;
_.loadingFinished = false;
var controlState_0, eventManager_0, prompt_1, sceneRenderer, state_0, textDisplay_0;
var Lfrodo_core_FrodosQuest_2_classLit = createForClass(161);
defineClass(343, 1, {});
var Lreact_Slot_2_classLit = createForClass(343);
function $onEmit(this$static, e){
  var c, ke;
  if (instanceOf(e, 108)) {
    if (!$interactive(($clinit_FrodosQuest() , eventManager_0)))
      return;
    $softDismiss(eventManager_0);
    c = e.typedChar;
    $keyTyped(prompt_1, c) && $updateSuggestion(state_0, prompt_1);
  }
   else if (instanceOf(e, 85)) {
    ke = e;
    $update_0(($clinit_FrodosQuest() , controlState_0), ke.key_0, ke.down, this$static.this$01.frameCounter);
    ke.key_0 == ($clinit_Key() , ENTER) && (ke.down?$autocomplete(prompt_1):($userDismiss(eventManager_0) , prompt_1.input_0.string.length > 0 && $submitUserCommand(state_0, prompt_1) && $update_3(sceneRenderer, state_0) , $clear(prompt_1) , undefined));
    ke.key_0 == TAB && ke.down && $keyTyped(prompt_1, 9) && $updateSuggestion(state_0, prompt_1);
    (ke.key_0 == BACKSPACE || ke.key_0 == DELETE || ke.key_0 == BACK) && ke.down && $keyTyped(prompt_1, 8) && $updateSuggestion(state_0, prompt_1);
  }
}

function FrodosQuest$1(this$0){
  this.this$01 = this$0;
}

defineClass(186, 343, {}, FrodosQuest$1);
_.onEmit = function onEmit(e){
  $onEmit(this, e);
}
;
var Lfrodo_core_FrodosQuest$1_2_classLit = createForClass(186);
function FrodosQuest$2(){
}

defineClass(187, 343, {}, FrodosQuest$2);
_.onEmit = function onEmit_0(e){
}
;
var Lfrodo_core_FrodosQuest$2_2_classLit = createForClass(187);
defineClass(291, 126, $intern_13);
_.image_0 = function image_2(d, frame_0){
  var numFrames;
  if (!(d == ($clinit_Direction() , LEFT) || d == RIGHT))
    throw toJs(new IllegalArgumentException);
  numFrames = this.images.length / 2 | 0;
  return this.images[d.ordinal * numFrames + frame_0 % numFrames];
}
;
_.imageDirection_0 = function imageDirection_0(dx, dy, prevDirection){
  var newDirection;
  newDirection = approximate(dx, dy);
  return newDirection == ($clinit_Direction() , LEFT) || newDirection == RIGHT?newDirection:prevDirection;
}
;
var Lfrodo_core_SidewaysAnimalSprite_2_classLit = createForClass(291);
function GooseSprite(){
  AnimalSprite.call(this);
  this.imageDirection = ($clinit_Direction() , RIGHT);
}

defineClass(292, 291, $intern_13, GooseSprite);
_.image_0 = function image_3(d, frame_0){
  var numFrames, numUsableFrames, offset;
  if (!(d == ($clinit_Direction() , LEFT) || d == RIGHT))
    throw toJs(new IllegalArgumentException);
  numFrames = this.images.length / 2 | 0;
  numUsableFrames = numFrames - 1;
  offset = $isCloseTo(this, ($clinit_Sprites() , FRODO_0), 10)?1:0;
  return this.images[d.ordinal * numFrames + frame_0 % numUsableFrames + offset];
}
;
_.isAngry = function isAngry_0(){
  return $isCloseTo(this, ($clinit_Sprites() , FRODO_0), 10);
}
;
var Lfrodo_core_GooseSprite_2_classLit = createForClass(292);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  ONE_PIXEL = initUnidimensionalArray(I_classLit, $intern_2, 16, 1, 15, 1);
}

function $getPixelsOnce(this$static){
  var h, pixels, w;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  pixels = initUnidimensionalArray(I_classLit, $intern_2, 16, w * h, 15, 1);
  $getRgb(this$static.raw, 0, 0, w, h, pixels, w);
  return pixels;
}

function $pixelOnce(this$static, x_0, y_0){
  $getRgb(this$static.raw, x_0, y_0, 1, 1, ONE_PIXEL, this$static.raw.pixelWidth);
  return ONE_PIXEL[0];
}

function $pixelRow(this$static, row, y_0){
  var w;
  w = this$static.raw.pixelWidth;
  row == null && (row = initUnidimensionalArray(I_classLit, $intern_2, 16, w, 15, 1));
  $getRgb(this$static.raw, 0, y_0, w, 1, row, w);
  return row;
}

function $recolor(this$static, recolor){
  var c, h, i, pixels, w;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  pixels = $getPixelsOnce(this$static);
  for (i = 0; i < pixels.length; i++) {
    pixels[i] &= recolor;
  }
  c = $createRawCanvas(INSTANCE_0, w, h);
  $setRgb(c.image, w, h, pixels, w);
  return new Image_0(c.image);
}

function $scale_0(this$static){
  var c, h, pixels, pixels2, w, w2, x_0, y_0;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  pixels = $getPixelsOnce(this$static);
  w2 = 2 * w;
  pixels2 = initUnidimensionalArray(I_classLit, $intern_2, 16, w2 * h, 15, 1);
  for (x_0 = 0; x_0 < w2; x_0++) {
    for (y_0 = 0; y_0 < h; y_0++) {
      pixels2[y_0 * w2 + x_0] = pixels[y_0 * w + (x_0 / 2 | 0)];
    }
  }
  c = $createRawCanvas(INSTANCE_0, w2, h);
  $setRgb(c.image, w2, h, pixels2, w2);
  return new Image_0(c.image);
}

function $setPixel(this$static, x_0, y_0, pixel){
  this$static.lazyPixels[y_0 * this$static.raw.pixelWidth + x_0] = pixel;
}

function $tile(this$static, xSize, ySize){
  var h, i, result, w, x_0, y_0, c;
  w = this$static.raw.pixelWidth / xSize | 0;
  h = this$static.raw.pixelHeight / ySize | 0;
  i = 0;
  result = initUnidimensionalArray(Lfrodo_core_Image_2_classLit, $intern_2, 47, w * h, 0, 1);
  for (y_0 = 0; y_0 < h; y_0++) {
    for (x_0 = 0; x_0 < w; x_0++) {
      result[i++] = (c = $createRawCanvas(INSTANCE_0, xSize, ySize) , $draw_5(c, $region(this$static.raw, x_0 * xSize, y_0 * ySize, xSize, ySize), 0, 0) , new Image_0(c.image));
    }
  }
  return result;
}

function $tileInto(this$static, numY){
  var xSize, ySize;
  xSize = this$static.raw.pixelWidth / 4 | 0;
  ySize = this$static.raw.pixelHeight / numY | 0;
  return $tile(this$static, xSize, ySize);
}

function Image_0(raw){
  $clinit_Image();
  this.raw = raw;
}

defineClass(47, 1, {47:1}, Image_0);
var ONE_PIXEL;
var Lfrodo_core_Image_2_classLit = createForClass(47);
var Lfrodo_core_Synonym_2_classLit = createForInterface();
function $clinit_Item(){
  $clinit_Item = emptyMethod;
  MONEY_POUCH = new Item('MONEY_POUCH', 0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['wallet', 'money', 'pouch', 'Your money pouch has a nice heavy feel with the weight of many coins.']));
  LETTER = new Item('LETTER', 1, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's a message for you! It says simply, that a friend is waiting to meet with you at the Green Dragon inn."]));
  MUG_OF_ALE = new Item('MUG_OF_ALE', 2, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['ale', 'beer', 'drink', 'A half-pint of ale from the Green Dragon, still refreshingly cool.']));
  FISHING_ROD = new Item('FISHING_ROD', 3, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['rod', 'A wooden fishing rod, including hook, line and sinker.']));
  STOOL = new Item('STOOL', 4, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['wooden stool', 'A wooden stool from the kitchen, for reaching high shelves.']));
  OLIVE_OIL = new Item('OLIVE_OIL', 5, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['oil', 'bottle', 'A bottle of olive oil from the kitchen.']));
  APPLES = new Item('APPLES', 6, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Several red juicy apples']));
  POCKET_WATCH = new Item('POCKET_WATCH', 7, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['watch', "Bilbo's pocket watch is mostly brass, but it looks shiny and ornate, with a long chain. Attached to the watch is a small key, for winding it up."]));
  WATCH_KEY = new Item('WATCH_KEY', 8, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['key', "Attached to Bilbo's pocket watch is a golden watch key, for winding it up. Unlike a house key, it has no blade, so its notched shaft would fit into a circular keyhole."]));
  RING = new Item('RING', 9, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["Bilbo's ring is simple, small, but brightly shining gold. Twisting it in the light, you think you can see writing inside, but you cannot make it out."]));
}

function Item(enum$name, enum$ordinal, in_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.variants = getVariantsSkipDesc(this.name_0 != null?this.name_0:'' + this.ordinal, in_0);
  this.desc = in_0.length > 0?in_0[in_0.length - 1]:'';
}

function values_8(){
  $clinit_Item();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Item_2_classLit, 1), $intern_1, 24, 0, [MONEY_POUCH, LETTER, MUG_OF_ALE, FISHING_ROD, STOOL, OLIVE_OIL, APPLES, POCKET_WATCH, WATCH_KEY, RING]);
}

defineClass(24, 6, {24:1, 5:1, 3:1, 7:1, 6:1}, Item);
_.variants_0 = function variants_0(){
  return this.variants;
}
;
var APPLES, FISHING_ROD, LETTER, MONEY_POUCH, MUG_OF_ALE, OLIVE_OIL, POCKET_WATCH, RING, STOOL, WATCH_KEY;
var Lfrodo_core_Item_2_classLit = createForEnum(24, values_8);
function $clinit_Layer(){
  $clinit_Layer = emptyMethod;
  ADDED_LAYERS = new ArrayList;
}

function $init_0(this$static, image){
  this$static.image = image;
  this$static.zIndex == ($clinit_Z() , AUTO_0).value_0 && (this$static.zIndex = maxYContent(image));
}

function Layer(zIndex, animation, show){
  this.zIndex = zIndex;
  this.animation = animation;
  this.show = show;
}

function addLayer(zIndex, animation, show){
  $clinit_Layer();
  var layer;
  layer = new Layer(zIndex.value_0, animation, show);
  $add_0(ADDED_LAYERS, layer);
  return layer;
}

function addMaskLayer(scene){
  $clinit_Layer();
  var layers, mask;
  mask = addLayer(($clinit_Z() , FOREGROUND), ($clinit_Animations() , NONE), false);
  layers = $toArray(ADDED_LAYERS, initUnidimensionalArray(Lfrodo_core_Layer_2_classLit, $intern_17, 35, ADDED_LAYERS.array.length, 0, 1));
  ADDED_LAYERS.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  scene.layers = layers;
  return mask;
}

function checkLayers(layers){
  $clinit_Layer();
  var layer, layer$index, layer$max, layerNum, zIndex;
  zIndex = -1;
  layerNum = 0;
  for (layer$index = 0 , layer$max = layers.length; layer$index < layer$max; ++layer$index) {
    layer = layers[layer$index];
    if (layer.zIndex == ($clinit_Z() , NONE_0).value_0)
      continue;
    if (layer.zIndex == MANUAL.value_0) {
      throw toJs(new IllegalStateException('Manual zIndex has not been set, at ' + layerNum));
    }
    if (zIndex > layer.zIndex) {
      throw toJs(new IllegalStateException('Decreasing zIndex: ' + zIndex + ' -> ' + layer.zIndex + ', at ' + layerNum));
    }
    zIndex = layer.zIndex;
    ++layerNum;
  }
}

function maxYContent(image){
  var h, row, w, x_0, y_0;
  w = image.raw.pixelWidth;
  h = image.raw.pixelHeight;
  row = null;
  for (y_0 = h - 1; y_0 >= 0; y_0--) {
    row = $pixelRow(image, row, y_0);
    for (x_0 = 0; x_0 < w; x_0++) {
      if ((row[x_0] & $intern_14) != 0) {
        return y_0;
      }
    }
  }
  return 0;
}

function showIf(condition, layers){
  $clinit_Layer();
  var layer, layer$index, layer$max;
  for (layer$index = 0 , layer$max = layers.length; layer$index < layer$max; ++layer$index) {
    layer = layers[layer$index];
    layer.show = condition;
  }
}

defineClass(35, 1, {35:1}, Layer);
_.show = false;
_.zIndex = 0;
var ADDED_LAYERS;
var Lfrodo_core_Layer_2_classLit = createForClass(35);
function $clinit_Loader(){
  $clinit_Loader = emptyMethod;
  IMAGES = new HashMap;
}

function isFinished(){
  $clinit_Loader();
  var entry, image, image$iterator, outerIter;
  if ($size(IMAGES) == 0) {
    return false;
  }
  for (image$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(IMAGES)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); image$iterator.val$outerIter2.hasNext;) {
    image = (entry = $next_0(image$iterator.val$outerIter2) , entry.getValue());
    if (!image.raw.state.result()) {
      return false;
    }
  }
  return true;
}

function loadImage(name_0){
  $clinit_Loader();
  var image;
  image = $getStringValue(IMAGES, name_0);
  if (!image) {
    image = new Image_0($getImage(INSTANCE_0.raw.assets, name_0));
    $putStringValue(IMAGES, name_0, image);
  }
  return image;
}

function statusText(){
  $clinit_Loader();
  var entry, image, image$iterator, loaded, outerIter, total;
  loaded = 0;
  total = 0;
  for (image$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(IMAGES)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); image$iterator.val$outerIter2.hasNext;) {
    image = (entry = $next_0(image$iterator.val$outerIter2) , entry.getValue());
    loaded += image.raw.state.result()?1:0;
    total += 1;
  }
  return 'Images: ' + loaded + ' of ' + total;
}

var IMAGES;
function $clinit_Location(){
  $clinit_Location = emptyMethod;
  FRODOS_ROOM = new Location_0('FRODOS_ROOM', 0);
  BAGEND_HALLWAY = new Location_0('BAGEND_HALLWAY', 1);
  BILBOS_ROOM = new Location_0('BILBOS_ROOM', 2);
  BAGEND_KITCHEN = new Location_0('BAGEND_KITCHEN', 3);
  BAGEND_HILL = new Location_0('BAGEND_HILL', 4);
  LAKE_TREE = new Location_0('LAKE_TREE', 5);
  LAKE_HOUSE = new Location_0('LAKE_HOUSE', 6);
  NEIGHBOR = new Location_0('NEIGHBOR', 7);
  HOBBITON = new Location_0('HOBBITON', 8);
  GREEN_DRAGON = new Location_0('GREEN_DRAGON', 9);
  ALL_LOCATIONS = stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Location_2_classLit, 1), $intern_1, 25, 0, [FRODOS_ROOM, BAGEND_HALLWAY, BILBOS_ROOM, BAGEND_KITCHEN, BAGEND_HILL, LAKE_TREE, LAKE_HOUSE, NEIGHBOR, HOBBITON, GREEN_DRAGON]);
}

function Location_0(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Location();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Location_2_classLit, 1), $intern_1, 25, 0, [FRODOS_ROOM, BAGEND_HALLWAY, BILBOS_ROOM, BAGEND_KITCHEN, BAGEND_HILL, LAKE_TREE, LAKE_HOUSE, NEIGHBOR, HOBBITON, GREEN_DRAGON]);
}

defineClass(25, 6, {25:1, 3:1, 7:1, 6:1}, Location_0);
var ALL_LOCATIONS, BAGEND_HALLWAY, BAGEND_HILL, BAGEND_KITCHEN, BILBOS_ROOM, FRODOS_ROOM, GREEN_DRAGON, HOBBITON, LAKE_HOUSE, LAKE_TREE, NEIGHBOR;
var Lfrodo_core_Location_2_classLit = createForEnum(25, values_9);
function $getEdge(this$static, direction){
  switch (direction.ordinal) {
    case 0:
      return this$static.leftEdge;
    case 1:
      return this$static.rightEdge;
    case 2:
      return this$static.topEdge;
    case 3:
      return this$static.bottomEdge;
  }
  throw toJs(new IllegalArgumentException_0('Invalid direction: ' + direction));
}

function $pixelOnce_0(this$static, x_0, y_0){
  return $pixelOnce(this$static.image, x_0, y_0);
}

function Mask(image){
  var h, pixel, w, x_0, y_0;
  this.mainBounds = new Bounds;
  this.leftEdge = new Bounds;
  this.rightEdge = new Bounds;
  this.topEdge = new Bounds;
  this.bottomEdge = new Bounds;
  this.image = image;
  w = image.raw.pixelWidth;
  h = image.raw.pixelHeight;
  image.lazyPixels == null && (image.lazyPixels = $getPixelsOnce(image));
  for (x_0 = 0; x_0 < w; x_0 += 2) {
    for (y_0 = 0; y_0 < h; y_0 += 1) {
      pixel = image.lazyPixels[y_0 * image.raw.pixelWidth + x_0];
      pixel == -1?(x_0 == this.mainBounds.left_0?$update(this.leftEdge, x_0, y_0):x_0 < this.mainBounds.left_0 && $reset(this.leftEdge, x_0, y_0) , x_0 == this.mainBounds.right?$update(this.rightEdge, x_0, y_0):x_0 > this.mainBounds.right && $reset(this.rightEdge, x_0, y_0) , y_0 == this.mainBounds.top_0?$update(this.topEdge, x_0, y_0):y_0 < this.mainBounds.top_0 && $reset(this.topEdge, x_0, y_0) , y_0 == this.mainBounds.bottom?$update(this.bottomEdge, x_0, y_0):y_0 > this.mainBounds.bottom && $reset(this.bottomEdge, x_0, y_0) , $update(this.mainBounds, x_0, y_0) , undefined):(pixel & $intern_14) != 0 && $update(this.mainBounds, x_0, y_0);
    }
  }
  image.lazyPixels = null;
}

function doShrink(image, xs, ys){
  var h, keep, w, x_0, y_0, w_0, h_0;
  image.lazyPixels == null && (image.lazyPixels = $getPixelsOnce(image));
  w = image.raw.pixelWidth;
  h = image.raw.pixelHeight;
  for (x_0 = 0; x_0 < w; x_0++) {
    for (y_0 = 0; y_0 < h; y_0++) {
      if ((image.lazyPixels[y_0 * image.raw.pixelWidth + x_0] & $intern_14) != 0) {
        keep = wasOn(image, x_0 - xs, y_0 - ys) && wasOn(image, x_0 - xs, y_0 + ys) && wasOn(image, x_0 + xs, y_0 - ys) && wasOn(image, x_0 + xs, y_0 + ys);
        keep || $setPixel(image, x_0, y_0, MASK_WAS_ON_CODE);
      }
    }
  }
  w_0 = image.raw.pixelWidth;
  h_0 = image.raw.pixelHeight;
  $setRgb(image.raw, w_0, h_0, image.lazyPixels, w_0);
}

function shrink(image, shrinkX, shrinkY){
  doShrink(image, shrinkX, shrinkY);
  return new Mask(image);
}

function wasOn(image, x_0, y_0){
  var pixel;
  if (x_0 < 0 || x_0 >= image.raw.pixelWidth || y_0 < 0 || y_0 >= image.raw.pixelHeight)
    return false;
  pixel = image.lazyPixels[y_0 * image.raw.pixelWidth + x_0];
  return (pixel & $intern_14) != 0 || pixel == MASK_WAS_ON_CODE;
}

defineClass(326, 1, {}, Mask);
_.toString_0 = function toString_9(){
  return $ensureNamesAreInitialized(Lfrodo_core_Mask_2_classLit) , 'MaskBounds(' + (Lfrodo_core_Mask_2_classLit.typeName + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16)) + '\n  leftEdge=' + $toString_1(this.leftEdge) + '\n  rightEdge=' + $toString_1(this.rightEdge) + '\n  topEdge=' + $toString_1(this.topEdge) + '\n  bottomEdge=' + $toString_1(this.bottomEdge) + ')';
}
;
var MASK_WAS_ON_CODE = 11259375;
var Lfrodo_core_Mask_2_classLit = createForClass(326);
function $clinit_Noun(){
  $clinit_Noun = emptyMethod;
  FRODO = new Noun('FRODO', 0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You are a young hobbit of average height - three foot six. You have blue eyes, dark curly hair, a red vest and a green coat.']));
  BILBO_0 = new Noun('BILBO', 1, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  BED = new Noun('BED', 2, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  DESK = new Noun('DESK', 3, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['On the desk are Bilbo\'s memoirs, titled "There and Back Again".']));
  WARDROBE = new Noun('WARDROBE', 4, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['cupboard', 'cabinet', "It's your wardrobe. It is closed."]));
  DRESSER = new Noun('DRESSER', 5, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['drawer', "Bilbo's dresser has a mirror and a drawer. In the drawer is a keyhole. Oddly, this has a simple circle shape."]));
  MIRROR = new Noun('MIRROR', 6, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The mirror is fixed to a dresser. In the mirror you can see your reflection.']));
  MEMOIRS = new Noun('MEMOIRS', 7, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['book', '"There and Back Again"\n"A Hobbit\'s Tale"\n\n(Then hundreds more pages of Bilbo\'s handwriting)']));
  WINDOW = new Noun('WINDOW', 8, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Out the window you can see the garden and the road.']));
  OLIVE_OIL_ON = new Noun('OLIVE_OIL_ON', 9, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['oil on', '']));
  PANTRY = new Noun('PANTRY', 10, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['larder', 'cupboard', 'shelves', 'A well-stocked pantry is perhaps the most important feature of a hobbit hole.']));
  FOOD = new Noun('FOOD', 11, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['meal', 'breakfast', 'lunch', 'dinner', '']));
  TABLE = new Noun('TABLE', 12, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A hobbit sized table.']));
  BENCH = new Noun('BENCH', 13, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The bench is for preparing food.']));
  FIRE = new Noun('FIRE', 14, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['fireplace', 'A small fire burns in the fireplace, for cooking and heating.']));
  TREE = new Noun('TREE', 15, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A weathered old oak tree grows on top of the hill.']));
  ROCK = new Noun('ROCK', 16, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['rocks', 'Nothing special. There are many small rocks around the shire.']));
  FLOWERS = new Noun('FLOWERS', 17, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The flowers smell lovely at this time of year.']));
  DOOR = new Noun('DOOR', 18, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A green door with a brass knob.']));
  ROAD = new Noun('ROAD', 19, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The road goes ever on and on, over rock and under tree...']));
  WALL = new Noun('WALL', 20, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Stone walls mark properties and keep animals from wandering.']));
  LAKE = new Noun('LAKE', 21, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['water', 'pond', 'Hobbiton boasts a small but shining blue lake, famous for its plentiful fish.']));
  REEDS = new Noun('REEDS', 22, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Just some reeds. Part of the scenery, really.']));
  ANDWISE = new Noun('ANDWISE', 23, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['hobbit', 'man', 'neighbour', 'neighbor', 'Andwise must be at least seventy. He has a mild temperament and is never in a hurry.']));
  FENCE = new Noun('FENCE', 24, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's just an old wooden fence."]));
  RIVER = new Noun('RIVER', 25, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['water', 'The river that runs through the middle of The Shire is simply called "The Water".']));
  HOUSE = new Noun('HOUSE', 26, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  GOOSE = new Noun('GOOSE', 27, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['duck', 'swan', 'A white goose is waddling along the shore of the lake.']));
  INN = new Noun('INN', 28, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['green dragon inn', 'green dragon', "The Green Dragon is one of Hobbiton's favourite establishments - in fact it is the only public ale house."]));
  MILL = new Noun('MILL', 29, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['water wheel', 'water mill', 'wheel', 'A water wheel turns with the flowing water, so that the mill can grind wheat.']));
  GANDALF = new Noun('GANDALF', 30, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['wizard', '']));
  ROSIE = new Noun('ROSIE', 31, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['barmaid', 'woman', 'Rosie Cotton is working the bar today. She is quiet by nature, and has long blonde hair in curly ringlets. Your poor friend Samwise is always tongue tied in her presence.']));
  REGULARS = new Noun('REGULARS', 32, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['customers', 'hobbits', 'At this hour of the morning, a few older hobbits gather here to meet their friends. Younger hobbits are out fishing and farming, they tend to arrive later in the day.']));
  HALFRED = new Noun('HALFRED', 33, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['hobbit', 'man', 'fisherman', 'Like most hobbits, Halfred grows most of his food on land, but he fishes whenever he can and he even has his own boat.']));
  BOAT = new Noun('BOAT', 34, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['rowboat', "Halfred's rowboat, just large enough for a hobbit."]));
}

function Noun(enum$name, enum$ordinal, in_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.variants = getVariantsSkipDesc(this.name_0 != null?this.name_0:'' + this.ordinal, in_0);
  this.desc = in_0.length > 0?in_0[in_0.length - 1]:'';
}

function values_10(){
  $clinit_Noun();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Noun_2_classLit, 1), $intern_1, 11, 0, [FRODO, BILBO_0, BED, DESK, WARDROBE, DRESSER, MIRROR, MEMOIRS, WINDOW, OLIVE_OIL_ON, PANTRY, FOOD, TABLE, BENCH, FIRE, TREE, ROCK, FLOWERS, DOOR, ROAD, WALL, LAKE, REEDS, ANDWISE, FENCE, RIVER, HOUSE, GOOSE, INN, MILL, GANDALF, ROSIE, REGULARS, HALFRED, BOAT]);
}

defineClass(11, 6, {11:1, 5:1, 3:1, 7:1, 6:1}, Noun);
_.variants_0 = function variants_1(){
  return this.variants;
}
;
var ANDWISE, BED, BENCH, BILBO_0, BOAT, DESK, DOOR, DRESSER, FENCE, FIRE, FLOWERS, FOOD, FRODO, GANDALF, GOOSE, HALFRED, HOUSE, INN, LAKE, MEMOIRS, MILL, MIRROR, OLIVE_OIL_ON, PANTRY, REEDS, REGULARS, RIVER, ROAD, ROCK, ROSIE, TABLE, TREE, WALL, WARDROBE, WINDOW;
var Lfrodo_core_Noun_2_classLit = createForEnum(11, values_10);
var FRAME_RATE = 30;
function isNonWhite(pixel){
  return (pixel & $intern_14) != 0 && pixel != -1;
}

function $createRawCanvas(this$static, pixelWidth, pixelHeight){
  return this$static.canvasCreator.create_0(pixelWidth, pixelHeight);
}

function $pixelate(this$static){
  var gl20;
  gl20 = this$static.raw.graphics.gl;
  gl20.gl.texParameteri(3553, 10241, 9728);
  gl20.gl.texParameteri(3553, 10240, 9728);
}

function Platform(raw){
  this.canvasCreator = new Platform$1(this);
  this.raw = raw;
  INSTANCE_0 = this;
}

defineClass(159, 1, {}, Platform);
var INSTANCE_0;
var Lfrodo_core_Platform_2_classLit = createForClass(159);
function Platform$1(this$0){
  this.this$01 = this$0;
}

defineClass(163, 1, {}, Platform$1);
_.create_0 = function create_5(pixelWidth, pixelHeight){
  return $createCanvas(this.this$01.raw.graphics, pixelWidth, pixelHeight);
}
;
var Lfrodo_core_Platform$1_2_classLit = createForClass(163);
function $addSuffixAsSuggestion(this$static, suffix){
  if (suffix == ' \b NO_MATCH') {
    return;
  }
   else 
    suffix == ' \b EXACT_MATCH'?$add_2(this$static.suggestions, ''):$add_2(this$static.suggestions, suffix);
}

function $autocomplete(this$static){
  if (this$static.suggestion != null) {
    $append_7(this$static.input_0, this$static.suggestion);
    $append_7(this$static.userCommand, this$static.suggestion);
    this$static.suggestion = '';
    return true;
  }
  return false;
}

function $clear(this$static){
  $setLength(this$static.input_0, 0);
  $setLength(this$static.userCommand, 0);
  $reset_0(this$static.suggestions.map_0);
}

function $draw_1(this$static, surface, interactive){
  var font, x_0;
  x_0 = 0;
  font = interactive?WHITE:GREY;
  30 < font.images.length && $draw_3(surface, font.images[30], 0, 214);
  x_0 += 8;
  if (!interactive)
    return;
  font = this$static.suggestion != null?WHITE:GREY;
  $singleLine(font, surface, this$static.input_0, x_0, 214);
  x_0 += this$static.input_0.string.length * 8;
  63 < font.images.length && $draw_3(surface, font.images[63], x_0, 214);
  this$static.suggestion != null && $singleLine(GREY, surface, this$static.suggestion, x_0, 214);
}

function $findOneSuggestion(this$static){
  var entry, outerIter, result, suggestion, suggestion$iterator;
  if ($size(this$static.suggestions.map_0) == 0)
    return null;
  if ($contains_3(this$static.suggestions, ''))
    return '';
  result = null;
  for (suggestion$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.suggestions.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); suggestion$iterator.val$outerIter2.hasNext;) {
    suggestion = (entry = $next_0(suggestion$iterator.val$outerIter2) , entry.getKey());
    if (result == null) {
      result = suggestion;
      continue;
    }
    result = longestCommonPrefix(result, suggestion);
    if (result.length == 0)
      return result;
  }
  return result;
}

function $keyTyped(this$static, c){
  if (c >= 65 && c <= 90 || c >= 97 && c <= 122) {
    if (this$static.input_0.string.length == 38)
      return false;
    $append_1(this$static.input_0, c);
    $append_1(this$static.userCommand, c);
    return true;
  }
   else if (c == 32 && this$static.input_0.string.length < 38) {
    $append_1(this$static.input_0, 32);
    if (this$static.userCommand.string.length == 0 || lastCharOf(this$static.userCommand) == 32)
      return false;
    $append_1(this$static.userCommand, 32);
    return true;
  }
   else if (c == 8 && this$static.input_0.string.length != 0) {
    $deleteCharAt(this$static.input_0, this$static.input_0.string.length - 1);
    if (this$static.userCommand.string.length == 0)
      return false;
    if (lastCharOf(this$static.userCommand) == 32 && lastCharOf(this$static.input_0) == 32)
      return false;
    $deleteCharAt(this$static.userCommand, this$static.userCommand.string.length - 1);
    return true;
  }
   else if (c == 9) {
    return $autocomplete(this$static);
  }
  return false;
}

function $suggestSuffixToMatch(this$static, exactMatchOnly, commands){
  var command, command$index, command$max, userCommand, variant, variant$array, variant$index, variant$max;
  userCommand = this$static.userCommand;
  outer: for (command$index = 0 , command$max = commands.length; command$index < command$max; ++command$index) {
    command = commands[command$index];
    if (!exactMatchOnly && length__I__devirtual$(userCommand) == 0)
      return '';
    for (variant$array = command.variants_0() , variant$index = 0 , variant$max = variant$array.length; variant$index < variant$max; ++variant$index) {
      variant = variant$array[variant$index];
      if (!exactMatchOnly && aStartsWithB(variant, userCommand)) {
        variant = $substring(variant, length__I__devirtual$(userCommand));
        return variant;
      }
      if (startsWithToken(userCommand, variant)) {
        userCommand = removePrefixToken(userCommand, variant);
        continue outer;
      }
    }
    return ' \b NO_MATCH';
  }
  return length__I__devirtual$(userCommand) == 0?' \b EXACT_MATCH':' \b NO_MATCH';
}

function $suggestSuffixToMatch_0(this$static, exactMatchOnly, commands){
  var command, command$index, command$max, userCommand;
  userCommand = this$static.userCommand;
  for (command$index = 0 , command$max = commands.length; command$index < command$max; ++command$index) {
    command = commands[command$index];
    if (!exactMatchOnly && length__I__devirtual$(userCommand) == 0)
      return '';
    if (!exactMatchOnly && aStartsWithB(command, userCommand)) {
      command = $substring(command, length__I__devirtual$(userCommand));
      return command;
    }
    if (startsWithToken(userCommand, command)) {
      userCommand = removePrefixToken(userCommand, command);
      continue;
    }
    return ' \b NO_MATCH';
  }
  return length__I__devirtual$(userCommand) == 0?' \b EXACT_MATCH':' \b NO_MATCH';
}

function $typed(this$static, commands){
  if (!this$static.submit) {
    $addSuffixAsSuggestion(this$static, $suggestSuffixToMatch(this$static, false, commands));
    return false;
  }
  return $suggestSuffixToMatch(this$static, true, commands) == ' \b EXACT_MATCH';
}

function $typed_0(this$static, commands){
  if (!this$static.submit) {
    $addSuffixAsSuggestion(this$static, $suggestSuffixToMatch_0(this$static, false, commands));
    return false;
  }
  return $suggestSuffixToMatch_0(this$static, true, commands) == ' \b EXACT_MATCH';
}

function Prompt(){
  this.input_0 = new StringBuilder;
  this.userCommand = new StringBuilder;
  this.suggestions = new HashSet;
}

function longestCommonPrefix(a, b){
  var i, min_0;
  min_0 = min_1(a.length, b.length);
  for (i = 0; i < min_0; i++) {
    if (a.charCodeAt(i) != b.charCodeAt(i))
      break;
  }
  return a.substr(0, i);
}

function removePrefixToken(s, token){
  if (length__I__devirtual$(s) <= token.length)
    return '';
  return subSequence_II_Ljava_lang_CharSequence___devirtual$(s, token.length + 1, length__I__devirtual$(s));
}

function startsWithToken(s, token){
  if (!aStartsWithB(s, token))
    return false;
  return length__I__devirtual$(s) <= token.length || charAt_I_C__devirtual$(s, token.length) == 32;
}

defineClass(125, 1, {}, Prompt);
_.submit = false;
_.suggestion = null;
var Lfrodo_core_Prompt_2_classLit = createForClass(125);
function $clinit_Scene(){
  $clinit_Scene = emptyMethod;
  FRODOS_ROOM_0 = new Scene$1;
  BAGEND_HALLWAY_0 = new Scene$2;
  BILBOS_ROOM_0 = new Scene$3;
  BAGEND_KITCHEN_0 = new Scene$4;
  BAGEND_HILL_0 = new Scene$5;
  LAKE_TREE_0 = new Scene$6;
  LAKE_HOUSE_0 = new Scene$7;
  NEIGHBOR_0 = new Scene$8;
  HOBBITON_0 = new Scene$9;
  GREEN_DRAGON_0 = new Scene$10;
  ALL_SCENES = stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 14, 0, [FRODOS_ROOM_0, BAGEND_HALLWAY_0, BILBOS_ROOM_0, BAGEND_KITCHEN_0, BAGEND_HILL_0, LAKE_TREE_0, LAKE_HOUSE_0, NEIGHBOR_0, HOBBITON_0, GREEN_DRAGON_0]);
}

function $doFinishLoading(this$static){
  var i, images, isOutside, shrinkX, shrinkY;
  images = $tile($scale_0(this$static.raw), 320, 200);
  if (images.length != this$static.layers.length) {
    throw toJs(new IllegalArgumentException_0('Wrong number of layers - images=' + images.length + ' layers=' + this$static.layers.length));
  }
  for (i = 0; i < this$static.layers.length; i++) {
    $init_0(this$static.layers[i], images[i]);
  }
  this$static.onLayersLoaded();
  checkLayers(this$static.layers);
  isOutside = isOutside_0(this$static);
  shrinkX = isOutside?4:10;
  shrinkY = isOutside?0:2;
  this$static.mask = shrink(images[images.length - 1], shrinkX, shrinkY);
}

function $toLocation(this$static){
  var location_0;
  location_0 = ($clinit_Location() , ALL_LOCATIONS)[this$static.ordinal];
  if ($equals(location_0.name_0 != null?location_0.name_0:'' + location_0.ordinal, this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal)) {
    return location_0;
  }
  throw toJs(new IllegalStateException('Index mismatch: ' + (this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal) + ' != ' + location_0));
}

function Scene(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function finishLoading(){
  $clinit_Scene();
  var s, s$array, s$index, s$max;
  for (s$array = ALL_SCENES , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    $doFinishLoading(s);
  }
}

function forLocation(location_0){
  $clinit_Scene();
  var scene;
  scene = ALL_SCENES[location_0.ordinal];
  if ($equals(scene.name_0 != null?scene.name_0:'' + scene.ordinal, location_0.name_0 != null?location_0.name_0:'' + location_0.ordinal)) {
    return scene;
  }
  throw toJs(new IllegalStateException('Index mismatch: ' + scene + ' != ' + location_0));
}

function isOutside_0(scene){
  $clinit_Scene();
  switch (scene.ordinal) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
      return false;
    default:return true;
  }
}

function startLoading(){
  $clinit_Scene();
  var s, s$array, s$index, s$max;
  for (s$array = ALL_SCENES , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    s.raw = ($clinit_Image() , loadImage((s.name_0 != null?s.name_0:'' + s.ordinal).toLowerCase() + '.png'));
  }
}

function values_11(){
  $clinit_Scene();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 14, 0, [FRODOS_ROOM_0, BAGEND_HALLWAY_0, BILBOS_ROOM_0, BAGEND_KITCHEN_0, BAGEND_HILL_0, LAKE_TREE_0, LAKE_HOUSE_0, NEIGHBOR_0, HOBBITON_0, GREEN_DRAGON_0]);
}

defineClass(14, 6, $intern_18);
_.onLayersLoaded = function onLayersLoaded(){
}
;
_.sprites_0 = function sprites(){
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Sprite_2_classLit, 1), $intern_2, 39, 0, [($clinit_Sprites() , FRODO_0)]);
}
;
_.update = function update_1(state){
}
;
var ALL_SCENES, BAGEND_HALLWAY_0, BAGEND_HILL_0, BAGEND_KITCHEN_0, BILBOS_ROOM_0, FRODOS_ROOM_0, GREEN_DRAGON_0, HOBBITON_0, LAKE_HOUSE_0, LAKE_TREE_0, NEIGHBOR_0;
var Lfrodo_core_Scene_2_classLit = createForEnum(14, values_11);
function Scene$1(){
  Scene.call(this, 'FRODOS_ROOM', 0);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  this.wardrobe = addLayer(MANUAL, NONE, true);
  this.wdBackDoor = addLayer(AUTO_0, NONE, true);
  this.moneyPouch = addLayer(MANUAL, NONE, true);
  this.wdFrontDoor = addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(237, 14, $intern_18, Scene$1);
_.onLayersLoaded = function onLayersLoaded_0(){
  this.wardrobe.zIndex = this.wdBackDoor.zIndex;
  this.moneyPouch.zIndex = this.wdBackDoor.zIndex;
}
;
_.update = function update_2(state){
  showIf(state.isWardrobeOpen, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_17, 35, 0, [this.wdBackDoor, this.wdFrontDoor]));
  showIf(state.isWardrobeOpen && !$has(state, ($clinit_Item() , MONEY_POUCH)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_17, 35, 0, [this.moneyPouch]));
}
;
var Lfrodo_core_Scene$1_2_classLit = createForEnum(237, null);
function Scene$10(){
  Scene.call(this, 'GREEN_DRAGON', 9);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(BACKGROUND, BLINK, true);
  this.gandalf = addLayer(AUTO_0, NONE, true);
  this.gandalfArm = addLayer(MANUAL, DRINK, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(246, 14, $intern_18, Scene$10);
_.onLayersLoaded = function onLayersLoaded_1(){
  this.gandalfArm.zIndex = this.gandalf.zIndex;
}
;
var Lfrodo_core_Scene$10_2_classLit = createForEnum(246, null);
function Scene$2(){
  Scene.call(this, 'BAGEND_HALLWAY', 1);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  this.letter = addLayer(BACKGROUND, NONE, true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(238, 14, $intern_18, Scene$2);
_.update = function update_3(state){
  showIf(!$has(state, ($clinit_Item() , LETTER)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_17, 35, 0, [this.letter]));
}
;
var Lfrodo_core_Scene$2_2_classLit = createForEnum(238, null);
function Scene$3(){
  Scene.call(this, 'BILBOS_ROOM', 2);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  this.desk = addLayer(AUTO_0, NONE, true);
  this.bilbo = addLayer(MANUAL, BILBO, true);
  this.quill = addLayer(MANUAL, QUILL, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(239, 14, $intern_18, Scene$3);
_.onLayersLoaded = function onLayersLoaded_2(){
  this.bilbo.zIndex = this.desk.zIndex;
  this.quill.zIndex = this.desk.zIndex;
}
;
_.update = function update_4(state){
  showIf(!state.isBilboFishing, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_17, 35, 0, [this.bilbo]));
  showIf(!state.isBilboFishing, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_17, 35, 0, [this.quill]));
}
;
var Lfrodo_core_Scene$3_2_classLit = createForEnum(239, null);
function Scene$4(){
  Scene.call(this, 'BAGEND_KITCHEN', 3);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(BACKGROUND, new Animations$6(1), true);
  addLayer(BACKGROUND, new Animations$6(2), true);
  addLayer(BACKGROUND, new Animations$6(3), true);
  this.bottle = addLayer(BACKGROUND, NONE, true);
  this.stool = addLayer(AUTO_0, NONE, true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(240, 14, $intern_18, Scene$4);
_.update = function update_5(state){
  showIf(!$has(state, ($clinit_Item() , STOOL)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_17, 35, 0, [this.stool]));
  showIf(!$has(state, OLIVE_OIL), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_17, 35, 0, [this.bottle]));
}
;
var Lfrodo_core_Scene$4_2_classLit = createForEnum(240, null);
function Scene$5(){
  Scene.call(this, 'BAGEND_HILL', 4);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(241, 14, $intern_18, Scene$5);
var Lfrodo_core_Scene$5_2_classLit = createForEnum(241, null);
function Scene$6(){
  Scene.call(this, 'LAKE_TREE', 5);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(242, 14, $intern_18, Scene$6);
_.sprites_0 = function sprites_0(){
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Sprite_2_classLit, 1), $intern_2, 39, 0, [($clinit_Sprites() , FRODO_0), GOOSE_0, GOAT]);
}
;
var Lfrodo_core_Scene$6_2_classLit = createForEnum(242, null);
function Scene$7(){
  Scene.call(this, 'LAKE_HOUSE', 6);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(243, 14, $intern_18, Scene$7);
var Lfrodo_core_Scene$7_2_classLit = createForEnum(243, null);
function Scene$8(){
  Scene.call(this, 'NEIGHBOR', 7);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(BACKGROUND, PIPE_SMOKE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(244, 14, $intern_18, Scene$8);
var Lfrodo_core_Scene$8_2_classLit = createForEnum(244, null);
function Scene$9(){
  Scene.call(this, 'HOBBITON', 8);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(BACKGROUND, new Animations$6(1), true);
  addLayer(BACKGROUND, new Animations$6(2), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(245, 14, $intern_18, Scene$9);
var Lfrodo_core_Scene$9_2_classLit = createForEnum(245, null);
function $clinit_SceneLinks(){
  $clinit_SceneLinks = emptyMethod;
  links_0 = new HashMap;
  addVerticalLinks(stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 14, 0, [($clinit_Scene() , BAGEND_KITCHEN_0), BAGEND_HALLWAY_0, BAGEND_HILL_0]));
  addLink(new SceneLinks$Portal(FRODOS_ROOM_0, ($clinit_Direction() , DOWN)), new SceneLinks$Portal(BAGEND_HALLWAY_0, LEFT));
  addLink(new SceneLinks$Portal(BILBOS_ROOM_0, DOWN), new SceneLinks$Portal(BAGEND_HALLWAY_0, RIGHT));
  addHorizontalLinks(stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 14, 0, [LAKE_HOUSE_0, LAKE_TREE_0, BAGEND_HILL_0, NEIGHBOR_0, HOBBITON_0]));
  addLink(new SceneLinks$Portal(HOBBITON_0, UP), new SceneLinks$Portal(GREEN_DRAGON_0, LEFT));
}

function addHorizontalLinks(scenes){
  var curr, curr$index, curr$max, prev;
  prev = null;
  for (curr$index = 0 , curr$max = scenes.length; curr$index < curr$max; ++curr$index) {
    curr = scenes[curr$index];
    !!prev && addLink(new SceneLinks$Portal(prev, ($clinit_Direction() , RIGHT)), new SceneLinks$Portal(curr, LEFT));
    prev = curr;
  }
}

function addLink(p1, p2){
  $put_2(links_0, p1, p2);
  $put_2(links_0, p2, p1);
}

function addVerticalLinks(scenes){
  var curr, curr$index, curr$max, prev;
  prev = null;
  for (curr$index = 0 , curr$max = scenes.length; curr$index < curr$max; ++curr$index) {
    curr = scenes[curr$index];
    !!prev && addLink(new SceneLinks$Portal(prev, ($clinit_Direction() , DOWN)), new SceneLinks$Portal(curr, UP));
    prev = curr;
  }
}

var links_0;
function SceneLinks$Portal(scene, direction){
  this.scene = scene;
  this.direction_0 = direction;
}

defineClass(27, 1, {27:1}, SceneLinks$Portal);
_.equals_0 = function equals_4(other){
  var that;
  if (!instanceOf(other, 27))
    return false;
  that = other;
  return this.scene == that.scene && this.direction_0 == that.direction_0;
}
;
_.hashCode_0 = function hashCode_6(){
  return getHashCode(this.scene) ^ getHashCode(this.direction_0);
}
;
var Lfrodo_core_SceneLinks$Portal_2_classLit = createForClass(27);
function $draw_2(this$static, surface, frame_0){
  var layer, layer$array, layer$index, layer$max, spriteIndex, spriteZ;
  $translate(surface.raw, 12);
  spriteIndex = 0;
  spriteZ = $spriteZ(this$static, 0);
  for (layer$array = this$static.layers , layer$index = 0 , layer$max = layer$array.length; layer$index < layer$max; ++layer$index) {
    layer = layer$array[layer$index];
    while (spriteZ < layer.zIndex) {
      $draw(this$static.sprites[spriteIndex], surface);
      spriteZ = $spriteZ(this$static, ++spriteIndex);
    }
    layer.show && layer.animation.draw(layer.image, surface, frame_0);
  }
  while (spriteZ < ($clinit_Z() , FOREGROUND).value_0) {
    $draw(this$static.sprites[spriteIndex], surface);
    spriteZ = $spriteZ(this$static, ++spriteIndex);
  }
  $translate(surface.raw, -12);
}

function $move_0(this$static){
  var sprite, sprite$array, sprite$index, sprite$max;
  for (sprite$array = this$static.sprites , sprite$index = 0 , sprite$max = sprite$array.length; sprite$index < sprite$max; ++sprite$index) {
    sprite = sprite$array[sprite$index];
    sprite.move(this$static.scene);
  }
  sort_0(this$static.sprites, ($clinit_Sprites() , SORT_BY_Y));
}

function $spriteZ(this$static, spriteIndex){
  if (spriteIndex >= this$static.sprites.length)
    return ($clinit_Z() , IN_FRONT_OF_FOREGROUND).value_0;
  return this$static.sprites[spriteIndex].y_0;
}

function $update_3(this$static, state){
  var sprite, sprite$array, sprite$index, sprite$max;
  this$static.scene = forLocation(state.location_0);
  this$static.scene.update(state);
  this$static.layers = this$static.scene.layers;
  this$static.sprites = this$static.scene.sprites_0();
  for (sprite$array = this$static.sprites , sprite$index = 0 , sprite$max = sprite$array.length; sprite$index < sprite$max; ++sprite$index) {
    sprite = sprite$array[sprite$index];
    sprite.update(state);
  }
}

function SceneRenderer(){
}

defineClass(248, 1, {}, SceneRenderer);
var Lfrodo_core_SceneRenderer_2_classLit = createForClass(248);
function $clinit_Sprites(){
  $clinit_Sprites = emptyMethod;
  FRODO_0 = new FrodoSprite;
  GOAT = new AnimalSprite;
  GOOSE_0 = new GooseSprite;
  SORT_BY_Y = new Sprites$1;
}

var FRODO_0, FRODO_LARGE, FRODO_LARGE_RAW, FRODO_SMALL, FRODO_SMALL_RAW, GOAT, GOAT_RAW, GOAT_TILES, GOOSE_0, GOOSE_RAW, GOOSE_TILES, SORT_BY_Y;
function Sprites$1(){
}

defineClass(247, 1, {}, Sprites$1);
_.compare = function compare_1(a, b){
  return a.y_0 - b.y_0;
}
;
_.equals_0 = function equals_5(other){
  return this === other;
}
;
var Lfrodo_core_Sprites$1_2_classLit = createForClass(247);
function $addLocationEvent(this$static, location_0){
  $add(this$static.eventManager, new Events$LocationEvent(location_0, new Events$DisplayTextEvent("As you cross the river, an idea comes to you. Bilbo loves fishing. If you can organise a day of fishing for him, perhaps he'll leave his ring at home.")));
  return true;
}

function $at(this$static, location_0){
  return this$static.location_0 == location_0;
}

function $changeLocation(this$static, location_0){
  if (location_0 == ($clinit_Location() , GREEN_DRAGON) && this$static.gandalfTalk == 0) {
    valueOf(this$static.gandalfTalk += 1);
    $add(this$static.eventManager, new Events$PauseEvent);
    $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['To your surprise, you see your friend Gandalf the Grey sitting in the Green Dragon. Yesterday he said farewell and set off for the town of Bree. Why is he still here?']));
  }
  this$static.location_0 = location_0;
  return true;
}

function $display(this$static, texts){
  var text_0, text$index, text$max;
  for (text$index = 0 , text$max = texts.length; text$index < text$max; ++text$index) {
    text_0 = texts[text$index];
    $add(this$static.eventManager, new Events$DisplayTextEvent(text_0));
  }
  return true;
}

function $displayInventory(this$static){
  var item_0, item$iterator, result;
  if (this$static.inventory.size_0 == 0)
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You are carrying nothing.']));
  result = new StringBuilder_0('You are carrying:\n');
  for (item$iterator = new EnumSet$EnumSetImpl$IteratorImpl(this$static.inventory); item$iterator.i < item$iterator.this$11.all.length;) {
    item_0 = $next_3(item$iterator);
    $append_7($append_7(result, item_0.variants[0]), '\n');
  }
  return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [result.string]));
}

function $has(this$static, item_0){
  return $containsEnum(this$static.inventory, item_0);
}

function $maybeLookAtInventory(this$static){
  var item_0, item$array, item$index, item$max;
  for (item$array = ($clinit_Item() , stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Item_2_classLit, 1), $intern_1, 24, 0, [MONEY_POUCH, LETTER, MUG_OF_ALE, FISHING_ROD, STOOL, OLIVE_OIL, APPLES, POCKET_WATCH, WATCH_KEY, RING])) , item$index = 0 , item$max = item$array.length; item$index < item$max; ++item$index) {
    item_0 = item$array[item$index];
    if ($containsEnum(this$static.inventory, item_0)) {
      if (item_0 == LETTER && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [($clinit_Verb() , READ), LETTER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [($clinit_Verb() , EXAMINE), item_0]))) {
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [item_0.desc]));
      }
    }
  }
  return false;
}

function $promptInput(this$static){
  if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [($clinit_Verb() , INVENTORY)])))
    return $displayInventory(this$static);
  if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ($clinit_Noun() , FRODO)])))
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [FRODO.desc]));
  if ($typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['teaser'])))
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["Frodo's Quest\n\nComing 2019"]));
  if ($maybeLookAtInventory(this$static))
    return true;
  if ($has(this$static, ($clinit_Item() , MUG_OF_ALE)) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [DRINK_0, MUG_OF_ALE]))) {
    ($clinit_Sprites() , FRODO_0).drunkenness = 500;
    $clinit_Boolean();
    $removeEnum(this$static.inventory, MUG_OF_ALE)?true:false;
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You drink the mug of ale. Refreshing, but quite strong.']));
  }
  if ($at(this$static, ($clinit_Location() , FRODOS_ROOM))) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['This is your room at Bag End. Nice and cosy. A bed and a wardrobe meets all your needs. A window looks out into the garden.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BED])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's your bed."]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SLEEP_IN, BED])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SLEEP])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's already morning!"]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WINDOW])) || $typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['look out window'])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [WINDOW.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WARDROBE]))) {
      if (!this$static.isWardrobeOpen)
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [WARDROBE.desc]));
      if (!$has(this$static, MONEY_POUCH))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Hanging in your wardrobe is your money pouch.']));
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["That's where you keep your clothes. But you're already dressed."]));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [OPEN, WARDROBE]))) {
      if (this$static.isWardrobeOpen)
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's already open!"]));
      $clinit_Boolean();
      (this$static.isWardrobeOpen = true)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You open the wardrobe.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [CLOSE, WARDROBE]))) {
      if (!this$static.isWardrobeOpen)
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's already shut!"]));
      $clinit_Boolean();
      (this$static.isWardrobeOpen = false)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You shut the wardrobe.']));
    }
    if (this$static.isWardrobeOpen && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, MONEY_POUCH])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Hanging in your wardrobe is your money pouch.']));
    if (this$static.isWardrobeOpen && !$has(this$static, MONEY_POUCH) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, MONEY_POUCH]))) {
      $clinit_Boolean();
      $add_1(this$static.inventory, MONEY_POUCH)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You pick up your money pouch.']));
    }
  }
  if ($at(this$static, BAGEND_HALLWAY)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is the hallway at Bag End. Your room is to the left, Bilbo's is to the right. At the back is the kitchen. " + (!$has(this$static, LETTER)?'On the ground is a letter, just beside your door.':'')]));
    if (!$has(this$static, LETTER) && ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, LETTER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [READ, LETTER])))) {
      $clinit_Boolean();
      $add_1(this$static.inventory, LETTER)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [LETTER.desc + ' You take it with you.']));
    }
  }
  if ($at(this$static, BILBOS_ROOM)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BED])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's Bilbo's bed."]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WINDOW])) || $typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['look out window'])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [WINDOW.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SLEEP_IN, BED])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SLEEP])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You have your own bed and your own room!']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WARDROBE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["That's where Bilbo keeps his clothes."]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, DESK])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [DESK.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, MIRROR])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [MIRROR.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, DRESSER])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [DRESSER.desc]));
    if (this$static.isBilboFishing) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is Bilbo's room. His memoirs are sitting on his desk. A window looks out into the garden."]));
    }
     else {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is Bilbo's room. Bilbo is sitting at his desk, working on his memoirs. A window looks out into the garden."]));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BILBO_0])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo is over one hundred, but still in great health. He is working on his memoirs, telling of all the adventures he had in his younger days.']));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, BILBO_0]))) {
        return this$static.talkedToGandalf?$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"It\'s such a warm spring day! When did you last go fishing?" you ask.', '"Not since I broke my fishing rod, I\'m afraid" says Bilbo.'])):$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Good morning!" says Bilbo. "You can fix yourself some breakfast. I\'m writing the chapter in the cave with the goblins and I may just keep writing until I can see the sun out the other side."']));
      }
      if ($has(this$static, FISHING_ROD)) {
        if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, FISHING_ROD, BILBO_0])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, FISHING_ROD, TO, BILBO_0]))) {
          $clinit_Boolean();
          $removeEnum(this$static.inventory, FISHING_ROD)?true:false;
          (this$static.isBilboFishing = true)?true:false;
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"I was talking to Halfred and he lent me this fishing rod. Do you want to go fishing?" you ask.', 'Bilbo looks out the window. "It would be a shame to waste this sunshine," he says. "I\'ll catch us something for dinner!"', 'He takes the fishing rod and sets off for the lake.']));
        }
      }
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [OPEN, WARDROBE])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo will let you know if he wants you to go through his wardrobe.']));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [OPEN, DRESSER])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo will let you know if he wants you to go through his dresser.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [READ, MEMOIRS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [MEMOIRS.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, MEMOIRS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo would probably prefer you left those as they are.']));
  }
  if ($at(this$static, BAGEND_KITCHEN)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is the kitchen at Bag End. It is well stocked as a hobbit's should be - the pantry is filled with food." + (!$has(this$static, STOOL)?' Next to the pantry is a wooden stool, for reaching the top shelf.':'') + (!$has(this$static, OLIVE_OIL)?' A bottle of olive oil stands on the bench.':'')]));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, STOOL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Next to the pantry is a wooden stool, for reaching the top shelf.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BENCH]))) {
      return $has(this$static, OLIVE_OIL)?$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [BENCH.desc])):$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A bottle of olive oil stands on the bench.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, OLIVE_OIL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A bottle of olive oil stands on the bench.']));
    if (!$has(this$static, STOOL) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, STOOL]))) {
      $clinit_Boolean();
      $add_1(this$static.inventory, STOOL)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You take the wooden stool with you, for a hobbit never knows when he might need some extra height.']));
    }
    if (!$has(this$static, OLIVE_OIL) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, OLIVE_OIL]))) {
      $clinit_Boolean();
      $add_1(this$static.inventory, OLIVE_OIL)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You take the bottle of olive oil.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, PANTRY])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, FOOD])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [PANTRY.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, FIRE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [FIRE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TABLE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [TABLE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, FOOD])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EAT, FOOD])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [COOK, FOOD])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [COOK]))) {
      valueOf(this$static.meal += 1);
      switch (this$static.meal) {
        case 1:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You fix yourself some breakfast - buttered toast with scrambled eggs, and a rasher of bacon.']));
        case 2:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Feeling peckish, you decide it is time for second breakfast, and you take a generous slice of seedcake and wash it down with a mug of tea.']));
        case 3:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['It must be time for elevenses, you realise. You help yourself to some buttered scones with raspberry jam.']));
        case 4:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A busy morning calls for an early luncheon. You cut yourself a piece of pork pie and savor every mouthful.']));
        default:case 5:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You are still quite full from your early luncheon - and besides, it is not yet time for afternoon tea.']));
        case 6:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Just a snack, then. You slice yourself a piece of cheese, and eat it with a pickle.']));
      }
    }
  }
  if ($at(this$static, BAGEND_HILL)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, HOUSE]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['This is Bag End - a beautiful home on a hill, the envy of many hobbits in the Shire.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [TREE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, DOOR])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [DOOR.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, FLOWERS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [FLOWERS.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ROCK])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [ROCK.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ROAD])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [ROAD.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WALL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [WALL.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, FLOWERS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['They belong in the garden.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, ROCK])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's bigger than you are!"]));
  }
  if ($at(this$static, LAKE_TREE)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You are on the shore of Hobbiton's lake."]));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A huge elm tree overlooks the lake.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, LAKE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [LAKE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [CLIMB_UP, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The top of the tree has a great view! But perhaps now is not the time.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WALL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [WALL.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ROAD])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [ROAD.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, REEDS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [REEDS.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, GOOSE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [GOOSE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, REEDS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The scenery is fine where it already is.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SWIM])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['It is a little early in the season for swimming - the water will still be freezing.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, GOOSE])))
      return $isCloseTo(($clinit_Sprites() , FRODO_0), GOOSE_0, 16)?$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Ouch! You try to pick up the goose, but you quickly change your mind.'])):$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You're not close enough."]));
  }
  if ($at(this$static, NEIGHBOR)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['This is the house of your neighbour, Andwise. Andwise himself is at his gate, smoking a pipe and watching the world go by, as he often does.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SWIM])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['It is a little early in the season for swimming - the water will still be freezing.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, HOUSE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Andwise lives alone in a small yellow house under a grassy hillock.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ANDWISE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [ANDWISE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ROAD])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [ROAD.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, FENCE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [FENCE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WALL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [WALL.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, RIVER])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [RIVER.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, ANDWISE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Good morning, young Frodo! What a lovely day to be out and about."']));
  }
  if ($at(this$static, HOBBITON)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A bridge crosses the river and leads into the Green Dragon inn, which is the centre of Hobbiton.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SWIM])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['It is a little early in the season for swimming - the water will still be freezing.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, RIVER])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [RIVER.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, WALL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [WALL.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, INN])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [INN.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, HOUSE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [INN.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, MILL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [MILL.desc]));
  }
  if ($at(this$static, GREEN_DRAGON)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Most of those already seated in the Green Dragon at this hour are regulars. The only irregular is the wizard Gandalf, on his own in the corner. Behind the bar is Rosie.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, GANDALF])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo and Gandalf are great friends since they went adventuring. Living at Bag End, you have become very close to him too. Gandalf looks old and he may be even older, but he always has his wits and a sense of humour.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, REGULARS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [REGULARS.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, REGULARS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Morning young Frodo!"\n"Here for second breakfast?"\n"Good morning Frodo"']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ROSIE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [ROSIE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, ROSIE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"What will it be today, Mister Frodo?"']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [BUY, MUG_OF_ALE])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [BUY_A, MUG_OF_ALE])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [BUY_AN, MUG_OF_ALE]))) {
      if ($has(this$static, MUG_OF_ALE))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You already have a mug of ale.']));
      if (!$has(this$static, MONEY_POUCH))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You realise you have forgotten your money at home.']));
      $clinit_Boolean();
      $add_1(this$static.inventory, MUG_OF_ALE)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Rosie pours and hands you a mug of ale.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, GANDALF]))) {
      valueOf(this$static.gandalfTalk += 1);
      switch (this$static.gandalfTalk) {
        case 2:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Frodo my lad! I see you got my note. Come, get yourself something to drink, then come and listen to what I have to say."']));
        case 3:
          $clinit_Boolean();
          (this$static.talkedToGandalf = true)?true:false;
          $addLocationEvent(this$static, HOBBITON);
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Gandalf, I thought you left the Shire yesterday?" you ask.', '"I did give that impression, but I stayed the night here. I had a good reason for it. Tell me, have you ever seen Bilbo without his ring?"', '"That little golden ring? He never has it on his finger, but I think he always carries it in his pocket," you say.', '"Exactly. There\'s something odd about that ring, and I think it makes Bilbo odd too. I want to have a closer look at it, but Bilbo won\'t let me. And now whenever he sees me, he guards it jealously."', '"Now that he thinks I\'m gone, try and get a hold of it and bring it here. Oh and you should be aware - it is an invisibility ring."']));
        case 4:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Why does Bilbo have an invisibility ring?" you ask.', '"He found it at the bottom of a deep dark cave full of goblins. But I\'m afraid it is full of dark magic. If you bring it to me, I can check."']));
        case 5:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"What sort of dark magic?" you ask.', '"I\'m not sure... maybe a necromancer... look, it might be nothing, but it might be very serious. Try to bring me the ring."']));
        case 6:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"How can I get hold of the ring?" you ask.', '"I don\'t know. Bilbo must take it off sometimes - when he bathes? When he sleeps? I\'ll wait here until you can get it."']));
        case 7:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"What will you do when you get the ring?" you ask.', '"Check it for hidden writing. Then I will know if it is the same ring I have been warned about."']));
        default:return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"I\'ll be waiting here," says Gandalf. "Bring me the ring as soon as you can."']));
      }
    }
  }
  if ($at(this$static, LAKE_HOUSE)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Here you see Halfred, fishing from the side of the lake. His boat is moored here too.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [SWIM])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['It is a little early in the season for swimming - the water will still be freezing.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, HALFRED])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [HALFRED.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, LAKE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [LAKE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['There are several trees, but none that stand out.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, HOUSE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Not a proper hobbit hole - the lake house is mostly used for storing fishing nets and other gear.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [CLIMB_UP, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['There are several trees, but none that seem worth climbing.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, FISHING_ROD])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["Halfred is holding a fishing rod, but doesn't seem to have a bite yet."]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, FISHING_ROD])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["Out of Halfred's hands? I think better not."]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BOAT])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [BOAT.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, BOAT])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Mind if I borrow your boat, Halfred?" you ask.', '"Where are you off to?"', '"Just... around," you answer.', '"Come back tomorrow and you can take it across the lake on an errand for me."']));
    if ($has(this$static, MUG_OF_ALE)) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, MUG_OF_ALE, HALFRED])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, MUG_OF_ALE, TO, HALFRED]))) {
        if ($has(this$static, FISHING_ROD)) {
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Another one? You are too kind. Cheers!"']));
        }
         else {
          $clinit_Boolean();
          $removeEnum(this$static.inventory, MUG_OF_ALE)?true:false;
          $add_1(this$static.inventory, FISHING_ROD)?true:false;
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Oh! That\'s very kind of you, lad. Here, you can borrow my spare fishing rod."', 'He gives you a fishing rod.']));
        }
      }
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, HALFRED]))) {
      if (!this$static.talkedToGandalf)
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Are they biting, Halfred?" you ask. "None yet this morning, Frodo!"']));
      if (!$has(this$static, FISHING_ROD))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Halfred", you ask, "could I borrow a fishing rod?"', '"I have a spare but I don\'t like to lend it out, it\'s always getting broken. But for you, Mister Frodo, you can have if you bring me a mug of ale."']));
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Are they biting, Halfred?" you ask. "None yet this morning, Frodo!"']));
    }
  }
  return false;
}

function $submitUserCommand(this$static, prompt_0){
  var success;
  this$static.prompt_0 = prompt_0;
  prompt_0.submit = true;
  success = $promptInput(this$static);
  prompt_0.submit = false;
  this$static.prompt_0 = null;
  return success;
}

function $typed_1(this$static, commands){
  return $typed(this$static.prompt_0, commands);
}

function $typed_2(this$static, commands){
  return $typed_0(this$static.prompt_0, commands);
}

function $updateSuggestion(this$static, prompt_0){
  this$static.prompt_0 = prompt_0;
  $reset_0(prompt_0.suggestions.map_0);
  $promptInput(this$static);
  prompt_0.suggestion = $findOneSuggestion(prompt_0);
  this$static.prompt_0 = null;
}

function State(eventManager){
  var all;
  this.location_0 = ($clinit_Location() , FRODOS_ROOM);
  this.inventory = (all = $getEnumConstants(Lfrodo_core_Item_2_classLit) , new EnumSet$EnumSetImpl(all, createFrom(all, all.length)));
  this.prompt_0 = new Prompt;
  this.eventManager = eventManager;
}

defineClass(249, 1, {}, State);
_.gandalfTalk = 0;
_.isBilboFishing = false;
_.isWardrobeOpen = false;
_.meal = 0;
_.talkedToGandalf = false;
var Lfrodo_core_State_2_classLit = createForClass(249);
function $draw_3(this$static, image, x_0, y_0){
  $pixelate(INSTANCE_0);
  $draw_7(this$static.raw, $texture(image.raw), x_0, y_0);
  $pixelate(INSTANCE_0);
}

function Surface(raw){
  this.raw = raw;
}

defineClass(290, 1, {}, Surface);
var Lfrodo_core_Surface_2_classLit = createForClass(290);
function getVariants(enumName, rest){
  var i, len, variants;
  len = rest.length;
  variants = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_2, 2, len + 1, 6, 1);
  variants[0] = $replace(enumName.toLowerCase(), '_', ' ');
  for (i = 0; i < len; i++) {
    variants[i + 1] = rest[i];
  }
  return variants;
}

function getVariantsSkipDesc(enumName, rest){
  var i, len, variants;
  len = rest.length;
  variants = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_2, 2, len > 1?len:1, 6, 1);
  variants[0] = $replace(enumName.toLowerCase(), '_', ' ');
  for (i = 0; i < len - 1; i++) {
    variants[i + 1] = rest[i];
  }
  return variants;
}

function $draw_4(this$static, surface){
  !!this$static.snapshot && $draw_3(surface, this$static.snapshot, 32, 20);
}

function $render(this$static, text_0){
  var i, maxHeight, maxHeightPx, maxWidth, maxWidthPx, sb, width_0, x_0, y_0;
  sb = new StringBuilder_0($trim(text_0));
  width_0 = 0;
  maxWidth = 0;
  maxHeight = 0;
  outer: for (i = 0; i < sb.string.length; i++) {
    if ($charAt_0(sb.string, i) == 10) {
      maxWidth = maxWidth > width_0?maxWidth:width_0;
      ++maxHeight;
      width_0 = 0;
      continue;
    }
    ++width_0;
    if (width_0 >= 30) {
      for (; width_0 >= 0; --width_0 , i--) {
        if ($charAt_0(sb.string, i) == 32) {
          $replace0(sb, i, i + 1, String.fromCharCode(10));
          maxWidth = maxWidth > width_0?maxWidth:width_0;
          ++maxHeight;
          width_0 = 0;
          continue outer;
        }
      }
      throw toJs(new IllegalStateException('Cannot layout text - too few spaces:\n' + text_0));
    }
  }
  maxWidth = maxWidth > width_0?maxWidth:width_0;
  ++maxHeight;
  maxWidthPx = maxWidth * 8;
  maxHeightPx = maxHeight * 10 - 2;
  x_0 = (256 - maxWidthPx) / 2 | 0;
  y_0 = (184 - maxHeightPx) / 2 | 0;
  $clear_2(this$static.canvas.raw);
  $fillRectPlusBorder(this$static.canvas, x_0, y_0, maxWidthPx, maxHeightPx);
  $strokeRect(this$static.canvas, x_0 - 6, y_0 - 6, maxWidthPx + 12, maxHeightPx + 12);
  $justified(BLACK, this$static.canvas, sb, x_0, y_0, maxWidth);
  this$static.snapshot = new Image_0(this$static.canvas.raw.image);
  this$static.canvas = new Canvas_0(INSTANCE_0.canvasCreator.create_0(256, 184));
}

function TextDisplay(){
  this.canvas = new Canvas_0(INSTANCE_0.canvasCreator.create_0(256, 184));
}

defineClass(273, 1, {}, TextDisplay);
_.snapshot = null;
var Lfrodo_core_TextDisplay_2_classLit = createForClass(273);
function $clinit_Verb(){
  $clinit_Verb = emptyMethod;
  INVENTORY = new Verb('INVENTORY', 0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['inventory', 'inv', 'i']));
  LOOK = new Verb('LOOK', 1, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  EXAMINE = new Verb('EXAMINE', 2, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['look at', 'look']));
  READ = new Verb('READ', 3, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['examine', 'look at', 'look']));
  TAKE = new Verb('TAKE', 4, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['pick up', 'get']));
  TALK_TO = new Verb('TALK_TO', 5, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['talk']));
  USE = new Verb('USE', 6, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  OPEN = new Verb('OPEN', 7, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  CLOSE = new Verb('CLOSE', 8, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['shut']));
  OIL = new Verb('OIL', 9, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  CLIMB_IN = new Verb('CLIMB_IN', 10, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['climb through']));
  CLIMB_OUT = new Verb('CLIMB_OUT', 11, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['climb through']));
  SLEEP_IN = new Verb('SLEEP_IN', 12, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['use', 'get in']));
  SLEEP = new Verb('SLEEP', 13, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  EAT = new Verb('EAT', 14, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['use']));
  COOK = new Verb('COOK', 15, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  CLIMB_UP = new Verb('CLIMB_UP', 16, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['climb']));
  SWIM = new Verb('SWIM', 17, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  BUY = new Verb('BUY', 18, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['order', 'ask for']));
  BUY_A = new Verb('BUY_A', 19, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['order a', 'ask for a']));
  BUY_AN = new Verb('BUY_AN', 20, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['order an', 'ask for an']));
  DRINK_0 = new Verb('DRINK', 21, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  GIVE = new Verb('GIVE', 22, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  TO = new Verb('TO', 23, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
}

function Verb(enum$name, enum$ordinal, in_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.variants = getVariants(this.name_0 != null?this.name_0:'' + this.ordinal, in_0);
}

function values_12(){
  $clinit_Verb();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Verb_2_classLit, 1), $intern_1, 12, 0, [INVENTORY, LOOK, EXAMINE, READ, TAKE, TALK_TO, USE, OPEN, CLOSE, OIL, CLIMB_IN, CLIMB_OUT, SLEEP_IN, SLEEP, EAT, COOK, CLIMB_UP, SWIM, BUY, BUY_A, BUY_AN, DRINK_0, GIVE, TO]);
}

defineClass(12, 6, {5:1, 12:1, 3:1, 7:1, 6:1}, Verb);
_.variants_0 = function variants_2(){
  return this.variants;
}
;
var BUY, BUY_A, BUY_AN, CLIMB_IN, CLIMB_OUT, CLIMB_UP, CLOSE, COOK, DRINK_0, EAT, EXAMINE, GIVE, INVENTORY, LOOK, OIL, OPEN, READ, SLEEP, SLEEP_IN, SWIM, TAKE, TALK_TO, TO, USE;
var Lfrodo_core_Verb_2_classLit = createForEnum(12, values_12);
function $clinit_Z(){
  $clinit_Z = emptyMethod;
  BEHIND_BACKGROUND = new Z('BEHIND_BACKGROUND', 0, -1);
  BACKGROUND = new Z('BACKGROUND', 1, 0);
  FOREGROUND = new Z('FOREGROUND', 2, 1000);
  IN_FRONT_OF_FOREGROUND = new Z('IN_FRONT_OF_FOREGROUND', 3, 1001);
  NONE_0 = new Z('NONE', 4, -10);
  MANUAL = new Z('MANUAL', 5, -20);
  AUTO_0 = new Z('AUTO', 6, -30);
}

function Z(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_13(){
  $clinit_Z();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Z_2_classLit, 1), $intern_1, 40, 0, [BEHIND_BACKGROUND, BACKGROUND, FOREGROUND, IN_FRONT_OF_FOREGROUND, NONE_0, MANUAL, AUTO_0]);
}

defineClass(40, 6, {40:1, 3:1, 7:1, 6:1}, Z);
_.value_0 = 0;
var AUTO_0, BACKGROUND, BEHIND_BACKGROUND, FOREGROUND, IN_FRONT_OF_FOREGROUND, MANUAL, NONE_0;
var Lfrodo_core_Z_2_classLit = createForEnum(40, values_13);
function FrodosQuestHtml$HtmlCanvasCreator(graphics){
  this.graphics = graphics;
}

defineClass(160, 1, {}, FrodosQuestHtml$HtmlCanvasCreator);
_.create_0 = function create_6(pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this.graphics, ($clinit_Scale() , ONE), elem));
}
;
var Lfrodo_html_FrodosQuestHtml$HtmlCanvasCreator_2_classLit = createForClass(160);
defineClass(340, 1, {18:1});
var Ljava_io_OutputStream_2_classLit = createForClass(340);
defineClass(341, 340, {18:1});
var Ljava_io_FilterOutputStream_2_classLit = createForClass(341);
function PrintStream(){
}

defineClass(171, 341, {18:1}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass(171);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $replace0(this$static, start_0, end, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + ('' + toInsert) + $substring(this$static.string, end);
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = this$static.string.length;
  newLength < oldLength?(this$static.string = $substring_0(this$static.string, 0, newLength)):newLength > oldLength && (this$static.string += valueOf_0(initUnidimensionalArray(C_classLit, $intern_2, 16, newLength - oldLength, 15, 1)));
}

function $subSequence(this$static, start_0, end){
  return $substring_0(this$static.string, start_0, end);
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(93, 1, {114:1});
_.charAt = function charAt(index_0){
  return $charAt(this, index_0);
}
;
_.length_0 = function length_1(){
  return this.string.length;
}
;
_.subSequence = function subSequence(start_0, end){
  return $subSequence(this, start_0, end);
}
;
_.toString_0 = function toString_10(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass(93);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  $clinit_Boolean();
}

function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?compare_6((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):instanceOfDouble(this$static)?compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):instanceOfBoolean(this$static)?compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 164:1, 7:1};
var Ljava_lang_Boolean_2_classLit = createForClass(164);
defineClass(92, 1, {3:1, 92:1});
var Ljava_lang_Number_2_classLit = createForClass(92);
function compare_3(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

doubleCastMap = {3:1, 7:1, 165:1, 92:1};
var Ljava_lang_Double_2_classLit = createForClass(165);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(20, 9, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass(20);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(23, 9, $intern_3, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass(23);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(58, 9, $intern_3, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass(58);
function Integer(value_0){
  this.value_0 = value_0;
}

function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function highestOneBit(i){
  var rtn;
  if (i < 0) {
    return $intern_16;
  }
   else if (i == 0) {
    return 0;
  }
   else {
    for (rtn = 1073741824; (rtn & i) == 0; rtn >>= 1)
    ;
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(70, 92, {3:1, 7:1, 70:1, 92:1}, Integer);
_.compareTo = function compareTo_0(b){
  return compare_4(this.value_0, b.value_0);
}
;
_.equals_0 = function equals_6(o){
  return instanceOf(o, 70) && o.value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_7(){
  return this.value_0;
}
;
_.toString_0 = function toString_12(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass(70);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 70, 256, 0, 1);
}

var boxedValues;
function abs_0(x_0){
  return x_0 < 0?-x_0:x_0;
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_1(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(51, 94, $intern_3, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass(51);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(42, 1, {3:1, 42:1}, StackTraceElement);
_.equals_0 = function equals_7(other){
  var st;
  if (instanceOf(other, 42)) {
    st = other;
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className_0 == st.className_0 && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_15(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_13(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass(42);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(other){
  checkCriticalNotNull('body');
  if (other == null) {
    return false;
  }
  if ($equals('body', other)) {
    return true;
  }
  return 'body'.length == other.length && $equals('body'.toLowerCase(), other.toLowerCase());
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_2, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = $substring_0(trail, 0, matchObj.index);
      trail = $substring_0(trail, matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty , undefined);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function charAt_I_C__devirtual$(this$static, index_0){
  return instanceOfString(this$static)?this$static.charCodeAt(index_0):this$static.charAt(index_0);
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & $intern_19;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & $intern_19;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_19);
  }
}

function length__I__devirtual$(this$static){
  return instanceOfString(this$static)?this$static.length:this$static.length_0();
}

function subSequence_II_Ljava_lang_CharSequence___devirtual$(this$static, start_0, end){
  return instanceOfString(this$static)?this$static.substr(start_0, end - start_0):this$static.subSequence(start_0, end);
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_0(x_0){
  return valueOf_1(x_0, x_0.length);
}

function valueOf_1(x_0, count){
  var batchEnd, batchStart, s;
  checkCriticalStringBounds(count, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < count;) {
    batchEnd = batchStart + 10000 < count?batchStart + 10000:count;
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 114:1, 7:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass(2);
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(80, 93, {114:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass(80);
function $append_1(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_5(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_6(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_7(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_8(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $deleteCharAt(this$static, start_0){
  this$static.string = $substring_0(this$static.string, 0, start_0) + '' + $substring(this$static.string, start_0 + 1);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(32, 93, {114:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass(32);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(170, 58, $intern_3, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass(170);
function $clinit_System(){
  $clinit_System = emptyMethod;
  out_0 = new PrintStream;
}

function arraycopy(src_0, dest, destOfs, len){
  $clinit_System();
  var destlen, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  getClass__Ljava_lang_Class___devirtual$(src_0);
  getClass__Ljava_lang_Class___devirtual$(dest);
  srclen = src_0.length;
  destlen = dest.length;
  if (destOfs < 0 || len < 0 || len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  len > 0 && copy(src_0, 0, dest, destOfs, len, true);
}

defineClass(402, 1, {});
var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(59, 9, $intern_3, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(59);
function $clear_0(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  this$static.limit = this$static.capacity;
  return this$static;
}

function $limit(this$static, newLimit){
  if (newLimit < 0 || newLimit > this$static.capacity) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.limit = newLimit;
  this$static.position_0 > newLimit && (this$static.position_0 = newLimit);
  this$static.mark != -1 && this$static.mark > newLimit && (this$static.mark = -1);
  return this$static;
}

function $position(this$static){
  if (0 > this$static.limit) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.position_0 = 0;
  this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
  return this$static;
}

function $rewind(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  return this$static;
}

function Buffer(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.capacity = this.limit = capacity;
}

defineClass(75, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass(75);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(153, 9, $intern_3, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass(153);
function $$init_0(this$static){
  this$static.order = ($clinit_ByteOrder() , BIG_ENDIAN);
}

function $asIntBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new IntBuffer($slice(this$static));
}

function $asShortBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new ShortBuffer($slice(this$static));
}

function $compareTo(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.byteArray[thisPos];
    otherByte = otherBuffer.byteArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_0(this$static, index_0){
  return this$static.byteArray[index_0];
}

function $order(this$static, byteOrder){
  this$static.order = byteOrder;
  return this$static;
}

function $slice(this$static){
  var slice_0;
  slice_0 = new ByteBuffer_1(this$static.byteArray.buffer, this$static.limit - this$static.position_0, this$static.byteArray.byteOffset + this$static.position_0);
  slice_0.order = this$static.order;
  return slice_0;
}

function ByteBuffer(capacity){
  ByteBuffer_0.call(this, new ArrayBuffer(capacity));
}

function ByteBuffer_0(buf){
  Buffer.call(this, buf.byteLength);
  $$init_0(this);
  this.byteArray = new Int8Array(buf);
}

function ByteBuffer_1(buffer, capacity, offset){
  Buffer.call(this, capacity);
  $$init_0(this);
  this.byteArray = new Int8Array(buffer, offset, capacity);
}

function allocateDirect(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  return new ByteBuffer(capacity);
}

defineClass(76, 75, {7:1, 76:1, 113:1}, ByteBuffer, ByteBuffer_1);
_.compareTo = function compareTo_1(otherBuffer){
  return $compareTo(this, otherBuffer);
}
;
_.equals_0 = function equals_8(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 76)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_0(this, myPosition++) == $get_0(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize(){
  return 1;
}
;
_.getElementType = function getElementType(){
  return 5120;
}
;
_.getTypedArray = function getTypedArray(){
  return this.byteArray;
}
;
_.hashCode_0 = function hashCode_9(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_0(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_14(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ByteBuffer_2_classLit) , Ljava_nio_ByteBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ByteBuffer_2_classLit = createForClass(76);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(152, 1, {}, ByteOrder);
_.toString_0 = function toString_15(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass(152);
function $compareTo_0(this$static, otherBuffer){
  var compareRemaining, otherFloat, otherPos, thisFloat, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisFloat = this$static.floatArray[thisPos];
    otherFloat = otherBuffer.floatArray[otherPos];
    if (thisFloat != otherFloat && (thisFloat == thisFloat || otherFloat == otherFloat)) {
      return thisFloat < otherFloat?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_1(this$static, index_0){
  return this$static.floatArray[index_0];
}

function $put_0(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.floatArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function FloatBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.floatArray = create(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(84, 75, {7:1, 84:1, 113:1}, FloatBuffer);
_.compareTo = function compareTo_2(otherBuffer){
  return $compareTo_0(this, otherBuffer);
}
;
_.equals_0 = function equals_9(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 84)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_1(this, myPosition++) == $get_1(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_0(){
  return 4;
}
;
_.getElementType = function getElementType_0(){
  return 5126;
}
;
_.getTypedArray = function getTypedArray_0(){
  return this.floatArray;
}
;
_.toString_0 = function toString_16(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_FloatBuffer_2_classLit) , Ljava_nio_FloatBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_FloatBuffer_2_classLit = createForClass(84);
function $compareTo_1(this$static, otherBuffer){
  var compareRemaining, otherInt, otherPos, thisInt, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisInt = this$static.intArray[thisPos];
    otherInt = otherBuffer.intArray[otherPos];
    if (thisInt != otherInt) {
      return thisInt < otherInt?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_2(this$static, index_0){
  return this$static.intArray[index_0];
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.intArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(107, 75, {7:1, 107:1, 113:1}, IntBuffer);
_.compareTo = function compareTo_3(otherBuffer){
  return $compareTo_1(this, otherBuffer);
}
;
_.equals_0 = function equals_10(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 107)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_2(this, myPosition++) == $get_2(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_1(){
  return 4;
}
;
_.getElementType = function getElementType_1(){
  return 5124;
}
;
_.getTypedArray = function getTypedArray_1(){
  return this.intArray;
}
;
_.hashCode_0 = function hashCode_10(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_2(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_17(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_IntBuffer_2_classLit) , Ljava_nio_IntBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_IntBuffer_2_classLit = createForClass(107);
function $compareTo_2(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.shortArray[thisPos];
    otherByte = otherBuffer.shortArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_3(this$static, index_0){
  return this$static.shortArray[index_0];
}

function $put_1(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.shortArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function ShortBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 1);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.shortArray = create_0(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(106, 75, {7:1, 106:1, 113:1}, ShortBuffer);
_.compareTo = function compareTo_4(otherBuffer){
  return $compareTo_2(this, otherBuffer);
}
;
_.equals_0 = function equals_11(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 106)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_3(this, myPosition++) == $get_3(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_2(){
  return 2;
}
;
_.getElementType = function getElementType_2(){
  return 5122;
}
;
_.getTypedArray = function getTypedArray_2(){
  return this.shortArray;
}
;
_.hashCode_0 = function hashCode_11(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_3(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_18(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ShortBuffer_2_classLit) , Ljava_nio_ShortBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ShortBuffer_2_classLit = createForClass(106);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_4(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    if ($equals_0(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $get_4(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key);
}

function $put_2(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_3(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_3(this$static.hashCodeMap, null, value_0):$put_4(this$static.stringMap, key, value_0);
}

function $reset_0(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(270, 355, $intern_10);
_.containsKey = function containsKey_1(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get_4(this, key);
}
;
_.put = function put_1(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_4(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass(270);
function $contains_1(this$static, o){
  if (instanceOf(o, 41)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(45, 357, $intern_12, AbstractHashMap$EntrySet);
_.contains = function contains_1(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_1(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_5(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass(45);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_0(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = this$static.current.next_1();
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(46, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(46);
defineClass(364, 356, {89:1});
_.add_1 = function add_1(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_12(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 89)) {
    return false;
  }
  other = o;
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_17(this);
}
;
_.iterator = function iterator_2(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass(364);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(133, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_2(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass(133);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(134, 133, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(134);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(122, 357, $intern_12, AbstractMap$1);
_.contains = function contains_2(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass(122);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(101, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_3(){
  var entry;
  return entry = $next_0(this.val$outerIter2) , entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass(101);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(123, 356, {}, AbstractMap$2);
_.contains = function contains_3(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_4(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_7(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass(123);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(102, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_4(){
  var entry;
  return entry = $next_0(this.val$outerIter2) , entry.getValue();
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass(102);
defineClass(268, 1, $intern_11);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 41)) {
    return false;
  }
  entry = other;
  return equals_20(this.key_0, entry.getKey()) && equals_20(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_0(){
  return this.key_0;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_22(this.key_0) ^ hashCode_22(this.value_0);
}
;
_.setValue = function setValue_0(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_19(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass(268);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(269, 268, $intern_11, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass(269);
defineClass(367, 1, $intern_11);
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 41)) {
    return false;
  }
  entry = other;
  return equals_20(this.val$entry2.value[0], entry.getKey()) && equals_20($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_22(this.val$entry2.value[0]) ^ hashCode_22($getValue(this));
}
;
_.toString_0 = function toString_20(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass(367);
function $addLast(this$static, e){
  checkCriticalNotNull(e);
  this$static.array[this$static.tail] = e;
  this$static.tail = this$static.tail + 1 & this$static.array.length - 1;
  $ensureCapacity(this$static);
}

function $contains_2(it, o){
  if (o == null) {
    return false;
  }
  while (it.currentIndex != it.fence) {
    if (equals_Ljava_lang_Object__Z__devirtual$(o, $next_1(it))) {
      return true;
    }
  }
  return false;
}

function $copyElements(this$static, dest, count){
  var dstIdx, i, mask;
  mask = this$static.array.length - 1;
  for (i = this$static.head , dstIdx = 0; dstIdx < count; i = i + 1 & mask , ++dstIdx) {
    dest[dstIdx] = this$static.array[i];
  }
}

function $ensureCapacity(this$static){
  var newArray, newLength, numElements;
  if (this$static.head != this$static.tail) {
    return;
  }
  numElements = this$static.array.length;
  newLength = highestOneBit(8 > numElements?8:numElements) << 1;
  if (this$static.head != 0) {
    newArray = createFrom(this$static.array, newLength);
    $copyElements(this$static, newArray, numElements);
    this$static.array = newArray;
    this$static.head = 0;
  }
   else {
    setLength(this$static.array, newLength);
  }
  this$static.tail = numElements;
}

function $isEmpty(this$static){
  return this$static.head == this$static.tail;
}

function $peek(this$static){
  return this$static.array[this$static.head];
}

function $peekLast(this$static){
  return this$static.array[this$static.tail - 1 & this$static.array.length - 1];
}

function $pollFirst(this$static){
  var e;
  e = this$static.array[this$static.head];
  if (e == null) {
    return null;
  }
  this$static.array[this$static.head] = null;
  this$static.head = this$static.head + 1 & this$static.array.length - 1;
  return e;
}

function $size_0(this$static){
  return this$static.tail - this$static.head & this$static.array.length - 1;
}

function ArrayDeque(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 8, 5, 1);
}

function checkConcurrentModification(expression){
  if (!expression) {
    throw toJs(new ConcurrentModificationException);
  }
}

defineClass(140, 356, {}, ArrayDeque);
_.add_0 = function add_3(e){
  return $addLast(this, e) , true;
}
;
_.contains = function contains_4(o){
  return $contains_2(new ArrayDeque$IteratorImpl(this), o);
}
;
_.isEmpty = function isEmpty_0(){
  return $isEmpty(this);
}
;
_.iterator = function iterator_5(){
  return new ArrayDeque$IteratorImpl(this);
}
;
_.size_1 = function size_8(){
  return $size_0(this);
}
;
_.head = 0;
_.tail = 0;
var Ljava_util_ArrayDeque_2_classLit = createForClass(140);
function $next_1(this$static){
  var e;
  checkCriticalElement(this$static.currentIndex != this$static.fence);
  e = this$static.this$01.array[this$static.currentIndex];
  checkConcurrentModification(this$static.fence == this$static.this$01.tail && e != null);
  this$static.currentIndex = this$static.currentIndex + 1 & this$static.this$01.array.length - 1;
  return e;
}

function ArrayDeque$IteratorImpl(this$0){
  this.this$01 = this$0;
  this.currentIndex = this.this$01.head;
  this.fence = this.this$01.tail;
}

defineClass(141, 1, {}, ArrayDeque$IteratorImpl);
_.hasNext_0 = function hasNext_4(){
  return this.currentIndex != this.fence;
}
;
_.next_1 = function next_5(){
  return $next_1(this);
}
;
_.currentIndex = 0;
_.fence = 0;
var Ljava_util_ArrayDeque$IteratorImpl_2_classLit = createForClass(141);
function $add_0(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll(this$static, c){
  var cArray, len;
  cArray = clone(c.array, c.array.length);
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $get_5(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_20(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $toArray(this$static, out){
  var i, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i = 0; i < size_0; ++i) {
    out[i] = this$static.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

defineClass(37, 364, $intern_20, ArrayList);
_.add_1 = function add_4(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_5(o){
  return $add_0(this, o);
}
;
_.contains = function contains_5(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_5(this, index_0);
}
;
_.isEmpty = function isEmpty_1(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_6(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_9(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass(37);
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(103, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_5(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_6(){
  return $next_2(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass(103);
function fill(a){
  fill0(a, a.length);
}

function fill0(a, toIndex){
  var i;
  for (i = 0; i < toIndex; ++i) {
    a[i] = 0;
  }
}

function hashCode_15(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      array[j] = array[j - 1];
      array[j - 1] = t;
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?(dest[destLow++] = src_0[srcLow++]):(dest[destLow++] = src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = ($clinit_Comparators() , !comp?INTERNAL_NATURAL_ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      array[low++] = temp[tempLow++];
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function sort_0(x_0, c){
  mergeSort(x_0, 0, x_0.length, c);
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_16(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_17(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 155)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(297, 364, $intern_20, Collections$EmptyList);
_.contains = function contains_6(object){
  return false;
}
;
_.get_1 = function get_4(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_1;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_1;
}
;
_.size_1 = function size_10(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass(297);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_1 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(298, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_6(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_7(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
var INSTANCE_1;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass(298);
defineClass(135, 1, {});
_.add_0 = function add_6(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_2(){
  return this.coll.isEmpty();
}
;
_.iterator = function iterator_8(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_11(){
  return this.coll.size_1();
}
;
_.toString_0 = function toString_21(){
  return toString_5(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass(135);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(137, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_7(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_8(){
  return this.it.next_1();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass(137);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(136, 135, {89:1}, Collections$UnmodifiableList);
_.equals_0 = function equals_15(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_1 = function get_5(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode_0 = function hashCode_18(){
  return hashCode__I__devirtual$(this.list);
}
;
_.isEmpty = function isEmpty_3(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass(136);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(138, 137, {}, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass(138);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(299, 1, $intern_10, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_16(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_0 = function get_6(key){
  return this.map_0.get_0(key);
}
;
_.hashCode_0 = function hashCode_19(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.put = function put_2(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_12(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_22(){
  return toString_5(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass(299);
defineClass(300, 135, $intern_12);
_.equals_0 = function equals_17(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_20(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass(300);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(301, 300, $intern_12, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_9(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass(301);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(304, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_1 = function next_9(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_1());
}
;
_.hasNext_0 = function hasNext_8(){
  return this.val$it2.hasNext_0();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass(304);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(302, 1, $intern_11, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_18(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_1(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_1(){
  return this.entry.getValue();
}
;
_.hashCode_0 = function hashCode_21(){
  return this.entry.hashCode_0();
}
;
_.setValue = function setValue_1(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_23(){
  return toString_5(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass(302);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(303, 136, {89:1, 155:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass(303);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

var INTERNAL_NATURAL_ORDER;
function Comparators$NaturalOrderComparator(){
}

defineClass(327, 1, $intern_2, Comparators$NaturalOrderComparator);
_.compare = function compare_5(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}
;
_.equals_0 = function equals_19(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass(327);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(154, 9, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(154);
defineClass(365, 357, $intern_12);
var Ljava_util_EnumSet_2_classLit = createForClass(365);
function $add_1(this$static, e){
  var ordinal;
  checkCriticalNotNull(e);
  ordinal = e.ordinal;
  if (!this$static.set_0[ordinal]) {
    this$static.set_0[ordinal] = e;
    ++this$static.size_0;
    return true;
  }
  return false;
}

function $containsEnum(this$static, e){
  return !!e && this$static.set_0[e.ordinal] == e;
}

function $removeEnum(this$static, e){
  if (!!e && this$static.set_0[e.ordinal] == e) {
    this$static.set_0[e.ordinal] = null;
    --this$static.size_0;
    return true;
  }
  return false;
}

function EnumSet$EnumSetImpl(all, set_0){
  this.all = all;
  this.set_0 = set_0;
  this.size_0 = 0;
}

defineClass(305, 365, $intern_12, EnumSet$EnumSetImpl);
_.add_0 = function add_7(e){
  return $add_1(this, e);
}
;
_.contains = function contains_7(o){
  return instanceOf(o, 6) && $containsEnum(this, o);
}
;
_.iterator = function iterator_10(){
  return new EnumSet$EnumSetImpl$IteratorImpl(this);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass(305);
function $findNext(this$static){
  var c;
  ++this$static.i;
  for (c = this$static.this$11.all.length; this$static.i < c; ++this$static.i) {
    if (this$static.this$11.set_0[this$static.i]) {
      return;
    }
  }
}

function $next_3(this$static){
  checkCriticalElement(this$static.i < this$static.this$11.all.length);
  this$static.last = this$static.i;
  $findNext(this$static);
  return this$static.this$11.set_0[this$static.last];
}

function EnumSet$EnumSetImpl$IteratorImpl(this$1){
  this.this$11 = this$1;
  $findNext(this);
}

defineClass(142, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.next_1 = function next_10(){
  return $next_3(this);
}
;
_.hasNext_0 = function hasNext_9(){
  return this.i < this.this$11.all.length;
}
;
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass(142);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset_0(this);
}

defineClass(36, 270, {3:1, 88:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass(36);
function $add_2(this$static, o){
  var old;
  old = $put_2(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_3(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(104, 357, {3:1, 49:1}, HashSet);
_.add_0 = function add_8(o){
  return $add_2(this, o);
}
;
_.contains = function contains_8(o){
  return $contains_3(this, o);
}
;
_.isEmpty = function isEmpty_4(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_11(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_14(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass(104);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_3(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  chain0[chain0.length] = new AbstractMap$SimpleEntry(key, value_0);
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(315, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_12(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass(315);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(147, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_11(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_10(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass(147);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_4(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_6(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_4(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(313, 1, {}, InternalStringMap);
_.iterator = function iterator_13(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass(313);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(146, 1, {}, InternalStringMap$1);
_.next_1 = function next_12(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_11(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass(146);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(314, 367, $intern_11, InternalStringMap$2);
_.getKey = function getKey_2(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_2(){
  return $getValue(this);
}
;
_.setValue = function setValue_2(object){
  return $put_4(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass(314);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(86, 9, $intern_3, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass(86);
function equals_20(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_22(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_3(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_7(this$static.builder, this$static.delimiter);
  $append_5(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(117, 1, {}, StringJoiner);
_.toString_0 = function toString_24(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass(117);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, end;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, overwrite?len:0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function createFrom(array, length_0){
  var result;
  result = new Array(length_0);
  return stampJavaTypeInfo_0(result, array);
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length, false);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function setLength(array, length_0){
  array.length = length_0;
}

function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0('Exception can not suppress itself.'));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(errorMessage));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkNotNull(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function compare_6(a, b){
  return a == b?0:a < b?-1:1;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(342, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass(342);
defineClass(346, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass(346);
function $draw_5(this$static, image, x_0, y_0){
  return $draw_6(this$static, image, x_0, y_0, image.width_1(), image.height_1());
}

function $draw_6(this$static, image, x_0, y_0, w, h){
  image.draw_0(this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $toTexture(this$static, config){
  return $createTexture_0(this$static.image, config);
}

function Canvas_1(image){
  this.image = image;
  this.width_0 = $invScaled(image.scale_0, image.pixelWidth);
  this.height_0 = $invScaled(image.scale_0, image.pixelHeight);
  if (this.width_0 <= 0 || this.height_0 <= 0)
    throw toJs(new IllegalArgumentException_0('Canvas must be > 0 in width and height: ' + this.width_0 + 'x' + this.height_0));
}

defineClass(323, 1, $intern_21);
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass(323);
function Clock(){
}

defineClass(105, 1, {105:1}, Clock);
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass(105);
defineClass(30, 1, {30:1});
var Lplayn_core_Event_2_classLit = createForClass(30);
function $setFlag(this$static, flag){
  this$static.flags |= flag;
}

function Event$Input(time){
  this.flags = 0;
  this.time = time;
}

function modifierFlags(altP, ctrlP, metaP, shiftP){
  var flags;
  flags = 0;
  altP && (flags |= 2);
  ctrlP && (flags |= 4);
  metaP && (flags |= 16);
  shiftP && (flags |= 8);
  return flags;
}

defineClass(28, 30, {30:1, 28:1});
_.addFields = function addFields(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_2(){
  return 'Input';
}
;
_.toString_0 = function toString_25(){
  var builder;
  builder = $append_1(new StringBuilder_0(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass(28);
function Event$XY(time, x_0, y_0){
  Event$Input.call(this, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(43, 28, {30:1, 28:1, 43:1, 50:1});
_.addFields = function addFields_0(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
}
;
_.name_1 = function name_3(){
  return 'XY';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lplayn_core_Event$XY_2_classLit = createForClass(43);
defineClass(353, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass(353);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll(this$static.running, this$static.pending);
  this$static.pending.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get_5(this$static.running, ii);
    try {
      action.run();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $reportError(this$static.plat, 'invokeLater Runnable failed: ' + action, e);
      }
       else 
        throw toJs($e0);
    }
  }
  this$static.running.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

function Exec$Default(plat){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = plat;
  $atPrio($addConnection(plat.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(254, 353, {}, Exec$Default);
var Lplayn_core_Exec$Default_2_classLit = createForClass(254);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(255, 343, {}, Exec$Default$1);
_.onEmit = function onEmit_1(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass(255);
function $checkError(this$static){
  var reported;
  reported = 0;
  if (this$static.checkErrors) {
    while (this$static.gl.getError() != 0) {
      reported += 1;
      $clinit_System();
    }
  }
  return reported > 0;
}

function $glGenTexture(this$static){
  $resizeIntBuffer(this$static.bufs);
  $glGenTextures(this$static, this$static.bufs.intBuffer);
  return this$static.bufs.intBuffer.intArray[0];
}

function $glUniform4fv(this$static, location_0, count, v){
  $setFloatBuffer(this$static.bufs, v, 4 * count);
  $glUniform4fv_0(this$static, location_0, count, this$static.bufs.floatBuffer);
}

function GL20(buffers, checkErrors){
  this.bufs = buffers;
  this.checkErrors = checkErrors;
}

defineClass(258, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass(258);
function $newCap(cap, length_0){
  var newLength;
  newLength = cap << 1;
  while (newLength < length_0) {
    newLength <<= 1;
  }
  return newLength;
}

function $resizeIntBuffer(this$static){
  var cap;
  cap = this$static.intBuffer.capacity;
  cap < 1?(this$static.intBuffer = $asIntBuffer($createByteBuffer($newCap(cap, 1) * 4))):$position(this$static.intBuffer);
  $limit(this$static.intBuffer, 1);
}

function $setFloatBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.floatBuffer.capacity;
  cap < length_0?(this$static.floatBuffer = new FloatBuffer($slice($createByteBuffer($newCap(cap, length_0) * 4)))):$position(this$static.floatBuffer);
  $limit(this$static.floatBuffer, length_0);
  $put_0(this$static.floatBuffer, source, length_0);
  $rewind(this$static.floatBuffer);
}

function $setShortBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.shortBuffer.capacity;
  cap < length_0?(this$static.shortBuffer = $asShortBuffer($createByteBuffer($newCap(cap, length_0) * 2))):$position(this$static.shortBuffer);
  $limit(this$static.shortBuffer, length_0);
  $put_1(this$static.shortBuffer, source, length_0);
  $rewind(this$static.shortBuffer);
}

defineClass(260, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass(260);
function $begin(this$static){
  if (this$static.begun)
    throw toJs(new IllegalStateException($getSimpleName(this$static.___clazz) + ' mismatched begin()'));
  this$static.begun = true;
}

function $end(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException($getSimpleName(this$static.___clazz) + ' mismatched end()'));
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException($getSimpleName(this$static.___clazz) + ' flush() without begin()'));
}

defineClass(358, 1, $intern_21);
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.flush = function flush(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass(358);
function $activate(this$static){
  $glUseProgram(this$static.gl, this$static.id_0);
}

function $compileShader_0(this$static, type_0, shaderSource){
  var compiled, log_0, shader;
  shader = $glCreateShader(this$static.gl, type_0);
  if (shader == 0)
    throw toJs(new RuntimeException_0('Failed to create shader (' + type_0 + '): ' + this$static.gl.gl.getError()));
  $glShaderSource(this$static.gl, shader, shaderSource);
  $glCompileShader(this$static.gl, shader);
  compiled = initUnidimensionalArray(I_classLit, $intern_2, 16, 1, 15, 1);
  $glGetShaderiv(this$static.gl, shader, compiled);
  if (compiled[0] == 0) {
    log_0 = $glGetShaderInfoLog(this$static.gl, shader);
    $glDeleteShader(this$static.gl, shader);
    throw toJs(new RuntimeException_0('Failed to compile shader (' + type_0 + '): ' + log_0));
  }
  return shader;
}

function $getAttribLocation_0(this$static, name_0){
  var loc;
  loc = $glGetAttribLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function $getUniformLocation_0(this$static, name_0){
  var loc;
  loc = $glGetUniformLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function GLProgram(gl, vertexSource, fragmentSource){
  var fragmentShader, id_0, linkStatus, log_0, prog, program, sh, sh0, vertexShader;
  this.gl = gl;
  id_0 = 0;
  vertexShader = 0;
  fragmentShader = 0;
  try {
    id_0 = (program = gl.gl.createProgram() , $add_4(gl.programs, program));
    if (id_0 == 0)
      throw toJs(new RuntimeException_0('Failed to create program: ' + gl.gl.getError()));
    $checkError(gl);
    vertexShader = $compileShader_0(this, 35633, vertexSource);
    $glAttachShader(gl, id_0, vertexShader);
    $checkError(gl);
    fragmentShader = $compileShader_0(this, 35632, fragmentSource);
    $glAttachShader(gl, id_0, fragmentShader);
    $checkError(gl);
    $linkProgram(gl.gl, gl.programs[id_0]);
    linkStatus = initUnidimensionalArray(I_classLit, $intern_2, 16, 1, 15, 1);
    linkStatus[0] = $getProgramParameterb(gl.gl, gl.programs[id_0], 35714)?1:0;
    if (linkStatus[0] == 0) {
      log_0 = $getProgramInfoLog(gl.gl, gl.programs[id_0]);
      prog = $remove_0(gl.programs, id_0);
      $deleteProgram(gl.gl, prog);
      throw toJs(new RuntimeException_0('Failed to link program: ' + log_0));
    }
    this.id_0 = id_0;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && (prog = $remove_0(gl.programs, id_0) , $deleteProgram(gl.gl, prog));
    vertexShader != 0 && (sh0 = $remove_0(gl.shaders, vertexShader) , $deleteShader(gl.gl, sh0));
    fragmentShader != 0 && (sh = $remove_0(gl.shaders, fragmentShader) , $deleteShader(gl.gl, sh));
  }
}

defineClass(148, 1, $intern_21, GLProgram);
_.id_0 = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass(148);
function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(189, 343, {}, Game$1);
_.onEmit = function onEmit_2(plat){
  var lastArg;
  $onFrame((lastArg = this , plat , lastArg).this$01);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass(189);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, 1), $scaledCeil(this$static.scale_0, 1));
    $fillRect_0(($setFillStyleWeb(canvas.ctx, cssColorString(-1)) , canvas), 0, 0, canvas.width_0, canvas.height_0);
    this$static.colorTex = $toTexture(canvas, ($clinit_Texture$Config() , UNMANAGED));
  }
  return this$static.colorTex;
}

function $createCanvas(this$static, width_0, height){
  return $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, width_0), $scaledCeil(this$static.scale_0, height));
}

function $createTexture(this$static, config){
  var id_0, minFilter;
  id_0 = $glGenTexture(this$static.gl);
  $glBindTexture(this$static.gl, id_0);
  $glTexParameteri(this$static.gl, 10240, config.magFilter);
  minFilter = mipmapify(config.minFilter, config.mipmaps);
  $glTexParameteri(this$static.gl, 10241, minFilter);
  $glTexParameteri(this$static.gl, 10242, config.repeatX?10497:33071);
  $glTexParameteri(this$static.gl, 10243, config.repeatY?10497:33071);
  return id_0;
}

function $viewportChanged(this$static, pixelWidth, pixelHeight){
  this$static.viewPixelWidth = pixelWidth;
  this$static.viewPixelHeight = pixelHeight;
  this$static.viewSizeM.width_0 = $invScaled(this$static.scale_0, pixelWidth);
  this$static.viewSizeM.height_0 = $invScaled(this$static.scale_0, pixelHeight);
  $info_0(this$static.plat.log_0, 'viewPortChanged ' + pixelWidth + 'x' + pixelHeight + ' / ' + this$static.scale_0.factor + ' -> ' + this$static.viewSize);
}

function Graphics(plat, gl, scale){
  this.viewSizeM = new Dimension;
  this.viewSize = this.viewSizeM;
  this.defaultRenderTarget = new Graphics$1(this, this);
  this.plat = plat;
  this.gl = gl;
  this.scale_0 = scale;
}

function mipmapify(filter, mipmaps){
  if (!mipmaps)
    return filter;
  switch (filter) {
    case 9728:
      return 9984;
    case 9729:
      return 9985;
    default:return filter;
  }
}

defineClass(175, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass(175);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(178, 1, $intern_21);
_.toString_0 = function toString_26(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
var Lplayn_core_RenderTarget_2_classLit = createForClass(178);
function Graphics$1(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(179, 178, $intern_21, Graphics$1);
var Lplayn_core_Graphics$1_2_classLit = createForClass(179);
defineClass(362, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass(362);
function $$init_1(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var tex, texHeight, texWidth;
  if (!this$static.state.result())
    throw toJs(new IllegalStateException('Cannot create texture from unready image: ' + this$static));
  texWidth = $toTexWidth(config, this$static.pixelWidth);
  texHeight = $toTexHeight(config, this$static.pixelHeight);
  if (texWidth <= 0 || texHeight <= 0)
    throw toJs(new IllegalArgumentException_0('Invalid texture size: ' + texWidth + 'x' + texHeight + ' from: ' + this$static));
  tex = new Texture(this$static.gfx, $createTexture(this$static.gfx, config), config, texWidth, texHeight, this$static.scale_0, $invScaled(this$static.scale_0, this$static.pixelWidth), $invScaled(this$static.scale_0, this$static.pixelHeight));
  $update_4(tex, this$static);
  return tex;
}

function $region(this$static, rx, ry, rwidth, rheight){
  return new Image$2(this$static, rx, ry, rwidth, rheight);
}

function $texture(this$static){
  (!this$static.texture || this$static.texture.disposed) && (this$static.texture = $createTexture_0(this$static, this$static.texconf));
  return this$static.texture;
}

defineClass(149, 362, {});
_.height_1 = function height_0(){
  return $invScaled(this.scale_0, this.pixelHeight);
}
;
_.width_1 = function width_1(){
  return $invScaled(this.scale_0, this.pixelWidth);
}
;
var Lplayn_core_Image_2_classLit = createForClass(149);
defineClass(366, 362, {});
var Lplayn_core_Image$Region_2_classLit = createForClass(366);
function Image$2(val$image, val$rx, val$ry, val$rwidth, val$rheight){
  this.val$image2 = val$image;
  this.val$rx3 = val$rx;
  this.val$ry4 = val$ry;
  this.val$rwidth5 = val$rwidth;
  this.val$rheight6 = val$rheight;
}

defineClass(307, 366, {}, Image$2);
_.draw_0 = function draw_6(ctx, x_0, y_0, width_0, height){
  $draw_10(this.val$image2, ctx, x_0, y_0, width_0, height, this.val$rx3, this.val$ry4, this.val$rwidth5, this.val$rheight6);
}
;
_.height_1 = function height_1(){
  return this.val$rheight6;
}
;
_.width_1 = function width_2(){
  return this.val$rwidth5;
}
;
_.val$rheight6 = 0;
_.val$rwidth5 = 0;
_.val$rx3 = 0;
_.val$ry4 = 0;
var Lplayn_core_Image$2_2_classLit = createForClass(307);
function $fail(this$static, error){
  this$static.pixelWidth == 0 && (this$static.pixelWidth = 50);
  this$static.pixelHeight == 0 && (this$static.pixelHeight = 50);
  $setBitmap(this$static, $createErrorBitmap(this$static.pixelWidth, this$static.pixelHeight));
  $complete(this$static.state, new Try$Failure(error));
}

function $succeed(this$static, data_0){
  this$static.scale_0 = data_0.scale_0;
  this$static.pixelWidth = data_0.pixelWidth;
  this$static.pixelHeight = data_0.pixelHeight;
  $setBitmap(this$static, data_0.bitmap);
  $complete(this$static.state, new Try$Success(this$static));
}

function ImageImpl(gfx, scale, pixelWidth, pixelHeight, bitmap){
  $$init_1(this);
  this.gfx = gfx;
  this.state = ($clinit_Reactor() , $clinit_Reactor() , new RFuture$1(new Try$Success(this)));
  if (pixelWidth == 0 || pixelHeight == 0)
    throw toJs(new IllegalArgumentException_0('Invalid size for ready image: ' + pixelWidth + 'x' + pixelHeight + ' bitmap: ' + bitmap));
  this.source = '<canvas>';
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
  this.img = bitmap;
}

function ImageImpl_0(gfx, state, preScale, preWidth, preHeight, source){
  $$init_1(this);
  this.gfx = gfx;
  this.state = state;
  this.source = source;
  this.scale_0 = preScale;
  this.pixelWidth = preWidth;
  this.pixelHeight = preHeight;
}

defineClass(150, 149, {});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass(150);
function ImageImpl$Data(scale, bitmap, pixelWidth, pixelHeight){
  this.bitmap = bitmap;
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
}

defineClass(320, 1, {}, ImageImpl$Data);
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl$Data_2_classLit = createForClass(320);
defineClass(191, 1, {});
var Lplayn_core_Input_2_classLit = createForClass(191);
function $clinit_Key(){
  $clinit_Key = emptyMethod;
  A = new Key('A', 0);
  B = new Key('B', 1);
  C = new Key('C', 2);
  D = new Key('D', 3);
  E_0 = new Key('E', 4);
  F_0 = new Key('F', 5);
  G = new Key('G', 6);
  H = new Key('H', 7);
  I = new Key('I', 8);
  J = new Key('J', 9);
  K = new Key('K', 10);
  L = new Key('L', 11);
  M = new Key('M', 12);
  N = new Key('N', 13);
  O = new Key('O', 14);
  P = new Key('P', 15);
  Q = new Key('Q', 16);
  R = new Key('R', 17);
  S = new Key('S', 18);
  T = new Key('T', 19);
  U = new Key('U', 20);
  V = new Key('V', 21);
  W = new Key('W', 22);
  X = new Key('X', 23);
  Y = new Key('Y', 24);
  Z_0 = new Key('Z', 25);
  K0 = new Key('K0', 26);
  K1 = new Key('K1', 27);
  K2 = new Key('K2', 28);
  K3 = new Key('K3', 29);
  K4 = new Key('K4', 30);
  K5 = new Key('K5', 31);
  K6 = new Key('K6', 32);
  K7 = new Key('K7', 33);
  K8 = new Key('K8', 34);
  K9 = new Key('K9', 35);
  NP0 = new Key('NP0', 36);
  NP1 = new Key('NP1', 37);
  NP2 = new Key('NP2', 38);
  NP3 = new Key('NP3', 39);
  NP4 = new Key('NP4', 40);
  NP5 = new Key('NP5', 41);
  NP6 = new Key('NP6', 42);
  NP7 = new Key('NP7', 43);
  NP8 = new Key('NP8', 44);
  NP9 = new Key('NP9', 45);
  NP_ADD = new Key('NP_ADD', 46);
  NP_DECIMAL = new Key('NP_DECIMAL', 47);
  NP_DELETE = new Key('NP_DELETE', 48);
  NP_DIVIDE = new Key('NP_DIVIDE', 49);
  NP_MULTIPLY = new Key('NP_MULTIPLY', 50);
  NP_NUM_LOCK = new Key('NP_NUM_LOCK', 51);
  NP_SUBTRACT = new Key('NP_SUBTRACT', 52);
  NP_DOWN = new Key('NP_DOWN', 53);
  NP_LEFT = new Key('NP_LEFT', 54);
  NP_RIGHT = new Key('NP_RIGHT', 55);
  NP_UP = new Key('NP_UP', 56);
  F1 = new Key('F1', 57);
  F2 = new Key('F2', 58);
  F3 = new Key('F3', 59);
  F4 = new Key('F4', 60);
  F5 = new Key('F5', 61);
  F6 = new Key('F6', 62);
  F7 = new Key('F7', 63);
  F8 = new Key('F8', 64);
  F9 = new Key('F9', 65);
  F10 = new Key('F10', 66);
  F11 = new Key('F11', 67);
  F12 = new Key('F12', 68);
  AMPERSAND = new Key('AMPERSAND', 69);
  ASTERISK = new Key('ASTERISK', 70);
  AT = new Key('AT', 71);
  BACKQUOTE = new Key('BACKQUOTE', 72);
  BACKSLASH = new Key('BACKSLASH', 73);
  BANG = new Key('BANG', 74);
  CIRCUMFLEX = new Key('CIRCUMFLEX', 75);
  COLON = new Key('COLON', 76);
  COMMA = new Key('COMMA', 77);
  DOLLAR = new Key('DOLLAR', 78);
  DOUBLE_QUOTE = new Key('DOUBLE_QUOTE', 79);
  EQUALS = new Key('EQUALS', 80);
  GREATER = new Key('GREATER', 81);
  HASH = new Key('HASH', 82);
  LEFT_BRACE = new Key('LEFT_BRACE', 83);
  LEFT_BRACKET = new Key('LEFT_BRACKET', 84);
  LEFT_PAREN = new Key('LEFT_PAREN', 85);
  LESS = new Key('LESS', 86);
  MINUS = new Key('MINUS', 87);
  MULTIPLY = new Key('MULTIPLY', 88);
  PERCENT = new Key('PERCENT', 89);
  PERIOD = new Key('PERIOD', 90);
  PLUS = new Key('PLUS', 91);
  QUOTE = new Key('QUOTE', 92);
  RIGHT_BRACE = new Key('RIGHT_BRACE', 93);
  RIGHT_BRACKET = new Key('RIGHT_BRACKET', 94);
  RIGHT_PAREN = new Key('RIGHT_PAREN', 95);
  SEMICOLON = new Key('SEMICOLON', 96);
  SLASH = new Key('SLASH', 97);
  SPACE = new Key('SPACE', 98);
  TILDE = new Key('TILDE', 99);
  QUESTION_MARK = new Key('QUESTION_MARK', 100);
  UNDERSCORE = new Key('UNDERSCORE', 101);
  VERTICAL_BAR = new Key('VERTICAL_BAR', 102);
  ALT = new Key('ALT', 103);
  CONTROL = new Key('CONTROL', 104);
  CAPS_LOCK = new Key('CAPS_LOCK', 105);
  SHIFT = new Key('SHIFT', 106);
  META = new Key('META', 107);
  DOWN_0 = new Key('DOWN', 108);
  END = new Key('END', 109);
  HOME = new Key('HOME', 110);
  LEFT_0 = new Key('LEFT', 111);
  PAGE_UP = new Key('PAGE_UP', 112);
  PAGE_DOWN = new Key('PAGE_DOWN', 113);
  RIGHT_0 = new Key('RIGHT', 114);
  UP_0 = new Key('UP', 115);
  BACKSPACE = new Key('BACKSPACE', 116);
  DELETE = new Key('DELETE', 117);
  ENTER = new Key('ENTER', 118);
  INSERT = new Key('INSERT', 119);
  TAB = new Key('TAB', 120);
  ESCAPE = new Key('ESCAPE', 121);
  PAUSE = new Key('PAUSE', 122);
  PRINT_SCREEN = new Key('PRINT_SCREEN', 123);
  SCROLL_LOCK = new Key('SCROLL_LOCK', 124);
  WINDOWS = new Key('WINDOWS', 125);
  MEDIA_CLOSE = new Key('MEDIA_CLOSE', 126);
  MEDIA_EJECT = new Key('MEDIA_EJECT', 127);
  MEDIA_FAST_FORWARD = new Key('MEDIA_FAST_FORWARD', 128);
  MEDIA_NEXT = new Key('MEDIA_NEXT', 129);
  MEDIA_PAUSE = new Key('MEDIA_PAUSE', 130);
  MEDIA_PLAY = new Key('MEDIA_PLAY', 131);
  MEDIA_PLAY_PAUSE = new Key('MEDIA_PLAY_PAUSE', 132);
  MEDIA_PREVIOUS = new Key('MEDIA_PREVIOUS', 133);
  MEDIA_RECORD = new Key('MEDIA_RECORD', 134);
  MEDIA_REWIND = new Key('MEDIA_REWIND', 135);
  MEDIA_STOP = new Key('MEDIA_STOP', 136);
  BLUE = new Key('BLUE', 137);
  GREEN = new Key('GREEN', 138);
  RED = new Key('RED', 139);
  YELLOW = new Key('YELLOW', 140);
  APP_SWITCH = new Key('APP_SWITCH', 141);
  AVR_INPUT = new Key('AVR_INPUT', 142);
  AVR_POWER = new Key('AVR_POWER', 143);
  BACK = new Key('BACK', 144);
  BOOKMARK = new Key('BOOKMARK', 145);
  BREAK = new Key('BREAK', 146);
  BUTTON_1 = new Key('BUTTON_1', 147);
  BUTTON_2 = new Key('BUTTON_2', 148);
  BUTTON_3 = new Key('BUTTON_3', 149);
  BUTTON_4 = new Key('BUTTON_4', 150);
  BUTTON_5 = new Key('BUTTON_5', 151);
  BUTTON_6 = new Key('BUTTON_6', 152);
  BUTTON_7 = new Key('BUTTON_7', 153);
  BUTTON_8 = new Key('BUTTON_8', 154);
  BUTTON_9 = new Key('BUTTON_9', 155);
  BUTTON_10 = new Key('BUTTON_10', 156);
  BUTTON_11 = new Key('BUTTON_11', 157);
  BUTTON_12 = new Key('BUTTON_12', 158);
  BUTTON_13 = new Key('BUTTON_13', 159);
  BUTTON_14 = new Key('BUTTON_14', 160);
  BUTTON_15 = new Key('BUTTON_15', 161);
  BUTTON_16 = new Key('BUTTON_16', 162);
  BUTTON_A = new Key('BUTTON_A', 163);
  BUTTON_B = new Key('BUTTON_B', 164);
  BUTTON_C = new Key('BUTTON_C', 165);
  BUTTON_L1 = new Key('BUTTON_L1', 166);
  BUTTON_L2 = new Key('BUTTON_L2', 167);
  BUTTON_MODE = new Key('BUTTON_MODE', 168);
  BUTTON_R1 = new Key('BUTTON_R1', 169);
  BUTTON_R2 = new Key('BUTTON_R2', 170);
  BUTTON_SELECT = new Key('BUTTON_SELECT', 171);
  BUTTON_START = new Key('BUTTON_START', 172);
  BUTTON_THUMBL = new Key('BUTTON_THUMBL', 173);
  BUTTON_THUMBR = new Key('BUTTON_THUMBR', 174);
  BUTTON_X = new Key('BUTTON_X', 175);
  BUTTON_Y = new Key('BUTTON_Y', 176);
  BUTTON_Z = new Key('BUTTON_Z', 177);
  CALL = new Key('CALL', 178);
  CAMERA = new Key('CAMERA', 179);
  CAPTIONS = new Key('CAPTIONS', 180);
  CHANNEL_DOWN = new Key('CHANNEL_DOWN', 181);
  CHANNEL_UP = new Key('CHANNEL_UP', 182);
  CLEAR = new Key('CLEAR', 183);
  DPAD_CENTER = new Key('DPAD_CENTER', 184);
  DPAD_DOWN = new Key('DPAD_DOWN', 185);
  DPAD_LEFT = new Key('DPAD_LEFT', 186);
  DPAD_RIGHT = new Key('DPAD_RIGHT', 187);
  DPAD_UP = new Key('DPAD_UP', 188);
  DVR = new Key('DVR', 189);
  ENDCALL = new Key('ENDCALL', 190);
  ENVELOPE = new Key('ENVELOPE', 191);
  EXPLORER = new Key('EXPLORER', 192);
  FOCUS = new Key('FOCUS', 193);
  FORWARD = new Key('FORWARD', 194);
  FORWARD_DEL = new Key('FORWARD_DEL', 195);
  FUNCTION = new Key('FUNCTION', 196);
  GUIDE = new Key('GUIDE', 197);
  HEADSETHOOK = new Key('HEADSETHOOK', 198);
  INFO = new Key('INFO', 199);
  MENU = new Key('MENU', 200);
  MUTE = new Key('MUTE', 201);
  NOTIFICATION = new Key('NOTIFICATION', 202);
  NUM = new Key('NUM', 203);
  PICTSYMBOLS = new Key('PICTSYMBOLS', 204);
  POWER = new Key('POWER', 205);
  SEARCH = new Key('SEARCH', 206);
  SETTINGS = new Key('SETTINGS', 207);
  SOFT_LEFT = new Key('SOFT_LEFT', 208);
  SOFT_RIGHT = new Key('SOFT_RIGHT', 209);
  STAR = new Key('STAR', 210);
  STB_INPUT = new Key('STB_INPUT', 211);
  STB_POWER = new Key('STB_POWER', 212);
  SWITCH_CHARSET = new Key('SWITCH_CHARSET', 213);
  SYM = new Key('SYM', 214);
  SYSRQ = new Key('SYSRQ', 215);
  TV = new Key('TV', 216);
  TV_INPUT = new Key('TV_INPUT', 217);
  TV_POWER = new Key('TV_POWER', 218);
  VOLUME_DOWN = new Key('VOLUME_DOWN', 219);
  VOLUME_MUTE = new Key('VOLUME_MUTE', 220);
  VOLUME_UP = new Key('VOLUME_UP', 221);
  WINDOW_0 = new Key('WINDOW', 222);
  ZOOM_IN = new Key('ZOOM_IN', 223);
  ZOOM_OUT = new Key('ZOOM_OUT', 224);
  UNKNOWN = new Key('UNKNOWN', 225);
}

function Key(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_Key();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_1, 4, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z_0, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN_0, END, HOME, LEFT_0, PAGE_UP, PAGE_DOWN, RIGHT_0, UP_0, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE, GREEN, RED, YELLOW, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW_0, ZOOM_IN, ZOOM_OUT, UNKNOWN]);
}

defineClass(4, 6, {3:1, 7:1, 6:1, 4:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN_0, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT_0, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED, RIGHT_0, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN, UP_0, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW_0, WINDOWS, X, Y, YELLOW, Z_0, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum(4, values_14);
function Keyboard$Event(time){
  Event$Input.call(this, time);
}

defineClass(77, 28, {30:1, 28:1, 77:1});
var Lplayn_core_Keyboard$Event_2_classLit = createForClass(77);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(85, 77, {30:1, 28:1, 77:1, 85:1}, Keyboard$KeyEvent);
_.addFields = function addFields_1(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_8($append_7($append_6((builder.string += ', key=' , builder), this.key_0), ', down='), this.down);
}
;
_.name_1 = function name_4(){
  return 'Key';
}
;
_.down = false;
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass(85);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(108, 77, {30:1, 28:1, 77:1, 108:1}, Keyboard$TypedEvent);
_.addFields = function addFields_2(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_1((builder.string += ', typedChar=' , builder), this.typedChar);
}
;
_.name_1 = function name_5(){
  return 'Typed';
}
;
_.typedChar = 0;
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass(108);
function $debug(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, null);
}

function $error(this$static, e){
  $log(this$static, ($clinit_Log$Level() , ERROR), 'init()', e);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $info_0(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $log(this$static, level, msg, e){
  var lmsg;
  level.ordinal >= this$static.minLevel.ordinal && (lmsg = level + ': ' + msg , !!e && (lmsg += ': ' + e.getMessage()) , $clinit_System() , !!e && $printStackTraceImpl(e, out_0, '') , $wnd.console && $wnd.console.info && (e != null?$wnd.console.info(lmsg, e):$wnd.console.info(lmsg)) , undefined , undefined);
}

function $warn(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , WARN), msg, e);
}

defineClass(251, 1, {});
var Lplayn_core_Log_2_classLit = createForClass(251);
function $clinit_Log$Level(){
  $clinit_Log$Level = emptyMethod;
  DEBUG = new Log$Level('DEBUG', 0);
  INFO_0 = new Log$Level('INFO', 1);
  WARN = new Log$Level('WARN', 2);
  ERROR = new Log$Level('ERROR', 3);
}

function Log$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_Log$Level();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 60, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(60, 6, {3:1, 7:1, 6:1, 60:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum(60, values_15);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, time, x_0, y_0);
}

defineClass(54, 43, $intern_22);
var Lplayn_core_Mouse$Event_2_classLit = createForClass(54);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(151, 54, $intern_22, Mouse$ButtonEvent);
_.addFields = function addFields_3(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_8($append_7($append_6((builder.string += ', id=' , builder), this.button_0), ', down='), this.down);
}
;
_.name_1 = function name_6(){
  return 'Button';
}
;
_.down = false;
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass(151);
function $clinit_Mouse$ButtonEvent$Id(){
  $clinit_Mouse$ButtonEvent$Id = emptyMethod;
  LEFT_1 = new Mouse$ButtonEvent$Id('LEFT', 0);
  RIGHT_1 = new Mouse$ButtonEvent$Id('RIGHT', 1);
  MIDDLE = new Mouse$ButtonEvent$Id('MIDDLE', 2);
  X1 = new Mouse$ButtonEvent$Id('X1', 3);
  X2 = new Mouse$ButtonEvent$Id('X2', 4);
}

function Mouse$ButtonEvent$Id(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_Mouse$ButtonEvent$Id();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 55, 0, [LEFT_1, RIGHT_1, MIDDLE, X1, X2]);
}

defineClass(55, 6, {3:1, 7:1, 6:1, 55:1}, Mouse$ButtonEvent$Id);
var LEFT_1, MIDDLE, RIGHT_1, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum(55, values_16);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(321, 54, $intern_22, Mouse$MotionEvent);
_.addFields = function addFields_4(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3((builder.string += ', dx=' , builder), this.dx), ', dy='), this.dy);
}
;
_.name_1 = function name_7(){
  return 'MotionEvent';
}
;
_.dx = 0;
_.dy = 0;
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass(321);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(322, 54, $intern_22, Mouse$WheelEvent);
_.addFields = function addFields_5(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3((builder.string += ', velocity=' , builder), this.velocity);
}
;
_.name_1 = function name_8(){
  return 'Wheel';
}
;
_.velocity = 0;
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass(322);
function $dispatchEvent(this$static, signal, event_0){
  var cause;
  try {
    $notify(signal, ($clinit_AbstractSignal() , EMIT), event_0, null, null);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      cause = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Event dispatch failure', cause);
    }
     else 
      throw toJs($e0);
  }
}

function $emitFrame(this$static){
  var e;
  try {
    $emit(this$static.frame_0, this$static);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Frame tick exception', e);
    }
     else 
      throw toJs($e0);
  }
}

function $reportError(this$static, message, cause){
  $emit(this$static.errors, new Platform$Error);
  $warn(this$static.log_0, message, cause);
}

defineClass(95, 1, {95:1});
var Lplayn_core_Platform_2_classLit = createForClass(95);
function Platform$Error(){
}

defineClass(96, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass(96);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_17(){
  $clinit_Platform$Lifecycle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 71, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(71, 6, {3:1, 7:1, 6:1, 71:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum(71, values_17);
defineClass(275, 358, $intern_21);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass(275);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, 0, 0, right, top_0, sr, 0, left, bottom, 0, sb, right, bottom, sr, sb);
}

defineClass(129, 275, $intern_21);
var Lplayn_core_QuadBatch_2_classLit = createForClass(129);
function $clinit_Scale(){
  $clinit_Scale = emptyMethod;
  ONE = new Scale(1);
}

function $computePath(path, scale){
  var didx, scaleFactor;
  if (scale <= 1)
    return path;
  scaleFactor = round_int(scale * 10);
  scaleFactor % 10 == 0 && (scaleFactor = scaleFactor / 10 | 0);
  didx = path.lastIndexOf('.');
  return didx == -1?path:path.substr(0, didx) + '@' + scaleFactor + 'x' + path.substr(didx);
}

function $getScaledResources(this$static, path){
  var rscale, rsrcs;
  rsrcs = new ArrayList;
  $add_0(rsrcs, new Scale$ScaledResource(this$static, $computePath(path, this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add_0(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(path, rscale)));
  }
  $add_0(rsrcs, new Scale$ScaledResource(ONE, path));
  return rsrcs;
}

function $invScaled(this$static, length_0){
  return length_0 / this$static.factor;
}

function $scaledCeil(this$static, length_0){
  return iceil(this$static.factor * length_0);
}

function Scale(factor){
  $clinit_Scale();
  this.factor = factor;
}

defineClass(82, 1, {}, Scale);
_.toString_0 = function toString_27(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE;
var Lplayn_core_Scale_2_classLit = createForClass(82);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(83, 1, {83:1}, Scale$ScaledResource);
_.toString_0 = function toString_28(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass(83);
function $begin_0(this$static){
  $bind(this$static.target);
  $beginBatch(this$static, this$static.batch);
  return this$static;
}

function $beginBatch(this$static, batch){
  batch.begin(this$static.target.this$01.viewPixelWidth, this$static.target.this$01.viewPixelHeight, true);
  return batch;
}

function $clear_1(this$static, red, green, blue){
  $glClearColor(this$static.batch.gl, red, green, blue);
  this$static.batch.gl.gl.clear(16384);
  return this$static;
}

function $draw_7(this$static, tile, x_0, y_0){
  return $draw_8(this$static, tile, x_0, y_0, tile.displayWidth, tile.displayHeight);
}

function $draw_8(this$static, tile, x_0, y_0, w, h){
  (!this$static.checkIntersection || $intersects(this$static, x_0, y_0, w, h)) && $addToBatch(tile, this$static.batch, this$static.tint, this$static.lastTrans, x_0, y_0, w, h);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $intersects(this$static, x_0, y_0, w, h){
  var ih, iw, ix, iy, th, tw;
  $transform_0(this$static.lastTrans, $set(this$static.intersectionTestPoint, x_0, y_0), this$static.intersectionTestPoint);
  $transform_1(this$static.lastTrans, $set_0(this$static.intersectionTestSize, w, h), this$static.intersectionTestSize);
  ix = this$static.intersectionTestPoint.x_0;
  iy = this$static.intersectionTestPoint.y_0;
  iw = this$static.intersectionTestSize.x_0;
  ih = this$static.intersectionTestSize.y_0;
  if (this$static.scissorDepth > 0) {
    $get_5(this$static.scissors, this$static.scissorDepth - 1);
    return null.$_nullMethod();
  }
  tw = this$static.target.this$01.viewPixelWidth;
  th = this$static.target.this$01.viewPixelHeight;
  return ix + iw > 0 && ix < tw && iy + ih > 0 && iy < th;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  $remove(this$static.transformStack, --tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get_5(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $saveTx(this$static){
  $add_0(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_1(this$static, sx, sy){
  $scale_2(this$static.lastTrans, sx, sy);
  return this$static;
}

function $translate(this$static, y_0){
  $translate_0(this$static.lastTrans, y_0);
  return this$static;
}

function Surface_0(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  this.scissors = new ArrayList;
  this.intersectionTestPoint = new Point;
  this.intersectionTestSize = new Vector;
  this.target = target;
  this.batch = defaultBatch;
  $add_0(this.transformStack, this.lastTrans = new AffineTransform);
  $colorTex(gfx);
  $scale_1(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(276, 1, $intern_21, Surface_0);
_.checkIntersection = false;
_.scissorDepth = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass(276);
defineClass(363, 362, {});
_.toString_0 = function toString_29(){
  return 'Tile[' + this.displayWidth + 'x' + this.displayHeight + '/' + ($clinit_Points() , toString_42(0, TO_STRING_DECIMAL_PLACES) + ('' + toString_42(0, TO_STRING_DECIMAL_PLACES))) + '/' + (toString_42(1, TO_STRING_DECIMAL_PLACES) + ('' + toString_42(1, TO_STRING_DECIMAL_PLACES))) + '] <- ' + this;
}
;
var Lplayn_core_Tile_2_classLit = createForClass(363);
function $addToBatch(this$static, batch, tint, tx, x_0, y_0, width_0, height){
  var sr, sb;
  batch.curTexId != 0 && batch.curTexId != this$static.id_0 && batch.flush();
  batch.curTexId = this$static.id_0;
  sr = this$static.config.repeatX?width_0 / this$static.displayWidth:1;
  sb = this$static.config.repeatY?height / this$static.displayHeight:1;
  $addQuad(batch, tint, tx.m00, tx.m01, tx.m10, tx.m11, tx.tx, tx.ty, x_0, y_0, x_0 + width_0, y_0 + height, sr, sb);
}

function $update_4(this$static, image){
  var pixHeight, pixWidth, potHeight, potWidth, scaled;
  if (this$static.config.repeatX || this$static.config.repeatY || this$static.config.mipmaps) {
    pixWidth = image.pixelWidth;
    pixHeight = image.pixelHeight;
    potWidth = $toTexWidth(this$static.config, pixWidth);
    potHeight = $toTexWidth(this$static.config, pixHeight);
    if (potWidth != pixWidth || potHeight != pixHeight) {
      scaled = $createCanvasImpl(this$static.gfx, ($clinit_Scale() , ONE), potWidth, potHeight);
      $draw_9(image, scaled.ctx, 0, 0, potWidth, potHeight);
      $upload(scaled.image, this$static.gfx, this$static);
    }
     else 
      $upload(image, this$static.gfx, this$static);
  }
   else 
    $upload(image, this$static.gfx, this$static);
  this$static.config.mipmaps && (this$static.gfx.gl.gl.generateMipmap(3553) , undefined);
}

function Texture(gfx, id_0, config, pixWidth, pixHeight, scale, dispWidth, dispHeight){
  this.gfx = gfx;
  this.id_0 = id_0;
  this.config = config;
  this.pixelWidth = pixWidth;
  this.pixelHeight = pixHeight;
  this.scale_0 = scale;
  this.displayWidth = dispWidth;
  this.displayHeight = dispHeight;
}

function nextPOT(value_0){
  var bit, count, highest, ii;
  bit = 32768;
  highest = -1;
  count = 0;
  for (ii = 15; ii >= 0; --ii , bit >>= 1) {
    if ((value_0 & bit) == 0)
      continue;
    ++count;
    highest == -1 && (highest = ii);
  }
  return count > 1?1 << highest + 1:value_0;
}

defineClass(296, 363, $intern_21, Texture);
_.toString_0 = function toString_30(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_Texture_2_classLit = createForClass(296);
function $clinit_Texture$Config(){
  $clinit_Texture$Config = emptyMethod;
  DEFAULT = new Texture$Config(true);
  UNMANAGED = new Texture$Config(false);
}

function $toTexHeight(this$static, sourceHeight){
  return this$static.repeatY || this$static.mipmaps?nextPOT(sourceHeight):sourceHeight;
}

function $toTexWidth(this$static, sourceWidth){
  return this$static.repeatX || this$static.mipmaps?nextPOT(sourceWidth):sourceWidth;
}

function Texture$Config(managed){
  this.managed = managed;
  this.repeatX = false;
  this.repeatY = false;
  this.minFilter = 9729;
  this.magFilter = 9729;
  this.mipmaps = false;
}

defineClass(132, 1, {}, Texture$Config);
_.toString_0 = function toString_31(){
  var repstr;
  repstr = (this.repeatX?'x':'') + (this.repeatY?'y':'');
  return '[managed=' + this.managed + ', repeat=' + repstr + ', filter=' + this.minFilter + '/' + this.magFilter + ', mipmaps=' + this.mipmaps + ']';
}
;
_.magFilter = 0;
_.managed = false;
_.minFilter = 0;
_.mipmaps = false;
_.repeatX = false;
_.repeatY = false;
var DEFAULT, UNMANAGED;
var Lplayn_core_Texture$Config_2_classLit = createForClass(132);
function $fragment(){
  var str;
  str = new StringBuilder_0('#ifdef GL_ES\nprecision lowp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n');
  str.string += 'uniform lowp sampler2D u_Texture;\n';
  str.string += 'varying mediump vec2 v_TexCoord;\nvarying lowp vec4 v_Color;\n';
  str.string += 'void main(void) {\n';
  str.string += '  vec4 textureColor = texture2D(u_Texture, v_TexCoord);\n';
  str.string += '  textureColor.rgb *= v_Color.rgb;\n';
  str.string += '  textureColor *= v_Color.a;\n';
  str.string += '  gl_FragColor = textureColor;\n}';
  return str.string;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(81, 43, {30:1, 28:1, 43:1, 81:1, 50:1}, Touch$Event);
_.addFields = function addFields_6(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3($append_7($append_4($append_7($append_6((builder.string += ', kind=' , builder), this.kind), ', id='), this.id_0), ', pressure='), this.pressure), ', size='), this.size_0);
}
;
_.name_1 = function name_9(){
  return 'Touch';
}
;
_.id_0 = 0;
_.pressure = 0;
_.size_0 = 0;
var Lplayn_core_Touch$Event_2_classLit = createForClass(81);
function $clinit_Touch$Event$Kind(){
  $clinit_Touch$Event$Kind = emptyMethod;
  START = new Touch$Event$Kind('START', 0);
  MOVE = new Touch$Event$Kind('MOVE', 1);
  END_0 = new Touch$Event$Kind('END', 2);
  CANCEL = new Touch$Event$Kind('CANCEL', 3);
}

function Touch$Event$Kind(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_18(){
  $clinit_Touch$Event$Kind();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 67, 0, [START, MOVE, END_0, CANCEL]);
}

defineClass(67, 6, {3:1, 7:1, 6:1, 67:1}, Touch$Event$Kind);
var CANCEL, END_0, MOVE, START;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum(67, values_18);
function $clinit_TriangleBatch(){
  $clinit_TriangleBatch = emptyMethod;
  QUAD_INDICES = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_2, 16, 15, [0, 1, 2, 1, 3, 2]);
}

function $addElems(this$static, vertIdx, indices, indicesLen){
  var data_0, ii, ll, offset;
  data_0 = this$static.elements;
  offset = this$static.elemPos;
  for (ii = 0 , ll = indicesLen; ii < ll; ii++) {
    data_0[offset++] = vertIdx + indices[ii] << 16 >> 16;
  }
  this$static.elemPos = offset;
}

function $beginPrimitive(this$static){
  var availElems, availVerts, elems, vertIdx, verts;
  vertIdx = this$static.vertPos / 12 | 0;
  verts = vertIdx + 4;
  elems = this$static.elemPos + 6;
  availVerts = this$static.vertices.length / 12 | 0;
  availElems = this$static.elements.length;
  if (verts <= availVerts && elems <= availElems)
    return vertIdx;
  $flush_0(this$static);
  verts > availVerts && $expandVerts(this$static, verts);
  elems > availElems && $expandElems(this$static, elems);
  return 0;
}

function $bindAttribsBufs(this$static){
  $glBindBuffer(this$static.gl, $intern_23, this$static.verticesId);
  $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
  $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
  $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
  $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
  $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
  $glBindBuffer(this$static.gl, $intern_24, this$static.elementsId);
  this$static.gl.gl.activeTexture(33984);
  $glUniform1i(this$static.gl, this$static.uTexture);
}

function $expandElems(this$static, elemCount){
  var newElems;
  newElems = this$static.elements.length;
  while (newElems < elemCount)
    newElems += 96;
  this$static.elements = initUnidimensionalArray(S_classLit, $intern_2, 16, newElems, 15, 1);
}

function $expandVerts(this$static, vertCount){
  var newVerts;
  newVerts = this$static.vertices.length / 12 | 0;
  while (newVerts < vertCount)
    newVerts += 64;
  this$static.vertices = initUnidimensionalArray(F_classLit, $intern_2, 16, newVerts * 12, 15, 1);
}

function $flush_0(this$static){
  $flush(this$static);
  if (this$static.vertPos > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    if (this$static.delayedBinding) {
      $bindAttribsBufs(this$static);
      $checkError(this$static.gl);
    }
    $setFloatBuffer(this$static.gl.bufs, this$static.vertices, this$static.vertPos);
    $glBufferData(this$static.gl, $intern_23, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_24, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
    $checkError(this$static.gl);
    $glDrawElements(this$static.gl, this$static.elemPos);
    $checkError(this$static.gl);
    this$static.vertPos = 0;
    this$static.elemPos = 0;
  }
}

function $glBindVertAttrib(this$static, loc, size_0, offset){
  $glEnableVertexAttribArray(this$static.gl, loc);
  $glVertexAttribPointer(this$static.gl, loc, size_0, 5126, 48, offset);
}

function TriangleBatch(gl){
  var ids;
  $clinit_TriangleBatch();
  this.gl = gl;
  this.delayedBinding = $equals('Intel', gl.gl.getParameter(7936));
  this.program = new GLProgram(gl, 'uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nattribute vec4 a_Matrix;\nattribute vec2 a_Translation;\nattribute vec2 a_Color;\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nmat3 transform = mat3(\n  a_Matrix[0],      a_Matrix[1],      0,\n  a_Matrix[2],      a_Matrix[3],      0,\n  a_Translation[0], a_Translation[1], 1);\ngl_Position = vec4(transform * vec3(a_Position, 1.0), 1);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_TexCoord;\nfloat red = mod(a_Color.x, 256.0);\nfloat alpha = (a_Color.x - red) / 256.0;\nfloat blue = mod(a_Color.y, 256.0);\nfloat green = (a_Color.y - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.aMatrix = $getAttribLocation_0(this.program, 'a_Matrix');
  this.aTranslation = $getAttribLocation_0(this.program, 'a_Translation');
  this.aColor = $getAttribLocation_0(this.program, 'a_Color');
  this.aPosition = $getAttribLocation_0(this.program, 'a_Position');
  this.aTexCoord = $getAttribLocation_0(this.program, 'a_TexCoord');
  this.stableAttrs = initUnidimensionalArray(F_classLit, $intern_2, 16, 8, 15, 1);
  this.vertices = initUnidimensionalArray(F_classLit, $intern_2, 16, 768, 15, 1);
  this.elements = initUnidimensionalArray(S_classLit, $intern_2, 16, 96, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_2, 16, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $checkError(gl);
}

function add_9(into, offset, x_0, y_0, sx, sy){
  into[offset++] = x_0;
  into[offset++] = y_0;
  into[offset++] = sx;
  into[offset++] = sy;
  return offset;
}

defineClass(131, 129, $intern_21, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_19;
  stables_0[7] = tint & $intern_19;
  vertIdx = $beginPrimitive(this);
  offset = this.vertPos;
  verts = this.vertices;
  stables = this.stableAttrs;
  offset = add_9(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x1, y1, sx1, sy1);
  offset = add_9(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x2, y2, sx2, sy2);
  offset = add_9(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x3, y3, sx3, sy3);
  offset = add_9(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x4, y4, sx4, sy4);
  this.vertPos = offset;
  $addElems(this, vertIdx, QUAD_INDICES, QUAD_INDICES.length);
}
;
_.begin = function begin_1(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  this.delayedBinding || $bindAttribsBufs(this);
  $checkError(this.gl);
}
;
_.end = function end_1(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aMatrix);
  $glDisableVertexAttribArray(this.gl, this.aTranslation);
  $glDisableVertexAttribArray(this.gl, this.aColor);
  $glDisableVertexAttribArray(this.gl, this.aPosition);
  $glDisableVertexAttribArray(this.gl, this.aTexCoord);
  $checkError(this.gl);
}
;
_.flush = function flush_0(){
  $flush_0(this);
}
;
_.toString_0 = function toString_32(){
  return 'tris/' + (this.elements.length / QUAD_INDICES.length | 0);
}
;
_.aColor = 0;
_.aMatrix = 0;
_.aPosition = 0;
_.aTexCoord = 0;
_.aTranslation = 0;
_.delayedBinding = false;
_.elemPos = 0;
_.elementsId = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.vertPos = 0;
_.verticesId = 0;
var QUAD_INDICES;
var Lplayn_core_TriangleBatch_2_classLit = createForClass(131);
function $flush_1(this$static){
  $flush(this$static);
  if (this$static.quadCounter > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    $glUniform4fv(this$static.gl, this$static.uData, this$static.quadCounter * 3, this$static.data_0);
    $glDrawElements(this$static.gl, this$static.quadCounter * 6);
    $checkError(this$static.gl);
    this$static.quadCounter = 0;
  }
}

function UniformQuadBatch(gl){
  UniformQuadBatch_0.call(this, gl);
}

function UniformQuadBatch_0(gl){
  var base, base0, base1, base2, base3, ee, elems, ids, ii, maxVecs, verts, vv;
  this.gl = gl;
  maxVecs = usableMaxUniformVectors(gl);
  if (maxVecs < 3)
    throw toJs(new RuntimeException_0('GL_MAX_VERTEX_UNIFORM_VECTORS too low: have ' + maxVecs + ', need at least ' + 3));
  this.maxQuads = maxVecs / 3 | 0;
  this.program = new GLProgram(gl, $replace($replace('uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nuniform vec4 u_Data[_VEC4S_PER_QUAD_*_MAX_QUADS_];\nattribute vec3 a_Vertex;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nint index = _VEC4S_PER_QUAD_*int(a_Vertex.z);\nvec4 mat = u_Data[index+0];\nvec4 txc = u_Data[index+1];\nvec4 tcs = u_Data[index+2];\nmat3 transform = mat3(\n  mat.x, mat.y, 0,\n  mat.z, mat.w, 0,\n  txc.x, txc.y, 1);\ngl_Position = vec4(transform * vec3(a_Vertex.xy, 1.0), 1.0);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_Vertex.xy * tcs.xy + txc.zw;\nfloat red = mod(tcs.z, 256.0);\nfloat alpha = (tcs.z - red) / 256.0;\nfloat blue = mod(tcs.w, 256.0);\nfloat green = (tcs.w - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', '_MAX_QUADS_', '' + this.maxQuads), '_VEC4S_PER_QUAD_', '3'), $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.uData = $getUniformLocation_0(this.program, 'u_Data');
  this.aVertex = $getAttribLocation_0(this.program, 'a_Vertex');
  verts = initUnidimensionalArray(S_classLit, $intern_2, 16, this.maxQuads * 4 * 3, 15, 1);
  elems = initUnidimensionalArray(S_classLit, $intern_2, 16, this.maxQuads * 6, 15, 1);
  vv = 0;
  ee = 0;
  for (ii = 0; ii < this.maxQuads; ii++) {
    verts[vv++] = 0;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 0;
    verts[vv++] = 1;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 1;
    verts[vv++] = ii;
    base = ii * 4 << 16 >> 16;
    base0 = base;
    base1 = ++base;
    base2 = ++base;
    base3 = ++base;
    elems[ee++] = base0;
    elems[ee++] = base1;
    elems[ee++] = base2;
    elems[ee++] = base1;
    elems[ee++] = base3;
    elems[ee++] = base2;
  }
  this.data_0 = initUnidimensionalArray(F_classLit, $intern_2, 16, this.maxQuads * 3 * 4, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_2, 16, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $glBindBuffer(gl, $intern_23, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_23, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_24, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_24, elems.length * 2, gl.bufs.shortBuffer, 35044);
  $checkError(gl);
}

function usableMaxUniformVectors(gl){
  var glErr, maxVecs;
  maxVecs = gl.gl.getParameter(36347) - 3;
  glErr = gl.gl.getError();
  if (glErr != 0)
    throw toJs(new RuntimeException_0('Unable to query GL_MAX_VERTEX_UNIFORM_VECTORS,  error ' + glErr));
  return maxVecs;
}

defineClass(130, 129, $intern_21, UniformQuadBatch);
_.addQuad = function addQuad_0(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var dh, dw, pos;
  pos = this.quadCounter * 3 * 4;
  dw = x2 - x1;
  dh = y3 - y1;
  this.data_0[pos++] = m00 * dw;
  this.data_0[pos++] = m01 * dw;
  this.data_0[pos++] = m10 * dh;
  this.data_0[pos++] = m11 * dh;
  this.data_0[pos++] = tx + m00 * x1 + m10 * y1;
  this.data_0[pos++] = ty + m01 * x1 + m11 * y1;
  this.data_0[pos++] = sx1;
  this.data_0[pos++] = sy1;
  this.data_0[pos++] = sx2 - sx1;
  this.data_0[pos++] = sy3 - sy1;
  this.data_0[pos++] = tint >> 16 & $intern_19;
  this.data_0[pos++] = tint & $intern_19;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_2(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_23, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_24, this.elementsId);
  this.gl.gl.activeTexture(33984);
  $glUniform1i(this.gl, this.uTexture);
  $checkError(this.gl);
}
;
_.end = function end_2(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aVertex);
  $checkError(this.gl);
}
;
_.flush = function flush_1(){
  $flush_1(this);
}
;
_.toString_0 = function toString_33(){
  return 'uquad/' + this.maxQuads;
}
;
_.aVertex = 0;
_.elementsId = 0;
_.maxQuads = 0;
_.quadCounter = 0;
_.uData = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.verticesId = 0;
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass(130);
function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    regExp = entry.getKey();
    !!$exec(new RegExp(regExp), collection) && (clientBundle = entry.getValue());
  }
  return clientBundle;
}

function $getImage(this$static, path){
  var assetScale, rsrcs;
  assetScale = ($clinit_Scale() , ONE);
  rsrcs = $getScaledResources(assetScale, path);
  return $getImage_0(this$static, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).path, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).scale_0);
}

function $getImage_0(this$static, path, scale){
  var url_0, img;
  url_0 = this$static.pathPrefix + ('' + path);
  $getBundle(this$static, path);
  return img = $doc.createElement('img') , 'crossOrigin' in img && img.setAttribute('crossOrigin', 'anonymous') , img.src = url_0 , new HtmlImage_0(this$static.plat.graphics, scale, img, url_0);
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = ($clinit_Impl() , $moduleBase);
  this.plat = plat;
}

defineClass(174, 342, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass(174);
function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  types = this.soundController.preferredSoundTypes;
  $debug(plat.log_0, 'Preferred sound type(s): ' + types);
  maybeCreateAudioContext();
}

function maybeCreateAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  try {
    return new webkitAudioContext;
  }
   catch (ignore) {
  }
  return null;
}

defineClass(205, 346, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass(205);
function $clear_2(this$static){
  return $clearRect_0(this$static, this$static.width_0, this$static.height_0);
}

function $clearRect_0(this$static, width_0, height){
  $clearRect(this$static.ctx, 0, 0, width_0, height);
  return this$static;
}

function $fillRect_0(this$static, x_0, y_0, w, h){
  $fillRect(this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $setFillColor(this$static, color_0){
  $setFillStyleWeb(this$static.ctx, cssColorString(color_0));
  return this$static;
}

function HtmlCanvas(image){
  var scale;
  Canvas_1.call(this, image);
  this.ctx = image.canvas.getContext('2d');
  scale = image.scale_0.factor;
  $scale(this.ctx, scale, scale);
}

defineClass(115, 323, $intern_21, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass(115);
function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 113)) {
    throw toJs(new RuntimeException_0('Native buffer required ' + buffer));
  }
  arrayHolder = buffer;
  bufferElementSize = arrayHolder.getElementSize();
  webGLArray = arrayHolder.getTypedArray();
  byteSize == -1 && (byteSize = (buffer.limit - buffer.position_0) * bufferElementSize);
  if (byteSize == buffer.capacity * bufferElementSize && type_0 == arrayHolder.getElementType()) {
    return webGLArray;
  }
  byteOffset = webGLArray.byteOffset + buffer.position_0 * bufferElementSize;
  switch (type_0) {
    case 5126:
      return create(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5121:
      return create_4(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_3(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5124:
      return create_1(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5122:
      return create_0(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5120:
      return create_2(webGLArray.buffer, byteOffset, byteSize);
    default:throw toJs(new IllegalArgumentException_0('Type: ' + type_0));
  }
}

function $glAttachShader(this$static, program, shader){
  var glProgram, glShader;
  glProgram = this$static.programs[program];
  glShader = this$static.shaders[shader];
  $attachShader(this$static.gl, glProgram, glShader);
}

function $glBindBuffer(this$static, target, buffer){
  var webGlBuf;
  webGlBuf = this$static.buffers[buffer];
  target == $intern_23?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_24?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.gl, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.gl, 36160, this$static.frameBuffers[0]);
}

function $glBindTexture(this$static, texture){
  $bindTexture(this$static.gl, 3553, this$static.textures[texture]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_23) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_23, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_24) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_24, this$static.requestedElementArrayBuffer);
      this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
    }
  }
  $bufferData(this$static.gl, target, $getTypedArray(data_0, 5120, byteSize), usage);
}

function $glClearColor(this$static, red, green, blue){
  $clearColor(this$static.gl, red, green, blue, 1);
}

function $glCompileShader(this$static, shader){
  var glShader;
  glShader = this$static.shaders[shader];
  $compileShader(this$static.gl, glShader);
}

function $glCreateShader(this$static, type_0){
  var shader;
  shader = $createShader(this$static.gl, type_0);
  return $add_4(this$static.shaders, shader);
}

function $glDeleteShader(this$static, shader){
  var sh;
  sh = $remove_0(this$static.shaders, shader);
  $deleteShader(this$static.gl, sh);
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_24, this$static.requestedElementArrayBuffer);
    this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
  }
  $drawElements(this$static.gl, 4, count, 5123, 0);
}

function $glEnableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays |= 1 << index_0;
}

function $glGenBuffers(this$static, buffers){
  var buffer, i, id_0;
  for (i = 0; i < 2; i++) {
    buffer = this$static.gl.createBuffer();
    id_0 = $add_4(this$static.buffers, buffer);
    buffers[i] = id_0;
  }
}

function $glGenTextures(this$static, textures){
  var i, id_0, pos, texture;
  pos = textures.position_0;
  for (i = 0; i < 1; i++) {
    texture = this$static.gl.createTexture();
    id_0 = $add_4(this$static.textures, texture);
    textures.intArray[pos + i] = id_0;
  }
}

function $glGetAttribLocation(this$static, program, name_0){
  var prog;
  prog = this$static.programs[program];
  return $getAttribLocation(this$static.gl, prog, name_0);
}

function $glGetShaderInfoLog(this$static, shader){
  return $getShaderInfoLog(this$static.gl, this$static.shaders[shader]);
}

function $glGetShaderiv(this$static, shader, params){
  params[0] = $getShaderParameterb(this$static.gl, this$static.shaders[shader], 35713)?1:0;
}

function $glGetUniformLocation(this$static, program, name_0){
  var id_0, location_0, progUniforms;
  location_0 = $getUniformLocation(this$static.gl, this$static.programs[program], name_0);
  progUniforms = this$static.uniforms[program];
  if (!progUniforms) {
    progUniforms = [undefined];
    this$static.uniforms[program] = progUniforms;
  }
  id_0 = $add_4(progUniforms, location_0);
  return id_0;
}

function $glShaderSource(this$static, shader, string){
  $shaderSource(this$static.gl, this$static.shaders[shader], string);
}

function $glTexImage2D(this$static, image){
  $texImage2D(this$static.gl, 3553, 0, 6408, 6408, 5121, image);
  $checkError(this$static);
}

function $glTexParameteri(this$static, glTextureMinFilter, glFilterMin){
  $texParameteri(this$static.gl, 3553, glTextureMinFilter, glFilterMin);
}

function $glUniform1f(this$static, location_0, x_0){
  $uniform1f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0);
}

function $glUniform1i(this$static, location_0){
  $uniform1i(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], 0);
}

function $glUniform2f(this$static, location_0, x_0, y_0){
  $uniform2f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0, y_0);
}

function $glUniform4fv_0(this$static, location_0, count, v){
  $uniform4fv(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], $getTypedArray(v, 5126, 16 * count));
}

function $glUseProgram(this$static, program){
  this$static.currProgram = program;
  $useProgram(this$static.gl, this$static.programs[program]);
}

function $glVertexAttribPointer(this$static, indx, size_0, type_0, stride, ptr){
  this$static.useNioBuffer &= ~(1 << indx);
  if (this$static.boundArrayBuffer != this$static.requestedArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_23, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.gl, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.gl, 0, 0, w, h);
}

function $init_1(this$static, gl){
  var data_0, ii;
  gl.pixelStorei(37441, 1);
  this$static.gl = gl;
  gl.createBuffer();
  for (ii = 0; ii < 5; ii++) {
    data_0 = new HtmlGL20$VertexAttribArrayState;
    data_0.webGlBuffer = gl.createBuffer();
    this$static.vertexAttribArrayState[ii] = data_0;
  }
}

function $prepareDraw(this$static){
  var data_0, elementSize, enabled, i, mask, previousElementSize, previousNio;
  previousNio = null;
  previousElementSize = 0;
  if (this$static.useNioBuffer == 0 && this$static.enabledArrays == this$static.previouslyEnabledArrays) {
    return;
  }
  for (i = 0; i < 5; i++) {
    mask = 1 << i;
    enabled = this$static.enabledArrays & mask;
    enabled != (this$static.previouslyEnabledArrays & mask) && (enabled != 0?$enableVertexAttribArray(this$static.gl, i):$disableVertexAttribArray(this$static.gl, i));
    if (enabled != 0 && (this$static.useNioBuffer & mask) != 0) {
      data_0 = this$static.vertexAttribArrayState[i];
      if (!!previousNio && previousNio.nioBufferLimit >= data_0.nioBufferLimit) {
        if (this$static.boundArrayBuffer != previousNio.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_23, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_23, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.$_nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_23, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_23, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, 0);
        }
        null.$_nullMethod();
      }
    }
  }
  this$static.previouslyEnabledArrays = this$static.enabledArrays;
}

function HtmlGL20(){
  GL20.call(this, new HtmlGL20$1, ($clinit_HtmlUrlParameters() , checkGLErrors));
  this.programs = [undefined];
  this.shaders = [undefined];
  this.buffers = [undefined];
  this.frameBuffers = [undefined];
  this.textures = [undefined];
  this.uniforms = [undefined];
  this.vertexAttribArrayState = initUnidimensionalArray(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_2, 100, 5, 0, 1);
}

function getElementSize_3(){
  throw toJs(new RuntimeException_0('Unrecognized buffer type: ' + null.$_nullMethod()));
}

defineClass(259, 258, {}, HtmlGL20);
_.currProgram = 0;
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass(259);
function $createByteBuffer(size_0){
  var buffer;
  buffer = allocateDirect(size_0);
  $order(buffer, ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER));
  return buffer;
}

function HtmlGL20$1(){
  this.intBuffer = $asIntBuffer($createByteBuffer(128));
  this.floatBuffer = new FloatBuffer($slice($createByteBuffer(128)));
  this.shortBuffer = $asShortBuffer($createByteBuffer(64));
  $createByteBuffer(256);
}

defineClass(261, 260, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass(261);
function $add_4(this$static, value_0){
  this$static.push(value_0);
  return this$static.length - 1;
}

function $remove_0(this$static, key){
  var value_0 = this$static[key];
  delete this$static[key];
  return value_0;
}

function HtmlGL20$VertexAttribArrayState(){
}

defineClass(100, 1, {100:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass(100);
function $createCanvasImpl(this$static, scale, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this$static, scale, elem));
}

function $setSize(this$static, width_0, height){
  var fbScale;
  this$static.rootElement.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  this$static.rootElement.style['height'] = height + 'px';
  fbScale = new Scale(this$static.frameBufferPixelRatio);
  $setWidth(this$static.canvas, iceil(fbScale.factor * width_0));
  $setHeight(this$static.canvas, iceil(fbScale.factor * height));
  this$static.canvas.style['width'] = width_0 + 'px';
  this$static.canvas.style['height'] = height + 'px';
  $viewportChanged(this$static, this$static.canvas.width, this$static.canvas.height);
}

function $transformMouse(this$static, x_0, y_0){
  return $set(this$static.mousePoint, x_0 / this$static.mouseScale, y_0 / this$static.mouseScale);
}

function $updateTexture(this$static, tex, img){
  $glBindTexture(this$static.gl, tex);
  $glTexImage2D(this$static.gl, img);
}

function HtmlGraphics(plat, config){
  var attrs, doc, glc, root;
  Graphics.call(this, plat, new HtmlGL20, new Scale(config.scaleFactor));
  new HashMap;
  this.mousePoint = new Point;
  new Dimension;
  this.frameBufferPixelRatio = config.frameBufferPixelRatio;
  this.mouseScale = config.scaleFactor / this.frameBufferPixelRatio;
  doc = $doc;
  this.dummyCanvas = doc.createElement('canvas');
  this.dummyCanvas.getContext('2d');
  root = $getElementById(doc, config.rootId);
  if (!root) {
    root = doc.createElement('div');
    root.setAttribute('style', 'width: 640px; height: 480px');
    $appendChild(doc.body, root);
  }
   else {
    root.innerHTML = '';
  }
  this.rootElement = root;
  this.measureElement = doc.createElement('div');
  this.measureElement.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this.measureElement.style['position'] = ($clinit_Style$Position() , 'absolute');
  this.measureElement.style['top'] = ($clinit_Style$Unit() , '-500.0px');
  this.measureElement.style['overflow'] = ($clinit_Style$Overflow() , 'visible');
  this.measureElement.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $appendChild(root, this.measureElement);
  this.canvas = $doc.createElement('canvas');
  $appendChild(root, this.canvas);
  $setSize(this, (root.offsetWidth || 0) | 0, (root.offsetHeight || 0) | 0);
  attrs = {premultipliedAlpha:false};
  attrs.alpha = false;
  $setAntialias(attrs, config.antiAliasing);
  glc = getContext(this.canvas, attrs);
  if (!glc)
    throw toJs(new RuntimeException_0('Unable to create GL context'));
  $init_1(this.gl, glc);
  config.experimentalFullscreen && addResizeHandler(new HtmlGraphics$1(this));
}

function cssColorString(color_0){
  var a, b, g, r;
  a = (color_0 >> 24 & 255) / 255;
  r = color_0 >> 16 & 255;
  g = color_0 >> 8 & 255;
  b = color_0 & 255;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

defineClass(176, 175, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass(176);
function $onResize(this$static, event_0){
  var height, width_0, xOfs, yOfs;
  if ($wnd.screen.width == event_0.width_0 && $wnd.screen.height == event_0.height_0) {
    width_0 = this$static.this$01.viewSize.width_0;
    height = this$static.this$01.viewSize.height_0;
    experimentalScale = $wnd.Math.min($wnd.screen.width / width_0, $wnd.screen.height / height);
    yOfs = round_int(($wnd.screen.height - height * experimentalScale) / 3);
    xOfs = round_int(($wnd.screen.width - width_0 * experimentalScale) / 2);
    $setAttribute(this$static.this$01.rootElement, 'style', 'width:' + experimentalScale * width_0 + 'px; ' + 'height:' + experimentalScale * height + 'px; ' + 'position:absolute; left:' + xOfs + 'px; top:' + yOfs);
    $wnd.alert('Switching to fullscreen mode.');
    $addClassName($doc.body, 'fullscreen');
  }
   else {
    experimentalScale = 1;
    this$static.this$01.rootElement.removeAttribute('style');
    $removeClassName($doc.body, 'fullscreen');
  }
}

function HtmlGraphics$1(this$0){
  this.this$01 = this$0;
}

defineClass(177, 1, {370:1}, HtmlGraphics$1);
var Lplayn_html_HtmlGraphics$1_2_classLit = createForClass(177);
function $createErrorBitmap(pixelWidth, pixelHeight){
  var img;
  img = $doc.createElement('img');
  img.width = pixelWidth;
  img.height = pixelHeight;
  return img;
}

function $draw_9(this$static, ctx, x_0, y_0, width_0, height){
  $drawImage_0(ctx, this$static.img, x_0, y_0, width_0, height);
}

function $draw_10(this$static, ctx, dx, dy, dw, dh, sx, sy, sw, sh){
  sx *= this$static.scale_0.factor;
  sy *= this$static.scale_0.factor;
  sw *= this$static.scale_0.factor;
  sh *= this$static.scale_0.factor;
  $drawImage_1(ctx, this$static.img, sx, sy, sw, sh, dx, dy, dw, dh);
}

function $getRgb(this$static, startX, startY, width_0, height, rgbArray, scanSize){
  var a, b, ctx, dst, g, i, imageData, pixelData, r, x_0, y_0;
  if (!this$static.canvas) {
    this$static.canvas = this$static.img.ownerDocument.createElement('canvas');
    $setHeight(this$static.canvas, this$static.img.height);
    $setWidth(this$static.canvas, this$static.img.width);
    $drawImage(this$static.canvas.getContext('2d'), this$static.img, 0, 0);
  }
  ctx = this$static.canvas.getContext('2d');
  imageData = ctx.getImageData(startX, startY, width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      r = pixelData[i++] || 0;
      g = pixelData[i++] || 0;
      b = pixelData[i++] || 0;
      a = pixelData[i++] || 0;
      rgbArray[dst + x_0] = a << 24 | r << 16 | g << 8 | b;
    }
    dst += scanSize;
  }
}

function $setBitmap(this$static, bitmap){
  this$static.img = bitmap;
}

function $setRgb(this$static, width_0, height, rgbArray, scanSize){
  var argb, ctx, dst, i, imageData, pixelData, x_0, y_0;
  ctx = this$static.canvas.getContext('2d');
  imageData = ctx.createImageData(width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      argb = rgbArray[dst + x_0];
      pixelData[i++] = argb >> 16 & 255;
      pixelData[i++] = argb >> 8 & 255;
      pixelData[i++] = argb & 255;
      pixelData[i++] = argb >> 24 & 255;
    }
    dst += scanSize;
  }
  ctx.putImageData(imageData, 0, 0);
}

function $upload(this$static, gfx, tex){
  $updateTexture(gfx, tex.id_0, this$static.img);
}

function HtmlImage(gfx, scale, elem){
  ImageImpl.call(this, gfx, scale, elem.width, elem.height, elem);
  this.canvas = elem;
}

function HtmlImage_0(gfx, scale, elem, source){
  var pstate;
  ImageImpl_0.call(this, gfx, ($clinit_RPromise() , new RPromise), scale, elem.width, elem.height, source);
  this.img = elem;
  pstate = this.state;
  if (this.img.complete)
    $complete(pstate, new Try$Success(this));
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, scale), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this), false);
  }
}

defineClass(91, 150, {}, HtmlImage, HtmlImage_0);
_.draw_0 = function draw_7(ctx, x_0, y_0, width_0, height){
  $draw_9(this, ctx, x_0, y_0, width_0, height);
}
;
_.toString_0 = function toString_34(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass(91);
function HtmlImage$1(this$0, val$fscale){
  this.this$01 = this$0;
  this.val$fscale2 = val$fscale;
}

defineClass(318, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  $succeed(this.this$01, new ImageImpl$Data(this.val$fscale2, this.this$01.img, this.this$01.img.width, this.this$01.img.height));
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass(318);
function HtmlImage$2(this$0){
  this.this$01 = this$0;
}

defineClass(319, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  $fail(this.this$01, new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass(319);
function $dispatch_0(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
    $dispatchEvent(this$static.plat, this$static.keyboardEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
  }
}

function $dispatch_1(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
    $dispatchEvent(this$static.plat, this$static.mouseEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
  }
}

function $dispatch_2(this$static, events, nevent){
  var event_0, event$index, event$max;
  try {
    $dispatchEvent(this$static.plat, this$static.touchEvents, events);
  }
   finally {
    for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
      event_0 = events[event$index];
      (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
    }
  }
}

function $handleRequestsInUserEventContext(this$static){
  this$static.isRequestingMouseLock && !$isMouseLocked() && $requestMouseLockImpl(this$static.rootElement);
}

function $isMouseLocked(){
  return !!($doc.pointerLockElement || $doc.webkitPointerLockElement || $doc.mozPointerLockElement);
}

function $requestMouseLockImpl(element){
  element.requestPointerLock = element.requestPointerLock || element.webkitRequestPointerLock || element.mozRequestPointerLock;
  element.requestPointerLock && element.requestPointerLock();
}

function $toTouchEvents(this$static, kind, nevent){
  var id_0, nativeTouches, nativeTouchesLen, t, time, touch, touches, x_0, xy, y_0;
  nativeTouches = nevent.changedTouches;
  nativeTouchesLen = nativeTouches.length;
  touches = initUnidimensionalArray(Lplayn_core_Touch$Event_2_classLit, $intern_2, 81, nativeTouchesLen, 0, 1);
  time = now_2();
  for (t = 0; t < nativeTouchesLen; t++) {
    touch = nativeTouches[t];
    x_0 = $getRelativeX(touch, this$static.rootElement);
    y_0 = $getRelativeY(touch, this$static.rootElement);
    xy = $transformMouse(this$static.plat.graphics, x_0, y_0);
    id_0 = nevent.changedTouches[t].identifier || 0;
    touches[t] = new Touch$Event(time, xy.x_0, xy.y_0, kind, id_0);
  }
  return touches;
}

function HtmlInput(hplat, root){
  this.mouseEvents = ($clinit_AbstractSignal() , new Signal);
  this.touchEvents = new Signal;
  this.keyboardEvents = new Signal;
  this.lastMousePt = new Point;
  this.plat = hplat;
  this.rootElement = root;
  capturePageEvent('keydown', new HtmlInput$1(this));
  capturePageEvent('keypress', new HtmlInput$2(this));
  capturePageEvent('keyup', new HtmlInput$3(this));
  new HtmlInput$EventCloseHandler($doc, 'contextmenu', new HtmlInput$4, false);
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousedown', new HtmlInput$5(this, this), true);
  capturePageEvent('mouseup', new HtmlInput$6(this, this));
  capturePageEvent('mousemove', new HtmlInput$7(this));
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousemove', new HtmlInput$8(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, getMouseWheelEvent(), new HtmlInput$9(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, 'touchstart', new HtmlInput$10(this), true);
  capturePageEvent('touchmove', new HtmlInput$11(this));
  capturePageEvent('touchend', new HtmlInput$12(this));
}

function capturePageEvent(name_0, handler){
  return new HtmlInput$EventCloseHandler($doc, name_0, handler, true);
}

function getMouseButton(evt){
  switch ($eventGetButton(evt)) {
    case 1:
      return $clinit_Mouse$ButtonEvent$Id() , LEFT_1;
    case 4:
      return $clinit_Mouse$ButtonEvent$Id() , MIDDLE;
    case 2:
      return $clinit_Mouse$ButtonEvent$Id() , RIGHT_1;
    default:return null;
  }
}

function getMouseWheelEvent(){
  if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    return 'DOMMouseScroll';
  }
   else {
    return 'mousewheel';
  }
}

function getMouseWheelVelocity(evt){
  var delta = 0;
  var agentInfo = ($clinit_HtmlPlatform() , agentInfo_0);
  if (agentInfo.isFirefox) {
    agentInfo.isMacOS?(delta = 1 * evt.detail):(delta = 1 * evt.detail / 3);
  }
   else if (agentInfo.isOpera) {
    agentInfo.isLinux?(delta = -1 * evt.wheelDelta / 80):(delta = -1 * evt.wheelDelta / 40);
  }
   else if (agentInfo.isChrome || agentInfo.isSafari || agentInfo.isIE) {
    delta = -1 * evt.wheelDelta / 120;
    Math.abs(delta) < 1 && (agentInfo.isWindows?(delta = -1 * evt.wheelDelta):agentInfo.isMacOS && (delta = -1 * evt.wheelDelta / 3));
  }
  return delta;
}

function getRelativeX(e, target){
  return (((e.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument)) / experimentalScale;
}

function getRelativeY(e, target){
  return (((e.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument)) / experimentalScale;
}

function keyForCode(keyCode){
  switch (keyCode) {
    case 18:
      return $clinit_Key() , ALT;
    case 8:
      return $clinit_Key() , BACKSPACE;
    case 17:
      return $clinit_Key() , CONTROL;
    case 46:
      return $clinit_Key() , DELETE;
    case 40:
      return $clinit_Key() , DOWN_0;
    case 35:
      return $clinit_Key() , END;
    case 13:
      return $clinit_Key() , ENTER;
    case 27:
      return $clinit_Key() , ESCAPE;
    case 36:
      return $clinit_Key() , HOME;
    case 37:
      return $clinit_Key() , LEFT_0;
    case 34:
      return $clinit_Key() , PAGE_DOWN;
    case 33:
      return $clinit_Key() , PAGE_UP;
    case 39:
      return $clinit_Key() , RIGHT_0;
    case 16:
      return $clinit_Key() , SHIFT;
    case 9:
      return $clinit_Key() , TAB;
    case 38:
      return $clinit_Key() , UP_0;
    case 19:
      return $clinit_Key() , PAUSE;
    case 20:
      return $clinit_Key() , CAPS_LOCK;
    case 32:
      return $clinit_Key() , SPACE;
    case 45:
      return $clinit_Key() , INSERT;
    case 48:
      return $clinit_Key() , K0;
    case 49:
      return $clinit_Key() , K1;
    case 50:
      return $clinit_Key() , K2;
    case 51:
      return $clinit_Key() , K3;
    case 52:
      return $clinit_Key() , K4;
    case 53:
      return $clinit_Key() , K5;
    case 54:
      return $clinit_Key() , K6;
    case 55:
      return $clinit_Key() , K7;
    case 56:
      return $clinit_Key() , K8;
    case 57:
      return $clinit_Key() , K9;
    case 65:
      return $clinit_Key() , A;
    case 66:
      return $clinit_Key() , B;
    case 67:
      return $clinit_Key() , C;
    case 68:
      return $clinit_Key() , D;
    case 69:
      return $clinit_Key() , E_0;
    case 70:
      return $clinit_Key() , F_0;
    case 71:
      return $clinit_Key() , G;
    case 72:
      return $clinit_Key() , H;
    case 73:
      return $clinit_Key() , I;
    case 74:
      return $clinit_Key() , J;
    case 75:
      return $clinit_Key() , K;
    case 76:
      return $clinit_Key() , L;
    case 77:
      return $clinit_Key() , M;
    case 78:
      return $clinit_Key() , N;
    case 79:
      return $clinit_Key() , O;
    case 80:
      return $clinit_Key() , P;
    case 81:
      return $clinit_Key() , Q;
    case 82:
      return $clinit_Key() , R;
    case 83:
      return $clinit_Key() , S;
    case 84:
      return $clinit_Key() , T;
    case 85:
      return $clinit_Key() , U;
    case 86:
      return $clinit_Key() , V;
    case 87:
      return $clinit_Key() , W;
    case 88:
      return $clinit_Key() , X;
    case 89:
      return $clinit_Key() , Y;
    case 90:
      return $clinit_Key() , Z_0;
    case 92:
    case 91:
      return $clinit_Key() , WINDOWS;
    case 96:
      return $clinit_Key() , NP0;
    case 97:
      return $clinit_Key() , NP1;
    case 98:
      return $clinit_Key() , NP2;
    case 99:
      return $clinit_Key() , NP3;
    case 100:
      return $clinit_Key() , NP4;
    case 101:
      return $clinit_Key() , NP5;
    case 102:
      return $clinit_Key() , NP6;
    case 103:
      return $clinit_Key() , NP7;
    case 104:
      return $clinit_Key() , NP8;
    case 105:
      return $clinit_Key() , NP9;
    case 106:
      return $clinit_Key() , NP_MULTIPLY;
    case 107:
      return $clinit_Key() , NP_ADD;
    case 109:
      return $clinit_Key() , NP_SUBTRACT;
    case 110:
      return $clinit_Key() , NP_DECIMAL;
    case 111:
      return $clinit_Key() , NP_DIVIDE;
    case 112:
      return $clinit_Key() , F1;
    case 113:
      return $clinit_Key() , F2;
    case 114:
      return $clinit_Key() , F3;
    case 115:
      return $clinit_Key() , F4;
    case 116:
      return $clinit_Key() , F5;
    case 117:
      return $clinit_Key() , F6;
    case 118:
      return $clinit_Key() , F7;
    case 119:
      return $clinit_Key() , F8;
    case 120:
      return $clinit_Key() , F9;
    case 121:
      return $clinit_Key() , F10;
    case 122:
      return $clinit_Key() , F11;
    case 123:
      return $clinit_Key() , F12;
    case 144:
      return $clinit_Key() , NP_NUM_LOCK;
    case 145:
      return $clinit_Key() , SCROLL_LOCK;
    case 186:
      return $clinit_Key() , SEMICOLON;
    case 187:
      return $clinit_Key() , EQUALS;
    case 188:
      return $clinit_Key() , COMMA;
    case 189:
      return $clinit_Key() , MINUS;
    case 190:
      return $clinit_Key() , PERIOD;
    case 191:
      return $clinit_Key() , SLASH;
    case 192:
      return $clinit_Key() , BACKQUOTE;
    case 219:
      return $clinit_Key() , LEFT_BRACKET;
    case 220:
      return $clinit_Key() , BACKSLASH;
    case 221:
      return $clinit_Key() , RIGHT_BRACKET;
    case 222:
      return $clinit_Key() , QUOTE;
    default:return $clinit_Key() , UNKNOWN;
  }
}

defineClass(192, 191, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass(192);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(193, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass(193);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(202, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass(202);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(203, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass(203);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(204, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_0), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass(204);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(97, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass(97);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  this.this$01_0 = this$0;
}

defineClass(118, 97, {});
_.handleEvent_0 = function handleEvent_6(ev, x_0, y_0){
  var dx, dy;
  if (this.lastX == -1) {
    this.lastX = x_0;
    this.lastY = y_0;
  }
  if (this.this$01.inDragSequence == this.wantDragSequence()) {
    if ($isMouseLocked()) {
      dx = ev.webkitMovementX;
      dy = ev.webkitMovementY;
    }
     else {
      dx = x_0 - this.lastX;
      dy = y_0 - this.lastY;
    }
    $dispatch_1(this.this$01, new Mouse$MotionEvent(now_2(), x_0, y_0, dx, dy), ev);
  }
  this.lastX = x_0;
  this.lastY = y_0;
  $set(this.this$01.lastMousePt, x_0, y_0);
}
;
_.lastX = -1;
_.lastY = -1;
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass(118);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(194, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_2(), (nevent.charCode || 0) & $intern_19), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass(194);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(195, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass(195);
function HtmlInput$4(){
}

defineClass(196, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  evt.preventDefault();
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass(196);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(197, 97, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass(197);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(198, 97, {}, HtmlInput$6);
_.handleEvent_0 = function handleEvent_11(ev, x_0, y_0){
  var btn;
  if (this.this$02.inDragSequence) {
    this.this$02.inDragSequence = false;
    btn = getMouseButton(ev);
    !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, false), ev);
  }
  $handleRequestsInUserEventContext(this.this$02);
}
;
var Lplayn_html_HtmlInput$6_2_classLit = createForClass(198);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(199, 118, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass(199);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(200, 118, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass(200);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(201, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_2(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass(201);
function $addEventListener(closeHandler, target, name_0, handler, capture){
  var listener = function(e){
    handler.handleEvent(e);
  }
  ;
  target.addEventListener(name_0, listener, capture);
  closeHandler.setListener(listener);
}

function HtmlInput$EventCloseHandler(target, name_0, eventHandler, capture){
  $addEventListener(this, target, name_0, eventHandler, capture);
}

defineClass(44, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass(44);
defineClass(252, 251, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass(252);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(253, 252, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass(253);
function $clinit_HtmlPlatform(){
  var userAgent;
  $clinit_HtmlPlatform = emptyMethod;
  agentInfo_0 = (userAgent = navigator.userAgent.toLowerCase() , {isFirefox:userAgent.indexOf('firefox') != -1, isChrome:userAgent.indexOf('chrome') != -1, isSafari:userAgent.indexOf('safari') != -1, isOpera:userAgent.indexOf('opera') != -1, isIE:userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1, isMacOS:userAgent.indexOf('mac') != -1, isLinux:userAgent.indexOf('linux') != -1, isWindows:userAgent.indexOf('win') != -1});
}

function $listenForVisibilityChange(plat){
  $doc.addEventListener('visibilitychange', function(){
    plat.visibilityChanged();
  }
  , false);
}

function $requestAnimationFrame(callback){
  var fn = function(){
    callback.run();
  }
  ;
  $wnd.requestAnimationFrame?$wnd.requestAnimationFrame(fn):$wnd.mozRequestAnimationFrame?$wnd.mozRequestAnimationFrame(fn):$wnd.webkitRequestAnimationFrame?$wnd.webkitRequestAnimationFrame(fn):$wnd.setTimeout(fn, 20);
}

function $scheduleBackgroundFrame(millis, callback){
  $wnd.setTimeout(function(){
    callback.run();
  }
  , millis);
}

function $tick_0(this$static){
  return round_int(now_2() - this$static.start_0);
}

function HtmlPlatform(config){
  $clinit_HtmlPlatform();
  var e;
  this.lifecycle = ($clinit_AbstractSignal() , new Signal);
  this.frame_0 = new Signal;
  this.errors = new Signal;
  this.start_0 = initNow();
  this.log_0 = new HtmlLogSimple;
  new Exec$Default(this);
  setUncaughtExceptionHandler(new HtmlPlatform$1(this));
  $info(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    new HtmlAudio(this);
    this.assets = new HtmlAssets(this);
    new HtmlStorage;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $error(this.log_0, e);
      alert_0('failed to init(): ' + e.getMessage());
      throw toJs(new RuntimeException_2(e));
    }
     else 
      throw toJs($e0);
  }
}

function devicePixelRatio_0(){
  $clinit_HtmlPlatform();
  return $wnd.devicePixelRatio || 1;
}

function initNow(){
  function now_0(){
    return +new Date;
  }

  !Date.now && (Date.now = now_0);
  return Date.now();
}

function now_2(){
  $clinit_HtmlPlatform();
  return Date.now();
}

defineClass(158, 95, {95:1}, HtmlPlatform);
_.visibilityChanged = function visibilityChanged(){
  var isHidden;
  isHidden = $doc.hidden;
  $dispatchEvent(this, this.lifecycle, isHidden?($clinit_Platform$Lifecycle() , PAUSE_0):($clinit_Platform$Lifecycle() , RESUME));
  isHidden && this.backgroundFrameMillis > 0 && $scheduleBackgroundFrame(this.backgroundFrameMillis, new HtmlPlatform$3(this));
}
;
_.backgroundFrameMillis = 0;
_.start_0 = 0;
var agentInfo_0;
var Lplayn_html_HtmlPlatform_2_classLit = createForClass(158);
function HtmlPlatform$1(this$0){
  this.this$01 = this$0;
}

defineClass(172, 1, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass(172);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(162, 1, $intern_25, HtmlPlatform$2);
_.run = function run_1(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass(162);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(173, 1, $intern_25, HtmlPlatform$3);
_.run = function run_2(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass(173);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(157, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.experimentalFullscreen = false;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass(157);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(206, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass(206);
function $clinit_HtmlUrlParameters(){
  $clinit_HtmlUrlParameters = emptyMethod;
  checkGLErrors = $equals('check', getParameter('glerrors'));
  $equals('quad', getParameter('glshader'));
}

var checkGLErrors = false;
function requestedMode(){
  var renderer;
  renderer = getParameter('renderer');
  if ($equals('canvas', renderer)) {
    return 1;
  }
   else if ($equals('gl', renderer)) {
    return 0;
  }
  return 2;
}

function $isSet(this$static, flag){
  return (this$static.flags & flag.bitmask) != 0;
}

function $name(this$static){
  if (this$static.name_0 == null) {
    this$static.name_0 = $getName(this$static.___clazz);
    this$static.name_0 = checkNotNull($substring(this$static.name_0, this$static.name_0.lastIndexOf('.') + 1));
  }
  return this$static.name_0;
}

function $setFlag_0(this$static, flag, active){
  active?(this$static.flags |= flag.bitmask):(this$static.flags &= ~flag.bitmask);
}

function $setState(this$static, state){
  $updateAndNotify(this$static.state, state);
}

function $transform(this$static){
  var cosa, m00, m01, m10, m11, sina, tx, ty;
  if ($isSet(this$static, ($clinit_Layer$Flag() , XFDIRTY))) {
    sina = $wnd.Math.sin(this$static.rotation);
    cosa = $wnd.Math.cos(this$static.rotation);
    m00 = cosa * this$static.scaleX;
    m01 = sina * this$static.scaleY;
    m10 = -sina * this$static.scaleX;
    m11 = cosa * this$static.scaleY;
    tx = this$static.transform.tx;
    ty = this$static.transform.ty;
    $setTransform(this$static.transform, m00, m01, m10, m11, tx, ty);
    $setFlag_0(this$static, XFDIRTY, false);
  }
  return this$static.transform;
}

defineClass(63, 1, $intern_26);
_.toString_0 = function toString_35(){
  var buf;
  buf = new StringBuilder_0($name(this));
  $append_7($append_4((buf.string += ' @ ' , buf), hashCode__I__devirtual$(this)), ' [');
  this.toString_1(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_1 = function toString_36(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
}
;
_.flags = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
var Lplayn_scene_Layer_2_classLit = createForClass(63);
defineClass(277, 63, $intern_26);
var Lplayn_scene_ClippedLayer_2_classLit = createForClass(277);
defineClass(278, 277, $intern_26);
_.iterator = function iterator_14(){
  return new ArrayList$1(this.children);
}
;
_.toString_1 = function toString_37(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
var Lplayn_scene_GroupLayer_2_classLit = createForClass(278);
function $clinit_Layer$Flag(){
  $clinit_Layer$Flag = emptyMethod;
  VISIBLE_1 = new Layer$Flag('VISIBLE', 0, 1);
  INTERACTIVE = new Layer$Flag('INTERACTIVE', 1, 2);
  XFDIRTY = new Layer$Flag('XFDIRTY', 2, 4);
  ODIRTY = new Layer$Flag('ODIRTY', 3, 8);
}

function Layer$Flag(enum$name, enum$ordinal, bitmask){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitmask = bitmask;
}

function values_19(){
  $clinit_Layer$Flag();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 64, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(64, 6, {3:1, 7:1, 6:1, 64:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum(64, values_19);
function $clinit_Layer$Origin(){
  $clinit_Layer$Origin = emptyMethod;
  FIXED_0 = new Layer$Origin$1;
  CENTER = new Layer$Origin$2;
  UL = new Layer$Origin$3;
  UR = new Layer$Origin$4;
  LL = new Layer$Origin$5;
  LR = new Layer$Origin$6;
  TC = new Layer$Origin$7;
  BC = new Layer$Origin$8;
  LC = new Layer$Origin$9;
  RC = new Layer$Origin$10;
}

function Layer$Origin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_Layer$Origin();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 15, 0, [FIXED_0, CENTER, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(15, 6, $intern_27);
var BC, CENTER, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum(15, values_20);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(280, 15, $intern_27, Layer$Origin$1);
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum(280, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(289, 15, $intern_27, Layer$Origin$10);
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum(289, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(281, 15, $intern_27, Layer$Origin$2);
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum(281, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(282, 15, $intern_27, Layer$Origin$3);
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum(282, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(283, 15, $intern_27, Layer$Origin$4);
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum(283, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(284, 15, $intern_27, Layer$Origin$5);
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum(284, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(285, 15, $intern_27, Layer$Origin$6);
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum(285, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(286, 15, $intern_27, Layer$Origin$7);
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum(286, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(287, 15, $intern_27, Layer$Origin$8);
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum(287, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(288, 15, $intern_27, Layer$Origin$9);
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum(288, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_21(){
  $clinit_Layer$State();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 72, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(72, 6, {3:1, 7:1, 6:1, 72:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum(72, values_21);
function RootLayer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  $clinit_Layer$Origin();
  $setFlag_0(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
  this.children = new ArrayList;
  new AffineTransform;
  $setState(this, ADDED);
}

defineClass(279, 278, $intern_26, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass(279);
function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(188, 343, {}, SceneGame$1);
_.onEmit = function onEmit_3(clock){
  var lastArg;
  $paintScene((lastArg = this , clock , lastArg).this$01);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass(188);
defineClass(124, 1, {124:1});
_.equals_0 = function equals_21(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 62)) {
    d = obj;
    return d.width_0 == this.width_0 && d.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_23(){
  return round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString_0 = function toString_38(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass(124);
defineClass(128, 1, {128:1, 50:1});
_.equals_0 = function equals_22(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 65)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_24(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_39(){
  return pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass(128);
defineClass(361, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass(361);
defineClass(143, 1, {143:1, 50:1});
_.equals_0 = function equals_23(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 38)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_25(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_40(){
  return vectorToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass(143);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $scale_2(this$static, scaleX, scaleY){
  this$static.m00 *= scaleX;
  this$static.m01 *= scaleX;
  this$static.m10 *= scaleY;
  this$static.m11 *= scaleY;
  return this$static;
}

function $setTransform(this$static, m00, m01, m10, m11, tx, ty){
  this$static.m00 = m00;
  this$static.m01 = m01;
  this$static.m10 = m10;
  this$static.m11 = m11;
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $transform_0(this$static, p, into){
  var x_0, y_0;
  x_0 = p.x_0;
  y_0 = p.y_0;
  return $set(into, this$static.m00 * x_0 + this$static.m10 * y_0 + this$static.tx, this$static.m01 * x_0 + this$static.m11 * y_0 + this$static.ty);
}

function $transform_1(this$static, v, into){
  var x_0, y_0;
  x_0 = v.x_0;
  y_0 = v.y_0;
  return $set_0(into, this$static.m00 * x_0 + this$static.m10 * y_0, this$static.m01 * x_0 + this$static.m11 * y_0);
}

function $translate_0(this$static, ty){
  this$static.tx += this$static.m10 * ty;
  this$static.ty += this$static.m11 * ty;
  return this$static;
}

function AffineTransform(){
  AffineTransform_0.call(this, 1, 0, 0, 1, 0, 0);
}

function AffineTransform_0(m00, m01, m10, m11, tx, ty){
  this.m00 = m00;
  this.m01 = m01;
  this.m10 = m10;
  this.m11 = m11;
  this.tx = tx;
  this.ty = ty;
}

defineClass(66, 361, {66:1}, AffineTransform, AffineTransform_0);
_.toString_0 = function toString_41(){
  return this.m00 != 1 || this.m01 != 0 || this.m10 != 0 || this.m11 != 1?'affine [' + toString_42(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_42(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_42(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_42(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']':this.tx != 0 || this.ty != 0?'trans ' + new Vector_0(this.tx, this.ty):'ident';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass(66);
function Dimension(){
  Dimension_0.call(this);
}

function Dimension_0(){
  this.width_0 = 0;
  this.height_0 = 0;
}

defineClass(62, 124, {3:1, 124:1, 62:1}, Dimension, Dimension_0);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass(62);
function $clinit_Dimensions(){
  $clinit_Dimensions = emptyMethod;
  new Dimension_0;
}

function iceil(v){
  var iv;
  iv = round_int(v);
  return v <= 0 || iv == v || iv == $intern_0?iv:iv + 1;
}

function ifloor(v){
  var iv;
  iv = round_int(v);
  return v >= 0 || iv == v || iv == $intern_16?iv:iv - 1;
}

function toString_42(value_0, decimalPlaces){
  var buf, ii, ii0, ivalue;
  if (isNaN(value_0))
    return 'NaN';
  buf = new StringBuilder;
  if (value_0 >= 0)
    buf.string += '+';
  else {
    buf.string += '-';
    value_0 = -value_0;
  }
  ivalue = round_int(value_0);
  buf.string += ivalue;
  if (decimalPlaces > 0) {
    buf.string += '.';
    for (ii0 = 0; ii0 < decimalPlaces; ii0++) {
      value_0 = (value_0 - ivalue) * 10;
      ivalue = round_int(value_0);
      buf.string += ivalue;
    }
    for (ii = 0; ii < decimalPlaces - 1; ii++) {
      $charAt(buf, buf.string.length - 1) == 48 && $setLength(buf, buf.string.length - 1);
    }
  }
  return buf.string;
}

var TO_STRING_DECIMAL_PLACES = 3;
function $set(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point(){
}

function Point_0(){
  this.x_0 = 0;
  this.y_0 = 0;
}

defineClass(65, 128, {3:1, 128:1, 65:1, 50:1}, Point, Point_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass(65);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_42(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_42(y_0, TO_STRING_DECIMAL_PLACES));
}

function $set_0(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Vector(){
}

function Vector_0(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(38, 143, {143:1, 38:1, 50:1}, Vector, Vector_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass(38);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_28, $intern_28);
  new Vector_0($intern_29, $intern_29);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_42(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_42(y_0, TO_STRING_DECIMAL_PLACES));
}

function $clinit_Reactor(){
  $clinit_Reactor = emptyMethod;
  DISPATCHING = new Cons(null, null);
}

function $addConnection(this$static, listener){
  if (!listener)
    throw toJs(new NullPointerException_0('Null listener'));
  return $addCons(this$static, new Cons(this$static, listener));
}

function $addCons(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$1(this$static, cons))):(this$static._listeners = insert(this$static._listeners, cons));
  return cons;
}

function $clearConnections(this$static){
  if (this$static._listeners == DISPATCHING)
    throw toJs(new IllegalStateException('Cannot clear connections while dispatching.'));
  this$static._listeners = null;
}

function $disconnect(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons))):(this$static._listeners = remove(this$static._listeners, cons));
}

function $notify(this$static, notifier, a1, a2, a3){
  var cons, ex, exn, lners, run, sentinel, run_0;
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$4(this$static, notifier, a1, a2, a3));
    return;
  }
  lners = this$static._listeners;
  sentinel = DISPATCHING;
  this$static._listeners = sentinel;
  exn = null;
  try {
    for (cons = lners; cons; cons = cons.next_0) {
      try {
        notifier.notify(cons._ref._lner, a1, a2, a3);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 9)) {
          ex = $e0;
          exn = ex;
        }
         else 
          throw toJs($e0);
      }
      cons._oneShot && $close(cons);
    }
  }
   finally {
    this$static._listeners = lners;
    while (run = (run_0 = this$static._pendingRuns , !!run_0 && (this$static._pendingRuns = run_0.next_0) , run_0)) {
      try {
        run.run();
      }
       catch ($e1) {
        $e1 = toJava($e1);
        if (instanceOf($e1, 9)) {
          ex = $e1;
          exn = ex;
        }
         else 
          throw toJs($e1);
      }
    }
  }
  if (exn)
    throw toJs(exn);
}

function append(head, action){
  if (!head)
    return action;
  head.next_0 = append(head.next_0, action);
  return head;
}

defineClass(350, 1, {});
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass(350);
function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

defineClass(351, 350, {});
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass(351);
defineClass(352, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass(352);
function AbstractSignal$1(){
}

defineClass(250, 352, {}, AbstractSignal$1);
_.notify = function notify(slot, event_0, _1, _2){
  slot.onEmit(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass(250);
function $clinit_AbstractValue(){
  $clinit_AbstractValue = emptyMethod;
  $clinit_Reactor();
  CHANGE = new AbstractValue$1;
}

function $updateAndNotify(this$static, value_0){
  var ovalue, oldValue;
  ovalue = (oldValue = this$static._value , this$static._value = value_0 , oldValue);
  $clinit_Reactor();
  !(value_0 == ovalue || !!value_0 && value_0 == ovalue) && $notify(this$static, CHANGE, value_0, ovalue, null);
  return ovalue;
}

defineClass(144, 350, {144:1});
_.equals_0 = function equals_24(other){
  var ovalue, value_0;
  if (other == null)
    return false;
  if (getClass__Ljava_lang_Class___devirtual$(other) != Lreact_Value_2_classLit)
    return false;
  value_0 = this._value;
  ovalue = other._value;
  return $clinit_Reactor() , value_0 == ovalue || !!value_0 && value_0 == ovalue;
}
;
_.hashCode_0 = function hashCode_26(){
  var value_0;
  value_0 = this._value;
  return !value_0?0:getHashCode(value_0);
}
;
_.toString_0 = function toString_43(){
  var cname;
  cname = ($ensureNamesAreInitialized(Lreact_Value_2_classLit) , Lreact_Value_2_classLit.typeName);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this._value + ')';
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass(144);
function AbstractValue$1(){
}

defineClass(306, 352, {}, AbstractValue$1);
_.notify = function notify_0(lner, value_0, oldValue, ignored){
  lner.onEmit(value_0);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass(306);
defineClass(359, 1, $intern_21);
var Lreact_Connection_2_classLit = createForClass(359);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw toJs(new IllegalStateException('Cannot change priority of disconnected connection.'));
  $disconnect(this$static._owner, this$static);
  this$static.next_0 = null;
  this$static._priority = priority;
  $addCons(this$static._owner, this$static);
  return this$static;
}

function $close(this$static){
  var p;
  if (this$static._owner) {
    $defang(this$static._ref, (p = ($clinit_Slots() , NOOP) , p));
    $disconnect(this$static._owner, this$static);
    this$static._owner = null;
  }
}

function Cons(owner, listener){
  this._owner = owner;
  this._ref = new Cons$StrongRef(listener);
}

function insert(head, cons){
  if (!head) {
    return cons;
  }
   else if (cons._priority > head._priority) {
    cons.next_0 = head;
    return cons;
  }
   else {
    head.next_0 = insert(head.next_0, cons);
    return head;
  }
}

function remove(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next_0;
  head.next_0 = remove(head.next_0, cons);
  return head;
}

defineClass(127, 359, $intern_21, Cons);
_.toString_0 = function toString_44(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next_0 + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass(127);
defineClass(360, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass(360);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(293, 360, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass(293);
defineClass(354, 350, {});
var Lreact_RFuture_2_classLit = createForClass(354);
function RFuture$1(val$result){
  $clinit_Reactor();
  this.val$result1 = val$result;
}

defineClass(257, 354, {}, RFuture$1);
_.result = function result_0(){
  return this.val$result1;
}
;
var Lreact_RFuture$1_2_classLit = createForClass(257);
function $clinit_RPromise(){
  $clinit_RPromise = emptyMethod;
  $clinit_Reactor();
  COMPLETE = new RPromise$1;
}

function $complete(this$static, result){
  if (this$static._result)
    throw toJs(new IllegalStateException('Already completed'));
  this$static._result = result;
  try {
    $notify(this$static, COMPLETE, result, null, null);
  }
   finally {
    $clearConnections(this$static);
  }
}

function RPromise(){
  $clinit_RPromise();
}

defineClass(121, 354, {121:1}, RPromise);
_.result = function result_1(){
  return this._result;
}
;
var COMPLETE;
var Lreact_RPromise_2_classLit = createForClass(121);
function RPromise$1(){
}

defineClass(256, 352, {}, RPromise$1);
_.notify = function notify_1(lner, value_0, i0, i1){
  lner.onEmit(value_0);
}
;
var Lreact_RPromise$1_2_classLit = createForClass(256);
defineClass(345, 1, $intern_25);
var Lreact_Reactor$Runs_2_classLit = createForClass(345);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(181, 345, $intern_25, Reactor$1);
_.run = function run_3(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$1_2_classLit = createForClass(181);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(182, 345, $intern_25, Reactor$2);
_.run = function run_4(){
  this.this$01._listeners = remove(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$2_2_classLit = createForClass(182);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(183, 345, $intern_25, Reactor$4);
_.run = function run_5(){
  $notify(this.this$01, this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass(183);
function $emit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

function Signal(){
  $clinit_AbstractSignal();
}

defineClass(52, 351, {}, Signal);
var Lreact_Signal_2_classLit = createForClass(52);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP = new Slots$1;
}

var NOOP;
defineClass(344, 343, $intern_25);
_.onEmit = function onEmit_4(event_0){
  this.onEmit_0();
}
;
_.run = function run_6(){
  this.onEmit_0();
}
;
var Lreact_UnitSlot_2_classLit = createForClass(344);
function Slots$1(){
}

defineClass(324, 344, $intern_25, Slots$1);
_.onEmit_0 = function onEmit_5(){
}
;
var Lreact_Slots$1_2_classLit = createForClass(324);
defineClass(109, 1, {109:1});
var Lreact_Try_2_classLit = createForClass(109);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(325, 109, {109:1}, Try$Failure);
_.toString_0 = function toString_45(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass(325);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(110, 109, {109:1}, Try$Success);
_.toString_0 = function toString_46(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass(110);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(145, 144, {144:1, 145:1}, Value);
var Lreact_Value_2_classLit = createForClass(145);
var C_classLit = createForPrimitive('C');
var Z_classLit = createForPrimitive('Z');
var F_classLit = createForPrimitive('F');
var I_classLit = createForPrimitive('I');
var S_classLit = createForPrimitive('S');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=frodosquest-0.js


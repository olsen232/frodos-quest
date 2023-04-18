var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.frodosquest;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = 'D8AC2F4A70FAF404ED079F98C7A56120';
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
var $intern_0 = 2147483647, $intern_1 = {3:1, 8:1}, $intern_2 = {3:1}, $intern_3 = {3:1, 97:1, 139:1}, $intern_4 = {3:1, 14:1, 9:1, 10:1}, $intern_5 = {22:1, 44:1, 3:1, 7:1, 6:1}, $intern_6 = {22:1, 45:1, 3:1, 7:1, 6:1}, $intern_7 = {20:1, 3:1, 7:1, 6:1}, $intern_8 = {22:1, 76:1, 3:1, 7:1, 6:1}, $intern_9 = {22:1, 37:1, 3:1, 7:1, 6:1}, $intern_10 = {84:1, 3:1, 14:1, 9:1, 10:1}, $intern_11 = 4194303, $intern_12 = 1048575, $intern_13 = 17592186044416, $intern_14 = 4194304, $intern_15 = 524288, $intern_16 = {73:1, 51:1, 65:1, 64:1, 74:1, 47:1, 43:1}, $intern_17 = {111:1}, $intern_18 = {52:1}, $intern_19 = {62:1}, $intern_20 = 65536, $intern_21 = 16777216, $intern_22 = 33554432, $intern_23 = 67108864, $intern_24 = {73:1, 51:1, 65:1, 64:1, 74:1, 129:1, 47:1, 43:1}, $intern_25 = {25:1}, $intern_26 = -16777216, $intern_27 = {87:1, 34:1, 3:1, 7:1, 6:1}, $intern_28 = -2147483648, $intern_29 = {15:1}, $intern_30 = 16777215, $intern_31 = {61:1, 3:1}, $intern_32 = 65535, $intern_33 = 3.141592653589793, $intern_34 = {12:1, 3:1, 7:1, 6:1}, $intern_35 = {21:1, 24:1}, $intern_36 = {50:1}, $intern_37 = {41:1, 36:1, 55:1, 70:1, 63:1}, $intern_38 = 34962, $intern_39 = 34963, $intern_40 = {21:1, 79:1, 24:1}, $intern_41 = {3:1, 7:1, 6:1, 17:1}, $intern_42 = -3.4028234663852886E38, $intern_43 = 3.4028234663852886E38;
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

function toString_9(object){
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
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
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

defineClass(143, 1, {}, Class);
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
_.toString_0 = function toString_15(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
_.sequentialId = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass(1);
var Ljava_lang_Class_2_classLit = createForClass(143);
function $clinit_AbstractSound(){
  $clinit_AbstractSound = emptyMethod;
  INITIAL_LOAD_STATE = ($clinit_Sound$LoadState() , LOAD_STATE_UNINITIALIZED);
}

function $addEventHandler(this$static, handler){
  $add(this$static.soundHandlerCollection, handler);
  this$static.loadState != INITIAL_LOAD_STATE && $onSoundLoadStateChange(handler, new SoundLoadStateChangeEvent(this$static));
}

function $setLoadState(this$static, loadState){
  if (loadState != this$static.loadState) {
    this$static.loadState = loadState;
    loadState != INITIAL_LOAD_STATE && $fireOnSoundLoadStateChange(this$static.soundHandlerCollection, this$static);
  }
}

function AbstractSound(url_0){
  $clinit_AbstractSound();
  this.soundHandlerCollection = new SoundHandlerCollection;
  this.loadState = INITIAL_LOAD_STATE;
  this.mimeType = 'audio/mpeg';
  this.url_0 = url_0;
  this.streaming = false;
  this.crossOrigin = false;
}

defineClass(110, 1, {});
_.toString_0 = function toString_1(){
  return this.getSoundType() + '("' + this.mimeType + '", "' + this.url_0 + '", ' + (this.streaming?'streaming':'not streaming') + ', ' + (this.crossOrigin?'cross origin':'same origin') + ')';
}
;
_.crossOrigin = false;
_.streaming = false;
var INITIAL_LOAD_STATE;
var Lcom_allen_1sauer_gwt_voices_client_AbstractSound_2_classLit = createForClass(110);
function $clinit_FlashSound(){
  $clinit_FlashSound = emptyMethod;
  $clinit_AbstractSound();
  soundList = new ArrayList;
}

function $playbackCompleted(this$static){
  $fireOnPlaybackComplete(this$static.soundHandlerCollection, this$static);
}

function $registerSound(this$static){
  if (!this$static.soundRegistered) {
    $registerSound_0(this$static.voicesMovie, this$static);
    this$static.soundRegistered = true;
  }
}

function $soundLoaded(this$static){
  $setLoadState(this$static, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
  this$static.volume_0 != 100 && $setVolume(this$static.voicesMovie, this$static.soundNumber, this$static.volume_0);
  this$static.looping && $setLooping(this$static.voicesMovie, this$static.soundNumber, this$static.looping);
}

function FlashSound(url_0, voicesMovie){
  $clinit_FlashSound();
  AbstractSound.call(this, url_0);
  this.voicesMovie = voicesMovie;
  this.soundNumber = soundList.array.length;
  $add(soundList, this);
  $registerSound(this);
}

defineClass(178, 110, {178:1}, FlashSound);
_.getSoundType = function getSoundType(){
  return $clinit_SoundType() , FLASH;
}
;
_.play_0 = function play(){
  $registerSound(this);
  if (this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY)) {
    return $playSound(this.voicesMovie, this.soundNumber);
  }
  return false;
}
;
_.setLooping_0 = function setLooping(looping){
  this.looping = looping;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setLooping(this.voicesMovie, this.soundNumber, looping);
}
;
_.setVolume_0 = function setVolume(volume){
  this.volume_0 = volume;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setVolume(this.voicesMovie, this.soundNumber, volume);
}
;
_.stop_0 = function stop_0(){
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $stopSound(this.voicesMovie, this.soundNumber);
}
;
_.looping = false;
_.soundNumber = 0;
_.soundRegistered = false;
_.volume_0 = 100;
var soundList;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound_2_classLit = createForClass(178);
function FlashSound$1(val$index){
  this.val$index1 = val$index;
}

defineClass(384, 1, {}, FlashSound$1);
_.execute = function execute(){
  $playbackCompleted($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$1_2_classLit = createForClass(384);
function FlashSound$2(val$index){
  this.val$index1 = val$index;
}

defineClass(385, 1, {}, FlashSound$2);
_.execute = function execute_0(){
  $soundLoaded($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$2_2_classLit = createForClass(385);
function $createAudioElement(this$static){
  var elem;
  !!this$static.endedRegistration && $removeHandler(this$static.endedRegistration.real);
  !!this$static.audio && $removeFromParent(this$static.audio);
  this$static.audio = createIfSupported();
  elem = $getElement(this$static.audio);
  this$static.endedRegistration = $addBitlessDomHandler(this$static.audio, this$static.endedHandler, ($clinit_EndedEvent() , $clinit_EndedEvent() , TYPE));
  $add_1(($clinit_RootPanel() , get_3()), this$static.audio);
  this$static.crossOrigin && (elem.setAttribute('crossOrigin', 'anonymous') , undefined);
  $setSrc(elem, this$static.url_0);
}

function Html5Sound(url_0){
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.endedHandler = new Html5Sound$1(this);
  $createAudioElement(this);
  mimeTypeSupport = getMimeTypeSupport();
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      throw toJs(new IllegalArgumentException_0('unexpected MIME type support ' + mimeTypeSupport));
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

function getMimeTypeSupport(){
  var canPlayType;
  $clinit_AbstractSound();
  var support;
  if (!isSupported()) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  support = (canPlayType = $getElement(createIfSupported()).canPlayType('audio/mpeg') , canPlayType == 'no'?'':canPlayType);
  if ($equals('probably', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  if ($equals('maybe', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN;
}

defineClass(387, 110, {}, Html5Sound);
_.getSoundType = function getSoundType_0(){
  return $clinit_SoundType() , HTML5;
}
;
_.play_0 = function play_0(){
  var elem;
  elem = $getElement(this.audio);
  elem.pause();
  try {
    elem.currentTime = 0;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 14))
      throw toJs($e0);
  }
  elem.currentTime != 0 && $createAudioElement(this);
  elem.play();
  return true;
}
;
_.setLooping_0 = function setLooping_0(looping){
  $setBooleanAttr($getMediaElement(this.audio), looping);
}
;
_.setVolume_0 = function setVolume_0(volume){
  $setVolume_1($getMediaElement(this.audio), volume / 100);
}
;
_.stop_0 = function stop_1(){
  $getMediaElement(this.audio).pause();
}
;
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound_2_classLit = createForClass(387);
function Html5Sound$1(this$0){
  this.this$01 = this$0;
}

defineClass(388, 1, {465:1, 410:1}, Html5Sound$1);
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound$1_2_classLit = createForClass(388);
function NativeSound(url_0, soundControllerElement){
  var elem, m;
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.soundControllerElement = soundControllerElement;
  elem = $createElement(url_0);
  $setVolume_0(elem, 0);
  $play(soundControllerElement, elem);
  this.element = $createElement(url_0);
  mimeTypeSupport = (m = navigator.mimeTypes['audio/mpeg'] , m != null && m.enabledPlugin != null?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED));
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    case 1:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

defineClass(386, 110, {}, NativeSound);
_.getSoundType = function getSoundType_1(){
  return $clinit_SoundType() , NATIVE;
}
;
_.play_0 = function play_1(){
  return $play(this.soundControllerElement, this.element);
}
;
_.setLooping_0 = function setLooping_1(looping){
  this.element.setAttribute('loop', 'infinite');
}
;
_.setVolume_0 = function setVolume_1(volume){
  $setVolume_0(this.element, volume);
}
;
_.stop_0 = function stop_2(){
  $stop(this.element);
}
;
var Lcom_allen_1sauer_gwt_voices_client_NativeSound_2_classLit = createForClass(386);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

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
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass(6);
function $clinit_Sound$LoadState(){
  $clinit_Sound$LoadState = emptyMethod;
  LOAD_STATE_NOT_SUPPORTED = new Sound$LoadState('LOAD_STATE_NOT_SUPPORTED', 0);
  LOAD_STATE_SUPPORT_NOT_KNOWN = new Sound$LoadState('LOAD_STATE_SUPPORT_NOT_KNOWN', 1);
  LOAD_STATE_SUPPORTED_AND_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_AND_READY', 2);
  LOAD_STATE_SUPPORTED_MAYBE_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_MAYBE_READY', 3);
  LOAD_STATE_SUPPORTED_NOT_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_NOT_READY', 4);
  LOAD_STATE_UNINITIALIZED = new Sound$LoadState('LOAD_STATE_UNINITIALIZED', 5);
}

function Sound$LoadState(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Sound$LoadState();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit, 1), $intern_1, 59, 0, [LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_UNINITIALIZED]);
}

defineClass(59, 6, {59:1, 3:1, 7:1, 6:1}, Sound$LoadState);
var LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_UNINITIALIZED;
var Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit = createForEnum(59, values_0);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $createSound(this$static, url_0){
  var sound;
  sound = $createSoundImpl(this$static, url_0);
  sound.setVolume_0(this$static.defaultVolume);
  return sound;
}

function $createSoundImpl(this$static, url_0){
  var c, c$array, c$index, c$max, sound;
  sound = null;
  for (c$array = this$static.preferredSoundTypes , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    switch (c.ordinal) {
      case 1:
        sound = $createSoundImplHtml5(url_0);
        break;
      case 0:
        sound = $createSoundImplFlash(this$static, url_0);
        break;
      case 2:
        sound = $createSoundImplWebAudio(url_0);
        break;
      case 3:
        sound = $createSoundImplWebAudio(url_0);
    }
    if (sound) {
      return sound;
    }
  }
  sound = $createSoundImplWebAudio(url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplFlash(this$static, url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplHtml5(url_0);
  if (sound) {
    return sound;
  }
  sound = new NativeSound(url_0, this$static.soundContainer);
  return sound;
}

function $createSoundImplFlash(this$static, url_0){
  var mimeTypeSupport, sound, vm;
  if ($equals(url_0.substr(0, 5), 'data:')) {
    return null;
  }
  $clinit_FlashMovie();
  if (impl_0.impl.getMajorVersion() >= 9) {
    vm = $getVoicesMovie(this$static);
    mimeTypeSupport = $getMimeTypeSupport(vm);
    if (mimeTypeSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) || mimeTypeSupport == MIME_TYPE_SUPPORT_NOT_READY) {
      sound = new FlashSound(url_0, vm);
      return sound;
    }
  }
  return null;
}

function $createSoundImplHtml5(url_0){
  if (getMimeTypeSupport() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new Html5Sound(url_0);
  }
  return null;
}

function $createSoundImplWebAudio(url_0){
  if (getMimeTypeSupport_0() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new WebAudioSound(url_0);
  }
  return null;
}

function $getVoicesMovie(this$static){
  if (!this$static.voicesWrapper) {
    this$static.voicesWrapper = new VoicesMovie('gwtVoices' + uniqueId++, this$static.gwtVoicesSwfBaseUrl);
    $clinit_DOM();
    $appendChild(this$static.soundContainer, resolve(this$static.voicesWrapper.element));
  }
  return this$static.voicesWrapper;
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
  this.gwtVoicesSwfBaseUrl = ($clinit_Impl() , s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':'');
  gwtVoices = getParameter('gwt-voices');
  $equals(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 42, 0, [FLASH])):$equals(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 42, 0, [HTML5])):$equals(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 42, 0, [WEB_AUDIO])):$equals(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 42, 0, [NATIVE])):$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 42, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(($clinit_RootPanel() , $doc.body), this.soundContainer);
  style = this.soundContainer.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  style['left'] = ($clinit_Style$Unit() , '-500.0px');
  style['top'] = '-500.0px';
  style['width'] = '0.0px';
  style['height'] = '0.0px';
}

defineClass(301, 1, {}, SoundController);
_.defaultVolume = 100;
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass(301);
function $clinit_SoundController$MimeTypeSupport(){
  $clinit_SoundController$MimeTypeSupport = emptyMethod;
  MIME_TYPE_NOT_SUPPORTED = new SoundController$MimeTypeSupport('MIME_TYPE_NOT_SUPPORTED', 0);
  MIME_TYPE_SUPPORT_NOT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_NOT_READY', 1);
  MIME_TYPE_SUPPORT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_READY', 2);
  MIME_TYPE_SUPPORT_UNKNOWN = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_UNKNOWN', 3);
}

function SoundController$MimeTypeSupport(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SoundController$MimeTypeSupport();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit, 1), $intern_1, 77, 0, [MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN]);
}

defineClass(77, 6, {77:1, 3:1, 7:1, 6:1}, SoundController$MimeTypeSupport);
var MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN;
var Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit = createForEnum(77, values_1);
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

function values_2(){
  $clinit_SoundType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 42, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(42, 6, {42:1, 3:1, 7:1, 6:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum(42, values_2);
function $clinit_WebAudioSound(){
  $clinit_WebAudioSound = emptyMethod;
  $clinit_AbstractSound();
  audioContext = createAudioContext();
}

function $createVoice(this$static, url_0){
  var context = audioContext;
  var request = new $wnd.XMLHttpRequest;
  request.open('GET', url_0, true);
  request.responseType = 'arraybuffer';
  var self_0 = this$static;
  request.onload = function(){
    function onSuccess(decodedBuffer){
      self_0.buffer_0 = decodedBuffer;
      self_0.soundLoaded_0();
    }

    function onFailure(){
      self_0.soundLoadFailed();
    }

    context.decodeAudioData(request.response, onSuccess, onFailure);
  }
  ;
  request.send();
}

function WebAudioSound(url_0){
  $clinit_WebAudioSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  try {
    $createVoice(this, url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
    }
     else 
      throw toJs($e0);
  }
  mimeTypeSupport = getMimeTypeSupport_0();
  switch (mimeTypeSupport.ordinal) {
    case 1:
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

function createAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  return null;
}

function getMimeTypeSupport_0(){
  $clinit_WebAudioSound();
  if (!audioContext) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  return getMimeTypeSupport();
}

defineClass(392, 110, {}, WebAudioSound);
_.getSoundType = function getSoundType_2(){
  return $clinit_SoundType() , WEB_AUDIO;
}
;
_.plackbackCompleted = function plackbackCompleted(){
  $fireOnPlaybackComplete(this.soundHandlerCollection, this);
}
;
_.play_0 = function play_2(){
  var buffer = this.buffer_0;
  if (buffer == null) {
    return false;
  }
  this.stop_0();
  var context = audioContext;
  var voice = context.createBufferSource();
  this.voice = voice;
  this.looping && (voice.loop = true);
  var node = voice;
  var volume = this.volume_0;
  if (volume != 100) {
    var gainNode = context.createGain();
    gainNode.gain.value = volume / 100;
    node.connect(gainNode);
    node = gainNode;
  }
  node.connect(context.destination);
  voice.buffer = buffer;
  voice.start(context.currentTime);
  if (!voice.loop) {
    var self_0 = this;
    setTimeout(function(){
      self_0.plackbackCompleted();
    }
    , voice.buffer.duration * 1000);
  }
  return true;
}
;
_.setLooping_0 = function setLooping_2(looping){
  this.looping = looping;
}
;
_.setVolume_0 = function setVolume_2(volume){
  this.volume_0 = volume;
}
;
_.soundLoadFailed = function soundLoadFailed(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
}
;
_.soundLoaded_0 = function soundLoaded(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
}
;
_.stop_0 = function stop_3(){
  var context = audioContext;
  var voice = this.voice;
  if (voice == null) {
    return;
  }
  voice.stop(context.currentTime);
  this.voice = null;
}
;
_.looping = false;
_.volume_0 = 0;
var audioContext;
var Lcom_allen_1sauer_gwt_voices_client_WebAudioSound_2_classLit = createForClass(392);
function EventObject(source){
  this.source = source;
}

defineClass(180, 1, {});
var Ljava_util_EventObject_2_classLit = createForClass(180);
function PlaybackCompleteEvent(source){
  EventObject.call(this, source);
}

defineClass(407, 180, {}, PlaybackCompleteEvent);
_.toString_0 = function toString_3(){
  var name_0, sound;
  sound = this.source;
  return name_0 = ($ensureNamesAreInitialized(Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit) , Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit.typeName) , $substring(name_0, $lastIndexOf(name_0, fromCodePoint(46)) + 1) + ': ' + sound;
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit = createForClass(407);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_2();
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
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(439, 1, {});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove = function remove_0(o){
  return $advanceToFind(this, o, true);
}
;
_.toString_0 = function toString_4(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_6(joiner, e === this?'(this Collection)':e == null?'null':toString_9(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass(439);
defineClass(447, 439, {97:1});
_.add_1 = function add_1(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_1(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 97)) {
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
_.hashCode_0 = function hashCode_2(){
  return hashCode_17(this);
}
;
_.iterator = function iterator_0(){
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
_.remove_0 = function remove_1(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass(447);
function $add(this$static, o){
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

function $get(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf(this$static, o, index_0){
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

defineClass(30, 447, $intern_3, ArrayList);
_.add_1 = function add_3(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_4(o){
  return $add(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_1(){
  return new ArrayList$1(this);
}
;
_.remove_0 = function remove_2(index_0){
  return $remove(this, index_0);
}
;
_.remove = function remove_3(o){
  var i;
  i = $indexOf(this, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this.array.length);
  removeFrom(this.array, i, 1);
  return true;
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass(30);
function $fireOnPlaybackComplete(this$static, sender){
  var handler, handler$iterator;
  new PlaybackCompleteEvent(sender);
  for (handler$iterator = new ArrayList$1(this$static); handler$iterator.i < handler$iterator.this$01.array.length;) {
    handler = $next_3(handler$iterator);
    handler.this$01.playing = false;
  }
}

function $fireOnSoundLoadStateChange(this$static, sender){
  var event_0, handler, handler$iterator;
  event_0 = new SoundLoadStateChangeEvent(sender);
  for (handler$iterator = new ArrayList$1(this$static); handler$iterator.i < handler$iterator.this$01.array.length;) {
    handler = $next_3(handler$iterator);
    $onSoundLoadStateChange(handler, event_0);
  }
}

function SoundHandlerCollection(){
  ArrayList.call(this);
}

defineClass(397, 30, $intern_3, SoundHandlerCollection);
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundHandlerCollection_2_classLit = createForClass(397);
function SoundLoadStateChangeEvent(source){
  EventObject.call(this, source);
  this.loadState = source.loadState;
}

defineClass(181, 180, {}, SoundLoadStateChangeEvent);
_.toString_0 = function toString_5(){
  var name_0, sound;
  sound = this.source;
  return name_0 = ($ensureNamesAreInitialized(Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit) , Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit.typeName) , $substring(name_0, $lastIndexOf(name_0, fromCodePoint(46)) + 1) + ': ' + sound + '; ' + $name(this.loadState);
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit = createForClass(181);
function $clinit_FlashMovie(){
  $clinit_FlashMovie = emptyMethod;
  impl_0 = new FlashMovieImplPlayN;
}

defineClass(389, 1, {});
var impl_0;
var Lcom_allen_1sauer_gwt_voices_client_ui_FlashMovie_2_classLit = createForClass(389);
function $clinit_VoicesMovie(){
  $clinit_VoicesMovie = emptyMethod;
  $clinit_FlashMovie();
  FLASH_SUPPORTED_MIME_TYPES = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['audio/mpeg', 'audio/mpeg; codecs=MP3']);
}

function $callCreateSound(this$static, id_0, soundURL, checkPolicyFile){
  var elem = this$static.element;
  elem.createSound(id_0, soundURL, checkPolicyFile);
}

function $getMimeTypeSupport(this$static){
  switch (this$static.flashSupport.ordinal) {
    case 2:
    case 1:
      return contains_1(FLASH_SUPPORTED_MIME_TYPES)?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED);
    case 3:
    case 0:
      return this$static.flashSupport;
    default:throw toJs(new RuntimeException_0('Unhandled flash support value ' + this$static.flashSupport));
  }
}

function $installFlashCallbackHooks(this$static, id_1){
  $doc.VoicesMovie === undefined && ($doc.VoicesMovie = {});
  var self_0 = this$static;
  $doc.VoicesMovie[id_1] = {};
  $doc.VoicesMovie[id_1].ready = function(){
    self_0.movieReady();
  }
  ;
  $doc.VoicesMovie[id_1].soundLoaded = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$2(id_0));
    return true;
  }
  ;
  $doc.VoicesMovie[id_1].playbackCompleted = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$1(id_0));
  }
  ;
  $doc.VoicesMovie[id_1].log = function(text_0){
    self_0.debug('FLASH[' + id_1 + ']: ' + text_0);
  }
  ;
}

function $movieUnsupported(this$static){
  var flashSound, flashSound$iterator;
  for (flashSound$iterator = new ArrayList$1(this$static.unitializedSoundList); flashSound$iterator.i < flashSound$iterator.this$01.array.length;) {
    flashSound = $next_3(flashSound$iterator);
    $setLoadState(flashSound, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
  }
}

function $playSound(this$static, id_0){
  var elem;
  if (this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return elem = this$static.element , elem.playSound(id_0);
  }
  return false;
}

function $registerSound_0(this$static, flashSound){
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)?$callCreateSound(this$static, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin):$add(this$static.unitializedSoundList, flashSound);
}

function $setLooping(this$static, id_0, looping){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setLooping(id_0, looping?$intern_0:0) , undefined);
}

function $setVolume(this$static, id_0, volume){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setVolume(id_0, volume / 100) , undefined);
}

function $stopSound(this$static, id_0){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.stopSound(id_0) , undefined);
}

function VoicesMovie(id_0, gwtVoicesSwfBaseUrl){
  $clinit_VoicesMovie();
  this.element = $createElementMaybeSetURL(impl_0, id_0, gwtVoicesSwfBaseUrl + 'gwt-voices.swf');
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN);
  this.unitializedSoundList = new ArrayList;
  $installFlashCallbackHooks(this, id_0);
  if (impl_0.impl.getMajorVersion() >= 9) {
    this.flashSupport = MIME_TYPE_SUPPORT_NOT_READY;
  }
   else {
    this.flashSupport = MIME_TYPE_NOT_SUPPORTED;
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new VoicesMovie$1(this));
  }
}

defineClass(390, 389, {}, VoicesMovie);
_.debug = function debug(text_0){
  $clinit_System();
}
;
_.movieReady = function movieReady(){
  var flashSound, iterator;
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY);
  for (iterator = new ArrayList$1(this.unitializedSoundList); iterator.i < iterator.this$01.array.length;) {
    flashSound = $next_3(iterator);
    $callCreateSound(this, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin);
    $remove_10(iterator);
  }
}
;
var FLASH_SUPPORTED_MIME_TYPES;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie_2_classLit = createForClass(390);
function VoicesMovie$1(this$0){
  this.this$01 = this$0;
}

defineClass(391, 1, {}, VoicesMovie$1);
_.execute = function execute_1(){
  $movieUnsupported(this.this$01);
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie$1_2_classLit = createForClass(391);
defineClass(454, 1, {});
_.getMajorVersion = function getMajorVersion(){
  var versionString;
  versionString = this.getVersionString();
  return versionString == null?0:__parseAndValidateInt($replaceFirst(versionString, ',.*', ''));
}
;
_.getVersionString = function getVersionString(){
  var rawVersionString;
  rawVersionString = this.getRawVersionString();
  return rawVersionString == null?null:$replaceFirst($replaceAll(rawVersionString, '\\D*(\\d+)', '$1,'), ',$', '');
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImpl_2_classLit = createForClass(454);
function FlashMovieImplIE6(){
}

defineClass(402, 454, {}, FlashMovieImplIE6);
_.createElementMaybeSetURL = function createElementMaybeSetURL(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.tabIndex = -1;
  elem.id = id_0;
  elem.classid = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
  elem.codebase = 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0';
  elem.FlashVars = 'id=' + id_0;
  elem.Movie = url_0;
  return elem;
}
;
_.getRawVersionString = function getRawVersionString(){
  try {
    return (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version');
  }
   catch (e) {
    return null;
  }
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplIE6_2_classLit = createForClass(402);
function $createElementMaybeSetURL(this$static, id_0, url_0){
  return this$static.impl.createElementMaybeSetURL(id_0, url_0);
}

function FlashMovieImplPlayN(){
  $wnd.navigator.userAgent.indexOf('MSIE') != -1?(this.impl = new FlashMovieImplIE6):(this.impl = new FlashMovieImplSafari);
}

defineClass(396, 454, {}, FlashMovieImplPlayN);
_.createElementMaybeSetURL = function createElementMaybeSetURL_0(id_0, url_0){
  return $createElementMaybeSetURL(this, id_0, url_0);
}
;
_.getMajorVersion = function getMajorVersion_0(){
  return this.impl.getMajorVersion();
}
;
_.getRawVersionString = function getRawVersionString_0(){
  return this.impl.getRawVersionString();
}
;
_.getVersionString = function getVersionString_0(){
  return this.impl.getVersionString();
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplPlayN_2_classLit = createForClass(396);
defineClass(455, 454, {});
_.createElementMaybeSetURL = function createElementMaybeSetURL_1(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('id', id_0);
  elem.setAttribute('type', 'application/x-shockwave-flash');
  elem.setAttribute('data', url_0);
  var param = $doc.createElement('param');
  param.setAttribute('name', 'FlashVars');
  param.setAttribute('value', 'id=' + id_0);
  elem.appendChild(param);
  return elem;
}
;
_.getRawVersionString = function getRawVersionString_1(){
  var p = navigator.plugins['Shockwave Flash'];
  return p == null?null:p.description;
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplStandard_2_classLit = createForClass(455);
function FlashMovieImplSafari(){
}

defineClass(403, 455, {}, FlashMovieImplSafari);
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplSafari_2_classLit = createForClass(403);
function $stop(elem){
  var parent_0 = elem.parentNode;
  parent_0 != null && parent_0.removeChild(elem);
}

function $createElement(url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('data', url_0);
  elem.setAttribute('autostart', 'true');
  return elem;
}

function $setVolume_0(elem, volume){
  elem.setAttribute('volume', '' + volume);
}

function $play(soundControllerElement, elem){
  var parent_0 = elem.parentNode;
  parent_0 != null && parent_0.removeChild(elem);
  soundControllerElement.appendChild(elem);
  return true;
}

var uniqueId = 1000;
function contains_1(arr){
  var element, element$index, element$max;
  for (element$index = 0 , element$max = arr.length; element$index < element$max; ++element$index) {
    element = arr[element$index];
    if ($equals(element, 'audio/mpeg')) {
      return true;
    }
  }
  return false;
}

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

function Duration(){
  this.start_0 = now_1();
}

defineClass(337, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass(337);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 53, 0, 0, 1);
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
_.toString_0 = function toString_6(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass(10);
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(14, 10, {3:1, 14:1, 10:1}, Exception);
var Ljava_lang_Exception_2_classLit = createForClass(14);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
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

defineClass(9, 14, $intern_4, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass(9);
defineClass(116, 9, $intern_4);
var Ljava_lang_JsException_2_classLit = createForClass(116);
defineClass(199, 116, $intern_4);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass(199);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description_0 = this$static.description_0 + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description_0;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_9(e);
  this.description_0 = '';
  this.e = e;
  this.description_0 = '';
}

defineClass(88, 199, {88:1, 3:1, 14:1, 9:1, 10:1}, JavaScriptException);
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
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(88);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(411, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass(411);
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
  reportToBrowser(instanceOf(e, 88)?e.getThrown():e);
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

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_2(cmd){
  return cmd.execute_0();
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
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute();
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

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_2)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(338, 411, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(338);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(339, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_3(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass(339);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(340, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_4(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass(340);
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
defineClass(421, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass(421);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(200, 421, {}, StackTraceCreator$CollectorLegacy);
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
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 53, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass(200);
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
  index_0 = $indexOf_1(toReturn, fromCodePoint(46));
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

defineClass(422, 421, {});
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
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 53, 0, 0, 1);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass(422);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(201, 422, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass(201);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
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

function $setBooleanAttr(this$static, value_0){
  value_0?(this$static.setAttribute('loop', '') , undefined):(this$static.removeAttribute('loop') , undefined);
}

function $setSrc(this$static, url_0){
  this$static.src = url_0;
}

function $setVolume_1(this$static, volume){
  this$static.volume = volume;
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

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
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

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
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

function values_3(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 44, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(44, 6, $intern_5);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum(44, values_3);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(255, 44, $intern_5, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum(255, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(256, 44, $intern_5, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum(256, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(257, 44, $intern_5, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum(257, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(258, 44, $intern_5, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum(258, null);
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

function values_4(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 45, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(45, 6, $intern_6);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum(45, values_4);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(259, 45, $intern_6, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum(259, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(260, 45, $intern_6, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum(260, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(261, 45, $intern_6, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum(261, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(262, 45, $intern_6, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum(262, null);
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

function values_5(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 20, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(20, 6, $intern_7);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum(20, values_5);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(246, 20, $intern_7, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum(246, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(247, 20, $intern_7, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum(247, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(248, 20, $intern_7, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum(248, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(249, 20, $intern_7, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum(249, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(250, 20, $intern_7, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum(250, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(251, 20, $intern_7, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum(251, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(252, 20, $intern_7, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum(252, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(253, 20, $intern_7, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum(253, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(254, 20, $intern_7, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum(254, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 76, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(76, 6, $intern_8);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum(76, values_6);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(263, 76, $intern_8, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum(263, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(264, 76, $intern_8, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum(264, null);
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

function values_7(){
  $clinit_Style$WhiteSpace();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 37, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(37, 6, $intern_9);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum(37, values_7);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(265, 37, $intern_9, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum(265, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(266, 37, $intern_9, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum(266, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(267, 37, $intern_9, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum(267, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(268, 37, $intern_9, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum(268, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(269, 37, $intern_9, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum(269, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument);
}

defineClass(430, 1, {});
_.toString_0 = function toString_7(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass(430);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(431, 430, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass(431);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = $unsafeGet(registered, nativeEvent.type);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = type$iterator.next_1();
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(457, 431, {});
_.getAssociatedType = function getAssociatedType(){
  return $clinit_EndedEvent() , TYPE;
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass(457);
defineClass(240, 1, {});
_.hashCode_0 = function hashCode_3(){
  return this.index_0;
}
;
_.toString_0 = function toString_8(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass(240);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(101, 240, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass(101);
function DomEvent$Type(flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = registered.map_0['ended'];
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, types);
  }
  types.add_0(this);
  this.name_0 = 'ended';
}

defineClass(186, 101, {186:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass(186);
function $clinit_EndedEvent(){
  $clinit_EndedEvent = emptyMethod;
  TYPE = new DomEvent$Type(new EndedEvent);
}

function EndedEvent(){
}

defineClass(405, 457, {}, EndedEvent);
_.dispatch = function dispatch(handler){
  $fireOnPlaybackComplete(handler.this$01.soundHandlerCollection, handler.this$01);
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_EndedEvent_2_classLit = createForClass(405);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0){
  this$static.map_0['ended'] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(408, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass(408);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(379, 431, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler){
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass(379);
function ResizeEvent(width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
}

function fire_0(source, width_0, height){
  var event_0;
  if (TYPE_1) {
    event_0 = new ResizeEvent(width_0, height);
    $fireEvent(source, event_0);
  }
}

defineClass(341, 431, {}, ResizeEvent);
_.dispatch = function dispatch_1(handler){
  $onResize(handler, this);
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
_.height_0 = 0;
_.width_0 = 0;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass(341);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
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
    if (instanceOf($e0, 84)) {
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

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(120, 1, {51:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass(120);
defineClass(432, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass(432);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
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

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove(handler);
  removed && l.isEmpty() && (sourceMap = $get_5(this$static.map_0, type_0) , sourceMap.remove_1(source) , sourceMap.isEmpty() && $remove_5(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_2(this$static.map_0, type_0, sourceMap);
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = sourceMap.get_1(source);
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
        c = $next_3(c$iterator);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(241, 432, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass(241);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(242, 241, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass(242);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(364, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass(364);
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

defineClass(84, 9, $intern_10, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass(84);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(170, 84, $intern_10, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass(170);
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

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_11;
  a1 = value_0 >> 22 & $intern_11;
  a2 = value_0 < 0?$intern_12:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
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

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_13) {
    a2 = round_int(value_0 / $intern_13);
    value_0 -= a2 * $intern_13;
  }
  a1 = 0;
  if (value_0 >= $intern_14) {
    a1 = round_int(value_0 / $intern_14);
    value_0 -= a1 * $intern_14;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_11 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_11 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_12 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_11, $intern_11, 524287);
  MIN_VALUE = create0(0, 0, $intern_15);
  create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
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

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_14;
  }
  if (a2 == $intern_12) {
    return big_0.l + big_0.m * $intern_14 - $intern_13;
  }
  return big_0;
}

function fromDouble_0(value_0){
  if (-17592186044416 < value_0 && value_0 < $intern_13) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_13;
    a3 = $intern_12;
  }
  a1 = round_int(value_0 / $intern_14);
  a0 = round_int(value_0 - a1 * $intern_14);
  return create0(a0, a1, a3);
}

function toInt(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return a.l | a.m << 22;
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

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

defineClass(47, 1, {64:1, 47:1});
_.toString_0 = function toString_10(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass(47);
function $addBitlessDomHandler(this$static, handler, type_0){
  $sinkBitlessEvent(this$static, type_0.name_0);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_4(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    $remove_2(this$static.parent_0, this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(43, 47, $intern_16);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this, this.element);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass(43);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

defineClass(452, 43, $intern_16);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass(452);
function $getMediaElement(this$static){
  return $clinit_DOM() , this$static.element;
}

defineClass(394, 452, $intern_16);
var Lcom_google_gwt_media_client_MediaBase_2_classLit = createForClass(394);
function Audio_0(element){
  $setElement(this, ($clinit_DOM() , element));
}

function createIfSupported(){
  $clinit_FocusWidget();
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!element.canPlayType) {
    return null;
  }
  return new Audio_0(element);
}

function isSupported(){
  $clinit_FocusWidget();
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!element.canPlayType) {
    return false;
  }
  return true;
}

defineClass(395, 394, $intern_16, Audio_0);
var detector;
var Lcom_google_gwt_media_client_Audio_2_classLit = createForClass(395);
defineClass(453, 1, {});
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetector_2_classLit = createForClass(453);
function Audio$AudioElementSupportDetectedMaybe(){
}

defineClass(179, 453, {}, Audio$AudioElementSupportDetectedMaybe);
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetectedMaybe_2_classLit = createForClass(179);
function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $removeItem(this$static, key){
  $removeItem_0(this$static.storage, key);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(302, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass(302);
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

function $removeItem_0(storage, key){
  $wnd[storage].getItem(key);
  $wnd[storage].removeItem(key);
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = iter.next_1();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_2();
      }
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_9(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(438, 1, $intern_17);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals_0 = function equals_2(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 111)) {
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
_.get_1 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_16(this.entrySet_0());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_1 = function remove_4(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_2(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_11(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    $add_6(joiner, $toString_0(this, entry.getKey()) + '=' + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass(438);
function $get_0(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $getItem(this$static.storage, toString_9(key));
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

function $remove_0(this$static, key){
  var k, old;
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  k = toString_9(key);
  old = $getItem(this$static.storage, k);
  $removeItem(this$static.storage, k);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(303, 438, $intern_17, StorageMap);
_.get_1 = function get_2(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_1 = function remove_5(key){
  return $remove_0(this, key);
}
;
_.containsKey = function containsKey_0(key){
  return $get_0(this, key) != null;
}
;
_.entrySet_0 = function entrySet(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.size_1 = function size_3(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass(303);
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

defineClass(304, 1, $intern_18, StorageMap$StorageEntry);
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return $get_0(this.this$01, this.key_0);
}
;
_.setValue = function setValue(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
_.equals_0 = function equals_3(obj){
  var e;
  if (!instanceOf(obj, 52)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get_0(this.this$01, this.key_0), e.getValue());
}
;
_.hashCode_0 = function hashCode_5(){
  return $hashCode(this.key_0) ^ $hashCode($get_0(this.this$01, this.key_0));
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass(304);
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

defineClass(305, 1, {}, StorageMap$StorageEntryIterator);
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.remove_2 = function remove_6(){
  if (this.lastKey == null) {
    throw toJs(new IllegalStateException);
  }
  $removeItem(this.this$01.storage, this.lastKey);
  this.lastKey = null;
  --this.index_0;
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass(305);
defineClass(440, 439, $intern_19);
_.equals_0 = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 62)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_16(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass(440);
function $contains(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 52)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get_0(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(306, 440, $intern_19, StorageMap$StorageEntrySet);
_.contains_0 = function contains_2(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.remove = function remove_7(o){
  var entry;
  if (!$contains(this, o)) {
    return false;
  }
  entry = o;
  return $remove_0(this.this$01, entry.getKey()) != null;
}
;
_.size_1 = function size_4(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass(306);
function create_0(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_1(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function create_2(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_3(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_5(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $clinit_DOM();
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
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

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1), handler);
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
      fire_0((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), width_0, height);
    }
  }
}

var closeHandlersInitialized = false, handlers_0, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_2 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(239, 431, {}, Window$ClosingEvent);
_.dispatch = function dispatch_2(handler){
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass(239);
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
        if (!instanceOf($e0, 88))
          throw toJs($e0);
      }
      values = out.get_1(key);
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
  paramsForName = listParamMap.get_1(name_0);
  return !paramsForName?null:paramsForName.get_0(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(121, 120, {51:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass(121);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_20;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_15;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_14;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_21;
    case 'gesturechange':
      return $intern_22;
    case 'gestureend':
      return $intern_23;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 65)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_20 && (elem.onerror = bits & $intern_20?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_15 && (elem.onpaste = bits & $intern_15?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_14 && (elem.ontouchend = bits & $intern_14?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_21 && (elem.ongesturestart = bits & $intern_21?dispatchEvent_1:null);
  chMask & $intern_22 && (elem.ongesturechange = bits & $intern_22?dispatchEvent_1:null);
  chMask & $intern_23 && (elem.ongestureend = bits & $intern_23?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget || $wnd;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget || $wnd;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
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
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
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

defineClass(451, 43, $intern_16);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass(451);
function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_2(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove_1(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

defineClass(365, 451, $intern_16);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove_3 = function remove_8(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass(365);
function $add_1(this$static, w){
  $add_0(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_2(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(366, 365, $intern_16);
_.remove_3 = function remove_9(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass(366);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = w$iterator.next_1();
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put_2(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(370, 170, $intern_10, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass(370);
function AttachDetachException$1(){
}

defineClass(371, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_5(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass(371);
function AttachDetachException$2(){
}

defineClass(372, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_6(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass(372);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  this.children = new WidgetCollection(this);
  $setElement(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_12(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset_1(widgetsToDetach.map_0);
    $reset_1(rootPanels);
  }
}

function get_3(){
  $clinit_RootPanel();
  var rp;
  rp = $get_5(rootPanels, null);
  if (rp) {
    return rp;
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_2(rootPanels, null, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

defineClass(129, 366, $intern_24);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass(129);
function RootPanel$1(){
}

defineClass(368, 1, {}, RootPanel$1);
_.execute_1 = function execute_7(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass(368);
function RootPanel$2(){
}

defineClass(369, 1, {463:1, 410:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass(369);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, ($clinit_RootPanel() , $doc.body));
}

defineClass(367, 129, $intern_24, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass(367);
function $add_2(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf_0(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 43, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_3(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf_0(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 43, 4, 0, 1);
}

defineClass(406, 1, {}, WidgetCollection);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass(406);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(187, 1, {}, WidgetCollection$WidgetIterator);
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_2 = function remove_10(){
  if (!this.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this.this$01.parent_0.remove_3(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass(187);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplSafari;
  implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(401, 1, {}, FocusImpl);
var implPanel;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass(401);
defineClass(456, 401, {});
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass(456);
function FocusImplSafari(){
}

defineClass(404, 456, {}, FocusImplSafari);
var Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass(404);
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

function $scissor(this$static, x_0, y_0, width_0, height){
  this$static.scissor(x_0, y_0, width_0, height);
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

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(243, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass(243);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(244, 1, {458:1}, SimpleEventBus$2);
_.execute = function execute_8(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass(244);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(245, 1, {458:1}, SimpleEventBus$3);
_.execute = function execute_9(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass(245);
function $animate(this$static, d){
  this$static.imageFrame += 1;
  this$static.image = this$static.image_0(d, this$static.imageFrame / this$static.framesPerImage | 0);
}

function $draw(this$static, surface){
  if (!this$static.visible)
    return;
  drawSpriteImage(surface, this$static.image, this$static.x_0, this$static.y_0);
}

function $ensureInBounds(this$static, scene){
  var entrance;
  if (!$contains_1(scene.mask, this$static.x_0, this$static.y_0)) {
    entrance = $getEdge(scene.mask, ($clinit_Direction() , DOWN));
    this$static.x_0 = ((entrance.left_0 + entrance.right) / 4 | 0) * 2;
    this$static.y_0 = (entrance.top_0 + entrance.bottom) / 2 | 0;
  }
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
  return that.visible && abs_0(that.x_0 - this$static.x_0) <= px * 2 && abs_0(that.y_0 - this$static.y_0) <= px;
}

function $move(this$static, mask, dx, dy){
  var newX, newY;
  if (dx == 0 && dy == 0)
    return false;
  newX = this$static.x_0 + dx;
  newY = this$static.y_0 + dy;
  if (mask) {
    if (!$contains_0(mask.mainBounds, newX, newY))
      return false;
    if (!this$static.canGo(mask, newX, newY) && this$static.canGo(mask, this$static.x_0, this$static.y_0))
      return false;
  }
  this$static.x_0 = newX;
  this$static.y_0 = newY;
  return true;
}

function $moveAndAnimate(this$static, mask, d){
  if ($move(this$static, mask, d.dx, d.dy)) {
    this$static.isInBoat?$animate(this$static, $opposite(d)):(this$static.imageFrame += 1 , this$static.image = $image(this$static, d, this$static.imageFrame / this$static.framesPerImage | 0));
    return true;
  }
  return false;
}

function drawSpriteImage(surface, image, x_0, y_0){
  $draw_5(surface, image, x_0 - (image.raw.pixelWidth / 2 | 0), y_0 - image.raw.pixelHeight + 2);
}

defineClass(25, 1, $intern_25);
_.canGo = function canGo(mask, px, py){
  return ($pixelOnce(mask.image, px, py) & $intern_26) != 0;
}
;
_.draw = function draw(surface, frame_0){
  $draw(this, surface);
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
_.framesPerMove = 1;
_.imageFrame = 0;
_.moveFrame = 0;
_.visible = false;
_.x_0 = 80;
_.y_0 = 133;
var Lfrodo_core_Sprite_2_classLit = createForClass(25);
function $slowRand(){
  var result;
  result = round_int(4 * $wnd.Math.random());
  result > 1 && (result -= 3);
  return result;
}

function $wander(this$static){
  var result;
  this$static.dx = this$static.isAngry()?(result = round_int(2 * $wnd.Math.random()) , result == 0 && (result = -1) , result):$slowRand();
  this$static.dy = $slowRand();
  this$static.isFollowing() && (signum(this$static.dx) == signum(this$static.x_0 - ($clinit_Sprites() , FRODO_0).x_0) && (this$static.dx = 0) , signum(this$static.dy) == signum(this$static.y_0 - FRODO_0.y_0) && (this$static.dy = 0));
  this$static.dx == 0 && this$static.dy == 0 || (this$static.imageDirection = this$static.imageDirection_0(this$static.dx, this$static.dy, this$static.imageDirection));
}

function AnimalSprite(){
  this.imageDirection = ($clinit_Direction() , DOWN);
  this.framesPerMove = 2;
}

defineClass(92, 25, $intern_25, AnimalSprite);
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
_.isFollowing = function isFollowing(){
  return $clinit_Sprites() , animalsFollowing > 0;
}
;
_.move = function move(scene){
  (this.wanderFrame++ % this.framesPerWander == 0 || this.dx == 0 && this.dy == 0 && this.isAngry()) && $wander(this);
  (this.moveFrame++ % this.framesPerMove == 0 && $move(this, scene.mask, this.dx, this.dy) || this.isAngry()) && $animate(this, this.imageDirection);
}
;
_.update = function update_0(state){
  this.visible = $at(state, ($clinit_Location() , WEST_FIELD));
}
;
_.dx = 0;
_.dy = 0;
_.framesPerWander = 20;
_.wanderFrame = 0;
var Lfrodo_core_AnimalSprite_2_classLit = createForClass(92);
function $clinit_Animations(){
  $clinit_Animations = emptyMethod;
  NONE = new Animations('NONE', 0);
  QUILL = new Animations$1;
  BILBO_WRITING = new Animations$2;
  PIPE_SMOKE = new Animations$3;
  BLINK = new Animations$4;
  DRINK = new Animations$5;
}

function Animations(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Animations();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Animations_2_classLit, 1), $intern_1, 34, 0, [NONE, QUILL, BILBO_WRITING, PIPE_SMOKE, BLINK, DRINK]);
}

defineClass(34, 6, $intern_27, Animations);
_.draw_0 = function draw_0(image, surface, frame_0){
  $draw_5(surface, image, 0, 0);
}
;
var BILBO_WRITING, BLINK, DRINK, NONE, PIPE_SMOKE, QUILL;
var Lfrodo_core_Animations_2_classLit = createForEnum(34, values_8);
function Animations$1(){
  Animations.call(this, 'QUILL', 1);
}

defineClass(355, 34, $intern_27, Animations$1);
_.draw_0 = function draw_1(image, surface, frame_0){
  var y_0;
  y_0 = 0;
  switch ((frame_0 / 2 | 0) % 20) {
    case 0:
    case 2:
    case 3:
    case 7:
    case 10:
    case 11:
    case 13:
    case 15:
    case 16:
    case 18:
    case 19:
      y_0 = 1;
  }
  frame_0 = frame_0 / 16 | 0;
  $draw_5(surface, image, -2 * (frame_0 % 4) + 4, y_0);
}
;
var Lfrodo_core_Animations$1_2_classLit = createForEnum(355, null);
function Animations$2(){
  Animations.call(this, 'BILBO_WRITING', 2);
}

defineClass(356, 34, $intern_27, Animations$2);
_.draw_0 = function draw_2(image, surface, frame_0){
  frame_0 = frame_0 / 64 | 0;
  $draw_5(surface, image, -2 * (frame_0 % 2), 0);
}
;
var Lfrodo_core_Animations$2_2_classLit = createForEnum(356, null);
function Animations$3(){
  Animations.call(this, 'PIPE_SMOKE', 3);
}

defineClass(357, 34, $intern_27, Animations$3);
_.draw_0 = function draw_3(image, surface, frame_0){
  frame_0 = frame_0 / 16 | 0;
  if ((frame_0 / 6 | 0) % 3 != 0)
    return;
  $draw_5(surface, image, 0, -(frame_0 % 6));
}
;
var Lfrodo_core_Animations$3_2_classLit = createForEnum(357, null);
function Animations$4(){
  Animations.call(this, 'BLINK', 4);
}

defineClass(358, 34, $intern_27, Animations$4);
_.draw_0 = function draw_4(image, surface, frame_0){
  frame_0 = frame_0 / 8 | 0;
  switch (frame_0 % 100) {
    case 20:
    case 40:
    case 70:
    case 85:
      $draw_5(surface, image, 0, 0);
  }
}
;
var Lfrodo_core_Animations$4_2_classLit = createForEnum(358, null);
function Animations$5(){
  Animations.call(this, 'DRINK', 5);
}

defineClass(359, 34, $intern_27, Animations$5);
_.draw_0 = function draw_5(image, surface, frame_0){
  frame_0 = frame_0 / 32 | 0;
  switch (frame_0 % 100) {
    case 20:
    case 40:
    case 70:
    case 85:
      $draw_5(surface, image, 0, 0);
  }
}
;
var Lfrodo_core_Animations$5_2_classLit = createForEnum(359, null);
function Animations$BobAnimation(d, x_0){
  this.d = d;
  this.x_0 = 2 * x_0;
}

defineClass(128, 1, {87:1}, Animations$BobAnimation);
_.draw_0 = function draw_6(image, surface, frame_0){
  var s, y0, y1, y2;
  s = 1 + $wnd.Math.sin(0.025 * frame_0);
  y0 = this.d == ($clinit_Direction() , LEFT)?toInt(fromDouble_0($wnd.Math.round(s))):0;
  y1 = toInt(fromDouble_0($wnd.Math.round(0.5 * s)));
  y2 = this.d == RIGHT?toInt(fromDouble_0($wnd.Math.round(s))):0;
  $startClipped(surface, 0, this.x_0 - 4);
  $draw_5(surface, image, 0, y0);
  $endClipped(surface.raw);
  $startClipped(surface, this.x_0 - 4, 8);
  $draw_5(surface, image, 0, y1);
  $endClipped(surface.raw);
  $startClipped(surface, this.x_0 + 4, 320 - this.x_0 - 4);
  $draw_5(surface, image, 0, y2);
  $endClipped(surface.raw);
}
;
_.x_0 = 0;
var Lfrodo_core_Animations$BobAnimation_2_classLit = createForClass(128);
function $withDuration(this$static){
  this$static.duration_0 = 4;
  return this$static;
}

function Animations$CycleAnimation(showOnFrame){
  this.showOnFrame = showOnFrame % 3;
  this.ofTotal = 3;
}

defineClass(106, 1, {87:1}, Animations$CycleAnimation);
_.draw_0 = function draw_7(image, surface, frame_0){
  frame_0 = frame_0 / this.duration_0 | 0;
  frame_0 % this.ofTotal == this.showOnFrame && $draw_5(surface, image, 0, 0);
}
;
_.duration_0 = 0;
_.ofTotal = 0;
_.showOnFrame = 0;
var Lfrodo_core_Animations$CycleAnimation_2_classLit = createForClass(106);
function $image_0(this$static, d){
  this$static.frontImage = this$static.images[d.ordinal * 2 + 1];
  return this$static.images[d.ordinal * 2];
}

function $init_0(this$static, boatImages, splashImages){
  this$static.images = boatImages;
  this$static.image = boatImages[0];
  this$static.splashImages = splashImages;
  this$static.image = $image_0(this$static, ($clinit_Direction() , LEFT));
}

function BoatSprite(){
  this.splashes = stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_BoatSprite$Splash_2_classLit, 1), $intern_2, 81, 0, [new BoatSprite$Splash(this), new BoatSprite$Splash(this), new BoatSprite$Splash(this), new BoatSprite$Splash(this)]);
  this.x_0 = 33;
  this.y_0 = 160;
}

defineClass(335, 25, $intern_25, BoatSprite);
_.draw = function draw_8(surface, frame_0){
  var f, s, s$array, s$index, s$max, y2;
  if (!this.visible)
    return;
  f = this.frodoInBoat?2 * frame_0:frame_0;
  y2 = this.y_0 + ($clinit_Animations() , toInt(fromDouble_0($wnd.Math.round(1 + $wnd.Math.sin(0.025 * f)))));
  drawSpriteImage(surface, this.image, this.x_0, y2);
  if (!this.frodoInBoat)
    return;
  drawSpriteImage(surface, ($clinit_Sprites() , FRODO_0).image, this.x_0, y2);
  drawSpriteImage(surface, this.frontImage, this.x_0, y2);
  for (s$array = this.splashes , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    !!s.image && drawSpriteImage(surface, s.image, s.x_0, s.y_0);
  }
}
;
_.image_0 = function image_2(d, frame_0){
  return $image_0(this, d);
}
;
_.move = function move_0(scene){
  var direction, lastArg, s, s$array, s$index, s$max, s0, s1, s2;
  if (!this.frodoInBoat)
    return;
  this.x_0 = ($clinit_Sprites() , FRODO_0).x_0;
  this.y_0 = FRODO_0.y_0;
  for (s$array = this.splashes , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s0 = s$array[s$index];
    ++s0.f;
    s0.image = (s = s0.f / s0.framesPerImage | 0 , s < s0.this$01.splashImages.length?s0.this$01.splashImages[s]:null);
  }
  direction = $outcome(FRODO_0.controlState);
  if (!direction)
    return;
  this.imageFrame += 1;
  this.image = $image_0(this, (lastArg = direction , this.imageFrame / this.framesPerImage | 0 , lastArg));
  if ($isHalfDone(this.splashes[this.lastSplash])) {
    s1 = (this.lastSplash + 1) % this.splashes.length;
    s2 = (s1 + 1) % this.splashes.length;
    if (direction == ($clinit_Direction() , LEFT) || direction == RIGHT) {
      $reset(this.splashes[s1], this.x_0, this.y_0);
      $reset(this.splashes[s2], this.x_0, this.y_0);
    }
     else {
      $reset(this.splashes[s1], this.x_0 + 7, this.y_0);
      $reset(this.splashes[s2], this.x_0 - 7, this.y_0);
    }
    this.lastSplash = s2;
  }
}
;
_.update = function update_1(state){
  this.frodoInBoat = $at_0(state, ($clinit_Progress() , FRODO_IN_BOAT));
  this.visible = this.frodoInBoat || $at(state, ($clinit_Location() , HOUSE_BY_LAKE));
}
;
_.frodoInBoat = false;
_.lastSplash = 0;
var Lfrodo_core_BoatSprite_2_classLit = createForClass(335);
function $isHalfDone(this$static){
  return this$static.f * 2 > this$static.this$01.splashImages.length * this$static.framesPerImage;
}

function $reset(this$static, x_0, y_0){
  var s;
  this$static.f = 0;
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.image = (s = this$static.f / this$static.framesPerImage | 0 , s < this$static.this$01.splashImages.length?this$static.this$01.splashImages[s]:null);
}

function BoatSprite$Splash(this$0){
  this.this$01 = this$0;
}

defineClass(81, 1, {81:1}, BoatSprite$Splash);
_.f = 999;
_.framesPerImage = 4;
_.image = null;
_.x_0 = 0;
_.y_0 = 0;
var Lfrodo_core_BoatSprite$Splash_2_classLit = createForClass(81);
function $contains_0(this$static, x_0, y_0){
  return this$static.left_0 <= x_0 && x_0 <= this$static.right && this$static.top_0 <= y_0 && y_0 <= this$static.bottom;
}

function $reset_0(this$static, x_0, y_0){
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

defineClass(96, 1, {}, Bounds);
_.toString_0 = function toString_12(){
  return $toString_1(this);
}
;
_.bottom = $intern_28;
_.left_0 = $intern_0;
_.right = $intern_28;
_.top_0 = $intern_0;
var Lfrodo_core_Bounds_2_classLit = createForClass(96);
function $draw_0(this$static, image, x_0, y_0){
  $draw_8(this$static.raw, image.raw, x_0, y_0);
}

function $fillRectPlusBorder(this$static, x_0, y_0, w, h){
  $setFillColor_0(this$static.raw, -1);
  $fillRect_2(this$static.raw, x_0 - 8, y_0 - 8, w + 16, h + 16);
}

function $strokeRect(this$static, x_0, y_0, w, h){
  $setFillColor_0(this$static.raw, -65536);
  $fillRect_2(this$static.raw, x_0, y_0, w, 1);
  $fillRect_2(this$static.raw, x_0, y_0 + h - 1, w, 1);
  $fillRect_2(this$static.raw, x_0, y_0, 2, h);
  $fillRect_2(this$static.raw, x_0 + w - 2, y_0, 2, h);
}

function Canvas_0(raw){
  this.raw = raw;
  new Image_0(raw.image);
}

defineClass(351, 1, {}, Canvas_0);
var Lfrodo_core_Canvas_2_classLit = createForClass(351);
function $followClosely(this$static){
  var dx, dy, ff, fx, fy;
  ff = (this$static.f + 1) % this$static.followDistance();
  fx = this$static.followX[ff];
  fy = this$static.followY[ff];
  if (fx == 0 && fy == 0) {
    this$static.hide = true;
  }
   else if (this$static.hide) {
    this$static.x_0 = fx;
    this$static.y_0 = fy;
    this$static.hide = false;
  }
   else if (fx != this$static.x_0 || fy != this$static.y_0) {
    dx = round_int(signum(fx - this$static.x_0));
    dy = round_int(signum(fy - this$static.y_0));
    $move(this$static, null, dx, dy);
    this$static.imageDirection = approximate(dx, dy);
    $animate(this$static, this$static.imageDirection);
  }
}

function $maybeChangeLocation(this$static, location_0){
  if (location_0 != this$static.prevLocation) {
    this$static.prevLocation = location_0;
    if (this$static.isFollowingClosely()) {
      fill(this$static.followX);
      fill(this$static.followY);
    }
    return true;
  }
  return false;
}

function $storeFollowData(this$static){
  var fx, fy;
  fx = ($clinit_Sprites() , FRODO_0).x_0;
  fy = FRODO_0.y_0;
  if (this$static.followX[this$static.f] != fx || this$static.followY[this$static.f] != fy) {
    this$static.f = (this$static.f + 1) % this$static.followDistance();
    this$static.followX[this$static.f] = fx;
    this$static.followY[this$static.f] = fy;
  }
}

function PonySprite(){
  AnimalSprite.call(this);
  this.x_0 = 80;
  this.y_0 = 150;
  this.followX = initUnidimensionalArray(I_classLit, $intern_2, 16, this.followDistance(), 15, 1);
  this.followY = initUnidimensionalArray(I_classLit, $intern_2, 16, this.followDistance(), 15, 1);
}

defineClass(150, 92, $intern_25, PonySprite);
_.draw = function draw_9(surface, frame_0){
  if (this.isFollowingClosely() && this.hide)
    return;
  $draw(this, surface);
}
;
_.followDistance = function followDistance(){
  return 20;
}
;
_.isFollowing = function isFollowing_0(){
  return this.ponyMeal >= 1;
}
;
_.isFollowingClosely = function isFollowingClosely(){
  return this.ponyMeal >= 2;
}
;
_.move = function move_1(scene){
  $storeFollowData(this);
  this.isFollowingClosely()?$followClosely(this):(this.wanderFrame++ % this.framesPerWander == 0 && $wander(this) , this.moveFrame++ % this.framesPerMove == 0 && $move(this, scene.mask, this.dx, this.dy) && $animate(this, this.imageDirection));
}
;
_.update = function update_2(state){
  var i, wasFollowingClosely;
  $maybeChangeLocation(this, state.location_0) && isInside_0(state.location_0) && state.ponyMeal > 0 && !$at_0(state, ($clinit_Progress() , HITCHED_BARREL)) && (state.ponyMeal = 0 , this.x_0 = 80 , this.y_0 = 150 , undefined);
  wasFollowingClosely = this.isFollowingClosely();
  this.ponyMeal = state.ponyMeal;
  if (this.isFollowingClosely() && !wasFollowingClosely) {
    for (i = 0; i < this.followDistance(); i++) {
      if (this.followX[i] == 0 && this.followY[i] == 0) {
        this.followX[i] = ($clinit_Sprites() , FRODO_0).x_0;
        this.followY[i] = FRODO_0.y_0;
      }
    }
  }
  this.visible = $at(state, ($clinit_Location() , EAST_FIELD)) || this.isFollowingClosely() && !isInside_0(state.location_0);
}
;
_.f = 0;
_.hide = false;
_.ponyMeal = 0;
_.prevLocation = null;
var Lfrodo_core_PonySprite_2_classLit = createForClass(150);
function CartSprite(){
  PonySprite.call(this);
  this.x_0 = 53;
  this.y_0 = 116;
}

defineClass(334, 150, $intern_25, CartSprite);
_.followDistance = function followDistance_0(){
  return 34;
}
;
_.image_0 = function image_3(d, frame_0){
  var dValue, numFrames;
  numFrames = this.images.length / 2 | 0;
  dValue = d == ($clinit_Direction() , LEFT) || d == RIGHT?0:1;
  return this.images[dValue * numFrames + frame_0 % numFrames];
}
;
_.isFollowingClosely = function isFollowingClosely_0(){
  return this.isHitched;
}
;
_.move = function move_2(scene){
  $storeFollowData(this);
  this.isHitched?$followClosely(this):(this.image = this.images[0]);
  if (!this.isHitched && this.ponyFollowing && $isCloseTo(this, ($clinit_Sprites() , FRODO_0), 10)) {
    $hitchBarrel(($clinit_FrodosQuest() , state_0));
    this.isHitched = true;
  }
}
;
_.update = function update_3(state){
  $maybeChangeLocation(this, state.location_0);
  this.ponyFollowing = state.ponyMeal >= 2;
  this.isHitched = $at_0(state, ($clinit_Progress() , HITCHED_BARREL));
  this.visible = $at_0(state, BOUGHT_BARREL) && $at(state, ($clinit_Location() , HOBBITON)) || $at_0(state, HITCHED_BARREL) && !isInside_0(state.location_0) || $atOrAfter(state, DELIVERED_BARREL) && $at(state, ($clinit_Location() , HOUSE_BY_LAKE));
}
;
_.isHitched = false;
_.ponyFollowing = false;
var Lfrodo_core_CartSprite_2_classLit = createForClass(334);
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

defineClass(309, 1, {}, ControlState);
_.heldCount = 0;
_.interactive = true;
_.jammed = null;
_.outcome = null;
var TAP_SPEED = 4;
var Lfrodo_core_ControlState_2_classLit = createForClass(309);
function $clinit_Direction(){
  $clinit_Direction = emptyMethod;
  LEFT = new Direction('LEFT', 0, -1, 0, ($clinit_Key() , LEFT_0));
  RIGHT = new Direction('RIGHT', 1, 1, 0, RIGHT_0);
  UP = new Direction('UP', 2, 0, -1, UP_0);
  DOWN = new Direction('DOWN', 3, 0, 1, DOWN_0);
  ALL_DIRECTIONS = stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Direction_2_classLit, 1), $intern_1, 69, 0, [LEFT, RIGHT, UP, DOWN]);
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

function values_9(){
  $clinit_Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Direction_2_classLit, 1), $intern_1, 69, 0, [LEFT, RIGHT, UP, DOWN]);
}

defineClass(69, 6, {69:1, 3:1, 7:1, 6:1}, Direction);
_.dx = 0;
_.dy = 0;
var ALL_DIRECTIONS, DOWN, LEFT, NUM_DIRECTIONS = 0, RIGHT, UP;
var Lfrodo_core_Direction_2_classLit = createForEnum(69, values_9);
function $clinit_Elvish(){
  $clinit_Elvish = emptyMethod;
  ELVISH = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A! Tollen gur na Balannor!', 'Nu goll dh\xFAath e nathron dhonn!', 'Onethelais panna i nor!', 'Gelaidh gelaid go linnod an!', 'Nestad. Ai nae uamdir dar!', 'Harnannin athan nestad ban!', 'Telperion a Laurelin!', 'In edhil si awarthar Dhun!', 'Farol i viriath corin!', 'E galad vedui o Aman!', 'I aear dholl. Saer d\xEEn vanadh!', "Aphadar 'lin e-fast i chin!", 'Finarfin. Athradar athrad!', 'Chelegnen. Si falas thrunen!', 'I ithil eria. Romru can!']);
}

var ELVISH;
function $add_3(this$static, event_0){
  if (instanceOf(event_0, 72)) {
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
  if ($check(upcoming, state)) {
    e = $pollFirst(this$static.upcomingEvents);
    checkCriticalElement(e != null);
    $add_3(this$static, upcoming.delegate);
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
  var e, pauseEvent;
  event_0.enact();
  if (instanceOf(event_0, 23)) {
    this$static.textTimer = FRAME_RATE / 2 | 0;
  }
   else if (instanceOf(event_0, 60)) {
    pauseEvent = event_0;
    this$static.pauseTimer = FRAME_RATE * pauseEvent.seconds;
  }
   else {
    e = $pollFirst(this$static.events);
    checkCriticalElement(e != null);
    $processNext(this$static);
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
  if (instanceOf(event_0, 23)) {
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
  instanceOf(prev, 23) && (prev.interactive = false);
  instanceOf(prev, 60) && instanceOf(next, 23) && (next.interactive = false);
}

defineClass(312, 1, {}, EventManager);
_.pauseTimer = -1;
_.textTimer = -1;
var Lfrodo_core_EventManager_2_classLit = createForClass(312);
function Events$Event(interactive){
  this.interactive = interactive;
}

defineClass(15, 1, $intern_29);
_.enact = function enact(){
}
;
_.interactive = false;
var Lfrodo_core_Events$Event_2_classLit = createForClass(15);
function Events$CutSceneEvent(location_0){
  Events$Event.call(this, false);
  this.location_0 = location_0;
}

defineClass(183, 15, $intern_29, Events$CutSceneEvent);
_.enact = function enact_0(){
  changeLocation(this.location_0);
}
;
var Lfrodo_core_Events$CutSceneEvent_2_classLit = createForClass(183);
function Events$DeliveredBarrelEvent(){
  Events$Event.call(this, true);
}

defineClass(398, 15, $intern_29, Events$DeliveredBarrelEvent);
_.enact = function enact_1(){
  ($clinit_FrodosQuest() , state_0).progress = ($clinit_Progress() , FRODO_IN_BOAT);
  state_0.ponyMeal = 0;
  $add_3(eventManager_0, new Events$DisplayTextEvent('"Halfred! I\'ve brought your barrel of ale!"'));
  $add_3(eventManager_0, new Events$DisplayTextEvent('"So you have! I didn\'t think you really would! I suppose you can borrow the boat, then," says Halfred.'));
  $add_3(eventManager_0, new Events$UpdateSceneEvent);
  $add_3(eventManager_0, new Events$LocationEvent(($clinit_Location() , TREE_BY_LAKE), true, new Events$DeliveredBoatEvent));
}
;
var Lfrodo_core_Events$DeliveredBarrelEvent_2_classLit = createForClass(398);
function Events$DeliveredBoatEvent(){
  Events$Event.call(this, true);
}

defineClass(399, 15, $intern_29, Events$DeliveredBoatEvent);
_.enact = function enact_2(){
  ($clinit_FrodosQuest() , state_0).progress = ($clinit_Progress() , BILBO_IN_BOAT);
  $add_4(state_0.inventory, ($clinit_Item() , POCKET_WATCH));
  $add_3(eventManager_0, new Events$DisplayTextEvent('"Bilbo! I\'ve brought you a boat to take fishing!"'));
  $add_3(eventManager_0, new Events$DisplayTextEvent('"So you have!" says Bilbo. "What a treat for your uncle Bilbo!"'));
  $add_3(eventManager_0, new Events$DisplayTextEvent('Bilbo takes a golden watch out of his pocket and hands it to you. "Mind this for me while I\'m on the water, will you?" he says. Then he paddles out onto the lake.'));
  $add_3(eventManager_0, new Events$UpdateSceneEvent);
}
;
var Lfrodo_core_Events$DeliveredBoatEvent_2_classLit = createForClass(399);
function Events$DisplayTextEvent(text_0){
  Events$Event.call(this, true);
  this.text_0 = text_0;
}

defineClass(23, 15, {23:1, 15:1}, Events$DisplayTextEvent);
_.enact = function enact_3(){
  $render(($clinit_FrodosQuest() , textDisplay_0), this.text_0);
  $pause(controlState_0);
}
;
var Lfrodo_core_Events$DisplayTextEvent_2_classLit = createForClass(23);
defineClass(135, 15, {15:1, 135:1});
var Lfrodo_core_Events$UpcomingEvent_2_classLit = createForClass(135);
function $check(this$static, state){
  if ($at(state, this$static.location_0)) {
    return !this$static.touchingSpecial || ($clinit_Sprites() , FRODO_0).touchingSpecial;
  }
  return false;
}

function Events$LocationEvent(location_0, touchingSpecial, delegate){
  this.interactive = true;
  this.delegate = delegate;
  this.delegate.interactive = false;
  this.location_0 = location_0;
  this.touchingSpecial = touchingSpecial;
}

defineClass(72, 135, {15:1, 72:1, 135:1}, Events$LocationEvent);
_.touchingSpecial = false;
var Lfrodo_core_Events$LocationEvent_2_classLit = createForClass(72);
function Events$MusicEvent(music){
  Events$Event.call(this, true);
  this.music = music;
}

defineClass(184, 15, $intern_29, Events$MusicEvent);
_.enact = function enact_4(){
  this.music.play_0();
}
;
var Lfrodo_core_Events$MusicEvent_2_classLit = createForClass(184);
function Events$PauseEvent(interactive, seconds){
  Events$Event.call(this, interactive);
  this.seconds = seconds;
}

defineClass(60, 15, {15:1, 60:1}, Events$PauseEvent);
_.seconds = 0;
var Lfrodo_core_Events$PauseEvent_2_classLit = createForClass(60);
function Events$ProgressEvent(progress){
  Events$Event.call(this, false);
  this.progress = progress;
}

defineClass(182, 15, $intern_29, Events$ProgressEvent);
_.enact = function enact_5(){
  ($clinit_FrodosQuest() , state_0).progress = this.progress;
}
;
var Lfrodo_core_Events$ProgressEvent_2_classLit = createForClass(182);
function Events$QueuedUpcomingEvent(delegate){
  Events$Event.call(this, true);
  this.delegate = delegate;
}

defineClass(185, 15, $intern_29, Events$QueuedUpcomingEvent);
_.enact = function enact_6(){
  $add_3(($clinit_FrodosQuest() , eventManager_0), this.delegate);
}
;
var Lfrodo_core_Events$QueuedUpcomingEvent_2_classLit = createForClass(185);
function Events$UpdateSceneEvent(){
  Events$Event.call(this, true);
}

defineClass(136, 15, $intern_29, Events$UpdateSceneEvent);
_.enact = function enact_7(){
  $update_2(($clinit_FrodosQuest() , sceneRenderer), state_0);
}
;
var Lfrodo_core_Events$UpdateSceneEvent_2_classLit = createForClass(136);
function Events$WearRingEvent(){
  Events$Event.call(this, true);
}

defineClass(400, 15, $intern_29, Events$WearRingEvent);
_.enact = function enact_8(){
  ($clinit_FrodosQuest() , state_0).frodoWearingRing = true;
  $add_3(eventManager_0, new Events$UpdateSceneEvent);
  if (!state_0.frodoHasWornRing) {
    $add_3(eventManager_0, new Events$PauseEvent(true, 2));
    $add_3(eventManager_0, new Events$DisplayTextEvent('The world seems to turn dark to you as you disappear from the visible realm.'));
  }
  state_0.frodoHasWornRing = true;
}
;
var Lfrodo_core_Events$WearRingEvent_2_classLit = createForClass(400);
function $centered(this$static, target, text_0){
  var i, start_0, y_0;
  y_0 = 112;
  start_0 = 0;
  for (i = 0; i < text_0.length; i++) {
    if (text_0.charCodeAt(i) == 10) {
      $centeredSingleLine(this$static, target, text_0.substr(start_0, i - start_0), y_0);
      y_0 += 10;
      start_0 = i + 1;
    }
  }
  $centeredSingleLine(this$static, target, $subSequence_0(text_0, start_0, text_0.length), y_0);
}

function $centeredSingleLine(this$static, target, text_0, y_0){
  $singleLine(this$static, target, text_0, 160 - (text_0.length * 8 / 2 | 0), y_0 - 4);
}

function $drawChar(this$static, target, c, x_0, y_0){
  var index_0;
  index_0 = c - 32;
  index_0 >= 0 && index_0 < this$static.images.length && $draw_5(target, this$static.images[index_0], x_0, y_0);
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

defineClass(122, 1, {}, Font);
var BLACK, GREY, RAW, WHITE;
var Lfrodo_core_Font_2_classLit = createForClass(122);
function $animate_0(this$static, d){
  this$static.isInBoat?$animate(this$static, $opposite(d)):(this$static.imageFrame += 1 , this$static.image = $image(this$static, d, this$static.imageFrame / this$static.framesPerImage | 0));
}

function $checkPortal(this$static, x_0, y_0, scene, direction){
  var in_0, out;
  if ($contains_0($getEdge(scene.mask, direction), x_0, y_0)) {
    in_0 = ($clinit_SceneLinks() , new SceneLinks$Portal(scene, direction));
    out = $get_5(links_0, in_0);
    if (!!out && changeLocation($toLocation(out.scene))) {
      sendThroughPortal(this$static, in_0, out);
      this$static.image = $image(this$static, $opposite(out.direction_0), 0);
      return true;
    }
  }
  return false;
}

function $draw_1(this$static, surface){
  if (!this$static.visible || this$static.isInBoat)
    return;
  (!this$static.isWearingRing || this$static.isInside) && drawSpriteImage(surface, this$static.image, this$static.x_0, this$static.standingOnStool?this$static.y_0 - ($clinit_Sprites() , STOOL_0).height_0:this$static.y_0);
  this$static.isWearingRing && $draw_3(this$static.ringEffect, surface, this$static.image, this$static.x_0, this$static.standingOnStool?this$static.y_0 - ($clinit_Sprites() , STOOL_0).height_0:this$static.y_0);
}

function $init_1(this$static, largeTiles, smallTiles){
  this$static.images = largeTiles;
  this$static.image = largeTiles[0];
  this$static.largeTiles = largeTiles;
  this$static.smallTiles = smallTiles;
  $animate_0(this$static, this$static.prevDirection);
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
  $move(this$static, mask, dx, dy) && (this$static.isInBoat?$animate(this$static, $opposite(direction)):(this$static.imageFrame += 1 , this$static.image = $image(this$static, direction, this$static.imageFrame / this$static.framesPerImage | 0)));
}

function FrodoSprite(){
  this.controlState = new ControlState;
  this.prevDirection = ($clinit_Direction() , DOWN);
  this.ringEffect = new RingEffect;
}

defineClass(310, 25, $intern_25, FrodoSprite);
_.draw = function draw_10(surface, frame_0){
  $draw_1(this, surface);
}
;
_.move = function move_3(scene){
  var direction;
  $move_0(this.ringEffect);
  --this.drunkenness;
  direction = $outcome(this.controlState);
  if (!direction || this.moveFrame++ % this.framesPerMove != 0)
    return;
  if (direction != this.prevDirection) {
    this.staggerTimer = 0;
    this.prevDirection = direction;
    this.isInBoat?$animate(this, $opposite(direction)):(this.imageFrame += 1 , this.image = $image(this, direction, this.imageFrame / this.framesPerImage | 0));
  }
  if (!$checkPortal(this, this.x_0, this.y_0, scene, direction)) {
    this.drunkenness > 0?$moveDrunkenly(this, scene.mask, direction):$moveAndAnimate(this, scene.mask, direction);
    this.touchingSpecial = isNonWhite($pixelOnce_0(scene.mask, this.x_0, this.y_0));
    this.standingOnStool = $isCloseTo(this, ($clinit_Sprites() , STOOL_0), STOOL_0.radius);
  }
}
;
_.update = function update_4(state){
  var isInside;
  this.visible = $atOrAfter(state, ($clinit_Progress() , GAME_STARTED));
  if ($at_0(state, FRODO_IN_BOAT) && !this.isInBoat) {
    this.x_0 = ($clinit_Sprites() , BOAT_0).x_0;
    this.y_0 = BOAT_0.y_0;
  }
   else 
    !$at_0(state, FRODO_IN_BOAT) && this.isInBoat && (this.y_0 = 160);
  isInside = isInside_0(state.location_0);
  if (isInside != this.isInside) {
    this.isInside = isInside;
    this.images = this.isInside?this.largeTiles:this.smallTiles;
    $animate_0(this, this.prevDirection);
  }
  this.isInBoat = $at_0(state, FRODO_IN_BOAT);
  this.framesPerImage = this.isInBoat?8:4;
  this.isWearingRing = state.frodoWearingRing;
}
;
_.drunkenness = 0;
_.isInBoat = false;
_.isInside = true;
_.isWearingRing = false;
_.staggerTimer = 0;
_.standingOnStool = false;
_.touchingSpecial = false;
var Lfrodo_core_FrodoSprite_2_classLit = createForClass(310);
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
    $update_1(this$static);
  }
  paintTick = $tick_0(this$static.plat);
  this$static.paintClock.tick = paintTick;
  $emit(this$static.paint, this$static.paintClock);
}

defineClass(216, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass(216);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    maxVecs = usableMaxUniformVectors(gl);
    if (maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 14))
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

defineClass(217, 216, {});
var Lplayn_scene_SceneGame_2_classLit = createForClass(217);
function $clinit_FrodosQuest(){
  $clinit_FrodosQuest = emptyMethod;
  title_0 = new Title;
  prompt_1 = new Prompt;
  controlState_0 = ($clinit_Sprites() , FRODO_0).controlState;
  textDisplay_0 = new TextDisplay;
  eventManager_0 = new EventManager(controlState_0, textDisplay_0);
  state_0 = new State(eventManager_0);
  sceneRenderer = new SceneRenderer;
}

function $paintScene(this$static){
  if (this$static.frameBuffer >= 2)
    return;
  ++this$static.frameBuffer;
  $saveTx(this$static.surface.raw);
  $begin_0(this$static.surface.raw);
  $clear_1(this$static.surface.raw, 0, 0, 0);
  $scale_0(this$static.surface.raw, 3, 3);
  try {
    if (!title_0.done_0) {
      $draw_7(title_0, this$static.surface);
      return;
    }
    $draw_4(sceneRenderer, this$static.surface, this$static.frameCounter);
    $draw_6(textDisplay_0, this$static.surface);
    $draw_2(prompt_1, this$static.surface, $interactive(eventManager_0));
  }
   finally {
    $end_0(this$static.surface.raw);
    $restoreTx(this$static.surface.raw);
  }
}

function $update_1(this$static){
  this$static.frameBuffer = 0;
  if (!title_0.done_0) {
    $update_3(title_0);
    return;
  }
  ++this$static.frameCounter;
  $move_1(sceneRenderer);
  $tick(eventManager_0, state_0);
  if (debugRun) {
    ++this$static.frameCounter;
    $move_1(sceneRenderer);
    $tick(eventManager_0, state_0);
  }
}

function FrodosQuest(platform){
  $clinit_FrodosQuest();
  SceneGame.call(this, platform.raw);
  this.surface = new Surface(this.viewSurf);
  this.frameCounter = 0;
  this.frameBuffer = 0;
  this.keySlot = new FrodosQuest$1(this);
  this.mouseSlot = new FrodosQuest$2;
  this.surface.clipFactor = platform.raw.graphics.scale_0.factor;
  RAW = ($clinit_Image() , loadImage('widefont.png'));
  startLoading();
  $clinit_Sprites();
  FRODO_LARGE_IMG = loadImage('frodo_large.png');
  FRODO_SMALL_IMG = loadImage('frodo_small.png');
  GOAT_IMG = loadImage('goat.png');
  GOOSE_IMG = loadImage('goose.png');
  PIG_IMG = loadImage('pig.png');
  PIG2_IMG = loadImage('pig2.png');
  PONY_IMG = loadImage('pony.png');
  STOOL_IMG = loadImage('stool.png');
  CART_IMG = loadImage('cart.png');
  BOAT_IMG = loadImage('boat.png');
  SPLASH_IMG = loadImage('splash.png');
  TITLE_RAW = loadImage('title.png');
  ONE_RING_INTRO = loadMusic('one_ring_intro');
  CONCERNING_HOBBITS_INTRO = loadMusic('concerning_hobbits_intro');
  CONCERNING_HOBBITS = loadMusic('concerning_hobbits');
  $addConnection(this.plat.input_0.keyboardEvents, this.keySlot);
  $addConnection(this.plat.input_0.mouseEvents, this.mouseSlot);
}

function changeLocation(loc){
  $clinit_FrodosQuest();
  if ($changeLocation(state_0, loc)) {
    $update_2(sceneRenderer, state_0);
    $pause(controlState_0);
    return true;
  }
  return false;
}

defineClass(193, 217, {}, FrodosQuest);
_.frameBuffer = 0;
_.frameCounter = 0;
var controlState_0, debugMode = false, debugRun = false, eventManager_0, prompt_1, sceneRenderer, state_0, textDisplay_0, title_0;
var Lfrodo_core_FrodosQuest_2_classLit = createForClass(193);
defineClass(426, 1, {});
var Lreact_Slot_2_classLit = createForClass(426);
function $onEmit(this$static, e){
  var c, ke;
  if (instanceOf(e, 132)) {
    if (!($clinit_FrodosQuest() , title_0).done_0)
      return;
    if (!$interactive(eventManager_0))
      return;
    $softDismiss(eventManager_0);
    c = e.typedChar;
    $keyTyped(prompt_1, c) && $updateSuggestion(state_0, prompt_1);
  }
   else if (instanceOf(e, 108)) {
    ke = e;
    $update_0(($clinit_FrodosQuest() , controlState_0), ke.key_0, ke.down, this$static.this$01.frameCounter);
    ke.key_0 == ($clinit_Key() , ENTER) && (ke.down?$autocomplete(prompt_1):($userDismiss(eventManager_0) , prompt_1.input_0.string.length > 0 && $submitUserCommand(state_0, prompt_1) && $update_2(sceneRenderer, state_0) , $clear(prompt_1) , undefined));
    ke.key_0 == TAB && ke.down && $keyTyped(prompt_1, 9) && $updateSuggestion(state_0, prompt_1);
    (ke.key_0 == BACKSPACE || ke.key_0 == DELETE || ke.key_0 == BACK) && ke.down && $keyTyped(prompt_1, 8) && $updateSuggestion(state_0, prompt_1);
    ke.key_0 == F7 && ke.down && (debugMode = true);
    ke.key_0 == SHIFT && (ke.down?(debugRun = debugMode):(debugRun = false));
    ke.key_0 == ESCAPE && (title_0.done_0 || $skip(title_0));
  }
}

function FrodosQuest$1(this$0){
  this.this$01 = this$0;
}

defineClass(218, 426, {}, FrodosQuest$1);
_.onEmit = function onEmit(e){
  $onEmit(this, e);
}
;
var Lfrodo_core_FrodosQuest$1_2_classLit = createForClass(218);
function $onEmit_0(e){
  var x_0, y_0;
  if (!($clinit_FrodosQuest() , debugMode))
    return;
  if (!instanceOf(e, 109))
    return;
  if (!e.down)
    return;
  x_0 = (round_int(e.x_0) / 3 | 0) / 2 | 0;
  y_0 = (round_int(e.y_0) / 3 | 0) - 12;
  x_0 = x_0 / 1 | 0;
  x_0 *= 1;
  y_0 = y_0 / 1 | 0;
  y_0 *= 1;
  if ($contains_1(sceneRenderer.scene.mask, x_0, y_0)) {
    ($clinit_Sprites() , FRODO_0).x_0 = x_0;
    FRODO_0.y_0 = y_0;
    $pause(controlState_0);
  }
}

function FrodosQuest$2(){
}

defineClass(219, 426, {}, FrodosQuest$2);
_.onEmit = function onEmit_0(e){
  $onEmit_0(e);
}
;
var Lfrodo_core_FrodosQuest$2_2_classLit = createForClass(219);
defineClass(330, 92, $intern_25);
_.image_0 = function image_4(d, frame_0){
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
var Lfrodo_core_SidewaysAnimalSprite_2_classLit = createForClass(330);
function GooseSprite(){
  AnimalSprite.call(this);
  this.imageDirection = ($clinit_Direction() , RIGHT);
  this.x_0 = 53;
  this.y_0 = 150;
}

defineClass(331, 330, $intern_25, GooseSprite);
_.image_0 = function image_5(d, frame_0){
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
_.isFollowing = function isFollowing_1(){
  return false;
}
;
_.update = function update_5(state){
  this.visible = $at(state, ($clinit_Location() , TREE_BY_LAKE));
}
;
var Lfrodo_core_GooseSprite_2_classLit = createForClass(331);
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

function $grey(this$static){
  var alpha_0, c, grey, h, i, pixels, rgb, w;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  pixels = $getPixelsOnce(this$static);
  for (i = 0; i < pixels.length; i++) {
    alpha_0 = pixels[i] & $intern_26;
    rgb = pixels[i] & $intern_30;
    grey = (((rgb & 16711680) >> 16) + ((rgb & 65280) >> 8) + (rgb & 255)) / 3 | 0;
    pixels[i] = alpha_0 | round_int(grey * 0.25) << 16 | round_int(grey * 0.25) << 8 | grey;
  }
  c = $createRawCanvas(INSTANCE_0, w, h);
  $setRgb(c.image, w, h, pixels, w);
  return new Image_0(c.image);
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

function $setPixel(this$static, x_0, y_0, pixel){
  this$static.lazyPixels[y_0 * this$static.raw.pixelWidth + x_0] = pixel;
}

function $tile(this$static, xSize, ySize){
  var h, i, result, w, x_0, y_0, c;
  w = this$static.raw.pixelWidth / xSize | 0;
  h = this$static.raw.pixelHeight / ySize | 0;
  i = 0;
  result = initUnidimensionalArray(Lfrodo_core_Image_2_classLit, $intern_2, 58, w * h, 0, 1);
  for (y_0 = 0; y_0 < h; y_0++) {
    for (x_0 = 0; x_0 < w; x_0++) {
      result[i++] = (c = $createRawCanvas(INSTANCE_0, xSize, ySize) , $draw_8(c, $region(this$static.raw, x_0 * xSize, y_0 * ySize, xSize, ySize), 0, 0) , new Image_0(c.image));
    }
  }
  return result;
}

function $tileInto(this$static, numX, numY){
  var xSize, ySize;
  xSize = this$static.raw.pixelWidth / numX | 0;
  ySize = this$static.raw.pixelHeight / numY | 0;
  return $tile(this$static, xSize, ySize);
}

function Image_0(raw){
  $clinit_Image();
  this.raw = raw;
}

defineClass(58, 1, {58:1}, Image_0);
var ONE_PIXEL;
var Lfrodo_core_Image_2_classLit = createForClass(58);
var Lfrodo_core_Synonym_2_classLit = createForInterface();
function $clinit_Item(){
  $clinit_Item = emptyMethod;
  MONEY_POUCH = new Item('MONEY_POUCH', 0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['wallet', 'money', 'pouch', 'Your money pouch has a nice heavy feel with the weight of many coins.']));
  LETTER = new Item('LETTER', 1, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's a message for you! It says simply, that a friend is waiting to meet with you at the Green Dragon inn."]));
  MUG_OF_ALE = new Item('MUG_OF_ALE', 2, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['mug of beer', 'ale', 'beer', 'drink', 'A half-pint of ale from the Green Dragon, still refreshingly cool.']));
  FISHING_ROD = new Item('FISHING_ROD', 3, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['rod', 'A wooden fishing rod, including hook, line and sinker.']));
  STOOL = new Item('STOOL', 4, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['wooden stool', 'A wooden stool from the kitchen, for reaching high shelves.']));
  OLIVE_OIL = new Item('OLIVE_OIL', 5, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['oil', 'bottle', 'A bottle of olive oil from the kitchen.']));
  SKILLET = new Item('SKILLET', 6, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['pan', 'frying pan', 'Your favourite skillet from the kitchen. Pretty hefty.']));
  KNIFE = new Item('KNIFE', 7, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Your favourite knife from the kitchen. Looks like it would do about 1d4 damage.']));
  APPLES = new Item('APPLES', 8, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['apple', 'Several red juicy apples.']));
  POCKET_WATCH = new Item('POCKET_WATCH', 9, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['watch', "Bilbo's pocket watch is mostly brass, but it looks shiny and ornate, with a long chain. Attached to the watch is a small key, for winding it up."]));
  WATCH_KEY = new Item('WATCH_KEY', 10, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['key', "Attached to Bilbo's pocket watch is a golden watch key, for winding it up. Unlike a house key, it has no blade, so its notched shaft would fit into a circular keyhole."]));
  RING = new Item('RING', 11, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["Bilbo's ring is simple, small, but brightly shining gold. Twisting it in the light, you think you can see writing inside, but you cannot make it out."]));
}

function Item(enum$name, enum$ordinal, in_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.variants = getVariantsSkipDesc(this.name_0 != null?this.name_0:'' + this.ordinal, in_0);
  this.desc = in_0.length > 0?in_0[in_0.length - 1]:'';
}

function values_10(){
  $clinit_Item();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Item_2_classLit, 1), $intern_1, 29, 0, [MONEY_POUCH, LETTER, MUG_OF_ALE, FISHING_ROD, STOOL, OLIVE_OIL, SKILLET, KNIFE, APPLES, POCKET_WATCH, WATCH_KEY, RING]);
}

defineClass(29, 6, {29:1, 5:1, 3:1, 7:1, 6:1}, Item);
_.variants_0 = function variants_0(){
  return this.variants;
}
;
var APPLES, FISHING_ROD, KNIFE, LETTER, MONEY_POUCH, MUG_OF_ALE, OLIVE_OIL, POCKET_WATCH, RING, SKILLET, STOOL, WATCH_KEY;
var Lfrodo_core_Item_2_classLit = createForEnum(29, values_10);
function $clinit_Layer(){
  $clinit_Layer = emptyMethod;
  ADDED_LAYERS = new ArrayList;
}

function $drawGrey(this$static, surface, frame_0, alpha_0){
  if (this$static.show) {
    $setAlpha(surface.raw, alpha_0);
    this$static.animation.draw_0((!this$static.greyImage && (this$static.greyImage = $grey(this$static.image)) , this$static.greyImage), surface, frame_0);
    $setAlpha(surface.raw, 1);
  }
}

function $init_2(this$static, image){
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
  $add(ADDED_LAYERS, layer);
  return layer;
}

function addMaskLayer(scene){
  $clinit_Layer();
  var layers, mask;
  mask = addLayer(($clinit_Z() , FOREGROUND), ($clinit_Animations() , NONE), false);
  layers = $toArray(ADDED_LAYERS, initUnidimensionalArray(Lfrodo_core_Layer_2_classLit, $intern_31, 38, ADDED_LAYERS.array.length, 0, 1));
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
      throw toJs(new IllegalStateException_0('Manual zIndex has not been set, at ' + layerNum));
    }
    if (zIndex > layer.zIndex) {
      throw toJs(new IllegalStateException_0('Decreasing zIndex: ' + zIndex + ' -> ' + layer.zIndex + ', at ' + layerNum));
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
      if ((row[x_0] & $intern_26) != 0) {
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

defineClass(38, 1, {38:1}, Layer);
_.show = false;
_.zIndex = 0;
var ADDED_LAYERS;
var Lfrodo_core_Layer_2_classLit = createForClass(38);
function $clinit_Loader(){
  $clinit_Loader = emptyMethod;
  IMAGES = new HashMap;
  SOUNDS = new HashMap;
  MUSICS = new HashMap;
}

function imageText(){
  $clinit_Loader();
  var entry, image, image$iterator, loaded, outerIter, total;
  loaded = 0;
  total = 0;
  for (image$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(IMAGES)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); image$iterator.val$outerIter2.hasNext;) {
    image = (entry = $next_1(image$iterator.val$outerIter2) , entry.getValue());
    loaded += image.raw.state.result()?1:0;
    total += 1;
  }
  return 'Images: ' + loaded + ' of ' + total;
}

function isFinished(){
  $clinit_Loader();
  var entry, image, image$iterator, music, music$iterator, outerIter, outerIter0, outerIter1, sound, sound$iterator;
  if ($size(IMAGES) == 0) {
    return false;
  }
  for (image$iterator = (outerIter0 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(IMAGES)).this$01)).this$01) , new AbstractMap$2$1(outerIter0)); image$iterator.val$outerIter2.hasNext;) {
    image = (entry = $next_1(image$iterator.val$outerIter2) , entry.getValue());
    if (!image.raw.state.result()) {
      return false;
    }
  }
  for (sound$iterator = (outerIter1 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(SOUNDS)).this$01)).this$01) , new AbstractMap$2$1(outerIter1)); sound$iterator.val$outerIter2.hasNext;) {
    sound = (entry = $next_1(sound$iterator.val$outerIter2) , entry.getValue());
    if (!sound.state._result) {
      return false;
    }
  }
  for (music$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(MUSICS)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); music$iterator.val$outerIter2.hasNext;) {
    music = (entry = $next_1(music$iterator.val$outerIter2) , entry.getValue());
    if (!music.state._result) {
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

function loadMusic(name_0){
  $clinit_Loader();
  var music;
  music = $getStringValue(MUSICS, name_0);
  if (!music) {
    music = $getSound(INSTANCE_0.raw.assets, name_0);
    $putStringValue(MUSICS, name_0, music);
  }
  return music;
}

function musicText(){
  $clinit_Loader();
  var entry, loaded, music, music$iterator, outerIter, total;
  loaded = 0;
  total = 0;
  for (music$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(MUSICS)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); music$iterator.val$outerIter2.hasNext;) {
    music = (entry = $next_1(music$iterator.val$outerIter2) , entry.getValue());
    loaded += music.state._result?1:0;
    total += 1;
  }
  return 'Music: ' + loaded + ' of ' + total;
}

function soundText(){
  $clinit_Loader();
  var entry, loaded, outerIter, sound, sound$iterator, total;
  loaded = 0;
  total = 0;
  for (sound$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(SOUNDS)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); sound$iterator.val$outerIter2.hasNext;) {
    sound = (entry = $next_1(sound$iterator.val$outerIter2) , entry.getValue());
    loaded += sound.state._result?1:0;
    total += 1;
  }
  return 'Sounds: ' + loaded + ' of ' + total;
}

function stopAllMusic(){
  $clinit_Loader();
  var entry, music, music$iterator, outerIter;
  for (music$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(MUSICS)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); music$iterator.val$outerIter2.hasNext;) {
    music = (entry = $next_1(music$iterator.val$outerIter2) , entry.getValue());
    music.stop_0();
  }
}

var IMAGES, MUSICS, SOUNDS;
function $clinit_Location(){
  $clinit_Location = emptyMethod;
  FRODOS_ROOM = new Location_0('FRODOS_ROOM', 0);
  BAGEND_HALLWAY = new Location_0('BAGEND_HALLWAY', 1);
  BILBOS_ROOM = new Location_0('BILBOS_ROOM', 2);
  BAGEND_KITCHEN = new Location_0('BAGEND_KITCHEN', 3);
  BAGEND_HILL = new Location_0('BAGEND_HILL', 4);
  TREE_BY_LAKE = new Location_0('TREE_BY_LAKE', 5);
  HOUSE_BY_LAKE = new Location_0('HOUSE_BY_LAKE', 6);
  NEIGHBOR = new Location_0('NEIGHBOR', 7);
  HOBBITON = new Location_0('HOBBITON', 8);
  GREEN_DRAGON = new Location_0('GREEN_DRAGON', 9);
  APPLE_TREE_FIELD = new Location_0('APPLE_TREE_FIELD', 10);
  WEST_FIELD = new Location_0('WEST_FIELD', 11);
  EAST_FIELD = new Location_0('EAST_FIELD', 12);
  ALL_LOCATIONS = values_11();
}

function Location_0(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function isInside_0(location_0){
  $clinit_Location();
  switch (location_0.ordinal) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
      return true;
    default:return false;
  }
}

function values_11(){
  $clinit_Location();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Location_2_classLit, 1), $intern_1, 26, 0, [FRODOS_ROOM, BAGEND_HALLWAY, BILBOS_ROOM, BAGEND_KITCHEN, BAGEND_HILL, TREE_BY_LAKE, HOUSE_BY_LAKE, NEIGHBOR, HOBBITON, GREEN_DRAGON, APPLE_TREE_FIELD, WEST_FIELD, EAST_FIELD]);
}

defineClass(26, 6, {26:1, 3:1, 7:1, 6:1}, Location_0);
var ALL_LOCATIONS, APPLE_TREE_FIELD, BAGEND_HALLWAY, BAGEND_HILL, BAGEND_KITCHEN, BILBOS_ROOM, EAST_FIELD, FRODOS_ROOM, GREEN_DRAGON, HOBBITON, HOUSE_BY_LAKE, NEIGHBOR, TREE_BY_LAKE, WEST_FIELD;
var Lfrodo_core_Location_2_classLit = createForEnum(26, values_11);
function $contains_1(this$static, x_0, y_0){
  return $contains_0(this$static.mainBounds, x_0, y_0);
}

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
  for (x_0 = 0; x_0 < w; x_0++) {
    for (y_0 = 0; y_0 < h; y_0++) {
      pixel = image.lazyPixels[y_0 * image.raw.pixelWidth + x_0];
      pixel == -1?(x_0 == this.mainBounds.left_0?$update(this.leftEdge, x_0, y_0):x_0 < this.mainBounds.left_0 && $reset_0(this.leftEdge, x_0, y_0) , x_0 == this.mainBounds.right?$update(this.rightEdge, x_0, y_0):x_0 > this.mainBounds.right && $reset_0(this.rightEdge, x_0, y_0) , y_0 == this.mainBounds.top_0?$update(this.topEdge, x_0, y_0):y_0 < this.mainBounds.top_0 && $reset_0(this.topEdge, x_0, y_0) , y_0 == this.mainBounds.bottom?$update(this.bottomEdge, x_0, y_0):y_0 > this.mainBounds.bottom && $reset_0(this.bottomEdge, x_0, y_0) , $update(this.mainBounds, x_0, y_0) , undefined):(pixel & $intern_26) != 0 && $update(this.mainBounds, x_0, y_0);
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
      if ((image.lazyPixels[y_0 * image.raw.pixelWidth + x_0] & $intern_26) != 0) {
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
  return (pixel & $intern_26) != 0 || pixel == MASK_WAS_ON_CODE;
}

defineClass(393, 1, {}, Mask);
_.toString_0 = function toString_13(){
  return $ensureNamesAreInitialized(Lfrodo_core_Mask_2_classLit) , 'MaskBounds(' + (Lfrodo_core_Mask_2_classLit.typeName + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16)) + '\n  leftEdge=' + $toString_1(this.leftEdge) + '\n  rightEdge=' + $toString_1(this.rightEdge) + '\n  topEdge=' + $toString_1(this.topEdge) + '\n  bottomEdge=' + $toString_1(this.bottomEdge) + ')';
}
;
var MASK_WAS_ON_CODE = 11259375;
var Lfrodo_core_Mask_2_classLit = createForClass(393);
function $clinit_Noun(){
  $clinit_Noun = emptyMethod;
  NORTH = new Noun('NORTH', 0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['south', 'east', 'west', 'up', 'down', 'left', 'right', 'No description']));
  FRODO = new Noun('FRODO', 1, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['me', 'You are Frodo, a young hobbit of average height - three foot six. You have blue eyes, dark curly hair, a red vest and a green coat.']));
  BILBO = new Noun('BILBO', 2, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['hobbit', 'man', 'writer', 'No description']));
  BED = new Noun('BED', 3, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  DESK = new Noun('DESK', 4, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['On the desk are Bilbo\'s memoirs, titled "There and Back Again".']));
  WARDROBE = new Noun('WARDROBE', 5, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['cupboard', 'cabinet', "It's your wardrobe. It is closed."]));
  DRESSER = new Noun('DRESSER', 6, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['drawer', "Bilbo's dresser has a mirror and a drawer. In the drawer is a keyhole. Oddly, this has a simple circle shape."]));
  MIRROR = new Noun('MIRROR', 7, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The mirror is fixed to a dresser. In the mirror you can see your reflection.']));
  MEMOIRS = new Noun('MEMOIRS', 8, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['book', '"There and Back Again"\n"A Hobbit\'s Tale"\n\n(Then hundreds more pages of Bilbo\'s handwriting)']));
  WINDOW = new Noun('WINDOW', 9, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Out the window you can see the garden and the road.']));
  OLIVE_OIL_ON = new Noun('OLIVE_OIL_ON', 10, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['oil on', '']));
  PANTRY = new Noun('PANTRY', 11, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['larder', 'cupboard', 'shelves', 'A well-stocked pantry is perhaps the most important feature of a hobbit hole.']));
  FOOD = new Noun('FOOD', 12, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['meal', 'breakfast', 'lunch', 'dinner', '']));
  TABLE = new Noun('TABLE', 13, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A hobbit sized table.']));
  BENCH = new Noun('BENCH', 14, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The bench is for preparing food.']));
  FIRE = new Noun('FIRE', 15, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['fireplace', 'A small fire burns in the fireplace, for cooking and heating.']));
  TREE = new Noun('TREE', 16, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A weathered old oak tree grows on top of the hill.']));
  ROCK = new Noun('ROCK', 17, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['rocks', 'Nothing special. There are many small rocks around the shire.']));
  FLOWERS = new Noun('FLOWERS', 18, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The flowers smell lovely at this time of year.']));
  DOOR = new Noun('DOOR', 19, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A green door with a brass knob.']));
  ROAD = new Noun('ROAD', 20, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The road goes ever on and on, over rock and under tree...']));
  WALL = new Noun('WALL', 21, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Stone walls mark properties and keep animals from wandering.']));
  LAKE = new Noun('LAKE', 22, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['water', 'pond', 'Hobbiton boasts a small but shining blue lake, famous for its plentiful fish.']));
  REEDS = new Noun('REEDS', 23, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Just some reeds. Part of the scenery, really.']));
  ANDWISE = new Noun('ANDWISE', 24, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['hobbit', 'man', 'neighbour', 'neighbor', 'Andwise must be at least seventy. He has a mild temperament and is never in a hurry.']));
  FENCE = new Noun('FENCE', 25, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["It's just an old wooden fence."]));
  RIVER = new Noun('RIVER', 26, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['water', 'The river that runs through the middle of The Shire is simply called "The Water".']));
  HOUSE = new Noun('HOUSE', 27, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  GOOSE = new Noun('GOOSE', 28, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['duck', 'swan', 'A white goose is waddling along the shore of the lake.']));
  INN = new Noun('INN', 29, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['green dragon inn', 'green dragon', "The Green Dragon is one of Hobbiton's favourite establishments - in fact it is the only public ale house."]));
  MILL = new Noun('MILL', 30, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['water wheel', 'water mill', 'wheel', 'A water wheel turns with the flowing water, so that the mill can grind wheat.']));
  GANDALF = new Noun('GANDALF', 31, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['wizard', '']));
  ROSIE = new Noun('ROSIE', 32, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['barmaid', 'woman', 'Rosie Cotton is working the bar today. She is quiet by nature, and has long blonde hair in curly ringlets. Your poor friend Samwise is always tongue tied in her presence.']));
  REGULARS = new Noun('REGULARS', 33, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['customers', 'hobbits', 'At this hour of the morning, a few older hobbits gather here to meet their friends. Younger hobbits are out fishing and farming, they tend to arrive later in the day.']));
  HALFRED = new Noun('HALFRED', 34, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['hobbit', 'man', 'fisherman', 'Like most hobbits, Halfred grows most of his food on land, but he fishes whenever he can and he even has his own boat.']));
  BOAT = new Noun('BOAT', 35, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['rowboat', "Halfred's rowboat, just large enough for a hobbit."]));
  APPLE_TREE = new Noun('APPLE_TREE', 36, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The apple tree is large and tall and loaded with dozens of juicy apples.']));
  GOAT = new Noun('GOAT', 37, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Luckily the goat is tame, having known you for years.']));
  PIG = new Noun('PIG', 38, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['pigs', 'Two pigs are here, both quite young and playful.']));
  PONY = new Noun('PONY', 39, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['riddle', 'horse', 'Riddle the pony often makes deliveries around the village.']));
  BARREL_OF_ALE = new Noun('BARREL_OF_ALE', 40, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['barrel of beer', 'A barrel of ale on a little cart with wheels.']));
  CART = new Noun('CART', 41, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
}

function Noun(enum$name, enum$ordinal, in_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.variants = getVariantsSkipDesc(this.name_0 != null?this.name_0:'' + this.ordinal, in_0);
  this.desc = in_0.length > 0?in_0[in_0.length - 1]:'';
}

function values_12(){
  $clinit_Noun();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Noun_2_classLit, 1), $intern_1, 11, 0, [NORTH, FRODO, BILBO, BED, DESK, WARDROBE, DRESSER, MIRROR, MEMOIRS, WINDOW, OLIVE_OIL_ON, PANTRY, FOOD, TABLE, BENCH, FIRE, TREE, ROCK, FLOWERS, DOOR, ROAD, WALL, LAKE, REEDS, ANDWISE, FENCE, RIVER, HOUSE, GOOSE, INN, MILL, GANDALF, ROSIE, REGULARS, HALFRED, BOAT, APPLE_TREE, GOAT, PIG, PONY, BARREL_OF_ALE, CART]);
}

defineClass(11, 6, {11:1, 5:1, 3:1, 7:1, 6:1}, Noun);
_.variants_0 = function variants_1(){
  return this.variants;
}
;
var ANDWISE, APPLE_TREE, BARREL_OF_ALE, BED, BENCH, BILBO, BOAT, CART, DESK, DOOR, DRESSER, FENCE, FIRE, FLOWERS, FOOD, FRODO, GANDALF, GOAT, GOOSE, HALFRED, HOUSE, INN, LAKE, MEMOIRS, MILL, MIRROR, NORTH, OLIVE_OIL_ON, PANTRY, PIG, PONY, REEDS, REGULARS, RIVER, ROAD, ROCK, ROSIE, TABLE, TREE, WALL, WARDROBE, WINDOW;
var Lfrodo_core_Noun_2_classLit = createForEnum(11, values_12);
var FRAME_RATE = 30;
function isNonWhite(pixel){
  return (pixel & $intern_26) != 0 && pixel != -1;
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

defineClass(191, 1, {}, Platform);
var INSTANCE_0;
var Lfrodo_core_Platform_2_classLit = createForClass(191);
function Platform$1(this$0){
  this.this$01 = this$0;
}

defineClass(195, 1, {}, Platform$1);
_.create_0 = function create_6(pixelWidth, pixelHeight){
  return $createCanvas(this.this$01.raw.graphics, pixelWidth, pixelHeight);
}
;
var Lfrodo_core_Platform$1_2_classLit = createForClass(195);
function $clinit_Progress(){
  $clinit_Progress = emptyMethod;
  TITLE = new Progress('TITLE', 0);
  GAME_STARTED = new Progress('GAME_STARTED', 1);
  TALKED_TO_GANDALF = new Progress('TALKED_TO_GANDALF', 2);
  BILBO_FISHING = new Progress('BILBO_FISHING', 3);
  NEED_BARREL = new Progress('NEED_BARREL', 4);
  BOUGHT_BARREL = new Progress('BOUGHT_BARREL', 5);
  HITCHED_BARREL = new Progress('HITCHED_BARREL', 6);
  DELIVERED_BARREL = new Progress('DELIVERED_BARREL', 7);
  FRODO_IN_BOAT = new Progress('FRODO_IN_BOAT', 8);
  BILBO_IN_BOAT = new Progress('BILBO_IN_BOAT', 9);
}

function Progress(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_Progress();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Progress_2_classLit, 1), $intern_1, 33, 0, [TITLE, GAME_STARTED, TALKED_TO_GANDALF, BILBO_FISHING, NEED_BARREL, BOUGHT_BARREL, HITCHED_BARREL, DELIVERED_BARREL, FRODO_IN_BOAT, BILBO_IN_BOAT]);
}

defineClass(33, 6, {33:1, 3:1, 7:1, 6:1}, Progress);
var BILBO_FISHING, BILBO_IN_BOAT, BOUGHT_BARREL, DELIVERED_BARREL, FRODO_IN_BOAT, GAME_STARTED, HITCHED_BARREL, NEED_BARREL, TALKED_TO_GANDALF, TITLE;
var Lfrodo_core_Progress_2_classLit = createForEnum(33, values_13);
function $addSuffixAsSuggestion(this$static, suffix){
  if (suffix == ' \b NO_MATCH') {
    return;
  }
   else 
    suffix == ' \b EXACT_MATCH'?$add_5(this$static.suggestions, ''):$add_5(this$static.suggestions, suffix);
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
  $reset_1(this$static.suggestions.map_0);
}

function $draw_2(this$static, surface, interactive){
  var font, x_0;
  x_0 = 0;
  font = interactive?WHITE:GREY;
  30 < font.images.length && $draw_5(surface, font.images[30], 0, 214);
  x_0 += 8;
  if (!interactive)
    return;
  font = this$static.suggestion != null?WHITE:GREY;
  $singleLine(font, surface, this$static.input_0, x_0, 214);
  x_0 += this$static.input_0.string.length * 8;
  63 < font.images.length && $draw_5(surface, font.images[63], x_0, 214);
  this$static.suggestion != null && $singleLine(GREY, surface, this$static.suggestion, x_0, 214);
}

function $findOneSuggestion(this$static){
  var entry, outerIter, result, suggestion, suggestion$iterator;
  if ($size(this$static.suggestions.map_0) == 0)
    return null;
  if ($contains_4(this$static.suggestions, ''))
    return '';
  result = null;
  for (suggestion$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.suggestions.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); suggestion$iterator.val$outerIter2.hasNext;) {
    suggestion = (entry = $next_1(suggestion$iterator.val$outerIter2) , entry.getKey());
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
    $append_1(this$static.userCommand, c >= 65 && c <= 90?c - 65 + 97 & $intern_32:c);
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

defineClass(149, 1, {}, Prompt);
_.submit = false;
_.suggestion = null;
var Lfrodo_core_Prompt_2_classLit = createForClass(149);
function $draw_3(this$static, surface, image, sx, sy){
  var alpha_0, i;
  for (i = 0; i < SIZE; i++) {
    alpha_0 = 0.25 * (SIZE - i) / SIZE;
    $setAlpha(surface.raw, alpha_0);
    drawSpriteImage(surface, image, round_int(sx + this$static.x_0[i]), round_int(sy + this$static.y_0[i]));
  }
  $setAlpha(surface.raw, 1);
}

function $move_0(this$static){
  var dx, dy, i, variance;
  variance = $wnd.Math.random();
  this$static.t += ($wnd.Math.random() - 0.5) * variance;
  this$static.t = $wnd.Math.max(0, $wnd.Math.min(1, this$static.t));
  dx = 0.6 * $wnd.Math.cos(this$static.t * $intern_33);
  dy = -1.2 * $wnd.Math.sin(this$static.t * $intern_33);
  for (i = SIZE - 1; i > 0; i--) {
    this$static.x_0[i] = this$static.x_0[i - 1] + dx;
    this$static.y_0[i] = this$static.y_0[i - 1] + dy;
  }
  this$static.x_0[0] = dx;
  this$static.y_0[0] = dy;
}

function RingEffect(){
  this.x_0 = initUnidimensionalArray(D_classLit, $intern_2, 16, SIZE, 15, 1);
  this.y_0 = initUnidimensionalArray(D_classLit, $intern_2, 16, SIZE, 15, 1);
}

defineClass(360, 1, {}, RingEffect);
_.t = 0.5;
var SIZE = 10;
var Lfrodo_core_RingEffect_2_classLit = createForClass(360);
function $clinit_Scene(){
  $clinit_Scene = emptyMethod;
  FRODOS_ROOM_0 = new Scene$1;
  BAGEND_HALLWAY_0 = new Scene$2;
  BILBOS_ROOM_0 = new Scene$3;
  BAGEND_KITCHEN_0 = new Scene$4;
  BAGEND_HILL_0 = new Scene$5;
  TREE_BY_LAKE_0 = new Scene$6;
  HOUSE_BY_LAKE_0 = new Scene$7;
  NEIGHBOR_0 = new Scene$8;
  HOBBITON_0 = new Scene$9;
  GREEN_DRAGON_0 = new Scene$10;
  APPLE_TREE_FIELD_0 = new Scene$11;
  WEST_FIELD_0 = new Scene$12;
  EAST_FIELD_0 = new Scene$13;
  ALL_SCENES = values_14();
}

function $doFinishLoading(this$static){
  var i, images, isInside, shrinkX, shrinkY;
  images = $tile(this$static.raw, 160, 200);
  if (images.length != this$static.layers.length) {
    throw toJs(new IllegalArgumentException_0('Wrong number of layers - images=' + images.length + ' layers=' + this$static.layers.length));
  }
  for (i = 0; i < this$static.layers.length; i++) {
    $init_2(this$static.layers[i], images[i]);
  }
  this$static.onLayersLoaded();
  checkLayers(this$static.layers);
  isInside = isInside_0($toLocation(this$static));
  shrinkX = isInside?5:2;
  shrinkY = isInside?2:0;
  this$static.mask = shrink(images[images.length - 1], shrinkX, shrinkY);
}

function $toLocation(this$static){
  var location_0;
  location_0 = ($clinit_Location() , ALL_LOCATIONS)[this$static.ordinal];
  if ($equals(location_0.name_0 != null?location_0.name_0:'' + location_0.ordinal, this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal)) {
    return location_0;
  }
  throw toJs(new IllegalStateException_0('Index mismatch: ' + (this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal) + ' != ' + location_0));
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
  throw toJs(new IllegalStateException_0('Index mismatch: ' + scene + ' != ' + location_0));
}

function startLoading(){
  $clinit_Scene();
  var s, s$array, s$index, s$max;
  for (s$array = ALL_SCENES , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    s.raw = ($clinit_Image() , loadImage((s.name_0 != null?s.name_0:'' + s.ordinal).toLowerCase() + '.png'));
  }
}

function values_14(){
  $clinit_Scene();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 12, 0, [FRODOS_ROOM_0, BAGEND_HALLWAY_0, BILBOS_ROOM_0, BAGEND_KITCHEN_0, BAGEND_HILL_0, TREE_BY_LAKE_0, HOUSE_BY_LAKE_0, NEIGHBOR_0, HOBBITON_0, GREEN_DRAGON_0, APPLE_TREE_FIELD_0, WEST_FIELD_0, EAST_FIELD_0]);
}

defineClass(12, 6, $intern_34);
_.onLayersLoaded = function onLayersLoaded(){
}
;
_.update = function update_6(state){
}
;
var ALL_SCENES, APPLE_TREE_FIELD_0, BAGEND_HALLWAY_0, BAGEND_HILL_0, BAGEND_KITCHEN_0, BILBOS_ROOM_0, EAST_FIELD_0, FRODOS_ROOM_0, GREEN_DRAGON_0, HOBBITON_0, HOUSE_BY_LAKE_0, NEIGHBOR_0, TREE_BY_LAKE_0, WEST_FIELD_0;
var Lfrodo_core_Scene_2_classLit = createForEnum(12, values_14);
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

defineClass(271, 12, $intern_34, Scene$1);
_.onLayersLoaded = function onLayersLoaded_0(){
  this.wardrobe.zIndex = this.wdBackDoor.zIndex;
  this.moneyPouch.zIndex = this.wdBackDoor.zIndex;
}
;
_.update = function update_7(state){
  showIf(state.isWardrobeOpen, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.wdBackDoor, this.wdFrontDoor]));
  showIf(state.isWardrobeOpen && !$has(state, ($clinit_Item() , MONEY_POUCH)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.moneyPouch]));
}
;
var Lfrodo_core_Scene$1_2_classLit = createForEnum(271, null);
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

defineClass(280, 12, $intern_34, Scene$10);
_.onLayersLoaded = function onLayersLoaded_1(){
  this.gandalfArm.zIndex = this.gandalf.zIndex;
}
;
var Lfrodo_core_Scene$10_2_classLit = createForEnum(280, null);
function Scene$11(){
  Scene.call(this, 'APPLE_TREE_FIELD', 10);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(281, 12, $intern_34, Scene$11);
var Lfrodo_core_Scene$11_2_classLit = createForEnum(281, null);
function Scene$12(){
  Scene.call(this, 'WEST_FIELD', 11);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(FOREGROUND, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(282, 12, $intern_34, Scene$12);
var Lfrodo_core_Scene$12_2_classLit = createForEnum(282, null);
function Scene$13(){
  Scene.call(this, 'EAST_FIELD', 12);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(283, 12, $intern_34, Scene$13);
var Lfrodo_core_Scene$13_2_classLit = createForEnum(283, null);
function Scene$2(){
  Scene.call(this, 'BAGEND_HALLWAY', 1);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  this.letter = addLayer(BACKGROUND, NONE, true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(272, 12, $intern_34, Scene$2);
_.update = function update_8(state){
  showIf(!$has(state, ($clinit_Item() , LETTER)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.letter]));
}
;
var Lfrodo_core_Scene$2_2_classLit = createForEnum(272, null);
function Scene$3(){
  Scene.call(this, 'BILBOS_ROOM', 2);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  this.desk = addLayer(AUTO_0, NONE, true);
  this.bilbo = addLayer(MANUAL, BILBO_WRITING, true);
  this.quill = addLayer(MANUAL, QUILL, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(273, 12, $intern_34, Scene$3);
_.onLayersLoaded = function onLayersLoaded_2(){
  this.bilbo.zIndex = this.desk.zIndex;
  this.quill.zIndex = this.desk.zIndex;
}
;
_.update = function update_9(state){
  showIf($before(state, ($clinit_Progress() , BILBO_FISHING)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.bilbo, this.quill]));
}
;
var Lfrodo_core_Scene$3_2_classLit = createForEnum(273, null);
function Scene$4(){
  Scene.call(this, 'BAGEND_KITCHEN', 3);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(BACKGROUND, $withDuration(new Animations$CycleAnimation(1)), true);
  addLayer(BACKGROUND, $withDuration(new Animations$CycleAnimation(2)), true);
  this.bottle = addLayer(BACKGROUND, NONE, true);
  this.skillet = addLayer(BACKGROUND, NONE, true);
  this.knife = addLayer(BACKGROUND, NONE, true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(274, 12, $intern_34, Scene$4);
_.update = function update_10(state){
  showIf(!$has(state, ($clinit_Item() , OLIVE_OIL)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.bottle]));
  showIf(!$has(state, SKILLET), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.skillet]));
  showIf(!$has(state, KNIFE), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.knife]));
}
;
var Lfrodo_core_Scene$4_2_classLit = createForEnum(274, null);
function Scene$5(){
  Scene.call(this, 'BAGEND_HILL', 4);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(275, 12, $intern_34, Scene$5);
var Lfrodo_core_Scene$5_2_classLit = createForEnum(275, null);
function Scene$6(){
  Scene.call(this, 'TREE_BY_LAKE', 5);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(AUTO_0, NONE, true);
  this.bilbo = addLayer(AUTO_0, new Animations$BobAnimation(($clinit_Direction() , LEFT), 136), true);
  addMaskLayer(this);
}

defineClass(276, 12, $intern_34, Scene$6);
_.update = function update_11(state){
  showIf($atOrAfter(state, ($clinit_Progress() , BILBO_FISHING)) && $before(state, BILBO_IN_BOAT), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.bilbo]));
}
;
var Lfrodo_core_Scene$6_2_classLit = createForEnum(276, null);
function Scene$7(){
  Scene.call(this, 'HOUSE_BY_LAKE', 6);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(AUTO_0, NONE, true);
  this.rope = addLayer(AUTO_0, new Animations$BobAnimation(($clinit_Direction() , LEFT), 40), true);
  addLayer(AUTO_0, new Animations$BobAnimation(RIGHT, 60), true);
  addMaskLayer(this);
}

defineClass(277, 12, $intern_34, Scene$7);
_.update = function update_12(state){
  showIf($before(state, ($clinit_Progress() , FRODO_IN_BOAT)), stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Layer_2_classLit, 1), $intern_31, 38, 0, [this.rope]));
}
;
var Lfrodo_core_Scene$7_2_classLit = createForEnum(277, null);
function Scene$8(){
  Scene.call(this, 'NEIGHBOR', 7);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(BACKGROUND, PIPE_SMOKE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(278, 12, $intern_34, Scene$8);
var Lfrodo_core_Scene$8_2_classLit = createForEnum(278, null);
function Scene$9(){
  Scene.call(this, 'HOBBITON', 8);
  $clinit_Layer();
  addLayer(($clinit_Z() , BACKGROUND), ($clinit_Animations() , NONE), true);
  addLayer(BACKGROUND, $withDuration(new Animations$CycleAnimation(1)), true);
  addLayer(BACKGROUND, $withDuration(new Animations$CycleAnimation(2)), true);
  addLayer(AUTO_0, NONE, true);
  addLayer(FOREGROUND, NONE, true);
  addMaskLayer(this);
}

defineClass(279, 12, $intern_34, Scene$9);
var Lfrodo_core_Scene$9_2_classLit = createForEnum(279, null);
function $clinit_SceneLinks(){
  $clinit_SceneLinks = emptyMethod;
  links_0 = new HashMap;
  addVerticalLinks(stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 12, 0, [($clinit_Scene() , BAGEND_KITCHEN_0), BAGEND_HALLWAY_0, BAGEND_HILL_0]));
  addLink(new SceneLinks$Portal(FRODOS_ROOM_0, ($clinit_Direction() , DOWN)), new SceneLinks$Portal(BAGEND_HALLWAY_0, LEFT));
  addLink(new SceneLinks$Portal(BILBOS_ROOM_0, DOWN), new SceneLinks$Portal(BAGEND_HALLWAY_0, RIGHT));
  addHorizontalLinks(stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 12, 0, [APPLE_TREE_FIELD_0, WEST_FIELD_0, EAST_FIELD_0]));
  addHorizontalLinks(stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 12, 0, [HOUSE_BY_LAKE_0, TREE_BY_LAKE_0, BAGEND_HILL_0, NEIGHBOR_0, HOBBITON_0]));
  addVerticalLinks(stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 12, 0, [APPLE_TREE_FIELD_0, TREE_BY_LAKE_0]));
  addVerticalLinks(stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Scene_2_classLit, 1), $intern_1, 12, 0, [EAST_FIELD_0, NEIGHBOR_0]));
  addLink(new SceneLinks$Portal(HOBBITON_0, UP), new SceneLinks$Portal(GREEN_DRAGON_0, LEFT));
  addLink(new SceneLinks$Portal(HOBBITON_0, RIGHT), new SceneLinks$Portal(HOBBITON_0, RIGHT));
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

function sendThroughPortal(sprite, in_0, out){
  $clinit_SceneLinks();
  var entrance;
  entrance = $getEdge(out.scene.mask, out.direction_0);
  if (in_0.scene == ($clinit_Scene() , TREE_BY_LAKE_0) && out.scene == HOUSE_BY_LAKE_0) {
    sprite.x_0 = ((entrance.left_0 + entrance.right) / 4 | 0) * 2;
    sprite.y_0 = sprite.isInBoat?170:105;
    return;
  }
   else if (in_0.scene == HOUSE_BY_LAKE_0 && out.scene == TREE_BY_LAKE_0) {
    sprite.x_0 = ((entrance.left_0 + entrance.right) / 4 | 0) * 2;
    sprite.y_0 = sprite.isInBoat?190:120;
    return;
  }
  sprite.x_0 = ((entrance.left_0 + entrance.right) / 4 | 0) * 2;
  sprite.y_0 = (entrance.top_0 + entrance.bottom) / 2 | 0;
}

var links_0;
function SceneLinks$Portal(scene, direction){
  this.scene = scene;
  this.direction_0 = direction;
}

defineClass(27, 1, {27:1}, SceneLinks$Portal);
_.equals_0 = function equals_5(other){
  var that;
  if (!instanceOf(other, 27))
    return false;
  that = other;
  return this.scene == that.scene && this.direction_0 == that.direction_0;
}
;
_.hashCode_0 = function hashCode_7(){
  return getHashCode(this.scene) ^ getHashCode(this.direction_0);
}
;
var Lfrodo_core_SceneLinks$Portal_2_classLit = createForClass(27);
function $draw_4(this$static, surface, frame_0){
  var effectAlpha, layer, layer$array, layer$index, layer$max, spriteIndex, spriteZ;
  $saveTx(surface.raw);
  $translate(surface.raw);
  $scale_0(surface.raw, 2, 1);
  effectAlpha = $wnd.Math.min(1, (this$static.effectCounter / 5 | 0) / 10);
  spriteIndex = 0;
  spriteZ = $spriteZ(0);
  for (layer$array = this$static.scene.layers , layer$index = 0 , layer$max = layer$array.length; layer$index < layer$max; ++layer$index) {
    layer = layer$array[layer$index];
    while (spriteZ < layer.zIndex) {
      ($clinit_Sprites() , ALL)[spriteIndex].draw(surface, frame_0);
      spriteZ = $spriteZ(++spriteIndex);
    }
    layer.show && layer.animation.draw_0(layer.image, surface, frame_0);
    this$static.ringEffect && $drawGrey(layer, surface, frame_0, effectAlpha);
  }
  while (spriteZ < ($clinit_Z() , FOREGROUND).value_0) {
    ($clinit_Sprites() , ALL)[spriteIndex].draw(surface, frame_0);
    spriteZ = $spriteZ(++spriteIndex);
  }
  $restoreTx(surface.raw);
}

function $move_1(this$static){
  var sprite, sprite$array, sprite$index, sprite$max;
  ++this$static.effectCounter;
  $clinit_Sprites();
  --animalsFollowing;
  for (sprite$array = ALL , sprite$index = 0 , sprite$max = sprite$array.length; sprite$index < sprite$max; ++sprite$index) {
    sprite = sprite$array[sprite$index];
    sprite.visible && sprite.move(this$static.scene);
  }
  sort_0(ALL, SORT_BY_Y);
}

function $spriteZ(spriteIndex){
  if (spriteIndex >= ($clinit_Sprites() , ALL).length)
    return ($clinit_Z() , IN_FRONT_OF_FOREGROUND).value_0;
  return ALL[spriteIndex].y_0;
}

function $update_2(this$static, state){
  var ringEffect, sprite, sprite$array, sprite$index, sprite$max;
  this$static.scene = forLocation(state.location_0);
  this$static.scene.update(state);
  for (sprite$array = ($clinit_Sprites() , ALL) , sprite$index = 0 , sprite$max = sprite$array.length; sprite$index < sprite$max; ++sprite$index) {
    sprite = sprite$array[sprite$index];
    sprite.update(state);
  }
  ringEffect = state.frodoWearingRing && isInside_0(state.location_0);
  if (ringEffect != this$static.ringEffect) {
    this$static.ringEffect = ringEffect;
    this$static.effectCounter = 0;
  }
}

function SceneRenderer(){
}

defineClass(314, 1, {}, SceneRenderer);
_.effectCounter = 0;
_.ringEffect = false;
var Lfrodo_core_SceneRenderer_2_classLit = createForClass(314);
function $clinit_Sprites(){
  $clinit_Sprites = emptyMethod;
  FRODO_0 = new FrodoSprite;
  GOAT_0 = new AnimalSprite;
  PIG_0 = new AnimalSprite;
  PIG2 = new AnimalSprite;
  GOOSE_0 = new GooseSprite;
  PONY_0 = new PonySprite;
  STOOL_0 = new StoolSprite;
  CART_0 = new CartSprite;
  BOAT_0 = new BoatSprite;
  ALL = stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Sprite_2_classLit, 1), $intern_2, 25, 0, [FRODO_0, GOAT_0, PIG_0, PIG2, GOOSE_0, PONY_0, STOOL_0, CART_0, BOAT_0]);
  SORT_BY_Y = new Sprites$1;
}

var ALL, BOAT_0, BOAT_IMG, CART_0, CART_IMG, FRODO_0, FRODO_LARGE_IMG, FRODO_SMALL_IMG, GOAT_0, GOAT_IMG, GOOSE_0, GOOSE_IMG, PIG_0, PIG2, PIG2_IMG, PIG_IMG, PONY_0, PONY_IMG, SORT_BY_Y, SPLASH_IMG, STOOL_0, STOOL_IMG, animalsFollowing = 0;
function Sprites$1(){
}

defineClass(284, 1, {}, Sprites$1);
_.compare = function compare_1(a, b){
  return a.y_0 - b.y_0;
}
;
_.equals_0 = function equals_6(other){
  return this === other;
}
;
var Lfrodo_core_Sprites$1_2_classLit = createForClass(284);
function $clinit_State(){
  $clinit_State = emptyMethod;
  GOOSE_CONVO = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Good morning, Goose!"', '"Stay calm... there\'s a good goose."', '"Stop following me!"', '"Don\'t come near me!"', '"Leave me alone!"', '"Good goose. Good goose. No! I mean you no harm!"', '"If you hiss at me one more time I\'ll wring your neck!"']);
  PONY_CONVO = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Good morning, Riddle!"', '"You\'re a good pony."', '"Are you still hungry?"', '"Good boy, Riddle."', '"Can you come with me, Riddle?"']);
  GOAT_CONVO = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Good morning, Goat!"', '"Are you still hungry?"', '"Don\'t even thing about headbutting me."', '"Nice day, isn\'t it!"']);
  PIG_CONVO = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Good morning, Pig!"', '"That\'ll do, pig. That\'ll do."', '"Are you still hungry?"', '"Nice day, isn\'t it!"']);
}

function $addLocationEvent(this$static, location_0){
  $add_3(this$static.eventManager, new Events$LocationEvent(location_0, true, new Events$DisplayTextEvent("As you cross the river, an idea comes to you. Bilbo loves fishing. If you can organise a day of fishing for him, perhaps he'll leave his ring at home.")));
  return true;
}

function $at(this$static, location_0){
  return this$static.location_0 == location_0;
}

function $at_0(this$static, progress){
  return this$static.progress == progress;
}

function $atOrAfter(this$static, progress){
  return this$static.progress.ordinal >= progress.ordinal;
}

function $before(this$static, progress){
  return this$static.progress.ordinal < progress.ordinal;
}

function $changeLocation(this$static, location_0){
  if (location_0 == ($clinit_Location() , HOBBITON) && this$static.location_0 == HOBBITON) {
    if (!this$static.triedToLeave) {
      $clinit_Boolean();
      (this$static.triedToLeave = true)?true:false;
      $atOrAfter(this$static, ($clinit_Progress() , TALKED_TO_GANDALF))?$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['That way is the road out of Hobbiton. But you have important things to do in Hobbiton today.'])):$has(this$static, ($clinit_Item() , LETTER))?$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["That way is the road out of Hobbiton. But you're supposed to be meeting someone at the Green Dragon today."])):$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["That way is the road out of Hobbiton. For some reason - you don't know why - you feel you shouldn't leave Hobbiton today."]));
    }
    return false;
  }
  if (location_0 == GREEN_DRAGON && this$static.gandalfTalk == 0) {
    valueOf(this$static.gandalfTalk += 1);
    $add_3(this$static.eventManager, new Events$PauseEvent(true, 2));
    $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['To your surprise, you see your friend Gandalf the Grey sitting in the Green Dragon. Yesterday he said farewell and set off for the town of Bree. Why is he still here?']));
  }
  if (location_0 == BAGEND_HILL && $has(this$static, ($clinit_Item() , RING)) && !this$static.gameOver) {
    $clinit_Boolean();
    (this$static.gameOver = true)?true:false;
    $add_3(this$static.eventManager, new Events$PauseEvent(true, 2));
    $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You have completed the playable demo of Frodo's Quest - no more than this has been written. It should hopefully be ready by the end of 1989!"]));
  }
  this$static.location_0 = location_0;
  return true;
}

function $display(this$static, texts){
  var text_0, text$index, text$max;
  for (text$index = 0 , text$max = texts.length; text$index < text$max; ++text$index) {
    text_0 = texts[text$index];
    $add_3(this$static.eventManager, new Events$DisplayTextEvent(text_0));
  }
  return true;
}

function $displayInventory(this$static){
  var item_0, item$iterator, result;
  if (this$static.inventory.size_0 == 0)
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You are carrying nothing.']));
  result = new StringBuilder_0('You are carrying:\n');
  for (item$iterator = new EnumSet$EnumSetImpl$IteratorImpl(this$static.inventory); item$iterator.i < item$iterator.this$11.all.length;) {
    item_0 = $next_4(item$iterator);
    $append_7($append_7(result, item_0.variants[0]), '\n');
  }
  return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [result.string]));
}

function $has(this$static, item_0){
  return $containsEnum(this$static.inventory, item_0);
}

function $hitchBarrel(this$static){
  $progressForward(this$static, ($clinit_Progress() , HITCHED_BARREL));
  $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Before he can back out of it, you quickly hitch Riddle to the little cart.']));
  $add_3(this$static.eventManager, new Events$LocationEvent(($clinit_Location() , HOUSE_BY_LAKE), true, new Events$DeliveredBarrelEvent));
  return true;
}

function $maybeDebugCommand(this$static){
  var item_0, item$array, item$index, item$max, location_0, location$array, location$index, location$max, progress, progress$array, progress$index, progress$max;
  if ($typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['summon', 'boat'])) && $progressForward(this$static, ($clinit_Progress() , FRODO_IN_BOAT))) {
    ($clinit_Sprites() , BOAT_0).x_0 = FRODO_0.x_0;
    BOAT_0.y_0 = FRODO_0.y_0;
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [($clinit_Elvish() , '"' + ELVISH[round_int(ELVISH.length * $wnd.Math.random())] + '" you say.' + ' You have summoned: boat')]));
  }
  for (item$array = values_10() , item$index = 0 , item$max = item$array.length; item$index < item$max; ++item$index) {
    item_0 = item$array[item$index];
    if (!$containsEnum(this$static.inventory, item_0) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [($clinit_Verb() , SUMMON), item_0]))) {
      $clinit_Boolean();
      $add_4(this$static.inventory, item_0)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [($clinit_Elvish() , '"' + ELVISH[round_int(ELVISH.length * $wnd.Math.random())] + '" you say.' + ' You have summoned: ' + $replace((item_0.name_0 != null?item_0.name_0:'' + item_0.ordinal).toLowerCase(), '_', ' '))]));
    }
  }
  for (location$array = values_11() , location$index = 0 , location$max = location$array.length; location$index < location$max; ++location$index) {
    location_0 = location$array[location$index];
    if ($typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['warp', $replace((location_0.name_0 != null?location_0.name_0:'' + location_0.ordinal).toLowerCase(), '_', ' ')]))) {
      return $warp(this$static, location_0);
    }
  }
  for (progress$array = ($clinit_Progress() , stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Progress_2_classLit, 1), $intern_1, 33, 0, [TITLE, GAME_STARTED, TALKED_TO_GANDALF, BILBO_FISHING, NEED_BARREL, BOUGHT_BARREL, HITCHED_BARREL, DELIVERED_BARREL, FRODO_IN_BOAT, BILBO_IN_BOAT])) , progress$index = 0 , progress$max = progress$array.length; progress$index < progress$max; ++progress$index) {
    progress = progress$array[progress$index];
    if (this$static.progress.ordinal < progress.ordinal && $typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['progress', $replace((progress.name_0 != null?progress.name_0:'' + progress.ordinal).toLowerCase(), '_', ' ')]))) {
      $progressForward(this$static, progress);
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [($clinit_Elvish() , '"' + ELVISH[round_int(ELVISH.length * $wnd.Math.random())] + '" you say.')]));
    }
  }
  if ($typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['halfway']))) {
    $add_4(this$static.inventory, ($clinit_Item() , LETTER));
    $add_4(this$static.inventory, MONEY_POUCH);
    $add_4(this$static.inventory, STOOL);
    $add_4(this$static.inventory, FISHING_ROD);
    $add_4(this$static.inventory, APPLES);
    $add_4(this$static.inventory, MUG_OF_ALE);
    $progressForward(this$static, TALKED_TO_GANDALF);
    this$static.isWardrobeOpen = true;
    this$static.gandalfTalk = 4;
    this$static.stoolLocation = null;
    return $warp(this$static, ($clinit_Location() , BILBOS_ROOM));
  }
  return false;
}

function $maybeLookAtInventory(this$static){
  var item_0, item$array, item$index, item$max;
  for (item$array = values_10() , item$index = 0 , item$max = item$array.length; item$index < item$max; ++item$index) {
    item_0 = item$array[item$index];
    if ($containsEnum(this$static.inventory, item_0)) {
      if (item_0 == ($clinit_Item() , LETTER) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [($clinit_Verb() , READ), LETTER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [($clinit_Verb() , EXAMINE), item_0]))) {
        if (item_0 == POCKET_WATCH) {
          $clinit_Boolean();
          $add_4(this$static.inventory, WATCH_KEY)?true:false;
        }
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [item_0.desc]));
      }
    }
  }
  return false;
}

function $progressForward(this$static, progress){
  if (this$static.progress.ordinal < progress.ordinal) {
    this$static.progress = progress;
    return true;
  }
  return false;
}

function $promptInput(this$static){
  var askAboutBoat;
  if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [($clinit_Verb() , INVENTORY)])))
    return $displayInventory(this$static);
  if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, ($clinit_Noun() , FRODO)])))
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [FRODO.desc]));
  if ($typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['teaser'])))
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["Frodo's Quest\n\nComing 2019"]));
  if ($typed_2(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['help'])))
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Use arrow keys to move.\nTry typing: \n look \n look at [something] \n talk to [someone] \n take [something] \n inventory']));
  if (($clinit_FrodosQuest() , debugMode) && $maybeDebugCommand(this$static))
    return true;
  if ($maybeLookAtInventory(this$static))
    return true;
  if ($has(this$static, ($clinit_Item() , MUG_OF_ALE)) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [DRINK_0, MUG_OF_ALE]))) {
    ($clinit_Sprites() , FRODO_0).drunkenness = 500;
    $clinit_Boolean();
    $removeEnum(this$static.inventory, MUG_OF_ALE)?true:false;
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You drink the mug of ale. Refreshing, but quite strong.']));
  }
  if ($has(this$static, APPLES) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EAT, APPLES]))) {
    return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["Just one, then - don't ruin your appetite for lunch. The apple is crisp and sweet."]));
  }
  if ($has(this$static, RING)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [WEAR, RING])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [USE, RING]))) {
      if (this$static.frodoWearingRing)
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You are already wearing Bilbo's ring."]));
      $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You slip Bilbo's ring on your finger."]));
      $add_3(this$static.eventManager, new Events$WearRingEvent);
      return true;
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE_OFF, RING]))) {
      if (!this$static.frodoWearingRing)
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You're not wearing Bilbo's ring."]));
      $clinit_Boolean();
      (this$static.frodoWearingRing = false)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You take off Bilbo's ring."]));
    }
  }
  if ($at(this$static, ($clinit_Location() , FRODOS_ROOM))) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GO])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GO, NORTH])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Use the arrow keys to move.']));
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
      $add_4(this$static.inventory, MONEY_POUCH)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You pick up your money pouch.']));
    }
  }
  if ($at(this$static, BAGEND_HALLWAY)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is the hallway at Bag End. Your room is to the left, Bilbo's is to the right. At the back is the kitchen. " + (!$has(this$static, LETTER)?'On the ground is a letter, just beside your door.':'')]));
    if (!$has(this$static, LETTER) && ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, LETTER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [READ, LETTER])))) {
      $clinit_Boolean();
      $add_4(this$static.inventory, LETTER)?true:false;
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
    if ($before(this$static, ($clinit_Progress() , BILBO_FISHING))) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is Bilbo's room. Bilbo is sitting at his desk, working on his memoirs. A window looks out into the garden."]));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BILBO])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo is over one hundred, but still in great health. He is working on his memoirs, telling of all the adventures he had in his younger days.']));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, BILBO]))) {
        return $before(this$static, TALKED_TO_GANDALF)?$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Good morning!" says Bilbo. "You can fix yourself some breakfast. I\'m writing the chapter in the cave with the goblins and I may just keep writing until I can see the sun out the other side."'])):$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"It\'s such a warm spring day! When did you last go fishing?" you ask.', '"Not since I broke my fishing rod, I\'m afraid" says Bilbo.']));
      }
      if ($has(this$static, FISHING_ROD)) {
        if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, FISHING_ROD, BILBO])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, FISHING_ROD, TO, BILBO])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, BILBO, FISHING_ROD]))) {
          $clinit_Boolean();
          $removeEnum(this$static.inventory, FISHING_ROD)?true:false;
          this$static.progress = BILBO_FISHING;
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"I was talking to Halfred and he lent me this fishing rod. Do you want to go fishing?" you ask.', 'Bilbo looks out the window. "It would be a shame to waste this sunshine," he says. "I\'ll catch us something for dinner!"', "He takes the fishing rod and sets off for the lake. You don't know if he has his ring with him."]));
        }
      }
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [OPEN, WARDROBE])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo will let you know if he wants you to go through his wardrobe.']));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [OPEN, DRESSER])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo will let you know if he wants you to go through his dresser.']));
    }
     else {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is Bilbo's room. His memoirs are sitting on his desk. A window looks out into the garden."]));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [OPEN, WARDROBE])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You open Bilbo's wardrobe and look through his clothes, but you don't find anything interesting."]));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [OPEN, DRESSER])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The dresser is locked. Bilbo sometimes keeps the ring in there. He must have the key with him.']));
      if ($has(this$static, WATCH_KEY)) {
        if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [USE, WATCH_KEY, ON, DRESSER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [USE, WATCH_KEY, DRESSER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [UNLOCK, DRESSER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [UNLOCK, DRESSER, WITH, WATCH_KEY]))) {
          if ($has(this$static, RING)) {
            return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You already found Bilbo's ring in the dresser."]));
          }
           else {
            $clinit_Boolean();
            $add_4(this$static.inventory, RING)?true:false;
            return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You unlock the dresser and open it. Without even having to search, you immediately see Bilbo's ring, hanging on a loop of string. You put it in your pocket."]));
          }
        }
      }
      if ($has(this$static, POCKET_WATCH)) {
        if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [USE, POCKET_WATCH, ON, DRESSER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [USE, POCKET_WATCH, DRESSER])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [UNLOCK, DRESSER, WITH, POCKET_WATCH]))) {
          if ($has(this$static, RING)) {
            return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You already found Bilbo's ring in the dresser."]));
          }
           else {
            $clinit_Boolean();
            $add_4(this$static.inventory, WATCH_KEY)?true:false;
            return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Attached to the watch is a small key, for winding it up.']));
          }
        }
      }
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [READ, MEMOIRS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [MEMOIRS.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, MEMOIRS])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo would probably prefer you left those as they are.']));
  }
  if ($at(this$static, BAGEND_KITCHEN)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["This is the kitchen at Bag End. It is well stocked as a hobbit's should be - the pantry is filled with food." + (this$static.stoolLocation == BAGEND_KITCHEN?' Next to the pantry is a wooden stool, for reaching the top shelf.':'') + (!$has(this$static, OLIVE_OIL)?' A bottle of olive oil stands on the bench.':'')]));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, STOOL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Next to the pantry is a wooden stool, for reaching the top shelf.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BENCH]))) {
      return $has(this$static, OLIVE_OIL)?$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [BENCH.desc])):$display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A bottle of olive oil stands on the bench.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, OLIVE_OIL])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A bottle of olive oil stands on the bench.']));
    if (this$static.stoolLocation == BAGEND_KITCHEN && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, STOOL]))) {
      $clinit_Boolean();
      $add_4(this$static.inventory, STOOL)?true:false;
      this$static.stoolLocation = null;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You take the wooden stool with you, for a hobbit never knows when he might need some extra height.']));
    }
    if (!$has(this$static, OLIVE_OIL) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, OLIVE_OIL]))) {
      $clinit_Boolean();
      $add_4(this$static.inventory, OLIVE_OIL)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You take the bottle of olive oil.']));
    }
    if (!$has(this$static, SKILLET) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, SKILLET]))) {
      $clinit_Boolean();
      $add_4(this$static.inventory, SKILLET)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You take your favourite skillet.']));
    }
    if (!$has(this$static, KNIFE) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, KNIFE]))) {
      $clinit_Boolean();
      $add_4(this$static.inventory, KNIFE)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You take your favourite knife.']));
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
  if ($at(this$static, TREE_BY_LAKE)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["You are on the shore of Hobbiton's lake."]));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A huge elm tree overlooks the lake.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, LAKE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [LAKE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [CLIMB_UP, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Climbing trees is a bit tricky for hobbits. The branches are far apart and your arms are not long.']));
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
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, GOOSE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [randomOneOf(GOOSE_CONVO)]));
    if ($atOrAfter(this$static, ($clinit_Progress() , BILBO_FISHING)) && $before(this$static, BILBO_IN_BOAT)) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BILBO])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Bilbo is here fishing with the fishing rod you lent him.']));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, BILBO])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Are they biting, Bilbo?" you ask. "Not so far, I\'m afraid. I haven\'t seen many fish here in the shallows. That\'s why Halfred has a boat I suppose."']));
    }
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
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A bridge crosses the river and leads into the Green Dragon inn, which is the centre of Hobbiton.' + ($at_0(this$static, ($clinit_Progress() , BOUGHT_BARREL))?' A barrel of ale stands here on a little cart.':'')]));
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
    if ($at_0(this$static, ($clinit_Progress() , BOUGHT_BARREL))) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, BARREL_OF_ALE])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, CART])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['A barrel of ale stands here on a litte cart.']));
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, BARREL_OF_ALE])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, CART])))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You tug on the barrel. Even on wheels, you can barely shift it an inch.']));
    }
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
      $add_4(this$static.inventory, MUG_OF_ALE)?true:false;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Rosie pours and hands you a mug of ale.']));
    }
    if ($atOrAfter(this$static, ($clinit_Progress() , NEED_BARREL)) && ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [BUY, BARREL_OF_ALE])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [BUY_A, BARREL_OF_ALE])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [BUY_AN, BARREL_OF_ALE])))) {
      if ($atOrAfter(this$static, BOUGHT_BARREL))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You already bought a whole barrel of ale today.']));
      this$static.progress = BOUGHT_BARREL;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Rosie looks surprised, but sells you a whole barrel of ale at quite a reasonable price. "I\'ll bring it up from the cellar and leave it outside for you," she says.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, GANDALF]))) {
      valueOf(this$static.gandalfTalk += 1);
      switch (this$static.gandalfTalk) {
        case 2:
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Frodo my lad! I see you got my note. Come, get yourself something to drink, then come and listen to what I have to say."']));
        case 3:
          $progressForward(this$static, TALKED_TO_GANDALF);
          $addLocationEvent(this$static, HOBBITON);
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Gandalf, I thought you left the Shire yesterday?" you ask.', '"I did give that impression, but I stayed the night here. I had a good reason for it. Tell me, have you ever seen Bilbo without his ring?"', '"That little golden ring? He never has it on his finger, but I think he normally carries it in his pocket," you say.', '"Exactly. There\'s something odd about that ring, and I think it makes Bilbo odd too. I want to have a closer look at it, but Bilbo won\'t let me. And now whenever he sees me, he guards it jealously."', '"Now that he thinks I\'m gone, try and get a hold of it and bring it here. Oh and you should be aware - it is an invisibility ring."']));
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
  if ($at(this$static, HOUSE_BY_LAKE)) {
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
    if ($has(this$static, MUG_OF_ALE)) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, MUG_OF_ALE, HALFRED])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, MUG_OF_ALE, TO, HALFRED])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, HALFRED, MUG_OF_ALE]))) {
        if ($has(this$static, FISHING_ROD)) {
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Another one? You are too kind. Cheers!"']));
        }
         else {
          $clinit_Boolean();
          $removeEnum(this$static.inventory, MUG_OF_ALE)?true:false;
          $add_4(this$static.inventory, FISHING_ROD)?true:false;
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Oh! That\'s very kind of you, lad. Here, you can borrow my spare fishing rod."', 'He gives you a fishing rod.']));
        }
      }
    }
    askAboutBoat = false;
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, HALFRED]))) {
      if ($atOrAfter(this$static, ($clinit_Progress() , FRODO_IN_BOAT)))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"All well Mister Frodo?" asks Halfred. "Very well Halfred, many thanks!" you reply.']));
      if ($atOrAfter(this$static, BILBO_FISHING)) {
        askAboutBoat = true;
      }
       else {
        if ($atOrAfter(this$static, TALKED_TO_GANDALF) && !$has(this$static, FISHING_ROD)) {
          return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Halfred", you ask, "could I borrow a fishing rod?"', '"I have a spare but I don\'t like to lend it out, it\'s always getting broken. But for you, Mister Frodo, you can have it if you bring me a mug of ale."']));
        }
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Are they biting, Halfred?" you ask. "None yet this morning, Frodo!"']));
      }
    }
    if ($before(this$static, ($clinit_Progress() , FRODO_IN_BOAT)) && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, BOAT])) || askAboutBoat) {
      if ($atOrAfter(this$static, BILBO_FISHING)) {
        $progressForward(this$static, NEED_BARREL);
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Halfred", you ask, "could I - well, can Bilbo - borrow your boat?"', '"Mister Frodo, I owe you one since our last misadventure - but I don\'t want people to think this boat is for hire." says Halfred.', '"Tell you what - you can borrow the boat if you bring me a barrel of ale."']));
      }
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['"Mind if I borrow your boat, Halfred?" you ask.', '"Where are you off to?"', '"Just... around," you answer.', '"Come back tomorrow and you can take it across the lake on an errand for me."']));
    }
  }
  if ($at(this$static, APPLE_TREE_FIELD)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['In the middle of a field is a great big apple tree.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TREE])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, APPLE_TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [APPLE_TREE.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [CLIMB_UP, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The branches of the apple tree are much too high for you to reach.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, APPLES])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The apples are already ripe and look juicy and sweet.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, APPLES]))) {
      if ($has(this$static, APPLES))
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You already have plenty of apples.']));
      if (($clinit_Sprites() , FRODO_0).standingOnStool) {
        $clinit_Boolean();
        $add_4(this$static.inventory, APPLES)?true:false;
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['From here, you can reach a dozen or so red, juicy, low-hanging apples. So you take them all.']));
      }
      if (this$static.stoolLocation == APPLE_TREE_FIELD)
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Maybe if you were standing on the stool.']));
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The tree is tall and even the lowest hanging apples are out of reach.']));
    }
    if (!this$static.stoolLocation) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [USE, STOOL])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [PUT_DOWN, STOOL])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [CLIMB_ON, STOOL]))) {
        $clinit_Boolean();
        $removeEnum(this$static.inventory, STOOL)?true:false;
        return this$static.stoolLocation = APPLE_TREE_FIELD , true;
      }
    }
    if (this$static.stoolLocation == APPLE_TREE_FIELD && $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, STOOL]))) {
      $clinit_Boolean();
      $add_4(this$static.inventory, STOOL)?true:false;
      this$static.stoolLocation = null;
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['You take the wooden stool with you, for a hobbit never knows when he might need some extra height.']));
    }
  }
  if ($at(this$static, WEST_FIELD)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['In this field is a goat and two pigs.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['There are several trees, but none that stand out.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, GOAT])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [GOAT.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, GOAT])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [randomOneOf(GOAT_CONVO)]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, PIG])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [PIG.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, PIG])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [randomOneOf(PIG_CONVO)]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, GOAT])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["A bit on the heavy side... and you don't even really want a goat."]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, PIG])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ["A bit on the heavy side... and you don't even really want a pig."]));
    if ($has(this$static, APPLES)) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, APPLES, PIG])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, APPLES, TO, PIG])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, PIG, APPLES]))) {
        $clinit_Sprites();
        animalsFollowing = 500;
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The pig greedily munches on an apple. Now the animals are all following you, hoping for apples.']));
      }
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, APPLES, GOAT])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, APPLES, TO, GOAT])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, GOAT, APPLES]))) {
        $clinit_Sprites();
        animalsFollowing = 500;
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['The goat greedily munches on an apple. Now the animals are all following you, hoping for apples.']));
      }
    }
  }
  if ($at(this$static, EAST_FIELD)) {
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [LOOK]))) {
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['This is the field of Riddle, the pony.']));
    }
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, TREE])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['There are several trees, but none that stand out.']));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [EXAMINE, PONY])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [PONY.desc]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TALK_TO, PONY])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, [randomOneOf(PONY_CONVO)]));
    if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [TAKE, PONY])))
      return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Riddle is much too heavy to carry! And much stronger than you are.']));
    if ($has(this$static, APPLES)) {
      if ($typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, APPLES, PONY])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, APPLES, TO, PONY])) || $typed_1(this$static, stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Synonym_2_classLit, 1), $intern_2, 5, 0, [GIVE, PONY, APPLES]))) {
        valueOf(this$static.ponyMeal += 1);
        return $display(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Riddle the pony eats the whole apple from your hand. He starts to follow you, hoping for more.']));
      }
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
  $reset_1(prompt_0.suggestions.map_0);
  $promptInput(this$static);
  prompt_0.suggestion = $findOneSuggestion(prompt_0);
  this$static.prompt_0 = null;
}

function $warp(this$static, location_0){
  $ensureInBounds(($clinit_Sprites() , FRODO_0), forLocation(location_0));
  $changeLocation(this$static, location_0);
  return true;
}

function State(eventManager){
  var all;
  $clinit_State();
  this.progress = ($clinit_Progress() , TITLE);
  this.location_0 = ($clinit_Location() , BAGEND_HILL);
  this.stoolLocation = BAGEND_KITCHEN;
  this.inventory = (all = $getEnumConstants(Lfrodo_core_Item_2_classLit) , new EnumSet$EnumSetImpl(all, createFrom(all, all.length)));
  this.prompt_0 = new Prompt;
  this.eventManager = eventManager;
}

function randomOneOf(options){
  var selected;
  selected = round_int(options.length * $wnd.Math.random());
  return options[selected];
}

defineClass(313, 1, {}, State);
_.frodoHasWornRing = false;
_.frodoWearingRing = false;
_.gameOver = false;
_.gandalfTalk = 0;
_.isWardrobeOpen = false;
_.meal = 0;
_.ponyMeal = 0;
_.triedToLeave = false;
var GOAT_CONVO, GOOSE_CONVO, PIG_CONVO, PONY_CONVO;
var Lfrodo_core_State_2_classLit = createForClass(313);
defineClass(332, 25, $intern_25);
_.move = function move_4(scene){
}
;
_.update = function update_13(state){
}
;
var Lfrodo_core_StaticSprite_2_classLit = createForClass(332);
function $init_3(this$static, sizes){
  this$static.insideImage = sizes[0];
  this$static.outsideImage = sizes[1];
  $place(this$static, ($clinit_Location() , BAGEND_KITCHEN));
}

function $place(this$static, location_0){
  if (isInside_0(location_0)) {
    this$static.image = this$static.insideImage;
    this$static.height_0 = 20;
    this$static.radius = 4;
  }
   else {
    this$static.image = this$static.outsideImage;
    this$static.height_0 = 8;
    this$static.radius = 3;
  }
  switch (location_0.ordinal) {
    case 3:
      this$static.x_0 = 53;
      this$static.y_0 = 133;
      break;
    case 10:
      this$static.x_0 = 64;
      this$static.y_0 = 166;
  }
}

function StoolSprite(){
}

defineClass(333, 332, $intern_25, StoolSprite);
_.draw = function draw_11(surface, frame_0){
  $draw(this, surface);
  this.visible && ($clinit_Sprites() , FRODO_0).standingOnStool && $draw_1(($clinit_Sprites() , FRODO_0), surface);
}
;
_.update = function update_14(state){
  this.visible = state.location_0 == state.stoolLocation;
  $place(this, state.location_0);
}
;
_.height_0 = 0;
_.radius = 0;
var Lfrodo_core_StoolSprite_2_classLit = createForClass(333);
function $draw_5(this$static, image, x_0, y_0){
  $pixelate(INSTANCE_0);
  $draw_10(this$static.raw, $texture(image.raw), x_0, y_0);
  $pixelate(INSTANCE_0);
}

function $fillRect_0(this$static, color_0){
  $setFillColor(this$static.raw, color_0);
  $pixelate(INSTANCE_0);
  $fillRect_1(this$static.raw);
  $pixelate(INSTANCE_0);
}

function $startClipped(this$static, x_0, w){
  $startClipped_0(this$static.raw, round_int(x_0 * this$static.clipFactor * 3), round_int(w * this$static.clipFactor * 3), round_int(224 * this$static.clipFactor * 3));
}

function Surface(raw){
  this.raw = raw;
}

defineClass(270, 1, {}, Surface);
_.clipFactor = 1;
var Lfrodo_core_Surface_2_classLit = createForClass(270);
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

function $draw_6(this$static, surface){
  !!this$static.snapshot && $draw_5(surface, this$static.snapshot, 32, 20);
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
      throw toJs(new IllegalStateException_0('Cannot layout text - too few spaces:\n' + text_0));
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
  $updateTexture(this$static.snapshot.raw);
}

function TextDisplay(){
  this.canvas = new Canvas_0(INSTANCE_0.canvasCreator.create_0(256, 184));
}

defineClass(311, 1, {}, TextDisplay);
_.snapshot = null;
var Lfrodo_core_TextDisplay_2_classLit = createForClass(311);
function $black(alpha_0){
  alpha_0 = 0 > (255 < alpha_0?255:alpha_0)?0:255 < alpha_0?255:alpha_0;
  return alpha_0 << 24;
}

function $draw_7(this$static, surface){
  var ms;
  if (!this$static.fontLoaded) {
    $clear_1(surface.raw, 1, 1, 1);
    return;
  }
  $clear_1(surface.raw, 0, 0, 0);
  if (!this$static.loadingFinished) {
    $centered(WHITE, surface, ($clinit_Loader() , imageText() + '\n\n' + soundText() + '\n\n' + musicText()));
    return;
  }
  ms = $tick_0(INSTANCE_0.raw) - this$static.startMs;
  $drawLayers(surface, ms);
  ms > 13000 && $centeredSingleLine(WHITE, surface, '(C) 1987 by Olsen On-Line, Inc', 214);
  $fillRect_0(surface, $fadeOut(ms));
}

function $drawLayers(surface, ms){
  var layer, layer$array, layer$index, layer$max, layerId;
  $saveTx(surface.raw);
  $translate(surface.raw);
  $scale_0(surface.raw, 2, 1);
  layerId = 0;
  for (layer$array = LAYERS , layer$index = 0 , layer$max = layer$array.length; layer$index < layer$max; ++layer$index) {
    layer = layer$array[layer$index];
    $draw_5(surface, layer, 0, 0);
    $fillRect_0(surface, $fade(layerId++, ms));
  }
  $restoreTx(surface.raw);
}

function $fade(layerId, ms){
  var alpha_0;
  ms -= 5000 * (2 - layerId);
  alpha_0 = 255 - ((ms / 200 | 0) * 200 * 255 / 2000 | 0);
  return $black(alpha_0);
}

function $fadeOut(ms){
  var alpha_0;
  ms -= 18000;
  alpha_0 = (ms / 200 | 0) * 200 * 255 / 2000 | 0;
  return $black(alpha_0);
}

function $skip(this$static){
  var eventManager;
  if (this$static.loadingFinished && !this$static.done_0) {
    ONE_RING_INTRO.stop_0();
    $update_2(($clinit_FrodosQuest() , sceneRenderer), state_0);
    stopAllMusic();
    eventManager = eventManager_0;
    $add_3(eventManager, new Events$ProgressEvent(($clinit_Progress() , GAME_STARTED)));
    $add_3(eventManager, new Events$CutSceneEvent(($clinit_Location() , FRODOS_ROOM)));
    $add_3(eventManager, new Events$DisplayTextEvent('You have just gotten out of bed. You hear Bilbo call from the hallway "Frodo! There\'s a letter for you!"'));
    $add_3(eventManager, new Events$QueuedUpcomingEvent(new Events$LocationEvent(BAGEND_HILL, false, new Events$MusicEvent(CONCERNING_HOBBITS))));
    this$static.done_0 = true;
  }
}

function $update_3(this$static){
  var eventManager;
  if (!this$static.fontLoaded && !!RAW && !!RAW.raw.state.result()) {
    WHITE = new Font($tile(RAW, 8, 8));
    GREY = new Font($tile($recolor(RAW, -5592406), 8, 8));
    BLACK = new Font($tile($recolor(RAW, $intern_26), 8, 8));
    this$static.fontLoaded = true;
  }
   else if (this$static.fontLoaded && !this$static.loadingFinished && isFinished()) {
    finishLoading();
    $clinit_Sprites();
    $init_1(FRODO_0, $tileInto(FRODO_LARGE_IMG, 4, 4), $tileInto(FRODO_SMALL_IMG, 4, 4));
    $init(GOAT_0, $tileInto(GOAT_IMG, 4, 4));
    $init(PIG_0, $tileInto(PIG_IMG, 4, 4));
    $init(PIG2, $tileInto(PIG2_IMG, 4, 4));
    $init(GOOSE_0, $tileInto(GOOSE_IMG, 4, 2));
    $init(PONY_0, $tileInto(PONY_IMG, 6, 4));
    $init_3(STOOL_0, $tileInto(STOOL_IMG, 2, 1));
    $init(CART_0, $tileInto(CART_IMG, 2, 2));
    $init_0(BOAT_0, $tileInto(BOAT_IMG, 2, 4), $tileInto(SPLASH_IMG, 5, 1));
    GOAT_0.x_0 = 40;
    PIG_0.x_0 = 120;
    PIG_0.framesPerWander = 22;
    LAYERS = $tile(TITLE_RAW, 160, 200);
    ONE_RING_INTRO.play_0();
    this$static.startMs = $tick_0(INSTANCE_0.raw) - this$static.startMs;
    this$static.loadingFinished = true;
  }
   else if (this$static.loadingFinished && !this$static.done_0 && $tick_0(INSTANCE_0.raw) - this$static.startMs > 25000) {
    $update_2(($clinit_FrodosQuest() , sceneRenderer), state_0);
    stopAllMusic();
    CONCERNING_HOBBITS_INTRO.play_0();
    eventManager = eventManager_0;
    $add_3(eventManager, new Events$PauseEvent(false, 5));
    $add_3(eventManager, new Events$DisplayTextEvent('The sun rises over Hobbiton, the largest Hobbit settlement in The Shire, and shines through the windows at Bag End, the nicest Hobbit hole in Hobbiton - where you, Frodo, live with your wealthy uncle Bilbo.'));
    $add_3(eventManager, new Events$ProgressEvent(($clinit_Progress() , GAME_STARTED)));
    $add_3(eventManager, new Events$CutSceneEvent(($clinit_Location() , FRODOS_ROOM)));
    $add_3(eventManager, new Events$PauseEvent(false, 2));
    $add_3(eventManager, new Events$DisplayTextEvent('You have just gotten out of bed. You hear Bilbo call from the hallway "Frodo! There\'s a letter for you!"'));
    $add_3(eventManager, new Events$QueuedUpcomingEvent(new Events$LocationEvent(BAGEND_HILL, false, new Events$MusicEvent(CONCERNING_HOBBITS))));
    this$static.done_0 = true;
  }
}

function Title(){
}

defineClass(285, 1, {}, Title);
_.done_0 = false;
_.fontLoaded = false;
_.loadingFinished = false;
_.startMs = 0;
var CONCERNING_HOBBITS, CONCERNING_HOBBITS_INTRO, LAYERS, ONE_RING_INTRO, TITLE_RAW;
var Lfrodo_core_Title_2_classLit = createForClass(285);
function $clinit_Verb(){
  $clinit_Verb = emptyMethod;
  GO = new Verb('GO', 0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['walk', 'move']));
  INVENTORY = new Verb('INVENTORY', 1, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['inventory', 'inv', 'i']));
  LOOK = new Verb('LOOK', 2, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  EXAMINE = new Verb('EXAMINE', 3, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['look at', 'look']));
  READ = new Verb('READ', 4, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['examine', 'look at', 'look']));
  TAKE = new Verb('TAKE', 5, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['pick up', 'get', 'pick']));
  TALK_TO = new Verb('TALK_TO', 6, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['talk']));
  USE = new Verb('USE', 7, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  ON = new Verb('ON', 8, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  OPEN = new Verb('OPEN', 9, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  CLOSE = new Verb('CLOSE', 10, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['shut']));
  OIL = new Verb('OIL', 11, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  CLIMB_ON = new Verb('CLIMB_ON', 12, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['stand on']));
  SLEEP_IN = new Verb('SLEEP_IN', 13, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['use', 'get in']));
  SLEEP = new Verb('SLEEP', 14, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  EAT = new Verb('EAT', 15, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['use']));
  COOK = new Verb('COOK', 16, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  CLIMB_UP = new Verb('CLIMB_UP', 17, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['climb']));
  SWIM = new Verb('SWIM', 18, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  BUY = new Verb('BUY', 19, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['order', 'ask for']));
  BUY_A = new Verb('BUY_A', 20, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['order a', 'ask for a']));
  BUY_AN = new Verb('BUY_AN', 21, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['order an', 'ask for an']));
  DRINK_0 = new Verb('DRINK', 22, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  GIVE = new Verb('GIVE', 23, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  TO = new Verb('TO', 24, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  PUT_DOWN = new Verb('PUT_DOWN', 25, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  UNLOCK = new Verb('UNLOCK', 26, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  WITH = new Verb('WITH', 27, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  WEAR = new Verb('WEAR', 28, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['put on']));
  TAKE_OFF = new Verb('TAKE_OFF', 29, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
  SUMMON = new Verb('SUMMON', 30, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
}

function Verb(enum$name, enum$ordinal, in_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.variants = getVariants(this.name_0 != null?this.name_0:'' + this.ordinal, in_0);
}

function values_15(){
  $clinit_Verb();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Verb_2_classLit, 1), $intern_1, 13, 0, [GO, INVENTORY, LOOK, EXAMINE, READ, TAKE, TALK_TO, USE, ON, OPEN, CLOSE, OIL, CLIMB_ON, SLEEP_IN, SLEEP, EAT, COOK, CLIMB_UP, SWIM, BUY, BUY_A, BUY_AN, DRINK_0, GIVE, TO, PUT_DOWN, UNLOCK, WITH, WEAR, TAKE_OFF, SUMMON]);
}

defineClass(13, 6, {5:1, 13:1, 3:1, 7:1, 6:1}, Verb);
_.variants_0 = function variants_2(){
  return this.variants;
}
;
var BUY, BUY_A, BUY_AN, CLIMB_ON, CLIMB_UP, CLOSE, COOK, DRINK_0, EAT, EXAMINE, GIVE, GO, INVENTORY, LOOK, OIL, ON, OPEN, PUT_DOWN, READ, SLEEP, SLEEP_IN, SUMMON, SWIM, TAKE, TAKE_OFF, TALK_TO, TO, UNLOCK, USE, WEAR, WITH;
var Lfrodo_core_Verb_2_classLit = createForEnum(13, values_15);
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

function values_16(){
  $clinit_Z();
  return stampJavaTypeInfo(getClassLiteralForArray(Lfrodo_core_Z_2_classLit, 1), $intern_1, 49, 0, [BEHIND_BACKGROUND, BACKGROUND, FOREGROUND, IN_FRONT_OF_FOREGROUND, NONE_0, MANUAL, AUTO_0]);
}

defineClass(49, 6, {49:1, 3:1, 7:1, 6:1}, Z);
_.value_0 = 0;
var AUTO_0, BACKGROUND, BEHIND_BACKGROUND, FOREGROUND, IN_FRONT_OF_FOREGROUND, MANUAL, NONE_0;
var Lfrodo_core_Z_2_classLit = createForEnum(49, values_16);
function FrodosQuestHtml$HtmlCanvasCreator(graphics){
  this.graphics = graphics;
}

defineClass(192, 1, {}, FrodosQuestHtml$HtmlCanvasCreator);
_.create_0 = function create_7(pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this.graphics, ($clinit_Scale() , ONE), elem));
}
;
var Lfrodo_html_FrodosQuestHtml$HtmlCanvasCreator_2_classLit = createForClass(192);
defineClass(423, 1, {21:1});
var Ljava_io_OutputStream_2_classLit = createForClass(423);
defineClass(424, 423, {21:1});
var Ljava_io_FilterOutputStream_2_classLit = createForClass(424);
function PrintStream(){
}

defineClass(203, 424, {21:1}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass(203);
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

defineClass(115, 1, {141:1});
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
_.toString_0 = function toString_14(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass(115);
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

booleanCastMap = {3:1, 196:1, 7:1};
var Ljava_lang_Boolean_2_classLit = createForClass(196);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_28;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(114, 1, {3:1, 114:1});
var Ljava_lang_Number_2_classLit = createForClass(114);
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

doubleCastMap = {3:1, 7:1, 197:1, 114:1};
var Ljava_lang_Double_2_classLit = createForClass(197);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(18, 9, $intern_4, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass(18);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(19, 9, $intern_4, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass(19);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(54, 9, $intern_4, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass(54);
function Integer(value_0){
  this.value_0 = value_0;
}

function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function highestOneBit(i){
  var rtn;
  if (i < 0) {
    return $intern_28;
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

defineClass(89, 114, {3:1, 7:1, 89:1, 114:1}, Integer);
_.compareTo = function compareTo_0(b){
  return compare_4(this.value_0, b.value_0);
}
;
_.equals_0 = function equals_7(o){
  return instanceOf(o, 89) && o.value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_16(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass(89);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 89, 256, 0, 1);
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

function signum(d){
  return d == 0 || isNaN(d)?d:d < 0?-1:1;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(48, 116, $intern_4, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass(48);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(98, 18, $intern_4, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass(98);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(53, 1, {3:1, 53:1}, StackTraceElement);
_.equals_0 = function equals_8(other){
  var st;
  if (instanceOf(other, 53)) {
    st = other;
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className_0 == st.className_0 && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_15(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_17(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass(53);
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

function $indexOf_1(this$static, str){
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

function $replaceFirst(this$static, regex, replace){
  var jsRegEx;
  replace = translateReplaceString(replace);
  jsRegEx = new RegExp(regex);
  return this$static.replace(jsRegEx, replace);
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

function $subSequence_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
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
  if (codePoint >= $intern_20) {
    hiSurrogate = 55296 + (codePoint - $intern_20 >> 10 & 1023) & $intern_32;
    loSurrogate = 56320 + (codePoint - $intern_20 & 1023) & $intern_32;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_32);
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

stringCastMap = {3:1, 141:1, 7:1, 2:1};
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

defineClass(99, 115, {141:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass(99);
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

defineClass(40, 115, {141:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass(40);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(202, 54, $intern_4, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass(202);
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

defineClass(497, 1, {});
var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(35, 9, $intern_4, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(35);
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

defineClass(93, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass(93);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(175, 9, $intern_4, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass(175);
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

function $get_1(this$static, index_0){
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

defineClass(94, 93, {7:1, 94:1, 138:1}, ByteBuffer, ByteBuffer_1);
_.compareTo = function compareTo_1(otherBuffer){
  return $compareTo(this, otherBuffer);
}
;
_.equals_0 = function equals_9(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 94)) {
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
_.hashCode_0 = function hashCode_10(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_1(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_18(){
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
var Ljava_nio_ByteBuffer_2_classLit = createForClass(94);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(174, 1, {}, ByteOrder);
_.toString_0 = function toString_19(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass(174);
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

function $get_2(this$static, index_0){
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
  this.floatArray = create_0(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(107, 93, {7:1, 107:1, 138:1}, FloatBuffer);
_.compareTo = function compareTo_2(otherBuffer){
  return $compareTo_0(this, otherBuffer);
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
_.toString_0 = function toString_20(){
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
var Ljava_nio_FloatBuffer_2_classLit = createForClass(107);
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

function $get_3(this$static, index_0){
  return this$static.intArray[index_0];
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.intArray = create_2(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(131, 93, {7:1, 131:1, 138:1}, IntBuffer);
_.compareTo = function compareTo_3(otherBuffer){
  return $compareTo_1(this, otherBuffer);
}
;
_.equals_0 = function equals_11(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 131)) {
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
_.toString_0 = function toString_21(){
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
var Ljava_nio_IntBuffer_2_classLit = createForClass(131);
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

function $get_4(this$static, index_0){
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
  this.shortArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(130, 93, {7:1, 130:1, 138:1}, ShortBuffer);
_.compareTo = function compareTo_4(otherBuffer){
  return $compareTo_2(this, otherBuffer);
}
;
_.equals_0 = function equals_12(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 130)) {
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
    equalSoFar = $get_4(this, myPosition++) == $get_4(otherBuffer, otherPosition++);
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
_.hashCode_0 = function hashCode_12(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_4(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_22(){
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
var Ljava_nio_ShortBuffer_2_classLit = createForClass(130);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_5(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
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

function $get_5(this$static, key){
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

function $remove_5(this$static, key){
  return instanceOfString(key)?key == null?$remove_13(this$static.hashCodeMap, null):$remove_14(this$static.stringMap, key):$remove_13(this$static.hashCodeMap, key);
}

function $reset_1(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(308, 438, $intern_17);
_.containsKey = function containsKey_1(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_4(key){
  return $get_5(this, key);
}
;
_.put = function put_1(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.remove_1 = function remove_11(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_5(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass(308);
function $contains_2(this$static, o){
  if (instanceOf(o, 52)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(31, 440, $intern_19, AbstractHashMap$EntrySet);
_.contains_0 = function contains_3(o){
  return $contains_2(this, o);
}
;
_.iterator = function iterator_5(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_12(entry){
  var key;
  if ($contains_2(this, entry)) {
    key = entry.getKey();
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass(31);
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

function $next_1(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = this$static.current.next_1();
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_6(this$static){
  var modCount;
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_2();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  modCount = this$static.this$01['_gwt_modCount'];
  this$static['_gwt_modCount'] = modCount;
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

defineClass(32, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_2(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.hasNext;
}
;
_.remove_2 = function remove_13(){
  $remove_6(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(32);
function $remove_7(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(157, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_3(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_2 = function remove_14(){
  $remove_7(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass(157);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(158, 157, {}, AbstractList$ListIteratorImpl);
_.remove_2 = function remove_15(){
  $remove_7(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(158);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(147, 440, $intern_19, AbstractMap$1);
_.contains_0 = function contains_4(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_16(key){
  if ($containsKey(this.this$01, key)) {
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_7(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass(147);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(125, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_4(){
  var entry;
  return entry = $next_1(this.val$outerIter2) , entry.getKey();
}
;
_.remove_2 = function remove_17(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass(125);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(67, 439, {}, AbstractMap$2);
_.contains_0 = function contains_5(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_8(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass(67);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(57, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_4(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_5(){
  var entry;
  return entry = $next_1(this.val$outerIter2) , entry.getValue();
}
;
_.remove_2 = function remove_18(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass(57);
defineClass(307, 1, $intern_18);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 52)) {
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
_.toString_0 = function toString_23(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass(307);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(146, 307, $intern_18, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass(146);
defineClass(450, 1, $intern_18);
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 52)) {
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
_.toString_0 = function toString_24(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass(450);
function $addLast(this$static, e){
  checkCriticalNotNull(e);
  this$static.array[this$static.tail] = e;
  this$static.tail = this$static.tail + 1 & this$static.array.length - 1;
  $ensureCapacity(this$static);
}

function $contains_3(it, o){
  if (o == null) {
    return false;
  }
  while (it.currentIndex != it.fence) {
    if (equals_Ljava_lang_Object__Z__devirtual$(o, $next_2(it))) {
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

function $remove_8(it, o){
  if ($contains_3(it, o)) {
    $remove_9(it);
    return true;
  }
  return false;
}

function $removeAtIndex(this$static, i){
  var headDistance, mask, size_0, tailDistance;
  mask = this$static.array.length - 1;
  headDistance = i - this$static.head & mask;
  tailDistance = this$static.tail - i & mask;
  size_0 = this$static.tail - this$static.head & mask;
  checkConcurrentModification(headDistance < size_0);
  if (headDistance >= tailDistance) {
    $shiftLeftAtIndex(this$static, i);
    return -1;
  }
   else {
    $shiftRightAtIndex(this$static, i);
    return 1;
  }
}

function $shiftLeftAtIndex(this$static, i){
  var mask, nextOffset;
  mask = this$static.array.length - 1;
  this$static.tail = this$static.tail - 1 & mask;
  while (i != this$static.tail) {
    nextOffset = i + 1 & mask;
    this$static.array[i] = this$static.array[nextOffset];
    i = nextOffset;
  }
  this$static.array[this$static.tail] = null;
}

function $shiftRightAtIndex(this$static, i){
  var mask, prevOffset;
  mask = this$static.array.length - 1;
  while (i != this$static.head) {
    prevOffset = i - 1 & mask;
    this$static.array[i] = this$static.array[prevOffset];
    i = prevOffset;
  }
  this$static.array[this$static.head] = null;
  this$static.head = this$static.head + 1 & mask;
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

defineClass(163, 439, {}, ArrayDeque);
_.add_0 = function add_5(e){
  return $addLast(this, e) , true;
}
;
_.contains_0 = function contains_6(o){
  return $contains_3(new ArrayDeque$IteratorImpl(this), o);
}
;
_.isEmpty = function isEmpty_2(){
  return $isEmpty(this);
}
;
_.iterator = function iterator_8(){
  return new ArrayDeque$IteratorImpl(this);
}
;
_.remove = function remove_19(o){
  return $remove_8(new ArrayDeque$IteratorImpl(this), o);
}
;
_.size_1 = function size_9(){
  return $size_0(this);
}
;
_.head = 0;
_.tail = 0;
var Ljava_util_ArrayDeque_2_classLit = createForClass(163);
function $next_2(this$static){
  var e;
  checkCriticalElement(this$static.currentIndex != this$static.fence);
  e = this$static.this$01.array[this$static.currentIndex];
  checkConcurrentModification(this$static.fence == this$static.this$01.tail && e != null);
  this$static.lastIndex = this$static.currentIndex;
  this$static.currentIndex = this$static.currentIndex + 1 & this$static.this$01.array.length - 1;
  return e;
}

function $remove_9(this$static){
  checkCriticalState(this$static.lastIndex >= 0);
  if ($removeAtIndex(this$static.this$01, this$static.lastIndex) < 0) {
    this$static.currentIndex = this$static.currentIndex - 1 & this$static.this$01.array.length - 1;
    this$static.fence = this$static.this$01.tail;
  }
  this$static.lastIndex = -1;
}

function ArrayDeque$IteratorImpl(this$0){
  this.this$01 = this$0;
  this.currentIndex = this.this$01.head;
  this.fence = this.this$01.tail;
}

defineClass(126, 1, {}, ArrayDeque$IteratorImpl);
_.hasNext_0 = function hasNext_5(){
  return this.currentIndex != this.fence;
}
;
_.next_1 = function next_6(){
  return $next_2(this);
}
;
_.remove_2 = function remove_20(){
  $remove_9(this);
}
;
_.currentIndex = 0;
_.fence = 0;
_.lastIndex = -1;
var Ljava_util_ArrayDeque$IteratorImpl_2_classLit = createForClass(126);
function $next_3(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function $remove_10(this$static){
  checkCriticalState(this$static.last != -1);
  $remove(this$static.this$01, this$static.i = this$static.last);
  this$static.last = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(68, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_6(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_7(){
  return $next_3(this);
}
;
_.remove_2 = function remove_21(){
  $remove_10(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass(68);
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
  return instanceOf(list, 139)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(343, 447, $intern_3, Collections$EmptyList);
_.contains_0 = function contains_7(object){
  return false;
}
;
_.get_0 = function get_5(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_9(){
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
var Ljava_util_Collections$EmptyList_2_classLit = createForClass(343);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_1 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(344, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_7(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_8(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_2 = function remove_22(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_1;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass(344);
defineClass(159, 1, {});
_.add_0 = function add_6(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_3(){
  return this.coll.isEmpty();
}
;
_.iterator = function iterator_10(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove = function remove_23(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_11(){
  return this.coll.size_1();
}
;
_.toString_0 = function toString_25(){
  return toString_9(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass(159);
function $remove_11(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(161, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_8(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_9(){
  return this.it.next_1();
}
;
_.remove_2 = function remove_24(){
  $remove_11();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass(161);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(160, 159, {97:1}, Collections$UnmodifiableList);
_.equals_0 = function equals_15(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_0 = function get_6(index_0){
  return this.list.get_0(index_0);
}
;
_.hashCode_0 = function hashCode_18(){
  return hashCode__I__devirtual$(this.list);
}
;
_.isEmpty = function isEmpty_4(){
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
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass(160);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(162, 161, {}, Collections$UnmodifiableListIterator);
_.remove_2 = function remove_25(){
  $remove_11();
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass(162);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(345, 1, $intern_17, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_16(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_1 = function get_7(key){
  return this.map_0.get_1(key);
}
;
_.hashCode_0 = function hashCode_19(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.isEmpty = function isEmpty_5(){
  return this.map_0.isEmpty();
}
;
_.put = function put_2(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.remove_1 = function remove_26(key){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_12(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_26(){
  return toString_9(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass(345);
defineClass(346, 159, $intern_19);
_.equals_0 = function equals_17(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_20(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass(346);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(347, 346, $intern_19, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_11(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass(347);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(350, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_1 = function next_10(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_1());
}
;
_.hasNext_0 = function hasNext_9(){
  return this.val$it2.hasNext_0();
}
;
_.remove_2 = function remove_27(){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass(350);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(348, 1, $intern_18, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
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
_.toString_0 = function toString_27(){
  return toString_9(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass(348);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(349, 160, {97:1, 139:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass(349);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

var INTERNAL_NATURAL_ORDER;
function Comparators$NaturalOrderComparator(){
}

defineClass(409, 1, $intern_2, Comparators$NaturalOrderComparator);
_.compare = function compare_5(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}
;
_.equals_0 = function equals_19(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass(409);
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

defineClass(177, 9, $intern_4, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(177);
defineClass(448, 440, $intern_19);
var Ljava_util_EnumSet_2_classLit = createForClass(448);
function $add_4(this$static, e){
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

defineClass(352, 448, $intern_19, EnumSet$EnumSetImpl);
_.add_0 = function add_7(e){
  return $add_4(this, e);
}
;
_.contains_0 = function contains_8(o){
  return instanceOf(o, 6) && $containsEnum(this, o);
}
;
_.iterator = function iterator_12(){
  return new EnumSet$EnumSetImpl$IteratorImpl(this);
}
;
_.remove = function remove_28(o){
  return false;
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass(352);
function $findNext(this$static){
  var c;
  ++this$static.i;
  for (c = this$static.this$11.all.length; this$static.i < c; ++this$static.i) {
    if (this$static.this$11.set_0[this$static.i]) {
      return;
    }
  }
}

function $next_4(this$static){
  checkCriticalElement(this$static.i < this$static.this$11.all.length);
  this$static.last = this$static.i;
  $findNext(this$static);
  return this$static.this$11.set_0[this$static.last];
}

function EnumSet$EnumSetImpl$IteratorImpl(this$1){
  this.this$11 = this$1;
  $findNext(this);
}

defineClass(164, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.next_1 = function next_11(){
  return $next_4(this);
}
;
_.hasNext_0 = function hasNext_10(){
  return this.i < this.this$11.all.length;
}
;
_.remove_2 = function remove_29(){
  checkCriticalState(this.last != -1);
  this.this$11.set_0[this.last] = null;
  --this.this$11.size_0;
  this.last = -1;
}
;
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass(164);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset_1(this);
}

defineClass(39, 308, {3:1, 111:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass(39);
function $add_5(this$static, o){
  var old;
  old = $put_2(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_4(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_12(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(105, 440, {3:1, 62:1}, HashSet);
_.add_0 = function add_8(o){
  return $add_5(this, o);
}
;
_.contains_0 = function contains_9(o){
  return $contains_4(this, o);
}
;
_.isEmpty = function isEmpty_6(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_13(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_30(o){
  return $remove_12(this, o);
}
;
_.size_1 = function size_14(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass(105);
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

function $remove_13(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_0(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(363, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_14(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass(363);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(169, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_12(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_11(){
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
_.remove_2 = function remove_31(){
  $remove_13(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass(169);
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
function $contains_5(this$static, key){
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

function $remove_14(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(361, 1, {}, InternalStringMap);
_.iterator = function iterator_15(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass(361);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(168, 1, {}, InternalStringMap$1);
_.next_1 = function next_13(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_12(){
  return !this.current.done;
}
;
_.remove_2 = function remove_32(){
  $remove_14(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass(168);
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

defineClass(362, 450, $intern_18, InternalStringMap$2);
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
var Ljava_util_InternalStringMap$2_2_classLit = createForClass(362);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(86, 9, $intern_4, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass(86);
function equals_20(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_22(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_6(this$static, newElement){
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

defineClass(144, 1, {}, StringJoiner);
_.toString_0 = function toString_28(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass(144);
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

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
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
defineClass(425, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass(425);
defineClass(429, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass(429);
function $draw_8(this$static, image, x_0, y_0){
  return $draw_9(this$static, image, x_0, y_0, image.width_1(), image.height_1());
}

function $draw_9(this$static, image, x_0, y_0, w, h){
  image.draw_1(this$static.ctx, x_0, y_0, w, h);
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

defineClass(382, 1, $intern_35);
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass(382);
function Clock(){
}

defineClass(127, 1, {127:1}, Clock);
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass(127);
defineClass(41, 1, {41:1});
var Lplayn_core_Event_2_classLit = createForClass(41);
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

defineClass(36, 41, {41:1, 36:1});
_.addFields = function addFields(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_2(){
  return 'Input';
}
;
_.toString_0 = function toString_29(){
  var builder;
  builder = $append_1(new StringBuilder_0(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass(36);
function Event$XY(time, x_0, y_0){
  Event$Input.call(this, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(55, 36, {41:1, 36:1, 55:1, 63:1});
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
var Lplayn_core_Event$XY_2_classLit = createForClass(55);
defineClass(436, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass(436);
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
    throw toJs(new IllegalStateException_0('Cannot clear connections while dispatching.'));
  this$static._listeners = null;
}

function $disconnect(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons))):(this$static._listeners = remove_33(this$static._listeners, cons));
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

defineClass(433, 1, {});
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass(433);
defineClass(437, 433, {});
var Lreact_RFuture_2_classLit = createForClass(437);
function $clinit_RPromise(){
  $clinit_RPromise = emptyMethod;
  $clinit_Reactor();
  COMPLETE = new RPromise$1;
}

function $complete(this$static, result){
  if (this$static._result)
    throw toJs(new IllegalStateException_0('Already completed'));
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

defineClass(123, 437, {123:1}, RPromise);
_.fail = function fail(cause){
  $complete(this, new Try$Failure(cause));
}
;
_.result = function result_0(){
  return this._result;
}
;
_.succeed = function succeed(value_0){
  $complete(this, new Try$Success(value_0));
}
;
var COMPLETE;
var Lreact_RPromise_2_classLit = createForClass(123);
function $fail(this$static, cause){
  $invokeLater(this$static.this$01, new Exec$1$2(this$static, cause));
}

function $succeed(this$static, value_0){
  $invokeLater(this$static.this$01, new Exec$1$1(this$static, value_0));
}

function Exec$1(this$0){
  $clinit_RPromise();
  this.this$01 = this$0;
}

defineClass(292, 123, {123:1}, Exec$1);
_.fail = function fail_0(cause){
  $fail(this, cause);
}
;
_.succeed = function succeed_0(value_0){
  $succeed(this, value_0);
}
;
var Lplayn_core_Exec$1_2_classLit = createForClass(292);
function Exec$1$1(this$1, val$value){
  this.this$11 = this$1;
  this.val$value2 = val$value;
}

defineClass(293, 1, $intern_36, Exec$1$1);
_.run = function run_1(){
  $complete(this.this$11, new Try$Success(this.val$value2));
}
;
var Lplayn_core_Exec$1$1_2_classLit = createForClass(293);
function Exec$1$2(this$1, val$cause){
  this.this$11 = this$1;
  this.val$cause2 = val$cause;
}

defineClass(294, 1, $intern_36, Exec$1$2);
_.run = function run_2(){
  $complete(this.this$11, new Try$Failure(this.val$cause2));
}
;
var Lplayn_core_Exec$1$2_2_classLit = createForClass(294);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll(this$static.running, this$static.pending);
  this$static.pending.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get(this$static.running, ii);
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

function $invokeLater(this$static, action){
  $add(this$static.pending, action);
}

function Exec$Default(plat){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = plat;
  $atPrio($addConnection(plat.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(290, 436, {}, Exec$Default);
var Lplayn_core_Exec$Default_2_classLit = createForClass(290);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(291, 426, {}, Exec$Default$1);
_.onEmit = function onEmit_1(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass(291);
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

defineClass(297, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass(297);
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

defineClass(299, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass(299);
function $begin(this$static){
  if (this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched begin()'));
  this$static.begun = true;
}

function $end(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched end()'));
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' flush() without begin()'));
}

defineClass(441, 1, $intern_35);
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.flush = function flush(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass(441);
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
    id_0 = (program = gl.gl.createProgram() , $add_7(gl.programs, program));
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
      prog = $remove_15(gl.programs, id_0);
      $deleteProgram(gl.gl, prog);
      throw toJs(new RuntimeException_0('Failed to link program: ' + log_0));
    }
    this.id_0 = id_0;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && (prog = $remove_15(gl.programs, id_0) , $deleteProgram(gl.gl, prog));
    vertexShader != 0 && (sh0 = $remove_15(gl.shaders, vertexShader) , $deleteShader(gl.gl, sh0));
    fragmentShader != 0 && (sh = $remove_15(gl.shaders, fragmentShader) , $deleteShader(gl.gl, sh));
  }
}

defineClass(171, 1, $intern_35, GLProgram);
_.id_0 = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass(171);
function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(221, 426, {}, Game$1);
_.onEmit = function onEmit_2(plat){
  var lastArg;
  $onFrame((lastArg = this , plat , lastArg).this$01);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass(221);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, 1), $scaledCeil(this$static.scale_0, 1));
    $fillRect_2(($setFillStyleWeb(canvas.ctx, cssColorString(-1)) , canvas), 0, 0, canvas.width_0, canvas.height_0);
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

defineClass(207, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass(207);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(210, 1, $intern_35);
_.toString_0 = function toString_30(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
var Lplayn_core_RenderTarget_2_classLit = createForClass(210);
function Graphics$1(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(211, 210, $intern_35, Graphics$1);
var Lplayn_core_Graphics$1_2_classLit = createForClass(211);
defineClass(445, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass(445);
function $$init_1(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var tex, texHeight, texWidth;
  if (!this$static.state.result())
    throw toJs(new IllegalStateException_0('Cannot create texture from unready image: ' + this$static));
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

function $updateTexture(this$static){
  !this$static.texture || this$static.texture.disposed?(this$static.texture = $createTexture_0(this$static, this$static.texconf)):$update_4(this$static.texture, this$static);
  return this$static.texture;
}

defineClass(172, 445, {});
_.height_1 = function height_0(){
  return $invScaled(this.scale_0, this.pixelHeight);
}
;
_.width_1 = function width_1(){
  return $invScaled(this.scale_0, this.pixelWidth);
}
;
var Lplayn_core_Image_2_classLit = createForClass(172);
defineClass(449, 445, {});
var Lplayn_core_Image$Region_2_classLit = createForClass(449);
function Image$2(val$image, val$rx, val$ry, val$rwidth, val$rheight){
  this.val$image2 = val$image;
  this.val$rx3 = val$rx;
  this.val$ry4 = val$ry;
  this.val$rwidth5 = val$rwidth;
  this.val$rheight6 = val$rheight;
}

defineClass(354, 449, {}, Image$2);
_.draw_1 = function draw_12(ctx, x_0, y_0, width_0, height){
  $draw_13(this.val$image2, ctx, x_0, y_0, width_0, height, this.val$rx3, this.val$ry4, this.val$rwidth5, this.val$rheight6);
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
var Lplayn_core_Image$2_2_classLit = createForClass(354);
function $fail_0(this$static, error){
  this$static.pixelWidth == 0 && (this$static.pixelWidth = 50);
  this$static.pixelHeight == 0 && (this$static.pixelHeight = 50);
  $setBitmap(this$static, $createErrorBitmap(this$static.pixelWidth, this$static.pixelHeight));
  this$static.state.fail(error);
}

function $succeed_0(this$static, data_0){
  this$static.scale_0 = data_0.scale_0;
  this$static.pixelWidth = data_0.pixelWidth;
  this$static.pixelHeight = data_0.pixelHeight;
  $setBitmap(this$static, data_0.bitmap);
  this$static.state.succeed(this$static);
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

defineClass(173, 172, {});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass(173);
function ImageImpl$Data(scale, bitmap, pixelWidth, pixelHeight){
  this.bitmap = bitmap;
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
}

defineClass(375, 1, {}, ImageImpl$Data);
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl$Data_2_classLit = createForClass(375);
defineClass(223, 1, {});
var Lplayn_core_Input_2_classLit = createForClass(223);
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

function values_17(){
  $clinit_Key();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_1, 4, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z_0, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN_0, END, HOME, LEFT_0, PAGE_UP, PAGE_DOWN, RIGHT_0, UP_0, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE, GREEN, RED, YELLOW, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW_0, ZOOM_IN, ZOOM_OUT, UNKNOWN]);
}

defineClass(4, 6, {3:1, 7:1, 6:1, 4:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN_0, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT_0, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED, RIGHT_0, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN, UP_0, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW_0, WINDOWS, X, Y, YELLOW, Z_0, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum(4, values_17);
function Keyboard$Event(time){
  Event$Input.call(this, time);
}

defineClass(95, 36, {41:1, 36:1, 95:1});
var Lplayn_core_Keyboard$Event_2_classLit = createForClass(95);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(108, 95, {41:1, 36:1, 95:1, 108:1}, Keyboard$KeyEvent);
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
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass(108);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(132, 95, {41:1, 36:1, 95:1, 132:1}, Keyboard$TypedEvent);
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
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass(132);
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

defineClass(287, 1, {});
var Lplayn_core_Log_2_classLit = createForClass(287);
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

function values_18(){
  $clinit_Log$Level();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 75, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(75, 6, {3:1, 7:1, 6:1, 75:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum(75, values_18);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, time, x_0, y_0);
}

defineClass(70, 55, $intern_37);
var Lplayn_core_Mouse$Event_2_classLit = createForClass(70);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(109, 70, {41:1, 36:1, 55:1, 109:1, 70:1, 63:1}, Mouse$ButtonEvent);
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
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass(109);
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

function values_19(){
  $clinit_Mouse$ButtonEvent$Id();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 71, 0, [LEFT_1, RIGHT_1, MIDDLE, X1, X2]);
}

defineClass(71, 6, {3:1, 7:1, 6:1, 71:1}, Mouse$ButtonEvent$Id);
var LEFT_1, MIDDLE, RIGHT_1, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum(71, values_19);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(380, 70, $intern_37, Mouse$MotionEvent);
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
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass(380);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(381, 70, $intern_37, Mouse$WheelEvent);
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
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass(381);
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

defineClass(117, 1, {117:1});
var Lplayn_core_Platform_2_classLit = createForClass(117);
function Platform$Error(){
}

defineClass(118, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass(118);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_Platform$Lifecycle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 90, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(90, 6, {3:1, 7:1, 6:1, 90:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum(90, values_20);
defineClass(315, 441, $intern_35);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass(315);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, 0, 0, right, top_0, sr, 0, left, bottom, 0, sb, right, bottom, sr, sb);
}

function $addQuad_0(this$static, tex, tint, xf, x_0, y_0, w, h){
  var sb, sr;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  sr = tex.config.repeatX?w / tex.displayWidth:1;
  sb = tex.config.repeatY?h / tex.displayHeight:1;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, x_0, y_0, x_0 + w, y_0 + h, sr, sb);
}

defineClass(153, 315, $intern_35);
var Lplayn_core_QuadBatch_2_classLit = createForClass(153);
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
  $add(rsrcs, new Scale$ScaledResource(this$static, $computePath(path, this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(path, rscale)));
  }
  $add(rsrcs, new Scale$ScaledResource(ONE, path));
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

defineClass(102, 1, {}, Scale);
_.toString_0 = function toString_31(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE;
var Lplayn_core_Scale_2_classLit = createForClass(102);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(103, 1, {103:1}, Scale$ScaledResource);
_.toString_0 = function toString_32(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass(103);
function Sound(state){
  this.state = state;
}

defineClass(104, 1, {104:1});
_.play_0 = function play_3(){
  return false;
}
;
_.stop_0 = function stop_4(){
}
;
var Lplayn_core_Sound_2_classLit = createForClass(104);
function $fail_1(this$static, error){
  $fail(this$static.state, error);
}

function $succeed_1(this$static, impl){
  this$static.impl = impl;
  $setVolumeImpl(this$static, this$static.volume_0);
  $setLoopingImpl(this$static, this$static.looping);
  this$static.playing && this$static.impl.play_0();
  $succeed(this$static.state, this$static);
}

defineClass(376, 104, {104:1});
_.play_0 = function play_4(){
  this.playing = true;
  return !!this.impl && this.impl.play_0();
}
;
_.stop_0 = function stop_5(){
  this.playing = false;
  !!this.impl && this.impl.stop_0();
}
;
_.looping = false;
_.playing = false;
_.volume_0 = 1;
var Lplayn_core_SoundImpl_2_classLit = createForClass(376);
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

function $draw_10(this$static, tile, x_0, y_0){
  return $draw_11(this$static, tile, x_0, y_0, tile.displayWidth, tile.displayHeight);
}

function $draw_11(this$static, tile, x_0, y_0, w, h){
  (!this$static.checkIntersection || $intersects(this$static, x_0, y_0, w, h)) && $addToBatch(tile, this$static.batch, this$static.tint, this$static.lastTrans, x_0, y_0, w, h);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $endClipped(this$static){
  var r;
  this$static.batch.flush();
  r = (--this$static.scissorDepth , this$static.scissorDepth == 0?null:$get(this$static.scissors, this$static.scissorDepth - 1));
  !r?(this$static.batch.gl.gl.disable(3089) , undefined):$glScissor(this$static.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
  $checkError(this$static.batch.gl);
}

function $fillRect_1(this$static){
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), this$static.lastTrans, 0, 0, 320, 224);
  return this$static;
}

function $intersects(this$static, x_0, y_0, w, h){
  var ih, iw, ix, iy, scissor, th, tw;
  $transform_0(this$static.lastTrans, $set(this$static.intersectionTestPoint, x_0, y_0), this$static.intersectionTestPoint);
  $transform_1(this$static.lastTrans, $set_0(this$static.intersectionTestSize, w, h), this$static.intersectionTestSize);
  ix = this$static.intersectionTestPoint.x_0;
  iy = this$static.intersectionTestPoint.y_0;
  iw = this$static.intersectionTestSize.x_0;
  ih = this$static.intersectionTestSize.y_0;
  if (this$static.scissorDepth > 0) {
    scissor = $get(this$static.scissors, this$static.scissorDepth - 1);
    return $intersects_0(scissor, round_int(ix), round_int(iy), round_int(iw), round_int(ih));
  }
  tw = this$static.target.this$01.viewPixelWidth;
  th = this$static.target.this$01.viewPixelHeight;
  return ix + iw > 0 && ix < tw && iy + ih > 0 && iy < th;
}

function $pushScissorState(this$static, x_0, y_0, width_0, height){
  var pr, r;
  this$static.scissorDepth == this$static.scissors.array.length && $add(this$static.scissors, new Rectangle);
  r = $get(this$static.scissors, this$static.scissorDepth);
  if (this$static.scissorDepth == 0) {
    r.x_0 = x_0;
    r.y_0 = y_0;
    r.height_0 = height;
    r.width_0 = width_0;
  }
   else {
    pr = $get(this$static.scissors, this$static.scissorDepth - 1);
    $setLocation(r, max_0(pr.x_0, x_0), max_0(pr.y_0, y_0));
    $setSize_0(r, max_0(min_1(pr.x_0 + pr.width_0 - 1, x_0 + width_0 - 1) - r.x_0, 0), max_0(min_1(pr.y_0 + pr.height_0 - 1, y_0 + height - 1) - r.y_0, 0));
  }
  ++this$static.scissorDepth;
  return r;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  $remove(this$static.transformStack, --tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $saveTx(this$static){
  $add(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_0(this$static, sx, sy){
  $scale_1(this$static.lastTrans, sx, sy);
  return this$static;
}

function $setAlpha(this$static, alpha_0){
  this$static.tint = setAlpha(this$static.tint, alpha_0);
  return this$static;
}

function $setFillColor(this$static, color_0){
  this$static.fillColor = color_0;
  return this$static;
}

function $startClipped_0(this$static, x_0, width_0, height){
  var r;
  this$static.batch.flush();
  r = $pushScissorState(this$static, x_0, this$static.target.this$01.viewPixelHeight - height, width_0, height);
  $glScissor(this$static.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
  this$static.scissorDepth == 1 && (this$static.batch.gl.gl.enable(3089) , undefined);
  $checkError(this$static.batch.gl);
  return !(r.width_0 <= 0 || r.height_0 <= 0);
}

function $translate(this$static){
  $translate_0(this$static.lastTrans);
  return this$static;
}

function Surface_0(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  this.scissors = new ArrayList;
  this.intersectionTestPoint = new Point;
  this.intersectionTestSize = new Vector;
  this.target = target;
  this.batch = defaultBatch;
  $add(this.transformStack, this.lastTrans = new AffineTransform);
  this.colorTex = $colorTex(gfx);
  $scale_0(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(316, 1, $intern_35, Surface_0);
_.checkIntersection = false;
_.fillColor = 0;
_.scissorDepth = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass(316);
defineClass(446, 445, {});
_.toString_0 = function toString_33(){
  return 'Tile[' + this.displayWidth + 'x' + this.displayHeight + '/' + ($clinit_Points() , toString_46(0, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(0, TO_STRING_DECIMAL_PLACES))) + '/' + (toString_46(1, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(1, TO_STRING_DECIMAL_PLACES))) + '] <- ' + this;
}
;
var Lplayn_core_Tile_2_classLit = createForClass(446);
function $addToBatch(this$static, batch, tint, tx, x_0, y_0, width_0, height){
  $addQuad_0(batch, this$static, tint, tx, x_0, y_0, width_0, height);
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
      $draw_12(image, scaled.ctx, 0, 0, potWidth, potHeight);
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

defineClass(342, 446, $intern_35, Texture);
_.toString_0 = function toString_34(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_Texture_2_classLit = createForClass(342);
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

defineClass(156, 1, {}, Texture$Config);
_.toString_0 = function toString_35(){
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
var Lplayn_core_Texture$Config_2_classLit = createForClass(156);
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

function combine(curTint, tint){
  var newA, newB, newG, newR;
  newA = ((curTint >> 24 & 255) * ((tint >> 24 & 255) + 1) & 65280) << 16;
  if ((tint & $intern_30) == $intern_30) {
    return newA | curTint & $intern_30;
  }
  newR = ((curTint >> 16 & 255) * ((tint >> 16 & 255) + 1) & 65280) << 8;
  newG = (curTint >> 8 & 255) * ((tint >> 8 & 255) + 1) & 65280;
  newB = (curTint & 255) * ((tint & 255) + 1) >> 8 & 255;
  return newA | newR | newG | newB;
}

function setAlpha(tint, alpha_0){
  var ialpha;
  ialpha = round_int(255 * (alpha_0 < 0?0:alpha_0 > 1?1:alpha_0));
  return ialpha << 24 | tint & $intern_30;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(100, 55, {41:1, 36:1, 55:1, 100:1, 63:1}, Touch$Event);
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
var Lplayn_core_Touch$Event_2_classLit = createForClass(100);
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

function values_21(){
  $clinit_Touch$Event$Kind();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 85, 0, [START, MOVE, END_0, CANCEL]);
}

defineClass(85, 6, {3:1, 7:1, 6:1, 85:1}, Touch$Event$Kind);
var CANCEL, END_0, MOVE, START;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum(85, values_21);
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
  $glBindBuffer(this$static.gl, $intern_38, this$static.verticesId);
  $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
  $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
  $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
  $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
  $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
  $glBindBuffer(this$static.gl, $intern_39, this$static.elementsId);
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
    $glBufferData(this$static.gl, $intern_38, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_39, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
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

defineClass(155, 153, $intern_35, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_32;
  stables_0[7] = tint & $intern_32;
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
_.toString_0 = function toString_36(){
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
var Lplayn_core_TriangleBatch_2_classLit = createForClass(155);
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
  $glBindBuffer(gl, $intern_38, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_38, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_39, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_39, elems.length * 2, gl.bufs.shortBuffer, 35044);
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

defineClass(154, 153, $intern_35, UniformQuadBatch);
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
  this.data_0[pos++] = tint >> 16 & $intern_32;
  this.data_0[pos++] = tint & $intern_32;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_2(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_38, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_39, this.elementsId);
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
_.toString_0 = function toString_37(){
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
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass(154);
function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
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

function $getSound(this$static, path){
  var url_0;
  url_0 = this$static.pathPrefix + path;
  $getBundle(this$static, path);
  url_0 += '.mp3';
  return $createSound_0(this$static.plat.audio, url_0);
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = ($clinit_Impl() , $moduleBase);
  this.plat = plat;
}

defineClass(206, 425, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass(206);
function $createSound_0(this$static, url_0){
  var sound;
  sound = $createSound(this$static.soundController, url_0);
  return new HtmlSound(this$static.plat.exec_0, sound);
}

function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  this.plat = plat;
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

defineClass(237, 429, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass(237);
function $clear_2(this$static){
  return $clearRect_0(this$static, this$static.width_0, this$static.height_0);
}

function $clearRect_0(this$static, width_0, height){
  $clearRect(this$static.ctx, 0, 0, width_0, height);
  return this$static;
}

function $fillRect_2(this$static, x_0, y_0, w, h){
  $fillRect(this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $setFillColor_0(this$static, color_0){
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

defineClass(142, 382, $intern_35, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass(142);
function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 138)) {
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
      return create_0(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5121:
      return create_5(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_4(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5124:
      return create_2(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5122:
      return create_1(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5120:
      return create_3(webGLArray.buffer, byteOffset, byteSize);
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
  target == $intern_38?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_39?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.gl, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.gl, 36160, this$static.frameBuffers[0]);
}

function $glBindTexture(this$static, texture){
  $bindTexture(this$static.gl, 3553, this$static.textures[texture]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_38) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_38, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_39) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_39, this$static.requestedElementArrayBuffer);
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
  return $add_7(this$static.shaders, shader);
}

function $glDeleteShader(this$static, shader){
  var sh;
  sh = $remove_15(this$static.shaders, shader);
  $deleteShader(this$static.gl, sh);
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_39, this$static.requestedElementArrayBuffer);
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
    id_0 = $add_7(this$static.buffers, buffer);
    buffers[i] = id_0;
  }
}

function $glGenTextures(this$static, textures){
  var i, id_0, pos, texture;
  pos = textures.position_0;
  for (i = 0; i < 1; i++) {
    texture = this$static.gl.createTexture();
    id_0 = $add_7(this$static.textures, texture);
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
  id_0 = $add_7(progUniforms, location_0);
  return id_0;
}

function $glScissor(this$static, x_0, y_0, width_0, height){
  $scissor(this$static.gl, x_0, y_0, width_0, height);
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
    $bindBuffer(this$static.gl, $intern_38, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.gl, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.gl, 0, 0, w, h);
}

function $init_4(this$static, gl){
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
          $bindBuffer(this$static.gl, $intern_38, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_38, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.$_nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_38, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_38, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
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
  this.vertexAttribArrayState = initUnidimensionalArray(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_2, 124, 5, 0, 1);
}

function getElementSize_3(){
  throw toJs(new RuntimeException_0('Unrecognized buffer type: ' + null.$_nullMethod()));
}

defineClass(298, 297, {}, HtmlGL20);
_.currProgram = 0;
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass(298);
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

defineClass(300, 299, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass(300);
function $add_7(this$static, value_0){
  this$static.push(value_0);
  return this$static.length - 1;
}

function $remove_15(this$static, key){
  var value_0 = this$static[key];
  delete this$static[key];
  return value_0;
}

function HtmlGL20$VertexAttribArrayState(){
}

defineClass(124, 1, {124:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass(124);
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

function $updateTexture_0(this$static, tex, img){
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
  $init_4(this.gl, glc);
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

defineClass(208, 207, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass(208);
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

defineClass(209, 1, {461:1, 410:1}, HtmlGraphics$1);
var Lplayn_html_HtmlGraphics$1_2_classLit = createForClass(209);
function $createErrorBitmap(pixelWidth, pixelHeight){
  var img;
  img = $doc.createElement('img');
  img.width = pixelWidth;
  img.height = pixelHeight;
  return img;
}

function $draw_12(this$static, ctx, x_0, y_0, width_0, height){
  $drawImage_0(ctx, this$static.img, x_0, y_0, width_0, height);
}

function $draw_13(this$static, ctx, dx, dy, dw, dh, sx, sy, sw, sh){
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
  $updateTexture_0(gfx, tex.id_0, this$static.img);
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
    pstate.succeed(this);
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, scale), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this), false);
  }
}

defineClass(113, 173, {}, HtmlImage, HtmlImage_0);
_.draw_1 = function draw_13(ctx, x_0, y_0, width_0, height){
  $draw_12(this, ctx, x_0, y_0, width_0, height);
}
;
_.toString_0 = function toString_38(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass(113);
function HtmlImage$1(this$0, val$fscale){
  this.this$01 = this$0;
  this.val$fscale2 = val$fscale;
}

defineClass(373, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  $succeed_0(this.this$01, new ImageImpl$Data(this.val$fscale2, this.this$01.img, this.this$01.img.width, this.this$01.img.height));
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass(373);
function HtmlImage$2(this$0){
  this.this$01 = this$0;
}

defineClass(374, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  $fail_0(this.this$01, new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass(374);
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
  touches = initUnidimensionalArray(Lplayn_core_Touch$Event_2_classLit, $intern_2, 100, nativeTouchesLen, 0, 1);
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

defineClass(224, 223, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass(224);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(225, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass(225);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(234, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass(234);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(235, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass(235);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(236, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_0), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass(236);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(119, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass(119);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  this.this$01_0 = this$0;
}

defineClass(145, 119, {});
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
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass(145);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(226, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_2(), (nevent.charCode || 0) & $intern_32), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass(226);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(227, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass(227);
function HtmlInput$4(){
}

defineClass(228, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  evt.preventDefault();
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass(228);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(229, 119, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass(229);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(230, 119, {}, HtmlInput$6);
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
var Lplayn_html_HtmlInput$6_2_classLit = createForClass(230);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(231, 145, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass(231);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(232, 145, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass(232);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(233, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_2(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass(233);
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

defineClass(56, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass(56);
defineClass(288, 287, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass(288);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(289, 288, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass(289);
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
  this.exec_0 = new Exec$Default(this);
  setUncaughtExceptionHandler(new HtmlPlatform$1(this));
  $info(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    this.audio = new HtmlAudio(this);
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

defineClass(190, 117, {117:1}, HtmlPlatform);
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
var Lplayn_html_HtmlPlatform_2_classLit = createForClass(190);
function HtmlPlatform$1(this$0){
  this.this$01 = this$0;
}

defineClass(204, 1, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass(204);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(194, 1, $intern_36, HtmlPlatform$2);
_.run = function run_3(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass(194);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(205, 1, $intern_36, HtmlPlatform$3);
_.run = function run_4(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass(205);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(189, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.experimentalFullscreen = false;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass(189);
function $setLoopingImpl(this$static, looping){
  this$static.impl.setLooping_0(looping);
}

function $setVolumeImpl(this$static, volume){
  this$static.impl.setVolume_0(round_int(volume * 100));
}

function HtmlSound(exec_0, sound){
  Sound.call(this, new Exec$1(exec_0));
  $addEventHandler(sound, new HtmlSound$1(this, sound));
}

defineClass(377, 376, {104:1}, HtmlSound);
var Lplayn_html_HtmlSound_2_classLit = createForClass(377);
function $onSoundLoadStateChange(this$static, event_0){
  var loadState;
  loadState = event_0.loadState;
  switch (loadState.ordinal) {
    case 5:
    case 4:
      break;
    case 2:
    case 1:
    case 3:
      $succeed_1(this$static.this$01, this$static.val$sound2);
      break;
    case 0:
      $fail_1(this$static.this$01, new Exception(loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal));
      break;
    default:throw toJs(new RuntimeException_0('Unrecognized sound load state ' + (loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal)));
  }
}

function HtmlSound$1(this$0, val$sound){
  this.this$01 = this$0;
  this.val$sound2 = val$sound;
}

defineClass(378, 1, {464:1}, HtmlSound$1);
var Lplayn_html_HtmlSound$1_2_classLit = createForClass(378);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(238, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass(238);
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

function $name_0(this$static){
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

defineClass(79, 1, $intern_40);
_.toString_0 = function toString_39(){
  var buf;
  buf = new StringBuilder_0($name_0(this));
  $append_7($append_4((buf.string += ' @ ' , buf), hashCode__I__devirtual$(this)), ' [');
  this.toString_1(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_1 = function toString_40(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
}
;
_.flags = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
var Lplayn_scene_Layer_2_classLit = createForClass(79);
defineClass(317, 79, $intern_40);
var Lplayn_scene_ClippedLayer_2_classLit = createForClass(317);
defineClass(318, 317, $intern_40);
_.iterator = function iterator_16(){
  return new ArrayList$1(this.children);
}
;
_.toString_1 = function toString_41(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
var Lplayn_scene_GroupLayer_2_classLit = createForClass(318);
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

function values_22(){
  $clinit_Layer$Flag();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 80, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(80, 6, {3:1, 7:1, 6:1, 80:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum(80, values_22);
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

function values_23(){
  $clinit_Layer$Origin();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 17, 0, [FIXED_0, CENTER, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(17, 6, $intern_41);
var BC, CENTER, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum(17, values_23);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(320, 17, $intern_41, Layer$Origin$1);
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum(320, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(329, 17, $intern_41, Layer$Origin$10);
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum(329, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(321, 17, $intern_41, Layer$Origin$2);
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum(321, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(322, 17, $intern_41, Layer$Origin$3);
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum(322, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(323, 17, $intern_41, Layer$Origin$4);
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum(323, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(324, 17, $intern_41, Layer$Origin$5);
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum(324, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(325, 17, $intern_41, Layer$Origin$6);
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum(325, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(326, 17, $intern_41, Layer$Origin$7);
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum(326, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(327, 17, $intern_41, Layer$Origin$8);
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum(327, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(328, 17, $intern_41, Layer$Origin$9);
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum(328, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_24(){
  $clinit_Layer$State();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 91, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(91, 6, {3:1, 7:1, 6:1, 91:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum(91, values_24);
function RootLayer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  $clinit_Layer$Origin();
  $setFlag_0(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
  this.children = new ArrayList;
  new AffineTransform;
  $setState(this, ADDED);
}

defineClass(319, 318, $intern_40, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass(319);
function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(220, 426, {}, SceneGame$1);
_.onEmit = function onEmit_3(clock){
  var lastArg;
  $paintScene((lastArg = this , clock , lastArg).this$01);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass(220);
defineClass(148, 1, {148:1});
_.equals_0 = function equals_21(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 78)) {
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
_.toString_0 = function toString_42(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass(148);
defineClass(152, 1, {152:1, 63:1});
_.equals_0 = function equals_22(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 82)) {
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
_.toString_0 = function toString_43(){
  return pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass(152);
defineClass(444, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass(444);
defineClass(165, 1, {165:1, 63:1});
_.equals_0 = function equals_23(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 46)) {
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
_.toString_0 = function toString_44(){
  return vectorToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass(165);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $scale_1(this$static, scaleX, scaleY){
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

function $translate_0(this$static){
  this$static.tx += this$static.m10 * 12;
  this$static.ty += this$static.m11 * 12;
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

defineClass(83, 444, {83:1}, AffineTransform, AffineTransform_0);
_.toString_0 = function toString_45(){
  return this.m00 != 1 || this.m01 != 0 || this.m10 != 0 || this.m11 != 1?'affine [' + toString_46(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_46(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_46(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_46(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']':this.tx != 0 || this.ty != 0?'trans ' + new Vector_0(this.tx, this.ty):'ident';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass(83);
function Dimension(){
  Dimension_0.call(this);
}

function Dimension_0(){
  this.width_0 = 0;
  this.height_0 = 0;
}

defineClass(78, 148, {3:1, 148:1, 78:1}, Dimension, Dimension_0);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass(78);
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
  return v >= 0 || iv == v || iv == $intern_28?iv:iv - 1;
}

function toString_46(value_0, decimalPlaces){
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

defineClass(82, 152, {3:1, 152:1, 82:1, 63:1}, Point, Point_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass(82);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_46(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(y_0, TO_STRING_DECIMAL_PLACES));
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

defineClass(46, 165, {165:1, 46:1, 63:1}, Vector, Vector_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass(46);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_42, $intern_42);
  new Vector_0($intern_43, $intern_43);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_46(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(y_0, TO_STRING_DECIMAL_PLACES));
}

function $intersects_0(this$static, rx, ry, rw, rh){
  var x1, x2, y1, y2;
  if (this$static.width_0 <= 0 || this$static.height_0 <= 0)
    return false;
  x1 = this$static.x_0;
  y1 = this$static.y_0;
  x2 = x1 + this$static.width_0;
  y2 = y1 + this$static.height_0;
  return rx + rw > x1 && rx < x2 && ry + rh > y1 && ry < y2;
}

defineClass(188, 1, {188:1});
_.equals_0 = function equals_24(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 137)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_26(){
  return this.x_0 ^ this.y_0 ^ this.width_0 ^ this.height_0;
}
;
_.toString_0 = function toString_47(){
  return this.width_0 + 'x' + this.height_0 + pointToString_0(this.x_0, this.y_0);
}
;
var Lpythagoras_i_AbstractRectangle_2_classLit = createForClass(188);
function pointToString_0(x_0, y_0){
  var buf;
  buf = new StringBuilder;
  x_0 >= 0 && (buf.string += '+' , buf);
  buf.string += x_0;
  y_0 >= 0 && (buf.string += '+' , buf);
  buf.string += y_0;
  return buf.string;
}

function $setLocation(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
}

function $setSize_0(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Rectangle(){
}

defineClass(137, 188, {3:1, 188:1, 137:1}, Rectangle);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_i_Rectangle_2_classLit = createForClass(137);
function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

defineClass(434, 433, {});
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass(434);
defineClass(435, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass(435);
function AbstractSignal$1(){
}

defineClass(286, 435, {}, AbstractSignal$1);
_.notify = function notify(slot, event_0, _1, _2){
  slot.onEmit(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass(286);
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

defineClass(166, 433, {166:1});
_.equals_0 = function equals_25(other){
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
_.hashCode_0 = function hashCode_27(){
  var value_0;
  value_0 = this._value;
  return !value_0?0:getHashCode(value_0);
}
;
_.toString_0 = function toString_48(){
  var cname;
  cname = ($ensureNamesAreInitialized(Lreact_Value_2_classLit) , Lreact_Value_2_classLit.typeName);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this._value + ')';
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass(166);
function AbstractValue$1(){
}

defineClass(353, 435, {}, AbstractValue$1);
_.notify = function notify_0(lner, value_0, oldValue, ignored){
  lner.onEmit(value_0);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass(353);
defineClass(442, 1, $intern_35);
var Lreact_Connection_2_classLit = createForClass(442);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw toJs(new IllegalStateException_0('Cannot change priority of disconnected connection.'));
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

function remove_33(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next_0;
  head.next_0 = remove_33(head.next_0, cons);
  return head;
}

defineClass(151, 442, $intern_35, Cons);
_.toString_0 = function toString_49(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next_0 + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass(151);
defineClass(443, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass(443);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(336, 443, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass(336);
function RFuture$1(val$result){
  $clinit_Reactor();
  this.val$result1 = val$result;
}

defineClass(296, 437, {}, RFuture$1);
_.result = function result_1(){
  return this.val$result1;
}
;
var Lreact_RFuture$1_2_classLit = createForClass(296);
function RPromise$1(){
}

defineClass(295, 435, {}, RPromise$1);
_.notify = function notify_1(lner, value_0, i0, i1){
  lner.onEmit(value_0);
}
;
var Lreact_RPromise$1_2_classLit = createForClass(295);
defineClass(428, 1, $intern_36);
var Lreact_Reactor$Runs_2_classLit = createForClass(428);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(213, 428, $intern_36, Reactor$1);
_.run = function run_5(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$1_2_classLit = createForClass(213);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(214, 428, $intern_36, Reactor$2);
_.run = function run_6(){
  this.this$01._listeners = remove_33(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$2_2_classLit = createForClass(214);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(215, 428, $intern_36, Reactor$4);
_.run = function run_7(){
  $notify(this.this$01, this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass(215);
function $emit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

function Signal(){
  $clinit_AbstractSignal();
}

defineClass(66, 434, {}, Signal);
var Lreact_Signal_2_classLit = createForClass(66);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP = new Slots$1;
}

var NOOP;
defineClass(427, 426, $intern_36);
_.onEmit = function onEmit_4(event_0){
  this.onEmit_0();
}
;
_.run = function run_8(){
  this.onEmit_0();
}
;
var Lreact_UnitSlot_2_classLit = createForClass(427);
function Slots$1(){
}

defineClass(383, 427, $intern_36, Slots$1);
_.onEmit_0 = function onEmit_5(){
}
;
var Lreact_Slots$1_2_classLit = createForClass(383);
defineClass(133, 1, {133:1});
var Lreact_Try_2_classLit = createForClass(133);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(176, 133, {133:1}, Try$Failure);
_.toString_0 = function toString_50(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass(176);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(134, 133, {133:1}, Try$Success);
_.toString_0 = function toString_51(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass(134);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(167, 166, {166:1, 167:1}, Value);
var Lreact_Value_2_classLit = createForClass(167);
var C_classLit = createForPrimitive('C');
var Z_classLit = createForPrimitive('Z');
var D_classLit = createForPrimitive('D');
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


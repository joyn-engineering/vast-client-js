'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Ad = function Ad() {
  _classCallCheck(this, Ad);

  this.id = null;
  this.sequence = null;
  this.system = null;
  this.title = null;
  this.description = null;
  this.advertiser = null;
  this.pricing = null;
  this.survey = null;
  this.errorURLTemplates = [];
  this.impressionURLTemplates = [];
  this.creatives = [];
  this.extensions = [];
  this.adVerifications = [];
};

var AdExtension =
/*#__PURE__*/
function () {
  function AdExtension() {
    _classCallCheck(this, AdExtension);

    this.name = null;
    this.value = null;
    this.attributes = {};
    this.children = [];
  }

  _createClass(AdExtension, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.value === null && Object.keys(this.attributes).length === 0 && this.children.length === 0;
    }
  }]);

  return AdExtension;
}();

var AdVerification = function AdVerification() {
  _classCallCheck(this, AdVerification);

  this.resource = null;
  this.vendor = null;
  this.browserOptional = false;
  this.apiFramework = null;
  this.parameters = null;
};

var CompanionAd = function CompanionAd() {
  var creativeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, CompanionAd);

  this.id = creativeAttributes.id || null;
  this.width = creativeAttributes.width || 0;
  this.height = creativeAttributes.height || 0;
  this.assetWidth = creativeAttributes.assetWidth || null;
  this.assetHeight = creativeAttributes.assetHeight || null;
  this.expandedWidth = creativeAttributes.expandedWidth || null;
  this.expandedHeight = creativeAttributes.expandedHeight || null;
  this.apiFramework = creativeAttributes.apiFramework || null;
  this.adSlotID = creativeAttributes.adSlotID || null;
  this.staticResources = [];
  this.htmlResources = [];
  this.iframeResources = [];
  this.adParameters = null;
  this.xmlEncoded = null;
  this.altText = null;
  this.companionClickThroughURLTemplate = null;
  this.companionClickTrackingURLTemplates = [];
  this.trackingEvents = {};
};

var Creative = function Creative() {
  var creativeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Creative);

  this.id = creativeAttributes.id || null;
  this.adId = creativeAttributes.adId || null;
  this.sequence = creativeAttributes.sequence || null;
  this.apiFramework = creativeAttributes.apiFramework || null;
};

var CreativeCompanion =
/*#__PURE__*/
function (_Creative) {
  _inherits(CreativeCompanion, _Creative);

  function CreativeCompanion() {
    var _this;

    var creativeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CreativeCompanion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreativeCompanion).call(this, creativeAttributes));
    _this.type = 'companion';
    _this.required = null;
    _this.variations = [];
    return _this;
  }

  return CreativeCompanion;
}(Creative);

function track(URLTemplates, variables, options) {
  var URLs = resolveURLTemplates(URLTemplates, variables, options);
  URLs.forEach(function (URL) {
    if (typeof window !== 'undefined' && window !== null) {
      var i = new Image();
      i.src = URL;
    }
  });
}
/**
 * Replace the provided URLTemplates with the given values
 *
 * @param {Array} URLTemplates - An array of tracking url templates.
 * @param {Object} [variables={}] - An optional Object of parameters to be used in the tracking calls.
 * @param {Object} [options={}] - An optional Object of options to be used in the tracking calls.
 */


function resolveURLTemplates(URLTemplates) {
  var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var URLs = []; // Encode String variables, when given

  if (variables['ASSETURI']) {
    variables['ASSETURI'] = encodeURIComponentRFC3986(variables['ASSETURI']);
  }

  if (variables['CONTENTPLAYHEAD']) {
    variables['CONTENTPLAYHEAD'] = encodeURIComponentRFC3986(variables['CONTENTPLAYHEAD']);
  } // Set default value for invalid ERRORCODE


  if (variables['ERRORCODE'] && !options.isCustomCode && !/^[0-9]{3}$/.test(variables['ERRORCODE'])) {
    variables['ERRORCODE'] = 900;
  } // Calc random/time based macros


  variables['CACHEBUSTING'] = leftpad(Math.round(Math.random() * 1.0e8).toString());
  variables['TIMESTAMP'] = encodeURIComponentRFC3986(new Date().toISOString()); // RANDOM/random is not defined in VAST 3/4 as a valid macro tho it's used by some adServer (Auditude)

  variables['RANDOM'] = variables['random'] = variables['CACHEBUSTING'];

  for (var URLTemplateKey in URLTemplates) {
    var resolveURL = URLTemplates[URLTemplateKey];

    if (typeof resolveURL !== 'string') {
      continue;
    }

    for (var key in variables) {
      var value = variables[key];
      var macro1 = "[".concat(key, "]");
      var macro2 = "%%".concat(key, "%%");
      resolveURL = resolveURL.replace(macro1, value);
      resolveURL = resolveURL.replace(macro2, value);
    }

    URLs.push(resolveURL);
  }

  return URLs;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent


function encodeURIComponentRFC3986(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%".concat(c.charCodeAt(0).toString(16));
  });
}

function leftpad(str) {
  if (str.length < 8) {
    return range(0, 8 - str.length, false).map(function () {
      return '0';
    }).join('') + str;
  }

  return str;
}

function range(left, right, inclusive) {
  var result = [];
  var ascending = left < right;
  var end = !inclusive ? right : ascending ? right + 1 : right - 1;

  for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    result.push(i);
  }

  return result;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
/**
 * Joins two arrays without duplicates
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */


function joinArrayUnique() {
  var arr1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var arr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var firstArr = Array.isArray(arr1) ? arr1 : [];
  var secondArr = Array.isArray(arr2) ? arr2 : [];
  var arr = firstArr.concat(secondArr);
  return arr.reduce(function (res, val) {
    if (res.indexOf(val) === -1) {
      res.push(val);
    }

    return res;
  }, []);
}

var util = {
  track: track,
  resolveURLTemplates: resolveURLTemplates,
  encodeURIComponentRFC3986: encodeURIComponentRFC3986,
  leftpad: leftpad,
  range: range,
  isNumeric: isNumeric,
  flatten: flatten,
  joinArrayUnique: joinArrayUnique
};

/**
 * This module provides support methods to the parsing classes.
 */

/**
 * Returns the first element of the given node which nodeName matches the given name.
 * @param  {Node} node - The node to use to find a match.
 * @param  {String} name - The name to look for.
 * @return {Object|undefined}
 */

function childByName(node, name) {
  var childNodes = node.childNodes;

  for (var childKey in childNodes) {
    var child = childNodes[childKey];

    if (child.nodeName === name) {
      return child;
    }
  }
}
/**
 * Returns all the elements of the given node which nodeName match the given name.
 * @param  {Node} node - The node to use to find the matches.
 * @param  {String} name - The name to look for.
 * @return {Array}
 */


function childrenByName(node, name) {
  var children = [];
  var childNodes = node.childNodes;

  for (var childKey in childNodes) {
    var child = childNodes[childKey];

    if (child.nodeName === name) {
      children.push(child);
    }
  }

  return children;
}
/**
 * Converts relative vastAdTagUri.
 * @param  {String} vastAdTagUrl - The url to resolve.
 * @param  {String} originalUrl - The original url.
 * @return {String}
 */


function resolveVastAdTagURI(vastAdTagUrl, originalUrl) {
  if (!originalUrl) {
    return vastAdTagUrl;
  }

  if (vastAdTagUrl.indexOf('//') === 0) {
    var _location = location,
        protocol = _location.protocol;
    return "".concat(protocol).concat(vastAdTagUrl);
  }

  if (vastAdTagUrl.indexOf('://') === -1) {
    // Resolve relative URLs (mainly for unit testing)
    var baseURL = originalUrl.slice(0, originalUrl.lastIndexOf('/'));
    return "".concat(baseURL, "/").concat(vastAdTagUrl);
  }

  return vastAdTagUrl;
}
/**
 * Converts a boolean string into a Boolean.
 * @param  {String} booleanString - The boolean string to convert.
 * @return {Boolean}
 */


function parseBoolean(booleanString) {
  return ['true', 'TRUE', '1'].indexOf(booleanString) !== -1;
}
/**
 * Parses a node text (for legacy support).
 * @param  {Object} node - The node to parse the text from.
 * @return {String}
 */


function parseNodeText(node) {
  return node && (node.textContent || node.text || '').trim();
}
/**
 * Copies an attribute from a node to another.
 * @param  {String} attributeName - The name of the attribute to clone.
 * @param  {Object} nodeSource - The source node to copy the attribute from.
 * @param  {Object} nodeDestination - The destination node to copy the attribute at.
 */


function copyNodeAttribute(attributeName, nodeSource, nodeDestination) {
  var attributeValue = nodeSource.getAttribute(attributeName);

  if (attributeValue) {
    nodeDestination.setAttribute(attributeName, attributeValue);
  }
}
/**
 * Converts element attributes into an object, where object key is attribute name
 * and object value is attribute value
 * @param {Element} element
 * @returns {Object}
 */


function parseAttributes(element) {
  var nodeAttributes = element.attributes;
  var attributes = {};

  for (var i = 0; i < nodeAttributes.length; i++) {
    attributes[nodeAttributes[i].nodeName] = nodeAttributes[i].nodeValue;
  }

  return attributes;
}
/**
 * Parses a String duration into a Number.
 * @param  {String} durationString - The dureation represented as a string.
 * @return {Number}
 */


function parseDuration(durationString) {
  if (durationString === null || typeof durationString === 'undefined') {
    return -1;
  } // Some VAST doesn't have an HH:MM:SS duration format but instead jus the number of seconds


  if (util.isNumeric(durationString)) {
    return parseInt(durationString);
  }

  var durationComponents = durationString.split(':');

  if (durationComponents.length !== 3) {
    return -1;
  }

  var secondsAndMS = durationComponents[2].split('.');
  var seconds = parseInt(secondsAndMS[0]);

  if (secondsAndMS.length === 2) {
    seconds += parseFloat("0.".concat(secondsAndMS[1]));
  }

  var minutes = parseInt(durationComponents[1] * 60);
  var hours = parseInt(durationComponents[0] * 60 * 60);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || minutes > 60 * 60 || seconds > 60) {
    return -1;
  }

  return hours + minutes + seconds;
}
/**
 * Splits an Array of ads into an Array of Arrays of ads.
 * Each subarray contains either one ad or multiple ads (an AdPod)
 * @param  {Array} ads - An Array of ads to split
 * @return {Array}
 */


function splitVAST(ads) {
  var splittedVAST = [];
  var lastAdPod = null;
  ads.forEach(function (ad, i) {
    if (ad.sequence) {
      ad.sequence = parseInt(ad.sequence, 10);
    } // The current Ad may be the next Ad of an AdPod


    if (ad.sequence > 1) {
      var lastAd = ads[i - 1]; // check if the current Ad is exactly the next one in the AdPod

      if (lastAd && lastAd.sequence === ad.sequence - 1) {
        lastAdPod && lastAdPod.push(ad);
        return;
      } // If the ad had a sequence attribute but it was not part of a correctly formed
      // AdPod, let's remove the sequence attribute


      delete ad.sequence;
    }

    lastAdPod = [ad];
    splittedVAST.push(lastAdPod);
  });
  return splittedVAST;
}
/**
 * Parses the attributes and assign them to object
 * @param  {Object} attributes attribute
 * @param  {Object} verificationObject with properties which can be assigned
 */


function assignAttributes(attributes, verificationObject) {
  if (attributes) {
    for (var attrKey in attributes) {
      var attribute = attributes[attrKey];

      if (attribute.nodeName && attribute.nodeValue && verificationObject.hasOwnProperty(attribute.nodeName)) {
        var value = attribute.nodeValue;

        if (typeof verificationObject[attribute.nodeName] === 'boolean') {
          value = parseBoolean(value);
        }

        verificationObject[attribute.nodeName] = value;
      }
    }
  }
}
/**
 * Merges the data between an unwrapped ad and his wrapper.
 * @param  {Ad} unwrappedAd - The 'unwrapped' Ad.
 * @param  {Ad} wrapper - The wrapper Ad.
 * @return {void}
 */


function mergeWrapperAdData(unwrappedAd, wrapper) {
  unwrappedAd.errorURLTemplates = wrapper.errorURLTemplates.concat(unwrappedAd.errorURLTemplates);
  unwrappedAd.impressionURLTemplates = wrapper.impressionURLTemplates.concat(unwrappedAd.impressionURLTemplates);
  unwrappedAd.extensions = wrapper.extensions.concat(unwrappedAd.extensions);
  var wrapperCompanions = (wrapper.creatives || []).filter(function (creative) {
    return creative && creative.type === 'companion';
  });
  var wrapperCompanionClickTracking = wrapperCompanions.reduce(function (result, creative) {
    (creative.variations || []).forEach(function (variation) {
      (variation.companionClickTrackingURLTemplates || []).forEach(function (url) {
        if (result.indexOf(url) === -1) {
          result.push(url);
        }
      });
    });
    return result;
  }, []);
  unwrappedAd.creatives = wrapperCompanions.concat(unwrappedAd.creatives);
  var wrapperHasVideoClickTracking = wrapper.videoClickTrackingURLTemplates && wrapper.videoClickTrackingURLTemplates.length;
  var wrapperHasVideoCustomClick = wrapper.videoCustomClickURLTemplates && wrapper.videoCustomClickURLTemplates.length;
  unwrappedAd.creatives.forEach(function (creative) {
    // merge tracking events
    if (wrapper.trackingEvents && wrapper.trackingEvents[creative.type]) {
      for (var eventName in wrapper.trackingEvents[creative.type]) {
        var urls = wrapper.trackingEvents[creative.type][eventName];

        if (!Array.isArray(creative.trackingEvents[eventName])) {
          creative.trackingEvents[eventName] = [];
        }

        creative.trackingEvents[eventName] = creative.trackingEvents[eventName].concat(urls);
      }
    }

    if (creative.type === 'linear') {
      // merge video click tracking url
      if (wrapperHasVideoClickTracking) {
        creative.videoClickTrackingURLTemplates = creative.videoClickTrackingURLTemplates.concat(wrapper.videoClickTrackingURLTemplates);
      } // merge video custom click url


      if (wrapperHasVideoCustomClick) {
        creative.videoCustomClickURLTemplates = creative.videoCustomClickURLTemplates.concat(wrapper.videoCustomClickURLTemplates);
      } // VAST 2.0 support - Use Wrapper/linear/clickThrough when Inline/Linear/clickThrough is null


      if (wrapper.videoClickThroughURLTemplate && (creative.videoClickThroughURLTemplate === null || typeof creative.videoClickThroughURLTemplate === 'undefined')) {
        creative.videoClickThroughURLTemplate = wrapper.videoClickThroughURLTemplate;
      }
    } // pass wrapper companion trackers to all companions


    if (creative.type === 'companion' && wrapperCompanionClickTracking.length) {
      (creative.variations || []).forEach(function (variation) {
        variation.companionClickTrackingURLTemplates = util.joinArrayUnique(variation.companionClickTrackingURLTemplates, wrapperCompanionClickTracking);
      });
    }
  });
}

var parserUtils = {
  childByName: childByName,
  childrenByName: childrenByName,
  resolveVastAdTagURI: resolveVastAdTagURI,
  parseBoolean: parseBoolean,
  parseNodeText: parseNodeText,
  copyNodeAttribute: copyNodeAttribute,
  parseAttributes: parseAttributes,
  parseDuration: parseDuration,
  splitVAST: splitVAST,
  assignAttributes: assignAttributes,
  mergeWrapperAdData: mergeWrapperAdData
};

/**
 * This module provides methods to parse a VAST CompanionAd Element.
 */

/**
 * Parses a CompanionAd.
 * @param  {Object} creativeElement - The VAST CompanionAd element to parse.
 * @param  {Object} creativeAttributes - The attributes of the CompanionAd (optional).
 * @return {CreativeCompanion}
 */

function parseCreativeCompanion(creativeElement, creativeAttributes) {
  var creative = new CreativeCompanion(creativeAttributes);
  creative.required = creativeElement.getAttribute('required') || null;
  creative.variations = parserUtils.childrenByName(creativeElement, 'Companion').map(function (companionResource) {
    var companionAd = new CompanionAd(parserUtils.parseAttributes(companionResource));
    companionAd.htmlResources = parserUtils.childrenByName(companionResource, 'HTMLResource').reduce(function (urls, resource) {
      var url = parserUtils.parseNodeText(resource);
      return url ? urls.concat(url) : urls;
    }, []);
    companionAd.iframeResources = parserUtils.childrenByName(companionResource, 'IFrameResource').reduce(function (urls, resource) {
      var url = parserUtils.parseNodeText(resource);
      return url ? urls.concat(url) : urls;
    }, []);
    companionAd.staticResources = parserUtils.childrenByName(companionResource, 'StaticResource').reduce(function (urls, resource) {
      var url = parserUtils.parseNodeText(resource);
      return url ? urls.concat({
        url: url,
        creativeType: resource.getAttribute('creativeType') || null
      }) : urls;
    }, []);
    companionAd.altText = parserUtils.parseNodeText(parserUtils.childByName(companionResource, 'AltText')) || null;
    var trackingEventsElement = parserUtils.childByName(companionResource, 'TrackingEvents');

    if (trackingEventsElement) {
      parserUtils.childrenByName(trackingEventsElement, 'Tracking').forEach(function (trackingElement) {
        var eventName = trackingElement.getAttribute('event');
        var trackingURLTemplate = parserUtils.parseNodeText(trackingElement);

        if (eventName && trackingURLTemplate) {
          if (!Array.isArray(companionAd.trackingEvents[eventName])) {
            companionAd.trackingEvents[eventName] = [];
          }

          companionAd.trackingEvents[eventName].push(trackingURLTemplate);
        }
      });
    }

    companionAd.companionClickTrackingURLTemplates = parserUtils.childrenByName(companionResource, 'CompanionClickTracking').map(function (clickTrackingElement) {
      return parserUtils.parseNodeText(clickTrackingElement);
    });
    companionAd.companionClickThroughURLTemplate = parserUtils.parseNodeText(parserUtils.childByName(companionResource, 'CompanionClickThrough')) || null;
    var adParametersElement = parserUtils.childByName(companionResource, 'AdParameters');

    if (adParametersElement) {
      companionAd.adParameters = parserUtils.parseNodeText(adParametersElement);
      companionAd.xmlEncoded = adParametersElement.getAttribute('xmlEncoded') || null;
    }

    return companionAd;
  });
  return creative;
}

var CreativeLinear =
/*#__PURE__*/
function (_Creative) {
  _inherits(CreativeLinear, _Creative);

  function CreativeLinear() {
    var _this;

    var creativeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CreativeLinear);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreativeLinear).call(this, creativeAttributes));
    _this.type = 'linear';
    _this.duration = 0;
    _this.skipDelay = null;
    _this.mediaFiles = [];
    _this.mezzanine = null;
    _this.videoClickThroughURLTemplate = null;
    _this.videoClickTrackingURLTemplates = [];
    _this.videoCustomClickURLTemplates = [];
    _this.adParameters = null;
    _this.icons = [];
    _this.trackingEvents = {};
    return _this;
  }

  return CreativeLinear;
}(Creative);

var Icon = function Icon() {
  _classCallCheck(this, Icon);

  this.program = null;
  this.height = 0;
  this.width = 0;
  this.xPosition = 0;
  this.yPosition = 0;
  this.apiFramework = null;
  this.offset = null;
  this.duration = 0;
  this.type = null;
  this.staticResource = null;
  this.htmlResource = null;
  this.iframeResource = null;
  this.iconClickThroughURLTemplate = null;
  this.iconClickTrackingURLTemplates = [];
  this.iconViewTrackingURLTemplate = null;
};

var MediaFile = function MediaFile() {
  _classCallCheck(this, MediaFile);

  this.id = null;
  this.fileURL = null;
  this.deliveryType = 'progressive';
  this.mimeType = null;
  this.codec = null;
  this.bitrate = 0;
  this.minBitrate = 0;
  this.maxBitrate = 0;
  this.width = 0;
  this.height = 0;
  this.apiFramework = null;
  this.scalable = null;
  this.maintainAspectRatio = null;
};

var Mezzanine = function Mezzanine() {
  _classCallCheck(this, Mezzanine);

  this.id = null;
  this.fileURL = null;
  this.delivery = null;
  this.codec = null;
  this.type = null;
  this.width = 0;
  this.height = 0;
  this.fileSize = 0;
  this.mediaType = '2D';
};

/**
 * This module provides methods to parse a VAST Linear Element.
 */

/**
 * Parses a Linear element.
 * @param  {Object} creativeElement - The VAST Linear element to parse.
 * @param  {any} creativeAttributes - The attributes of the Linear (optional).
 * @return {CreativeLinear}
 */

function parseCreativeLinear(creativeElement, creativeAttributes) {
  var offset;
  var creative = new CreativeLinear(creativeAttributes);
  creative.duration = parserUtils.parseDuration(parserUtils.parseNodeText(parserUtils.childByName(creativeElement, 'Duration')));
  var skipOffset = creativeElement.getAttribute('skipoffset');

  if (typeof skipOffset === 'undefined' || skipOffset === null) {
    creative.skipDelay = null;
  } else if (skipOffset.charAt(skipOffset.length - 1) === '%' && creative.duration !== -1) {
    var percent = parseInt(skipOffset, 10);
    creative.skipDelay = creative.duration * (percent / 100);
  } else {
    creative.skipDelay = parserUtils.parseDuration(skipOffset);
  }

  var videoClicksElement = parserUtils.childByName(creativeElement, 'VideoClicks');

  if (videoClicksElement) {
    creative.videoClickThroughURLTemplate = parserUtils.parseNodeText(parserUtils.childByName(videoClicksElement, 'ClickThrough'));
    parserUtils.childrenByName(videoClicksElement, 'ClickTracking').forEach(function (clickTrackingElement) {
      creative.videoClickTrackingURLTemplates.push(parserUtils.parseNodeText(clickTrackingElement));
    });
    parserUtils.childrenByName(videoClicksElement, 'CustomClick').forEach(function (customClickElement) {
      creative.videoCustomClickURLTemplates.push(parserUtils.parseNodeText(customClickElement));
    });
  }

  var adParamsElement = parserUtils.childByName(creativeElement, 'AdParameters');

  if (adParamsElement) {
    creative.adParameters = parserUtils.parseNodeText(adParamsElement);
  }

  parserUtils.childrenByName(creativeElement, 'TrackingEvents').forEach(function (trackingEventsElement) {
    parserUtils.childrenByName(trackingEventsElement, 'Tracking').forEach(function (trackingElement) {
      var eventName = trackingElement.getAttribute('event');
      var trackingURLTemplate = parserUtils.parseNodeText(trackingElement);

      if (eventName && trackingURLTemplate) {
        if (eventName === 'progress') {
          offset = trackingElement.getAttribute('offset');

          if (!offset) {
            return;
          }

          if (offset.charAt(offset.length - 1) === '%') {
            eventName = "progress-".concat(offset);
          } else {
            eventName = "progress-".concat(Math.round(parserUtils.parseDuration(offset)));
          }
        }

        if (!Array.isArray(creative.trackingEvents[eventName])) {
          creative.trackingEvents[eventName] = [];
        }

        creative.trackingEvents[eventName].push(trackingURLTemplate);
      }
    });
  });
  parserUtils.childrenByName(creativeElement, 'MediaFiles').forEach(function (mediaFilesElement) {
    parserUtils.childrenByName(mediaFilesElement, 'MediaFile').forEach(function (mediaFileElement) {
      var mediaFile = new MediaFile();
      mediaFile.id = mediaFileElement.getAttribute('id');
      mediaFile.fileURL = parserUtils.parseNodeText(mediaFileElement);
      mediaFile.deliveryType = mediaFileElement.getAttribute('delivery');
      mediaFile.codec = mediaFileElement.getAttribute('codec');
      mediaFile.mimeType = mediaFileElement.getAttribute('type');
      mediaFile.apiFramework = mediaFileElement.getAttribute('apiFramework');
      mediaFile.bitrate = parseInt(mediaFileElement.getAttribute('bitrate') || 0);
      mediaFile.minBitrate = parseInt(mediaFileElement.getAttribute('minBitrate') || 0);
      mediaFile.maxBitrate = parseInt(mediaFileElement.getAttribute('maxBitrate') || 0);
      mediaFile.width = parseInt(mediaFileElement.getAttribute('width') || 0);
      mediaFile.height = parseInt(mediaFileElement.getAttribute('height') || 0);
      var scalable = mediaFileElement.getAttribute('scalable');

      if (scalable && typeof scalable === 'string') {
        scalable = scalable.toLowerCase();

        if (scalable === 'true') {
          mediaFile.scalable = true;
        } else if (scalable === 'false') {
          mediaFile.scalable = false;
        }
      }

      var maintainAspectRatio = mediaFileElement.getAttribute('maintainAspectRatio');

      if (maintainAspectRatio && typeof maintainAspectRatio === 'string') {
        maintainAspectRatio = maintainAspectRatio.toLowerCase();

        if (maintainAspectRatio === 'true') {
          mediaFile.maintainAspectRatio = true;
        } else if (maintainAspectRatio === 'false') {
          mediaFile.maintainAspectRatio = false;
        }
      }

      creative.mediaFiles.push(mediaFile);
    });
    var mezzanineElement = parserUtils.childByName(mediaFilesElement, 'Mezzanine');

    if (mezzanineElement && mezzanineElement.getAttribute('delivery') && mezzanineElement.getAttribute('type') && mezzanineElement.getAttribute('width') && mezzanineElement.getAttribute('height')) {
      var mezzanine = new Mezzanine();
      mezzanine.id = mezzanineElement.getAttribute('id');
      mezzanine.fileURL = parserUtils.parseNodeText(mezzanineElement);
      mezzanine.delivery = mezzanineElement.getAttribute('delivery');
      mezzanine.codec = mezzanineElement.getAttribute('codec');
      mezzanine.type = mezzanineElement.getAttribute('type');
      mezzanine.width = parseInt(mezzanineElement.getAttribute('width'), 10);
      mezzanine.height = parseInt(mezzanineElement.getAttribute('height'), 10);
      mezzanine.fileSize = parseInt(mezzanineElement.getAttribute('fileSize'), 10);
      mezzanine.mediaType = mezzanineElement.getAttribute('mediaType') || '2D';
      creative.mezzanine = mezzanine;
    }
  });
  var iconsElement = parserUtils.childByName(creativeElement, 'Icons');

  if (iconsElement) {
    parserUtils.childrenByName(iconsElement, 'Icon').forEach(function (iconElement) {
      var icon = new Icon();
      icon.program = iconElement.getAttribute('program');
      icon.height = parseInt(iconElement.getAttribute('height') || 0);
      icon.width = parseInt(iconElement.getAttribute('width') || 0);
      icon.xPosition = parseXPosition(iconElement.getAttribute('xPosition'));
      icon.yPosition = parseYPosition(iconElement.getAttribute('yPosition'));
      icon.apiFramework = iconElement.getAttribute('apiFramework');
      icon.offset = parserUtils.parseDuration(iconElement.getAttribute('offset'));
      icon.duration = parserUtils.parseDuration(iconElement.getAttribute('duration'));
      parserUtils.childrenByName(iconElement, 'HTMLResource').forEach(function (htmlElement) {
        icon.type = htmlElement.getAttribute('creativeType') || 'text/html';
        icon.htmlResource = parserUtils.parseNodeText(htmlElement);
      });
      parserUtils.childrenByName(iconElement, 'IFrameResource').forEach(function (iframeElement) {
        icon.type = iframeElement.getAttribute('creativeType') || 0;
        icon.iframeResource = parserUtils.parseNodeText(iframeElement);
      });
      parserUtils.childrenByName(iconElement, 'StaticResource').forEach(function (staticElement) {
        icon.type = staticElement.getAttribute('creativeType') || 0;
        icon.staticResource = parserUtils.parseNodeText(staticElement);
      });
      var iconClicksElement = parserUtils.childByName(iconElement, 'IconClicks');

      if (iconClicksElement) {
        icon.iconClickThroughURLTemplate = parserUtils.parseNodeText(parserUtils.childByName(iconClicksElement, 'IconClickThrough'));
        parserUtils.childrenByName(iconClicksElement, 'IconClickTracking').forEach(function (iconClickTrackingElement) {
          icon.iconClickTrackingURLTemplates.push(parserUtils.parseNodeText(iconClickTrackingElement));
        });
      }

      icon.iconViewTrackingURLTemplate = parserUtils.parseNodeText(parserUtils.childByName(iconElement, 'IconViewTracking'));
      creative.icons.push(icon);
    });
  }

  return creative;
}
/**
 * Parses an horizontal position into a String ('left' or 'right') or into a Number.
 * @param  {String} xPosition - The x position to parse.
 * @return {String|Number}
 */

function parseXPosition(xPosition) {
  if (['left', 'right'].indexOf(xPosition) !== -1) {
    return xPosition;
  }

  return parseInt(xPosition || 0);
}
/**
 * Parses an vertical position into a String ('top' or 'bottom') or into a Number.
 * @param  {String} yPosition - The x position to parse.
 * @return {String|Number}
 */


function parseYPosition(yPosition) {
  if (['top', 'bottom'].indexOf(yPosition) !== -1) {
    return yPosition;
  }

  return parseInt(yPosition || 0);
}

var CreativeNonLinear =
/*#__PURE__*/
function (_Creative) {
  _inherits(CreativeNonLinear, _Creative);

  function CreativeNonLinear() {
    var _this;

    var creativeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CreativeNonLinear);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreativeNonLinear).call(this, creativeAttributes));
    _this.type = 'nonlinear';
    _this.variations = [];
    _this.trackingEvents = {};
    return _this;
  }

  return CreativeNonLinear;
}(Creative);

var NonLinearAd = function NonLinearAd() {
  _classCallCheck(this, NonLinearAd);

  this.id = null;
  this.width = 0;
  this.height = 0;
  this.expandedWidth = 0;
  this.expandedHeight = 0;
  this.scalable = true;
  this.maintainAspectRatio = true;
  this.minSuggestedDuration = 0;
  this.apiFramework = 'static';
  this.type = null;
  this.staticResource = null;
  this.htmlResource = null;
  this.iframeResource = null;
  this.nonlinearClickThroughURLTemplate = null;
  this.nonlinearClickTrackingURLTemplates = [];
  this.adParameters = null;
};

/**
 * This module provides methods to parse a VAST NonLinear Element.
 */

/**
 * Parses a NonLinear element.
 * @param  {any} creativeElement - The VAST NonLinear element to parse.
 * @param  {any} creativeAttributes - The attributes of the NonLinear (optional).
 * @return {CreativeNonLinear}
 */

function parseCreativeNonLinear(creativeElement, creativeAttributes) {
  var creative = new CreativeNonLinear(creativeAttributes);
  parserUtils.childrenByName(creativeElement, 'TrackingEvents').forEach(function (trackingEventsElement) {
    var eventName, trackingURLTemplate;
    parserUtils.childrenByName(trackingEventsElement, 'Tracking').forEach(function (trackingElement) {
      eventName = trackingElement.getAttribute('event');
      trackingURLTemplate = parserUtils.parseNodeText(trackingElement);

      if (eventName && trackingURLTemplate) {
        if (!Array.isArray(creative.trackingEvents[eventName])) {
          creative.trackingEvents[eventName] = [];
        }

        creative.trackingEvents[eventName].push(trackingURLTemplate);
      }
    });
  });
  parserUtils.childrenByName(creativeElement, 'NonLinear').forEach(function (nonlinearResource) {
    var nonlinearAd = new NonLinearAd();
    nonlinearAd.id = nonlinearResource.getAttribute('id') || null;
    nonlinearAd.width = nonlinearResource.getAttribute('width');
    nonlinearAd.height = nonlinearResource.getAttribute('height');
    nonlinearAd.expandedWidth = nonlinearResource.getAttribute('expandedWidth');
    nonlinearAd.expandedHeight = nonlinearResource.getAttribute('expandedHeight');
    nonlinearAd.scalable = parserUtils.parseBoolean(nonlinearResource.getAttribute('scalable'));
    nonlinearAd.maintainAspectRatio = parserUtils.parseBoolean(nonlinearResource.getAttribute('maintainAspectRatio'));
    nonlinearAd.minSuggestedDuration = parserUtils.parseDuration(nonlinearResource.getAttribute('minSuggestedDuration'));
    nonlinearAd.apiFramework = nonlinearResource.getAttribute('apiFramework');
    parserUtils.childrenByName(nonlinearResource, 'HTMLResource').forEach(function (htmlElement) {
      nonlinearAd.type = htmlElement.getAttribute('creativeType') || 'text/html';
      nonlinearAd.htmlResource = parserUtils.parseNodeText(htmlElement);
    });
    parserUtils.childrenByName(nonlinearResource, 'IFrameResource').forEach(function (iframeElement) {
      nonlinearAd.type = iframeElement.getAttribute('creativeType') || 0;
      nonlinearAd.iframeResource = parserUtils.parseNodeText(iframeElement);
    });
    parserUtils.childrenByName(nonlinearResource, 'StaticResource').forEach(function (staticElement) {
      nonlinearAd.type = staticElement.getAttribute('creativeType') || 0;
      nonlinearAd.staticResource = parserUtils.parseNodeText(staticElement);
    });
    var adParamsElement = parserUtils.childByName(nonlinearResource, 'AdParameters');

    if (adParamsElement) {
      nonlinearAd.adParameters = parserUtils.parseNodeText(adParamsElement);
    }

    nonlinearAd.nonlinearClickThroughURLTemplate = parserUtils.parseNodeText(parserUtils.childByName(nonlinearResource, 'NonLinearClickThrough'));
    parserUtils.childrenByName(nonlinearResource, 'NonLinearClickTracking').forEach(function (clickTrackingElement) {
      nonlinearAd.nonlinearClickTrackingURLTemplates.push(parserUtils.parseNodeText(clickTrackingElement));
    });
    creative.variations.push(nonlinearAd);
  });
  return creative;
}

/**
 * This module provides methods to parse a VAST Ad Element.
 */

/**
 * Parses an Ad element (can either be a Wrapper or an InLine).
 * @param  {Object} adElement - The VAST Ad element to parse.
 * @return {Ad}
 */

function parseAd(adElement) {
  var childNodes = adElement.childNodes;

  for (var adTypeElementKey in childNodes) {
    var adTypeElement = childNodes[adTypeElementKey];

    if (['Wrapper', 'InLine'].indexOf(adTypeElement.nodeName) === -1) {
      continue;
    }

    parserUtils.copyNodeAttribute('id', adElement, adTypeElement);
    parserUtils.copyNodeAttribute('sequence', adElement, adTypeElement);

    if (adTypeElement.nodeName === 'Wrapper') {
      return parseWrapper(adTypeElement);
    } else if (adTypeElement.nodeName === 'InLine') {
      return parseInLine(adTypeElement);
    }
  }
}
/**
 * Parses an Inline element.
 * @param  {Object} inLineElement - The VAST Inline element to parse.
 * @return {Ad}
 */

function parseInLine(inLineElement) {
  var childNodes = inLineElement.childNodes;
  var ad = new Ad();
  ad.id = inLineElement.getAttribute('id') || null;
  ad.sequence = inLineElement.getAttribute('sequence') || null;

  for (var nodeKey in childNodes) {
    var node = childNodes[nodeKey];

    switch (node.nodeName) {
      case 'Error':
        ad.errorURLTemplates.push(parserUtils.parseNodeText(node));
        break;

      case 'Impression':
        ad.impressionURLTemplates.push(parserUtils.parseNodeText(node));
        break;

      case 'Creatives':
        parserUtils.childrenByName(node, 'Creative').forEach(function (creativeElement) {
          var creativeAttributes = {
            id: creativeElement.getAttribute('id') || null,
            adId: parseCreativeAdIdAttribute(creativeElement),
            sequence: creativeElement.getAttribute('sequence') || null,
            apiFramework: creativeElement.getAttribute('apiFramework') || null
          };

          for (var creativeTypeElementKey in creativeElement.childNodes) {
            var creativeTypeElement = creativeElement.childNodes[creativeTypeElementKey];
            var parsedCreative = void 0;

            switch (creativeTypeElement.nodeName) {
              case 'Linear':
                parsedCreative = parseCreativeLinear(creativeTypeElement, creativeAttributes);

                if (parsedCreative) {
                  ad.creatives.push(parsedCreative);
                }

                break;

              case 'NonLinearAds':
                parsedCreative = parseCreativeNonLinear(creativeTypeElement, creativeAttributes);

                if (parsedCreative) {
                  ad.creatives.push(parsedCreative);
                }

                break;

              case 'CompanionAds':
                parsedCreative = parseCreativeCompanion(creativeTypeElement, creativeAttributes);

                if (parsedCreative) {
                  ad.creatives.push(parsedCreative);
                }

                break;
            }
          }
        });
        break;

      case 'Extensions':
        ad.extensions = _parseExtensions(parserUtils.childrenByName(node, 'Extension'));
        break;

      case 'AdVerifications':
        ad.adVerifications = _parseAdVerifications(parserUtils.childrenByName(node, 'Verification'));
        break;

      case 'AdSystem':
        ad.system = {
          value: parserUtils.parseNodeText(node),
          version: node.getAttribute('version') || null
        };
        break;

      case 'AdTitle':
        ad.title = parserUtils.parseNodeText(node);
        break;

      case 'Description':
        ad.description = parserUtils.parseNodeText(node);
        break;

      case 'Advertiser':
        ad.advertiser = parserUtils.parseNodeText(node);
        break;

      case 'Pricing':
        ad.pricing = {
          value: parserUtils.parseNodeText(node),
          model: node.getAttribute('model') || null,
          currency: node.getAttribute('currency') || null
        };
        break;

      case 'Survey':
        ad.survey = parserUtils.parseNodeText(node);
        break;
    }
  }

  return ad;
}
/**
 * Parses a Wrapper element without resolving the wrapped urls.
 * @param  {Object} wrapperElement - The VAST Wrapper element to be parsed.
 * @return {Ad}
 */


function parseWrapper(wrapperElement) {
  var ad = parseInLine(wrapperElement);
  var wrapperURLElement = parserUtils.childByName(wrapperElement, 'VASTAdTagURI');

  if (wrapperURLElement) {
    ad.nextWrapperURL = parserUtils.parseNodeText(wrapperURLElement);
  } else {
    wrapperURLElement = parserUtils.childByName(wrapperElement, 'VASTAdTagURL');

    if (wrapperURLElement) {
      ad.nextWrapperURL = parserUtils.parseNodeText(parserUtils.childByName(wrapperURLElement, 'URL'));
    }
  }

  ad.creatives.forEach(function (wrapperCreativeElement) {
    if (['linear', 'nonlinear'].indexOf(wrapperCreativeElement.type) !== -1) {
      // TrackingEvents Linear / NonLinear
      if (wrapperCreativeElement.trackingEvents) {
        if (!ad.trackingEvents) {
          ad.trackingEvents = {};
        }

        if (!ad.trackingEvents[wrapperCreativeElement.type]) {
          ad.trackingEvents[wrapperCreativeElement.type] = {};
        }

        var _loop = function _loop(eventName) {
          var urls = wrapperCreativeElement.trackingEvents[eventName];

          if (!Array.isArray(ad.trackingEvents[wrapperCreativeElement.type][eventName])) {
            ad.trackingEvents[wrapperCreativeElement.type][eventName] = [];
          }

          urls.forEach(function (url) {
            ad.trackingEvents[wrapperCreativeElement.type][eventName].push(url);
          });
        };

        for (var eventName in wrapperCreativeElement.trackingEvents) {
          _loop(eventName);
        }
      } // ClickTracking


      if (wrapperCreativeElement.videoClickTrackingURLTemplates) {
        if (!Array.isArray(ad.videoClickTrackingURLTemplates)) {
          ad.videoClickTrackingURLTemplates = [];
        } // tmp property to save wrapper tracking URLs until they are merged


        wrapperCreativeElement.videoClickTrackingURLTemplates.forEach(function (item) {
          ad.videoClickTrackingURLTemplates.push(item);
        });
      } // ClickThrough


      if (wrapperCreativeElement.videoClickThroughURLTemplate) {
        ad.videoClickThroughURLTemplate = wrapperCreativeElement.videoClickThroughURLTemplate;
      } // CustomClick


      if (wrapperCreativeElement.videoCustomClickURLTemplates) {
        if (!Array.isArray(ad.videoCustomClickURLTemplates)) {
          ad.videoCustomClickURLTemplates = [];
        } // tmp property to save wrapper tracking URLs until they are merged


        wrapperCreativeElement.videoCustomClickURLTemplates.forEach(function (item) {
          ad.videoCustomClickURLTemplates.push(item);
        });
      }
    }
  });

  if (ad.nextWrapperURL) {
    return ad;
  }
}
/**
 * Parses an array of Extension elements. Exported for unit test purpose
 * @param  {Node[]} extensions - The array of extensions to parse.
 * @return {AdExtension[]} - The nodes parsed to extensions
 */


function _parseExtensions(extensions) {
  var exts = [];
  extensions.forEach(function (extNode) {
    var ext = _parseExtension(extNode);

    if (ext) {
      exts.push(ext);
    }
  });
  return exts;
}
/**
 * Parses an extension child node
 * @param {Node} extNode - The extension node to parse
 * @return {AdExtension|null} - The node parsed to extension
 */

function _parseExtension(extNode) {
  // Ignore comments
  if (extNode.nodeName === '#comment') return null;
  var ext = new AdExtension();
  var extNodeAttrs = extNode.attributes;
  var childNodes = extNode.childNodes;
  ext.name = extNode.nodeName; // Parse attributes

  if (extNode.attributes) {
    for (var extNodeAttrKey in extNodeAttrs) {
      if (extNodeAttrs.hasOwnProperty(extNodeAttrKey)) {
        var extNodeAttr = extNodeAttrs[extNodeAttrKey];

        if (extNodeAttr.nodeName && extNodeAttr.nodeValue) {
          ext.attributes[extNodeAttr.nodeName] = extNodeAttr.nodeValue;
        }
      }
    }
  } // Parse all children


  for (var childNodeKey in childNodes) {
    if (childNodes.hasOwnProperty(childNodeKey)) {
      var parsedChild = _parseExtension(childNodes[childNodeKey]);

      if (parsedChild) {
        ext.children.push(parsedChild);
      }
    }
  }
  /*
    Only parse value of Nodes with only eather no children or only a cdata or text
    to avoid useless parsing that would result to a concatenation of all children
  */


  if (ext.children.length === 0 || ext.children.length === 1 && ['#cdata-section', '#text'].indexOf(ext.children[0].name) >= 0) {
    var txt = parserUtils.parseNodeText(extNode);

    if (txt !== '') {
      ext.value = txt;
    } // Remove the children if it's a cdata or simply text to avoid useless children


    ext.children = [];
  } // Only return not empty objects to not pollute extentions


  return ext.isEmpty() ? null : ext;
}
/**
 * Parses the AdVerifications Element.
 * @param  {Array} verifications - The array of verifications to parse.
 * @return {Array<AdVerification>}
 */


function _parseAdVerifications(verifications) {
  var ver = [];
  verifications.forEach(function (verificationNode) {
    var verification = new AdVerification();
    var childNodes = verificationNode.childNodes;
    parserUtils.assignAttributes(verificationNode.attributes, verification);

    for (var nodeKey in childNodes) {
      var node = childNodes[nodeKey];

      switch (node.nodeName) {
        case 'JavaScriptResource':
          verification.resource = parserUtils.parseNodeText(node);
          parserUtils.assignAttributes(node.attributes, verification);
          break;

        case 'VerificationParameters':
          verification.parameters = parserUtils.parseNodeText(node);
          break;
      }
    }

    ver.push(verification);
  });
  return ver;
}
/**
 * Parses the creative adId Attribute.
 * @param  {any} creativeElement - The creative element to retrieve the adId from.
 * @return {String|null}
 */

function parseCreativeAdIdAttribute(creativeElement) {
  return creativeElement.getAttribute('AdID') || // VAST 2 spec
  creativeElement.getAttribute('adID') || // VAST 3 spec
  creativeElement.getAttribute('adId') || // VAST 4 spec
  null;
}

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._handlers = [];
  }
  /**
   * Adds the event name and handler function to the end of the handlers array.
   * No checks are made to see if the handler has already been added.
   * Multiple calls passing the same combination of event name and handler will result in the handler being added,
   * and called, multiple times.
   * @param {String} event
   * @param {Function} handler
   * @returns {EventEmitter}
   */


  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, handler) {
      if (typeof handler !== 'function') {
        throw new TypeError("The handler argument must be of type Function. Received type ".concat(_typeof(handler)));
      }

      if (!event) {
        throw new TypeError("The event argument must be of type String. Received type ".concat(_typeof(event)));
      }

      this._handlers.push({
        event: event,
        handler: handler
      });

      return this;
    }
    /**
     * Adds a one-time handler function for the named event.
     * The next time event is triggered, this handler is removed and then invoked.
     * @param {String} event
     * @param {Function} handler
     * @returns {EventEmitter}
     */

  }, {
    key: "once",
    value: function once(event, handler) {
      return this.on(event, onceWrap(this, event, handler));
    }
    /**
     * Removes all instances for the specified handler from the handler array for the named event.
     * @param {String} event
     * @param {Function} handler
     * @returns {EventEmitter}
     */

  }, {
    key: "off",
    value: function off(event, handler) {
      this._handlers = this._handlers.filter(function (item) {
        return item.event !== event || item.handler !== handler;
      });
      return this;
    }
    /**
     * Synchronously calls each of the handlers registered for the named event,
     * in the order they were registered, passing the supplied arguments to each.
     * @param {String} event
     * @param  {any[]} args
     * @returns {Boolean} true if the event had handlers, false otherwise.
     */

  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var called = false;

      this._handlers.forEach(function (item) {
        if (item.event === '*') {
          called = true;
          item.handler.apply(item, [event].concat(args));
        }

        if (item.event === event) {
          called = true;
          item.handler.apply(item, args);
        }
      });

      return called;
    }
    /**
     * Removes all listeners, or those of the specified named event.
     * @param {String} event
     * @returns {EventEmitter}
     */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(event) {
      if (!event) {
        this._handlers = [];
        return this;
      }

      this._handlers = this._handlers.filter(function (item) {
        return item.event !== event;
      });
      return this;
    }
    /**
     * Returns the number of listeners listening to the named event.
     * @param {String} event
     * @returns {Number}
     */

  }, {
    key: "listenerCount",
    value: function listenerCount(event) {
      return this._handlers.filter(function (item) {
        return item.event === event;
      }).length;
    }
    /**
     * Returns a copy of the array of listeners for the named event including those created by .once().
     * @param {String} event
     * @returns {Function[]}
     */

  }, {
    key: "listeners",
    value: function listeners(event) {
      return this._handlers.reduce(function (listeners, item) {
        if (item.event === event) {
          listeners.push(item.handler);
        }

        return listeners;
      }, []);
    }
    /**
     * Returns an array listing the events for which the emitter has registered handlers.
     * @returns {String[]}
     */

  }, {
    key: "eventNames",
    value: function eventNames() {
      return this._handlers.map(function (item) {
        return item.event;
      });
    }
  }]);

  return EventEmitter;
}();
/**
 * exported for unit tests only
 */

function onceWrap(target, event, handler) {
  var state = {
    fired: false,
    wrapFn: undefined
  };

  function onceWrapper() {
    if (!state.fired) {
      target.off(event, state.wrapFn);
      state.fired = true;
      handler.bind(target).apply(void 0, arguments);
    }
  }

  state.wrapFn = onceWrapper;
  return onceWrapper;
}

function xdr() {
  var request;

  if (window.XDomainRequest) {
    // eslint-disable-next-line no-undef
    request = new XDomainRequest();
  }

  return request;
}

function supported() {
  return !!xdr();
}

function get(url, options, cb) {
  var xmlDocument = typeof window.ActiveXObject === 'function' ? new window.ActiveXObject('Microsoft.XMLDOM') : undefined;

  if (xmlDocument) {
    xmlDocument.async = false;
  } else {
    return cb(new Error('FlashURLHandler: Microsoft.XMLDOM format not supported'));
  }

  var request = xdr();
  request.open('GET', url);
  request.timeout = options.timeout || 0;
  request.withCredentials = options.withCredentials || false;
  request.send();

  request.onprogress = function () {};

  request.onload = function () {
    xmlDocument.loadXML(request.responseText);
    cb(null, xmlDocument);
  };
}

var flashURLHandler = {
  get: get,
  supported: supported
};

var uri = require('url');

var fs = require('fs');

var http = require('http');

var https = require('https');

var DOMParser = require('xmldom').DOMParser;

function get$1(url, options, cb) {
  url = uri.parse(url);
  var httpModule = url.protocol === 'https:' ? https : http;

  if (url.protocol === 'file:') {
    fs.readFile(url.pathname, 'utf8', function (err, data) {
      if (err) {
        return cb(err);
      }

      var xml = new DOMParser().parseFromString(data);
      cb(null, xml);
    });
  } else {
    var timing;
    var data = '';

    var timeoutWrapper = function timeoutWrapper(req) {
      return function () {
        return req.abort();
      };
    };

    var req = httpModule.get(url.href, function (res) {
      res.on('data', function (chunk) {
        data += chunk;
        clearTimeout(timing);
        timing = setTimeout(fn, options.timeout || 120000);
      });
      res.on('end', function () {
        clearTimeout(timing);
        var xml = new DOMParser().parseFromString(data);
        cb(null, xml);
      });
    });
    req.on('error', function (err) {
      clearTimeout(timing);
      cb(err);
    });
    var fn = timeoutWrapper(req);
    timing = setTimeout(fn, options.timeout || 120000);
  }
}

var nodeURLHandler = {
  get: get$1
};

function xhr() {
  try {
    var request = new window.XMLHttpRequest();

    if ('withCredentials' in request) {
      // check CORS support
      return request;
    }

    return null;
  } catch (err) {
    return null;
  }
}

function supported$1() {
  return !!xhr();
}

function get$2(url, options, cb) {
  if (window.location.protocol === 'https:' && url.indexOf('http://') === 0) {
    return cb(new Error('XHRURLHandler: Cannot go from HTTPS to HTTP.'));
  }

  try {
    var request = xhr();
    request.open('GET', url);
    request.timeout = options.timeout || 0;
    request.withCredentials = options.withCredentials || false;
    request.overrideMimeType && request.overrideMimeType('text/xml');

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          cb(null, request.responseXML);
        } else {
          cb(new Error("XHRURLHandler: ".concat(request.statusText)));
        }
      }
    };

    request.send();
  } catch (error) {
    cb(new Error('XHRURLHandler: Unexpected error'));
  }
}

var XHRURLHandler = {
  get: get$2,
  supported: supported$1
};

function get$3(url, options, cb) {
  // Allow skip of the options param
  if (!cb) {
    if (typeof options === 'function') {
      cb = options;
    }

    options = {};
  }

  if (typeof window === 'undefined' || window === null) {
    return nodeURLHandler.get(url, options, cb);
  } else if (XHRURLHandler.supported()) {
    return XHRURLHandler.get(url, options, cb);
  } else if (flashURLHandler.supported()) {
    return flashURLHandler.get(url, options, cb);
  }

  return cb(new Error('Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler'));
}

var urlHandler = {
  get: get$3
};

var VASTResponse = function VASTResponse() {
  _classCallCheck(this, VASTResponse);

  this.ads = [];
  this.errorURLTemplates = [];
  this.version = null;
};

var DEFAULT_MAX_WRAPPER_DEPTH = 10;
var DEFAULT_EVENT_DATA = {
  ERRORCODE: 900,
  extensions: []
};
/**
 * This class provides methods to fetch and parse a VAST document.
 * @export
 * @class VASTParser
 * @extends EventEmitter
 */

var VASTParser =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(VASTParser, _EventEmitter);

  /**
   * Creates an instance of VASTParser.
   * @constructor
   */
  function VASTParser() {
    var _this;

    _classCallCheck(this, VASTParser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VASTParser).call(this));
    _this.remainingAds = [];
    _this.parentURLs = [];
    _this.errorURLTemplates = [];
    _this.rootErrorURLTemplates = [];
    _this.maxWrapperDepth = null;
    _this.URLTemplateFilters = [];
    _this.fetchingOptions = {};
    return _this;
  }
  /**
   * Adds a filter function to the array of filters which are called before fetching a VAST document.
   * @param  {function} filter - The filter function to be added at the end of the array.
   * @return {void}
   */


  _createClass(VASTParser, [{
    key: "addURLTemplateFilter",
    value: function addURLTemplateFilter(filter) {
      if (typeof filter === 'function') {
        this.URLTemplateFilters.push(filter);
      }
    }
    /**
     * Removes the last element of the url templates filters array.
     * @return {void}
     */

  }, {
    key: "removeURLTemplateFilter",
    value: function removeURLTemplateFilter() {
      this.URLTemplateFilters.pop();
    }
    /**
     * Returns the number of filters of the url templates filters array.
     * @return {Number}
     */

  }, {
    key: "countURLTemplateFilters",
    value: function countURLTemplateFilters() {
      return this.URLTemplateFilters.length;
    }
    /**
     * Removes all the filter functions from the url templates filters array.
     * @return {void}
     */

  }, {
    key: "clearURLTemplateFilters",
    value: function clearURLTemplateFilters() {
      this.URLTemplateFilters = [];
    }
    /**
     * Tracks the error provided in the errorCode parameter and emits a VAST-error event for the given error.
     * @param  {Array} urlTemplates - An Array of url templates to use to make the tracking call.
     * @param  {Object} errorCode - An Object containing the error data.
     * @param  {Object} data - One (or more) Object containing additional data.
     * @emits  VASTParser#VAST-error
     * @return {void}
     */

  }, {
    key: "trackVastError",
    value: function trackVastError(urlTemplates, errorCode) {
      for (var _len = arguments.length, data = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        data[_key - 2] = arguments[_key];
      }

      this.emit('VAST-error', Object.assign.apply(Object, [DEFAULT_EVENT_DATA, errorCode].concat(data)));
      util.track(urlTemplates, errorCode);
    }
    /**
     * Returns an array of errorURLTemplates for the VAST being parsed.
     * @return {Array}
     */

  }, {
    key: "getErrorURLTemplates",
    value: function getErrorURLTemplates() {
      return this.rootErrorURLTemplates.concat(this.errorURLTemplates);
    }
    /**
     * Fetches a VAST document for the given url.
     * Returns a Promise which resolves,rejects according to the result of the request.
     * @param  {String} url - The url to request the VAST document.
     * @param {Number} wrapperDepth - how many times the current url has been wrapped
     * @param {String} originalUrl - url of original wrapper
     * @emits  VASTParser#VAST-resolving
     * @emits  VASTParser#VAST-resolved
     * @return {Promise}
     */

  }, {
    key: "fetchVAST",
    value: function fetchVAST(url, wrapperDepth, originalUrl) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        // Process url with defined filter
        _this2.URLTemplateFilters.forEach(function (filter) {
          url = filter(url);
        });

        _this2.parentURLs.push(url);

        _this2.emit('VAST-resolving', {
          url: url,
          wrapperDepth: wrapperDepth,
          originalUrl: originalUrl
        });

        _this2.urlHandler.get(url, _this2.fetchingOptions, function (err, xml) {
          _this2.emit('VAST-resolved', {
            url: url,
            error: err
          });

          if (err) {
            reject(err);
          } else {
            resolve(xml);
          }
        });
      });
    }
    /**
     * Inits the parsing properties of the class with the custom values provided as options.
     * @param {Object} options - The options to initialize a parsing sequence
     */

  }, {
    key: "initParsingStatus",
    value: function initParsingStatus() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.rootURL = '';
      this.remainingAds = [];
      this.parentURLs = [];
      this.errorURLTemplates = [];
      this.rootErrorURLTemplates = [];
      this.maxWrapperDepth = options.wrapperLimit || DEFAULT_MAX_WRAPPER_DEPTH;
      this.fetchingOptions = {
        timeout: options.timeout,
        withCredentials: options.withCredentials
      };
      this.urlHandler = options.urlHandler || options.urlhandler || urlHandler;
      this.vastVersion = null;
    }
    /**
     * Resolves the next group of ads. If all is true resolves all the remaining ads.
     * @param  {Boolean} all - If true all the remaining ads are resolved
     * @return {Promise}
     */

  }, {
    key: "getRemainingAds",
    value: function getRemainingAds(all) {
      var _this3 = this;

      if (this.remainingAds.length === 0) {
        return Promise.reject(new Error('No more ads are available for the given VAST'));
      }

      var ads = all ? util.flatten(this.remainingAds) : this.remainingAds.shift();
      this.errorURLTemplates = [];
      this.parentURLs = [];
      return this.resolveAds(ads, {
        wrapperDepth: 0,
        originalUrl: this.rootURL
      }).then(function (resolvedAds) {
        return _this3.buildVASTResponse(resolvedAds);
      });
    }
    /**
     * Fetches and parses a VAST for the given url.
     * Returns a Promise which resolves with a fully parsed VASTResponse or rejects with an Error.
     * @param  {String} url - The url to request the VAST document.
     * @param  {Object} options - An optional Object of parameters to be used in the parsing process.
     * @emits  VASTParser#VAST-resolving
     * @emits  VASTParser#VAST-resolved
     * @return {Promise}
     */

  }, {
    key: "getAndParseVAST",
    value: function getAndParseVAST(url) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.initParsingStatus(options);
      this.rootURL = url;
      return this.fetchVAST(url).then(function (xml) {
        options.originalUrl = url;
        options.isRootVAST = true;
        return _this4.parse(xml, options).then(function (ads) {
          return _this4.buildVASTResponse(ads);
        });
      });
    }
    /**
     * Parses the given xml Object into a VASTResponse.
     * Returns a Promise which resolves with a fully parsed VASTResponse or rejects with an Error.
     * @param  {Object} vastXml - An object representing a vast xml document.
     * @param  {Object} options - An optional Object of parameters to be used in the parsing process.
     * @emits  VASTParser#VAST-resolving
     * @emits  VASTParser#VAST-resolved
     * @return {Promise}
     */

  }, {
    key: "parseVAST",
    value: function parseVAST(vastXml) {
      var _this5 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.initParsingStatus(options);
      options.isRootVAST = true;
      return this.parse(vastXml, options).then(function (ads) {
        return _this5.buildVASTResponse(ads);
      });
    }
    /**
     * Builds a VASTResponse which can be returned.
     * @param  {Array} ads - An Array of unwrapped ads
     * @return {VASTResponse}
     */

  }, {
    key: "buildVASTResponse",
    value: function buildVASTResponse(ads) {
      var response = new VASTResponse();
      response.ads = ads;
      response.errorURLTemplates = this.getErrorURLTemplates();
      response.version = this.vastVersion;
      this.completeWrapperResolving(response);
      return response;
    }
    /**
     * Parses the given xml Object into an array of ads
     * Returns the array or throws an `Error` if an invalid VAST XML is provided
     * @param  {Object} vastXml - An object representing an xml document.
     * @param  {Object} options - An optional Object of parameters to be used in the parsing process.
     * @return {Array}
     * @throws {Error} `vastXml` must be a valid VAST XMLDocument
     */

  }, {
    key: "parseVastXml",
    value: function parseVastXml(vastXml, _ref) {
      var _ref$isRootVAST = _ref.isRootVAST,
          isRootVAST = _ref$isRootVAST === void 0 ? false : _ref$isRootVAST;

      // check if is a valid VAST document
      if (!vastXml || !vastXml.documentElement || vastXml.documentElement.nodeName !== 'VAST') {
        throw new Error('Invalid VAST XMLDocument');
      }

      var ads = [];
      var childNodes = vastXml.documentElement.childNodes;
      /* Only parse the version of the Root VAST for now because we don't know yet how to
         handle some cases like multiple wrappers in the same vast
      */

      if (isRootVAST) {
        var vastVersion = vastXml.documentElement.getAttribute('version');
        if (vastVersion) this.vastVersion = vastVersion;
      } // Fill the VASTResponse object with ads and errorURLTemplates


      for (var nodeKey in childNodes) {
        var node = childNodes[nodeKey];

        if (node.nodeName === 'Error') {
          var errorURLTemplate = parserUtils.parseNodeText(node); // Distinguish root VAST url templates from ad specific ones

          isRootVAST ? this.rootErrorURLTemplates.push(errorURLTemplate) : this.errorURLTemplates.push(errorURLTemplate);
        }

        if (node.nodeName === 'Ad') {
          var ad = parseAd(node);

          if (ad) {
            ads.push(ad);
          } else {
            // VAST version of response not supported.
            this.trackVastError(this.getErrorURLTemplates(), {
              ERRORCODE: 101
            });
          }
        }
      }

      return ads;
    }
    /**
     * Parses the given xml Object into an array of unwrapped ads.
     * Returns a Promise which resolves with the array or rejects with an error according to the result of the parsing.
     * @param  {Object} vastXml - An object representing an xml document.
     * @param  {Object} options - An optional Object of parameters to be used in the parsing process.
     * @emits  VASTParser#VAST-resolving
     * @emits  VASTParser#VAST-resolved
     * @return {Promise}
     */

  }, {
    key: "parse",
    value: function parse(vastXml, _ref2) {
      var _ref2$resolveAll = _ref2.resolveAll,
          resolveAll = _ref2$resolveAll === void 0 ? true : _ref2$resolveAll,
          _ref2$wrapperSequence = _ref2.wrapperSequence,
          wrapperSequence = _ref2$wrapperSequence === void 0 ? null : _ref2$wrapperSequence,
          _ref2$originalUrl = _ref2.originalUrl,
          originalUrl = _ref2$originalUrl === void 0 ? null : _ref2$originalUrl,
          _ref2$wrapperDepth = _ref2.wrapperDepth,
          wrapperDepth = _ref2$wrapperDepth === void 0 ? 0 : _ref2$wrapperDepth,
          _ref2$isRootVAST = _ref2.isRootVAST,
          isRootVAST = _ref2$isRootVAST === void 0 ? false : _ref2$isRootVAST;
      var ads = [];

      try {
        ads = this.parseVastXml(vastXml, {
          isRootVAST: isRootVAST
        });
      } catch (e) {
        return Promise.reject(e);
      }

      var adsCount = ads.length;
      var lastAddedAd = ads[adsCount - 1]; // if in child nodes we have only one ads
      // and wrapperSequence is defined
      // and this ads doesn't already have sequence

      if (adsCount === 1 && wrapperSequence !== undefined && wrapperSequence !== null && lastAddedAd && !lastAddedAd.sequence) {
        lastAddedAd.sequence = wrapperSequence;
      } // Split the VAST in case we don't want to resolve everything at the first time


      if (resolveAll === false) {
        this.remainingAds = parserUtils.splitVAST(ads); // Remove the first element from the remaining ads array, since we're going to resolve that element

        ads = this.remainingAds.shift();
      }

      return this.resolveAds(ads, {
        wrapperDepth: wrapperDepth,
        originalUrl: originalUrl
      });
    }
    /**
     * Resolves an Array of ads, recursively calling itself with the remaining ads if a no ad
     * response is returned for the given array.
     * @param {Array} ads - An array of ads to resolve
     * @param {Object} options - An options Object containing resolving parameters
     * @return {Promise}
     */

  }, {
    key: "resolveAds",
    value: function resolveAds() {
      var _this6 = this;

      var ads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref3 = arguments.length > 1 ? arguments[1] : undefined,
          wrapperDepth = _ref3.wrapperDepth,
          originalUrl = _ref3.originalUrl;

      var resolveWrappersPromises = [];
      ads.forEach(function (ad) {
        var resolveWrappersPromise = _this6.resolveWrappers(ad, wrapperDepth, originalUrl);

        resolveWrappersPromises.push(resolveWrappersPromise);
      });
      return Promise.all(resolveWrappersPromises).then(function (unwrappedAds) {
        var resolvedAds = util.flatten(unwrappedAds);

        if (!resolvedAds && _this6.remainingAds.length > 0) {
          var remainingAdsToResolve = _this6.remainingAds.shift();

          return _this6.resolveAds(remainingAdsToResolve, {
            wrapperDepth: wrapperDepth,
            originalUrl: originalUrl
          });
        }

        return resolvedAds;
      });
    }
    /**
     * Resolves the wrappers for the given ad in a recursive way.
     * Returns a Promise which resolves with the unwrapped ad or rejects with an error.
     * @param  {Ad} ad - An ad to be unwrapped.
     * @param  {Number} wrapperDepth - The reached depth in the wrapper resolving chain.
     * @param  {String} originalUrl - The original vast url.
     * @return {Promise}
     */

  }, {
    key: "resolveWrappers",
    value: function resolveWrappers(ad, wrapperDepth, originalUrl) {
      var _this7 = this;

      return new Promise(function (resolve) {
        // Going one level deeper in the wrapper chain
        wrapperDepth++; // We already have a resolved VAST ad, no need to resolve wrapper

        if (!ad.nextWrapperURL) {
          delete ad.nextWrapperURL;
          return resolve(ad);
        }

        if (wrapperDepth >= _this7.maxWrapperDepth || _this7.parentURLs.indexOf(ad.nextWrapperURL) !== -1) {
          // Wrapper limit reached, as defined by the video player.
          // Too many Wrapper responses have been received with no InLine response.
          ad.errorCode = 302;
          delete ad.nextWrapperURL;
          return resolve(ad);
        } // Get full URL


        ad.nextWrapperURL = parserUtils.resolveVastAdTagURI(ad.nextWrapperURL, originalUrl); // sequence doesn't carry over in wrapper element

        var wrapperSequence = ad.sequence;
        originalUrl = ad.nextWrapperURL;

        _this7.fetchVAST(ad.nextWrapperURL, wrapperDepth, originalUrl).then(function (xml) {
          return _this7.parse(xml, {
            originalUrl: originalUrl,
            wrapperSequence: wrapperSequence,
            wrapperDepth: wrapperDepth
          }).then(function (unwrappedAds) {
            delete ad.nextWrapperURL;

            if (unwrappedAds.length === 0) {
              // No ads returned by the wrappedResponse, discard current <Ad><Wrapper> creatives
              ad.creatives = [];
              return resolve(ad);
            }

            unwrappedAds.forEach(function (unwrappedAd) {
              if (unwrappedAd) {
                parserUtils.mergeWrapperAdData(unwrappedAd, ad);
              }
            });
            resolve(unwrappedAds);
          });
        })["catch"](function (err) {
          // Timeout of VAST URI provided in Wrapper element, or of VAST URI provided in a subsequent Wrapper element.
          // (URI was either unavailable or reached a timeout as defined by the video player.)
          ad.errorCode = 301;
          ad.errorMessage = err.message;
          resolve(ad);
        });
      });
    }
    /**
     * Takes care of handling errors when the wrappers are resolved.
     * @param {VASTResponse} vastResponse - A resolved VASTResponse.
     */

  }, {
    key: "completeWrapperResolving",
    value: function completeWrapperResolving(vastResponse) {
      // We've to wait for all <Ad> elements to be parsed before handling error so we can:
      // - Send computed extensions data
      // - Ping all <Error> URIs defined across VAST files
      // No Ad case - The parser never bump into an <Ad> element
      if (vastResponse.ads.length === 0) {
        this.trackVastError(vastResponse.errorURLTemplates, {
          ERRORCODE: 303
        });
      } else {
        for (var index = vastResponse.ads.length - 1; index >= 0; index--) {
          // - Error encountred while parsing
          // - No Creative case - The parser has dealt with soma <Ad><Wrapper> or/and an <Ad><Inline> elements
          // but no creative was found
          var ad = vastResponse.ads[index];

          if (ad.errorCode || ad.creatives.length === 0) {
            this.trackVastError(ad.errorURLTemplates.concat(vastResponse.errorURLTemplates), {
              ERRORCODE: ad.errorCode || 303
            }, {
              ERRORMESSAGE: ad.errorMessage || ''
            }, {
              extensions: ad.extensions
            }, {
              system: ad.system
            });
            vastResponse.ads.splice(index, 1);
          }
        }
      }
    }
  }]);

  return VASTParser;
}(EventEmitter);

var storage = null;
/**
 * This Object represents a default storage to be used in case no other storage is available.
 * @constant
 * @type {Object}
 */

var DEFAULT_STORAGE = {
  data: {},
  length: 0,
  getItem: function getItem(key) {
    return this.data[key];
  },
  setItem: function setItem(key, value) {
    this.data[key] = value;
    this.length = Object.keys(this.data).length;
  },
  removeItem: function removeItem(key) {
    delete this.data[key];
    this.length = Object.keys(this.data).length;
  },
  clear: function clear() {
    this.data = {};
    this.length = 0;
  }
};
/**
 * This class provides an wrapper interface to the a key-value storage.
 * It uses localStorage, sessionStorage or a custom storage if none of the two is available.
 * @export
 * @class Storage
 */

var Storage =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Storage.
   * @constructor
   */
  function Storage() {
    _classCallCheck(this, Storage);

    this.storage = this.initStorage();
  }
  /**
   * Provides a singleton instance of the wrapped storage.
   * @return {Object}
   */


  _createClass(Storage, [{
    key: "initStorage",
    value: function initStorage() {
      if (storage) {
        return storage;
      }

      try {
        storage = typeof window !== 'undefined' && window !== null ? window.localStorage || window.sessionStorage : null;
      } catch (storageError) {
        storage = null;
      }

      if (!storage || this.isStorageDisabled(storage)) {
        storage = DEFAULT_STORAGE;
        storage.clear();
      }

      return storage;
    }
    /**
     * Check if storage is disabled (like in certain cases with private browsing).
     * In Safari (Mac + iOS) when private browsing is ON, localStorage is read only
     * http://spin.atomicobject.com/2013/01/23/ios-private-browsing-localstorage/
     * @param {Object} testStorage - The storage to check.
     * @return {Boolean}
     */

  }, {
    key: "isStorageDisabled",
    value: function isStorageDisabled(testStorage) {
      var testValue = '__VASTStorage__';

      try {
        testStorage.setItem(testValue, testValue);

        if (testStorage.getItem(testValue) !== testValue) {
          testStorage.removeItem(testValue);
          return true;
        }
      } catch (e) {
        return true;
      }

      testStorage.removeItem(testValue);
      return false;
    }
    /**
     * Returns the value for the given key. If the key does not exist, null is returned.
     * @param  {String} key - The key to retrieve the value.
     * @return {any}
     */

  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.storage.getItem(key);
    }
    /**
     * Adds or updates the value for the given key.
     * @param  {String} key - The key to modify the value.
     * @param  {any} value - The value to be associated with the key.
     * @return {any}
     */

  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return this.storage.setItem(key, value);
    }
    /**
     * Removes an item for the given key.
     * @param  {String} key - The key to remove the value.
     * @return {any}
     */

  }, {
    key: "removeItem",
    value: function removeItem(key) {
      return this.storage.removeItem(key);
    }
    /**
     * Removes all the items from the storage.
     */

  }, {
    key: "clear",
    value: function clear() {
      return this.storage.clear();
    }
  }]);

  return Storage;
}();

/**
 * This class provides methods to fetch and parse a VAST document using VASTParser.
 * In addition it provides options to skip consecutive calls based on constraints.
 * @export
 * @class VASTClient
 */

var VASTClient =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of VASTClient.
   * @param  {Number} cappingFreeLunch - The number of first calls to skip.
   * @param  {Number} cappingMinimumTimeInterval - The minimum time interval between two consecutive calls.
   * @param  {Storage} customStorage - A custom storage to use instead of the default one.
   * @constructor
   */
  function VASTClient(cappingFreeLunch, cappingMinimumTimeInterval, customStorage) {
    _classCallCheck(this, VASTClient);

    this.cappingFreeLunch = cappingFreeLunch || 0;
    this.cappingMinimumTimeInterval = cappingMinimumTimeInterval || 0;
    this.defaultOptions = {
      withCredentials: false,
      timeout: 0
    };
    this.vastParser = new VASTParser();
    this.storage = customStorage || new Storage(); // Init values if not already set

    if (this.lastSuccessfulAd === undefined) {
      this.lastSuccessfulAd = 0;
    }

    if (this.totalCalls === undefined) {
      this.totalCalls = 0;
    }

    if (this.totalCallsTimeout === undefined) {
      this.totalCallsTimeout = 0;
    }
  }

  _createClass(VASTClient, [{
    key: "getParser",
    value: function getParser() {
      return this.vastParser;
    }
  }, {
    key: "hasRemainingAds",

    /**
     * Returns a boolean indicating if there are more ads to resolve for the current parsing.
     * @return {Boolean}
     */
    value: function hasRemainingAds() {
      return this.vastParser.remainingAds.length > 0;
    }
    /**
     * Resolves the next group of ads. If all is true resolves all the remaining ads.
     * @param  {Boolean} all - If true all the remaining ads are resolved
     * @return {Promise}
     */

  }, {
    key: "getNextAds",
    value: function getNextAds(all) {
      return this.vastParser.getRemainingAds(all);
    }
    /**
     * Gets a parsed VAST document for the given url, applying the skipping rules defined.
     * Returns a Promise which resolves with a fully parsed VASTResponse or rejects with an Error.
     * @param  {String} url - The url to use to fecth the VAST document.
     * @param  {Object} options - An optional Object of parameters to be applied in the process.
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(url) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var now = Date.now();
      options = Object.assign(this.defaultOptions, options); // By default the client resolves only the first Ad or AdPod

      if (!options.hasOwnProperty('resolveAll')) {
        options.resolveAll = false;
      } // Check totalCallsTimeout (first call + 1 hour), if older than now,
      // reset totalCalls number, by this way the client will be eligible again
      // for freelunch capping


      if (this.totalCallsTimeout < now) {
        this.totalCalls = 1;
        this.totalCallsTimeout = now + 60 * 60 * 1000;
      } else {
        this.totalCalls++;
      }

      return new Promise(function (resolve, reject) {
        if (_this.cappingFreeLunch >= _this.totalCalls) {
          return reject(new Error("VAST call canceled \u2013 FreeLunch capping not reached yet ".concat(_this.totalCalls, "/").concat(_this.cappingFreeLunch)));
        }

        var timeSinceLastCall = now - _this.lastSuccessfulAd; // Check timeSinceLastCall to be a positive number. If not, this mean the
        // previous was made in the future. We reset lastSuccessfulAd value

        if (timeSinceLastCall < 0) {
          _this.lastSuccessfulAd = 0;
        } else if (timeSinceLastCall < _this.cappingMinimumTimeInterval) {
          return reject(new Error("VAST call canceled \u2013 (".concat(_this.cappingMinimumTimeInterval, ")ms minimum interval reached")));
        }

        _this.vastParser.getAndParseVAST(url, options).then(function (response) {
          return resolve(response);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "lastSuccessfulAd",
    get: function get() {
      return this.storage.getItem('vast-client-last-successful-ad');
    },
    set: function set(value) {
      this.storage.setItem('vast-client-last-successful-ad', value);
    }
  }, {
    key: "totalCalls",
    get: function get() {
      return this.storage.getItem('vast-client-total-calls');
    },
    set: function set(value) {
      this.storage.setItem('vast-client-total-calls', value);
    }
  }, {
    key: "totalCallsTimeout",
    get: function get() {
      return this.storage.getItem('vast-client-total-calls-timeout');
    },
    set: function set(value) {
      this.storage.setItem('vast-client-total-calls-timeout', value);
    }
  }]);

  return VASTClient;
}();

/**
 * The default skip delay used in case a custom one is not provided
 * @constant
 * @type {Number}
 */

var DEFAULT_SKIP_DELAY = -1;
/**
 * This class provides methods to track an ad execution.
 *
 * @export
 * @class VASTTracker
 * @extends EventEmitter
 */

var VASTTracker =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(VASTTracker, _EventEmitter);

  /**
   * Creates an instance of VASTTracker.
   *
   * @param {VASTClient} client - An instance of VASTClient that can be updated by the tracker. [optional]
   * @param {Ad} ad - The ad to track.
   * @param {Creative} creative - The creative to track.
   * @param {CompanionAd|NonLinearAd} [variation=null] - An optional variation of the creative.
   * @constructor
   */
  function VASTTracker(client, ad, creative) {
    var _this;

    var variation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, VASTTracker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VASTTracker).call(this));
    _this.ad = ad;
    _this.creative = creative;
    _this.variation = variation;
    _this.muted = false;
    _this.impressed = false;
    _this.skippable = false;
    _this.trackingEvents = {}; // We need to save the already triggered quartiles, in order to not trigger them again

    _this._alreadyTriggeredQuartiles = {}; // Tracker listeners should be notified with some events
    // no matter if there is a tracking URL or not

    _this.emitAlwaysEvents = ['creativeView', 'start', 'firstQuartile', 'midpoint', 'thirdQuartile', 'complete', 'resume', 'pause', 'rewind', 'skip', 'closeLinear', 'close']; // Duplicate the creative's trackingEvents property so we can alter it

    for (var eventName in _this.creative.trackingEvents) {
      var events = _this.creative.trackingEvents[eventName];
      _this.trackingEvents[eventName] = events.slice(0);
    } // Nonlinear and companion creatives provide some tracking information at a variation level
    // While linear creatives provided that at a creative level. That's why we need to
    // differentiate how we retrieve some tracking information.


    if (_this.creative instanceof CreativeLinear) {
      _this._initLinearTracking();
    } else {
      _this._initVariationTracking();
    } // If the tracker is associated with a client we add a listener to the start event
    // to update the lastSuccessfulAd property.


    if (client) {
      _this.on('start', function () {
        client.lastSuccessfulAd = Date.now();
      });
    }

    return _this;
  }
  /**
   * Init the custom tracking options for linear creatives.
   *
   * @return {void}
   */


  _createClass(VASTTracker, [{
    key: "_initLinearTracking",
    value: function _initLinearTracking() {
      this.linear = true;
      this.skipDelay = this.creative.skipDelay;
      this.setDuration(this.creative.duration);
      this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate;
      this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates;
    }
    /**
     * Init the custom tracking options for nonlinear and companion creatives.
     * These options are provided in the variation Object.
     *
     * @return {void}
     */

  }, {
    key: "_initVariationTracking",
    value: function _initVariationTracking() {
      this.linear = false;
      this.skipDelay = DEFAULT_SKIP_DELAY; // If no variation has been provided there's nothing else to set

      if (!this.variation) {
        return;
      } // Duplicate the variation's trackingEvents property so we can alter it


      for (var eventName in this.variation.trackingEvents) {
        var events = this.variation.trackingEvents[eventName]; // If for the given eventName we already had some trackingEvents provided by the creative
        // we want to keep both the creative trackingEvents and the variation ones

        if (this.trackingEvents[eventName]) {
          this.trackingEvents[eventName] = this.trackingEvents[eventName].concat(events.slice(0));
        } else {
          this.trackingEvents[eventName] = events.slice(0);
        }
      }

      if (this.variation instanceof NonLinearAd) {
        this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate;
        this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates;
        this.setDuration(this.variation.minSuggestedDuration);
      } else if (this.variation instanceof CompanionAd) {
        this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate;
        this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates;
      }
    }
    /**
     * Sets the duration of the ad and updates the quartiles based on that.
     *
     * @param  {Number} duration - The duration of the ad.
     */

  }, {
    key: "setDuration",
    value: function setDuration(duration) {
      this.assetDuration = duration; // beware of key names, theses are also used as event names

      this.quartiles = {
        firstQuartile: Math.round(25 * this.assetDuration) / 100,
        midpoint: Math.round(50 * this.assetDuration) / 100,
        thirdQuartile: Math.round(75 * this.assetDuration) / 100
      };
    }
    /**
     * Sets the duration of the ad and updates the quartiles based on that.
     * This is required for tracking time related events.
     *
     * @param {Number} progress - Current playback time in seconds.
     * @emits VASTTracker#start
     * @emits VASTTracker#skip-countdown
     * @emits VASTTracker#progress-[0-100]%
     * @emits VASTTracker#progress-[currentTime]
     * @emits VASTTracker#rewind
     * @emits VASTTracker#firstQuartile
     * @emits VASTTracker#midpoint
     * @emits VASTTracker#thirdQuartile
     */

  }, {
    key: "setProgress",
    value: function setProgress(progress) {
      var _this2 = this;

      var skipDelay = this.skipDelay || DEFAULT_SKIP_DELAY;

      if (skipDelay !== -1 && !this.skippable) {
        if (skipDelay > progress) {
          this.emit('skip-countdown', skipDelay - progress);
        } else {
          this.skippable = true;
          this.emit('skip-countdown', 0);
        }
      }

      if (this.assetDuration > 0) {
        var events = [];

        if (progress > 0) {
          var percent = Math.round(progress / this.assetDuration * 100);
          events.push('start');
          events.push("progress-".concat(percent, "%"));
          events.push("progress-".concat(Math.round(progress)));

          for (var quartile in this.quartiles) {
            if (this.isQuartileReached(quartile, this.quartiles[quartile], progress)) {
              events.push(quartile);
              this._alreadyTriggeredQuartiles[quartile] = true;
            }
          }
        }

        events.forEach(function (eventName) {
          _this2.track(eventName, true);
        });

        if (progress < this.progress) {
          this.track('rewind');
        }
      }

      this.progress = progress;
    }
    /**
     * Checks if a quartile has been reached without have being triggered already.
     *
     * @param {String} quartile - Quartile name
     * @param {Number} time - Time offset, when this quartile is reached in seconds.
     * @param {Number} progress - Current progress of the ads in seconds.
     *
     * @return {Boolean}
     */

  }, {
    key: "isQuartileReached",
    value: function isQuartileReached(quartile, time, progress) {
      var quartileReached = false; // if quartile time already reached and never triggered

      if (time <= progress && !this._alreadyTriggeredQuartiles[quartile]) {
        quartileReached = true;
      }

      return quartileReached;
    }
    /**
     * Updates the mute state and calls the mute/unmute tracking URLs.
     *
     * @param {Boolean} muted - Indicates if the video is muted or not.
     * @emits VASTTracker#mute
     * @emits VASTTracker#unmute
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      if (this.muted !== muted) {
        this.track(muted ? 'mute' : 'unmute');
      }

      this.muted = muted;
    }
    /**
     * Update the pause state and call the resume/pause tracking URLs.
     *
     * @param {Boolean} paused - Indicates if the video is paused or not.
     * @emits VASTTracker#pause
     * @emits VASTTracker#resume
     */

  }, {
    key: "setPaused",
    value: function setPaused(paused) {
      if (this.paused !== paused) {
        this.track(paused ? 'pause' : 'resume');
      }

      this.paused = paused;
    }
    /**
     * Updates the fullscreen state and calls the fullscreen tracking URLs.
     *
     * @param {Boolean} fullscreen - Indicates if the video is in fulscreen mode or not.
     * @emits VASTTracker#fullscreen
     * @emits VASTTracker#exitFullscreen
     */

  }, {
    key: "setFullscreen",
    value: function setFullscreen(fullscreen) {
      if (this.fullscreen !== fullscreen) {
        this.track(fullscreen ? 'fullscreen' : 'exitFullscreen');
      }

      this.fullscreen = fullscreen;
    }
    /**
     * Updates the expand state and calls the expand/collapse tracking URLs.
     *
     * @param {Boolean} expanded - Indicates if the video is expanded or not.
     * @emits VASTTracker#expand
     * @emits VASTTracker#playerExpand
     * @emits VASTTracker#collapse
     * @emits VASTTracker#playerCollapse
     */

  }, {
    key: "setExpand",
    value: function setExpand(expanded) {
      if (this.expanded !== expanded) {
        this.track(expanded ? 'expand' : 'collapse');
        this.track(expanded ? 'playerExpand' : 'playerCollapse');
      }

      this.expanded = expanded;
    }
    /**
     * Must be called if you want to overwrite the <Linear> Skipoffset value.
     * This will init the skip countdown duration. Then, every time setProgress() is called,
     * it will decrease the countdown and emit a skip-countdown event with the remaining time.
     * Do not call this method if you want to keep the original Skipoffset value.
     *
     * @param {Number} duration - The time in seconds until the skip button is displayed.
     */

  }, {
    key: "setSkipDelay",
    value: function setSkipDelay(duration) {
      if (typeof duration === 'number') {
        this.skipDelay = duration;
      }
    }
    /**
     * Tracks an impression (can be called only once).
     *
     * @emits VASTTracker#creativeView
     */

  }, {
    key: "trackImpression",
    value: function trackImpression() {
      if (!this.impressed) {
        this.impressed = true;
        this.trackURLs(this.ad.impressionURLTemplates);
        this.track('creativeView');
      }
    }
    /**
     * Send a request to the URI provided by the VAST <Error> element.
     * If an [ERRORCODE] macro is included, it will be substitute with errorCode.
     *
     * @param {String} errorCode - Replaces [ERRORCODE] macro. [ERRORCODE] values are listed in the VAST specification.
     * @param {Boolean} [isCustomCode=false] - Flag to allow custom values on error code.
     */

  }, {
    key: "errorWithCode",
    value: function errorWithCode(errorCode) {
      var isCustomCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.trackURLs(this.ad.errorURLTemplates, {
        ERRORCODE: errorCode
      }, {
        isCustomCode: isCustomCode
      });
    }
    /**
     * Must be called when the user watched the linear creative until its end.
     * Calls the complete tracking URLs.
     *
     * @emits VASTTracker#complete
     */

  }, {
    key: "complete",
    value: function complete() {
      this.track('complete');
    }
    /**
     * Must be called when the player or the window is closed during the ad.
     * Calls the `closeLinear` (in VAST 3.0) and `close` tracking URLs.
     *
     * @emits VASTTracker#closeLinear
     * @emits VASTTracker#close
     */

  }, {
    key: "close",
    value: function close() {
      this.track(this.linear ? 'closeLinear' : 'close');
    }
    /**
     * Must be called when the skip button is clicked. Calls the skip tracking URLs.
     *
     * @emits VASTTracker#skip
     */

  }, {
    key: "skip",
    value: function skip() {
      this.track('skip');
    }
    /**
     * Must be called then loaded and buffered the creative’s media and assets either fully
     * or to the extent that it is ready to play the media
     * Calls the loaded tracking URLs.
     *
     * @emits VASTTracker#loaded
     */

  }, {
    key: "load",
    value: function load() {
      this.track('loaded');
    }
    /**
     * Must be called when the user clicks on the creative.
     * It calls the tracking URLs and emits a 'clickthrough' event with the resolved
     * clickthrough URL when done.
     *
     * @param {String} [fallbackClickThroughURL=null] - an optional clickThroughURL template that could be used as a fallback
     * @emits VASTTracker#clickthrough
     */

  }, {
    key: "click",
    value: function click() {
      var fallbackClickThroughURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.clickTrackingURLTemplates && this.clickTrackingURLTemplates.length) {
        this.trackURLs(this.clickTrackingURLTemplates);
      } // Use the provided fallbackClickThroughURL as a fallback


      var clickThroughURLTemplate = this.clickThroughURLTemplate || fallbackClickThroughURL;

      if (clickThroughURLTemplate) {
        var variables = this.linear ? {
          CONTENTPLAYHEAD: this.progressFormatted()
        } : {};
        var clickThroughURL = util.resolveURLTemplates([clickThroughURLTemplate], variables)[0];
        this.emit('clickthrough', clickThroughURL);
      }
    }
    /**
     * Calls the tracking URLs for the given eventName and emits the event.
     *
     * @param {String} eventName - The name of the event.
     * @param {Boolean} [once=false] - Boolean to define if the event has to be tracked only once.
     */

  }, {
    key: "track",
    value: function track(eventName) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // closeLinear event was introduced in VAST 3.0
      // Fallback to vast 2.0 close event if necessary
      if (eventName === 'closeLinear' && !this.trackingEvents[eventName] && this.trackingEvents['close']) {
        eventName = 'close';
      }

      var trackingURLTemplates = this.trackingEvents[eventName];
      var isAlwaysEmitEvent = this.emitAlwaysEvents.indexOf(eventName) > -1;

      if (trackingURLTemplates) {
        this.emit(eventName, '');
        this.trackURLs(trackingURLTemplates);
      } else if (isAlwaysEmitEvent) {
        this.emit(eventName, '');
      }

      if (once) {
        delete this.trackingEvents[eventName];

        if (isAlwaysEmitEvent) {
          this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(eventName), 1);
        }
      }
    }
    /**
     * Calls the tracking urls templates with the given variables.
     *
     * @param {Array} URLTemplates - An array of tracking url templates.
     * @param {Object} [variables={}] - An optional Object of parameters to be used in the tracking calls.
     * @param {Object} [options={}] - An optional Object of options to be used in the tracking calls.
     */

  }, {
    key: "trackURLs",
    value: function trackURLs(URLTemplates) {
      var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.linear) {
        if (this.creative && this.creative.mediaFiles && this.creative.mediaFiles[0] && this.creative.mediaFiles[0].fileURL) {
          variables['ASSETURI'] = this.creative.mediaFiles[0].fileURL;
        }

        variables['CONTENTPLAYHEAD'] = this.progressFormatted();
      }

      util.track(URLTemplates, variables, options);
    }
    /**
     * Formats time progress in a readable string.
     *
     * @return {String}
     */

  }, {
    key: "progressFormatted",
    value: function progressFormatted() {
      var seconds = parseInt(this.progress);
      var h = seconds / (60 * 60);

      if (h.length < 2) {
        h = "0".concat(h);
      }

      var m = seconds / 60 % 60;

      if (m.length < 2) {
        m = "0".concat(m);
      }

      var s = seconds % 60;

      if (s.length < 2) {
        s = "0".concat(m);
      }

      var ms = parseInt((this.progress - seconds) * 100);
      return "".concat(h, ":").concat(m, ":").concat(s, ".").concat(ms);
    }
  }]);

  return VASTTracker;
}(EventEmitter);

exports.VASTClient = VASTClient;
exports.VASTParser = VASTParser;
exports.VASTTracker = VASTTracker;

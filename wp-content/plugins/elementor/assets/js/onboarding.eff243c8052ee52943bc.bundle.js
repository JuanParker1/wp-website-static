/*! elementor - v3.6.1 - 23-03-2022 */
"use strict";
(self["webpackChunkelementor"] = self["webpackChunkelementor"] || []).push([["onboarding"],{

/***/ "../core/app/assets/js/ui/popover-dialog/popover-dialog.js":
/*!*****************************************************************!*\
  !*** ../core/app/assets/js/ui/popover-dialog/popover-dialog.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = PopoverDialog;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function PopoverDialog(props) {
  var targetRef = props.targetRef,
      offsetTop = props.offsetTop,
      offsetLeft = props.offsetLeft,
      wrapperClass = props.wrapperClass,
      trigger = props.trigger,
      hideAfter = props.hideAfter,
      popoverRef = (0, _react.useCallback)(function (popoverEl) {
    var target = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current;

    if (!target) {
      return;
    }
    /**
     * Show Popover
     */


    /**
     * Show Popover
     */
    var showPopover = function showPopover() {
      popoverEl.style.display = 'block';
      popoverEl.setAttribute('aria-expanded', true);
      var targetRect = target.getBoundingClientRect(),
          popoverRect = popoverEl.getBoundingClientRect(),
          widthDifference = popoverRect.width - targetRect.width;
      popoverEl.style.top = targetRect.bottom + offsetTop + 'px';
      popoverEl.style.left = targetRect.left - widthDifference / 2 - offsetLeft + 'px'; // 16px to compensate for the arrow width.

      // 16px to compensate for the arrow width.
      popoverEl.style.setProperty('--popover-arrow-offset-end', (popoverRect.width - 16) / 2 + 'px');
    };
    /**
     * Hide Popover
     */


    /**
     * Hide Popover
     */
    var hidePopover = function hidePopover() {
      popoverEl.style.display = 'none';
      popoverEl.setAttribute('aria-expanded', false);
    };
    /**
     * Handle the Popover's hover functionality
     */


    /**
     * Handle the Popover's hover functionality
     */
    var handlePopoverHover = function handlePopoverHover() {
      var hideOnMouseOut = true,
          timeOut = null; // Show popover on hover of the target

      // Show popover on hover of the target
      target.addEventListener('mouseover', function () {
        hideOnMouseOut = true;
        showPopover();
      }); // Hide popover when not overing over the target or the popover itself

      // Hide popover when not overing over the target or the popover itself
      target.addEventListener('mouseleave', function () {
        timeOut = setTimeout(function () {
          if (hideOnMouseOut) {
            if ('block' === popoverEl.style.display) {
              hidePopover();
            }
          }
        }, hideAfter);
      }); // Don't hide the popover if the user is still hovering over it.

      // Don't hide the popover if the user is still hovering over it.
      popoverEl.addEventListener('mouseover', function () {
        hideOnMouseOut = false;

        if (timeOut) {
          clearTimeout(timeOut);
          timeOut = null;
        }
      }); // Once the user stops hovering over the popover, hide it.

      // Once the user stops hovering over the popover, hide it.
      popoverEl.addEventListener('mouseleave', function () {
        timeOut = setTimeout(function () {
          if (hideOnMouseOut) {
            if ('block' === popoverEl.style.display) {
              hidePopover();
            }
          }
        }, hideAfter);
        hideOnMouseOut = true;
      });
    };
    /**
     * Handle the Popover's click functionality
     */


    /**
     * Handle the Popover's click functionality
     */
    var handlePopoverClick = function handlePopoverClick() {
      var popoverIsActive = false;
      target.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (popoverIsActive) {
          hidePopover();
          popoverIsActive = false;
        } else {
          showPopover();
          popoverIsActive = true;
        }
      }); // Make sure the popover doesn't close when it is clicked on.

      // Make sure the popover doesn't close when it is clicked on.
      popoverEl.addEventListener('click', function (e) {
        e.stopPropagation();
      }); // Hide the popover when clicking outside of it.

      // Hide the popover when clicking outside of it.
      document.body.addEventListener('click', function () {
        if (popoverIsActive) {
          hidePopover();
          popoverIsActive = false;
        }
      });
    };

    if ('hover' === trigger) {
      handlePopoverHover();
    } else if ('click' === trigger) {
      handlePopoverClick();
    }
  }, [targetRef]);
  var wrapperClasses = 'e-app__popover';

  if (wrapperClass) {
    wrapperClasses += ' ' + wrapperClass;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClasses,
    ref: popoverRef
  }, props.children);
}

PopoverDialog.propTypes = {
  targetRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]).isRequired,
  trigger: PropTypes.string,
  direction: PropTypes.string,
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrapperClass: PropTypes.string,
  children: PropTypes.any,
  hideAfter: PropTypes.number
};
PopoverDialog.defaultProps = {
  direction: 'bottom',
  trigger: 'hover',
  offsetTop: 10,
  offsetLeft: 0,
  hideAfter: 300
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/app.js":
/*!*******************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/app.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = App;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _router2 = _interopRequireDefault(__webpack_require__(/*! @elementor/router */ "@elementor/router"));

var _context = __webpack_require__(/*! ./context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _account = _interopRequireDefault(__webpack_require__(/*! ./pages/account */ "../core/app/modules/onboarding/assets/js/pages/account.js"));

var _helloTheme = _interopRequireDefault(__webpack_require__(/*! ./pages/hello-theme */ "../core/app/modules/onboarding/assets/js/pages/hello-theme.js"));

var _siteName = _interopRequireDefault(__webpack_require__(/*! ./pages/site-name */ "../core/app/modules/onboarding/assets/js/pages/site-name.js"));

var _siteLogo = _interopRequireDefault(__webpack_require__(/*! ./pages/site-logo */ "../core/app/modules/onboarding/assets/js/pages/site-logo.js"));

var _goodToGo = _interopRequireDefault(__webpack_require__(/*! ./pages/good-to-go */ "../core/app/modules/onboarding/assets/js/pages/good-to-go.js"));

var _uploadAndInstallPro = _interopRequireDefault(__webpack_require__(/*! ./pages/upload-and-install-pro */ "../core/app/modules/onboarding/assets/js/pages/upload-and-install-pro.js"));

function App() {
  // Send an AJAX request to update the database option which makes sure the Onboarding process only runs once,
  // for new Elementor sites.
  (0, _react.useEffect)(function () {
    if (!elementorAppConfig.onboarding.onboardingAlreadyRan) {
      var formData = new FormData();
      formData.append('_nonce', elementorCommon.config.ajax.nonce);
      formData.append('action', 'elementor_update_onboarding_option');
      fetch(elementorCommon.config.ajax.url, {
        method: 'POST',
        body: formData
      });
    }

    elementorAppConfig.return_url = elementorAppConfig.admin_url;
  }, []);
  return /*#__PURE__*/_react.default.createElement(_context.ContextProvider, null, /*#__PURE__*/_react.default.createElement(_router.LocationProvider, {
    history: _router2.default.appHistory
  }, /*#__PURE__*/_react.default.createElement(_router.Router, null, /*#__PURE__*/_react.default.createElement(_account.default, {
    default: true
  }), /*#__PURE__*/_react.default.createElement(_helloTheme.default, {
    path: "hello"
  }), /*#__PURE__*/_react.default.createElement(_siteName.default, {
    path: "siteName"
  }), /*#__PURE__*/_react.default.createElement(_siteLogo.default, {
    path: "siteLogo"
  }), /*#__PURE__*/_react.default.createElement(_goodToGo.default, {
    path: "goodToGo"
  }), /*#__PURE__*/_react.default.createElement(_uploadAndInstallPro.default, {
    path: "uploadAndInstallPro"
  }))));
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/button.js":
/*!*********************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/button.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Button;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function Button(props) {
  var buttonSettings = props.buttonSettings,
      type = props.type;
  var buttonClasses = 'e-onboarding__button';

  if (type) {
    buttonClasses += " e-onboarding__button-".concat(type);
  }

  if (buttonSettings.className) {
    buttonSettings.className += ' ' + buttonClasses;
  } else {
    buttonSettings.className = buttonClasses;
  }

  if (buttonSettings.href) {
    return /*#__PURE__*/_react.default.createElement("a", buttonSettings, buttonSettings.text);
  }

  return /*#__PURE__*/_react.default.createElement("div", buttonSettings, buttonSettings.text);
}

Button.propTypes = {
  buttonSettings: PropTypes.object.isRequired,
  type: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/card.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/card.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Card;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! core-js/modules/es6.string.link.js */ "../node_modules/core-js/modules/es6.string.link.js");

__webpack_require__(/*! core-js/modules/es6.function.name.js */ "../node_modules/core-js/modules/es6.function.name.js");

function Card(_ref) {
  var image = _ref.image,
      imageAlt = _ref.imageAlt,
      text = _ref.text,
      link = _ref.link,
      name = _ref.name,
      clickAction = _ref.clickAction;

  var onClick = function onClick() {
    elementorCommon.events.dispatchEvent({
      event: 'starting canvas click',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        selection: name
      }
    });

    if (clickAction) {
      clickAction();
    }
  };

  return /*#__PURE__*/_react.default.createElement("a", {
    className: "e-onboarding__card",
    href: link,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "e-onboarding__card-image",
    src: image,
    alt: imageAlt
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__card-text"
  }, text));
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickAction: PropTypes.func
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/checkbox-with-label.js":
/*!**********************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/checkbox-with-label.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = CheckBoxWithLabel;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../../../../../assets/js/ui/atoms/checkbox */ "../core/app/assets/js/ui/atoms/checkbox.js"));

function CheckBoxWithLabel(props) {
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "e-onboarding__checkbox-label"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "e-onboarding__checkbox-input",
    checked: props.checked,
    onChange: function onChange(event) {
      return props.onChangeCallback(event);
    }
  }), props.labelText);
}

CheckBoxWithLabel.propTypes = {
  checked: PropTypes.any,
  labelText: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/checklist-item.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/checklist-item.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ChecklistItem;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function ChecklistItem(props) {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "e-onboarding__checklist-item"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "eicon-check-circle"
  }), props.children);
}

ChecklistItem.propTypes = {
  children: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/checklist.js":
/*!************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/checklist.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Checklist;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function Checklist(props) {
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "e-onboarding__checklist"
  }, props.children);
}

Checklist.propTypes = {
  children: PropTypes.any.isRequired
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/go-pro-popover.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/go-pro-popover.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = GoProPopover;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

var _context = __webpack_require__(/*! ../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _popoverDialog = _interopRequireDefault(__webpack_require__(/*! elementor-app/ui/popover-dialog/popover-dialog */ "../core/app/assets/js/ui/popover-dialog/popover-dialog.js"));

var _checklist = _interopRequireDefault(__webpack_require__(/*! ./checklist */ "../core/app/modules/onboarding/assets/js/components/checklist.js"));

var _checklistItem = _interopRequireDefault(__webpack_require__(/*! ./checklist-item */ "../core/app/modules/onboarding/assets/js/components/checklist-item.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "../core/app/modules/onboarding/assets/js/components/button.js"));

function GoProPopover(props) {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState; // Handle the Pro Upload popup window.


  var alreadyHaveProButtonRef = (0, _react.useCallback)(function (alreadyHaveProButton) {
    if (!alreadyHaveProButton) {
      return;
    }

    alreadyHaveProButton.addEventListener('click', function (event) {
      event.preventDefault();
      elementorCommon.events.dispatchEvent({
        event: 'already have pro',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          step: state.currentStep
        }
      }); // Open the Pro Upload screen in a popup.

      window.open(alreadyHaveProButton.href + '&mode=popup', 'elementorUploadPro', "toolbar=no, menubar=no, width=728, height=531, top=100, left=100"); // Run the callback for when the upload succeeds.

      elementorCommon.elements.$window.on('elementor/upload-and-install-pro/success/', function () {
        updateState({
          hasPro: true
        });
      });
    });
  }, []); // The buttonsConfig prop is an array of objects. To find the 'Go Pro' button, we need to iterate over the object.

  var goProButton = props.buttonsConfig.find(function (button) {
    return 'go-pro' === button.id;
  }),
      getElProButton = {
    text: __('Get Elementor Pro', 'elementor'),
    className: 'e-onboarding__go-pro-cta',
    target: '_blank',
    href: 'https://elementor.com/pro/?utm_source=onboarding-wizard&utm_campaign=gopro&utm_medium=wp-dash&utm_content=top-bar-dropdown&utm_term=' + elementorAppConfig.onboarding.onboardingVersion,
    tabIndex: 0,
    onClick: function onClick() {
      elementorCommon.events.dispatchEvent({
        event: 'get elementor pro',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          step: state.currentStep
        }
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_popoverDialog.default, {
    targetRef: goProButton.elRef,
    wrapperClass: "e-onboarding__go-pro"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__go-pro-content"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "e-onboarding__go-pro-title"
  }, __('Ready to Go Pro?', 'elementor')), /*#__PURE__*/_react.default.createElement(_checklist.default, null, /*#__PURE__*/_react.default.createElement(_checklistItem.default, null, __('90+ Basic & Pro widgets', 'elementor')), /*#__PURE__*/_react.default.createElement(_checklistItem.default, null, __('300+ Basic & Pro templates', 'elementor')), /*#__PURE__*/_react.default.createElement(_checklistItem.default, null, __('Premium Support', 'elementor'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__go-pro-paragraph"
  }, __('And so much more!', 'elementor')), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__go-pro-paragraph"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    buttonSettings: getElProButton
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__go-pro-paragraph"
  }, /*#__PURE__*/_react.default.createElement("a", {
    tabIndex: "0",
    className: "e-onboarding__go-pro-already-have",
    ref: alreadyHaveProButtonRef,
    href: elementorAppConfig.onboarding.urls.uploadPro,
    rel: "opener"
  }, __('Already have Elementor Pro?', 'elementor')))));
}

GoProPopover.propTypes = {
  buttonsConfig: PropTypes.array.isRequired
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/layout/footer-buttons.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/layout/footer-buttons.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = FooterButtons;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _grid = _interopRequireDefault(__webpack_require__(/*! elementor-app/ui/grid/grid */ "../core/app/assets/js/ui/grid/grid.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "../core/app/modules/onboarding/assets/js/components/button.js"));

var _skipButton = _interopRequireDefault(__webpack_require__(/*! ../skip-button */ "../core/app/modules/onboarding/assets/js/components/skip-button.js"));

function FooterButtons(_ref) {
  var actionButton = _ref.actionButton,
      skipButton = _ref.skipButton,
      className = _ref.className;
  var classNames = 'e-onboarding__footer';

  if (className) {
    classNames += ' ' + className;
  }

  return /*#__PURE__*/_react.default.createElement(_grid.default, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: classNames
  }, actionButton && /*#__PURE__*/_react.default.createElement(_button.default, {
    buttonSettings: actionButton,
    type: "action"
  }), skipButton && /*#__PURE__*/_react.default.createElement(_skipButton.default, {
    button: skipButton
  }));
}

FooterButtons.propTypes = {
  actionButton: PropTypes.object,
  skipButton: PropTypes.object,
  className: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/layout/header.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/layout/header.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Header;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ../../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _grid = _interopRequireDefault(__webpack_require__(/*! elementor-app/ui/grid/grid */ "../core/app/assets/js/ui/grid/grid.js"));

var _goProPopover = _interopRequireDefault(__webpack_require__(/*! ../go-pro-popover */ "../core/app/modules/onboarding/assets/js/components/go-pro-popover.js"));

var _headerButtons = _interopRequireDefault(__webpack_require__(/*! elementor-app/layout/header-buttons */ "../core/app/assets/js/layout/header-buttons.js"));

var _usePageTitle = _interopRequireDefault(__webpack_require__(/*! elementor-app/hooks/use-page-title */ "../core/app/assets/js/hooks/use-page-title.js"));

function Header(props) {
  (0, _usePageTitle.default)({
    title: props.title
  });

  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state;

  var onClose = function onClose() {
    elementorCommon.events.dispatchEvent({
      event: 'close modal',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep
      }
    });
    window.top.location = elementorAppConfig.admin_url;
  };

  return /*#__PURE__*/_react.default.createElement(_grid.default, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: "eps-app__header e-onboarding__header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__logo-title-wrapper e-onboarding__header-logo"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "eps-app__logo eicon-elementor"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: elementorCommon.config.urls.assets + 'images/logo-platform.svg',
    alt: __('Elementor Logo', 'elementor')
  })), /*#__PURE__*/_react.default.createElement(_headerButtons.default, {
    buttons: props.buttons,
    onClose: onClose
  }), !state.hasPro && /*#__PURE__*/_react.default.createElement(_goProPopover.default, {
    buttonsConfig: props.buttons
  }));
}

Header.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object)
};
Header.defaultProps = {
  buttons: []
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/layout/layout.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/layout/layout.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Layout;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ../../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _header = _interopRequireDefault(__webpack_require__(/*! ./header */ "../core/app/modules/onboarding/assets/js/components/layout/header.js"));

var _progressBar = _interopRequireDefault(__webpack_require__(/*! ../progress-bar/progress-bar */ "../core/app/modules/onboarding/assets/js/components/progress-bar/progress-bar.js"));

var _content = _interopRequireDefault(__webpack_require__(/*! ../../../../../../assets/js/layout/content */ "../core/app/assets/js/layout/content.js"));

var _connect = _interopRequireDefault(__webpack_require__(/*! ../../utils/connect */ "../core/app/modules/onboarding/assets/js/utils/connect.js"));

function Layout(props) {
  (0, _react.useEffect)(function () {
    // Send modal load event for current step.
    elementorCommon.events.dispatchEvent({
      event: 'modal load',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: props.pageId,
        user_state: elementorCommon.config.library_connect.is_connected ? 'logged' : 'anon'
      }
    });
    updateState({
      currentStep: props.pageId,
      nextStep: props.nextStep || ''
    });
  }, []);

  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState,
      headerButtons = [],
      goProButtonRef = (0, _react.useRef)(),
      createAccountButton = {
    id: 'create-account',
    text: __('Create Account', 'elementor-pro'),
    hideText: false,
    elRef: (0, _react.useRef)(),
    url: elementorAppConfig.onboarding.urls.connect + elementorAppConfig.onboarding.utms.connectTopBar,
    target: '_blank',
    rel: 'opener'
  };

  if (state.isLibraryConnected) {
    headerButtons.push({
      id: 'my-elementor',
      text: __('My Elementor', 'elementor-pro'),
      hideText: false,
      icon: 'eicon-user-circle-o',
      url: 'https://my.elementor.com/',
      target: '_blank'
    });
  } else {
    headerButtons.push(createAccountButton);
  }

  if (!state.hasPro) {
    headerButtons.push({
      id: 'go-pro',
      text: __('Go Pro', 'elementor-pro'),
      hideText: false,
      icon: 'eicon-pro-icon',
      url: 'https://elementor.com/pro/?utm_source=onboarding-wizard&utm_campaign=gopro&utm_medium=wp-dash&utm_content=top-bar&utm_term=' + elementorAppConfig.onboarding.onboardingVersion,
      target: '_blank',
      elRef: goProButtonRef,
      onClick: function onClick() {
        elementorCommon.events.dispatchEvent({
          event: 'go pro',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            contributor: state.isUsageDataShared
          }
        });
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__lightbox"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app e-onboarding"
  }, !state.isLibraryConnected && /*#__PURE__*/_react.default.createElement(_connect.default, {
    buttonRef: createAccountButton.elRef
  }), /*#__PURE__*/_react.default.createElement(_header.default, {
    title: __('Getting Started', 'elementor'),
    buttons: headerButtons
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: 'eps-app__main e-onboarding__page-' + props.pageId
  }, /*#__PURE__*/_react.default.createElement(_content.default, {
    className: "e-onboarding__content"
  }, /*#__PURE__*/_react.default.createElement(_progressBar.default, null), props.children))));
}

Layout.propTypes = {
  pageId: PropTypes.string.isRequired,
  nextStep: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/layout/page-content-layout.js":
/*!*****************************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/layout/page-content-layout.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = PageContentLayout;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _grid = _interopRequireDefault(__webpack_require__(/*! elementor-app/ui/grid/grid */ "../core/app/assets/js/ui/grid/grid.js"));

var _notice = _interopRequireDefault(__webpack_require__(/*! ../notice */ "../core/app/modules/onboarding/assets/js/components/notice.js"));

var _footerButtons = _interopRequireDefault(__webpack_require__(/*! ./footer-buttons */ "../core/app/modules/onboarding/assets/js/components/layout/footer-buttons.js"));

function PageContentLayout(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_grid.default, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: "e-onboarding__page-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__page-content-start"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "e-onboarding__page-content-section-title"
  }, props.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__page-content-section-text"
  }, props.children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__page-content-end"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: props.image,
    alt: "Information"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__notice-container"
  }, props.noticeState ? /*#__PURE__*/_react.default.createElement(_notice.default, {
    noticeState: props.noticeState
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__notice-empty-spacer"
  })), /*#__PURE__*/_react.default.createElement(_footerButtons.default, {
    actionButton: props.actionButton,
    skipButton: props.skipButton
  }));
}

PageContentLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  image: PropTypes.string,
  actionButton: PropTypes.object,
  skipButton: PropTypes.object,
  noticeState: PropTypes.any
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/notice.js":
/*!*********************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/notice.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Notice;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function Notice(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__notice e-onboarding__notice--".concat(props.noticeState.type)
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: props.noticeState.icon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "e-onboarding__notice-text"
  }, props.noticeState.message));
}

Notice.propTypes = {
  noticeState: PropTypes.object
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/progress-bar/progress-bar-item.js":
/*!*********************************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/progress-bar/progress-bar-item.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ProgressBarItem;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ../../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

function ProgressBarItem(props) {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      stepCompleted = 'completed' === state.steps[props.id],
      stepSkipped = 'skipped' === state.steps[props.id];

  var itemClasses = 'e-onboarding__progress-bar-item';

  if (props.id === state.currentStep) {
    itemClasses += ' e-onboarding__progress-bar-item--active';
  } else if (stepCompleted) {
    itemClasses += ' e-onboarding__progress-bar-item--completed';
  } else if (stepSkipped) {
    itemClasses += ' e-onboarding__progress-bar-item--skipped';
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: props.onClick,
    className: itemClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__progress-bar-item-icon"
  }, stepCompleted ? /*#__PURE__*/_react.default.createElement("i", {
    className: "eicon-check"
  }) : props.index + 1), props.title);
}

ProgressBarItem.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string,
  onClick: PropTypes.func
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/progress-bar/progress-bar.js":
/*!****************************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/progress-bar/progress-bar.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ProgressBar;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

__webpack_require__(/*! core-js/modules/es6.array.map.js */ "../node_modules/core-js/modules/es6.array.map.js");

var _context = __webpack_require__(/*! ../../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _progressBarItem = _interopRequireDefault(__webpack_require__(/*! ./progress-bar-item */ "../core/app/modules/onboarding/assets/js/components/progress-bar/progress-bar-item.js"));

function ProgressBar() {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      navigate = (0, _router.useNavigate)(),
      progressBarItemsConfig = [{
    id: 'account',
    title: __('Elementor Account', 'elementor'),
    route: 'account'
  }]; // If hello theme is already activated when onboarding starts, don't show this step in the onboarding.


  if (!elementorAppConfig.onboarding.helloActivated) {
    progressBarItemsConfig.push({
      id: 'hello',
      title: __('Hello Theme', 'elementor'),
      route: 'hello'
    });
  }

  progressBarItemsConfig.push({
    id: 'siteName',
    title: __('Site Name', 'elementor'),
    route: 'site-name'
  }, {
    id: 'siteLogo',
    title: __('Site Logo', 'elementor'),
    route: 'site-logo'
  }, {
    id: 'goodToGo',
    title: __('Good to Go', 'elementor'),
    route: 'good-to-go'
  });
  var progressBarItems = progressBarItemsConfig.map(function (itemConfig, index) {
    itemConfig.index = index;

    if (state.steps[itemConfig.id]) {
      itemConfig.onClick = function () {
        elementorCommon.events.dispatchEvent({
          event: 'step click',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            next_step: itemConfig.id
          }
        });
        navigate('/onboarding/' + itemConfig.id);
      };
    }

    return /*#__PURE__*/_react.default.createElement(_progressBarItem.default, (0, _extends2.default)({
      key: itemConfig.id
    }, itemConfig));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__progress-bar"
  }, progressBarItems);
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/components/skip-button.js":
/*!**************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/components/skip-button.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = SkipButton;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _context = __webpack_require__(/*! ../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "../core/app/modules/onboarding/assets/js/components/button.js"));

function SkipButton(props) {
  var button = props.button,
      className = props.className,
      _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState,
      navigate = (0, _router.useNavigate)(),
      skipStep = function skipStep() {
    var mutatedState = JSON.parse((0, _stringify.default)(state));
    mutatedState.steps[state.currentStep] = 'skipped';
    updateState(mutatedState);

    if (state.nextStep) {
      navigate('onboarding/' + state.nextStep);
    }
  },
      action = button.action || skipStep; // Make sure the 'action' prop doesn't get printed on the button markup which causes an error.


  delete button.action; // If the button is a link, no onClick functionality should be added.

  button.onClick = function () {
    elementorCommon.events.dispatchEvent({
      event: 'skip',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep
      }
    });

    if (!button.href) {
      action();
    }
  };

  return /*#__PURE__*/_react.default.createElement(_button.default, {
    buttonSettings: button,
    className: className,
    type: "skip"
  });
}

SkipButton.propTypes = {
  button: PropTypes.object.isRequired,
  className: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/context/context.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/context/context.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ContextProvider = ContextProvider;
exports.OnboardingContext = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var OnboardingContext = (0, _react.createContext)({});
exports.OnboardingContext = OnboardingContext;

function ContextProvider(props) {
  var onboardingConfig = elementorAppConfig.onboarding,
      initialState = {
    // eslint-disable-next-line camelcase
    hasPro: elementorAppConfig.hasPro,
    isLibraryConnected: onboardingConfig.isLibraryConnected,
    isHelloThemeInstalled: onboardingConfig.helloInstalled,
    isHelloThemeActivated: onboardingConfig.helloActivated,
    isUsageDataShared: elementorCommon.config['event-tracker'].isUserDataShared,
    helloOptInChecked: onboardingConfig.helloOptOut,
    trackerCheckboxChecked: onboardingConfig.isUserDataShared,
    siteName: onboardingConfig.siteName,
    siteLogo: onboardingConfig.siteLogo,
    currentStep: '',
    nextStep: '',
    steps: {
      account: false,
      hello: false,
      siteName: false,
      siteLogo: false,
      goodToGo: false
    }
  },
      _useState = (0, _react.useState)(initialState),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1],
      updateState = (0, _react.useCallback)(function (newState) {
    setState(function (prev) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, prev), newState);
    });
  }, [setState]),
      getStateObjectToUpdate = function getStateObjectToUpdate(stateObject, mainChangedPropertyKey, subChangedPropertyKey, subChangedPropertyValue) {
    var mutatedStateCopy = JSON.parse((0, _stringify.default)(stateObject));
    mutatedStateCopy[mainChangedPropertyKey][subChangedPropertyKey] = subChangedPropertyValue;
    return mutatedStateCopy;
  };

  return /*#__PURE__*/_react.default.createElement(OnboardingContext.Provider, {
    value: {
      state: state,
      setState: setState,
      updateState: updateState,
      getStateObjectToUpdate: getStateObjectToUpdate
    }
  }, props.children);
}

ContextProvider.propTypes = {
  children: PropTypes.any
};

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/pages/account.js":
/*!*****************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/pages/account.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Account;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! core-js/modules/es6.array.map.js */ "../node_modules/core-js/modules/es6.array.map.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _useAjax2 = _interopRequireDefault(__webpack_require__(/*! elementor-app/hooks/use-ajax */ "../core/app/assets/js/hooks/use-ajax.js"));

var _context = __webpack_require__(/*! ../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _connect = _interopRequireDefault(__webpack_require__(/*! ../utils/connect */ "../core/app/modules/onboarding/assets/js/utils/connect.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/layout */ "../core/app/modules/onboarding/assets/js/components/layout/layout.js"));

var _pageContentLayout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/page-content-layout */ "../core/app/modules/onboarding/assets/js/components/layout/page-content-layout.js"));

var _checkboxWithLabel = _interopRequireDefault(__webpack_require__(/*! ../components/checkbox-with-label */ "../core/app/modules/onboarding/assets/js/components/checkbox-with-label.js"));

function Account() {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState,
      getStateObjectToUpdate = _useContext.getStateObjectToUpdate,
      _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      noticeState = _useState2[0],
      setNoticeState = _useState2[1],
      _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      dataSharingCheckboxState = _useState4[0],
      setDataSharingCheckboxState = _useState4[1],
      _useAjax = (0, _useAjax2.default)(),
      dataSharingAjaxState = _useAjax.ajaxState,
      setDataSharingAjaxState = _useAjax.setAjax,
      navigate = (0, _router.useNavigate)(),
      pageId = 'account',
      nextStep = state.isHelloThemeActivated ? 'siteName' : 'hello',
      actionButtonRef = (0, _react.useRef)(),
      alreadyHaveAccountLinkRef = (0, _react.useRef)();

  var skipButton;

  if ('completed' !== state.steps[pageId]) {
    skipButton = {
      text: __('Skip', 'elementor')
    }; // If the user skips the "Connect" step, but did check the Data Sharing checkbox - handle data sharing.

    if (!state.isUsageDataShared && dataSharingCheckboxState) {
      skipButton.action = function () {
        setDataSharingAjaxState({
          data: {
            action: 'elementor_update_data_sharing'
          }
        });
      };
    }
  }

  var pageTexts = {};

  if (state.isLibraryConnected) {
    pageTexts = {
      firstLine: __('To get the most out of Elementor, we\'ll help you take your first steps:', 'elementor'),
      listItems: [__('Set your site\'s theme', 'elementor'), __('Give your site a name & logo', 'elementor'), __('Choose how to start creating', 'elementor')]
    };
  } else {
    pageTexts = {
      firstLine: __('To get the most out of Elementor, we’ll connect your account.', 'elementor') + ' ' + __('Then you can:', 'elementor'),
      listItems: [__('Choose from countless professional templates', 'elementor'), __('Manage your site with our handy dashboard', 'elementor'), __('Take part in the community forum, share & grow together', 'elementor')]
    };
  } // If the user is not connected, the on-click action is handled by the <Connect> component, so there is no onclick
  // property.


  var actionButton = {
    role: 'button'
  };

  if (state.isLibraryConnected) {
    actionButton.text = __('Let\'s do it', 'elementor');

    actionButton.onClick = function () {
      elementorCommon.events.dispatchEvent({
        event: 'next',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          step: state.currentStep
        }
      }); // If connected to Elementor, handle the data sharing permission when the user clicks the Next button.

      if (!state.isUsageDataShared && dataSharingCheckboxState) {
        setDataSharingAjaxState({
          data: {
            action: 'elementor_update_data_sharing'
          }
        });
      }

      var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
      updateState(stateToUpdate);
      navigate('onboarding/' + nextStep);
    };
  } else {
    actionButton.text = __('Create my account', 'elementor');
    actionButton.href = elementorAppConfig.onboarding.urls.connect + elementorAppConfig.onboarding.utms.connectCta;
    actionButton.ref = actionButtonRef;

    actionButton.onClick = function () {
      elementorCommon.events.dispatchEvent({
        event: 'create account',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          contributor: dataSharingCheckboxState,
          source: 'cta'
        }
      });
    };
  }

  var sendDataSharingRequest = function sendDataSharingRequest() {
    setDataSharingAjaxState({
      data: {
        action: 'elementor_update_data_sharing'
      }
    });
  };

  var connectSuccessCallback = function connectSuccessCallback(data) {
    var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
    stateToUpdate.isLibraryConnected = true;
    elementorCommon.config.library_connect.is_connected = true;
    elementorCommon.config.library_connect.current_access_level = data.kits_access_level || data.access_level || 0;
    updateState(stateToUpdate);
    elementorCommon.events.dispatchEvent({
      event: 'indication prompt',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep,
        action_state: 'success',
        action: 'connect account'
      }
    });
    setNoticeState({
      type: 'success',
      icon: 'eicon-check-circle-o',
      message: 'Alrighty - your account is connected.'
    }); // If not connected at onboarding load, handle the data sharing permission after the connect is handled.

    if (!state.isUsageDataShared && dataSharingCheckboxState) {
      sendDataSharingRequest();
    } else {
      navigate('onboarding/' + nextStep);
    }
  };

  var connectFailureCallback = function connectFailureCallback() {
    elementorCommon.events.dispatchEvent({
      event: 'indication prompt',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep,
        action_state: 'failure',
        action: 'connect account'
      }
    });
    setNoticeState({
      type: 'error',
      icon: 'eicon-warning',
      message: __('Oops, the connection failed. Try again.', 'elementor')
    }); // If not connected at onboarding load, handle the data sharing permission after the connect is handled.

    if (!state.isUsageDataShared && dataSharingCheckboxState) {
      sendDataSharingRequest();
    } else {
      navigate('onboarding/' + nextStep);
    }
  };
  /**
   * AJAX State Sampling and reaction.
   */


  (0, _react.useEffect)(function () {
    if ('initial' !== dataSharingAjaxState.status) {
      var _dataSharingAjaxState;

      if ('success' === dataSharingAjaxState.status && (_dataSharingAjaxState = dataSharingAjaxState.response) !== null && _dataSharingAjaxState !== void 0 && _dataSharingAjaxState.usageDataShared) {
        elementorCommon.config['event-tracker'].isUserDataShared = true; // If connect was successful

        if (state.isLibraryConnected) {
          updateState({
            isUsageDataShared: true
          });
        } else {
          var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'skipped');
          stateToUpdate.isUsageDataShared = true;
          updateState(stateToUpdate);
          navigate('onboarding/' + state.nextStep);
        }
      } else if ('error' === dataSharingAjaxState.status) {
        elementorCommon.events.dispatchEvent({
          event: 'indication prompt',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            action_state: 'failure',
            action: 'connect data'
          }
        });
        setNoticeState({
          type: 'error',
          icon: 'eicon-warning',
          message: __('We couldn\'t set up data sharing. You can also do this later in the Elementor Settings page in the admin dashboard.', 'elementor')
        });
      } // Since the data sharing Ajax request is done after the Connect sequence, moving to the next step is done
      // once the Ajax request is processed.


      navigate('onboarding/' + nextStep);
    }
  }, [dataSharingAjaxState.status]);
  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    pageId: pageId,
    nextStep: nextStep
  }, /*#__PURE__*/_react.default.createElement(_pageContentLayout.default, {
    image: elementorCommon.config.urls.assets + 'images/app/onboarding/Illustration_Account.svg',
    title: __('You\'re here! Let\'s set things up.', 'elementor'),
    actionButton: actionButton,
    skipButton: skipButton,
    noticeState: noticeState
  }, actionButton.ref && !state.isLibraryConnected && /*#__PURE__*/_react.default.createElement(_connect.default, {
    buttonRef: actionButton.ref,
    successCallback: function successCallback(data) {
      return connectSuccessCallback(data);
    },
    errorCallback: connectFailureCallback
  }), /*#__PURE__*/_react.default.createElement("span", null, pageTexts.firstLine), /*#__PURE__*/_react.default.createElement("ul", null, pageTexts.listItems.map(function (listItem, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: 'listItem' + index
    }, listItem);
  })), !state.isUsageDataShared && /*#__PURE__*/_react.default.createElement(_checkboxWithLabel.default, {
    checked: dataSharingCheckboxState,
    onChangeCallback: function onChangeCallback(event) {
      elementorCommon.events.dispatchEvent({
        event: 'contributor checkbox click',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          state: event.target.checked
        }
      });
      setDataSharingCheckboxState(event.target.checked);
    },
    labelText: __('Become a super contributor by sharing non-sensitive data.', 'elementor')
  })), !state.isLibraryConnected && /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__already-have-account-text"
  }, /*#__PURE__*/_react.default.createElement("p", null, __('Already have one?', 'elementor') + ' ', /*#__PURE__*/_react.default.createElement("a", {
    ref: alreadyHaveAccountLinkRef,
    href: elementorAppConfig.onboarding.urls.connect + elementorAppConfig.onboarding.utms.connectCtaLink,
    onClick: function onClick() {
      elementorCommon.events.dispatchEvent({
        event: 'connect account',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          contributor: dataSharingCheckboxState
        }
      });
    }
  }, __('Connect your account', 'elementor'))), /*#__PURE__*/_react.default.createElement(_connect.default, {
    buttonRef: alreadyHaveAccountLinkRef,
    successCallback: connectSuccessCallback,
    errorCallback: connectFailureCallback
  })));
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/pages/good-to-go.js":
/*!********************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/pages/good-to-go.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = GoodToGo;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _grid = _interopRequireDefault(__webpack_require__(/*! elementor-app/ui/grid/grid */ "../core/app/assets/js/ui/grid/grid.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/layout */ "../core/app/modules/onboarding/assets/js/components/layout/layout.js"));

var _card = _interopRequireDefault(__webpack_require__(/*! ../components/card */ "../core/app/modules/onboarding/assets/js/components/card.js"));

var _footerButtons = _interopRequireDefault(__webpack_require__(/*! ../components/layout/footer-buttons */ "../core/app/modules/onboarding/assets/js/components/layout/footer-buttons.js"));

function GoodToGo() {
  var pageId = 'goodToGo',
      skipButton = {
    text: __('Skip', 'elementor'),
    href: elementorAppConfig.onboarding.urls.createNewPage
  },
      kitLibraryLink = elementorAppConfig.onboarding.urls.kitLibrary + '&referrer=onboarding';
  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    pageId: pageId
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "e-onboarding__page-content-section-title"
  }, __('That\'s a wrap! What\'s next?', 'elementor')), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__page-content-section-text"
  }, __('There are two ways to get started with Elementor:', 'elementor')), /*#__PURE__*/_react.default.createElement(_grid.default, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: "e-onboarding__cards-grid e-onboarding__page-content"
  }, /*#__PURE__*/_react.default.createElement(_card.default, {
    name: "blank",
    image: elementorCommon.config.urls.assets + 'images/app/onboarding/Blank_Canvas.svg',
    imageAlt: __('Click here to create a new page and open it in Elementor Editor', 'elementor'),
    text: __('Edit a blank canvas with the Elementor Editor', 'elementor'),
    link: elementorAppConfig.onboarding.urls.createNewPage
  }), /*#__PURE__*/_react.default.createElement(_card.default, {
    name: "template",
    image: elementorCommon.config.urls.assets + 'images/app/onboarding/Library.svg',
    imageAlt: __('Click here to go to Elementor\'s Kit Library', 'elementor'),
    text: __('Browse from +100 templates or import your own', 'elementor'),
    link: kitLibraryLink,
    clickAction: function clickAction() {
      // The location is reloaded to make sure the Kit Library's state is re-created.
      location.href = kitLibraryLink;
      location.reload();
    }
  })), /*#__PURE__*/_react.default.createElement(_footerButtons.default, {
    skipButton: skipButton,
    className: "e-onboarding__good-to-go-footer"
  }));
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/pages/hello-theme.js":
/*!*********************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/pages/hello-theme.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = HelloTheme;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _context = __webpack_require__(/*! ../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _useAjax2 = _interopRequireDefault(__webpack_require__(/*! elementor-app/hooks/use-ajax */ "../core/app/assets/js/hooks/use-ajax.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/layout */ "../core/app/modules/onboarding/assets/js/components/layout/layout.js"));

var _pageContentLayout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/page-content-layout */ "../core/app/modules/onboarding/assets/js/components/layout/page-content-layout.js"));

function HelloTheme() {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState,
      getStateObjectToUpdate = _useContext.getStateObjectToUpdate,
      _useAjax = (0, _useAjax2.default)(),
      activateHelloThemeAjaxState = _useAjax.ajaxState,
      setActivateHelloThemeAjaxState = _useAjax.setAjax,
      _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      helloInstalledInOnboarding = _useState2[0],
      setHelloInstalledInOnboarding = _useState2[1],
      _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isInstalling = _useState4[0],
      setIsInstalling = _useState4[1],
      noticeStateSuccess = {
    type: 'success',
    icon: 'eicon-check-circle-o',
    message: __('Your site’s got Hello theme. High-five!', 'elementor')
  },
      _useState5 = (0, _react.useState)(state.isHelloThemeActivated ? noticeStateSuccess : null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      noticeState = _useState6[0],
      setNoticeState = _useState6[1],
      _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      activeTimeouts = _useState8[0],
      setActiveTimeouts = _useState8[1],
      continueWithHelloThemeText = state.isHelloThemeActivated ? __('Next', 'elementor') : __('Continue with Hello Theme', 'elementor'),
      _useState9 = (0, _react.useState)(continueWithHelloThemeText),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      actionButtonText = _useState10[0],
      setActionButtonText = _useState10[1],
      navigate = (0, _router.useNavigate)(),
      pageId = 'hello',
      nextStep = 'siteName',
      goToNextScreen = function goToNextScreen() {
    return navigate('onboarding/' + nextStep);
  };
  /**
   * Setup
   *
   * If Hello Theme is already activated when onboarding starts, This screen is unneeded and is marked as 'completed'
   * and skipped.
   */


  (0, _react.useEffect)(function () {
    if (!helloInstalledInOnboarding && state.isHelloThemeActivated) {
      var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
      updateState(stateToUpdate);
      goToNextScreen();
    }
  }, []);

  var resetScreenContent = function resetScreenContent() {
    // Clear any active timeouts for changing the action button text during installation.
    activeTimeouts.forEach(function (timeoutID) {
      return clearTimeout(timeoutID);
    });
    setActiveTimeouts([]);
    setIsInstalling(false);
    setActionButtonText(continueWithHelloThemeText);
  };
  /**
   * Callbacks
   */


  var onHelloThemeActivationSuccess = (0, _react.useCallback)(function () {
    setIsInstalling(false);
    elementorCommon.events.dispatchEvent({
      event: 'indication prompt',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep,
        action_state: 'success',
        action: 'hello theme activation'
      }
    });
    setNoticeState(noticeStateSuccess);
    setActionButtonText(__('Next', 'elementor'));
    var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
    stateToUpdate.isHelloThemeActivated = true;
    updateState(stateToUpdate);
    setHelloInstalledInOnboarding(true);
    goToNextScreen();
  }, []);

  var onErrorInstallHelloTheme = function onErrorInstallHelloTheme() {
    elementorCommon.events.dispatchEvent({
      event: 'indication prompt',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep,
        action_state: 'failure',
        action: 'hello theme install'
      }
    });
    setNoticeState({
      type: 'error',
      icon: 'eicon-warning',
      message: __('There was a problem installing Hello Theme.', 'elementor')
    });
    resetScreenContent();
  };

  var activateHelloTheme = function activateHelloTheme() {
    setIsInstalling(true);
    updateState({
      isHelloThemeInstalled: true
    });
    setActivateHelloThemeAjaxState({
      data: {
        action: 'elementor_activate_hello_theme'
      }
    });
  };

  var installHelloTheme = function installHelloTheme() {
    if (!isInstalling) {
      setIsInstalling(true);
    }

    wp.updates.ajax('install-theme', {
      slug: 'hello-elementor',
      success: function success() {
        return activateHelloTheme();
      },
      error: function error() {
        return onErrorInstallHelloTheme();
      }
    });
  };

  var sendNextButtonEvent = function sendNextButtonEvent() {
    elementorCommon.events.dispatchEvent({
      event: 'next',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep
      }
    });
  };
  /**
   * Action Button
   */


  var actionButton = {
    text: actionButtonText,
    role: 'button'
  };

  if (isInstalling) {
    actionButton.className = 'e-onboarding__button--processing';
  }

  if (state.isHelloThemeActivated) {
    actionButton.onClick = function () {
      sendNextButtonEvent();
      goToNextScreen();
    };
  } else {
    actionButton.onClick = function () {
      sendNextButtonEvent();

      if (state.isHelloThemeInstalled && !state.isHelloThemeActivated) {
        activateHelloTheme();
      } else if (!state.isHelloThemeInstalled) {
        installHelloTheme();
      } else {
        goToNextScreen();
      }
    };
  }
  /**
   * Skip Button
   */


  var skipButton;

  if ('completed' !== state.steps[pageId]) {
    skipButton = {
      text: __('Skip', 'elementor')
    };
  }
  /**
   * Set timeouts for updating the 'Next' button text if the Hello Theme installation is taking too long.
   */


  (0, _react.useEffect)(function () {
    if (isInstalling) {
      setActionButtonText( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
        className: "eicon-loading eicon-animation-spin",
        "aria-hidden": "true"
      })));
    }

    var actionTextTimeouts = [];
    var timeout4 = setTimeout(function () {
      if (!isInstalling) {
        return;
      }

      setActionButtonText( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
        className: "eicon-loading eicon-animation-spin",
        "aria-hidden": "true"
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "e-onboarding__action-button-text"
      }, __('Hold on, this can take a minute...', 'elementor'))));
    }, 4000);
    actionTextTimeouts.push(timeout4);
    var timeout30 = setTimeout(function () {
      if (!isInstalling) {
        return;
      }

      setActionButtonText( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
        className: "eicon-loading eicon-animation-spin",
        "aria-hidden": "true"
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "e-onboarding__action-button-text"
      }, __('Okay, now we\'re really close...', 'elementor'))));
    }, 30000);
    actionTextTimeouts.push(timeout30);
    setActiveTimeouts(actionTextTimeouts);
  }, [isInstalling]);
  (0, _react.useEffect)(function () {
    if ('initial' !== activateHelloThemeAjaxState.status) {
      var _activateHelloThemeAj;

      if ('success' === activateHelloThemeAjaxState.status && (_activateHelloThemeAj = activateHelloThemeAjaxState.response) !== null && _activateHelloThemeAj !== void 0 && _activateHelloThemeAj.helloThemeActivated) {
        onHelloThemeActivationSuccess();
      } else if ('error' === activateHelloThemeAjaxState.status) {
        elementorCommon.events.dispatchEvent({
          event: 'indication prompt',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            action_state: 'failure',
            action: 'hello theme activation'
          }
        });
        setNoticeState({
          type: 'error',
          icon: 'eicon-warning',
          message: __('There was a problem activating Hello Theme.', 'elementor')
        }); // Clear any active timeouts for changing the action button text during installation.

        resetScreenContent();
      }
    }
  }, [activateHelloThemeAjaxState.status]);
  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    pageId: pageId,
    nextStep: nextStep
  }, /*#__PURE__*/_react.default.createElement(_pageContentLayout.default, {
    image: elementorCommon.config.urls.assets + 'images/app/onboarding/Illustration_Hello.svg',
    title: __('We always start with Hello.', 'elementor'),
    actionButton: actionButton,
    skipButton: skipButton,
    noticeState: noticeState
  }, /*#__PURE__*/_react.default.createElement("span", null, __('Every WordPress site needs a theme. Join over 1M people already using Elementor’s Hello theme and build your website exactly the way you want.', 'elementor')), /*#__PURE__*/_react.default.createElement("ul", {
    className: "e-onboarding__feature-list"
  }, /*#__PURE__*/_react.default.createElement("li", null, __('It’s a flexible, lightweight canvas', 'elementor')), /*#__PURE__*/_react.default.createElement("li", null, __('Super-fast loading time', 'elementor')), /*#__PURE__*/_react.default.createElement("li", null, __('And it’s great for SEO', 'elementor')))));
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/pages/site-logo.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/pages/site-logo.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = SiteLogo;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _context = __webpack_require__(/*! ../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _useAjax3 = _interopRequireDefault(__webpack_require__(/*! elementor-app/hooks/use-ajax */ "../core/app/assets/js/hooks/use-ajax.js"));

var _dropZone = _interopRequireDefault(__webpack_require__(/*! elementor-app/organisms/drop-zone */ "../core/app/assets/js/organisms/drop-zone.js"));

var _unfilteredFilesDialog = _interopRequireDefault(__webpack_require__(/*! elementor-app/organisms/unfiltered-files-dialog */ "../core/app/assets/js/organisms/unfiltered-files-dialog.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/layout */ "../core/app/modules/onboarding/assets/js/components/layout/layout.js"));

var _pageContentLayout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/page-content-layout */ "../core/app/modules/onboarding/assets/js/components/layout/page-content-layout.js"));

function SiteLogo() {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState,
      getStateObjectToUpdate = _useContext.getStateObjectToUpdate,
      _useState = (0, _react.useState)(state.siteLogo.id ? state.siteLogo : null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1],
      _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isUploading = _useState4[0],
      setIsUploading = _useState4[1],
      _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      showUnfilteredFilesDialog = _useState6[0],
      setShowUnfilteredFilesDialog = _useState6[1],
      _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      fileSource = _useState8[0],
      setFileSource = _useState8[1],
      _useState9 = (0, _react.useState)(null),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      noticeState = _useState10[0],
      setNoticeState = _useState10[1],
      _useAjax = (0, _useAjax3.default)(),
      updateLogoAjaxState = _useAjax.ajaxState,
      setUpdateLogoAjax = _useAjax.setAjax,
      _useAjax2 = (0, _useAjax3.default)(),
      uploadImageAjaxState = _useAjax2.ajaxState,
      setUploadImageAjax = _useAjax2.setAjax,
      pageId = 'siteLogo',
      nextStep = 'goodToGo',
      navigate = (0, _router.useNavigate)(),
      actionButton = {
    role: 'button',
    onClick: function onClick() {
      elementorCommon.events.dispatchEvent({
        event: 'next',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          step: state.currentStep
        }
      });

      if (file.id) {
        if (file.id !== state.siteLogo.id) {
          updateSiteLogo();
        } else {
          // If the currently displayed logo is already set as the site logo, just go to the next screen.
          var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
          updateState(stateToUpdate);
          navigate('onboarding/' + nextStep);
        }
      }
    }
  };

  var skipButton;

  if ('completed' !== state.steps[pageId]) {
    skipButton = {
      text: __('Skip', 'elementor')
    };
  }

  if (isUploading) {
    actionButton.text = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
      className: "eicon-loading eicon-animation-spin",
      "aria-hidden": "true"
    }));
  } else {
    actionButton.text = __('Next', 'elementor');
  }

  if (!file) {
    actionButton.className = 'e-onboarding__button--disabled';
  }

  var updateSiteLogo = (0, _react.useCallback)(function () {
    setIsUploading(true);
    setUpdateLogoAjax({
      data: {
        action: 'elementor_update_site_logo',
        data: (0, _stringify.default)({
          attachmentId: file.id
        })
      }
    });
  }, [file]);

  var uploadSiteLogo = function uploadSiteLogo(fileToUpload) {
    setIsUploading(true);
    setUploadImageAjax({
      data: {
        action: 'elementor_upload_site_logo',
        fileToUpload: fileToUpload
      }
    });
  };

  var dismissUnfilteredFilesCallback = function dismissUnfilteredFilesCallback() {
    setIsUploading(false);
    setFile(null);
    setShowUnfilteredFilesDialog(false);
  };

  var _onFileSelect = function onFileSelect(selectedFile) {
    setFileSource('drop');

    if ('image/svg+xml' === selectedFile.type && !elementorAppConfig.onboarding.isUnfilteredFilesEnabled) {
      setFile(selectedFile);
      setIsUploading(true);
      setShowUnfilteredFilesDialog(true);
    } else {
      setFile(selectedFile);
      setNoticeState(null);
      uploadSiteLogo(selectedFile);
    }
  };
  /**
   * Ajax Callbacks
   */
  // Run the callback for the new image upload AJAX request.


  (0, _react.useEffect)(function () {
    if ('initial' !== uploadImageAjaxState.status) {
      var _uploadImageAjaxState, _uploadImageAjaxState2;

      if ('success' === uploadImageAjaxState.status && (_uploadImageAjaxState = uploadImageAjaxState.response) !== null && _uploadImageAjaxState !== void 0 && (_uploadImageAjaxState2 = _uploadImageAjaxState.imageAttachment) !== null && _uploadImageAjaxState2 !== void 0 && _uploadImageAjaxState2.id) {
        elementorCommon.events.dispatchEvent({
          event: 'logo image uploaded',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            source: fileSource
          }
        });
        setIsUploading(false);
        setFile(uploadImageAjaxState.response.imageAttachment);

        if (noticeState) {
          setNoticeState(null);
        }
      } else if ('error' === uploadImageAjaxState.status) {
        setIsUploading(false);
        setFile(null);
        elementorCommon.events.dispatchEvent({
          event: 'indication prompt',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            action_state: 'failure',
            action: 'logo image upload'
          }
        });
        setNoticeState({
          type: 'error',
          icon: 'eicon-warning',
          message: 'That didn\'t work. Try uploading your file again.'
        });
      }
    }
  }, [uploadImageAjaxState.status]); // Run the callback for the site logo update AJAX request.

  (0, _react.useEffect)(function () {
    if ('initial' !== updateLogoAjaxState.status) {
      var _updateLogoAjaxState$;

      if ('success' === updateLogoAjaxState.status && (_updateLogoAjaxState$ = updateLogoAjaxState.response) !== null && _updateLogoAjaxState$ !== void 0 && _updateLogoAjaxState$.siteLogoUpdated) {
        elementorCommon.events.dispatchEvent({
          event: 'logo image updated',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement
          }
        });
        setIsUploading(false);

        if (noticeState) {
          setNoticeState(null);
        }

        var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
        stateToUpdate.siteLogo = {
          id: file.id,
          url: file.url
        };
        updateState(stateToUpdate);
        navigate('onboarding/' + nextStep);
      } else if ('error' === updateLogoAjaxState.status) {
        setIsUploading(false);
        elementorCommon.events.dispatchEvent({
          event: 'indication prompt',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            action_state: 'failure',
            action: 'update site logo'
          }
        });
        setNoticeState({
          type: 'error',
          icon: 'eicon-warning',
          message: 'That didn\'t work. Try uploading your file again.'
        });
      }
    }
  }, [updateLogoAjaxState.status]);
  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    pageId: pageId,
    nextStep: nextStep
  }, /*#__PURE__*/_react.default.createElement(_pageContentLayout.default, {
    image: elementorCommon.config.urls.assets + 'images/app/onboarding/Illustration_Setup.svg',
    title: __('Have a logo? Add it here.', 'elementor'),
    actionButton: actionButton,
    skipButton: skipButton,
    noticeState: noticeState
  }, /*#__PURE__*/_react.default.createElement("span", null, __('Otherwise, you can skip this and add one later.', 'elementor')), file && !showUnfilteredFilesDialog ? /*#__PURE__*/_react.default.createElement("div", {
    className: 'e-onboarding__logo-container' + (isUploading ? ' e-onboarding__is-uploading' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__logo-remove",
    onClick: function onClick() {
      return setFile(null);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "eicon-trash-o"
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: file.url,
    alt: __('Potential Site Logo', 'elementor')
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_dropZone.default, {
    className: "e-onboarding__drop-zone",
    heading: __('Drop image here', 'elementor'),
    secondaryText: __('or', 'elementor'),
    buttonText: __('Open Media Library', 'elementor'),
    buttonVariant: "outlined",
    buttonColor: "cta",
    icon: '',
    type: "wp-media",
    filetypes: ['jpg', 'jpeg', 'png', 'svg'],
    onFileSelect: function onFileSelect(selectedFile) {
      return _onFileSelect(selectedFile);
    },
    onWpMediaSelect: function onWpMediaSelect(frame) {
      // Get media attachment details from the frame state
      var attachment = frame.state().get('selection').first().toJSON();
      setFileSource('browse');
      setFile(attachment);
      setNoticeState(null);
    },
    onButtonClick: function onButtonClick() {
      elementorCommon.events.dispatchEvent({
        event: 'browse file click',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement
        }
      });
    } // TODO: DEAL WITH ERROR
    ,
    onError: function onError(error) {
      if ('file_not_allowed' === error.id) {
        elementorCommon.events.dispatchEvent({
          event: 'indication prompt',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            action_state: 'failure',
            action: 'logo upload format'
          }
        });
        setNoticeState({
          type: 'error',
          icon: 'eicon-warning',
          message: __('This file type is not supported. Try a different type of file', 'elementor')
        });
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_unfilteredFilesDialog.default, {
    show: showUnfilteredFilesDialog,
    setShow: setShowUnfilteredFilesDialog,
    confirmModalText: __('This allows Elementor to scan your SVGs for malicious content. If you do not wish to allow this, use a different image format.', 'elementor'),
    errorModalText: __('There was a problem with enabling SVG uploads. Try again, or use another image format.', 'elementor'),
    onReady: function onReady() {
      setShowUnfilteredFilesDialog(false);
      elementorAppConfig.onboarding.isUnfilteredFilesEnabled = true;
      uploadSiteLogo(file);
    },
    onDismiss: function onDismiss() {
      return dismissUnfilteredFilesCallback();
    },
    onCancel: function onCancel() {
      return dismissUnfilteredFilesCallback();
    }
  })));
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/pages/site-name.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/pages/site-name.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = SiteName;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _context = __webpack_require__(/*! ../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _useAjax2 = _interopRequireDefault(__webpack_require__(/*! elementor-app/hooks/use-ajax */ "../core/app/assets/js/hooks/use-ajax.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/layout */ "../core/app/modules/onboarding/assets/js/components/layout/layout.js"));

var _pageContentLayout = _interopRequireDefault(__webpack_require__(/*! ../components/layout/page-content-layout */ "../core/app/modules/onboarding/assets/js/components/layout/page-content-layout.js"));

function SiteName() {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState,
      getStateObjectToUpdate = _useContext.getStateObjectToUpdate,
      _useAjax = (0, _useAjax2.default)(),
      ajaxState = _useAjax.ajaxState,
      setAjax = _useAjax.setAjax,
      _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      noticeState = _useState2[0],
      setNoticeState = _useState2[1],
      _useState3 = (0, _react.useState)(state.siteName),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      siteNameInputValue = _useState4[0],
      setSiteNameInputValue = _useState4[1],
      pageId = 'siteName',
      nextStep = 'siteLogo',
      navigate = (0, _router.useNavigate)(),
      nameInputRef = (0, _react.useRef)(),
      actionButton = {
    text: __('Next', 'elementor'),
    onClick: function onClick() {
      elementorCommon.events.dispatchEvent({
        event: 'next',
        version: '',
        details: {
          placement: elementorAppConfig.onboarding.eventPlacement,
          step: state.currentStep
        }
      }); // Only run the site name update AJAX if the new name is different than the existing one and it isn't empty.

      // Only run the site name update AJAX if the new name is different than the existing one and it isn't empty.
      if (nameInputRef.current.value !== state.siteName && '' !== nameInputRef.current.value) {
        setAjax({
          data: {
            action: 'elementor_update_site_name',
            data: (0, _stringify.default)({
              siteName: nameInputRef.current.value
            })
          }
        });
      } else if (nameInputRef.current.value === state.siteName) {
        var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
        updateState(stateToUpdate);
        navigate('onboarding/' + nextStep);
      } else {
        var _stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'skipped');

        updateState(_stateToUpdate);
        navigate('onboarding/' + nextStep);
      }
    }
  };

  var skipButton;

  if ('completed' !== state.steps[pageId]) {
    skipButton = {
      text: __('Skip', 'elementor')
    };
  }

  if (!siteNameInputValue) {
    actionButton.className = 'e-onboarding__button--disabled';
  } // Run the callback for the site name update AJAX request.


  (0, _react.useEffect)(function () {
    if ('initial' !== ajaxState.status) {
      var _ajaxState$response;

      if ('success' === ajaxState.status && (_ajaxState$response = ajaxState.response) !== null && _ajaxState$response !== void 0 && _ajaxState$response.siteNameUpdated) {
        var stateToUpdate = getStateObjectToUpdate(state, 'steps', pageId, 'completed');
        stateToUpdate.siteName = nameInputRef.current.value;
        updateState(stateToUpdate);
        navigate('onboarding/' + nextStep);
      } else if ('error' === ajaxState.status) {
        elementorCommon.events.dispatchEvent({
          event: 'indication prompt',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            action_state: 'failure',
            action: 'site name update'
          }
        });
        setNoticeState({
          type: 'error',
          icon: 'eicon-warning',
          message: __('Sorry, the name wasn\'t saved. Try again, or skip for now.', 'elementor')
        });
      }
    }
  }, [ajaxState.status]);
  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    pageId: pageId,
    nextStep: nextStep
  }, /*#__PURE__*/_react.default.createElement(_pageContentLayout.default, {
    image: elementorCommon.config.urls.assets + 'images/app/onboarding/Illustration_Setup.svg',
    title: __('Now, let\'s give your site a name.', 'elementor'),
    actionButton: actionButton,
    skipButton: skipButton,
    noticeState: noticeState
  }, /*#__PURE__*/_react.default.createElement("p", null, __('This is what your site is called on the WP dashboard, and can be changed later from the general settings - it\'s not your website\'s URL.', 'elementor')), /*#__PURE__*/_react.default.createElement("input", {
    className: "e-onboarding__text-input e-onboarding__site-name-input",
    type: "text",
    placeholder: "e.g. Eric's Space Shuttles",
    defaultValue: state.siteName || '',
    ref: nameInputRef,
    onChange: function onChange(event) {
      return setSiteNameInputValue(event.target.value);
    }
  })));
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/pages/upload-and-install-pro.js":
/*!********************************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/pages/upload-and-install-pro.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = UploadAndInstallPro;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _useAjax2 = _interopRequireDefault(__webpack_require__(/*! elementor-app/hooks/use-ajax */ "../core/app/assets/js/hooks/use-ajax.js"));

var _usePageTitle = _interopRequireDefault(__webpack_require__(/*! elementor-app/hooks/use-page-title */ "../core/app/assets/js/hooks/use-page-title.js"));

var _content = _interopRequireDefault(__webpack_require__(/*! ../../../../../assets/js/layout/content */ "../core/app/assets/js/layout/content.js"));

var _dropZone = _interopRequireDefault(__webpack_require__(/*! ../../../../../assets/js/organisms/drop-zone */ "../core/app/assets/js/organisms/drop-zone.js"));

var _notice = _interopRequireDefault(__webpack_require__(/*! ../components/notice */ "../core/app/modules/onboarding/assets/js/components/notice.js"));

function UploadAndInstallPro() {
  (0, _usePageTitle.default)({
    title: __('Upload and Install Elementor Pro', 'elementor')
  });

  var _useAjax = (0, _useAjax2.default)(),
      installProZipAjaxState = _useAjax.ajaxState,
      setInstallProZipAjaxState = _useAjax.setAjax,
      _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      noticeState = _useState2[0],
      setNoticeState = _useState2[1],
      _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      fileSource = _useState4[0],
      setFileSource = _useState4[1];

  var uploadProZip = (0, _react.useCallback)(function (file) {
    setInstallProZipAjaxState({
      data: {
        action: 'elementor_upload_and_install_pro',
        fileToUpload: file
      }
    });
  }, []);

  var setErrorNotice = function setErrorNotice() {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'That didn\'t work. Try uploading your file again.';
    elementorCommon.events.dispatchEvent({
      event: 'indication prompt',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep,
        action_state: 'failure',
        action: 'install pro'
      }
    });
    setNoticeState({
      type: 'error',
      icon: 'eicon-warning',
      message: errorMessage
    });
  };
  /**
   * Ajax Callbacks
   */
  // Run the callback that runs when the Pro Upload Ajax returns a response.


  (0, _react.useEffect)(function () {
    if ('initial' !== installProZipAjaxState.status) {
      var _installProZipAjaxSta;

      if ('success' === installProZipAjaxState.status && (_installProZipAjaxSta = installProZipAjaxState.response) !== null && _installProZipAjaxSta !== void 0 && _installProZipAjaxSta.elementorProInstalled) {
        elementorCommon.events.dispatchEvent({
          event: 'pro uploaded',
          version: '',
          details: {
            placement: elementorAppConfig.onboarding.eventPlacement,
            step: state.currentStep,
            source: fileSource
          }
        });

        if (opener && opener !== window) {
          opener.jQuery('body').trigger('elementor/upload-and-install-pro/success/');
          window.close();
          opener.focus();
        }
      } else if ('error' === installProZipAjaxState.status) {
        setErrorNotice();
      }
    }
  }, [installProZipAjaxState.status]);

  var onProUploadHelpLinkClick = function onProUploadHelpLinkClick() {
    elementorCommon.events.dispatchEvent({
      event: 'pro plugin upload help',
      version: '',
      details: {
        placement: elementorAppConfig.onboarding.eventPlacement,
        step: state.currentStep
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app e-onboarding__upload-pro"
  }, /*#__PURE__*/_react.default.createElement(_content.default, null, /*#__PURE__*/_react.default.createElement(_dropZone.default, {
    className: "e-onboarding__upload-pro-drop-zone",
    onFileSelect: function onFileSelect(file, event, source) {
      setFileSource(source);
      uploadProZip(file);
    },
    onError: function onError(error) {
      return setErrorNotice(error);
    },
    filetypes: ['zip'],
    buttonColor: "cta",
    buttonVariant: "contained",
    heading: __('Import you Elementor Pro plugin file', 'elementor'),
    text: __('Drag & Drop your .zip file here', 'elementor'),
    secondaryText: __('or', 'elementor'),
    buttonText: __('Browse', 'elementor')
  }), noticeState && /*#__PURE__*/_react.default.createElement(_notice.default, {
    noticeState: noticeState
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-onboarding__upload-pro-get-file"
  }, __('Don\'t know where to get the file from?', 'elementor') + ' ', /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return onProUploadHelpLinkClick();
    },
    href: 'https://my.elementor.com/subscriptions/' + elementorAppConfig.onboarding.utms.downloadPro,
    target: "_blank"
  }, __('Click here', 'elementor')))));
}

/***/ }),

/***/ "../core/app/modules/onboarding/assets/js/utils/connect.js":
/*!*****************************************************************!*\
  !*** ../core/app/modules/onboarding/assets/js/utils/connect.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Connect;

var _react = __webpack_require__(/*! react */ "react");

var _context = __webpack_require__(/*! ../context/context */ "../core/app/modules/onboarding/assets/js/context/context.js");

function Connect(props) {
  var _useContext = (0, _react.useContext)(_context.OnboardingContext),
      state = _useContext.state,
      updateState = _useContext.updateState,
      getStateObjectToUpdate = _useContext.getStateObjectToUpdate;

  var connectSuccessCallback = function connectSuccessCallback(data) {
    var stateToUpdate = getStateObjectToUpdate(state, 'steps', 'account', 'completed');
    elementorCommon.config.library_connect.is_connected = true;
    elementorCommon.config.library_connect.current_access_level = data.kits_access_level || data.access_level || 0;
    stateToUpdate.isLibraryConnected = true;
    updateState(stateToUpdate);
  };

  (0, _react.useEffect)(function () {
    jQuery(props.buttonRef.current).elementorConnect({
      success: function success(data) {
        return props.successCallback ? props.successCallback(data) : connectSuccessCallback(data);
      },
      error: function error() {
        if (props.errorCallback) {
          props.errorCallback();
        }
      },
      popup: {
        width: 726,
        height: 534
      }
    });
  }, []);
  return null;
}

Connect.propTypes = {
  buttonRef: PropTypes.object.isRequired,
  successCallback: PropTypes.func,
  errorCallback: PropTypes.func
};

/***/ })

}]);
//# sourceMappingURL=onboarding.eff243c8052ee52943bc.bundle.js.map
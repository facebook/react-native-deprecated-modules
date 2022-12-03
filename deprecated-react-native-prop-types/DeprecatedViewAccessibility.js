/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const PropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/Components/View/ViewAccessibility.js
 */
const DeprecatedViewAccessibility = {
  AccessibilityRolePropType: PropTypes.oneOf([
    'adjustable',
    'alert',
    'button',
    'checkbox',
    'combobox',
    'drawerlayout',
    'dropdownlist',
    'grid',
    'header',
    'horizontalscrollview',
    'iconmenu',
    'image',
    'imagebutton',
    'keyboardkey',
    'link',
    'list',
    'menu',
    'menubar',
    'menuitem',
    'none',
    'pager',
    'progressbar',
    'radio',
    'radiogroup',
    'scrollbar',
    'scrollview',
    'search',
    'slidingdrawer',
    'spinbutton',
    'summary',
    'switch',
    'tab',
    'tabbar',
    'tablist',
    'text',
    'timer',
    'togglebutton',
    'toolbar',
    'viewgroup',
    'webview',
  ]),
  AccessibilityStatePropType: PropTypes.object,
  AccessibilityActionInfoPropType: PropTypes.object,
  AccessibilityValuePropType: PropTypes.object,
};

module.exports = DeprecatedViewAccessibility;

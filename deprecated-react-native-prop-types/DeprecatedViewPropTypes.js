/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const DeprecatedEdgeInsetsPropType = require('./DeprecatedEdgeInsetsPropType');
const DeprecatedStyleSheetPropType = require('./DeprecatedStyleSheetPropType');
const {
  AccessibilityActionInfoPropType,
  AccessibilityRolePropType,
  AccessibilityStatePropType,
  AccessibilityValuePropType,
  RolePropType,
} = require('./DeprecatedViewAccessibility');
const DeprecatedViewStylePropTypes = require('./DeprecatedViewStylePropTypes');
const PropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/Components/View/ViewPropTypes.js
 */
const DeprecatedViewPropTypes = {
  'aria-busy': PropTypes.bool,
  'aria-checked': PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['mixed']),
  ]),
  'aria-disabled': PropTypes.bool,
  'aria-expanded': PropTypes.bool,
  'aria-hidden': PropTypes.bool,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-live': 'polite' | 'assertive' | 'off',
  'aria-modal': PropTypes.bool,
  'aria-selected': PropTypes.bool,
  'aria-valuemax': PropTypes.number,
  'aria-valuemin': PropTypes.number,
  'aria-valuenow': PropTypes.number,
  'aria-valuetext': PropTypes.string,
  accessibilityActions: PropTypes.arrayOf(AccessibilityActionInfoPropType),
  accessibilityElementsHidden: PropTypes.bool,
  accessibilityHint: PropTypes.string,
  accessibilityIgnoresInvertColors: PropTypes.bool,
  accessibilityLabel: PropTypes.node,
  accessibilityLabelledBy: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  accessibilityLanguage: PropTypes.string,
  accessibilityLiveRegion: PropTypes.oneOf(['assertive', 'none', 'polite']),
  accessibilityRole: AccessibilityRolePropType,
  accessibilityState: AccessibilityStatePropType,
  accessibilityValue: AccessibilityValuePropType,
  accessibilityViewIsModal: PropTypes.bool,
  accessible: PropTypes.bool,
  collapsable: PropTypes.bool,
  hitSlop: PropTypes.oneOfType([
    DeprecatedEdgeInsetsPropType,
    PropTypes.number,
  ]),
  importantForAccessibility: PropTypes.oneOf([
    'auto',
    'no',
    'no-hide-descendants',
    'yes',
  ]),
  nativeID: PropTypes.string,
  needsOffscreenAlphaCompositing: PropTypes.bool,
  onAccessibilityAction: PropTypes.func,
  onAccessibilityTap: PropTypes.func,
  onLayout: PropTypes.func,
  onMagicTap: PropTypes.func,
  onMoveShouldSetResponder: PropTypes.func,
  onMoveShouldSetResponderCapture: PropTypes.func,
  onResponderGrant: PropTypes.func,
  onResponderMove: PropTypes.func,
  onResponderReject: PropTypes.func,
  onResponderRelease: PropTypes.func,
  onResponderTerminate: PropTypes.func,
  onResponderTerminationRequest: PropTypes.func,
  onStartShouldSetResponder: PropTypes.func,
  onStartShouldSetResponderCapture: PropTypes.func,
  pointerEvents: PropTypes.oneOf(['auto', 'box-none', 'box-only', 'none']),
  removeClippedSubviews: PropTypes.bool,
  renderToHardwareTextureAndroid: PropTypes.bool,
  role: RolePropType,
  shouldRasterizeIOS: PropTypes.bool,
  style: DeprecatedStyleSheetPropType(DeprecatedViewStylePropTypes),
  tabIndex: PropTypes.oneOf([0, -1]),
  testID: PropTypes.string,
};

module.exports = DeprecatedViewPropTypes;

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
const DeprecatedViewStylePropTypes = require('./DeprecatedViewStylePropTypes');
const PropTypes = require('prop-types');

const {DeprecatedAccessibilityRoles} = require('./DeprecatedViewAccessibility');

const stylePropType = DeprecatedStyleSheetPropType(
  DeprecatedViewStylePropTypes,
);

/**
 * @see facebook/react-native/Libraries/Components/View/ViewPropTypes.js
 */
module.exports = {
  accessibilityActions: PropTypes.arrayOf(PropTypes.string),
  accessibilityElementsHidden: PropTypes.bool,
  accessibilityHint: PropTypes.string,
  accessibilityIgnoresInvertColors: PropTypes.bool,
  accessibilityLabel: PropTypes.node,
  accessibilityLiveRegion: PropTypes.oneOf(['assertive', 'none', 'polite']),
  accessibilityRole: PropTypes.oneOf(DeprecatedAccessibilityRoles),
  accessibilityState: PropTypes.object,
  accessibilityValue: PropTypes.object,
  accessibilityViewIsModal: PropTypes.bool,
  accessible: PropTypes.bool,
  collapsable: PropTypes.bool,
  hitSlop: DeprecatedEdgeInsetsPropType,
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
  shouldRasterizeIOS: PropTypes.bool,
  style: stylePropType,
  testID: PropTypes.string,
};

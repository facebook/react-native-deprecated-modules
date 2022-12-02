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
  accessible: PropTypes.bool,
  accessibilityLabel: PropTypes.node,
  accessibilityHint: PropTypes.string,
  accessibilityActions: PropTypes.arrayOf(PropTypes.string),
  accessibilityIgnoresInvertColors: PropTypes.bool,
  accessibilityRole: PropTypes.oneOf(DeprecatedAccessibilityRoles),
  accessibilityState: PropTypes.object,
  accessibilityValue: PropTypes.object,
  accessibilityLiveRegion: PropTypes.oneOf(['none', 'polite', 'assertive']),
  importantForAccessibility: PropTypes.oneOf([
    'auto',
    'yes',
    'no',
    'no-hide-descendants',
  ]),
  accessibilityViewIsModal: PropTypes.bool,
  accessibilityElementsHidden: PropTypes.bool,
  onAccessibilityAction: PropTypes.func,
  onAccessibilityTap: PropTypes.func,
  onMagicTap: PropTypes.func,
  testID: PropTypes.string,
  nativeID: PropTypes.string,
  onResponderGrant: PropTypes.func,
  onResponderMove: PropTypes.func,
  onResponderReject: PropTypes.func,
  onResponderRelease: PropTypes.func,
  onResponderTerminate: PropTypes.func,
  onResponderTerminationRequest: PropTypes.func,
  onStartShouldSetResponder: PropTypes.func,
  onStartShouldSetResponderCapture: PropTypes.func,
  onMoveShouldSetResponder: PropTypes.func,
  onMoveShouldSetResponderCapture: PropTypes.func,
  hitSlop: DeprecatedEdgeInsetsPropType,
  onLayout: PropTypes.func,
  pointerEvents: PropTypes.oneOf(['box-none', 'none', 'box-only', 'auto']),
  style: stylePropType,
  removeClippedSubviews: PropTypes.bool,
  renderToHardwareTextureAndroid: PropTypes.bool,
  shouldRasterizeIOS: PropTypes.bool,
  collapsable: PropTypes.bool,
  needsOffscreenAlphaCompositing: PropTypes.bool,
};

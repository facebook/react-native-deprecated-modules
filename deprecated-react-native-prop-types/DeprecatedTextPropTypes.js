/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const DeprecatedColorPropType = require('./DeprecatedColorPropType');
const DeprecatedEdgeInsetsPropType = require('./DeprecatedEdgeInsetsPropType');
const DeprecatedStyleSheetPropType = require('./DeprecatedStyleSheetPropType');
const PropTypes = require('prop-types');
const DeprecatedTextStylePropTypes = require('./DeprecatedTextStylePropTypes');

const stylePropType = DeprecatedStyleSheetPropType(
  DeprecatedTextStylePropTypes,
);

const DataDetectorTypes = ['all', 'email', 'link', 'none', 'phoneNumber'];

/**
 * @see facebook/react-native/Libraries/Text/TextProps.js
 */
module.exports = {
  accessible: PropTypes.bool,
  adjustsFontSizeToFit: PropTypes.bool,
  allowFontScaling: PropTypes.bool,
  dataDetectorType: PropTypes.oneOf(DataDetectorTypes),
  disabled: PropTypes.bool,
  ellipsizeMode: PropTypes.oneOf(['clip', 'head', 'middle', 'tail']),
  maxFontSizeMultiplier: PropTypes.number,
  minimumFontScale: PropTypes.number,
  nativeID: PropTypes.string,
  numberOfLines: PropTypes.number,
  onLayout: PropTypes.func,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  pressRetentionOffset: DeprecatedEdgeInsetsPropType,
  selectable: PropTypes.bool,
  selectionColor: DeprecatedColorPropType,
  style: stylePropType,
  suppressHighlighting: PropTypes.bool,
  testID: PropTypes.string,
  textBreakStrategy: PropTypes.oneOf(['balanced', 'highQuality', 'simple']),
};

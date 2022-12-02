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
const DeprecatedLayoutPropTypes = require('./DeprecatedLayoutPropTypes');
const DeprecatedShadowPropTypesIOS = require('./DeprecatedShadowPropTypesIOS');
const DeprecatedTransformPropTypes = require('./DeprecatedTransformPropTypes');
const ReactPropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/StyleSheet/StyleSheetTypes.js
 */
const ImageStylePropTypes = {
  ...DeprecatedLayoutPropTypes,
  ...DeprecatedShadowPropTypesIOS,
  ...DeprecatedTransformPropTypes,
  resizeMode: ReactPropTypes.oneOf([
    'center',
    'contain',
    'cover',
    'repeat',
    'stretch',
  ]),
  backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
  backgroundColor: DeprecatedColorPropType,
  borderColor: DeprecatedColorPropType,
  borderWidth: ReactPropTypes.number,
  borderRadius: ReactPropTypes.number,
  overflow: ReactPropTypes.oneOf(['visible', 'hidden']),
  tintColor: DeprecatedColorPropType,
  opacity: ReactPropTypes.number,
  overlayColor: ReactPropTypes.string,
  borderTopLeftRadius: ReactPropTypes.number,
  borderTopRightRadius: ReactPropTypes.number,
  borderBottomLeftRadius: ReactPropTypes.number,
  borderBottomRightRadius: ReactPropTypes.number,
};

module.exports = ImageStylePropTypes;

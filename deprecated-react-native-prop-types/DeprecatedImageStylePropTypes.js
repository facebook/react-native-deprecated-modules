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
  backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
  backgroundColor: DeprecatedColorPropType,
  borderBottomLeftRadius: ReactPropTypes.number,
  borderBottomRightRadius: ReactPropTypes.number,
  borderColor: DeprecatedColorPropType,
  borderRadius: ReactPropTypes.number,
  borderTopLeftRadius: ReactPropTypes.number,
  borderTopRightRadius: ReactPropTypes.number,
  borderWidth: ReactPropTypes.number,
  opacity: ReactPropTypes.number,
  overflow: ReactPropTypes.oneOf(['visible', 'hidden']),
  overlayColor: ReactPropTypes.string,
  tintColor: DeprecatedColorPropType,
  resizeMode: ReactPropTypes.oneOf([
    'center',
    'contain',
    'cover',
    'repeat',
    'stretch',
  ]),
};

module.exports = ImageStylePropTypes;

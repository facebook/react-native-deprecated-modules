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
const DeprecatedViewStylePropTypes = {
  ...DeprecatedLayoutPropTypes,
  ...DeprecatedShadowPropTypesIOS,
  ...DeprecatedTransformPropTypes,
  backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
  backgroundColor: DeprecatedColorPropType,
  borderColor: DeprecatedColorPropType,
  borderTopColor: DeprecatedColorPropType,
  borderRightColor: DeprecatedColorPropType,
  borderBottomColor: DeprecatedColorPropType,
  borderLeftColor: DeprecatedColorPropType,
  borderStartColor: DeprecatedColorPropType,
  borderEndColor: DeprecatedColorPropType,
  borderRadius: ReactPropTypes.number,
  borderTopLeftRadius: ReactPropTypes.number,
  borderTopRightRadius: ReactPropTypes.number,
  borderTopStartRadius: ReactPropTypes.number,
  borderTopEndRadius: ReactPropTypes.number,
  borderBottomLeftRadius: ReactPropTypes.number,
  borderBottomRightRadius: ReactPropTypes.number,
  borderBottomStartRadius: ReactPropTypes.number,
  borderBottomEndRadius: ReactPropTypes.number,
  borderStyle: ReactPropTypes.oneOf(['solid', 'dotted', 'dashed']),
  borderWidth: ReactPropTypes.number,
  borderTopWidth: ReactPropTypes.number,
  borderRightWidth: ReactPropTypes.number,
  borderBottomWidth: ReactPropTypes.number,
  borderLeftWidth: ReactPropTypes.number,
  opacity: ReactPropTypes.number,
  elevation: ReactPropTypes.number,
};

module.exports = DeprecatedViewStylePropTypes;

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
  backfaceVisibility: ReactPropTypes.oneOf(['hidden', 'visible']),
  backgroundColor: DeprecatedColorPropType,
  borderBottomColor: DeprecatedColorPropType,
  borderBottomEndRadius: ReactPropTypes.number,
  borderBottomLeftRadius: ReactPropTypes.number,
  borderBottomRightRadius: ReactPropTypes.number,
  borderBottomStartRadius: ReactPropTypes.number,
  borderBottomWidth: ReactPropTypes.number,
  borderColor: DeprecatedColorPropType,
  borderEndColor: DeprecatedColorPropType,
  borderLeftColor: DeprecatedColorPropType,
  borderLeftWidth: ReactPropTypes.number,
  borderRadius: ReactPropTypes.number,
  borderRightColor: DeprecatedColorPropType,
  borderRightWidth: ReactPropTypes.number,
  borderStartColor: DeprecatedColorPropType,
  borderStyle: ReactPropTypes.oneOf(['dashed', 'dotted', 'solid']),
  borderTopColor: DeprecatedColorPropType,
  borderTopEndRadius: ReactPropTypes.number,
  borderTopLeftRadius: ReactPropTypes.number,
  borderTopRightRadius: ReactPropTypes.number,
  borderTopStartRadius: ReactPropTypes.number,
  borderTopWidth: ReactPropTypes.number,
  borderWidth: ReactPropTypes.number,
  elevation: ReactPropTypes.number,
  opacity: ReactPropTypes.number,
};

module.exports = DeprecatedViewStylePropTypes;

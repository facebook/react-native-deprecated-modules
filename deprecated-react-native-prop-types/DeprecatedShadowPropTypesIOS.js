/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

/**
 * @see facebook/react-native/Libraries/StyleSheet/StyleSheetTypes.js
 */
const DeprecatedColorPropType = require('./DeprecatedColorPropType');
const ReactPropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/StyleSheet/StyleSheetTypes.js
 */
const DeprecatedShadowPropTypesIOS = {
  shadowColor: DeprecatedColorPropType,
  shadowOffset: ReactPropTypes.shape({
    height: ReactPropTypes.number,
    width: ReactPropTypes.number,
  }),
  shadowOpacity: ReactPropTypes.number,
  shadowRadius: ReactPropTypes.number,
};

module.exports = DeprecatedShadowPropTypesIOS;

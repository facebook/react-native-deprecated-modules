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
const DeprecatedViewStylePropTypes = require('./DeprecatedViewStylePropTypes');
const ReactPropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/StyleSheet/StyleSheetTypes.js
 */
const DeprecatedTextStylePropTypes = {
  ...DeprecatedViewStylePropTypes,
  color: DeprecatedColorPropType,
  fontFamily: ReactPropTypes.string,
  fontSize: ReactPropTypes.number,
  fontStyle: ReactPropTypes.oneOf(['italic', 'normal']),
  fontVariant: ReactPropTypes.arrayOf(
    ReactPropTypes.oneOf([
      'lining-nums',
      'oldstyle-nums',
      'proportional-nums',
      'small-caps',
      'tabular-nums',
    ]),
  ),
  fontWeight: ReactPropTypes.oneOf([
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'bold',
    'normal' /*default*/,
  ]),
  includeFontPadding: ReactPropTypes.bool,
  letterSpacing: ReactPropTypes.number,
  lineHeight: ReactPropTypes.number,
  textAlign: ReactPropTypes.oneOf([
    'auto' /*default*/,
    'center',
    'justify',
    'left',
    'right',
  ]),
  textAlignVertical: ReactPropTypes.oneOf([
    'auto' /*default*/,
    'bottom',
    'center',
    'top',
  ]),
  textDecorationColor: DeprecatedColorPropType,
  textDecorationLine: ReactPropTypes.oneOf([
    'line-through',
    'none' /*default*/,
    'underline line-through',
    'underline',
  ]),
  textDecorationStyle: ReactPropTypes.oneOf([
    'dashed',
    'dotted',
    'double',
    'solid' /*default*/,
  ]),
  textShadowColor: DeprecatedColorPropType,
  textShadowOffset: ReactPropTypes.shape({
    height: ReactPropTypes.number,
    width: ReactPropTypes.number,
  }),
  textShadowRadius: ReactPropTypes.number,
  textTransform: ReactPropTypes.oneOf([
    'capitalize',
    'lowercase',
    'none' /*default*/,
    'uppercase',
  ]),
  writingDirection: ReactPropTypes.oneOf(['auto' /*default*/, 'ltr', 'rtl']),
};

module.exports = DeprecatedTextStylePropTypes;

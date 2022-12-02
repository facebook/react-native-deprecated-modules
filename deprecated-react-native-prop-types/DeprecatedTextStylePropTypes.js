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
  fontStyle: ReactPropTypes.oneOf(['normal', 'italic']),
  fontWeight: ReactPropTypes.oneOf([
    'normal' /*default*/,
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]),
  fontVariant: ReactPropTypes.arrayOf(
    ReactPropTypes.oneOf([
      'small-caps',
      'oldstyle-nums',
      'lining-nums',
      'tabular-nums',
      'proportional-nums',
    ]),
  ),
  textShadowOffset: ReactPropTypes.shape({
    width: ReactPropTypes.number,
    height: ReactPropTypes.number,
  }),
  textShadowRadius: ReactPropTypes.number,
  textShadowColor: DeprecatedColorPropType,
  letterSpacing: ReactPropTypes.number,
  lineHeight: ReactPropTypes.number,
  textAlign: ReactPropTypes.oneOf([
    'auto' /*default*/,
    'left',
    'right',
    'center',
    'justify',
  ]),
  textAlignVertical: ReactPropTypes.oneOf([
    'auto' /*default*/,
    'top',
    'bottom',
    'center',
  ]),
  includeFontPadding: ReactPropTypes.bool,
  textDecorationLine: ReactPropTypes.oneOf([
    'none' /*default*/,
    'underline',
    'line-through',
    'underline line-through',
  ]),
  textDecorationStyle: ReactPropTypes.oneOf([
    'solid' /*default*/,
    'double',
    'dotted',
    'dashed',
  ]),
  textDecorationColor: DeprecatedColorPropType,
  textTransform: ReactPropTypes.oneOf([
    'none' /*default*/,
    'capitalize',
    'uppercase',
    'lowercase',
  ]),
  writingDirection: ReactPropTypes.oneOf(['auto' /*default*/, 'ltr', 'rtl']),
};

module.exports = DeprecatedTextStylePropTypes;

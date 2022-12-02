/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const PropTypes = require('prop-types');

const DimensionValuePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

/**
 * @see facebook/react-native/Libraries/StyleSheet/StyleSheetTypes.js
 */
const DeprecatedLayoutPropTypes = {
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch',
  ]),
  alignSelf: PropTypes.oneOf([
    'auto',
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch',
  ]),
  aspectRatio: PropTypes.number,
  borderBottomWidth: PropTypes.number,
  borderEndWidth: PropTypes.number,
  borderLeftWidth: PropTypes.number,
  borderRightWidth: PropTypes.number,
  borderStartWidth: PropTypes.number,
  borderTopWidth: PropTypes.number,
  borderWidth: PropTypes.number,
  bottom: DimensionValuePropType,
  direction: PropTypes.oneOf(['inherit', 'ltr', 'rtl']),
  display: PropTypes.oneOf(['flex', 'none']),
  end: DimensionValuePropType,
  flex: PropTypes.number,
  flexBasis: DimensionValuePropType,
  flexDirection: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  height: DimensionValuePropType,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  left: DimensionValuePropType,
  margin: DimensionValuePropType,
  marginBottom: DimensionValuePropType,
  marginEnd: DimensionValuePropType,
  marginHorizontal: DimensionValuePropType,
  marginLeft: DimensionValuePropType,
  marginRight: DimensionValuePropType,
  marginStart: DimensionValuePropType,
  marginTop: DimensionValuePropType,
  marginVertical: DimensionValuePropType,
  maxHeight: DimensionValuePropType,
  maxWidth: DimensionValuePropType,
  minHeight: DimensionValuePropType,
  minWidth: DimensionValuePropType,
  overflow: PropTypes.oneOf(['hidden', 'scroll', 'visible']),
  padding: DimensionValuePropType,
  paddingBottom: DimensionValuePropType,
  paddingEnd: DimensionValuePropType,
  paddingHorizontal: DimensionValuePropType,
  paddingLeft: DimensionValuePropType,
  paddingRight: DimensionValuePropType,
  paddingStart: DimensionValuePropType,
  paddingTop: DimensionValuePropType,
  paddingVertical: DimensionValuePropType,
  position: PropTypes.oneOf(['absolute', 'relative']),
  right: DimensionValuePropType,
  start: DimensionValuePropType,
  top: DimensionValuePropType,
  width: DimensionValuePropType,
  zIndex: PropTypes.number,
};

module.exports = DeprecatedLayoutPropTypes;

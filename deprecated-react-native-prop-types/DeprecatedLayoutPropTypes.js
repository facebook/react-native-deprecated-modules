/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const ReactPropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/StyleSheet/StyleSheetTypes.js
 */
const LayoutPropTypes = {
  alignContent: ReactPropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: ReactPropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch',
  ]),
  alignSelf: ReactPropTypes.oneOf([
    'auto',
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch',
  ]),
  aspectRatio: ReactPropTypes.number,
  borderBottomWidth: ReactPropTypes.number,
  borderEndWidth: ReactPropTypes.number,
  borderLeftWidth: ReactPropTypes.number,
  borderRightWidth: ReactPropTypes.number,
  borderStartWidth: ReactPropTypes.number,
  borderTopWidth: ReactPropTypes.number,
  borderWidth: ReactPropTypes.number,
  bottom: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  direction: ReactPropTypes.oneOf(['inherit', 'ltr', 'rtl']),
  display: ReactPropTypes.oneOf(['flex', 'none']),
  end: ReactPropTypes.oneOfType([ReactPropTypes.number, ReactPropTypes.string]),
  flex: ReactPropTypes.number,
  flexBasis: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  flexDirection: ReactPropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  flexGrow: ReactPropTypes.number,
  flexShrink: ReactPropTypes.number,
  flexWrap: ReactPropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  height: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  justifyContent: ReactPropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  left: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  margin: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginBottom: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginEnd: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginHorizontal: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginLeft: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginRight: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginStart: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginTop: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  marginVertical: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  maxHeight: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  maxWidth: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  minHeight: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  minWidth: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  overflow: ReactPropTypes.oneOf(['hidden', 'scroll', 'visible']),
  padding: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingBottom: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingEnd: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingHorizontal: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingLeft: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingRight: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingStart: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingTop: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  paddingVertical: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  position: ReactPropTypes.oneOf(['absolute', 'relative']),
  right: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  start: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  top: ReactPropTypes.oneOfType([ReactPropTypes.number, ReactPropTypes.string]),
  width: ReactPropTypes.oneOfType([
    ReactPropTypes.number,
    ReactPropTypes.string,
  ]),
  zIndex: ReactPropTypes.number,
};

module.exports = LayoutPropTypes;

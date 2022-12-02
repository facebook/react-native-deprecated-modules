/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const DeprecatedEdgeInsetsPropType = require('./DeprecatedEdgeInsetsPropType');
const DeprecatedImageSourcePropType = require('./DeprecatedImageSourcePropType');
const DeprecatedImageStylePropTypes = require('./DeprecatedImageStylePropTypes');
const DeprecatedStyleSheetPropType = require('./DeprecatedStyleSheetPropType');
const PropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/Image/ImageProps.js
 */
module.exports = {
  accessibilityLabel: PropTypes.node,
  accessible: PropTypes.bool,
  blurRadius: PropTypes.number,
  capInsets: DeprecatedEdgeInsetsPropType,
  defaultSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      scale: PropTypes.number,
    }),
    PropTypes.number,
  ]),
  onError: PropTypes.func,
  onLayout: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onLoadStart: PropTypes.func,
  onPartialLoad: PropTypes.func,
  onProgress: PropTypes.func,
  resizeMethod: PropTypes.oneOf(['auto', 'resize', 'scale']),
  resizeMode: PropTypes.oneOf([
    'cover',
    'contain',
    'stretch',
    'repeat',
    'center',
  ]),
  source: DeprecatedImageSourcePropType,
  style: DeprecatedStyleSheetPropType(DeprecatedImageStylePropTypes),
  testID: PropTypes.string,
};

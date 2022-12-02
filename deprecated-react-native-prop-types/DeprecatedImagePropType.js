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
const DeprecatedViewPropTypes = require('./DeprecatedViewPropTypes');
const PropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/Image/ImageProps.js
 */
const DeprecatedImagePropType = {
  ...DeprecatedViewPropTypes,
  blurRadius: PropTypes.number,
  capInsets: DeprecatedEdgeInsetsPropType,
  defaultSource: DeprecatedImageSourcePropType,
  fadeDuration: PropTypes.number,
  internal_analyticTag: PropTypes.string,
  loadingIndicatorSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    PropTypes.number,
  ]),
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onLoadStart: PropTypes.func,
  onPartialLoad: PropTypes.func,
  onProgress: PropTypes.func,
  progressiveRenderingEnabled: PropTypes.bool,
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

module.exports = DeprecatedImagePropType;

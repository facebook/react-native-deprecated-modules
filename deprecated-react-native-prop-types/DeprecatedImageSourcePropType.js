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

/**
 * @see facebook/react-native/Libraries/Image/ImageSource.js
 */
const ImageURISourcePropType = PropTypes.shape({
  uri: PropTypes.string,
  bundle: PropTypes.string,
  method: PropTypes.string,
  headers: PropTypes.objectOf(PropTypes.string),
  body: PropTypes.string,
  cache: PropTypes.oneOf([
    'default',
    'reload',
    'force-cache',
    'only-if-cached',
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  scale: PropTypes.number,
});

const ImageSourcePropType = PropTypes.oneOfType([
  ImageURISourcePropType,
  PropTypes.number,
  PropTypes.arrayOf(ImageURISourcePropType),
]);

module.exports = ImageSourcePropType;

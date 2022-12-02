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

const TransformMatrixPropType = function (props, propName, componentName) {
  if (props[propName]) {
    return new Error(
      'The transformMatrix style property is deprecated. ' +
        'Use `transform: [{ matrix: ... }]` instead.',
    );
  }
};

const DecomposedMatrixPropType = function (props, propName, componentName) {
  if (props[propName]) {
    return new Error(
      'The decomposedMatrix style property is deprecated. ' +
        'Use `transform: [...]` instead.',
    );
  }
};

/**
 * @see facebook/react-native/Libraries/StyleSheet/private/_TransformStyle.js
 */
const DeprecatedTransformPropTypes = {
  decomposedMatrix: DecomposedMatrixPropType,
  rotation: deprecatedPropType(
    PropTypes.number,
    'Use the transform prop instead.',
  ),
  scaleX: deprecatedPropType(
    PropTypes.number,
    'Use the transform prop instead.',
  ),
  scaleY: deprecatedPropType(
    PropTypes.number,
    'Use the transform prop instead.',
  ),
  transform: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({perspective: PropTypes.number}),
      PropTypes.shape({rotate: PropTypes.string}),
      PropTypes.shape({rotateX: PropTypes.string}),
      PropTypes.shape({rotateY: PropTypes.string}),
      PropTypes.shape({rotateZ: PropTypes.string}),
      PropTypes.shape({scale: PropTypes.number}),
      PropTypes.shape({scaleX: PropTypes.number}),
      PropTypes.shape({scaleY: PropTypes.number}),
      PropTypes.shape({skewX: PropTypes.string}),
      PropTypes.shape({skewY: PropTypes.string}),
      PropTypes.shape({translateX: PropTypes.number}),
      PropTypes.shape({translateY: PropTypes.number}),
    ]),
  ),
  transformMatrix: TransformMatrixPropType,
  translateX: deprecatedPropType(
    PropTypes.number,
    'Use the transform prop instead.',
  ),
  translateY: deprecatedPropType(
    PropTypes.number,
    'Use the transform prop instead.',
  ),
};

/**
 * Adds a deprecation warning when the prop is used.
 */
function deprecatedPropType(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== undefined) {
      console.warn(
        `\`${propName}\` supplied to \`${componentName}\` has been deprecated. ${explanation}`,
      );
    }

    return propType(props, propName, componentName, ...rest);
  };
}

module.exports = DeprecatedTransformPropTypes;

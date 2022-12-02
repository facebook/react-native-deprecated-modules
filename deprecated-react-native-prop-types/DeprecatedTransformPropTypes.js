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
    ReactPropTypes.number,
    'Use the transform prop instead.',
  ),
  scaleX: deprecatedPropType(
    ReactPropTypes.number,
    'Use the transform prop instead.',
  ),
  scaleY: deprecatedPropType(
    ReactPropTypes.number,
    'Use the transform prop instead.',
  ),
  transform: ReactPropTypes.arrayOf(
    ReactPropTypes.oneOfType([
      ReactPropTypes.shape({perspective: ReactPropTypes.number}),
      ReactPropTypes.shape({rotate: ReactPropTypes.string}),
      ReactPropTypes.shape({rotateX: ReactPropTypes.string}),
      ReactPropTypes.shape({rotateY: ReactPropTypes.string}),
      ReactPropTypes.shape({rotateZ: ReactPropTypes.string}),
      ReactPropTypes.shape({scale: ReactPropTypes.number}),
      ReactPropTypes.shape({scaleX: ReactPropTypes.number}),
      ReactPropTypes.shape({scaleY: ReactPropTypes.number}),
      ReactPropTypes.shape({skewX: ReactPropTypes.string}),
      ReactPropTypes.shape({skewY: ReactPropTypes.string}),
      ReactPropTypes.shape({translateX: ReactPropTypes.number}),
      ReactPropTypes.shape({translateY: ReactPropTypes.number}),
    ]),
  ),
  transformMatrix: TransformMatrixPropType,
  translateX: deprecatedPropType(
    ReactPropTypes.number,
    'Use the transform prop instead.',
  ),
  translateY: deprecatedPropType(
    ReactPropTypes.number,
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

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

'use strict';

function isEmpty(obj: mixed): boolean {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (typeof obj === 'object') {
    for (const i in obj) {
      return false;
    }
    return true;
  } else {
    return !obj;
  }
}

module.exports = isEmpty;

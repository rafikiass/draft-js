/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * @flow
 * @emails oncall+draft_js
 */

'use strict';

import type CharacterMetadata from 'CharacterMetadata';
import type {DraftBlockType} from 'DraftBlockType';
import type {DraftInlineStyle} from 'DraftInlineStyle';
import type {List, Map} from 'immutable';

export type BlockNodeKey = string;

export type BlockNodeConfig = {
  characterList?: List<CharacterMetadata>,
  data?: Map<any, any>,
  depth?: number,
  key?: BlockNodeKey,
  text?: string,
  type?: DraftBlockType,
};

// https://github.com/facebook/draft-js/issues/1492
// prettier-ignore
export interface BlockNode {
  +findEntityRanges: (
    filterFn: (value: CharacterMetadata) => boolean,
    callback: (start: number, end: number) => void,
  ) => void,

  +findStyleRanges: (
    filterFn: (value: CharacterMetadata) => boolean,
    callback: (start: number, end: number) => void,
  ) => void,

  +getCharacterList: () => List<CharacterMetadata>,

  +getData: () => Map<any, any>,

  +getDepth: () => number,

  +getEntityAt: (offset: number) => ?string,

  +getInlineStyleAt: (offset: number) => DraftInlineStyle,

  +getKey: () => BlockNodeKey,

  +getLength: () => number,

  +getText: () => string,

  +getType: () => DraftBlockType,
}

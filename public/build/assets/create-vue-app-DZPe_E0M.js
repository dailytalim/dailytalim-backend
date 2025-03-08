var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { N as extend, O as isString, P as NO, Q as toHandlerKey, R as camelize, S as isSymbol, U as capitalize, V as NOOP, W as EMPTY_OBJ, X as isArray, Y as isObject, Z as isOn, _ as isReservedProp, $ as isBuiltInDirective, a0 as isHTMLTag, a1 as isSVGTag, a2 as isMathMLTag, a3 as isVoidTag, a4 as parseStringStyle, a5 as makeMap, a6 as registerRuntimeCompiler, a7 as genCacheKey, a8 as runtimeDom, K as createApp } from "./runtime-dom.esm-bundler-CDgXytbd.js";
/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const FRAGMENT = Symbol(``);
const TELEPORT = Symbol(``);
const SUSPENSE = Symbol(``);
const KEEP_ALIVE = Symbol(``);
const BASE_TRANSITION = Symbol(
  ``
);
const OPEN_BLOCK = Symbol(``);
const CREATE_BLOCK = Symbol(``);
const CREATE_ELEMENT_BLOCK = Symbol(
  ``
);
const CREATE_VNODE = Symbol(``);
const CREATE_ELEMENT_VNODE = Symbol(
  ``
);
const CREATE_COMMENT = Symbol(
  ``
);
const CREATE_TEXT = Symbol(
  ``
);
const CREATE_STATIC = Symbol(
  ``
);
const RESOLVE_COMPONENT = Symbol(
  ``
);
const RESOLVE_DYNAMIC_COMPONENT = Symbol(
  ``
);
const RESOLVE_DIRECTIVE = Symbol(
  ``
);
const RESOLVE_FILTER = Symbol(
  ``
);
const WITH_DIRECTIVES = Symbol(
  ``
);
const RENDER_LIST = Symbol(``);
const RENDER_SLOT = Symbol(``);
const CREATE_SLOTS = Symbol(``);
const TO_DISPLAY_STRING = Symbol(
  ``
);
const MERGE_PROPS = Symbol(``);
const NORMALIZE_CLASS = Symbol(
  ``
);
const NORMALIZE_STYLE = Symbol(
  ``
);
const NORMALIZE_PROPS = Symbol(
  ``
);
const GUARD_REACTIVE_PROPS = Symbol(
  ``
);
const TO_HANDLERS = Symbol(``);
const CAMELIZE = Symbol(``);
const CAPITALIZE = Symbol(``);
const TO_HANDLER_KEY = Symbol(
  ``
);
const SET_BLOCK_TRACKING = Symbol(
  ``
);
const PUSH_SCOPE_ID = Symbol(``);
const POP_SCOPE_ID = Symbol(``);
const WITH_CTX = Symbol(``);
const UNREF = Symbol(``);
const IS_REF = Symbol(``);
const WITH_MEMO = Symbol(``);
const IS_MEMO_SAME = Symbol(``);
const helperNameMap = {
  [FRAGMENT]: `Fragment`,
  [TELEPORT]: `Teleport`,
  [SUSPENSE]: `Suspense`,
  [KEEP_ALIVE]: `KeepAlive`,
  [BASE_TRANSITION]: `BaseTransition`,
  [OPEN_BLOCK]: `openBlock`,
  [CREATE_BLOCK]: `createBlock`,
  [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
  [CREATE_VNODE]: `createVNode`,
  [CREATE_ELEMENT_VNODE]: `createElementVNode`,
  [CREATE_COMMENT]: `createCommentVNode`,
  [CREATE_TEXT]: `createTextVNode`,
  [CREATE_STATIC]: `createStaticVNode`,
  [RESOLVE_COMPONENT]: `resolveComponent`,
  [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
  [RESOLVE_DIRECTIVE]: `resolveDirective`,
  [RESOLVE_FILTER]: `resolveFilter`,
  [WITH_DIRECTIVES]: `withDirectives`,
  [RENDER_LIST]: `renderList`,
  [RENDER_SLOT]: `renderSlot`,
  [CREATE_SLOTS]: `createSlots`,
  [TO_DISPLAY_STRING]: `toDisplayString`,
  [MERGE_PROPS]: `mergeProps`,
  [NORMALIZE_CLASS]: `normalizeClass`,
  [NORMALIZE_STYLE]: `normalizeStyle`,
  [NORMALIZE_PROPS]: `normalizeProps`,
  [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
  [TO_HANDLERS]: `toHandlers`,
  [CAMELIZE]: `camelize`,
  [CAPITALIZE]: `capitalize`,
  [TO_HANDLER_KEY]: `toHandlerKey`,
  [SET_BLOCK_TRACKING]: `setBlockTracking`,
  [PUSH_SCOPE_ID]: `pushScopeId`,
  [POP_SCOPE_ID]: `popScopeId`,
  [WITH_CTX]: `withCtx`,
  [UNREF]: `unref`,
  [IS_REF]: `isRef`,
  [WITH_MEMO]: `withMemo`,
  [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach((s) => {
    helperNameMap[s] = helpers[s];
  });
}
const locStub = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function createRoot(children, source = "") {
  return {
    type: 0,
    source,
    children,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: locStub
  };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent2));
    }
    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2,
    loc
  };
}
function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17,
    loc,
    elements
  };
}
function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15,
    loc,
    properties
  };
}
function createObjectProperty(key, value) {
  return {
    type: 16,
    loc: locStub,
    key: isString(key) ? createSimpleExpression(key, true) : key,
    value
  };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
  return {
    type: 4,
    loc,
    content,
    isStatic,
    constType: isStatic ? 3 : constType
  };
}
function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8,
    loc,
    children
  };
}
function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14,
    loc,
    callee,
    arguments: args
  };
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
  return {
    type: 19,
    test,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}
function createCacheExpression(index, value, needPauseTracking = false, inVOnce = false) {
  return {
    type: 20,
    index,
    value,
    needPauseTracking,
    inVOnce,
    needArraySpread: false,
    loc: locStub
  };
}
function createBlockStatement(body) {
  return {
    type: 21,
    body,
    loc: locStub
  };
}
function getVNodeHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}
const defaultDelimitersOpen = new Uint8Array([123, 123]);
const defaultDelimitersClose = new Uint8Array([125, 125]);
function isTagStartChar(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function isWhitespace(c) {
  return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function isEndOfTagSection(c) {
  return c === 47 || c === 62 || isWhitespace(c);
}
function toCharCodes(str) {
  const ret = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    ret[i] = str.charCodeAt(i);
  }
  return ret;
}
const Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Tokenizer {
  constructor(stack2, cbs) {
    this.stack = stack2;
    this.cbs = cbs;
    this.state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.inXML = false;
    this.inVPre = false;
    this.newlines = [];
    this.mode = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
    this.delimiterIndex = -1;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1;
    this.mode = 0;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.currentSequence = void 0;
    this.newlines.length = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(index) {
    let line = 1;
    let column = index + 1;
    for (let i = this.newlines.length - 1; i >= 0; i--) {
      const newlineIndex = this.newlines[i];
      if (index > newlineIndex) {
        line = i + 2;
        column = index - newlineIndex;
        break;
      }
    }
    return {
      column,
      line,
      offset: index
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(c) {
    if (c === 60) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!this.inVPre && c === this.delimiterOpen[0]) {
      this.state = 2;
      this.delimiterIndex = 0;
      this.stateInterpolationOpen(c);
    }
  }
  stateInterpolationOpen(c) {
    if (c === this.delimiterOpen[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const start2 = this.index + 1 - this.delimiterOpen.length;
        if (start2 > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, start2);
        }
        this.state = 3;
        this.sectionStart = start2;
      } else {
        this.delimiterIndex++;
      }
    } else if (this.inRCDATA) {
      this.state = 32;
      this.stateInRCDATA(c);
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInterpolation(c) {
    if (c === this.delimiterClose[0]) {
      this.state = 4;
      this.delimiterIndex = 0;
      this.stateInterpolationClose(c);
    }
  }
  stateInterpolationClose(c) {
    if (c === this.delimiterClose[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterClose.length - 1) {
        this.cbs.oninterpolation(this.sectionStart, this.index + 1);
        if (this.inRCDATA) {
          this.state = 32;
        } else {
          this.state = 1;
        }
        this.sectionStart = this.index + 1;
      } else {
        this.delimiterIndex++;
      }
    } else {
      this.state = 3;
      this.stateInterpolation(c);
    }
  }
  stateSpecialStartSequence(c) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.inRCDATA = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = 6;
    this.stateInTagName(c);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === 62 || isWhitespace(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        this.inRCDATA = false;
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
        if (!this.inVPre && c === this.delimiterOpen[0]) {
          this.state = 2;
          this.delimiterIndex = 0;
          this.stateInterpolationOpen(c);
        }
      } else if (this.fastForwardTo(60)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === 60);
    }
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = 28;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = 23;
      this.stateInDeclaration(c);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c) {
    while (++this.index < this.buffer.length) {
      const cc = this.buffer.charCodeAt(this.index);
      if (cc === 10) {
        this.newlines.push(this.index);
      }
      if (cc === c) {
        return true;
      }
    }
    this.index = this.buffer.length - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index - 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index - 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = 1;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  startSpecial(sequence, offset2) {
    this.enterRCDATA(sequence, offset2);
    this.state = 31;
  }
  enterRCDATA(sequence, offset2) {
    this.inRCDATA = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset2;
  }
  stateBeforeTagName(c) {
    if (c === 33) {
      this.state = 22;
      this.sectionStart = this.index + 1;
    } else if (c === 63) {
      this.state = 24;
      this.sectionStart = this.index + 1;
    } else if (isTagStartChar(c)) {
      this.sectionStart = this.index;
      if (this.mode === 0) {
        this.state = 6;
      } else if (this.inSFCRoot) {
        this.state = 34;
      } else if (!this.inXML) {
        if (c === 116) {
          this.state = 30;
        } else {
          this.state = c === 115 ? 29 : 6;
        }
      } else {
        this.state = 6;
      }
    } else if (c === 47) {
      this.state = 8;
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.handleTagName(c);
    }
  }
  stateInSFCRootTagName(c) {
    if (isEndOfTagSection(c)) {
      const tag = this.buffer.slice(this.sectionStart, this.index);
      if (tag !== "template") {
        this.enterRCDATA(toCharCodes(`</` + tag), 0);
      }
      this.handleTagName(c);
    }
  }
  handleTagName(c) {
    this.cbs.onopentagname(this.sectionStart, this.index);
    this.sectionStart = -1;
    this.state = 11;
    this.stateBeforeAttrName(c);
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace(c)) ;
    else if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    } else {
      this.state = isTagStartChar(c) ? 9 : 27;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (c === 62 || isWhitespace(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = 10;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttrName(c) {
    if (c === 62) {
      this.cbs.onopentagend(this.index);
      if (this.inRCDATA) {
        this.state = 32;
      } else {
        this.state = 1;
      }
      this.sectionStart = this.index + 1;
    } else if (c === 47) {
      this.state = 7;
    } else if (c === 60 && this.peek() === 47) {
      this.cbs.onopentagend(this.index);
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!isWhitespace(c)) {
      this.handleAttrStart(c);
    }
  }
  handleAttrStart(c) {
    if (c === 118 && this.peek() === 45) {
      this.state = 13;
      this.sectionStart = this.index;
    } else if (c === 46 || c === 58 || c === 64 || c === 35) {
      this.cbs.ondirname(this.index, this.index + 1);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 12;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c) {
    if (c === 62) {
      this.cbs.onselfclosingtag(this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
      this.inRCDATA = false;
    } else if (!isWhitespace(c)) {
      this.state = 11;
      this.stateBeforeAttrName(c);
    }
  }
  stateInAttrName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 58) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else if (c === 46) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDirArg(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 91) {
      this.state = 15;
    } else if (c === 46) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDynamicDirArg(c) {
    if (c === 93) {
      this.state = 14;
    } else if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index + 1);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirModifier(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 46) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.sectionStart = this.index + 1;
    }
  }
  handleAttrNameEnd(c) {
    this.sectionStart = this.index;
    this.state = 17;
    this.cbs.onattribnameend(this.index);
    this.stateAfterAttrName(c);
  }
  stateAfterAttrName(c) {
    if (c === 61) {
      this.state = 18;
    } else if (c === 47 || c === 62) {
      this.cbs.onattribend(0, this.sectionStart);
      this.sectionStart = -1;
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(0, this.sectionStart);
      this.handleAttrStart(c);
    }
  }
  stateBeforeAttrValue(c) {
    if (c === 34) {
      this.state = 19;
      this.sectionStart = this.index + 1;
    } else if (c === 39) {
      this.state = 20;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this.index;
      this.state = 21;
      this.stateInAttrValueNoQuotes(c);
    }
  }
  handleInAttrValue(c, quote) {
    if (c === quote || this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(
        quote === 34 ? 3 : 2,
        this.index + 1
      );
      this.state = 11;
    }
  }
  stateInAttrValueDoubleQuotes(c) {
    this.handleInAttrValue(c, 34);
  }
  stateInAttrValueSingleQuotes(c) {
    this.handleInAttrValue(c, 39);
  }
  stateInAttrValueNoQuotes(c) {
    if (isWhitespace(c) || c === 62) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(1, this.index);
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (c === 39 || c === 60 || c === 61 || c === 96) {
      this.cbs.onerr(
        18,
        this.index
      );
    } else ;
  }
  stateBeforeDeclaration(c) {
    if (c === 91) {
      this.state = 26;
      this.sequenceIndex = 0;
    } else {
      this.state = c === 45 ? 25 : 23;
    }
  }
  stateInDeclaration(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c) {
    if (c === 45) {
      this.state = 28;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 23;
    }
  }
  stateInSpecialComment(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.oncomment(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c) {
    if (c === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (c === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  stateBeforeSpecialT(c) {
    if (c === Sequences.TitleEnd[3]) {
      this.startSpecial(Sequences.TitleEnd, 4);
    } else if (c === Sequences.TextareaEnd[3]) {
      this.startSpecial(Sequences.TextareaEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(input) {
    this.buffer = input;
    while (this.index < this.buffer.length) {
      const c = this.buffer.charCodeAt(this.index);
      if (c === 10) {
        this.newlines.push(this.index);
      }
      switch (this.state) {
        case 1: {
          this.stateText(c);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(c);
          break;
        }
        case 3: {
          this.stateInterpolation(c);
          break;
        }
        case 4: {
          this.stateInterpolationClose(c);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case 32: {
          this.stateInRCDATA(c);
          break;
        }
        case 26: {
          this.stateCDATASequence(c);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(c);
          break;
        }
        case 12: {
          this.stateInAttrName(c);
          break;
        }
        case 13: {
          this.stateInDirName(c);
          break;
        }
        case 14: {
          this.stateInDirArg(c);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(c);
          break;
        }
        case 16: {
          this.stateInDirModifier(c);
          break;
        }
        case 28: {
          this.stateInCommentLike(c);
          break;
        }
        case 27: {
          this.stateInSpecialComment(c);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(c);
          break;
        }
        case 6: {
          this.stateInTagName(c);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(c);
          break;
        }
        case 9: {
          this.stateInClosingTagName(c);
          break;
        }
        case 5: {
          this.stateBeforeTagName(c);
          break;
        }
        case 17: {
          this.stateAfterAttrName(c);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(c);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(c);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(c);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(c);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(c);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case 23: {
          this.stateInDeclaration(c);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case 25: {
          this.stateBeforeComment(c);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
    this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.sectionStart !== this.index) {
      if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === 19 || this.state === 20 || this.state === 21) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  finish() {
    this.handleTrailingData();
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length;
    if (this.sectionStart >= endIndex) {
      return;
    }
    if (this.state === 28) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex);
      }
    } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
    else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitCodePoint(cp, consumed) {
  }
}
function getCompatValue(key, { compatConfig }) {
  const value = compatConfig && compatConfig[key];
  if (key === "MODE") {
    return value || 3;
  } else {
    return value;
  }
}
function isCompatEnabled(key, context) {
  const mode = getCompatValue("MODE", context);
  const value = getCompatValue(key, context);
  return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
  const enabled = isCompatEnabled(key, context);
  return enabled;
}
function defaultOnError(error) {
  throw error;
}
function defaultOnWarn(msg) {
}
function createCompilerError(code, loc, messages, additionalMessage) {
  const msg = `https://vuejs.org/error-reference/#compiler-${code}`;
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}
const isStaticExp = (p) => p.type === 4 && p.isStatic;
function isCoreComponent(tag) {
  switch (tag) {
    case "Teleport":
    case "teleport":
      return TELEPORT;
    case "Suspense":
    case "suspense":
      return SUSPENSE;
    case "KeepAlive":
    case "keep-alive":
      return KEEP_ALIVE;
    case "BaseTransition":
    case "base-transition":
      return BASE_TRANSITION;
  }
}
const nonIdentifierRE = /^\d|[^\$\w\xA0-\uFFFF]/;
const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
const getExpSource = (exp) => exp.type === 4 ? exp.content : exp.loc.source;
const isMemberExpressionBrowser = (exp) => {
  const path = getExpSource(exp).trim().replace(whitespaceRE, (s) => s.trim());
  let state = 0;
  let stateStack = [];
  let currentOpenBracketCount = 0;
  let currentOpenParensCount = 0;
  let currentStringType = null;
  for (let i = 0; i < path.length; i++) {
    const char = path.charAt(i);
    switch (state) {
      case 0:
        if (char === "[") {
          stateStack.push(state);
          state = 1;
          currentOpenBracketCount++;
        } else if (char === "(") {
          stateStack.push(state);
          state = 2;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
          return false;
        }
        break;
      case 1:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `[`) {
          currentOpenBracketCount++;
        } else if (char === `]`) {
          if (!--currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 2:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `(`) {
          currentOpenParensCount++;
        } else if (char === `)`) {
          if (i === path.length - 1) {
            return false;
          }
          if (!--currentOpenParensCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 3:
        if (char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }
        break;
    }
  }
  return !currentOpenBracketCount && !currentOpenParensCount;
};
const isMemberExpression = isMemberExpressionBrowser;
const fnExpRE = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const isFnExpressionBrowser = (exp) => fnExpRE.test(getExpSource(exp));
const isFnExpression = isFnExpressionBrowser;
function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 7 && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (dynamicOnly) continue;
      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}
function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
  return node.props.some(
    (p) => p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
    p.arg.type !== 4 || // v-bind:[_ctx.foo]
    !p.arg.isStatic)
    // v-bind:[foo]
  );
}
function isText$1(node) {
  return node.type === 5 || node.type === 2;
}
function isVSlot(p) {
  return p.type === 7 && p.name === "slot";
}
function isTemplateNode(node) {
  return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
  return node.type === 1 && node.tagType === 2;
}
const propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function getUnnormalizedProps(props, callPath = []) {
  if (props && !isString(props) && props.type === 14) {
    const callee = props.callee;
    if (!isString(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(
        props.arguments[0],
        callPath.concat(props)
      );
    }
  }
  return [props, callPath];
}
function injectProp(node, prop, context) {
  let propsWithInjection;
  let props = node.type === 13 ? node.props : node.arguments[2];
  let callPath = [];
  let parentCall;
  if (props && !isString(props) && props.type === 14) {
    const ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }
  if (props == null || isString(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14) {
    const first = props.arguments[0];
    if (!isString(first) && first.type === 15) {
      if (!hasProp(prop, first)) {
        first.properties.unshift(prop);
      }
    } else {
      if (props.callee === TO_HANDLERS) {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props
        ]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }
    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15) {
    if (!hasProp(prop, props)) {
      props.properties.unshift(prop);
    }
    propsWithInjection = props;
  } else {
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
      createObjectExpression([prop]),
      props
    ]);
    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }
  if (node.type === 13) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}
function hasProp(prop, props) {
  let result = false;
  if (prop.key.type === 4) {
    const propKeyName = prop.key.content;
    result = props.properties.some(
      (p) => p.key.type === 4 && p.key.content === propKeyName
    );
  }
  return result;
}
function toValidAssetId(name, type) {
  return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
  })}`;
}
function getMemoedVNodeCall(node) {
  if (node.type === 14 && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
const defaultParserOptions = {
  parseMode: "base",
  ns: 0,
  delimiters: [`{{`, `}}`],
  getNamespace: () => 0,
  isVoidTag: NO,
  isPreTag: NO,
  isIgnoreNewlineTag: NO,
  isCustomElement: NO,
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: false,
  prefixIdentifiers: false
};
let currentOptions = defaultParserOptions;
let currentRoot = null;
let currentInput = "";
let currentOpenTag = null;
let currentProp = null;
let currentAttrValue = "";
let currentAttrStartIndex = -1;
let currentAttrEndIndex = -1;
let inPre = 0;
let inVPre = false;
let currentVPreBoundary = null;
const stack = [];
const tokenizer = new Tokenizer(stack, {
  onerr: emitError,
  ontext(start2, end2) {
    onText(getSlice(start2, end2), start2, end2);
  },
  ontextentity(char, start2, end2) {
    onText(char, start2, end2);
  },
  oninterpolation(start2, end2) {
    if (inVPre) {
      return onText(getSlice(start2, end2), start2, end2);
    }
    let innerStart = start2 + tokenizer.delimiterOpen.length;
    let innerEnd = end2 - tokenizer.delimiterClose.length;
    while (isWhitespace(currentInput.charCodeAt(innerStart))) {
      innerStart++;
    }
    while (isWhitespace(currentInput.charCodeAt(innerEnd - 1))) {
      innerEnd--;
    }
    let exp = getSlice(innerStart, innerEnd);
    if (exp.includes("&")) {
      {
        exp = currentOptions.decodeEntities(exp, false);
      }
    }
    addNode({
      type: 5,
      content: createExp(exp, false, getLoc(innerStart, innerEnd)),
      loc: getLoc(start2, end2)
    });
  },
  onopentagname(start2, end2) {
    const name = getSlice(start2, end2);
    currentOpenTag = {
      type: 1,
      tag: name,
      ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: getLoc(start2 - 1, end2),
      codegenNode: void 0
    };
  },
  onopentagend(end2) {
    endOpenTag(end2);
  },
  onclosetag(start2, end2) {
    const name = getSlice(start2, end2);
    if (!currentOptions.isVoidTag(name)) {
      let found = false;
      for (let i = 0; i < stack.length; i++) {
        const e = stack[i];
        if (e.tag.toLowerCase() === name.toLowerCase()) {
          found = true;
          if (i > 0) {
            emitError(24, stack[0].loc.start.offset);
          }
          for (let j = 0; j <= i; j++) {
            const el = stack.shift();
            onCloseTag(el, end2, j < i);
          }
          break;
        }
      }
      if (!found) {
        emitError(23, backTrack(start2, 60));
      }
    }
  },
  onselfclosingtag(end2) {
    const name = currentOpenTag.tag;
    currentOpenTag.isSelfClosing = true;
    endOpenTag(end2);
    if (stack[0] && stack[0].tag === name) {
      onCloseTag(stack.shift(), end2);
    }
  },
  onattribname(start2, end2) {
    currentProp = {
      type: 6,
      name: getSlice(start2, end2),
      nameLoc: getLoc(start2, end2),
      value: void 0,
      loc: getLoc(start2)
    };
  },
  ondirname(start2, end2) {
    const raw = getSlice(start2, end2);
    const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
    if (!inVPre && name === "") {
      emitError(26, start2);
    }
    if (inVPre || name === "") {
      currentProp = {
        type: 6,
        name: raw,
        nameLoc: getLoc(start2, end2),
        value: void 0,
        loc: getLoc(start2)
      };
    } else {
      currentProp = {
        type: 7,
        name,
        rawName: raw,
        exp: void 0,
        arg: void 0,
        modifiers: raw === "." ? [createSimpleExpression("prop")] : [],
        loc: getLoc(start2)
      };
      if (name === "pre") {
        inVPre = tokenizer.inVPre = true;
        currentVPreBoundary = currentOpenTag;
        const props = currentOpenTag.props;
        for (let i = 0; i < props.length; i++) {
          if (props[i].type === 7) {
            props[i] = dirToAttr(props[i]);
          }
        }
      }
    }
  },
  ondirarg(start2, end2) {
    if (start2 === end2) return;
    const arg = getSlice(start2, end2);
    if (inVPre) {
      currentProp.name += arg;
      setLocEnd(currentProp.nameLoc, end2);
    } else {
      const isStatic = arg[0] !== `[`;
      currentProp.arg = createExp(
        isStatic ? arg : arg.slice(1, -1),
        isStatic,
        getLoc(start2, end2),
        isStatic ? 3 : 0
      );
    }
  },
  ondirmodifier(start2, end2) {
    const mod = getSlice(start2, end2);
    if (inVPre) {
      currentProp.name += "." + mod;
      setLocEnd(currentProp.nameLoc, end2);
    } else if (currentProp.name === "slot") {
      const arg = currentProp.arg;
      if (arg) {
        arg.content += "." + mod;
        setLocEnd(arg.loc, end2);
      }
    } else {
      const exp = createSimpleExpression(mod, true, getLoc(start2, end2));
      currentProp.modifiers.push(exp);
    }
  },
  onattribdata(start2, end2) {
    currentAttrValue += getSlice(start2, end2);
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start2;
    currentAttrEndIndex = end2;
  },
  onattribentity(char, start2, end2) {
    currentAttrValue += char;
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start2;
    currentAttrEndIndex = end2;
  },
  onattribnameend(end2) {
    const start2 = currentProp.loc.start.offset;
    const name = getSlice(start2, end2);
    if (currentProp.type === 7) {
      currentProp.rawName = name;
    }
    if (currentOpenTag.props.some(
      (p) => (p.type === 7 ? p.rawName : p.name) === name
    )) {
      emitError(2, start2);
    }
  },
  onattribend(quote, end2) {
    if (currentOpenTag && currentProp) {
      setLocEnd(currentProp.loc, end2);
      if (quote !== 0) {
        if (currentAttrValue.includes("&")) {
          currentAttrValue = currentOptions.decodeEntities(
            currentAttrValue,
            true
          );
        }
        if (currentProp.type === 6) {
          if (currentProp.name === "class") {
            currentAttrValue = condense(currentAttrValue).trim();
          }
          if (quote === 1 && !currentAttrValue) {
            emitError(13, end2);
          }
          currentProp.value = {
            type: 2,
            content: currentAttrValue,
            loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
          };
          if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") {
            tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
          }
        } else {
          let expParseMode = 0;
          currentProp.exp = createExp(
            currentAttrValue,
            false,
            getLoc(currentAttrStartIndex, currentAttrEndIndex),
            0,
            expParseMode
          );
          if (currentProp.name === "for") {
            currentProp.forParseResult = parseForExpression(currentProp.exp);
          }
          let syncIndex = -1;
          if (currentProp.name === "bind" && (syncIndex = currentProp.modifiers.findIndex(
            (mod) => mod.content === "sync"
          )) > -1 && checkCompatEnabled(
            "COMPILER_V_BIND_SYNC",
            currentOptions,
            currentProp.loc,
            currentProp.rawName
          )) {
            currentProp.name = "model";
            currentProp.modifiers.splice(syncIndex, 1);
          }
        }
      }
      if (currentProp.type !== 7 || currentProp.name !== "pre") {
        currentOpenTag.props.push(currentProp);
      }
    }
    currentAttrValue = "";
    currentAttrStartIndex = currentAttrEndIndex = -1;
  },
  oncomment(start2, end2) {
    if (currentOptions.comments) {
      addNode({
        type: 3,
        content: getSlice(start2, end2),
        loc: getLoc(start2 - 4, end2 + 3)
      });
    }
  },
  onend() {
    const end2 = currentInput.length;
    for (let index = 0; index < stack.length; index++) {
      onCloseTag(stack[index], end2 - 1);
      emitError(24, stack[index].loc.start.offset);
    }
  },
  oncdata(start2, end2) {
    if (stack[0].ns !== 0) {
      onText(getSlice(start2, end2), start2, end2);
    } else {
      emitError(1, start2 - 9);
    }
  },
  onprocessinginstruction(start2) {
    if ((stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
      emitError(
        21,
        start2 - 1
      );
    }
  }
});
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  const [, LHS, RHS] = inMatch;
  const createAliasExpression = (content, offset2, asParam = false) => {
    const start2 = loc.start.offset + offset2;
    const end2 = start2 + content.length;
    return createExp(
      content,
      false,
      getLoc(start2, end2),
      0,
      asParam ? 1 : 0
      /* Normal */
    );
  };
  const result = {
    source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: false
  };
  let valueContent = LHS.trim().replace(stripParensRE, "").trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);
  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, "").trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;
    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(keyContent, keyOffset, true);
    }
    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();
      if (indexContent) {
        result.index = createAliasExpression(
          indexContent,
          exp.indexOf(
            indexContent,
            result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
          ),
          true
        );
      }
    }
  }
  if (valueContent) {
    result.value = createAliasExpression(valueContent, trimmedOffset, true);
  }
  return result;
}
function getSlice(start2, end2) {
  return currentInput.slice(start2, end2);
}
function endOpenTag(end2) {
  if (tokenizer.inSFCRoot) {
    currentOpenTag.innerLoc = getLoc(end2 + 1, end2 + 1);
  }
  addNode(currentOpenTag);
  const { tag, ns } = currentOpenTag;
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre++;
  }
  if (currentOptions.isVoidTag(tag)) {
    onCloseTag(currentOpenTag, end2);
  } else {
    stack.unshift(currentOpenTag);
    if (ns === 1 || ns === 2) {
      tokenizer.inXML = true;
    }
  }
  currentOpenTag = null;
}
function onText(content, start2, end2) {
  {
    const tag = stack[0] && stack[0].tag;
    if (tag !== "script" && tag !== "style" && content.includes("&")) {
      content = currentOptions.decodeEntities(content, false);
    }
  }
  const parent = stack[0] || currentRoot;
  const lastNode = parent.children[parent.children.length - 1];
  if (lastNode && lastNode.type === 2) {
    lastNode.content += content;
    setLocEnd(lastNode.loc, end2);
  } else {
    parent.children.push({
      type: 2,
      content,
      loc: getLoc(start2, end2)
    });
  }
}
function onCloseTag(el, end2, isImplied = false) {
  if (isImplied) {
    setLocEnd(el.loc, backTrack(end2, 60));
  } else {
    setLocEnd(el.loc, lookAhead(end2, 62) + 1);
  }
  if (tokenizer.inSFCRoot) {
    if (el.children.length) {
      el.innerLoc.end = extend({}, el.children[el.children.length - 1].loc.end);
    } else {
      el.innerLoc.end = extend({}, el.innerLoc.start);
    }
    el.innerLoc.source = getSlice(
      el.innerLoc.start.offset,
      el.innerLoc.end.offset
    );
  }
  const { tag, ns, children } = el;
  if (!inVPre) {
    if (tag === "slot") {
      el.tagType = 2;
    } else if (isFragmentTemplate(el)) {
      el.tagType = 3;
    } else if (isComponent(el)) {
      el.tagType = 1;
    }
  }
  if (!tokenizer.inRCDATA) {
    el.children = condenseWhitespace(children);
  }
  if (ns === 0 && currentOptions.isIgnoreNewlineTag(tag)) {
    const first = children[0];
    if (first && first.type === 2) {
      first.content = first.content.replace(/^\r?\n/, "");
    }
  }
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre--;
  }
  if (currentVPreBoundary === el) {
    inVPre = tokenizer.inVPre = false;
    currentVPreBoundary = null;
  }
  if (tokenizer.inXML && (stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
    tokenizer.inXML = false;
  }
  {
    const props = el.props;
    if (!tokenizer.inSFCRoot && isCompatEnabled(
      "COMPILER_NATIVE_TEMPLATE",
      currentOptions
    ) && el.tag === "template" && !isFragmentTemplate(el)) {
      const parent = stack[0] || currentRoot;
      const index = parent.children.indexOf(el);
      parent.children.splice(index, 1, ...el.children);
    }
    const inlineTemplateProp = props.find(
      (p) => p.type === 6 && p.name === "inline-template"
    );
    if (inlineTemplateProp && checkCompatEnabled(
      "COMPILER_INLINE_TEMPLATE",
      currentOptions,
      inlineTemplateProp.loc
    ) && el.children.length) {
      inlineTemplateProp.value = {
        type: 2,
        content: getSlice(
          el.children[0].loc.start.offset,
          el.children[el.children.length - 1].loc.end.offset
        ),
        loc: inlineTemplateProp.loc
      };
    }
  }
}
function lookAhead(index, c) {
  let i = index;
  while (currentInput.charCodeAt(i) !== c && i < currentInput.length - 1) i++;
  return i;
}
function backTrack(index, c) {
  let i = index;
  while (currentInput.charCodeAt(i) !== c && i >= 0) i--;
  return i;
}
const specialTemplateDir = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function isFragmentTemplate({ tag, props }) {
  if (tag === "template") {
    for (let i = 0; i < props.length; i++) {
      if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) {
        return true;
      }
    }
  }
  return false;
}
function isComponent({ tag, props }) {
  if (currentOptions.isCustomElement(tag)) {
    return false;
  }
  if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || currentOptions.isBuiltInComponent && currentOptions.isBuiltInComponent(tag) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) {
    return true;
  }
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    if (p.type === 6) {
      if (p.name === "is" && p.value) {
        if (p.value.content.startsWith("vue:")) {
          return true;
        } else if (checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          currentOptions,
          p.loc
        )) {
          return true;
        }
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      p.name === "bind" && isStaticArgOf(p.arg, "is") && checkCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        currentOptions,
        p.loc
      )
    ) {
      return true;
    }
  }
  return false;
}
function isUpperCase(c) {
  return c > 64 && c < 91;
}
const windowsNewlineRE = /\r\n/g;
function condenseWhitespace(nodes, tag) {
  const shouldCondense = currentOptions.whitespace !== "preserve";
  let removedWhitespace = false;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type === 2) {
      if (!inPre) {
        if (isAllWhitespace(node.content)) {
          const prev = nodes[i - 1] && nodes[i - 1].type;
          const next = nodes[i + 1] && nodes[i + 1].type;
          if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
            removedWhitespace = true;
            nodes[i] = null;
          } else {
            node.content = " ";
          }
        } else if (shouldCondense) {
          node.content = condense(node.content);
        }
      } else {
        node.content = node.content.replace(windowsNewlineRE, "\n");
      }
    }
  }
  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function isAllWhitespace(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isWhitespace(str.charCodeAt(i))) {
      return false;
    }
  }
  return true;
}
function hasNewlineChar(str) {
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 10 || c === 13) {
      return true;
    }
  }
  return false;
}
function condense(str) {
  let ret = "";
  let prevCharIsWhitespace = false;
  for (let i = 0; i < str.length; i++) {
    if (isWhitespace(str.charCodeAt(i))) {
      if (!prevCharIsWhitespace) {
        ret += " ";
        prevCharIsWhitespace = true;
      }
    } else {
      ret += str[i];
      prevCharIsWhitespace = false;
    }
  }
  return ret;
}
function addNode(node) {
  (stack[0] || currentRoot).children.push(node);
}
function getLoc(start2, end2) {
  return {
    start: tokenizer.getPos(start2),
    // @ts-expect-error allow late attachment
    end: end2 == null ? end2 : tokenizer.getPos(end2),
    // @ts-expect-error allow late attachment
    source: end2 == null ? end2 : getSlice(start2, end2)
  };
}
function cloneLoc(loc) {
  return getLoc(loc.start.offset, loc.end.offset);
}
function setLocEnd(loc, end2) {
  loc.end = tokenizer.getPos(end2);
  loc.source = getSlice(loc.start.offset, end2);
}
function dirToAttr(dir) {
  const attr = {
    type: 6,
    name: dir.rawName,
    nameLoc: getLoc(
      dir.loc.start.offset,
      dir.loc.start.offset + dir.rawName.length
    ),
    value: void 0,
    loc: dir.loc
  };
  if (dir.exp) {
    const loc = dir.exp.loc;
    if (loc.end.offset < dir.loc.end.offset) {
      loc.start.offset--;
      loc.start.column--;
      loc.end.offset++;
      loc.end.column++;
    }
    attr.value = {
      type: 2,
      content: dir.exp.content,
      loc
    };
  }
  return attr;
}
function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0) {
  const exp = createSimpleExpression(content, isStatic, loc, constType);
  return exp;
}
function emitError(code, index, message) {
  currentOptions.onError(
    createCompilerError(code, getLoc(index, index))
  );
}
function reset() {
  tokenizer.reset();
  currentOpenTag = null;
  currentProp = null;
  currentAttrValue = "";
  currentAttrStartIndex = -1;
  currentAttrEndIndex = -1;
  stack.length = 0;
}
function baseParse(input, options) {
  reset();
  currentInput = input;
  currentOptions = extend({}, defaultParserOptions);
  if (options) {
    let key;
    for (key in options) {
      if (options[key] != null) {
        currentOptions[key] = options[key];
      }
    }
  }
  tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
  tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
  const delimiters = options && options.delimiters;
  if (delimiters) {
    tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
    tokenizer.delimiterClose = toCharCodes(delimiters[1]);
  }
  const root = currentRoot = createRoot([], input);
  tokenizer.parse(currentInput);
  root.loc = getLoc(0, input.length);
  root.children = condenseWhitespace(root.children);
  currentRoot = null;
  return root;
}
function cacheStatic(root, context) {
  walk(
    root,
    void 0,
    context,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    isSingleElementRoot(root, root.children[0])
  );
}
function isSingleElementRoot(root, child) {
  const { children } = root;
  return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
}
function walk(node, parent, context, doNotHoistNode = false, inFor = false) {
  const { children } = node;
  const toCache = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 1 && child.tagType === 0) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType > 0) {
        if (constantType >= 2) {
          child.codegenNode.patchFlag = -1;
          toCache.push(child);
          continue;
        }
      } else {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          const flag = codegenNode.patchFlag;
          if ((flag === void 0 || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
            const props = getNodeProps(child);
            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }
          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType >= 2) {
        toCache.push(child);
        continue;
      }
    }
    if (child.type === 1) {
      const isComponent2 = child.tagType === 1;
      if (isComponent2) {
        context.scopes.vSlot++;
      }
      walk(child, node, context, false, inFor);
      if (isComponent2) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11) {
      walk(child, node, context, child.children.length === 1, true);
    } else if (child.type === 9) {
      for (let i2 = 0; i2 < child.branches.length; i2++) {
        walk(
          child.branches[i2],
          node,
          context,
          child.branches[i2].children.length === 1,
          inFor
        );
      }
    }
  }
  let cachedAsArray = false;
  if (toCache.length === children.length && node.type === 1) {
    if (node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
      node.codegenNode.children = getCacheExpression(
        createArrayExpression(node.codegenNode.children)
      );
      cachedAsArray = true;
    } else if (node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
      const slot = getSlotNode(node.codegenNode, "default");
      if (slot) {
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    } else if (node.tagType === 3 && parent && parent.type === 1 && parent.tagType === 1 && parent.codegenNode && parent.codegenNode.type === 13 && parent.codegenNode.children && !isArray(parent.codegenNode.children) && parent.codegenNode.children.type === 15) {
      const slotName = findDir(node, "slot", true);
      const slot = slotName && slotName.arg && getSlotNode(parent.codegenNode, slotName.arg);
      if (slot) {
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    }
  }
  if (!cachedAsArray) {
    for (const child of toCache) {
      child.codegenNode = context.cache(child.codegenNode);
    }
  }
  function getCacheExpression(value) {
    const exp = context.cache(value);
    if (inFor && context.hmr) {
      exp.needArraySpread = true;
    }
    return exp;
  }
  function getSlotNode(node2, name) {
    if (node2.children && !isArray(node2.children) && node2.children.type === 15) {
      const slot = node2.children.properties.find(
        (p) => p.key === name || p.key.content === name
      );
      return slot && slot.value;
    }
  }
  if (toCache.length && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}
function getConstantType(node, context) {
  const { constantCache } = context;
  switch (node.type) {
    case 1:
      if (node.tagType !== 0) {
        return 0;
      }
      const cached = constantCache.get(node);
      if (cached !== void 0) {
        return cached;
      }
      const codegenNode = node.codegenNode;
      if (codegenNode.type !== 13) {
        return 0;
      }
      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject" && node.tag !== "math") {
        return 0;
      }
      if (codegenNode.patchFlag === void 0) {
        let returnType2 = 3;
        const generatedPropsType = getGeneratedPropsConstantType(node, context);
        if (generatedPropsType === 0) {
          constantCache.set(node, 0);
          return 0;
        }
        if (generatedPropsType < returnType2) {
          returnType2 = generatedPropsType;
        }
        for (let i = 0; i < node.children.length; i++) {
          const childType = getConstantType(node.children[i], context);
          if (childType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (childType < returnType2) {
            returnType2 = childType;
          }
        }
        if (returnType2 > 1) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7 && p.name === "bind" && p.exp) {
              const expType = getConstantType(p.exp, context);
              if (expType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (expType < returnType2) {
                returnType2 = expType;
              }
            }
          }
        }
        if (codegenNode.isBlock) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7) {
              constantCache.set(node, 0);
              return 0;
            }
          }
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(
            getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
          );
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }
        constantCache.set(node, returnType2);
        return returnType2;
      } else {
        constantCache.set(node, 0);
        return 0;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return getConstantType(node.content, context);
    case 4:
      return node.constType;
    case 8:
      let returnType = 3;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isString(child) || isSymbol(child)) {
          continue;
        }
        const childType = getConstantType(child, context);
        if (childType === 0) {
          return 0;
        } else if (childType < returnType) {
          returnType = childType;
        }
      }
      return returnType;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const allowHoistedHelperSet = /* @__PURE__ */ new Set([
  NORMALIZE_CLASS,
  NORMALIZE_STYLE,
  NORMALIZE_PROPS,
  GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    const arg = value.arguments[0];
    if (arg.type === 4) {
      return getConstantType(arg, context);
    } else if (arg.type === 14) {
      return getConstantTypeOfHelperCall(arg, context);
    }
  }
  return 0;
}
function getGeneratedPropsConstantType(node, context) {
  let returnType = 3;
  const props = getNodeProps(node);
  if (props && props.type === 15) {
    const { properties } = props;
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      const keyType = getConstantType(key, context);
      if (keyType === 0) {
        return keyType;
      }
      if (keyType < returnType) {
        returnType = keyType;
      }
      let valueType;
      if (value.type === 4) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14) {
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0;
      }
      if (valueType === 0) {
        return valueType;
      }
      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }
  return returnType;
}
function getNodeProps(node) {
  const codegenNode = node.codegenNode;
  if (codegenNode.type === 13) {
    return codegenNode.props;
  }
}
function createTransformContext(root, {
  filename = "",
  prefixIdentifiers = false,
  hoistStatic = false,
  hmr = false,
  cacheHandlers = false,
  nodeTransforms = [],
  directiveTransforms = {},
  transformHoist = null,
  isBuiltInComponent = NOOP,
  isCustomElement = NOOP,
  expressionPlugins = [],
  scopeId = null,
  slotted = true,
  ssr = false,
  inSSR = false,
  ssrCssVars = ``,
  bindingMetadata = EMPTY_OBJ,
  inline = false,
  isTS = false,
  onError = defaultOnError,
  onWarn = defaultOnWarn,
  compatConfig
}) {
  const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const context = {
    // options
    filename,
    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
    prefixIdentifiers,
    hoistStatic,
    hmr,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    slotted,
    ssr,
    inSSR,
    ssrCssVars,
    bindingMetadata,
    inline,
    isTS,
    onError,
    onWarn,
    compatConfig,
    // state
    root,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper(name) {
      const count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper(name) {
      const count = context.helpers.get(name);
      if (count) {
        const currentCount = count - 1;
        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },
    replaceNode(node) {
      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode(node) {
      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      if (!node || node === context.currentNode) {
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }
      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: NOOP,
    addIdentifiers(exp) {
    },
    removeIdentifiers(exp) {
    },
    hoist(exp) {
      if (isString(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      const identifier = createSimpleExpression(
        `_hoisted_${context.hoists.length}`,
        false,
        exp.loc,
        2
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache(exp, isVNode = false, inVOnce = false) {
      const cacheExp = createCacheExpression(
        context.cached.length,
        exp,
        isVNode,
        inVOnce
      );
      context.cached.push(cacheExp);
      return cacheExp;
    }
  };
  {
    context.filters = /* @__PURE__ */ new Set();
  }
  return context;
}
function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  if (options.hoistStatic) {
    cacheStatic(root, context);
  }
  if (!options.ssr) {
    createRootCodegen(root, context);
  }
  root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  root.transformed = true;
  {
    root.filters = [...context.filters];
  }
}
function createRootCodegen(root, context) {
  const { helper } = context;
  const { children } = root;
  if (children.length === 1) {
    const child = children[0];
    if (isSingleElementRoot(root, child) && child.codegenNode) {
      const codegenNode = child.codegenNode;
      if (codegenNode.type === 13) {
        convertToBlock(codegenNode, context);
      }
      root.codegenNode = codegenNode;
    } else {
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    let patchFlag = 64;
    root.codegenNode = createVNodeCall(
      context,
      helper(FRAGMENT),
      void 0,
      root.children,
      patchFlag,
      void 0,
      void 0,
      true,
      void 0,
      false
    );
  } else ;
}
function traverseChildren(parent, context) {
  let i = 0;
  const nodeRemoved = () => {
    i--;
  };
  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (isString(child)) continue;
    context.grandParent = context.parent;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}
function traverseNode(node, context) {
  context.currentNode = node;
  const { nodeTransforms } = context;
  const exitFns = [];
  for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
    const onExit = nodeTransforms[i2](node, context);
    if (onExit) {
      if (isArray(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }
    if (!context.currentNode) {
      return;
    } else {
      node = context.currentNode;
    }
  }
  switch (node.type) {
    case 3:
      if (!context.ssr) {
        context.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }
      break;
    // for container types, further traverse downwards
    case 9:
      for (let i2 = 0; i2 < node.branches.length; i2++) {
        traverseNode(node.branches[i2], context);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      traverseChildren(node, context);
      break;
  }
  context.currentNode = node;
  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}
function createStructuralDirectiveTransform(name, fn2) {
  const matches = isString(name) ? (n) => n === name : (n) => name.test(n);
  return (node, context) => {
    if (node.type === 1) {
      const { props } = node;
      if (node.tagType === 3 && props.some(isVSlot)) {
        return;
      }
      const exitFns = [];
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 7 && matches(prop.name)) {
          props.splice(i, 1);
          i--;
          const onExit = fn2(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }
      return exitFns;
    }
  };
}
const PURE_ANNOTATION = `/*@__PURE__*/`;
const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, {
  mode = "function",
  prefixIdentifiers = mode === "module",
  sourceMap = false,
  filename = `template.vue.html`,
  scopeId = null,
  optimizeImports = false,
  runtimeGlobalName = `Vue`,
  runtimeModuleName = `vue`,
  ssrRuntimeModuleName = "vue/server-renderer",
  ssr = false,
  isTS = false,
  inSSR = false
}) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssrRuntimeModuleName,
    ssr,
    isTS,
    inSSR,
    source: ast.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(key) {
      return `_${helperNameMap[key]}`;
    },
    push(code, newlineIndex = -2, node) {
      context.code += code;
    },
    indent() {
      newline(++context.indentLevel);
    },
    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },
    newline() {
      newline(context.indentLevel);
    }
  };
  function newline(n) {
    context.push(
      "\n" + `  `.repeat(n),
      0
      /* Start */
    );
  }
  return context;
}
function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  const {
    mode,
    push,
    prefixIdentifiers,
    indent,
    deindent,
    newline,
    scopeId,
    ssr
  } = context;
  const helpers = Array.from(ast.helpers);
  const hasHelpers = helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== "module";
  const preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  }
  const functionName = ssr ? `ssrRender` : `render`;
  const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  const signature = args.join(", ");
  {
    push(`function ${functionName}(${signature}) {`);
  }
  indent();
  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent();
    if (hasHelpers) {
      push(
        `const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`,
        -1
        /* End */
      );
      newline();
    }
  }
  if (ast.components.length) {
    genAssets(ast.components, "component", context);
    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }
  if (ast.directives.length) {
    genAssets(ast.directives, "directive", context);
    if (ast.temps > 0) {
      newline();
    }
  }
  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, "filter", context);
    newline();
  }
  if (ast.temps > 0) {
    push(`let `);
    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }
  if (ast.components.length || ast.directives.length || ast.temps) {
    push(
      `
`,
      0
      /* Start */
    );
    newline();
  }
  if (!ssr) {
    push(`return `);
  }
  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }
  if (useWithBlock) {
    deindent();
    push(`}`);
  }
  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    preamble: ``,
    map: context.map ? context.map.toJSON() : void 0
  };
}
function genFunctionPreamble(ast, context) {
  const {
    ssr,
    prefixIdentifiers,
    push,
    newline,
    runtimeModuleName,
    runtimeGlobalName,
    ssrRuntimeModuleName
  } = context;
  const VueBinding = runtimeGlobalName;
  const helpers = Array.from(ast.helpers);
  if (helpers.length > 0) {
    {
      push(
        `const _Vue = ${VueBinding}
`,
        -1
        /* End */
      );
      if (ast.hoists.length) {
        const staticHelpers = [
          CREATE_VNODE,
          CREATE_ELEMENT_VNODE,
          CREATE_COMMENT,
          CREATE_TEXT,
          CREATE_STATIC
        ].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ");
        push(
          `const { ${staticHelpers} } = _Vue
`,
          -1
          /* End */
        );
      }
    }
  }
  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
  const resolver = helper(
    type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
  );
  for (let i = 0; i < assets.length; i++) {
    let id = assets[i];
    const maybeSelfReference = id.endsWith("__self");
    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }
    push(
      `const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
    );
    if (i < assets.length - 1) {
      newline();
    }
  }
}
function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }
  context.pure = true;
  const { push, newline } = context;
  newline();
  for (let i = 0; i < hoists.length; i++) {
    const exp = hoists[i];
    if (exp) {
      push(`const _hoisted_${i + 1} = `);
      genNode(exp, context);
      newline();
    }
  }
  context.pure = false;
}
function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 || false;
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
  const { push, newline } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (isString(node)) {
      push(
        node,
        -3
        /* Unknown */
      );
    } else if (isArray(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }
    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(",");
        newline();
      } else {
        comma && push(", ");
      }
    }
  }
}
function genNode(node, context) {
  if (isString(node)) {
    context.push(
      node,
      -3
      /* Unknown */
    );
    return;
  }
  if (isSymbol(node)) {
    context.push(context.helper(node));
    return;
  }
  switch (node.type) {
    case 1:
    case 9:
    case 11:
      genNode(node.codegenNode, context);
      break;
    case 2:
      genText(node, context);
      break;
    case 4:
      genExpression(node, context);
      break;
    case 5:
      genInterpolation(node, context);
      break;
    case 12:
      genNode(node.codegenNode, context);
      break;
    case 8:
      genCompoundExpression(node, context);
      break;
    case 3:
      genComment(node, context);
      break;
    case 13:
      genVNodeCall(node, context);
      break;
    case 14:
      genCallExpression(node, context);
      break;
    case 15:
      genObjectExpression(node, context);
      break;
    case 17:
      genArrayExpression(node, context);
      break;
    case 18:
      genFunctionExpression(node, context);
      break;
    case 19:
      genConditionalExpression(node, context);
      break;
    case 20:
      genCacheExpression(node, context);
      break;
    case 21:
      genNodeList(node.body, context, true, false);
      break;
  }
}
function genText(node, context) {
  context.push(JSON.stringify(node.content), -3, node);
}
function genExpression(node, context) {
  const { content, isStatic } = node;
  context.push(
    isStatic ? JSON.stringify(content) : content,
    -3,
    node
  );
}
function genInterpolation(node, context) {
  const { push, helper, pure } = context;
  if (pure) push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}
function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isString(child)) {
      context.push(
        child,
        -3
        /* Unknown */
      );
    } else {
      genNode(child, context);
    }
  }
}
function genExpressionAsPropertyKey(node, context) {
  const { push } = context;
  if (node.type === 8) {
    push(`[`);
    genCompoundExpression(node, context);
    push(`]`);
  } else if (node.isStatic) {
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, -2, node);
  } else {
    push(`[${node.content}]`, -3, node);
  }
}
function genComment(node, context) {
  const { push, helper, pure } = context;
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(
    `${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`,
    -3,
    node
  );
}
function genVNodeCall(node, context) {
  const { push, helper, pure } = context;
  const {
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2
  } = node;
  let patchFlagString;
  if (patchFlag) {
    {
      patchFlagString = String(patchFlag);
    }
  }
  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }
  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }
  if (pure) {
    push(PURE_ANNOTATION);
  }
  const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
  push(helper(callHelper) + `(`, -2, node);
  genNodeList(
    genNullableArgs([tag, props, children, patchFlagString, dynamicProps]),
    context
  );
  push(`)`);
  if (isBlock) {
    push(`)`);
  }
  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}
function genNullableArgs(args) {
  let i = args.length;
  while (i--) {
    if (args[i] != null) break;
  }
  return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
  const { push, helper, pure } = context;
  const callee = isString(node.callee) ? node.callee : helper(node.callee);
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(callee + `(`, -2, node);
  genNodeList(node.arguments, context);
  push(`)`);
}
function genObjectExpression(node, context) {
  const { push, indent, deindent, newline } = context;
  const { properties } = node;
  if (!properties.length) {
    push(`{}`, -2, node);
    return;
  }
  const multilines = properties.length > 1 || false;
  push(multilines ? `{` : `{ `);
  multilines && indent();
  for (let i = 0; i < properties.length; i++) {
    const { key, value } = properties[i];
    genExpressionAsPropertyKey(key, context);
    push(`: `);
    genNode(value, context);
    if (i < properties.length - 1) {
      push(`,`);
      newline();
    }
  }
  multilines && deindent();
  push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
  const { push, indent, deindent } = context;
  const { params, returns, body, newline, isSlot } = node;
  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }
  push(`(`, -2, node);
  if (isArray(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }
  push(`) => `);
  if (newline || body) {
    push(`{`);
    indent();
  }
  if (returns) {
    if (newline) {
      push(`return `);
    }
    if (isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }
  if (newline || body) {
    deindent();
    push(`}`);
  }
  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(`, undefined, true`);
    }
    push(`)`);
  }
}
function genConditionalExpression(node, context) {
  const { test, consequent, alternate, newline: needNewline } = node;
  const { push, indent, deindent, newline } = context;
  if (test.type === 4) {
    const needsParens = !isSimpleIdentifier(test.content);
    needsParens && push(`(`);
    genExpression(test, context);
    needsParens && push(`)`);
  } else {
    push(`(`);
    genNode(test, context);
    push(`)`);
  }
  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19;
  if (!isNested) {
    context.indentLevel++;
  }
  genNode(alternate, context);
  if (!isNested) {
    context.indentLevel--;
  }
  needNewline && deindent(
    true
    /* without newline */
  );
}
function genCacheExpression(node, context) {
  const { push, helper, indent, deindent, newline } = context;
  const { needPauseTracking, needArraySpread } = node;
  if (needArraySpread) {
    push(`[...(`);
  }
  push(`_cache[${node.index}] || (`);
  if (needPauseTracking) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1`);
    if (node.inVOnce) push(`, true`);
    push(`),`);
    newline();
    push(`(`);
  }
  push(`_cache[${node.index}] = `);
  genNode(node.value, context);
  if (needPauseTracking) {
    push(`).cacheIndex = ${node.index},`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }
  push(`)`);
  if (needArraySpread) {
    push(`)]`);
  }
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          );
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          );
        }
      };
    });
  }
);
function processIf(node, dir, context, processCodegen) {
  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(
      createCompilerError(28, dir.loc)
    );
    dir.exp = createSimpleExpression(`true`, false, loc);
  }
  if (dir.name === "if") {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9,
      loc: cloneLoc(node.loc),
      branches: [branch]
    };
    context.replaceNode(ifNode);
    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    const siblings = context.parent.children;
    let i = siblings.indexOf(node);
    while (i-- >= -1) {
      const sibling = siblings[i];
      if (sibling && sibling.type === 3) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 9) {
        if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        context.removeNode();
        const branch = createIfBranch(node, dir);
        sibling.branches.push(branch);
        const onExit = processCodegen && processCodegen(sibling, branch, false);
        traverseNode(branch, context);
        if (onExit) onExit();
        context.currentNode = null;
      } else {
        context.onError(
          createCompilerError(30, node.loc)
        );
      }
      break;
    }
  }
}
function createIfBranch(node, dir) {
  const isTemplateIf = node.tagType === 3;
  return {
    type: 10,
    loc: node.loc,
    condition: dir.name === "else" ? void 0 : dir.exp,
    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
    userKey: findProp(node, `key`),
    isTemplateIf
  };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, keyIndex, context),
      // make sure to pass in asBlock: true so that the comment node call
      // closes the current block.
      createCallExpression(context.helper(CREATE_COMMENT), [
        '""',
        "true"
      ])
    );
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
  const { helper } = context;
  const keyProperty = createObjectProperty(
    `key`,
    createSimpleExpression(
      `${keyIndex}`,
      false,
      locStub,
      2
    )
  );
  const { children } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11) {
      const vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      let patchFlag = 64;
      return createVNodeCall(
        context,
        helper(FRAGMENT),
        createObjectExpression([keyProperty]),
        children,
        patchFlag,
        void 0,
        void 0,
        true,
        false,
        false,
        branch.loc
      );
    }
  } else {
    const ret = firstChild.codegenNode;
    const vnodeCall = getMemoedVNodeCall(ret);
    if (vnodeCall.type === 13) {
      convertToBlock(vnodeCall, context);
    }
    injectProp(vnodeCall, keyProperty, context);
    return ret;
  }
}
function getParentCondition(node) {
  while (true) {
    if (node.type === 19) {
      if (node.alternate.type === 19) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20) {
      node = node.value;
    }
  }
}
const transformBind = (dir, _node, context) => {
  const { modifiers, loc } = dir;
  const arg = dir.arg;
  let { exp } = dir;
  if (exp && exp.type === 4 && !exp.content.trim()) {
    {
      exp = void 0;
    }
  }
  if (!exp) {
    if (arg.type !== 4 || !arg.isStatic) {
      context.onError(
        createCompilerError(
          52,
          arg.loc
        )
      );
      return {
        props: [
          createObjectProperty(arg, createSimpleExpression("", true, loc))
        ]
      };
    }
    transformBindShorthand(dir);
    exp = dir.exp;
  }
  if (arg.type !== 4) {
    arg.children.unshift(`(`);
    arg.children.push(`) || ""`);
  } else if (!arg.isStatic) {
    arg.content = `${arg.content} || ""`;
  }
  if (modifiers.some((mod) => mod.content === "camel")) {
    if (arg.type === 4) {
      if (arg.isStatic) {
        arg.content = camelize(arg.content);
      } else {
        arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
      }
    } else {
      arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
      arg.children.push(`)`);
    }
  }
  if (!context.inSSR) {
    if (modifiers.some((mod) => mod.content === "prop")) {
      injectPrefix(arg, ".");
    }
    if (modifiers.some((mod) => mod.content === "attr")) {
      injectPrefix(arg, "^");
    }
  }
  return {
    props: [createObjectProperty(arg, exp)]
  };
};
const transformBindShorthand = (dir, context) => {
  const arg = dir.arg;
  const propName = camelize(arg.content);
  dir.exp = createSimpleExpression(propName, false, arg.loc);
};
const injectPrefix = (arg, prefix) => {
  if (arg.type === 4) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = `\`${prefix}\${${arg.content}}\``;
    }
  } else {
    arg.children.unshift(`'${prefix}' + (`);
    arg.children.push(`)`);
  }
};
const transformFor = createStructuralDirectiveTransform(
  "for",
  (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const isTemplate = isTemplateNode(node);
      const memo = findDir(node, "memo");
      const keyProp = findProp(node, `key`, false, true);
      const isDirKey = keyProp && keyProp.type === 7;
      if (isDirKey && !keyProp.exp) {
        transformBindShorthand(keyProp);
      }
      let keyExp = keyProp && (keyProp.type === 6 ? keyProp.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : keyProp.exp);
      const keyProperty = keyProp && keyExp ? createObjectProperty(`key`, keyExp) : null;
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        renderExp,
        fragmentFlag,
        void 0,
        void 0,
        true,
        !isStableFragment,
        false,
        node.loc
      );
      return () => {
        let childBlock;
        const { children } = forNode;
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(
            context,
            helper(FRAGMENT),
            keyProperty ? createObjectExpression([keyProperty]) : void 0,
            node.children,
            64,
            void 0,
            void 0,
            true,
            void 0,
            false
          );
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          if (childBlock.isBlock !== !isStableFragment) {
            if (childBlock.isBlock) {
              removeHelper(OPEN_BLOCK);
              removeHelper(
                getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
              );
            } else {
              removeHelper(
                getVNodeHelper(context.inSSR, childBlock.isComponent)
              );
            }
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }
        if (memo) {
          const loop = createFunctionExpression(
            createForLoopParams(forNode.parseResult, [
              createSimpleExpression(`_cached`)
            ])
          );
          loop.body = createBlockStatement([
            createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
            createCompoundExpression([
              `if (_cached`,
              ...keyExp ? [` && _cached.key === `, keyExp] : [],
              ` && ${context.helperString(
                IS_MEMO_SAME
              )}(_cached, _memo)) return _cached`
            ]),
            createCompoundExpression([`const _item = `, childBlock]),
            createSimpleExpression(`_item.memo = _memo`),
            createSimpleExpression(`return _item`)
          ]);
          renderExp.arguments.push(
            loop,
            createSimpleExpression(`_cache`),
            createSimpleExpression(String(context.cached.length))
          );
          context.cached.push(null);
        } else {
          renderExp.arguments.push(
            createFunctionExpression(
              createForLoopParams(forNode.parseResult),
              childBlock,
              true
            )
          );
        }
      };
    });
  }
);
function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(
      createCompilerError(31, dir.loc)
    );
    return;
  }
  const parseResult = dir.forParseResult;
  if (!parseResult) {
    context.onError(
      createCompilerError(32, dir.loc)
    );
    return;
  }
  finalizeForParseResult(parseResult);
  const { addIdentifiers, removeIdentifiers, scopes } = context;
  const { source, value, key, index } = parseResult;
  const forNode = {
    type: 11,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode);
  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit) onExit();
  };
}
function finalizeForParseResult(result, context) {
  if (result.finalized) return;
  result.finalized = true;
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
  return createParamsList([value, key, index, ...memoArgs]);
}
function createParamsList(args) {
  let i = args.length;
  while (i--) {
    if (args[i]) break;
  }
  return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
const defaultFallback = createSimpleExpression(`undefined`, false);
const trackSlotScopes = (node, context) => {
  if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
    const vSlot = findDir(node, "slot");
    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return () => {
        context.scopes.vSlot--;
      };
    }
  }
};
const buildClientSlotFn = (props, _vForExp, children, loc) => createFunctionExpression(
  props,
  children,
  false,
  true,
  children.length ? children[0].loc : loc
);
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const { children, loc } = node;
  const slotsProperties = [];
  const dynamicSlots = [];
  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
  const onComponentSlot = findDir(node, "slot", true);
  if (onComponentSlot) {
    const { arg, exp } = onComponentSlot;
    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }
    slotsProperties.push(
      createObjectProperty(
        arg || createSimpleExpression("default", true),
        buildSlotFn(exp, void 0, children, loc)
      )
    );
  }
  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = /* @__PURE__ */ new Set();
  let conditionalBranchIndex = 0;
  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;
    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
      if (slotElement.type !== 3) {
        implicitDefaultChildren.push(slotElement);
      }
      continue;
    }
    if (onComponentSlot) {
      context.onError(
        createCompilerError(37, slotDir.loc)
      );
      break;
    }
    hasTemplateSlots = true;
    const { children: slotChildren, loc: slotLoc } = slotElement;
    const {
      arg: slotName = createSimpleExpression(`default`, true),
      exp: slotProps,
      loc: dirLoc
    } = slotDir;
    let staticSlotName;
    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }
    const vFor = findDir(slotElement, "for");
    const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
    let vIf;
    let vElse;
    if (vIf = findDir(slotElement, "if")) {
      hasDynamicSlots = true;
      dynamicSlots.push(
        createConditionalExpression(
          vIf.exp,
          buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
          defaultFallback
        )
      );
    } else if (vElse = findDir(
      slotElement,
      /^else(-if)?$/,
      true
      /* allowEmpty */
    )) {
      let j = i;
      let prev;
      while (j--) {
        prev = children[j];
        if (prev.type !== 3) {
          break;
        }
      }
      if (prev && isTemplateNode(prev) && findDir(prev, /^(else-)?if$/)) {
        let conditional = dynamicSlots[dynamicSlots.length - 1];
        while (conditional.alternate.type === 19) {
          conditional = conditional.alternate;
        }
        conditional.alternate = vElse.exp ? createConditionalExpression(
          vElse.exp,
          buildDynamicSlot(
            slotName,
            slotFunction,
            conditionalBranchIndex++
          ),
          defaultFallback
        ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(
          createCompilerError(30, vElse.loc)
        );
      }
    } else if (vFor) {
      hasDynamicSlots = true;
      const parseResult = vFor.forParseResult;
      if (parseResult) {
        finalizeForParseResult(parseResult);
        dynamicSlots.push(
          createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(
              createForLoopParams(parseResult),
              buildDynamicSlot(slotName, slotFunction),
              true
            )
          ])
        );
      } else {
        context.onError(
          createCompilerError(
            32,
            vFor.loc
          )
        );
      }
    } else {
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(
            createCompilerError(
              38,
              dirLoc
            )
          );
          continue;
        }
        seenSlotNames.add(staticSlotName);
        if (staticSlotName === "default") {
          hasNamedDefaultSlot = true;
        }
      }
      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }
  if (!onComponentSlot) {
    const buildDefaultSlotProperty = (props, children2) => {
      const fn2 = buildSlotFn(props, void 0, children2, loc);
      if (context.compatConfig) {
        fn2.isNonScopedSlot = true;
      }
      return createObjectProperty(`default`, fn2);
    };
    if (!hasTemplateSlots) {
      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
      if (hasNamedDefaultSlot) {
        context.onError(
          createCompilerError(
            39,
            implicitDefaultChildren[0].loc
          )
        );
      } else {
        slotsProperties.push(
          buildDefaultSlotProperty(void 0, implicitDefaultChildren)
        );
      }
    }
  }
  const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
  let slots = createObjectExpression(
    slotsProperties.concat(
      createObjectProperty(
        `_`,
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        createSimpleExpression(
          slotFlag + ``,
          false
        )
      )
    ),
    loc
  );
  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [
      slots,
      createArrayExpression(dynamicSlots)
    ]);
  }
  return {
    slots,
    hasDynamicSlots
  };
}
function buildDynamicSlot(name, fn2, index) {
  const props = [
    createObjectProperty(`name`, name),
    createObjectProperty(`fn`, fn2)
  ];
  if (index != null) {
    props.push(
      createObjectProperty(`key`, createSimpleExpression(String(index), true))
    );
  }
  return createObjectExpression(props);
}
function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    switch (child.type) {
      case 1:
        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
          return true;
        }
        break;
      case 9:
        if (hasForwardedSlots(child.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }
  return false;
}
function isNonWhitespaceContent(node) {
  if (node.type !== 2 && node.type !== 12)
    return true;
  return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}
const directiveImportMap = /* @__PURE__ */ new WeakMap();
const transformElement = (node, context) => {
  return function postTransformElement() {
    node = context.currentNode;
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    const { tag, props } = node;
    const isComponent2 = node.tagType === 1;
    let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
    const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    let vnodeProps;
    let vnodeChildren;
    let patchFlag = 0;
    let vnodeDynamicProps;
    let dynamicPropNames;
    let vnodeDirectives;
    let shouldUseBlock = (
      // dynamic component may resolve to plain elements
      isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
      // updates inside get proper isSVG flag at runtime. (#639, #643)
      // This is technically web-specific, but splitting the logic out of core
      // leads to too much unnecessary complexity.
      (tag === "svg" || tag === "foreignObject" || tag === "math")
    );
    if (props.length > 0) {
      const propsBuildResult = buildProps(
        node,
        context,
        void 0,
        isComponent2,
        isDynamicComponent
      );
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      const directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(
        directives.map((dir) => buildDirectiveArgs(dir, context))
      ) : void 0;
      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    }
    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        shouldUseBlock = true;
        patchFlag |= 1024;
      }
      const shouldBuildAsSlots = isComponent2 && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;
      if (shouldBuildAsSlots) {
        const { slots, hasDynamicSlots } = buildSlots(node, context);
        vnodeChildren = slots;
        if (hasDynamicSlots) {
          patchFlag |= 1024;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        const child = node.children[0];
        const type = child.type;
        const hasDynamicTextChild = type === 5 || type === 8;
        if (hasDynamicTextChild && getConstantType(child, context) === 0) {
          patchFlag |= 1;
        }
        if (hasDynamicTextChild || type === 2) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    }
    if (dynamicPropNames && dynamicPropNames.length) {
      vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
    }
    node.codegenNode = createVNodeCall(
      context,
      vnodeTag,
      vnodeProps,
      vnodeChildren,
      patchFlag === 0 ? void 0 : patchFlag,
      vnodeDynamicProps,
      vnodeDirectives,
      !!shouldUseBlock,
      false,
      isComponent2,
      node.loc
    );
  };
};
function resolveComponentType(node, context, ssr = false) {
  let { tag } = node;
  const isExplicitDynamic = isComponentTag(tag);
  const isProp = findProp(
    node,
    "is",
    false,
    true
    /* allow empty */
  );
  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled(
      "COMPILER_IS_ON_ELEMENT",
      context
    )) {
      let exp;
      if (isProp.type === 6) {
        exp = isProp.value && createSimpleExpression(isProp.value.content, true);
      } else {
        exp = isProp.exp;
        if (!exp) {
          exp = createSimpleExpression(`is`, false, isProp.arg.loc);
        }
      }
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
      tag = isProp.value.content.slice(4);
    }
  }
  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
  if (builtIn) {
    if (!ssr) context.helper(builtIn);
    return builtIn;
  }
  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
  const { tag, loc: elementLoc, children } = node;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = [];
  const hasChildren = children.length > 0;
  let shouldUseBlock = false;
  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];
  const pushMergeArg = (arg) => {
    if (properties.length) {
      mergeArgs.push(
        createObjectExpression(dedupeProperties(properties), elementLoc)
      );
      properties = [];
    }
    if (arg) mergeArgs.push(arg);
  };
  const pushRefVForMarker = () => {
    if (context.scopes.vFor > 0) {
      properties.push(
        createObjectProperty(
          createSimpleExpression("ref_for", true),
          createSimpleExpression("true")
        )
      );
    }
  };
  const analyzePatchFlag = ({ key, value }) => {
    if (isStaticExp(key)) {
      const name = key.content;
      const isEventHandler = isOn(name);
      if (isEventHandler && (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== "onclick" && // omit v-model handlers
      name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !isReservedProp(name)) {
        hasHydrationEventBinding = true;
      }
      if (isEventHandler && isReservedProp(name)) {
        hasVnodeHook = true;
      }
      if (isEventHandler && value.type === 14) {
        value = value.arguments[0];
      }
      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
        return;
      }
      if (name === "ref") {
        hasRef = true;
      } else if (name === "class") {
        hasClassBinding = true;
      } else if (name === "style") {
        hasStyleBinding = true;
      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
      if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (prop.type === 6) {
      const { loc, name, nameLoc, value } = prop;
      let isStatic = true;
      if (name === "ref") {
        hasRef = true;
        pushRefVForMarker();
      }
      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      properties.push(
        createObjectProperty(
          createSimpleExpression(name, true, nameLoc),
          createSimpleExpression(
            value ? value.content : "",
            isStatic,
            value ? value.loc : loc
          )
        )
      );
    } else {
      const { name, arg, exp, loc, modifiers } = prop;
      const isVBind = name === "bind";
      const isVOn = name === "on";
      if (name === "slot") {
        if (!isComponent2) {
          context.onError(
            createCompilerError(40, loc)
          );
        }
        continue;
      }
      if (name === "once" || name === "memo") {
        continue;
      }
      if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      if (isVOn && ssr) {
        continue;
      }
      if (
        // #938: elements with dynamic keys should be forced into blocks
        isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
      ) {
        shouldUseBlock = true;
      }
      if (isVBind && isStaticArgOf(arg, "ref")) {
        pushRefVForMarker();
      }
      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;
        if (exp) {
          if (isVBind) {
            pushRefVForMarker();
            pushMergeArg();
            {
              if (isCompatEnabled(
                "COMPILER_V_BIND_OBJECT_ORDER",
                context
              )) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            pushMergeArg({
              type: 14,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent2 ? [exp] : [exp, `true`]
            });
          }
        } else {
          context.onError(
            createCompilerError(
              isVBind ? 34 : 35,
              loc
            )
          );
        }
        continue;
      }
      if (isVBind && modifiers.some((mod) => mod.content === "prop")) {
        patchFlag |= 32;
      }
      const directiveTransform = context.directiveTransforms[name];
      if (directiveTransform) {
        const { props: props2, needRuntime } = directiveTransform(prop, node, context);
        !ssr && props2.forEach(analyzePatchFlag);
        if (isVOn && arg && !isStaticExp(arg)) {
          pushMergeArg(createObjectExpression(props2, elementLoc));
        } else {
          properties.push(...props2);
        }
        if (needRuntime) {
          runtimeDirectives.push(prop);
          if (isSymbol(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!isBuiltInDirective(name)) {
        runtimeDirectives.push(prop);
        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }
  let propsExpression = void 0;
  if (mergeArgs.length) {
    pushMergeArg();
    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(
        context.helper(MERGE_PROPS),
        mergeArgs,
        elementLoc
      );
    } else {
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(
      dedupeProperties(properties),
      elementLoc
    );
  }
  if (hasDynamicKeys) {
    patchFlag |= 16;
  } else {
    if (hasClassBinding && !isComponent2) {
      patchFlag |= 2;
    }
    if (hasStyleBinding && !isComponent2) {
      patchFlag |= 4;
    }
    if (dynamicPropNames.length) {
      patchFlag |= 8;
    }
    if (hasHydrationEventBinding) {
      patchFlag |= 32;
    }
  }
  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512;
  }
  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15:
        let classKeyIndex = -1;
        let styleKeyIndex = -1;
        let hasDynamicKey = false;
        for (let i = 0; i < propsExpression.properties.length; i++) {
          const key = propsExpression.properties[i].key;
          if (isStaticExp(key)) {
            if (key.content === "class") {
              classKeyIndex = i;
            } else if (key.content === "style") {
              styleKeyIndex = i;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }
        const classProp = propsExpression.properties[classKeyIndex];
        const styleProp = propsExpression.properties[styleKeyIndex];
        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(
              context.helper(NORMALIZE_CLASS),
              [classProp.value]
            );
          }
          if (styleProp && // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17)) {
            styleProp.value = createCallExpression(
              context.helper(NORMALIZE_STYLE),
              [styleProp.value]
            );
          }
        } else {
          propsExpression = createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [propsExpression]
          );
        }
        break;
      case 14:
        break;
      default:
        propsExpression = createCallExpression(
          context.helper(NORMALIZE_PROPS),
          [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]
        );
        break;
    }
  }
  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames,
    shouldUseBlock
  };
}
function dedupeProperties(properties) {
  const knownProps = /* @__PURE__ */ new Map();
  const deduped = [];
  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.key.type === 8 || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }
    const name = prop.key.content;
    const existing = knownProps.get(name);
    if (existing) {
      if (name === "style" || name === "class" || isOn(name)) {
        mergeAsArray(existing, prop);
      }
    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }
  return deduped;
}
function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression(
      [existing.value, incoming.value],
      existing.loc
    );
  }
}
function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);
  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
  }
  const { loc } = dir;
  if (dir.exp) dirArgs.push(dir.exp);
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }
    dirArgs.push(dir.arg);
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(`void 0`);
    }
    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(
      createObjectExpression(
        dir.modifiers.map(
          (modifier) => createObjectProperty(modifier, trueExpression)
        ),
        loc
      )
    );
  }
  return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;
  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ", ";
  }
  return propsNamesString + `]`;
}
function isComponentTag(tag) {
  return tag === "component" || tag === "Component";
}
const transformSlotOutlet = (node, context) => {
  if (isSlotOutlet(node)) {
    const { children, loc } = node;
    const { slotName, slotProps } = processSlotOutlet(node, context);
    const slotArgs = [
      context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
      slotName,
      "{}",
      "undefined",
      "true"
    ];
    let expectedLen = 2;
    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }
    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }
    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }
    slotArgs.splice(expectedLen);
    node.codegenNode = createCallExpression(
      context.helper(RENDER_SLOT),
      slotArgs,
      loc
    );
  }
};
function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = void 0;
  const nonNameProps = [];
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (p.value) {
        if (p.name === "name") {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = camelize(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
        if (p.exp) {
          slotName = p.exp;
        } else if (p.arg && p.arg.type === 4) {
          const name = camelize(p.arg.content);
          slotName = p.exp = createSimpleExpression(name, false, p.arg.loc);
        }
      } else {
        if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }
        nonNameProps.push(p);
      }
    }
  }
  if (nonNameProps.length > 0) {
    const { props, directives } = buildProps(
      node,
      context,
      nonNameProps,
      false,
      false
    );
    slotProps = props;
    if (directives.length) {
      context.onError(
        createCompilerError(
          36,
          directives[0].loc
        )
      );
    }
  }
  return {
    slotName,
    slotProps
  };
}
const transformOn$1 = (dir, node, context, augmentor) => {
  const { loc, modifiers, arg } = dir;
  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35, loc));
  }
  let eventName;
  if (arg.type === 4) {
    if (arg.isStatic) {
      let rawName = arg.content;
      if (rawName.startsWith("vue:")) {
        rawName = `vnode-${rawName.slice(4)}`;
      }
      const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        toHandlerKey(camelize(rawName))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${rawName}`
      );
      eventName = createSimpleExpression(eventString, true, arg.loc);
    } else {
      eventName = createCompoundExpression([
        `${context.helperString(TO_HANDLER_KEY)}(`,
        arg,
        `)`
      ]);
    }
  } else {
    eventName = arg;
    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
    eventName.children.push(`)`);
  }
  let exp = dir.exp;
  if (exp && !exp.content.trim()) {
    exp = void 0;
  }
  let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
  if (exp) {
    const isMemberExp = isMemberExpression(exp);
    const isInlineStatement = !(isMemberExp || isFnExpression(exp));
    const hasMultipleStatements = exp.content.includes(`;`);
    if (isInlineStatement || shouldCache && isMemberExp) {
      exp = createCompoundExpression([
        `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
        exp,
        hasMultipleStatements ? `}` : `)`
      ]);
    }
  }
  let ret = {
    props: [
      createObjectProperty(
        eventName,
        exp || createSimpleExpression(`() => {}`, false, loc)
      )
    ]
  };
  if (augmentor) {
    ret = augmentor(ret);
  }
  if (shouldCache) {
    ret.props[0].value = context.cache(ret.props[0].value);
  }
  ret.props.forEach((p) => p.key.isHandlerKey = true);
  return ret;
};
const transformText = (node, context) => {
  if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
    return () => {
      const children = node.children;
      let currentContainer = void 0;
      let hasText = false;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child)) {
          hasText = true;
          for (let j = i + 1; j < children.length; j++) {
            const next = children[j];
            if (isText$1(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression(
                  [child],
                  child.loc
                );
              }
              currentContainer.children.push(` + `, next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = void 0;
              break;
            }
          }
        }
      }
      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(
        (p) => p.type === 7 && !context.directiveTransforms[p.name]
      ) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === "template"))) {
        return;
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child) || child.type === 8) {
          const callArgs = [];
          if (child.type !== 2 || child.content !== " ") {
            callArgs.push(child);
          }
          if (!context.ssr && getConstantType(child, context) === 0) {
            callArgs.push(
              `1`
            );
          }
          children[i] = {
            type: 12,
            content: child,
            loc: child.loc,
            codegenNode: createCallExpression(
              context.helper(CREATE_TEXT),
              callArgs
            )
          };
        }
      }
    };
  }
};
const seen$1 = /* @__PURE__ */ new WeakSet();
const transformOnce = (node, context) => {
  if (node.type === 1 && findDir(node, "once", true)) {
    if (seen$1.has(node) || context.inVOnce || context.inSSR) {
      return;
    }
    seen$1.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return () => {
      context.inVOnce = false;
      const cur = context.currentNode;
      if (cur.codegenNode) {
        cur.codegenNode = context.cache(
          cur.codegenNode,
          true,
          true
        );
      }
    };
  }
};
const transformModel$1 = (dir, node, context) => {
  const { exp, arg } = dir;
  if (!exp) {
    context.onError(
      createCompilerError(41, dir.loc)
    );
    return createTransformProps();
  }
  const rawExp = exp.loc.source.trim();
  const expString = exp.type === 4 ? exp.content : rawExp;
  const bindingType = context.bindingMetadata[rawExp];
  if (bindingType === "props" || bindingType === "props-aliased") {
    context.onError(createCompilerError(44, exp.loc));
    return createTransformProps();
  }
  if (!expString.trim() || !isMemberExpression(exp) && true) {
    context.onError(
      createCompilerError(42, exp.loc)
    );
    return createTransformProps();
  }
  const propName = arg ? arg : createSimpleExpression("modelValue", true);
  const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
  let assignmentExp;
  const eventArg = context.isTS ? `($event: any)` : `$event`;
  {
    assignmentExp = createCompoundExpression([
      `${eventArg} => ((`,
      exp,
      `) = $event)`
    ]);
  }
  const props = [
    // modelValue: foo
    createObjectProperty(propName, dir.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    createObjectProperty(eventName, assignmentExp)
  ];
  if (dir.modifiers.length && node.tagType === 1) {
    const modifiers = dir.modifiers.map((m3) => m3.content).map((m3) => (isSimpleIdentifier(m3) ? m3 : JSON.stringify(m3)) + `: true`).join(`, `);
    const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
    props.push(
      createObjectProperty(
        modifiersKey,
        createSimpleExpression(
          `{ ${modifiers} }`,
          false,
          dir.loc,
          2
        )
      )
    );
  }
  return createTransformProps(props);
};
function createTransformProps(props = []) {
  return { props };
}
const validDivisionCharRE = /[\w).+\-_$\]]/;
const transformFilter = (node, context) => {
  if (!isCompatEnabled("COMPILER_FILTERS", context)) {
    return;
  }
  if (node.type === 5) {
    rewriteFilter(node.content, context);
  } else if (node.type === 1) {
    node.props.forEach((prop) => {
      if (prop.type === 7 && prop.name !== "for" && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};
function rewriteFilter(node, context) {
  if (node.type === 4) {
    parseFilter(node, context);
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child !== "object") continue;
      if (child.type === 4) {
        parseFilter(child, context);
      } else if (child.type === 8) {
        rewriteFilter(node, context);
      } else if (child.type === 5) {
        rewriteFilter(child.content, context);
      }
    }
  }
}
function parseFilter(node, context) {
  const exp = node.content;
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c, prev, i, expression, filters = [];
  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 39 && prev !== 92) inSingle = false;
    } else if (inDouble) {
      if (c === 34 && prev !== 92) inDouble = false;
    } else if (inTemplateString) {
      if (c === 96 && prev !== 92) inTemplateString = false;
    } else if (inRegex) {
      if (c === 47 && prev !== 92) inRegex = false;
    } else if (c === 124 && // pipe
    exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
      if (expression === void 0) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 34:
          inDouble = true;
          break;
        // "
        case 39:
          inSingle = true;
          break;
        // '
        case 96:
          inTemplateString = true;
          break;
        // `
        case 40:
          paren++;
          break;
        // (
        case 41:
          paren--;
          break;
        // )
        case 91:
          square++;
          break;
        // [
        case 93:
          square--;
          break;
        // ]
        case 123:
          curly++;
          break;
        // {
        case 125:
          curly--;
          break;
      }
      if (c === 47) {
        let j = i - 1;
        let p;
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== " ") break;
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }
  if (expression === void 0) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }
  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }
  if (filters.length) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }
    node.content = expression;
    node.ast = void 0;
  }
}
function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  const i = filter.indexOf("(");
  if (i < 0) {
    context.filters.add(filter);
    return `${toValidAssetId(filter, "filter")}(${exp})`;
  } else {
    const name = filter.slice(0, i);
    const args = filter.slice(i + 1);
    context.filters.add(name);
    return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
  }
}
const seen = /* @__PURE__ */ new WeakSet();
const transformMemo = (node, context) => {
  if (node.type === 1) {
    const dir = findDir(node, "memo");
    if (!dir || seen.has(node)) {
      return;
    }
    seen.add(node);
    return () => {
      const codegenNode = node.codegenNode || context.currentNode.codegenNode;
      if (codegenNode && codegenNode.type === 13) {
        if (node.tagType !== 1) {
          convertToBlock(codegenNode, context);
        }
        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
          dir.exp,
          createFunctionExpression(void 0, codegenNode),
          `_cache`,
          String(context.cached.length)
        ]);
        context.cached.push(null);
      }
    };
  }
};
function getBaseTransformPreset(prefixIdentifiers) {
  return [
    [
      transformOnce,
      transformIf,
      transformMemo,
      transformFor,
      ...[transformFilter],
      ...[],
      transformSlotOutlet,
      transformElement,
      trackSlotScopes,
      transformText
    ],
    {
      on: transformOn$1,
      bind: transformBind,
      model: transformModel$1
    }
  ];
}
function baseCompile(source, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === "module";
  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(47));
    } else if (isModuleMode) {
      onError(createCompilerError(48));
    }
  }
  const prefixIdentifiers = false;
  if (options.cacheHandlers) {
    onError(createCompilerError(49));
  }
  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(50));
  }
  const resolvedOptions = extend({}, options, {
    prefixIdentifiers
  });
  const ast = isString(source) ? baseParse(source, resolvedOptions) : source;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(
    ast,
    extend({}, resolvedOptions, {
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: extend(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
        // user transforms
      )
    })
  );
  return generate(ast, resolvedOptions);
}
const noopDirectiveTransform = () => ({ props: [] });
/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const V_MODEL_RADIO = Symbol(``);
const V_MODEL_CHECKBOX = Symbol(
  ``
);
const V_MODEL_TEXT = Symbol(``);
const V_MODEL_SELECT = Symbol(
  ``
);
const V_MODEL_DYNAMIC = Symbol(
  ``
);
const V_ON_WITH_MODIFIERS = Symbol(
  ``
);
const V_ON_WITH_KEYS = Symbol(
  ``
);
const V_SHOW = Symbol(``);
const TRANSITION = Symbol(``);
const TRANSITION_GROUP = Symbol(
  ``
);
registerRuntimeHelpers({
  [V_MODEL_RADIO]: `vModelRadio`,
  [V_MODEL_CHECKBOX]: `vModelCheckbox`,
  [V_MODEL_TEXT]: `vModelText`,
  [V_MODEL_SELECT]: `vModelSelect`,
  [V_MODEL_DYNAMIC]: `vModelDynamic`,
  [V_ON_WITH_MODIFIERS]: `withModifiers`,
  [V_ON_WITH_KEYS]: `withKeys`,
  [V_SHOW]: `vShow`,
  [TRANSITION]: `Transition`,
  [TRANSITION_GROUP]: `TransitionGroup`
});
let decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
  if (!decoder) {
    decoder = document.createElement("div");
  }
  if (asAttr) {
    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
    return decoder.children[0].getAttribute("foo");
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}
const parserOptions = {
  parseMode: "html",
  isVoidTag,
  isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
  isPreTag: (tag) => tag === "pre",
  isIgnoreNewlineTag: (tag) => tag === "pre" || tag === "textarea",
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: (tag) => {
    if (tag === "Transition" || tag === "transition") {
      return TRANSITION;
    } else if (tag === "TransitionGroup" || tag === "transition-group") {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(tag, parent, rootNamespace) {
    let ns = parent ? parent.ns : rootNamespace;
    if (parent && ns === 2) {
      if (parent.tag === "annotation-xml") {
        if (tag === "svg") {
          return 1;
        }
        if (parent.props.some(
          (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
        )) {
          ns = 0;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
        ns = 0;
      }
    } else if (parent && ns === 1) {
      if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
        ns = 0;
      }
    }
    if (ns === 0) {
      if (tag === "svg") {
        return 1;
      }
      if (tag === "math") {
        return 2;
      }
    }
    return ns;
  }
};
const transformStyle = (node) => {
  if (node.type === 1) {
    node.props.forEach((p, i) => {
      if (p.type === 6 && p.name === "style" && p.value) {
        node.props[i] = {
          type: 7,
          name: `bind`,
          arg: createSimpleExpression(`style`, true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};
const parseInlineCSS = (cssText, loc) => {
  const normalized = parseStringStyle(cssText);
  return createSimpleExpression(
    JSON.stringify(normalized),
    false,
    loc,
    3
  );
};
function createDOMCompilerError(code, loc) {
  return createCompilerError(
    code,
    loc
  );
}
const transformVHtml = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(53, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(54, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`innerHTML`, true, loc),
        exp || createSimpleExpression("", true)
      )
    ]
  };
};
const transformVText = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(55, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(56, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`textContent`, true),
        exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(
          context.helperString(TO_DISPLAY_STRING),
          [exp],
          loc
        ) : createSimpleExpression("", true)
      )
    ]
  };
};
const transformModel = (dir, node, context) => {
  const baseResult = transformModel$1(dir, node, context);
  if (!baseResult.props.length || node.tagType === 1) {
    return baseResult;
  }
  if (dir.arg) {
    context.onError(
      createDOMCompilerError(
        58,
        dir.arg.loc
      )
    );
  }
  const { tag } = node;
  const isCustomElement = context.isCustomElement(tag);
  if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
    let directiveToUse = V_MODEL_TEXT;
    let isInvalidType = false;
    if (tag === "input" || isCustomElement) {
      const type = findProp(node, `type`);
      if (type) {
        if (type.type === 7) {
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type.value) {
          switch (type.value.content) {
            case "radio":
              directiveToUse = V_MODEL_RADIO;
              break;
            case "checkbox":
              directiveToUse = V_MODEL_CHECKBOX;
              break;
            case "file":
              isInvalidType = true;
              context.onError(
                createDOMCompilerError(
                  59,
                  dir.loc
                )
              );
              break;
          }
        }
      } else if (hasDynamicKeyVBind(node)) {
        directiveToUse = V_MODEL_DYNAMIC;
      } else ;
    } else if (tag === "select") {
      directiveToUse = V_MODEL_SELECT;
    } else ;
    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(
      createDOMCompilerError(
        57,
        dir.loc
      )
    );
  }
  baseResult.props = baseResult.props.filter(
    (p) => !(p.key.type === 4 && p.key.content === "modelValue")
  );
  return baseResult;
};
const isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
const isNonKeyModifier = /* @__PURE__ */ makeMap(
  // event propagation management
  `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
);
const maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
const isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`);
const resolveModifiers = (key, modifiers, context, loc) => {
  const keyModifiers = [];
  const nonKeyModifiers = [];
  const eventOptionModifiers = [];
  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i].content;
    if (modifier === "native" && checkCompatEnabled(
      "COMPILER_V_ON_NATIVE",
      context
    )) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      eventOptionModifiers.push(modifier);
    } else {
      if (maybeKeyModifier(modifier)) {
        if (isStaticExp(key)) {
          if (isKeyboardEvent(key.content.toLowerCase())) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }
  return {
    keyModifiers,
    nonKeyModifiers,
    eventOptionModifiers
  };
};
const transformClick = (key, event) => {
  const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
  return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
    `(`,
    key,
    `) === "onClick" ? "${event}" : (`,
    key,
    `)`
  ]) : key;
};
const transformOn = (dir, node, context) => {
  return transformOn$1(dir, node, context, (baseResult) => {
    const { modifiers } = dir;
    if (!modifiers.length) return baseResult;
    let { key, value: handlerExp } = baseResult.props[0];
    const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
    if (nonKeyModifiers.includes("right")) {
      key = transformClick(key, `onContextmenu`);
    }
    if (nonKeyModifiers.includes("middle")) {
      key = transformClick(key, `onMouseup`);
    }
    if (nonKeyModifiers.length) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
        handlerExp,
        JSON.stringify(nonKeyModifiers)
      ]);
    }
    if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
    (!isStaticExp(key) || isKeyboardEvent(key.content.toLowerCase()))) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
        handlerExp,
        JSON.stringify(keyModifiers)
      ]);
    }
    if (eventOptionModifiers.length) {
      const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
      key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
    }
    return {
      props: [createObjectProperty(key, handlerExp)]
    };
  });
};
const transformShow = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(61, loc)
    );
  }
  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};
const ignoreSideEffectTags = (node, context) => {
  if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
    context.removeNode();
  }
};
const DOMNodeTransforms = [
  transformStyle,
  ...[]
];
const DOMDirectiveTransforms = {
  cloak: noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  // override compiler-core
  on: transformOn,
  // override compiler-core
  show: transformShow
};
function compile(src, options = {}) {
  return baseCompile(
    src,
    extend({}, parserOptions, options, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend(
        {},
        DOMDirectiveTransforms,
        options.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const compileCache = /* @__PURE__ */ Object.create(null);
function compileToFunction(template, options) {
  if (!isString(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
      return NOOP;
    }
  }
  const key = genCacheKey(template, options);
  const cached = compileCache[key];
  if (cached) {
    return cached;
  }
  if (template[0] === "#") {
    const el = document.querySelector(template);
    template = el ? el.innerHTML : ``;
  }
  const opts = extend(
    {
      hoistStatic: true,
      onError: void 0,
      onWarn: NOOP
    },
    options
  );
  if (!opts.isCustomElement && typeof customElements !== "undefined") {
    opts.isCustomElement = (tag) => !!customElements.get(tag);
  }
  const { code } = compile(template, opts);
  const render = new Function("Vue", code)(runtimeDom);
  render._rc = true;
  return compileCache[key] = render;
}
registerRuntimeCompiler(compileToFunction);
var Events = (
  /** @class */
  function() {
    function Events2(eventType, eventFunctions) {
      if (eventFunctions === void 0) {
        eventFunctions = [];
      }
      this._eventType = eventType;
      this._eventFunctions = eventFunctions;
    }
    Events2.prototype.init = function() {
      var _this = this;
      this._eventFunctions.forEach(function(eventFunction) {
        if (typeof window !== "undefined") {
          window.addEventListener(_this._eventType, eventFunction);
        }
      });
    };
    return Events2;
  }()
);
var Instances = (
  /** @class */
  function() {
    function Instances2() {
      this._instances = {
        Accordion: {},
        Carousel: {},
        Collapse: {},
        Dial: {},
        Dismiss: {},
        Drawer: {},
        Dropdown: {},
        Modal: {},
        Popover: {},
        Tabs: {},
        Tooltip: {},
        InputCounter: {},
        CopyClipboard: {},
        Datepicker: {}
      };
    }
    Instances2.prototype.addInstance = function(component, instance, id, override) {
      if (override === void 0) {
        override = false;
      }
      if (!this._instances[component]) {
        console.warn("Flowbite: Component ".concat(component, " does not exist."));
        return false;
      }
      if (this._instances[component][id] && !override) {
        console.warn("Flowbite: Instance with ID ".concat(id, " already exists."));
        return;
      }
      if (override && this._instances[component][id]) {
        this._instances[component][id].destroyAndRemoveInstance();
      }
      this._instances[component][id ? id : this._generateRandomId()] = instance;
    };
    Instances2.prototype.getAllInstances = function() {
      return this._instances;
    };
    Instances2.prototype.getInstances = function(component) {
      if (!this._instances[component]) {
        console.warn("Flowbite: Component ".concat(component, " does not exist."));
        return false;
      }
      return this._instances[component];
    };
    Instances2.prototype.getInstance = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      if (!this._instances[component][id]) {
        console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
        return;
      }
      return this._instances[component][id];
    };
    Instances2.prototype.destroyAndRemoveInstance = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      this.destroyInstanceObject(component, id);
      this.removeInstance(component, id);
    };
    Instances2.prototype.removeInstance = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      delete this._instances[component][id];
    };
    Instances2.prototype.destroyInstanceObject = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      this._instances[component][id].destroy();
    };
    Instances2.prototype.instanceExists = function(component, id) {
      if (!this._instances[component]) {
        return false;
      }
      if (!this._instances[component][id]) {
        return false;
      }
      return true;
    };
    Instances2.prototype._generateRandomId = function() {
      return Math.random().toString(36).substr(2, 9);
    };
    Instances2.prototype._componentAndInstanceCheck = function(component, id) {
      if (!this._instances[component]) {
        console.warn("Flowbite: Component ".concat(component, " does not exist."));
        return false;
      }
      if (!this._instances[component][id]) {
        console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
        return false;
      }
      return true;
    };
    return Instances2;
  }()
);
var instances = new Instances();
if (typeof window !== "undefined") {
  window.FlowbiteInstances = instances;
}
var __assign$d = function() {
  __assign$d = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$d.apply(this, arguments);
};
var Default$d = {
  alwaysOpen: false,
  activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
  inactiveClasses: "text-gray-500 dark:text-gray-400",
  onOpen: function() {
  },
  onClose: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$d = {
  id: null,
  override: true
};
var Accordion = (
  /** @class */
  function() {
    function Accordion2(accordionEl, items, options, instanceOptions) {
      if (accordionEl === void 0) {
        accordionEl = null;
      }
      if (items === void 0) {
        items = [];
      }
      if (options === void 0) {
        options = Default$d;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$d;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : accordionEl.id;
      this._accordionEl = accordionEl;
      this._items = items;
      this._options = __assign$d(__assign$d({}, Default$d), options);
      this._initialized = false;
      this.init();
      instances.addInstance("Accordion", this, this._instanceId, instanceOptions.override);
    }
    Accordion2.prototype.init = function() {
      var _this = this;
      if (this._items.length && !this._initialized) {
        this._items.forEach(function(item) {
          if (item.active) {
            _this.open(item.id);
          }
          var clickHandler = function() {
            _this.toggle(item.id);
          };
          item.triggerEl.addEventListener("click", clickHandler);
          item.clickHandler = clickHandler;
        });
        this._initialized = true;
      }
    };
    Accordion2.prototype.destroy = function() {
      if (this._items.length && this._initialized) {
        this._items.forEach(function(item) {
          item.triggerEl.removeEventListener("click", item.clickHandler);
          delete item.clickHandler;
        });
        this._initialized = false;
      }
    };
    Accordion2.prototype.removeInstance = function() {
      instances.removeInstance("Accordion", this._instanceId);
    };
    Accordion2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Accordion2.prototype.getItem = function(id) {
      return this._items.filter(function(item) {
        return item.id === id;
      })[0];
    };
    Accordion2.prototype.open = function(id) {
      var _a, _b;
      var _this = this;
      var item = this.getItem(id);
      if (!this._options.alwaysOpen) {
        this._items.map(function(i) {
          var _a2, _b2;
          if (i !== item) {
            (_a2 = i.triggerEl.classList).remove.apply(_a2, _this._options.activeClasses.split(" "));
            (_b2 = i.triggerEl.classList).add.apply(_b2, _this._options.inactiveClasses.split(" "));
            i.targetEl.classList.add("hidden");
            i.triggerEl.setAttribute("aria-expanded", "false");
            i.active = false;
            if (i.iconEl) {
              i.iconEl.classList.add("rotate-180");
            }
          }
        });
      }
      (_a = item.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(" "));
      (_b = item.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(" "));
      item.triggerEl.setAttribute("aria-expanded", "true");
      item.targetEl.classList.remove("hidden");
      item.active = true;
      if (item.iconEl) {
        item.iconEl.classList.remove("rotate-180");
      }
      this._options.onOpen(this, item);
    };
    Accordion2.prototype.toggle = function(id) {
      var item = this.getItem(id);
      if (item.active) {
        this.close(id);
      } else {
        this.open(id);
      }
      this._options.onToggle(this, item);
    };
    Accordion2.prototype.close = function(id) {
      var _a, _b;
      var item = this.getItem(id);
      (_a = item.triggerEl.classList).remove.apply(_a, this._options.activeClasses.split(" "));
      (_b = item.triggerEl.classList).add.apply(_b, this._options.inactiveClasses.split(" "));
      item.targetEl.classList.add("hidden");
      item.triggerEl.setAttribute("aria-expanded", "false");
      item.active = false;
      if (item.iconEl) {
        item.iconEl.classList.add("rotate-180");
      }
      this._options.onClose(this, item);
    };
    Accordion2.prototype.updateOnOpen = function(callback) {
      this._options.onOpen = callback;
    };
    Accordion2.prototype.updateOnClose = function(callback) {
      this._options.onClose = callback;
    };
    Accordion2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Accordion2;
  }()
);
function initAccordions() {
  document.querySelectorAll("[data-accordion]").forEach(function($accordionEl) {
    var alwaysOpen = $accordionEl.getAttribute("data-accordion");
    var activeClasses = $accordionEl.getAttribute("data-active-classes");
    var inactiveClasses = $accordionEl.getAttribute("data-inactive-classes");
    var items = [];
    $accordionEl.querySelectorAll("[data-accordion-target]").forEach(function($triggerEl) {
      if ($triggerEl.closest("[data-accordion]") === $accordionEl) {
        var item = {
          id: $triggerEl.getAttribute("data-accordion-target"),
          triggerEl: $triggerEl,
          targetEl: document.querySelector($triggerEl.getAttribute("data-accordion-target")),
          iconEl: $triggerEl.querySelector("[data-accordion-icon]"),
          active: $triggerEl.getAttribute("aria-expanded") === "true" ? true : false
        };
        items.push(item);
      }
    });
    new Accordion($accordionEl, items, {
      alwaysOpen: alwaysOpen === "open" ? true : false,
      activeClasses: activeClasses ? activeClasses : Default$d.activeClasses,
      inactiveClasses: inactiveClasses ? inactiveClasses : Default$d.inactiveClasses
    });
  });
}
if (typeof window !== "undefined") {
  window.Accordion = Accordion;
  window.initAccordions = initAccordions;
}
var __assign$c = function() {
  __assign$c = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$c.apply(this, arguments);
};
var Default$c = {
  onCollapse: function() {
  },
  onExpand: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$c = {
  id: null,
  override: true
};
var Collapse = (
  /** @class */
  function() {
    function Collapse2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default$c;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$c;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign$c(__assign$c({}, Default$c), options);
      this._visible = false;
      this._initialized = false;
      this.init();
      instances.addInstance("Collapse", this, this._instanceId, instanceOptions.override);
    }
    Collapse2.prototype.init = function() {
      var _this = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        if (this._triggerEl.hasAttribute("aria-expanded")) {
          this._visible = this._triggerEl.getAttribute("aria-expanded") === "true";
        } else {
          this._visible = !this._targetEl.classList.contains("hidden");
        }
        this._clickHandler = function() {
          _this.toggle();
        };
        this._triggerEl.addEventListener("click", this._clickHandler);
        this._initialized = true;
      }
    };
    Collapse2.prototype.destroy = function() {
      if (this._triggerEl && this._initialized) {
        this._triggerEl.removeEventListener("click", this._clickHandler);
        this._initialized = false;
      }
    };
    Collapse2.prototype.removeInstance = function() {
      instances.removeInstance("Collapse", this._instanceId);
    };
    Collapse2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Collapse2.prototype.collapse = function() {
      this._targetEl.classList.add("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "false");
      }
      this._visible = false;
      this._options.onCollapse(this);
    };
    Collapse2.prototype.expand = function() {
      this._targetEl.classList.remove("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "true");
      }
      this._visible = true;
      this._options.onExpand(this);
    };
    Collapse2.prototype.toggle = function() {
      if (this._visible) {
        this.collapse();
      } else {
        this.expand();
      }
      this._options.onToggle(this);
    };
    Collapse2.prototype.updateOnCollapse = function(callback) {
      this._options.onCollapse = callback;
    };
    Collapse2.prototype.updateOnExpand = function(callback) {
      this._options.onExpand = callback;
    };
    Collapse2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Collapse2;
  }()
);
function initCollapses() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function($triggerEl) {
    var targetId = $triggerEl.getAttribute("data-collapse-toggle");
    var $targetEl = document.getElementById(targetId);
    if ($targetEl) {
      if (!instances.instanceExists("Collapse", $targetEl.getAttribute("id"))) {
        new Collapse($targetEl, $triggerEl);
      } else {
        new Collapse($targetEl, $triggerEl, {}, {
          id: $targetEl.getAttribute("id") + "_" + instances._generateRandomId()
        });
      }
    } else {
      console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-collapse-toggle attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Collapse = Collapse;
  window.initCollapses = initCollapses;
}
var __assign$b = function() {
  __assign$b = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$b.apply(this, arguments);
};
var Default$b = {
  defaultPosition: 0,
  indicators: {
    items: [],
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
  },
  interval: 3e3,
  onNext: function() {
  },
  onPrev: function() {
  },
  onChange: function() {
  }
};
var DefaultInstanceOptions$b = {
  id: null,
  override: true
};
var Carousel = (
  /** @class */
  function() {
    function Carousel2(carouselEl, items, options, instanceOptions) {
      if (carouselEl === void 0) {
        carouselEl = null;
      }
      if (items === void 0) {
        items = [];
      }
      if (options === void 0) {
        options = Default$b;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$b;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : carouselEl.id;
      this._carouselEl = carouselEl;
      this._items = items;
      this._options = __assign$b(__assign$b(__assign$b({}, Default$b), options), { indicators: __assign$b(__assign$b({}, Default$b.indicators), options.indicators) });
      this._activeItem = this.getItem(this._options.defaultPosition);
      this._indicators = this._options.indicators.items;
      this._intervalDuration = this._options.interval;
      this._intervalInstance = null;
      this._initialized = false;
      this.init();
      instances.addInstance("Carousel", this, this._instanceId, instanceOptions.override);
    }
    Carousel2.prototype.init = function() {
      var _this = this;
      if (this._items.length && !this._initialized) {
        this._items.map(function(item) {
          item.el.classList.add("absolute", "inset-0", "transition-transform", "transform");
        });
        if (this.getActiveItem()) {
          this.slideTo(this.getActiveItem().position);
        } else {
          this.slideTo(0);
        }
        this._indicators.map(function(indicator, position) {
          indicator.el.addEventListener("click", function() {
            _this.slideTo(position);
          });
        });
        this._initialized = true;
      }
    };
    Carousel2.prototype.destroy = function() {
      if (this._initialized) {
        this._initialized = false;
      }
    };
    Carousel2.prototype.removeInstance = function() {
      instances.removeInstance("Carousel", this._instanceId);
    };
    Carousel2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Carousel2.prototype.getItem = function(position) {
      return this._items[position];
    };
    Carousel2.prototype.slideTo = function(position) {
      var nextItem = this._items[position];
      var rotationItems = {
        left: nextItem.position === 0 ? this._items[this._items.length - 1] : this._items[nextItem.position - 1],
        middle: nextItem,
        right: nextItem.position === this._items.length - 1 ? this._items[0] : this._items[nextItem.position + 1]
      };
      this._rotate(rotationItems);
      this._setActiveItem(nextItem);
      if (this._intervalInstance) {
        this.pause();
        this.cycle();
      }
      this._options.onChange(this);
    };
    Carousel2.prototype.next = function() {
      var activeItem = this.getActiveItem();
      var nextItem = null;
      if (activeItem.position === this._items.length - 1) {
        nextItem = this._items[0];
      } else {
        nextItem = this._items[activeItem.position + 1];
      }
      this.slideTo(nextItem.position);
      this._options.onNext(this);
    };
    Carousel2.prototype.prev = function() {
      var activeItem = this.getActiveItem();
      var prevItem = null;
      if (activeItem.position === 0) {
        prevItem = this._items[this._items.length - 1];
      } else {
        prevItem = this._items[activeItem.position - 1];
      }
      this.slideTo(prevItem.position);
      this._options.onPrev(this);
    };
    Carousel2.prototype._rotate = function(rotationItems) {
      this._items.map(function(item) {
        item.el.classList.add("hidden");
      });
      if (this._items.length === 1) {
        rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
        rotationItems.middle.el.classList.add("translate-x-0", "z-20");
        return;
      }
      rotationItems.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
      rotationItems.left.el.classList.add("-translate-x-full", "z-10");
      rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
      rotationItems.middle.el.classList.add("translate-x-0", "z-30");
      rotationItems.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-30");
      rotationItems.right.el.classList.add("translate-x-full", "z-20");
    };
    Carousel2.prototype.cycle = function() {
      var _this = this;
      if (typeof window !== "undefined") {
        this._intervalInstance = window.setInterval(function() {
          _this.next();
        }, this._intervalDuration);
      }
    };
    Carousel2.prototype.pause = function() {
      clearInterval(this._intervalInstance);
    };
    Carousel2.prototype.getActiveItem = function() {
      return this._activeItem;
    };
    Carousel2.prototype._setActiveItem = function(item) {
      var _a, _b;
      var _this = this;
      this._activeItem = item;
      var position = item.position;
      if (this._indicators.length) {
        this._indicators.map(function(indicator) {
          var _a2, _b2;
          indicator.el.setAttribute("aria-current", "false");
          (_a2 = indicator.el.classList).remove.apply(_a2, _this._options.indicators.activeClasses.split(" "));
          (_b2 = indicator.el.classList).add.apply(_b2, _this._options.indicators.inactiveClasses.split(" "));
        });
        (_a = this._indicators[position].el.classList).add.apply(_a, this._options.indicators.activeClasses.split(" "));
        (_b = this._indicators[position].el.classList).remove.apply(_b, this._options.indicators.inactiveClasses.split(" "));
        this._indicators[position].el.setAttribute("aria-current", "true");
      }
    };
    Carousel2.prototype.updateOnNext = function(callback) {
      this._options.onNext = callback;
    };
    Carousel2.prototype.updateOnPrev = function(callback) {
      this._options.onPrev = callback;
    };
    Carousel2.prototype.updateOnChange = function(callback) {
      this._options.onChange = callback;
    };
    return Carousel2;
  }()
);
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(function($carouselEl) {
    var interval = $carouselEl.getAttribute("data-carousel-interval");
    var slide = $carouselEl.getAttribute("data-carousel") === "slide" ? true : false;
    var items = [];
    var defaultPosition = 0;
    if ($carouselEl.querySelectorAll("[data-carousel-item]").length) {
      Array.from($carouselEl.querySelectorAll("[data-carousel-item]")).map(function($carouselItemEl, position) {
        items.push({
          position,
          el: $carouselItemEl
        });
        if ($carouselItemEl.getAttribute("data-carousel-item") === "active") {
          defaultPosition = position;
        }
      });
    }
    var indicators = [];
    if ($carouselEl.querySelectorAll("[data-carousel-slide-to]").length) {
      Array.from($carouselEl.querySelectorAll("[data-carousel-slide-to]")).map(function($indicatorEl) {
        indicators.push({
          position: parseInt($indicatorEl.getAttribute("data-carousel-slide-to")),
          el: $indicatorEl
        });
      });
    }
    var carousel = new Carousel($carouselEl, items, {
      defaultPosition,
      indicators: {
        items: indicators
      },
      interval: interval ? interval : Default$b.interval
    });
    if (slide) {
      carousel.cycle();
    }
    var carouselNextEl = $carouselEl.querySelector("[data-carousel-next]");
    var carouselPrevEl = $carouselEl.querySelector("[data-carousel-prev]");
    if (carouselNextEl) {
      carouselNextEl.addEventListener("click", function() {
        carousel.next();
      });
    }
    if (carouselPrevEl) {
      carouselPrevEl.addEventListener("click", function() {
        carousel.prev();
      });
    }
  });
}
if (typeof window !== "undefined") {
  window.Carousel = Carousel;
  window.initCarousels = initCarousels;
}
var __assign$a = function() {
  __assign$a = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$a.apply(this, arguments);
};
var Default$a = {
  transition: "transition-opacity",
  duration: 300,
  timing: "ease-out",
  onHide: function() {
  }
};
var DefaultInstanceOptions$a = {
  id: null,
  override: true
};
var Dismiss = (
  /** @class */
  function() {
    function Dismiss2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default$a;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$a;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign$a(__assign$a({}, Default$a), options);
      this._initialized = false;
      this.init();
      instances.addInstance("Dismiss", this, this._instanceId, instanceOptions.override);
    }
    Dismiss2.prototype.init = function() {
      var _this = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._clickHandler = function() {
          _this.hide();
        };
        this._triggerEl.addEventListener("click", this._clickHandler);
        this._initialized = true;
      }
    };
    Dismiss2.prototype.destroy = function() {
      if (this._triggerEl && this._initialized) {
        this._triggerEl.removeEventListener("click", this._clickHandler);
        this._initialized = false;
      }
    };
    Dismiss2.prototype.removeInstance = function() {
      instances.removeInstance("Dismiss", this._instanceId);
    };
    Dismiss2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Dismiss2.prototype.hide = function() {
      var _this = this;
      this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0");
      setTimeout(function() {
        _this._targetEl.classList.add("hidden");
      }, this._options.duration);
      this._options.onHide(this, this._targetEl);
    };
    Dismiss2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    return Dismiss2;
  }()
);
function initDismisses() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function($triggerEl) {
    var targetId = $triggerEl.getAttribute("data-dismiss-target");
    var $dismissEl = document.querySelector(targetId);
    if ($dismissEl) {
      new Dismiss($dismissEl, $triggerEl);
    } else {
      console.error('The dismiss element with id "'.concat(targetId, '" does not exist. Please check the data-dismiss-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Dismiss = Dismiss;
  window.initDismisses = initDismisses;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y3 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y3,
    right: x + width,
    bottom: y3 + height,
    left: x,
    x,
    y: y3
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y3 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y3 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y3 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y: y3
  }) : {
    x,
    y: y3
  };
  x = _ref3.x;
  y3 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y3 -= offsetY - popperRect.height;
      y3 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y: y3
  }, getWindow(popper2)) : {
    x,
    y: y3
  };
  x = _ref4.x;
  y3 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y3 + "px)" : "translate3d(" + x + "px, " + y3 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y3 + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y: y3
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y3 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y: y3
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y3 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y3;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions2;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions2, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m3) {
          return m3.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var __assign$9 = function() {
  __assign$9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$9.apply(this, arguments);
};
var __spreadArray$2 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Default$9 = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  ignoreClickOutsideClass: false,
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$9 = {
  id: null,
  override: true
};
var Dropdown = (
  /** @class */
  function() {
    function Dropdown2(targetElement, triggerElement, options, instanceOptions) {
      if (targetElement === void 0) {
        targetElement = null;
      }
      if (triggerElement === void 0) {
        triggerElement = null;
      }
      if (options === void 0) {
        options = Default$9;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$9;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetElement.id;
      this._targetEl = targetElement;
      this._triggerEl = triggerElement;
      this._options = __assign$9(__assign$9({}, Default$9), options);
      this._popperInstance = null;
      this._visible = false;
      this._initialized = false;
      this.init();
      instances.addInstance("Dropdown", this, this._instanceId, instanceOptions.override);
    }
    Dropdown2.prototype.init = function() {
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._popperInstance = this._createPopperInstance();
        this._setupEventListeners();
        this._initialized = true;
      }
    };
    Dropdown2.prototype.destroy = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      if (this._options.triggerType === "click") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._clickHandler);
        });
      }
      if (this._options.triggerType === "hover") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hoverShowTriggerElHandler);
          _this._targetEl.removeEventListener(ev, _this._hoverShowTargetElHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hoverHideHandler);
          _this._targetEl.removeEventListener(ev, _this._hoverHideHandler);
        });
      }
      this._popperInstance.destroy();
      this._initialized = false;
    };
    Dropdown2.prototype.removeInstance = function() {
      instances.removeInstance("Dropdown", this._instanceId);
    };
    Dropdown2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Dropdown2.prototype._setupEventListeners = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      this._clickHandler = function() {
        _this.toggle();
      };
      if (this._options.triggerType === "click") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._clickHandler);
        });
      }
      this._hoverShowTriggerElHandler = function(ev) {
        if (ev.type === "click") {
          _this.toggle();
        } else {
          setTimeout(function() {
            _this.show();
          }, _this._options.delay);
        }
      };
      this._hoverShowTargetElHandler = function() {
        _this.show();
      };
      this._hoverHideHandler = function() {
        setTimeout(function() {
          if (!_this._targetEl.matches(":hover")) {
            _this.hide();
          }
        }, _this._options.delay);
      };
      if (this._options.triggerType === "hover") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._hoverShowTriggerElHandler);
          _this._targetEl.addEventListener(ev, _this._hoverShowTargetElHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._hoverHideHandler);
          _this._targetEl.addEventListener(ev, _this._hoverHideHandler);
        });
      }
    };
    Dropdown2.prototype._createPopperInstance = function() {
      return createPopper(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [
                this._options.offsetSkidding,
                this._options.offsetDistance
              ]
            }
          }
        ]
      });
    };
    Dropdown2.prototype._setupClickOutsideListener = function() {
      var _this = this;
      this._clickOutsideEventListener = function(ev) {
        _this._handleClickOutside(ev, _this._targetEl);
      };
      document.body.addEventListener("click", this._clickOutsideEventListener, true);
    };
    Dropdown2.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, true);
    };
    Dropdown2.prototype._handleClickOutside = function(ev, targetEl) {
      var clickedEl = ev.target;
      var ignoreClickOutsideClass = this._options.ignoreClickOutsideClass;
      var isIgnored = false;
      if (ignoreClickOutsideClass) {
        var ignoredClickOutsideEls = document.querySelectorAll(".".concat(ignoreClickOutsideClass));
        ignoredClickOutsideEls.forEach(function(el) {
          if (el.contains(clickedEl)) {
            isIgnored = true;
            return;
          }
        });
      }
      if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && !isIgnored && this.isVisible()) {
        this.hide();
      }
    };
    Dropdown2.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "click"],
            hideEvents: ["mouseleave"]
          };
        case "click":
          return {
            showEvents: ["click"],
            hideEvents: []
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["click"],
            hideEvents: []
          };
      }
    };
    Dropdown2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
      this._options.onToggle(this);
    };
    Dropdown2.prototype.isVisible = function() {
      return this._visible;
    };
    Dropdown2.prototype.show = function() {
      this._targetEl.classList.remove("hidden");
      this._targetEl.classList.add("block");
      this._targetEl.removeAttribute("aria-hidden");
      this._popperInstance.setOptions(function(options) {
        return __assign$9(__assign$9({}, options), { modifiers: __spreadArray$2(__spreadArray$2([], options.modifiers, true), [
          { name: "eventListeners", enabled: true }
        ], false) });
      });
      this._setupClickOutsideListener();
      this._popperInstance.update();
      this._visible = true;
      this._options.onShow(this);
    };
    Dropdown2.prototype.hide = function() {
      this._targetEl.classList.remove("block");
      this._targetEl.classList.add("hidden");
      this._targetEl.setAttribute("aria-hidden", "true");
      this._popperInstance.setOptions(function(options) {
        return __assign$9(__assign$9({}, options), { modifiers: __spreadArray$2(__spreadArray$2([], options.modifiers, true), [
          { name: "eventListeners", enabled: false }
        ], false) });
      });
      this._visible = false;
      this._removeClickOutsideListener();
      this._options.onHide(this);
    };
    Dropdown2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Dropdown2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Dropdown2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Dropdown2;
  }()
);
function initDropdowns() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function($triggerEl) {
    var dropdownId = $triggerEl.getAttribute("data-dropdown-toggle");
    var $dropdownEl = document.getElementById(dropdownId);
    if ($dropdownEl) {
      var placement = $triggerEl.getAttribute("data-dropdown-placement");
      var offsetSkidding = $triggerEl.getAttribute("data-dropdown-offset-skidding");
      var offsetDistance = $triggerEl.getAttribute("data-dropdown-offset-distance");
      var triggerType = $triggerEl.getAttribute("data-dropdown-trigger");
      var delay = $triggerEl.getAttribute("data-dropdown-delay");
      var ignoreClickOutsideClass = $triggerEl.getAttribute("data-dropdown-ignore-click-outside-class");
      new Dropdown($dropdownEl, $triggerEl, {
        placement: placement ? placement : Default$9.placement,
        triggerType: triggerType ? triggerType : Default$9.triggerType,
        offsetSkidding: offsetSkidding ? parseInt(offsetSkidding) : Default$9.offsetSkidding,
        offsetDistance: offsetDistance ? parseInt(offsetDistance) : Default$9.offsetDistance,
        delay: delay ? parseInt(delay) : Default$9.delay,
        ignoreClickOutsideClass: ignoreClickOutsideClass ? ignoreClickOutsideClass : Default$9.ignoreClickOutsideClass
      });
    } else {
      console.error('The dropdown element with id "'.concat(dropdownId, '" does not exist. Please check the data-dropdown-toggle attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Dropdown = Dropdown;
  window.initDropdowns = initDropdowns;
}
var __assign$8 = function() {
  __assign$8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$8.apply(this, arguments);
};
var Default$8 = {
  placement: "center",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  backdrop: "dynamic",
  closable: true,
  onHide: function() {
  },
  onShow: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$8 = {
  id: null,
  override: true
};
var Modal = (
  /** @class */
  function() {
    function Modal2(targetEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default$8;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$8;
      }
      this._eventListenerInstances = [];
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._options = __assign$8(__assign$8({}, Default$8), options);
      this._isHidden = true;
      this._backdropEl = null;
      this._initialized = false;
      this.init();
      instances.addInstance("Modal", this, this._instanceId, instanceOptions.override);
    }
    Modal2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && !this._initialized) {
        this._getPlacementClasses().map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._initialized = true;
      }
    };
    Modal2.prototype.destroy = function() {
      if (this._initialized) {
        this.removeAllEventListenerInstances();
        this._destroyBackdropEl();
        this._initialized = false;
      }
    };
    Modal2.prototype.removeInstance = function() {
      instances.removeInstance("Modal", this._instanceId);
    };
    Modal2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Modal2.prototype._createBackdrop = function() {
      var _a;
      if (this._isHidden) {
        var backdropEl = document.createElement("div");
        (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(" "));
        document.querySelector("body").append(backdropEl);
        this._backdropEl = backdropEl;
      }
    };
    Modal2.prototype._destroyBackdropEl = function() {
      if (!this._isHidden && this._backdropEl) {
        this._backdropEl.remove();
        this._backdropEl = null;
      }
    };
    Modal2.prototype._setupModalCloseEventListeners = function() {
      var _this = this;
      if (this._options.backdrop === "dynamic") {
        this._clickOutsideEventListener = function(ev) {
          _this._handleOutsideClick(ev.target);
        };
        this._targetEl.addEventListener("click", this._clickOutsideEventListener, true);
      }
      this._keydownEventListener = function(ev) {
        if (ev.key === "Escape") {
          _this.hide();
        }
      };
      document.body.addEventListener("keydown", this._keydownEventListener, true);
    };
    Modal2.prototype._removeModalCloseEventListeners = function() {
      if (this._options.backdrop === "dynamic") {
        this._targetEl.removeEventListener("click", this._clickOutsideEventListener, true);
      }
      document.body.removeEventListener("keydown", this._keydownEventListener, true);
    };
    Modal2.prototype._handleOutsideClick = function(target) {
      if (target === this._targetEl || target === this._backdropEl && this.isVisible()) {
        this.hide();
      }
    };
    Modal2.prototype._getPlacementClasses = function() {
      switch (this._options.placement) {
        // top
        case "top-left":
          return ["justify-start", "items-start"];
        case "top-center":
          return ["justify-center", "items-start"];
        case "top-right":
          return ["justify-end", "items-start"];
        // center
        case "center-left":
          return ["justify-start", "items-center"];
        case "center":
          return ["justify-center", "items-center"];
        case "center-right":
          return ["justify-end", "items-center"];
        // bottom
        case "bottom-left":
          return ["justify-start", "items-end"];
        case "bottom-center":
          return ["justify-center", "items-end"];
        case "bottom-right":
          return ["justify-end", "items-end"];
        default:
          return ["justify-center", "items-center"];
      }
    };
    Modal2.prototype.toggle = function() {
      if (this._isHidden) {
        this.show();
      } else {
        this.hide();
      }
      this._options.onToggle(this);
    };
    Modal2.prototype.show = function() {
      if (this.isHidden) {
        this._targetEl.classList.add("flex");
        this._targetEl.classList.remove("hidden");
        this._targetEl.setAttribute("aria-modal", "true");
        this._targetEl.setAttribute("role", "dialog");
        this._targetEl.removeAttribute("aria-hidden");
        this._createBackdrop();
        this._isHidden = false;
        if (this._options.closable) {
          this._setupModalCloseEventListeners();
        }
        document.body.classList.add("overflow-hidden");
        this._options.onShow(this);
      }
    };
    Modal2.prototype.hide = function() {
      if (this.isVisible) {
        this._targetEl.classList.add("hidden");
        this._targetEl.classList.remove("flex");
        this._targetEl.setAttribute("aria-hidden", "true");
        this._targetEl.removeAttribute("aria-modal");
        this._targetEl.removeAttribute("role");
        this._destroyBackdropEl();
        this._isHidden = true;
        document.body.classList.remove("overflow-hidden");
        if (this._options.closable) {
          this._removeModalCloseEventListeners();
        }
        this._options.onHide(this);
      }
    };
    Modal2.prototype.isVisible = function() {
      return !this._isHidden;
    };
    Modal2.prototype.isHidden = function() {
      return this._isHidden;
    };
    Modal2.prototype.addEventListenerInstance = function(element, type, handler) {
      this._eventListenerInstances.push({
        element,
        type,
        handler
      });
    };
    Modal2.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(eventListenerInstance) {
        eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
      });
      this._eventListenerInstances = [];
    };
    Modal2.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    };
    Modal2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Modal2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Modal2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Modal2;
  }()
);
function initModals() {
  document.querySelectorAll("[data-modal-target]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-target");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var placement = $modalEl.getAttribute("data-modal-placement");
      var backdrop = $modalEl.getAttribute("data-modal-backdrop");
      new Modal($modalEl, {
        placement: placement ? placement : Default$8.placement,
        backdrop: backdrop ? backdrop : Default$8.backdrop
      });
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
    }
  });
  document.querySelectorAll("[data-modal-toggle]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-toggle");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var modal_1 = instances.getInstance("Modal", modalId);
      if (modal_1) {
        var toggleModal = function() {
          modal_1.toggle();
        };
        $triggerEl.addEventListener("click", toggleModal);
        modal_1.addEventListenerInstance($triggerEl, "click", toggleModal);
      } else {
        console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
      }
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
    }
  });
  document.querySelectorAll("[data-modal-show]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-show");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var modal_2 = instances.getInstance("Modal", modalId);
      if (modal_2) {
        var showModal = function() {
          modal_2.show();
        };
        $triggerEl.addEventListener("click", showModal);
        modal_2.addEventListenerInstance($triggerEl, "click", showModal);
      } else {
        console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
      }
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
    }
  });
  document.querySelectorAll("[data-modal-hide]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-hide");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var modal_3 = instances.getInstance("Modal", modalId);
      if (modal_3) {
        var hideModal = function() {
          modal_3.hide();
        };
        $triggerEl.addEventListener("click", hideModal);
        modal_3.addEventListenerInstance($triggerEl, "click", hideModal);
      } else {
        console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
      }
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
    }
  });
}
if (typeof window !== "undefined") {
  window.Modal = Modal;
  window.initModals = initModals;
}
var __assign$7 = function() {
  __assign$7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$7.apply(this, arguments);
};
var Default$7 = {
  placement: "left",
  bodyScrolling: false,
  backdrop: true,
  edge: false,
  edgeOffset: "bottom-[60px]",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$7 = {
  id: null,
  override: true
};
var Drawer = (
  /** @class */
  function() {
    function Drawer2(targetEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default$7;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$7;
      }
      this._eventListenerInstances = [];
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._options = __assign$7(__assign$7({}, Default$7), options);
      this._visible = false;
      this._initialized = false;
      this.init();
      instances.addInstance("Drawer", this, this._instanceId, instanceOptions.override);
    }
    Drawer2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && !this._initialized) {
        this._targetEl.setAttribute("aria-hidden", "true");
        this._targetEl.classList.add("transition-transform");
        this._getPlacementClasses(this._options.placement).base.map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._handleEscapeKey = function(event) {
          if (event.key === "Escape") {
            if (_this.isVisible()) {
              _this.hide();
            }
          }
        };
        document.addEventListener("keydown", this._handleEscapeKey);
        this._initialized = true;
      }
    };
    Drawer2.prototype.destroy = function() {
      if (this._initialized) {
        this.removeAllEventListenerInstances();
        this._destroyBackdropEl();
        document.removeEventListener("keydown", this._handleEscapeKey);
        this._initialized = false;
      }
    };
    Drawer2.prototype.removeInstance = function() {
      instances.removeInstance("Drawer", this._instanceId);
    };
    Drawer2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Drawer2.prototype.hide = function() {
      var _this = this;
      if (this._options.edge) {
        this._getPlacementClasses(this._options.placement + "-edge").active.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
        this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(c) {
          _this._targetEl.classList.add(c);
        });
      } else {
        this._getPlacementClasses(this._options.placement).active.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
        this._getPlacementClasses(this._options.placement).inactive.map(function(c) {
          _this._targetEl.classList.add(c);
        });
      }
      this._targetEl.setAttribute("aria-hidden", "true");
      this._targetEl.removeAttribute("aria-modal");
      this._targetEl.removeAttribute("role");
      if (!this._options.bodyScrolling) {
        document.body.classList.remove("overflow-hidden");
      }
      if (this._options.backdrop) {
        this._destroyBackdropEl();
      }
      this._visible = false;
      this._options.onHide(this);
    };
    Drawer2.prototype.show = function() {
      var _this = this;
      if (this._options.edge) {
        this._getPlacementClasses(this._options.placement + "-edge").active.map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
      } else {
        this._getPlacementClasses(this._options.placement).active.map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._getPlacementClasses(this._options.placement).inactive.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
      }
      this._targetEl.setAttribute("aria-modal", "true");
      this._targetEl.setAttribute("role", "dialog");
      this._targetEl.removeAttribute("aria-hidden");
      if (!this._options.bodyScrolling) {
        document.body.classList.add("overflow-hidden");
      }
      if (this._options.backdrop) {
        this._createBackdrop();
      }
      this._visible = true;
      this._options.onShow(this);
    };
    Drawer2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
    };
    Drawer2.prototype._createBackdrop = function() {
      var _a;
      var _this = this;
      if (!this._visible) {
        var backdropEl = document.createElement("div");
        backdropEl.setAttribute("drawer-backdrop", "");
        (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(" "));
        document.querySelector("body").append(backdropEl);
        backdropEl.addEventListener("click", function() {
          _this.hide();
        });
      }
    };
    Drawer2.prototype._destroyBackdropEl = function() {
      if (this._visible && document.querySelector("[drawer-backdrop]") !== null) {
        document.querySelector("[drawer-backdrop]").remove();
      }
    };
    Drawer2.prototype._getPlacementClasses = function(placement) {
      switch (placement) {
        case "top":
          return {
            base: ["top-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["-translate-y-full"]
          };
        case "right":
          return {
            base: ["right-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-x-full"]
          };
        case "bottom":
          return {
            base: ["bottom-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full"]
          };
        case "left":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
        case "bottom-edge":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full", this._options.edgeOffset]
          };
        default:
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
      }
    };
    Drawer2.prototype.isHidden = function() {
      return !this._visible;
    };
    Drawer2.prototype.isVisible = function() {
      return this._visible;
    };
    Drawer2.prototype.addEventListenerInstance = function(element, type, handler) {
      this._eventListenerInstances.push({
        element,
        type,
        handler
      });
    };
    Drawer2.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(eventListenerInstance) {
        eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
      });
      this._eventListenerInstances = [];
    };
    Drawer2.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    };
    Drawer2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Drawer2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Drawer2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Drawer2;
  }()
);
function initDrawers() {
  document.querySelectorAll("[data-drawer-target]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-target");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var placement = $triggerEl.getAttribute("data-drawer-placement");
      var bodyScrolling = $triggerEl.getAttribute("data-drawer-body-scrolling");
      var backdrop = $triggerEl.getAttribute("data-drawer-backdrop");
      var edge = $triggerEl.getAttribute("data-drawer-edge");
      var edgeOffset = $triggerEl.getAttribute("data-drawer-edge-offset");
      new Drawer($drawerEl, {
        placement: placement ? placement : Default$7.placement,
        bodyScrolling: bodyScrolling ? bodyScrolling === "true" ? true : false : Default$7.bodyScrolling,
        backdrop: backdrop ? backdrop === "true" ? true : false : Default$7.backdrop,
        edge: edge ? edge === "true" ? true : false : Default$7.edge,
        edgeOffset: edgeOffset ? edgeOffset : Default$7.edgeOffset
      });
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }
  });
  document.querySelectorAll("[data-drawer-toggle]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-toggle");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var drawer_1 = instances.getInstance("Drawer", drawerId);
      if (drawer_1) {
        var toggleDrawer = function() {
          drawer_1.toggle();
        };
        $triggerEl.addEventListener("click", toggleDrawer);
        drawer_1.addEventListenerInstance($triggerEl, "click", toggleDrawer);
      } else {
        console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
      }
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }
  });
  document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-dismiss") ? $triggerEl.getAttribute("data-drawer-dismiss") : $triggerEl.getAttribute("data-drawer-hide");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var drawer_2 = instances.getInstance("Drawer", drawerId);
      if (drawer_2) {
        var hideDrawer = function() {
          drawer_2.hide();
        };
        $triggerEl.addEventListener("click", hideDrawer);
        drawer_2.addEventListenerInstance($triggerEl, "click", hideDrawer);
      } else {
        console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
      }
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
    }
  });
  document.querySelectorAll("[data-drawer-show]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-show");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var drawer_3 = instances.getInstance("Drawer", drawerId);
      if (drawer_3) {
        var showDrawer = function() {
          drawer_3.show();
        };
        $triggerEl.addEventListener("click", showDrawer);
        drawer_3.addEventListenerInstance($triggerEl, "click", showDrawer);
      } else {
        console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
      }
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }
  });
}
if (typeof window !== "undefined") {
  window.Drawer = Drawer;
  window.initDrawers = initDrawers;
}
var __assign$6 = function() {
  __assign$6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$6.apply(this, arguments);
};
var Default$6 = {
  defaultTabId: null,
  activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
  inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
  onShow: function() {
  }
};
var DefaultInstanceOptions$6 = {
  id: null,
  override: true
};
var Tabs = (
  /** @class */
  function() {
    function Tabs2(tabsEl, items, options, instanceOptions) {
      if (tabsEl === void 0) {
        tabsEl = null;
      }
      if (items === void 0) {
        items = [];
      }
      if (options === void 0) {
        options = Default$6;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$6;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : tabsEl.id;
      this._tabsEl = tabsEl;
      this._items = items;
      this._activeTab = options ? this.getTab(options.defaultTabId) : null;
      this._options = __assign$6(__assign$6({}, Default$6), options);
      this._initialized = false;
      this.init();
      instances.addInstance("Tabs", this, this._instanceId, instanceOptions.override);
    }
    Tabs2.prototype.init = function() {
      var _this = this;
      if (this._items.length && !this._initialized) {
        if (!this._activeTab) {
          this.setActiveTab(this._items[0]);
        }
        this.show(this._activeTab.id, true);
        this._items.map(function(tab) {
          tab.triggerEl.addEventListener("click", function(event) {
            event.preventDefault();
            _this.show(tab.id);
          });
        });
      }
    };
    Tabs2.prototype.destroy = function() {
      if (this._initialized) {
        this._initialized = false;
      }
    };
    Tabs2.prototype.removeInstance = function() {
      this.destroy();
      instances.removeInstance("Tabs", this._instanceId);
    };
    Tabs2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Tabs2.prototype.getActiveTab = function() {
      return this._activeTab;
    };
    Tabs2.prototype.setActiveTab = function(tab) {
      this._activeTab = tab;
    };
    Tabs2.prototype.getTab = function(id) {
      return this._items.filter(function(t) {
        return t.id === id;
      })[0];
    };
    Tabs2.prototype.show = function(id, forceShow) {
      var _a, _b;
      var _this = this;
      if (forceShow === void 0) {
        forceShow = false;
      }
      var tab = this.getTab(id);
      if (tab === this._activeTab && !forceShow) {
        return;
      }
      this._items.map(function(t) {
        var _a2, _b2;
        if (t !== tab) {
          (_a2 = t.triggerEl.classList).remove.apply(_a2, _this._options.activeClasses.split(" "));
          (_b2 = t.triggerEl.classList).add.apply(_b2, _this._options.inactiveClasses.split(" "));
          t.targetEl.classList.add("hidden");
          t.triggerEl.setAttribute("aria-selected", "false");
        }
      });
      (_a = tab.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(" "));
      (_b = tab.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(" "));
      tab.triggerEl.setAttribute("aria-selected", "true");
      tab.targetEl.classList.remove("hidden");
      this.setActiveTab(tab);
      this._options.onShow(this, tab);
    };
    Tabs2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    return Tabs2;
  }()
);
function initTabs() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function($parentEl) {
    var tabItems = [];
    var activeClasses = $parentEl.getAttribute("data-tabs-active-classes");
    var inactiveClasses = $parentEl.getAttribute("data-tabs-inactive-classes");
    var defaultTabId = null;
    $parentEl.querySelectorAll('[role="tab"]').forEach(function($triggerEl) {
      var isActive = $triggerEl.getAttribute("aria-selected") === "true";
      var tab = {
        id: $triggerEl.getAttribute("data-tabs-target"),
        triggerEl: $triggerEl,
        targetEl: document.querySelector($triggerEl.getAttribute("data-tabs-target"))
      };
      tabItems.push(tab);
      if (isActive) {
        defaultTabId = tab.id;
      }
    });
    new Tabs($parentEl, tabItems, {
      defaultTabId,
      activeClasses: activeClasses ? activeClasses : Default$6.activeClasses,
      inactiveClasses: inactiveClasses ? inactiveClasses : Default$6.inactiveClasses
    });
  });
}
if (typeof window !== "undefined") {
  window.Tabs = Tabs;
  window.initTabs = initTabs;
}
var __assign$5 = function() {
  __assign$5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$5.apply(this, arguments);
};
var __spreadArray$1 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Default$5 = {
  placement: "top",
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$5 = {
  id: null,
  override: true
};
var Tooltip = (
  /** @class */
  function() {
    function Tooltip2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default$5;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$5;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign$5(__assign$5({}, Default$5), options);
      this._popperInstance = null;
      this._visible = false;
      this._initialized = false;
      this.init();
      instances.addInstance("Tooltip", this, this._instanceId, instanceOptions.override);
    }
    Tooltip2.prototype.init = function() {
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._setupEventListeners();
        this._popperInstance = this._createPopperInstance();
        this._initialized = true;
      }
    };
    Tooltip2.prototype.destroy = function() {
      var _this = this;
      if (this._initialized) {
        var triggerEvents = this._getTriggerEvents();
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._showHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hideHandler);
        });
        this._removeKeydownListener();
        this._removeClickOutsideListener();
        if (this._popperInstance) {
          this._popperInstance.destroy();
        }
        this._initialized = false;
      }
    };
    Tooltip2.prototype.removeInstance = function() {
      instances.removeInstance("Tooltip", this._instanceId);
    };
    Tooltip2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Tooltip2.prototype._setupEventListeners = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      this._showHandler = function() {
        _this.show();
      };
      this._hideHandler = function() {
        _this.hide();
      };
      triggerEvents.showEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._showHandler);
      });
      triggerEvents.hideEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._hideHandler);
      });
    };
    Tooltip2.prototype._createPopperInstance = function() {
      return createPopper(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          }
        ]
      });
    };
    Tooltip2.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    };
    Tooltip2.prototype._setupKeydownListener = function() {
      var _this = this;
      this._keydownEventListener = function(ev) {
        if (ev.key === "Escape") {
          _this.hide();
        }
      };
      document.body.addEventListener("keydown", this._keydownEventListener, true);
    };
    Tooltip2.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, true);
    };
    Tooltip2.prototype._setupClickOutsideListener = function() {
      var _this = this;
      this._clickOutsideEventListener = function(ev) {
        _this._handleClickOutside(ev, _this._targetEl);
      };
      document.body.addEventListener("click", this._clickOutsideEventListener, true);
    };
    Tooltip2.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, true);
    };
    Tooltip2.prototype._handleClickOutside = function(ev, targetEl) {
      var clickedEl = ev.target;
      if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this.isVisible()) {
        this.hide();
      }
    };
    Tooltip2.prototype.isVisible = function() {
      return this._visible;
    };
    Tooltip2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
    };
    Tooltip2.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible");
      this._targetEl.classList.add("opacity-100", "visible");
      this._popperInstance.setOptions(function(options) {
        return __assign$5(__assign$5({}, options), { modifiers: __spreadArray$1(__spreadArray$1([], options.modifiers, true), [
          { name: "eventListeners", enabled: true }
        ], false) });
      });
      this._setupClickOutsideListener();
      this._setupKeydownListener();
      this._popperInstance.update();
      this._visible = true;
      this._options.onShow(this);
    };
    Tooltip2.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible");
      this._targetEl.classList.add("opacity-0", "invisible");
      this._popperInstance.setOptions(function(options) {
        return __assign$5(__assign$5({}, options), { modifiers: __spreadArray$1(__spreadArray$1([], options.modifiers, true), [
          { name: "eventListeners", enabled: false }
        ], false) });
      });
      this._removeClickOutsideListener();
      this._removeKeydownListener();
      this._visible = false;
      this._options.onHide(this);
    };
    Tooltip2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Tooltip2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Tooltip2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Tooltip2;
  }()
);
function initTooltips() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function($triggerEl) {
    var tooltipId = $triggerEl.getAttribute("data-tooltip-target");
    var $tooltipEl = document.getElementById(tooltipId);
    if ($tooltipEl) {
      var triggerType = $triggerEl.getAttribute("data-tooltip-trigger");
      var placement = $triggerEl.getAttribute("data-tooltip-placement");
      new Tooltip($tooltipEl, $triggerEl, {
        placement: placement ? placement : Default$5.placement,
        triggerType: triggerType ? triggerType : Default$5.triggerType
      });
    } else {
      console.error('The tooltip element with id "'.concat(tooltipId, '" does not exist. Please check the data-tooltip-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Tooltip = Tooltip;
  window.initTooltips = initTooltips;
}
var __assign$4 = function() {
  __assign$4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$4.apply(this, arguments);
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Default$4 = {
  placement: "top",
  offset: 10,
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$4 = {
  id: null,
  override: true
};
var Popover = (
  /** @class */
  function() {
    function Popover2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default$4;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$4;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign$4(__assign$4({}, Default$4), options);
      this._popperInstance = null;
      this._visible = false;
      this._initialized = false;
      this.init();
      instances.addInstance("Popover", this, instanceOptions.id ? instanceOptions.id : this._targetEl.id, instanceOptions.override);
    }
    Popover2.prototype.init = function() {
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._setupEventListeners();
        this._popperInstance = this._createPopperInstance();
        this._initialized = true;
      }
    };
    Popover2.prototype.destroy = function() {
      var _this = this;
      if (this._initialized) {
        var triggerEvents = this._getTriggerEvents();
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._showHandler);
          _this._targetEl.removeEventListener(ev, _this._showHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hideHandler);
          _this._targetEl.removeEventListener(ev, _this._hideHandler);
        });
        this._removeKeydownListener();
        this._removeClickOutsideListener();
        if (this._popperInstance) {
          this._popperInstance.destroy();
        }
        this._initialized = false;
      }
    };
    Popover2.prototype.removeInstance = function() {
      instances.removeInstance("Popover", this._instanceId);
    };
    Popover2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Popover2.prototype._setupEventListeners = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      this._showHandler = function() {
        _this.show();
      };
      this._hideHandler = function() {
        setTimeout(function() {
          if (!_this._targetEl.matches(":hover")) {
            _this.hide();
          }
        }, 100);
      };
      triggerEvents.showEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._showHandler);
        _this._targetEl.addEventListener(ev, _this._showHandler);
      });
      triggerEvents.hideEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._hideHandler);
        _this._targetEl.addEventListener(ev, _this._hideHandler);
      });
    };
    Popover2.prototype._createPopperInstance = function() {
      return createPopper(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, this._options.offset]
            }
          }
        ]
      });
    };
    Popover2.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    };
    Popover2.prototype._setupKeydownListener = function() {
      var _this = this;
      this._keydownEventListener = function(ev) {
        if (ev.key === "Escape") {
          _this.hide();
        }
      };
      document.body.addEventListener("keydown", this._keydownEventListener, true);
    };
    Popover2.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, true);
    };
    Popover2.prototype._setupClickOutsideListener = function() {
      var _this = this;
      this._clickOutsideEventListener = function(ev) {
        _this._handleClickOutside(ev, _this._targetEl);
      };
      document.body.addEventListener("click", this._clickOutsideEventListener, true);
    };
    Popover2.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, true);
    };
    Popover2.prototype._handleClickOutside = function(ev, targetEl) {
      var clickedEl = ev.target;
      if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this.isVisible()) {
        this.hide();
      }
    };
    Popover2.prototype.isVisible = function() {
      return this._visible;
    };
    Popover2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
      this._options.onToggle(this);
    };
    Popover2.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible");
      this._targetEl.classList.add("opacity-100", "visible");
      this._popperInstance.setOptions(function(options) {
        return __assign$4(__assign$4({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
          { name: "eventListeners", enabled: true }
        ], false) });
      });
      this._setupClickOutsideListener();
      this._setupKeydownListener();
      this._popperInstance.update();
      this._visible = true;
      this._options.onShow(this);
    };
    Popover2.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible");
      this._targetEl.classList.add("opacity-0", "invisible");
      this._popperInstance.setOptions(function(options) {
        return __assign$4(__assign$4({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
          { name: "eventListeners", enabled: false }
        ], false) });
      });
      this._removeClickOutsideListener();
      this._removeKeydownListener();
      this._visible = false;
      this._options.onHide(this);
    };
    Popover2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Popover2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Popover2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Popover2;
  }()
);
function initPopovers() {
  document.querySelectorAll("[data-popover-target]").forEach(function($triggerEl) {
    var popoverID = $triggerEl.getAttribute("data-popover-target");
    var $popoverEl = document.getElementById(popoverID);
    if ($popoverEl) {
      var triggerType = $triggerEl.getAttribute("data-popover-trigger");
      var placement = $triggerEl.getAttribute("data-popover-placement");
      var offset2 = $triggerEl.getAttribute("data-popover-offset");
      new Popover($popoverEl, $triggerEl, {
        placement: placement ? placement : Default$4.placement,
        offset: offset2 ? parseInt(offset2) : Default$4.offset,
        triggerType: triggerType ? triggerType : Default$4.triggerType
      });
    } else {
      console.error('The popover element with id "'.concat(popoverID, '" does not exist. Please check the data-popover-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Popover = Popover;
  window.initPopovers = initPopovers;
}
var __assign$3 = function() {
  __assign$3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$3.apply(this, arguments);
};
var Default$3 = {
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions$3 = {
  id: null,
  override: true
};
var Dial = (
  /** @class */
  function() {
    function Dial2(parentEl, triggerEl, targetEl, options, instanceOptions) {
      if (parentEl === void 0) {
        parentEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default$3;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$3;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._parentEl = parentEl;
      this._triggerEl = triggerEl;
      this._targetEl = targetEl;
      this._options = __assign$3(__assign$3({}, Default$3), options);
      this._visible = false;
      this._initialized = false;
      this.init();
      instances.addInstance("Dial", this, this._instanceId, instanceOptions.override);
    }
    Dial2.prototype.init = function() {
      var _this = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
        this._showEventHandler = function() {
          _this.show();
        };
        triggerEventTypes.showEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._showEventHandler);
          _this._targetEl.addEventListener(ev, _this._showEventHandler);
        });
        this._hideEventHandler = function() {
          if (!_this._parentEl.matches(":hover")) {
            _this.hide();
          }
        };
        triggerEventTypes.hideEvents.forEach(function(ev) {
          _this._parentEl.addEventListener(ev, _this._hideEventHandler);
        });
        this._initialized = true;
      }
    };
    Dial2.prototype.destroy = function() {
      var _this = this;
      if (this._initialized) {
        var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
        triggerEventTypes.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._showEventHandler);
          _this._targetEl.removeEventListener(ev, _this._showEventHandler);
        });
        triggerEventTypes.hideEvents.forEach(function(ev) {
          _this._parentEl.removeEventListener(ev, _this._hideEventHandler);
        });
        this._initialized = false;
      }
    };
    Dial2.prototype.removeInstance = function() {
      instances.removeInstance("Dial", this._instanceId);
    };
    Dial2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Dial2.prototype.hide = function() {
      this._targetEl.classList.add("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "false");
      }
      this._visible = false;
      this._options.onHide(this);
    };
    Dial2.prototype.show = function() {
      this._targetEl.classList.remove("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "true");
      }
      this._visible = true;
      this._options.onShow(this);
    };
    Dial2.prototype.toggle = function() {
      if (this._visible) {
        this.hide();
      } else {
        this.show();
      }
    };
    Dial2.prototype.isHidden = function() {
      return !this._visible;
    };
    Dial2.prototype.isVisible = function() {
      return this._visible;
    };
    Dial2.prototype._getTriggerEventTypes = function(triggerType) {
      switch (triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    };
    Dial2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Dial2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Dial2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Dial2;
  }()
);
function initDials() {
  document.querySelectorAll("[data-dial-init]").forEach(function($parentEl) {
    var $triggerEl = $parentEl.querySelector("[data-dial-toggle]");
    if ($triggerEl) {
      var dialId = $triggerEl.getAttribute("data-dial-toggle");
      var $dialEl = document.getElementById(dialId);
      if ($dialEl) {
        var triggerType = $triggerEl.getAttribute("data-dial-trigger");
        new Dial($parentEl, $triggerEl, $dialEl, {
          triggerType: triggerType ? triggerType : Default$3.triggerType
        });
      } else {
        console.error("Dial with id ".concat(dialId, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"));
      }
    } else {
      console.error("Dial with id ".concat($parentEl.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
    }
  });
}
if (typeof window !== "undefined") {
  window.Dial = Dial;
  window.initDials = initDials;
}
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
var Default$2 = {
  minValue: null,
  maxValue: null,
  onIncrement: function() {
  },
  onDecrement: function() {
  }
};
var DefaultInstanceOptions$2 = {
  id: null,
  override: true
};
var InputCounter = (
  /** @class */
  function() {
    function InputCounter2(targetEl, incrementEl, decrementEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (incrementEl === void 0) {
        incrementEl = null;
      }
      if (decrementEl === void 0) {
        decrementEl = null;
      }
      if (options === void 0) {
        options = Default$2;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$2;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._incrementEl = incrementEl;
      this._decrementEl = decrementEl;
      this._options = __assign$2(__assign$2({}, Default$2), options);
      this._initialized = false;
      this.init();
      instances.addInstance("InputCounter", this, this._instanceId, instanceOptions.override);
    }
    InputCounter2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && !this._initialized) {
        this._inputHandler = function(event) {
          {
            var target = event.target;
            if (!/^\d*$/.test(target.value)) {
              target.value = target.value.replace(/[^\d]/g, "");
            }
            if (_this._options.maxValue !== null && parseInt(target.value) > _this._options.maxValue) {
              target.value = _this._options.maxValue.toString();
            }
            if (_this._options.minValue !== null && parseInt(target.value) < _this._options.minValue) {
              target.value = _this._options.minValue.toString();
            }
          }
        };
        this._incrementClickHandler = function() {
          _this.increment();
        };
        this._decrementClickHandler = function() {
          _this.decrement();
        };
        this._targetEl.addEventListener("input", this._inputHandler);
        if (this._incrementEl) {
          this._incrementEl.addEventListener("click", this._incrementClickHandler);
        }
        if (this._decrementEl) {
          this._decrementEl.addEventListener("click", this._decrementClickHandler);
        }
        this._initialized = true;
      }
    };
    InputCounter2.prototype.destroy = function() {
      if (this._targetEl && this._initialized) {
        this._targetEl.removeEventListener("input", this._inputHandler);
        if (this._incrementEl) {
          this._incrementEl.removeEventListener("click", this._incrementClickHandler);
        }
        if (this._decrementEl) {
          this._decrementEl.removeEventListener("click", this._decrementClickHandler);
        }
        this._initialized = false;
      }
    };
    InputCounter2.prototype.removeInstance = function() {
      instances.removeInstance("InputCounter", this._instanceId);
    };
    InputCounter2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    InputCounter2.prototype.getCurrentValue = function() {
      return parseInt(this._targetEl.value) || 0;
    };
    InputCounter2.prototype.increment = function() {
      if (this._options.maxValue !== null && this.getCurrentValue() >= this._options.maxValue) {
        return;
      }
      this._targetEl.value = (this.getCurrentValue() + 1).toString();
      this._options.onIncrement(this);
    };
    InputCounter2.prototype.decrement = function() {
      if (this._options.minValue !== null && this.getCurrentValue() <= this._options.minValue) {
        return;
      }
      this._targetEl.value = (this.getCurrentValue() - 1).toString();
      this._options.onDecrement(this);
    };
    InputCounter2.prototype.updateOnIncrement = function(callback) {
      this._options.onIncrement = callback;
    };
    InputCounter2.prototype.updateOnDecrement = function(callback) {
      this._options.onDecrement = callback;
    };
    return InputCounter2;
  }()
);
function initInputCounters() {
  document.querySelectorAll("[data-input-counter]").forEach(function($targetEl) {
    var targetId = $targetEl.id;
    var $incrementEl = document.querySelector('[data-input-counter-increment="' + targetId + '"]');
    var $decrementEl = document.querySelector('[data-input-counter-decrement="' + targetId + '"]');
    var minValue = $targetEl.getAttribute("data-input-counter-min");
    var maxValue = $targetEl.getAttribute("data-input-counter-max");
    if ($targetEl) {
      if (!instances.instanceExists("InputCounter", $targetEl.getAttribute("id"))) {
        new InputCounter($targetEl, $incrementEl ? $incrementEl : null, $decrementEl ? $decrementEl : null, {
          minValue: minValue ? parseInt(minValue) : null,
          maxValue: maxValue ? parseInt(maxValue) : null
        });
      }
    } else {
      console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-input-counter attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.InputCounter = InputCounter;
  window.initInputCounters = initInputCounters;
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var Default$1 = {
  htmlEntities: false,
  contentType: "input",
  onCopy: function() {
  }
};
var DefaultInstanceOptions$1 = {
  id: null,
  override: true
};
var CopyClipboard = (
  /** @class */
  function() {
    function CopyClipboard2(triggerEl, targetEl, options, instanceOptions) {
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default$1;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions$1;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._triggerEl = triggerEl;
      this._targetEl = targetEl;
      this._options = __assign$1(__assign$1({}, Default$1), options);
      this._initialized = false;
      this.init();
      instances.addInstance("CopyClipboard", this, this._instanceId, instanceOptions.override);
    }
    CopyClipboard2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && this._triggerEl && !this._initialized) {
        this._triggerElClickHandler = function() {
          _this.copy();
        };
        if (this._triggerEl) {
          this._triggerEl.addEventListener("click", this._triggerElClickHandler);
        }
        this._initialized = true;
      }
    };
    CopyClipboard2.prototype.destroy = function() {
      if (this._triggerEl && this._targetEl && this._initialized) {
        if (this._triggerEl) {
          this._triggerEl.removeEventListener("click", this._triggerElClickHandler);
        }
        this._initialized = false;
      }
    };
    CopyClipboard2.prototype.removeInstance = function() {
      instances.removeInstance("CopyClipboard", this._instanceId);
    };
    CopyClipboard2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    CopyClipboard2.prototype.getTargetValue = function() {
      if (this._options.contentType === "input") {
        return this._targetEl.value;
      }
      if (this._options.contentType === "innerHTML") {
        return this._targetEl.innerHTML;
      }
      if (this._options.contentType === "textContent") {
        return this._targetEl.textContent.replace(/\s+/g, " ").trim();
      }
    };
    CopyClipboard2.prototype.copy = function() {
      var textToCopy = this.getTargetValue();
      if (this._options.htmlEntities) {
        textToCopy = this.decodeHTML(textToCopy);
      }
      var tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
      this._options.onCopy(this);
      return textToCopy;
    };
    CopyClipboard2.prototype.decodeHTML = function(html) {
      var textarea = document.createElement("textarea");
      textarea.innerHTML = html;
      return textarea.textContent;
    };
    CopyClipboard2.prototype.updateOnCopyCallback = function(callback) {
      this._options.onCopy = callback;
    };
    return CopyClipboard2;
  }()
);
function initCopyClipboards() {
  document.querySelectorAll("[data-copy-to-clipboard-target]").forEach(function($triggerEl) {
    var targetId = $triggerEl.getAttribute("data-copy-to-clipboard-target");
    var $targetEl = document.getElementById(targetId);
    var contentType = $triggerEl.getAttribute("data-copy-to-clipboard-content-type");
    var htmlEntities = $triggerEl.getAttribute("data-copy-to-clipboard-html-entities");
    if ($targetEl) {
      if (!instances.instanceExists("CopyClipboard", $targetEl.getAttribute("id"))) {
        new CopyClipboard($triggerEl, $targetEl, {
          htmlEntities: htmlEntities && htmlEntities === "true" ? true : Default$1.htmlEntities,
          contentType: contentType ? contentType : Default$1.contentType
        });
      }
    } else {
      console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-copy-to-clipboard-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.CopyClipboard = CopyClipboard;
  window.initClipboards = initCopyClipboards;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); ) ;
  return t;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function lastItemOf(arr) {
  return arr[arr.length - 1];
}
function pushUnique(arr) {
  for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }
  items.forEach(function(item) {
    if (arr.includes(item)) {
      return;
    }
    arr.push(item);
  });
  return arr;
}
function stringToArray(str, separator) {
  return str ? str.split(separator) : [];
}
function isInRange(testVal, min2, max2) {
  var minOK = min2 === void 0 || testVal >= min2;
  var maxOK = max2 === void 0 || testVal <= max2;
  return minOK && maxOK;
}
function limitToRange(val, min2, max2) {
  if (val < min2) {
    return min2;
  }
  if (val > max2) {
    return max2;
  }
  return val;
}
function createTagRepeat(tagName, repeat) {
  var attributes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var html = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
  var openTagSrc = Object.keys(attributes).reduce(function(src, attr) {
    var val = attributes[attr];
    if (typeof val === "function") {
      val = val(index);
    }
    return "".concat(src, " ").concat(attr, '="').concat(val, '"');
  }, tagName);
  html += "<".concat(openTagSrc, "></").concat(tagName, ">");
  var next = index + 1;
  return next < repeat ? createTagRepeat(tagName, repeat, attributes, next, html) : html;
}
function optimizeTemplateHTML(html) {
  return html.replace(/>\s+/g, ">").replace(/\s+</, "<");
}
function stripTime(timeValue) {
  return new Date(timeValue).setHours(0, 0, 0, 0);
}
function today() {
  return (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
}
function dateValue() {
  switch (arguments.length) {
    case 0:
      return today();
    case 1:
      return stripTime(arguments.length <= 0 ? void 0 : arguments[0]);
  }
  var newDate = /* @__PURE__ */ new Date(0);
  newDate.setFullYear.apply(newDate, arguments);
  return newDate.setHours(0, 0, 0, 0);
}
function addDays(date, amount) {
  var newDate = new Date(date);
  return newDate.setDate(newDate.getDate() + amount);
}
function addWeeks(date, amount) {
  return addDays(date, amount * 7);
}
function addMonths(date, amount) {
  var newDate = new Date(date);
  var monthsToSet = newDate.getMonth() + amount;
  var expectedMonth = monthsToSet % 12;
  if (expectedMonth < 0) {
    expectedMonth += 12;
  }
  var time = newDate.setMonth(monthsToSet);
  return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}
function addYears(date, amount) {
  var newDate = new Date(date);
  var expectedMonth = newDate.getMonth();
  var time = newDate.setFullYear(newDate.getFullYear() + amount);
  return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}
function dayDiff(day, from) {
  return (day - from + 7) % 7;
}
function dayOfTheWeekOf(baseDate, dayOfWeek) {
  var weekStart = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var baseDay = new Date(baseDate).getDay();
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}
function getWeek(date) {
  var thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
  var firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
  return Math.round((thuOfTheWeek - firstThu) / 6048e5) + 1;
}
function startOfYearPeriod(date, years) {
  var year = new Date(date).getFullYear();
  return Math.floor(year / years) * years;
}
var reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
var reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
var knownFormats = {};
var parseFns = {
  y: function y(date, year) {
    return new Date(date).setFullYear(parseInt(year, 10));
  },
  m: function m(date, month, locale) {
    var newDate = new Date(date);
    var monthIndex = parseInt(month, 10) - 1;
    if (isNaN(monthIndex)) {
      if (!month) {
        return NaN;
      }
      var monthName = month.toLowerCase();
      var compareNames = function compareNames2(name) {
        return name.toLowerCase().startsWith(monthName);
      };
      monthIndex = locale.monthsShort.findIndex(compareNames);
      if (monthIndex < 0) {
        monthIndex = locale.months.findIndex(compareNames);
      }
      if (monthIndex < 0) {
        return NaN;
      }
    }
    newDate.setMonth(monthIndex);
    return newDate.getMonth() !== normalizeMonth(monthIndex) ? newDate.setDate(0) : newDate.getTime();
  },
  d: function d(date, day) {
    return new Date(date).setDate(parseInt(day, 10));
  }
};
var formatFns = {
  d: function d2(date) {
    return date.getDate();
  },
  dd: function dd(date) {
    return padZero(date.getDate(), 2);
  },
  D: function D(date, locale) {
    return locale.daysShort[date.getDay()];
  },
  DD: function DD(date, locale) {
    return locale.days[date.getDay()];
  },
  m: function m2(date) {
    return date.getMonth() + 1;
  },
  mm: function mm(date) {
    return padZero(date.getMonth() + 1, 2);
  },
  M: function M(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MM: function MM(date, locale) {
    return locale.months[date.getMonth()];
  },
  y: function y2(date) {
    return date.getFullYear();
  },
  yy: function yy(date) {
    return padZero(date.getFullYear(), 2).slice(-2);
  },
  yyyy: function yyyy(date) {
    return padZero(date.getFullYear(), 4);
  }
};
function normalizeMonth(monthIndex) {
  return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}
function padZero(num, length) {
  return num.toString().padStart(length, "0");
}
function parseFormatString(format) {
  if (typeof format !== "string") {
    throw new Error("Invalid date format.");
  }
  if (format in knownFormats) {
    return knownFormats[format];
  }
  var separators = format.split(reFormatTokens);
  var parts = format.match(new RegExp(reFormatTokens, "g"));
  if (separators.length === 0 || !parts) {
    throw new Error("Invalid date format.");
  }
  var partFormatters = parts.map(function(token) {
    return formatFns[token];
  });
  var partParserKeys = Object.keys(parseFns).reduce(function(keys, key) {
    var token = parts.find(function(part) {
      return part[0] !== "D" && part[0].toLowerCase() === key;
    });
    if (token) {
      keys.push(key);
    }
    return keys;
  }, []);
  return knownFormats[format] = {
    parser: function parser(dateStr, locale) {
      var dateParts = dateStr.split(reNonDateParts).reduce(function(dtParts, part, index) {
        if (part.length > 0 && parts[index]) {
          var token = parts[index][0];
          if (token === "M") {
            dtParts.m = part;
          } else if (token !== "D") {
            dtParts[token] = part;
          }
        }
        return dtParts;
      }, {});
      return partParserKeys.reduce(function(origDate, key) {
        var newDate = parseFns[key](origDate, dateParts[key], locale);
        return isNaN(newDate) ? origDate : newDate;
      }, today());
    },
    formatter: function formatter(date, locale) {
      var dateStr = partFormatters.reduce(function(str, fn2, index) {
        return str += "".concat(separators[index]).concat(fn2(date, locale));
      }, "");
      return dateStr += lastItemOf(separators);
    }
  };
}
function parseDate(dateStr, format, locale) {
  if (dateStr instanceof Date || typeof dateStr === "number") {
    var date = stripTime(dateStr);
    return isNaN(date) ? void 0 : date;
  }
  if (!dateStr) {
    return void 0;
  }
  if (dateStr === "today") {
    return today();
  }
  if (format && format.toValue) {
    var _date = format.toValue(dateStr, format, locale);
    return isNaN(_date) ? void 0 : stripTime(_date);
  }
  return parseFormatString(format).parser(dateStr, locale);
}
function formatDate(date, format, locale) {
  if (isNaN(date) || !date && date !== 0) {
    return "";
  }
  var dateObj = typeof date === "number" ? new Date(date) : date;
  if (format.toDisplay) {
    return format.toDisplay(dateObj, format, locale);
  }
  return parseFormatString(format).formatter(dateObj, locale);
}
var listenerRegistry = /* @__PURE__ */ new WeakMap();
var _EventTarget$prototyp = EventTarget.prototype, addEventListener = _EventTarget$prototyp.addEventListener, removeEventListener = _EventTarget$prototyp.removeEventListener;
function registerListeners(keyObj, listeners) {
  var registered = listenerRegistry.get(keyObj);
  if (!registered) {
    registered = [];
    listenerRegistry.set(keyObj, registered);
  }
  listeners.forEach(function(listener) {
    addEventListener.call.apply(addEventListener, _toConsumableArray(listener));
    registered.push(listener);
  });
}
function unregisterListeners(keyObj) {
  var listeners = listenerRegistry.get(keyObj);
  if (!listeners) {
    return;
  }
  listeners.forEach(function(listener) {
    removeEventListener.call.apply(removeEventListener, _toConsumableArray(listener));
  });
  listenerRegistry["delete"](keyObj);
}
if (!Event.prototype.composedPath) {
  var getComposedPath = function getComposedPath2(node) {
    var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    path.push(node);
    var parent;
    if (node.parentNode) {
      parent = node.parentNode;
    } else if (node.host) {
      parent = node.host;
    } else if (node.defaultView) {
      parent = node.defaultView;
    }
    return parent ? getComposedPath2(parent, path) : path;
  };
  Event.prototype.composedPath = function() {
    return getComposedPath(this.target);
  };
}
function findFromPath(path, criteria, currentTarget) {
  var index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var el = path[index];
  if (criteria(el)) {
    return el;
  } else if (el === currentTarget || !el.parentElement) {
    return;
  }
  return findFromPath(path, criteria, currentTarget, index + 1);
}
function findElementInEventPath(ev, selector) {
  var criteria = typeof selector === "function" ? selector : function(el) {
    return el.matches(selector);
  };
  return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
}
var locales = {
  en: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    titleFormat: "MM y"
  }
};
var defaultOptions = {
  autohide: false,
  beforeShowDay: null,
  beforeShowDecade: null,
  beforeShowMonth: null,
  beforeShowYear: null,
  calendarWeeks: false,
  clearBtn: false,
  dateDelimiter: ",",
  datesDisabled: [],
  daysOfWeekDisabled: [],
  daysOfWeekHighlighted: [],
  defaultViewDate: void 0,
  // placeholder, defaults to today() by the program
  disableTouchKeyboard: false,
  format: "mm/dd/yyyy",
  language: "en",
  maxDate: null,
  maxNumberOfDates: 1,
  maxView: 3,
  minDate: null,
  nextArrow: '<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>',
  orientation: "auto",
  pickLevel: 0,
  prevArrow: '<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/></svg>',
  showDaysOfWeek: true,
  showOnClick: true,
  showOnFocus: true,
  startView: 0,
  title: "",
  todayBtn: false,
  todayBtnMode: 0,
  todayHighlight: false,
  updateOnBlur: true,
  weekStart: 0
};
var range = null;
function parseHTML(html) {
  if (range == null) {
    range = document.createRange();
  }
  return range.createContextualFragment(html);
}
function hideElement(el) {
  if (el.style.display === "none") {
    return;
  }
  if (el.style.display) {
    el.dataset.styleDisplay = el.style.display;
  }
  el.style.display = "none";
}
function showElement(el) {
  if (el.style.display !== "none") {
    return;
  }
  if (el.dataset.styleDisplay) {
    el.style.display = el.dataset.styleDisplay;
    delete el.dataset.styleDisplay;
  } else {
    el.style.display = "";
  }
}
function emptyChildNodes(el) {
  if (el.firstChild) {
    el.removeChild(el.firstChild);
    emptyChildNodes(el);
  }
}
function replaceChildNodes(el, newChildNodes) {
  emptyChildNodes(el);
  if (newChildNodes instanceof DocumentFragment) {
    el.appendChild(newChildNodes);
  } else if (typeof newChildNodes === "string") {
    el.appendChild(parseHTML(newChildNodes));
  } else if (typeof newChildNodes.forEach === "function") {
    newChildNodes.forEach(function(node) {
      el.appendChild(node);
    });
  }
}
var defaultLang = defaultOptions.language, defaultFormat = defaultOptions.format, defaultWeekStart = defaultOptions.weekStart;
function sanitizeDOW(dow, day) {
  return dow.length < 6 && day >= 0 && day < 7 ? pushUnique(dow, day) : dow;
}
function calcEndOfWeek(startOfWeek) {
  return (startOfWeek + 6) % 7;
}
function validateDate(value, format, locale, origValue) {
  var date = parseDate(value, format, locale);
  return date !== void 0 ? date : origValue;
}
function validateViewId(value, origValue) {
  var max2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;
  var viewId = parseInt(value, 10);
  return viewId >= 0 && viewId <= max2 ? viewId : origValue;
}
function processOptions(options, datepicker) {
  var inOpts = Object.assign({}, options);
  var config = {};
  var locales2 = datepicker.constructor.locales;
  var _ref = datepicker.config || {}, format = _ref.format, language = _ref.language, locale = _ref.locale, maxDate = _ref.maxDate, maxView = _ref.maxView, minDate = _ref.minDate, pickLevel = _ref.pickLevel, startView = _ref.startView, weekStart = _ref.weekStart;
  if (inOpts.language) {
    var lang;
    if (inOpts.language !== language) {
      if (locales2[inOpts.language]) {
        lang = inOpts.language;
      } else {
        lang = inOpts.language.split("-")[0];
        if (locales2[lang] === void 0) {
          lang = false;
        }
      }
    }
    delete inOpts.language;
    if (lang) {
      language = config.language = lang;
      var origLocale = locale || locales2[defaultLang];
      locale = Object.assign({
        format: defaultFormat,
        weekStart: defaultWeekStart
      }, locales2[defaultLang]);
      if (language !== defaultLang) {
        Object.assign(locale, locales2[language]);
      }
      config.locale = locale;
      if (format === origLocale.format) {
        format = config.format = locale.format;
      }
      if (weekStart === origLocale.weekStart) {
        weekStart = config.weekStart = locale.weekStart;
        config.weekEnd = calcEndOfWeek(locale.weekStart);
      }
    }
  }
  if (inOpts.format) {
    var hasToDisplay = typeof inOpts.format.toDisplay === "function";
    var hasToValue = typeof inOpts.format.toValue === "function";
    var validFormatString = reFormatTokens.test(inOpts.format);
    if (hasToDisplay && hasToValue || validFormatString) {
      format = config.format = inOpts.format;
    }
    delete inOpts.format;
  }
  var minDt = minDate;
  var maxDt = maxDate;
  if (inOpts.minDate !== void 0) {
    minDt = inOpts.minDate === null ? dateValue(0, 0, 1) : validateDate(inOpts.minDate, format, locale, minDt);
    delete inOpts.minDate;
  }
  if (inOpts.maxDate !== void 0) {
    maxDt = inOpts.maxDate === null ? void 0 : validateDate(inOpts.maxDate, format, locale, maxDt);
    delete inOpts.maxDate;
  }
  if (maxDt < minDt) {
    minDate = config.minDate = maxDt;
    maxDate = config.maxDate = minDt;
  } else {
    if (minDate !== minDt) {
      minDate = config.minDate = minDt;
    }
    if (maxDate !== maxDt) {
      maxDate = config.maxDate = maxDt;
    }
  }
  if (inOpts.datesDisabled) {
    config.datesDisabled = inOpts.datesDisabled.reduce(function(dates, dt) {
      var date = parseDate(dt, format, locale);
      return date !== void 0 ? pushUnique(dates, date) : dates;
    }, []);
    delete inOpts.datesDisabled;
  }
  if (inOpts.defaultViewDate !== void 0) {
    var viewDate = parseDate(inOpts.defaultViewDate, format, locale);
    if (viewDate !== void 0) {
      config.defaultViewDate = viewDate;
    }
    delete inOpts.defaultViewDate;
  }
  if (inOpts.weekStart !== void 0) {
    var wkStart = Number(inOpts.weekStart) % 7;
    if (!isNaN(wkStart)) {
      weekStart = config.weekStart = wkStart;
      config.weekEnd = calcEndOfWeek(wkStart);
    }
    delete inOpts.weekStart;
  }
  if (inOpts.daysOfWeekDisabled) {
    config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekDisabled;
  }
  if (inOpts.daysOfWeekHighlighted) {
    config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekHighlighted;
  }
  if (inOpts.maxNumberOfDates !== void 0) {
    var maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
    if (maxNumberOfDates >= 0) {
      config.maxNumberOfDates = maxNumberOfDates;
      config.multidate = maxNumberOfDates !== 1;
    }
    delete inOpts.maxNumberOfDates;
  }
  if (inOpts.dateDelimiter) {
    config.dateDelimiter = String(inOpts.dateDelimiter);
    delete inOpts.dateDelimiter;
  }
  var newPickLevel = pickLevel;
  if (inOpts.pickLevel !== void 0) {
    newPickLevel = validateViewId(inOpts.pickLevel, 2);
    delete inOpts.pickLevel;
  }
  if (newPickLevel !== pickLevel) {
    pickLevel = config.pickLevel = newPickLevel;
  }
  var newMaxView = maxView;
  if (inOpts.maxView !== void 0) {
    newMaxView = validateViewId(inOpts.maxView, maxView);
    delete inOpts.maxView;
  }
  newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
  if (newMaxView !== maxView) {
    maxView = config.maxView = newMaxView;
  }
  var newStartView = startView;
  if (inOpts.startView !== void 0) {
    newStartView = validateViewId(inOpts.startView, newStartView);
    delete inOpts.startView;
  }
  if (newStartView < pickLevel) {
    newStartView = pickLevel;
  } else if (newStartView > maxView) {
    newStartView = maxView;
  }
  if (newStartView !== startView) {
    config.startView = newStartView;
  }
  if (inOpts.prevArrow) {
    var prevArrow = parseHTML(inOpts.prevArrow);
    if (prevArrow.childNodes.length > 0) {
      config.prevArrow = prevArrow.childNodes;
    }
    delete inOpts.prevArrow;
  }
  if (inOpts.nextArrow) {
    var nextArrow = parseHTML(inOpts.nextArrow);
    if (nextArrow.childNodes.length > 0) {
      config.nextArrow = nextArrow.childNodes;
    }
    delete inOpts.nextArrow;
  }
  if (inOpts.disableTouchKeyboard !== void 0) {
    config.disableTouchKeyboard = "ontouchstart" in document && !!inOpts.disableTouchKeyboard;
    delete inOpts.disableTouchKeyboard;
  }
  if (inOpts.orientation) {
    var orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
    config.orientation = {
      x: orientation.find(function(x) {
        return x === "left" || x === "right";
      }) || "auto",
      y: orientation.find(function(y3) {
        return y3 === "top" || y3 === "bottom";
      }) || "auto"
    };
    delete inOpts.orientation;
  }
  if (inOpts.todayBtnMode !== void 0) {
    switch (inOpts.todayBtnMode) {
      case 0:
      case 1:
        config.todayBtnMode = inOpts.todayBtnMode;
    }
    delete inOpts.todayBtnMode;
  }
  Object.keys(inOpts).forEach(function(key) {
    if (inOpts[key] !== void 0 && hasProperty(defaultOptions, key)) {
      config[key] = inOpts[key];
    }
  });
  return config;
}
var pickerTemplate = optimizeTemplateHTML('<div class="datepicker hidden">\n  <div class="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">\n    <div class="datepicker-header">\n      <div class="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold"></div>\n      <div class="datepicker-controls flex justify-between mb-2">\n        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"></button>\n        <button type="button" class="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"></button>\n        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main p-1"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls flex space-x-2 rtl:space-x-reverse mt-2">\n        <button type="button" class="%buttonClass% today-btn text-white bg-blue-700 !bg-primary-700 dark:bg-blue-600 dark:!bg-primary-600 hover:bg-blue-800 hover:!bg-primary-800 dark:hover:bg-blue-700 dark:hover:!bg-primary-700 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>\n        <button type="button" class="%buttonClass% clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>\n      </div>\n    </div>\n  </div>\n</div>');
var daysTemplate = optimizeTemplateHTML('<div class="days">\n  <div class="days-of-week grid grid-cols-7 mb-1">'.concat(createTagRepeat("span", 7, {
  "class": "dow block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"
}), '</div>\n  <div class="datepicker-grid w-64 grid grid-cols-7">').concat(createTagRepeat("span", 42, {
  "class": "block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"
}), "</div>\n</div>"));
var calendarWeeksTemplate = optimizeTemplateHTML('<div class="calendar-weeks">\n  <div class="days-of-week flex"><span class="dow h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"></span></div>\n  <div class="weeks">'.concat(createTagRepeat("span", 6, {
  "class": "week block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"
}), "</div>\n</div>"));
var View = /* @__PURE__ */ function() {
  function View2(picker, config) {
    _classCallCheck(this, View2);
    Object.assign(this, config, {
      picker,
      element: parseHTML('<div class="datepicker-view flex"></div>').firstChild,
      selected: []
    });
    this.init(this.picker.datepicker.config);
  }
  return _createClass(View2, [{
    key: "init",
    value: function init(options) {
      if (options.pickLevel !== void 0) {
        this.isMinView = this.id === options.pickLevel;
      }
      this.setOptions(options);
      this.updateFocus();
      this.updateSelection();
    }
    // Execute beforeShow() callback and apply the result to the element
    // args:
    // - current - current value on the iteration on view rendering
    // - timeValue - time value of the date to pass to beforeShow()
  }, {
    key: "performBeforeHook",
    value: function performBeforeHook(el, current, timeValue) {
      var result = this.beforeShow(new Date(timeValue));
      switch (_typeof(result)) {
        case "boolean":
          result = {
            enabled: result
          };
          break;
        case "string":
          result = {
            classes: result
          };
      }
      if (result) {
        if (result.enabled === false) {
          el.classList.add("disabled");
          pushUnique(this.disabled, current);
        }
        if (result.classes) {
          var _el$classList;
          var extraClasses = result.classes.split(/\s+/);
          (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(extraClasses));
          if (extraClasses.includes("disabled")) {
            pushUnique(this.disabled, current);
          }
        }
        if (result.content) {
          replaceChildNodes(el, result.content);
        }
      }
    }
  }]);
}();
var DaysView = /* @__PURE__ */ function(_View) {
  function DaysView2(picker) {
    _classCallCheck(this, DaysView2);
    return _callSuper(this, DaysView2, [picker, {
      id: 0,
      name: "days",
      cellClass: "day"
    }]);
  }
  _inherits(DaysView2, _View);
  return _createClass(DaysView2, [{
    key: "init",
    value: function init(options) {
      var onConstruction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (onConstruction) {
        var inner = parseHTML(daysTemplate).firstChild;
        this.dow = inner.firstChild;
        this.grid = inner.lastChild;
        this.element.appendChild(inner);
      }
      _get(_getPrototypeOf(DaysView2.prototype), "init", this).call(this, options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var _this = this;
      var updateDOW;
      if (hasProperty(options, "minDate")) {
        this.minDate = options.minDate;
      }
      if (hasProperty(options, "maxDate")) {
        this.maxDate = options.maxDate;
      }
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
      if (options.daysOfWeekDisabled) {
        this.daysOfWeekDisabled = options.daysOfWeekDisabled;
        updateDOW = true;
      }
      if (options.daysOfWeekHighlighted) {
        this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
      }
      if (options.todayHighlight !== void 0) {
        this.todayHighlight = options.todayHighlight;
      }
      if (options.weekStart !== void 0) {
        this.weekStart = options.weekStart;
        this.weekEnd = options.weekEnd;
        updateDOW = true;
      }
      if (options.locale) {
        var locale = this.locale = options.locale;
        this.dayNames = locale.daysMin;
        this.switchLabelFormat = locale.titleFormat;
        updateDOW = true;
      }
      if (options.beforeShowDay !== void 0) {
        this.beforeShow = typeof options.beforeShowDay === "function" ? options.beforeShowDay : void 0;
      }
      if (options.calendarWeeks !== void 0) {
        if (options.calendarWeeks && !this.calendarWeeks) {
          var weeksElem = parseHTML(calendarWeeksTemplate).firstChild;
          this.calendarWeeks = {
            element: weeksElem,
            dow: weeksElem.firstChild,
            weeks: weeksElem.lastChild
          };
          this.element.insertBefore(weeksElem, this.element.firstChild);
        } else if (this.calendarWeeks && !options.calendarWeeks) {
          this.element.removeChild(this.calendarWeeks.element);
          this.calendarWeeks = null;
        }
      }
      if (options.showDaysOfWeek !== void 0) {
        if (options.showDaysOfWeek) {
          showElement(this.dow);
          if (this.calendarWeeks) {
            showElement(this.calendarWeeks.dow);
          }
        } else {
          hideElement(this.dow);
          if (this.calendarWeeks) {
            hideElement(this.calendarWeeks.dow);
          }
        }
      }
      if (updateDOW) {
        Array.from(this.dow.children).forEach(function(el, index) {
          var dow = (_this.weekStart + index) % 7;
          el.textContent = _this.dayNames[dow];
          el.className = _this.daysOfWeekDisabled.includes(dow) ? "dow disabled text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-not-allowed" : "dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400";
        });
      }
    }
    // Apply update on the focused date to view's settings
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      var viewDate = new Date(this.picker.viewDate);
      var viewYear = viewDate.getFullYear();
      var viewMonth = viewDate.getMonth();
      var firstOfMonth = dateValue(viewYear, viewMonth, 1);
      var start2 = dayOfTheWeekOf(firstOfMonth, this.weekStart, this.weekStart);
      this.first = firstOfMonth;
      this.last = dateValue(viewYear, viewMonth + 1, 0);
      this.start = start2;
      this.focused = this.picker.viewDate;
    }
    // Apply update on the selected dates to view's settings
  }, {
    key: "updateSelection",
    value: function updateSelection() {
      var _this$picker$datepick = this.picker.datepicker, dates = _this$picker$datepick.dates, rangepicker = _this$picker$datepick.rangepicker;
      this.selected = dates;
      if (rangepicker) {
        this.range = rangepicker.dates;
      }
    }
    // Update the entire view UI
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      this.today = this.todayHighlight ? today() : void 0;
      this.disabled = _toConsumableArray(this.datesDisabled);
      var switchLabel = formatDate(this.focused, this.switchLabelFormat, this.locale);
      this.picker.setViewSwitchLabel(switchLabel);
      this.picker.setPrevBtnDisabled(this.first <= this.minDate);
      this.picker.setNextBtnDisabled(this.last >= this.maxDate);
      if (this.calendarWeeks) {
        var startOfWeek = dayOfTheWeekOf(this.first, 1, 1);
        Array.from(this.calendarWeeks.weeks.children).forEach(function(el, index) {
          el.textContent = getWeek(addWeeks(startOfWeek, index));
        });
      }
      Array.from(this.grid.children).forEach(function(el, index) {
        var classList = el.classList;
        var current = addDays(_this2.start, index);
        var date = new Date(current);
        var day = date.getDay();
        el.className = "datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(_this2.cellClass);
        el.dataset.date = current;
        el.textContent = date.getDate();
        if (current < _this2.first) {
          classList.add("prev", "text-gray-500", "dark:text-white");
        } else if (current > _this2.last) {
          classList.add("next", "text-gray-500", "dark:text-white");
        }
        if (_this2.today === current) {
          classList.add("today", "bg-gray-100", "dark:bg-gray-600");
        }
        if (current < _this2.minDate || current > _this2.maxDate || _this2.disabled.includes(current)) {
          classList.add("disabled", "cursor-not-allowed", "text-gray-400", "dark:text-gray-500");
          classList.remove("hover:bg-gray-100", "dark:hover:bg-gray-600", "text-gray-900", "dark:text-white", "cursor-pointer");
        }
        if (_this2.daysOfWeekDisabled.includes(day)) {
          classList.add("disabled", "cursor-not-allowed", "text-gray-400", "dark:text-gray-500");
          classList.remove("hover:bg-gray-100", "dark:hover:bg-gray-600", "text-gray-900", "dark:text-white", "cursor-pointer");
          pushUnique(_this2.disabled, current);
        }
        if (_this2.daysOfWeekHighlighted.includes(day)) {
          classList.add("highlighted");
        }
        if (_this2.range) {
          var _this2$range = _slicedToArray(_this2.range, 2), rangeStart = _this2$range[0], rangeEnd = _this2$range[1];
          if (current > rangeStart && current < rangeEnd) {
            classList.add("range", "bg-gray-200", "dark:bg-gray-600");
            classList.remove("rounded-lg", "rounded-l-lg", "rounded-r-lg");
          }
          if (current === rangeStart) {
            classList.add("range-start", "bg-gray-100", "dark:bg-gray-600", "rounded-l-lg");
            classList.remove("rounded-lg", "rounded-r-lg");
          }
          if (current === rangeEnd) {
            classList.add("range-end", "bg-gray-100", "dark:bg-gray-600", "rounded-r-lg");
            classList.remove("rounded-lg", "rounded-l-lg");
          }
        }
        if (_this2.selected.includes(current)) {
          classList.add("selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark:!bg-primary-600", "dark:text-white");
          classList.remove("text-gray-900", "text-gray-500", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-600", "dark:bg-gray-600", "bg-gray-100", "bg-gray-200");
        }
        if (current === _this2.focused) {
          classList.add("focused");
        }
        if (_this2.beforeShow) {
          _this2.performBeforeHook(el, current, current);
        }
      });
    }
    // Update the view UI by applying the changes of selected and focused items
  }, {
    key: "refresh",
    value: function refresh() {
      var _this3 = this;
      var _ref = this.range || [], _ref2 = _slicedToArray(_ref, 2), rangeStart = _ref2[0], rangeEnd = _ref2[1];
      this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function(el) {
        el.classList.remove("range", "range-start", "range-end", "selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark:!bg-primary-600", "dark:text-white", "focused");
        el.classList.add("text-gray-900", "rounded-lg", "dark:text-white");
      });
      Array.from(this.grid.children).forEach(function(el) {
        var current = Number(el.dataset.date);
        var classList = el.classList;
        classList.remove("bg-gray-200", "dark:bg-gray-600", "rounded-l-lg", "rounded-r-lg");
        if (current > rangeStart && current < rangeEnd) {
          classList.add("range", "bg-gray-200", "dark:bg-gray-600");
          classList.remove("rounded-lg");
        }
        if (current === rangeStart) {
          classList.add("range-start", "bg-gray-200", "dark:bg-gray-600", "rounded-l-lg");
          classList.remove("rounded-lg");
        }
        if (current === rangeEnd) {
          classList.add("range-end", "bg-gray-200", "dark:bg-gray-600", "rounded-r-lg");
          classList.remove("rounded-lg");
        }
        if (_this3.selected.includes(current)) {
          classList.add("selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark:!bg-primary-600", "dark:text-white");
          classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-600", "bg-gray-100", "bg-gray-200", "dark:bg-gray-600");
        }
        if (current === _this3.focused) {
          classList.add("focused");
        }
      });
    }
    // Update the view UI by applying the change of focused item
  }, {
    key: "refreshFocus",
    value: function refreshFocus() {
      var index = Math.round((this.focused - this.start) / 864e5);
      this.grid.querySelectorAll(".focused").forEach(function(el) {
        el.classList.remove("focused");
      });
      this.grid.children[index].classList.add("focused");
    }
  }]);
}(View);
function computeMonthRange(range2, thisYear) {
  if (!range2 || !range2[0] || !range2[1]) {
    return;
  }
  var _range = _slicedToArray(range2, 2), _range$ = _slicedToArray(_range[0], 2), startY = _range$[0], startM = _range$[1], _range$2 = _slicedToArray(_range[1], 2), endY = _range$2[0], endM = _range$2[1];
  if (startY > thisYear || endY < thisYear) {
    return;
  }
  return [startY === thisYear ? startM : -1, endY === thisYear ? endM : 12];
}
var MonthsView = /* @__PURE__ */ function(_View) {
  function MonthsView2(picker) {
    _classCallCheck(this, MonthsView2);
    return _callSuper(this, MonthsView2, [picker, {
      id: 1,
      name: "months",
      cellClass: "month"
    }]);
  }
  _inherits(MonthsView2, _View);
  return _createClass(MonthsView2, [{
    key: "init",
    value: function init(options) {
      var onConstruction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (onConstruction) {
        this.grid = this.element;
        this.element.classList.add("months", "datepicker-grid", "w-64", "grid", "grid-cols-4");
        this.grid.appendChild(parseHTML(createTagRepeat("span", 12, {
          "data-month": function dataMonth(ix) {
            return ix;
          }
        })));
      }
      _get(_getPrototypeOf(MonthsView2.prototype), "init", this).call(this, options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (options.locale) {
        this.monthNames = options.locale.monthsShort;
      }
      if (hasProperty(options, "minDate")) {
        if (options.minDate === void 0) {
          this.minYear = this.minMonth = this.minDate = void 0;
        } else {
          var minDateObj = new Date(options.minDate);
          this.minYear = minDateObj.getFullYear();
          this.minMonth = minDateObj.getMonth();
          this.minDate = minDateObj.setDate(1);
        }
      }
      if (hasProperty(options, "maxDate")) {
        if (options.maxDate === void 0) {
          this.maxYear = this.maxMonth = this.maxDate = void 0;
        } else {
          var maxDateObj = new Date(options.maxDate);
          this.maxYear = maxDateObj.getFullYear();
          this.maxMonth = maxDateObj.getMonth();
          this.maxDate = dateValue(this.maxYear, this.maxMonth + 1, 0);
        }
      }
      if (options.beforeShowMonth !== void 0) {
        this.beforeShow = typeof options.beforeShowMonth === "function" ? options.beforeShowMonth : void 0;
      }
    }
    // Update view's settings to reflect the viewDate set on the picker
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      var viewDate = new Date(this.picker.viewDate);
      this.year = viewDate.getFullYear();
      this.focused = viewDate.getMonth();
    }
    // Update view's settings to reflect the selected dates
  }, {
    key: "updateSelection",
    value: function updateSelection() {
      var _this$picker$datepick = this.picker.datepicker, dates = _this$picker$datepick.dates, rangepicker = _this$picker$datepick.rangepicker;
      this.selected = dates.reduce(function(selected, timeValue) {
        var date = new Date(timeValue);
        var year = date.getFullYear();
        var month = date.getMonth();
        if (selected[year] === void 0) {
          selected[year] = [month];
        } else {
          pushUnique(selected[year], month);
        }
        return selected;
      }, {});
      if (rangepicker && rangepicker.dates) {
        this.range = rangepicker.dates.map(function(timeValue) {
          var date = new Date(timeValue);
          return isNaN(date) ? void 0 : [date.getFullYear(), date.getMonth()];
        });
      }
    }
    // Update the entire view UI
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this.disabled = [];
      this.picker.setViewSwitchLabel(this.year);
      this.picker.setPrevBtnDisabled(this.year <= this.minYear);
      this.picker.setNextBtnDisabled(this.year >= this.maxYear);
      var selected = this.selected[this.year] || [];
      var yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
      var isMinYear = this.year === this.minYear;
      var isMaxYear = this.year === this.maxYear;
      var range2 = computeMonthRange(this.range, this.year);
      Array.from(this.grid.children).forEach(function(el, index) {
        var classList = el.classList;
        var date = dateValue(_this.year, index, 1);
        el.className = "datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(_this.cellClass);
        if (_this.isMinView) {
          el.dataset.date = date;
        }
        el.textContent = _this.monthNames[index];
        if (yrOutOfRange || isMinYear && index < _this.minMonth || isMaxYear && index > _this.maxMonth) {
          classList.add("disabled");
        }
        if (range2) {
          var _range2 = _slicedToArray(range2, 2), rangeStart = _range2[0], rangeEnd = _range2[1];
          if (index > rangeStart && index < rangeEnd) {
            classList.add("range");
          }
          if (index === rangeStart) {
            classList.add("range-start");
          }
          if (index === rangeEnd) {
            classList.add("range-end");
          }
        }
        if (selected.includes(index)) {
          classList.add("selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark:!bg-primary-600", "dark:text-white");
          classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-600");
        }
        if (index === _this.focused) {
          classList.add("focused");
        }
        if (_this.beforeShow) {
          _this.performBeforeHook(el, index, date);
        }
      });
    }
    // Update the view UI by applying the changes of selected and focused items
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;
      var selected = this.selected[this.year] || [];
      var _ref = computeMonthRange(this.range, this.year) || [], _ref2 = _slicedToArray(_ref, 2), rangeStart = _ref2[0], rangeEnd = _ref2[1];
      this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function(el) {
        el.classList.remove("range", "range-start", "range-end", "selected", "bg-blue-700", "!bg-primary-700", "dark:bg-blue-600", "dark:!bg-primary-700", "dark:text-white", "text-white", "focused");
        el.classList.add("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-600");
      });
      Array.from(this.grid.children).forEach(function(el, index) {
        var classList = el.classList;
        if (index > rangeStart && index < rangeEnd) {
          classList.add("range");
        }
        if (index === rangeStart) {
          classList.add("range-start");
        }
        if (index === rangeEnd) {
          classList.add("range-end");
        }
        if (selected.includes(index)) {
          classList.add("selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark:!bg-primary-600", "dark:text-white");
          classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-600");
        }
        if (index === _this2.focused) {
          classList.add("focused");
        }
      });
    }
    // Update the view UI by applying the change of focused item
  }, {
    key: "refreshFocus",
    value: function refreshFocus() {
      this.grid.querySelectorAll(".focused").forEach(function(el) {
        el.classList.remove("focused");
      });
      this.grid.children[this.focused].classList.add("focused");
    }
  }]);
}(View);
function toTitleCase(word) {
  return _toConsumableArray(word).reduce(function(str, ch, ix) {
    return str += ix ? ch : ch.toUpperCase();
  }, "");
}
var YearsView = /* @__PURE__ */ function(_View) {
  function YearsView2(picker, config) {
    _classCallCheck(this, YearsView2);
    return _callSuper(this, YearsView2, [picker, config]);
  }
  _inherits(YearsView2, _View);
  return _createClass(YearsView2, [{
    key: "init",
    value: function init(options) {
      var onConstruction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (onConstruction) {
        this.navStep = this.step * 10;
        this.beforeShowOption = "beforeShow".concat(toTitleCase(this.cellClass));
        this.grid = this.element;
        this.element.classList.add(this.name, "datepicker-grid", "w-64", "grid", "grid-cols-4");
        this.grid.appendChild(parseHTML(createTagRepeat("span", 12)));
      }
      _get(_getPrototypeOf(YearsView2.prototype), "init", this).call(this, options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (hasProperty(options, "minDate")) {
        if (options.minDate === void 0) {
          this.minYear = this.minDate = void 0;
        } else {
          this.minYear = startOfYearPeriod(options.minDate, this.step);
          this.minDate = dateValue(this.minYear, 0, 1);
        }
      }
      if (hasProperty(options, "maxDate")) {
        if (options.maxDate === void 0) {
          this.maxYear = this.maxDate = void 0;
        } else {
          this.maxYear = startOfYearPeriod(options.maxDate, this.step);
          this.maxDate = dateValue(this.maxYear, 11, 31);
        }
      }
      if (options[this.beforeShowOption] !== void 0) {
        var beforeShow = options[this.beforeShowOption];
        this.beforeShow = typeof beforeShow === "function" ? beforeShow : void 0;
      }
    }
    // Update view's settings to reflect the viewDate set on the picker
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      var viewDate = new Date(this.picker.viewDate);
      var first = startOfYearPeriod(viewDate, this.navStep);
      var last = first + 9 * this.step;
      this.first = first;
      this.last = last;
      this.start = first - this.step;
      this.focused = startOfYearPeriod(viewDate, this.step);
    }
    // Update view's settings to reflect the selected dates
  }, {
    key: "updateSelection",
    value: function updateSelection() {
      var _this = this;
      var _this$picker$datepick = this.picker.datepicker, dates = _this$picker$datepick.dates, rangepicker = _this$picker$datepick.rangepicker;
      this.selected = dates.reduce(function(years, timeValue) {
        return pushUnique(years, startOfYearPeriod(timeValue, _this.step));
      }, []);
      if (rangepicker && rangepicker.dates) {
        this.range = rangepicker.dates.map(function(timeValue) {
          if (timeValue !== void 0) {
            return startOfYearPeriod(timeValue, _this.step);
          }
        });
      }
    }
    // Update the entire view UI
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      this.disabled = [];
      this.picker.setViewSwitchLabel("".concat(this.first, "-").concat(this.last));
      this.picker.setPrevBtnDisabled(this.first <= this.minYear);
      this.picker.setNextBtnDisabled(this.last >= this.maxYear);
      Array.from(this.grid.children).forEach(function(el, index) {
        var classList = el.classList;
        var current = _this2.start + index * _this2.step;
        var date = dateValue(current, 0, 1);
        el.className = "datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(_this2.cellClass);
        if (_this2.isMinView) {
          el.dataset.date = date;
        }
        el.textContent = el.dataset.year = current;
        if (index === 0) {
          classList.add("prev");
        } else if (index === 11) {
          classList.add("next");
        }
        if (current < _this2.minYear || current > _this2.maxYear) {
          classList.add("disabled");
        }
        if (_this2.range) {
          var _this2$range = _slicedToArray(_this2.range, 2), rangeStart = _this2$range[0], rangeEnd = _this2$range[1];
          if (current > rangeStart && current < rangeEnd) {
            classList.add("range");
          }
          if (current === rangeStart) {
            classList.add("range-start");
          }
          if (current === rangeEnd) {
            classList.add("range-end");
          }
        }
        if (_this2.selected.includes(current)) {
          classList.add("selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark:!bg-primary-600", "dark:text-white");
          classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-600");
        }
        if (current === _this2.focused) {
          classList.add("focused");
        }
        if (_this2.beforeShow) {
          _this2.performBeforeHook(el, current, date);
        }
      });
    }
    // Update the view UI by applying the changes of selected and focused items
  }, {
    key: "refresh",
    value: function refresh() {
      var _this3 = this;
      var _ref = this.range || [], _ref2 = _slicedToArray(_ref, 2), rangeStart = _ref2[0], rangeEnd = _ref2[1];
      this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function(el) {
        el.classList.remove("range", "range-start", "range-end", "selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark!bg-primary-600", "dark:text-white", "focused");
      });
      Array.from(this.grid.children).forEach(function(el) {
        var current = Number(el.textContent);
        var classList = el.classList;
        if (current > rangeStart && current < rangeEnd) {
          classList.add("range");
        }
        if (current === rangeStart) {
          classList.add("range-start");
        }
        if (current === rangeEnd) {
          classList.add("range-end");
        }
        if (_this3.selected.includes(current)) {
          classList.add("selected", "bg-blue-700", "!bg-primary-700", "text-white", "dark:bg-blue-600", "dark:!bg-primary-600", "dark:text-white");
          classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-600");
        }
        if (current === _this3.focused) {
          classList.add("focused");
        }
      });
    }
    // Update the view UI by applying the change of focused item
  }, {
    key: "refreshFocus",
    value: function refreshFocus() {
      var index = Math.round((this.focused - this.start) / this.step);
      this.grid.querySelectorAll(".focused").forEach(function(el) {
        el.classList.remove("focused");
      });
      this.grid.children[index].classList.add("focused");
    }
  }]);
}(View);
function triggerDatepickerEvent(datepicker, type) {
  var detail = {
    date: datepicker.getDate(),
    viewDate: new Date(datepicker.picker.viewDate),
    viewId: datepicker.picker.currentView.id,
    datepicker
  };
  datepicker.element.dispatchEvent(new CustomEvent(type, {
    detail
  }));
}
function goToPrevOrNext(datepicker, direction) {
  var _datepicker$config = datepicker.config, minDate = _datepicker$config.minDate, maxDate = _datepicker$config.maxDate;
  var _datepicker$picker = datepicker.picker, currentView = _datepicker$picker.currentView, viewDate = _datepicker$picker.viewDate;
  var newViewDate;
  switch (currentView.id) {
    case 0:
      newViewDate = addMonths(viewDate, direction);
      break;
    case 1:
      newViewDate = addYears(viewDate, direction);
      break;
    default:
      newViewDate = addYears(viewDate, direction * currentView.navStep);
  }
  newViewDate = limitToRange(newViewDate, minDate, maxDate);
  datepicker.picker.changeFocus(newViewDate).render();
}
function switchView(datepicker) {
  var viewId = datepicker.picker.currentView.id;
  if (viewId === datepicker.config.maxView) {
    return;
  }
  datepicker.picker.changeView(viewId + 1).render();
}
function unfocus(datepicker) {
  if (datepicker.config.updateOnBlur) {
    datepicker.update({
      autohide: true
    });
  } else {
    datepicker.refresh("input");
    datepicker.hide();
  }
}
function goToSelectedMonthOrYear(datepicker, selection) {
  var picker = datepicker.picker;
  var viewDate = new Date(picker.viewDate);
  var viewId = picker.currentView.id;
  var newDate = viewId === 1 ? addMonths(viewDate, selection - viewDate.getMonth()) : addYears(viewDate, selection - viewDate.getFullYear());
  picker.changeFocus(newDate).changeView(viewId - 1).render();
}
function onClickTodayBtn(datepicker) {
  var picker = datepicker.picker;
  var currentDate = today();
  if (datepicker.config.todayBtnMode === 1) {
    if (datepicker.config.autohide) {
      datepicker.setDate(currentDate);
      return;
    }
    datepicker.setDate(currentDate, {
      render: false
    });
    picker.update();
  }
  if (picker.viewDate !== currentDate) {
    picker.changeFocus(currentDate);
  }
  picker.changeView(0).render();
}
function onClickClearBtn(datepicker) {
  datepicker.setDate({
    clear: true
  });
}
function onClickViewSwitch(datepicker) {
  switchView(datepicker);
}
function onClickPrevBtn(datepicker) {
  goToPrevOrNext(datepicker, -1);
}
function onClickNextBtn(datepicker) {
  goToPrevOrNext(datepicker, 1);
}
function onClickView(datepicker, ev) {
  var target = findElementInEventPath(ev, ".datepicker-cell");
  if (!target || target.classList.contains("disabled")) {
    return;
  }
  var _datepicker$picker$cu = datepicker.picker.currentView, id = _datepicker$picker$cu.id, isMinView = _datepicker$picker$cu.isMinView;
  if (isMinView) {
    datepicker.setDate(Number(target.dataset.date));
  } else if (id === 1) {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.month));
  } else {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.year));
  }
}
function onClickPicker(datepicker) {
  if (!datepicker.inline && !datepicker.config.disableTouchKeyboard) {
    datepicker.inputField.focus();
  }
}
function processPickerOptions(picker, options) {
  if (options.title !== void 0) {
    if (options.title) {
      picker.controls.title.textContent = options.title;
      showElement(picker.controls.title);
    } else {
      picker.controls.title.textContent = "";
      hideElement(picker.controls.title);
    }
  }
  if (options.prevArrow) {
    var prevBtn = picker.controls.prevBtn;
    emptyChildNodes(prevBtn);
    options.prevArrow.forEach(function(node) {
      prevBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.nextArrow) {
    var nextBtn = picker.controls.nextBtn;
    emptyChildNodes(nextBtn);
    options.nextArrow.forEach(function(node) {
      nextBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.locale) {
    picker.controls.todayBtn.textContent = options.locale.today;
    picker.controls.clearBtn.textContent = options.locale.clear;
  }
  if (options.todayBtn !== void 0) {
    if (options.todayBtn) {
      showElement(picker.controls.todayBtn);
    } else {
      hideElement(picker.controls.todayBtn);
    }
  }
  if (hasProperty(options, "minDate") || hasProperty(options, "maxDate")) {
    var _picker$datepicker$co = picker.datepicker.config, minDate = _picker$datepicker$co.minDate, maxDate = _picker$datepicker$co.maxDate;
    picker.controls.todayBtn.disabled = !isInRange(today(), minDate, maxDate);
  }
  if (options.clearBtn !== void 0) {
    if (options.clearBtn) {
      showElement(picker.controls.clearBtn);
    } else {
      hideElement(picker.controls.clearBtn);
    }
  }
}
function computeResetViewDate(datepicker) {
  var dates = datepicker.dates, config = datepicker.config;
  var viewDate = dates.length > 0 ? lastItemOf(dates) : config.defaultViewDate;
  return limitToRange(viewDate, config.minDate, config.maxDate);
}
function setViewDate(picker, newDate) {
  var oldViewDate = new Date(picker.viewDate);
  var newViewDate = new Date(newDate);
  var _picker$currentView = picker.currentView, id = _picker$currentView.id, year = _picker$currentView.year, first = _picker$currentView.first, last = _picker$currentView.last;
  var viewYear = newViewDate.getFullYear();
  picker.viewDate = newDate;
  if (viewYear !== oldViewDate.getFullYear()) {
    triggerDatepickerEvent(picker.datepicker, "changeYear");
  }
  if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
    triggerDatepickerEvent(picker.datepicker, "changeMonth");
  }
  switch (id) {
    case 0:
      return newDate < first || newDate > last;
    case 1:
      return viewYear !== year;
    default:
      return viewYear < first || viewYear > last;
  }
}
function getTextDirection(el) {
  return window.getComputedStyle(el).direction;
}
var Picker = /* @__PURE__ */ function() {
  function Picker2(datepicker) {
    _classCallCheck(this, Picker2);
    this.datepicker = datepicker;
    var template = pickerTemplate.replace(/%buttonClass%/g, datepicker.config.buttonClass);
    var element = this.element = parseHTML(template).firstChild;
    var _element$firstChild$c = _slicedToArray(element.firstChild.children, 3), header = _element$firstChild$c[0], main2 = _element$firstChild$c[1], footer = _element$firstChild$c[2];
    var title = header.firstElementChild;
    var _header$lastElementCh = _slicedToArray(header.lastElementChild.children, 3), prevBtn = _header$lastElementCh[0], viewSwitch = _header$lastElementCh[1], nextBtn = _header$lastElementCh[2];
    var _footer$firstChild$ch = _slicedToArray(footer.firstChild.children, 2), todayBtn = _footer$firstChild$ch[0], clearBtn = _footer$firstChild$ch[1];
    var controls = {
      title,
      prevBtn,
      viewSwitch,
      nextBtn,
      todayBtn,
      clearBtn
    };
    this.main = main2;
    this.controls = controls;
    var elementClass = datepicker.inline ? "inline" : "dropdown";
    element.classList.add("datepicker-".concat(elementClass));
    elementClass === "dropdown" ? element.classList.add("dropdown", "absolute", "top-0", "left-0", "z-50", "pt-2") : null;
    processPickerOptions(this, datepicker.config);
    this.viewDate = computeResetViewDate(datepicker);
    registerListeners(datepicker, [[element, "click", onClickPicker.bind(null, datepicker), {
      capture: true
    }], [main2, "click", onClickView.bind(null, datepicker)], [controls.viewSwitch, "click", onClickViewSwitch.bind(null, datepicker)], [controls.prevBtn, "click", onClickPrevBtn.bind(null, datepicker)], [controls.nextBtn, "click", onClickNextBtn.bind(null, datepicker)], [controls.todayBtn, "click", onClickTodayBtn.bind(null, datepicker)], [controls.clearBtn, "click", onClickClearBtn.bind(null, datepicker)]]);
    this.views = [new DaysView(this), new MonthsView(this), new YearsView(this, {
      id: 2,
      name: "years",
      cellClass: "year",
      step: 1
    }), new YearsView(this, {
      id: 3,
      name: "decades",
      cellClass: "decade",
      step: 10
    })];
    this.currentView = this.views[datepicker.config.startView];
    this.currentView.render();
    this.main.appendChild(this.currentView.element);
    datepicker.config.container.appendChild(this.element);
  }
  return _createClass(Picker2, [{
    key: "setOptions",
    value: function setOptions(options) {
      processPickerOptions(this, options);
      this.views.forEach(function(view) {
        view.init(options, false);
      });
      this.currentView.render();
    }
  }, {
    key: "detach",
    value: function detach() {
      this.datepicker.config.container.removeChild(this.element);
    }
  }, {
    key: "show",
    value: function show() {
      if (this.active) {
        return;
      }
      this.element.classList.add("active", "block");
      this.element.classList.remove("hidden");
      this.active = true;
      var datepicker = this.datepicker;
      if (!datepicker.inline) {
        var inputDirection = getTextDirection(datepicker.inputField);
        if (inputDirection !== getTextDirection(datepicker.config.container)) {
          this.element.dir = inputDirection;
        } else if (this.element.dir) {
          this.element.removeAttribute("dir");
        }
        this.place();
        if (datepicker.config.disableTouchKeyboard) {
          datepicker.inputField.blur();
        }
      }
      triggerDatepickerEvent(datepicker, "show");
    }
  }, {
    key: "hide",
    value: function hide2() {
      if (!this.active) {
        return;
      }
      this.datepicker.exitEditMode();
      this.element.classList.remove("active", "block");
      this.element.classList.add("active", "block", "hidden");
      this.active = false;
      triggerDatepickerEvent(this.datepicker, "hide");
    }
  }, {
    key: "place",
    value: function place() {
      var _this$element = this.element, classList = _this$element.classList, style = _this$element.style;
      var _this$datepicker = this.datepicker, config = _this$datepicker.config, inputField = _this$datepicker.inputField;
      var container = config.container;
      var _this$element$getBoun = this.element.getBoundingClientRect(), calendarWidth = _this$element$getBoun.width, calendarHeight = _this$element$getBoun.height;
      var _container$getBoundin = container.getBoundingClientRect(), containerLeft = _container$getBoundin.left, containerTop = _container$getBoundin.top, containerWidth = _container$getBoundin.width;
      var _inputField$getBoundi = inputField.getBoundingClientRect(), inputLeft = _inputField$getBoundi.left, inputTop = _inputField$getBoundi.top, inputWidth = _inputField$getBoundi.width, inputHeight = _inputField$getBoundi.height;
      var _config$orientation = config.orientation, orientX = _config$orientation.x, orientY = _config$orientation.y;
      var scrollTop;
      var left2;
      var top2;
      if (container === document.body) {
        scrollTop = window.scrollY;
        left2 = inputLeft + window.scrollX;
        top2 = inputTop + scrollTop;
      } else {
        scrollTop = container.scrollTop;
        left2 = inputLeft - containerLeft;
        top2 = inputTop - containerTop + scrollTop;
      }
      if (orientX === "auto") {
        if (left2 < 0) {
          orientX = "left";
          left2 = 10;
        } else if (left2 + calendarWidth > containerWidth) {
          orientX = "right";
        } else {
          orientX = getTextDirection(inputField) === "rtl" ? "right" : "left";
        }
      }
      if (orientX === "right") {
        left2 -= calendarWidth - inputWidth;
      }
      if (orientY === "auto") {
        orientY = top2 - calendarHeight < scrollTop ? "bottom" : "top";
      }
      if (orientY === "top") {
        top2 -= calendarHeight;
      } else {
        top2 += inputHeight;
      }
      classList.remove("datepicker-orient-top", "datepicker-orient-bottom", "datepicker-orient-right", "datepicker-orient-left");
      classList.add("datepicker-orient-".concat(orientY), "datepicker-orient-".concat(orientX));
      style.top = top2 ? "".concat(top2, "px") : top2;
      style.left = left2 ? "".concat(left2, "px") : left2;
    }
  }, {
    key: "setViewSwitchLabel",
    value: function setViewSwitchLabel(labelText) {
      this.controls.viewSwitch.textContent = labelText;
    }
  }, {
    key: "setPrevBtnDisabled",
    value: function setPrevBtnDisabled(disabled) {
      this.controls.prevBtn.disabled = disabled;
    }
  }, {
    key: "setNextBtnDisabled",
    value: function setNextBtnDisabled(disabled) {
      this.controls.nextBtn.disabled = disabled;
    }
  }, {
    key: "changeView",
    value: function changeView(viewId) {
      var oldView = this.currentView;
      var newView = this.views[viewId];
      if (newView.id !== oldView.id) {
        this.currentView = newView;
        this._renderMethod = "render";
        triggerDatepickerEvent(this.datepicker, "changeView");
        this.main.replaceChild(newView.element, oldView.element);
      }
      return this;
    }
    // Change the focused date (view date)
  }, {
    key: "changeFocus",
    value: function changeFocus(newViewDate) {
      this._renderMethod = setViewDate(this, newViewDate) ? "render" : "refreshFocus";
      this.views.forEach(function(view) {
        view.updateFocus();
      });
      return this;
    }
    // Apply the change of the selected dates
  }, {
    key: "update",
    value: function update() {
      var newViewDate = computeResetViewDate(this.datepicker);
      this._renderMethod = setViewDate(this, newViewDate) ? "render" : "refresh";
      this.views.forEach(function(view) {
        view.updateFocus();
        view.updateSelection();
      });
      return this;
    }
    // Refresh the picker UI
  }, {
    key: "render",
    value: function render() {
      var quickRender = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var renderMethod = quickRender && this._renderMethod || "render";
      delete this._renderMethod;
      this.currentView[renderMethod]();
    }
  }]);
}();
function findNextAvailableOne(date, addFn, increase, testFn, min2, max2) {
  if (!isInRange(date, min2, max2)) {
    return;
  }
  if (testFn(date)) {
    var newDate = addFn(date, increase);
    return findNextAvailableOne(newDate, addFn, increase, testFn, min2, max2);
  }
  return date;
}
function moveByArrowKey(datepicker, ev, direction, vertical) {
  var picker = datepicker.picker;
  var currentView = picker.currentView;
  var step = currentView.step || 1;
  var viewDate = picker.viewDate;
  var addFn;
  var testFn;
  switch (currentView.id) {
    case 0:
      if (vertical) {
        viewDate = addDays(viewDate, direction * 7);
      } else if (ev.ctrlKey || ev.metaKey) {
        viewDate = addYears(viewDate, direction);
      } else {
        viewDate = addDays(viewDate, direction);
      }
      addFn = addDays;
      testFn = function testFn2(date) {
        return currentView.disabled.includes(date);
      };
      break;
    case 1:
      viewDate = addMonths(viewDate, vertical ? direction * 4 : direction);
      addFn = addMonths;
      testFn = function testFn2(date) {
        var dt = new Date(date);
        var year = currentView.year, disabled = currentView.disabled;
        return dt.getFullYear() === year && disabled.includes(dt.getMonth());
      };
      break;
    default:
      viewDate = addYears(viewDate, direction * (vertical ? 4 : 1) * step);
      addFn = addYears;
      testFn = function testFn2(date) {
        return currentView.disabled.includes(startOfYearPeriod(date, step));
      };
  }
  viewDate = findNextAvailableOne(viewDate, addFn, direction < 0 ? -step : step, testFn, currentView.minDate, currentView.maxDate);
  if (viewDate !== void 0) {
    picker.changeFocus(viewDate).render();
  }
}
function onKeydown(datepicker, ev) {
  if (ev.key === "Tab") {
    unfocus(datepicker);
    return;
  }
  var picker = datepicker.picker;
  var _picker$currentView = picker.currentView, id = _picker$currentView.id, isMinView = _picker$currentView.isMinView;
  if (!picker.active) {
    switch (ev.key) {
      case "ArrowDown":
      case "Escape":
        picker.show();
        break;
      case "Enter":
        datepicker.update();
        break;
      default:
        return;
    }
  } else if (datepicker.editMode) {
    switch (ev.key) {
      case "Escape":
        picker.hide();
        break;
      case "Enter":
        datepicker.exitEditMode({
          update: true,
          autohide: datepicker.config.autohide
        });
        break;
      default:
        return;
    }
  } else {
    switch (ev.key) {
      case "Escape":
        picker.hide();
        break;
      case "ArrowLeft":
        if (ev.ctrlKey || ev.metaKey) {
          goToPrevOrNext(datepicker, -1);
        } else if (ev.shiftKey) {
          datepicker.enterEditMode();
          return;
        } else {
          moveByArrowKey(datepicker, ev, -1, false);
        }
        break;
      case "ArrowRight":
        if (ev.ctrlKey || ev.metaKey) {
          goToPrevOrNext(datepicker, 1);
        } else if (ev.shiftKey) {
          datepicker.enterEditMode();
          return;
        } else {
          moveByArrowKey(datepicker, ev, 1, false);
        }
        break;
      case "ArrowUp":
        if (ev.ctrlKey || ev.metaKey) {
          switchView(datepicker);
        } else if (ev.shiftKey) {
          datepicker.enterEditMode();
          return;
        } else {
          moveByArrowKey(datepicker, ev, -1, true);
        }
        break;
      case "ArrowDown":
        if (ev.shiftKey && !ev.ctrlKey && !ev.metaKey) {
          datepicker.enterEditMode();
          return;
        }
        moveByArrowKey(datepicker, ev, 1, true);
        break;
      case "Enter":
        if (isMinView) {
          datepicker.setDate(picker.viewDate);
        } else {
          picker.changeView(id - 1).render();
        }
        break;
      case "Backspace":
      case "Delete":
        datepicker.enterEditMode();
        return;
      default:
        if (ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey) {
          datepicker.enterEditMode();
        }
        return;
    }
  }
  ev.preventDefault();
  ev.stopPropagation();
}
function onFocus(datepicker) {
  if (datepicker.config.showOnFocus && !datepicker._showing) {
    datepicker.show();
  }
}
function onMousedown(datepicker, ev) {
  var el = ev.target;
  if (datepicker.picker.active || datepicker.config.showOnClick) {
    el._active = el === document.activeElement;
    el._clicking = setTimeout(function() {
      delete el._active;
      delete el._clicking;
    }, 2e3);
  }
}
function onClickInput(datepicker, ev) {
  var el = ev.target;
  if (!el._clicking) {
    return;
  }
  clearTimeout(el._clicking);
  delete el._clicking;
  if (el._active) {
    datepicker.enterEditMode();
  }
  delete el._active;
  if (datepicker.config.showOnClick) {
    datepicker.show();
  }
}
function onPaste(datepicker, ev) {
  if (ev.clipboardData.types.includes("text/plain")) {
    datepicker.enterEditMode();
  }
}
function onClickOutside(datepicker, ev) {
  var element = datepicker.element;
  if (element !== document.activeElement) {
    return;
  }
  var pickerElem = datepicker.picker.element;
  if (findElementInEventPath(ev, function(el) {
    return el === element || el === pickerElem;
  })) {
    return;
  }
  unfocus(datepicker);
}
function stringifyDates(dates, config) {
  return dates.map(function(dt) {
    return formatDate(dt, config.format, config.locale);
  }).join(config.dateDelimiter);
}
function processInputDates(datepicker, inputDates) {
  var clear = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var config = datepicker.config, origDates = datepicker.dates, rangepicker = datepicker.rangepicker;
  if (inputDates.length === 0) {
    return clear ? [] : void 0;
  }
  var rangeEnd = rangepicker && datepicker === rangepicker.datepickers[1];
  var newDates = inputDates.reduce(function(dates, dt) {
    var date = parseDate(dt, config.format, config.locale);
    if (date === void 0) {
      return dates;
    }
    if (config.pickLevel > 0) {
      var _dt = new Date(date);
      if (config.pickLevel === 1) {
        date = rangeEnd ? _dt.setMonth(_dt.getMonth() + 1, 0) : _dt.setDate(1);
      } else {
        date = rangeEnd ? _dt.setFullYear(_dt.getFullYear() + 1, 0, 0) : _dt.setMonth(0, 1);
      }
    }
    if (isInRange(date, config.minDate, config.maxDate) && !dates.includes(date) && !config.datesDisabled.includes(date) && !config.daysOfWeekDisabled.includes(new Date(date).getDay())) {
      dates.push(date);
    }
    return dates;
  }, []);
  if (newDates.length === 0) {
    return;
  }
  if (config.multidate && !clear) {
    newDates = newDates.reduce(function(dates, date) {
      if (!origDates.includes(date)) {
        dates.push(date);
      }
      return dates;
    }, origDates.filter(function(date) {
      return !newDates.includes(date);
    }));
  }
  return config.maxNumberOfDates && newDates.length > config.maxNumberOfDates ? newDates.slice(config.maxNumberOfDates * -1) : newDates;
}
function refreshUI(datepicker) {
  var mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
  var quickRender = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var config = datepicker.config, picker = datepicker.picker, inputField = datepicker.inputField;
  if (mode & 2) {
    var newView = picker.active ? config.pickLevel : config.startView;
    picker.update().changeView(newView).render(quickRender);
  }
  if (mode & 1 && inputField) {
    inputField.value = stringifyDates(datepicker.dates, config);
  }
}
function _setDate(datepicker, inputDates, options) {
  var clear = options.clear, render = options.render, autohide = options.autohide;
  if (render === void 0) {
    render = true;
  }
  if (!render) {
    autohide = false;
  } else if (autohide === void 0) {
    autohide = datepicker.config.autohide;
  }
  var newDates = processInputDates(datepicker, inputDates, clear);
  if (!newDates) {
    return;
  }
  if (newDates.toString() !== datepicker.dates.toString()) {
    datepicker.dates = newDates;
    refreshUI(datepicker, render ? 3 : 1);
    triggerDatepickerEvent(datepicker, "changeDate");
  } else {
    refreshUI(datepicker, 1);
  }
  if (autohide) {
    datepicker.hide();
  }
}
var Datepicker$1 = /* @__PURE__ */ function() {
  function Datepicker2(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var rangepicker = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    _classCallCheck(this, Datepicker2);
    element.datepicker = this;
    this.element = element;
    var config = this.config = Object.assign({
      buttonClass: options.buttonClass && String(options.buttonClass) || "button",
      container: document.body,
      defaultViewDate: today(),
      maxDate: void 0,
      minDate: void 0
    }, processOptions(defaultOptions, this));
    this._options = options;
    Object.assign(config, processOptions(options, this));
    var inline = this.inline = element.tagName !== "INPUT";
    var inputField;
    var initialDates;
    if (inline) {
      config.container = element;
      initialDates = stringToArray(element.dataset.date, config.dateDelimiter);
      delete element.dataset.date;
    } else {
      var container = options.container ? document.querySelector(options.container) : null;
      if (container) {
        config.container = container;
      }
      inputField = this.inputField = element;
      inputField.classList.add("datepicker-input");
      initialDates = stringToArray(inputField.value, config.dateDelimiter);
    }
    if (rangepicker) {
      var index = rangepicker.inputs.indexOf(inputField);
      var datepickers = rangepicker.datepickers;
      if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
        throw Error("Invalid rangepicker object.");
      }
      datepickers[index] = this;
      Object.defineProperty(this, "rangepicker", {
        get: function get() {
          return rangepicker;
        }
      });
    }
    this.dates = [];
    var inputDateValues = processInputDates(this, initialDates);
    if (inputDateValues && inputDateValues.length > 0) {
      this.dates = inputDateValues;
    }
    if (inputField) {
      inputField.value = stringifyDates(this.dates, config);
    }
    var picker = this.picker = new Picker(this);
    if (inline) {
      this.show();
    } else {
      var onMousedownDocument = onClickOutside.bind(null, this);
      var listeners = [[inputField, "keydown", onKeydown.bind(null, this)], [inputField, "focus", onFocus.bind(null, this)], [inputField, "mousedown", onMousedown.bind(null, this)], [inputField, "click", onClickInput.bind(null, this)], [inputField, "paste", onPaste.bind(null, this)], [document, "mousedown", onMousedownDocument], [document, "touchstart", onMousedownDocument], [window, "resize", picker.place.bind(picker)]];
      registerListeners(this, listeners);
    }
  }
  return _createClass(Datepicker2, [{
    key: "active",
    get: (
      /**
       * @type {Boolean} - Whether the picker element is shown. `true` whne shown
       */
      function get() {
        return !!(this.picker && this.picker.active);
      }
    )
    /**
     * @type {HTMLDivElement} - DOM object of picker element
     */
  }, {
    key: "pickerElement",
    get: function get() {
      return this.picker ? this.picker.element : void 0;
    }
    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var picker = this.picker;
      var newOptions = processOptions(options, this);
      Object.assign(this._options, options);
      Object.assign(this.config, newOptions);
      picker.setOptions(newOptions);
      refreshUI(this, 3);
    }
    /**
     * Show the picker element
     */
  }, {
    key: "show",
    value: function show() {
      if (this.inputField) {
        if (this.inputField.disabled) {
          return;
        }
        if (this.inputField !== document.activeElement) {
          this._showing = true;
          this.inputField.focus();
          delete this._showing;
        }
      }
      this.picker.show();
    }
    /**
     * Hide the picker element
     * Not available on inline picker
     */
  }, {
    key: "hide",
    value: function hide2() {
      if (this.inline) {
        return;
      }
      this.picker.hide();
      this.picker.update().changeView(this.config.startView).render();
    }
    /**
     * Destroy the Datepicker instance
     * @return {Detepicker} - the instance destroyed
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.hide();
      unregisterListeners(this);
      this.picker.detach();
      if (!this.inline) {
        this.inputField.classList.remove("datepicker-input");
      }
      delete this.element.datepicker;
      return this;
    }
    /**
     * Get the selected date(s)
     *
     * The method returns a Date object of selected date by default, and returns
     * an array of selected dates in multidate mode. If format string is passed,
     * it returns date string(s) formatted in given format.
     *
     * @param  {String} [format] - Format string to stringify the date(s)
     * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
     * selected, empty array in multidate mode and untitled in sigledate mode
     */
  }, {
    key: "getDate",
    value: function getDate() {
      var _this = this;
      var format = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      var callback = format ? function(date) {
        return formatDate(date, format, _this.config.locale);
      } : function(date) {
        return new Date(date);
      };
      if (this.config.multidate) {
        return this.dates.map(callback);
      }
      if (this.dates.length > 0) {
        return callback(this.dates[0]);
      }
    }
    /**
     * Set selected date(s)
     *
     * In multidate mode, you can pass multiple dates as a series of arguments
     * or an array. (Since each date is parsed individually, the type of the
     * dates doesn't have to be the same.)
     * The given dates are used to toggle the select status of each date. The
     * number of selected dates is kept from exceeding the length set to
     * maxNumberOfDates.
     *
     * With clear: true option, the method can be used to clear the selection
     * and to replace the selection instead of toggling in multidate mode.
     * If the option is passed with no date arguments or an empty dates array,
     * it works as "clear" (clear the selection then set nothing), and if the
     * option is passed with new dates to select, it works as "replace" (clear
     * the selection then set the given dates)
     *
     * When render: false option is used, the method omits re-rendering the
     * picker element. In this case, you need to call refresh() method later in
     * order for the picker element to reflect the changes. The input field is
     * refreshed always regardless of this option.
     *
     * When invalid (unparsable, repeated, disabled or out-of-range) dates are
     * passed, the method ignores them and applies only valid ones. In the case
     * that all the given dates are invalid, which is distinguished from passing
     * no dates, the method considers it as an error and leaves the selection
     * untouched.
     *
     * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
     * objects, time values or mix of those for new selection
     * @param {Object} [options] - function options
     * - clear: {boolean} - Whether to clear the existing selection
     *     defualt: false
     * - render: {boolean} - Whether to re-render the picker element
     *     default: true
     * - autohide: {boolean} - Whether to hide the picker element after re-render
     *     Ignored when used with render: false
     *     default: config.autohide
     */
  }, {
    key: "setDate",
    value: function setDate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var dates = [].concat(args);
      var opts = {};
      var lastArg = lastItemOf(args);
      if (_typeof(lastArg) === "object" && !Array.isArray(lastArg) && !(lastArg instanceof Date) && lastArg) {
        Object.assign(opts, dates.pop());
      }
      var inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
      _setDate(this, inputDates, opts);
    }
    /**
     * Update the selected date(s) with input field's value
     * Not available on inline picker
     *
     * The input field will be refreshed with properly formatted date string.
     *
     * @param  {Object} [options] - function options
     * - autohide: {boolean} - whether to hide the picker element after refresh
     *     default: false
     */
  }, {
    key: "update",
    value: function update() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      if (this.inline) {
        return;
      }
      var opts = {
        clear: true,
        autohide: !!(options && options.autohide)
      };
      var inputDates = stringToArray(this.inputField.value, this.config.dateDelimiter);
      _setDate(this, inputDates, opts);
    }
    /**
     * Refresh the picker element and the associated input field
     * @param {String} [target] - target item when refreshing one item only
     * 'picker' or 'input'
     * @param {Boolean} [forceRender] - whether to re-render the picker element
     * regardless of its state instead of optimized refresh
     */
  }, {
    key: "refresh",
    value: function refresh() {
      var target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      var forceRender = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (target && typeof target !== "string") {
        forceRender = target;
        target = void 0;
      }
      var mode;
      if (target === "picker") {
        mode = 2;
      } else if (target === "input") {
        mode = 1;
      } else {
        mode = 3;
      }
      refreshUI(this, mode, !forceRender);
    }
    /**
     * Enter edit mode
     * Not available on inline picker or when the picker element is hidden
     */
  }, {
    key: "enterEditMode",
    value: function enterEditMode() {
      if (this.inline || !this.picker.active || this.editMode) {
        return;
      }
      this.editMode = true;
      this.inputField.classList.add("in-edit", "border-blue-700", "!border-primary-700");
    }
    /**
     * Exit from edit mode
     * Not available on inline picker
     * @param  {Object} [options] - function options
     * - update: {boolean} - whether to call update() after exiting
     *     If false, input field is revert to the existing selection
     *     default: false
     */
  }, {
    key: "exitEditMode",
    value: function exitEditMode() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      if (this.inline || !this.editMode) {
        return;
      }
      var opts = Object.assign({
        update: false
      }, options);
      delete this.editMode;
      this.inputField.classList.remove("in-edit", "border-blue-700", "!border-primary-700");
      if (opts.update) {
        this.update(opts);
      }
    }
  }], [{
    key: "formatDate",
    value: function formatDate$1(date, format, lang) {
      return formatDate(date, format, lang && locales[lang] || locales.en);
    }
    /**
     * Parse date string
     * @param  {String|Date|Number} dateStr - date string, Date object or time
     * value to parse
     * @param  {String|Object} format - format string or object that contains
     * toValue() custom parser, whose signature is
     * - args:
     *   - dateStr: {String|Date|Number} - the dateStr passed to the method
     *   - format: {Object} - the format object passed to the method
     *   - locale: {Object} - locale for the language specified by `lang`
     * - return:
     *     {Date|Number} parsed date or its time value
     * @param  {String} [lang=en] - language code for the locale to use
     * @return {Number} time value of parsed date
     */
  }, {
    key: "parseDate",
    value: function parseDate$1(dateStr, format, lang) {
      return parseDate(dateStr, format, lang && locales[lang] || locales.en);
    }
    /**
     * @type {Object} - Installed locales in `[languageCode]: localeObject` format
     * en`:_English (US)_ is pre-installed.
     */
  }, {
    key: "locales",
    get: function get() {
      return locales;
    }
  }]);
}();
function filterOptions(options) {
  var newOpts = Object.assign({}, options);
  delete newOpts.inputs;
  delete newOpts.allowOneSidedRange;
  delete newOpts.maxNumberOfDates;
  return newOpts;
}
function setupDatepicker(rangepicker, changeDateListener, el, options) {
  registerListeners(rangepicker, [[el, "changeDate", changeDateListener]]);
  new Datepicker$1(el, options, rangepicker);
}
function onChangeDate(rangepicker, ev) {
  if (rangepicker._updating) {
    return;
  }
  rangepicker._updating = true;
  var target = ev.target;
  if (target.datepicker === void 0) {
    return;
  }
  var datepickers = rangepicker.datepickers;
  var setDateOptions = {
    render: false
  };
  var changedSide = rangepicker.inputs.indexOf(target);
  var otherSide = changedSide === 0 ? 1 : 0;
  var changedDate = datepickers[changedSide].dates[0];
  var otherDate = datepickers[otherSide].dates[0];
  if (changedDate !== void 0 && otherDate !== void 0) {
    if (changedSide === 0 && changedDate > otherDate) {
      datepickers[0].setDate(otherDate, setDateOptions);
      datepickers[1].setDate(changedDate, setDateOptions);
    } else if (changedSide === 1 && changedDate < otherDate) {
      datepickers[0].setDate(changedDate, setDateOptions);
      datepickers[1].setDate(otherDate, setDateOptions);
    }
  } else if (!rangepicker.allowOneSidedRange) {
    if (changedDate !== void 0 || otherDate !== void 0) {
      setDateOptions.clear = true;
      datepickers[otherSide].setDate(datepickers[changedSide].dates, setDateOptions);
    }
  }
  datepickers[0].picker.update().render();
  datepickers[1].picker.update().render();
  delete rangepicker._updating;
}
var DateRangePicker = /* @__PURE__ */ function() {
  function DateRangePicker2(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, DateRangePicker2);
    var inputs = Array.isArray(options.inputs) ? options.inputs : Array.from(element.querySelectorAll("input"));
    if (inputs.length < 2) {
      return;
    }
    element.rangepicker = this;
    this.element = element;
    this.inputs = inputs.slice(0, 2);
    this.allowOneSidedRange = !!options.allowOneSidedRange;
    var changeDateListener = onChangeDate.bind(null, this);
    var cleanOptions = filterOptions(options);
    var datepickers = [];
    Object.defineProperty(this, "datepickers", {
      get: function get() {
        return datepickers;
      }
    });
    setupDatepicker(this, changeDateListener, this.inputs[0], cleanOptions);
    setupDatepicker(this, changeDateListener, this.inputs[1], cleanOptions);
    Object.freeze(datepickers);
    if (datepickers[0].dates.length > 0) {
      onChangeDate(this, {
        target: this.inputs[0]
      });
    } else if (datepickers[1].dates.length > 0) {
      onChangeDate(this, {
        target: this.inputs[1]
      });
    }
  }
  return _createClass(DateRangePicker2, [{
    key: "dates",
    get: function get() {
      return this.datepickers.length === 2 ? [this.datepickers[0].dates[0], this.datepickers[1].dates[0]] : void 0;
    }
    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.allowOneSidedRange = !!options.allowOneSidedRange;
      var cleanOptions = filterOptions(options);
      this.datepickers[0].setOptions(cleanOptions);
      this.datepickers[1].setOptions(cleanOptions);
    }
    /**
     * Destroy the DateRangePicker instance
     * @return {DateRangePicker} - the instance destroyed
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.datepickers[0].destroy();
      this.datepickers[1].destroy();
      unregisterListeners(this);
      delete this.element.rangepicker;
    }
    /**
     * Get the start and end dates of the date range
     *
     * The method returns Date objects by default. If format string is passed,
     * it returns date strings formatted in given format.
     * The result array always contains 2 items (start date/end date) and
     * undefined is used for unselected side. (e.g. If none is selected,
     * the result will be [undefined, undefined]. If only the end date is set
     * when allowOneSidedRange config option is true, [undefined, endDate] will
     * be returned.)
     *
     * @param  {String} [format] - Format string to stringify the dates
     * @return {Array} - Start and end dates
     */
  }, {
    key: "getDates",
    value: function getDates() {
      var _this = this;
      var format = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      var callback = format ? function(date) {
        return formatDate(date, format, _this.datepickers[0].config.locale);
      } : function(date) {
        return new Date(date);
      };
      return this.dates.map(function(date) {
        return date === void 0 ? date : callback(date);
      });
    }
    /**
     * Set the start and end dates of the date range
     *
     * The method calls datepicker.setDate() internally using each of the
     * arguments in start→end order.
     *
     * When a clear: true option object is passed instead of a date, the method
     * clears the date.
     *
     * If an invalid date, the same date as the current one or an option object
     * without clear: true is passed, the method considers that argument as an
     * "ineffective" argument because calling datepicker.setDate() with those
     * values makes no changes to the date selection.
     *
     * When the allowOneSidedRange config option is false, passing {clear: true}
     * to clear the range works only when it is done to the last effective
     * argument (in other words, passed to rangeEnd or to rangeStart along with
     * ineffective rangeEnd). This is because when the date range is changed,
     * it gets normalized based on the last change at the end of the changing
     * process.
     *
     * @param {Date|Number|String|Object} rangeStart - Start date of the range
     * or {clear: true} to clear the date
     * @param {Date|Number|String|Object} rangeEnd - End date of the range
     * or {clear: true} to clear the date
     */
  }, {
    key: "setDates",
    value: function setDates(rangeStart, rangeEnd) {
      var _this$datepickers = _slicedToArray(this.datepickers, 2), datepicker0 = _this$datepickers[0], datepicker1 = _this$datepickers[1];
      var origDates = this.dates;
      this._updating = true;
      datepicker0.setDate(rangeStart);
      datepicker1.setDate(rangeEnd);
      delete this._updating;
      if (datepicker1.dates[0] !== origDates[1]) {
        onChangeDate(this, {
          target: this.inputs[1]
        });
      } else if (datepicker0.dates[0] !== origDates[0]) {
        onChangeDate(this, {
          target: this.inputs[0]
        });
      }
    }
  }]);
}();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var Default = {
  defaultDatepickerId: null,
  autohide: false,
  format: "mm/dd/yyyy",
  maxDate: null,
  minDate: null,
  orientation: "bottom",
  buttons: false,
  autoSelectToday: 0,
  title: null,
  language: "en",
  rangePicker: false,
  onShow: function() {
  },
  onHide: function() {
  }
};
var DefaultInstanceOptions = {
  id: null,
  override: true
};
var Datepicker = (
  /** @class */
  function() {
    function Datepicker2(datepickerEl, options, instanceOptions) {
      if (datepickerEl === void 0) {
        datepickerEl = null;
      }
      if (options === void 0) {
        options = Default;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : datepickerEl.id;
      this._datepickerEl = datepickerEl;
      this._datepickerInstance = null;
      this._options = __assign(__assign({}, Default), options);
      this._initialized = false;
      this.init();
      instances.addInstance("Datepicker", this, this._instanceId, instanceOptions.override);
    }
    Datepicker2.prototype.init = function() {
      if (this._datepickerEl && !this._initialized) {
        if (this._options.rangePicker) {
          this._datepickerInstance = new DateRangePicker(this._datepickerEl, this._getDatepickerOptions(this._options));
        } else {
          this._datepickerInstance = new Datepicker$1(this._datepickerEl, this._getDatepickerOptions(this._options));
        }
        this._initialized = true;
      }
    };
    Datepicker2.prototype.destroy = function() {
      if (this._initialized) {
        this._initialized = false;
        this._datepickerInstance.destroy();
      }
    };
    Datepicker2.prototype.removeInstance = function() {
      this.destroy();
      instances.removeInstance("Datepicker", this._instanceId);
    };
    Datepicker2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Datepicker2.prototype.getDatepickerInstance = function() {
      return this._datepickerInstance;
    };
    Datepicker2.prototype.getDate = function() {
      if (this._options.rangePicker && this._datepickerInstance instanceof DateRangePicker) {
        return this._datepickerInstance.getDates();
      }
      if (!this._options.rangePicker && this._datepickerInstance instanceof Datepicker$1) {
        return this._datepickerInstance.getDate();
      }
    };
    Datepicker2.prototype.setDate = function(date) {
      if (this._options.rangePicker && this._datepickerInstance instanceof DateRangePicker) {
        return this._datepickerInstance.setDates(date);
      }
      if (!this._options.rangePicker && this._datepickerInstance instanceof Datepicker$1) {
        return this._datepickerInstance.setDate(date);
      }
    };
    Datepicker2.prototype.show = function() {
      this._datepickerInstance.show();
      this._options.onShow(this);
    };
    Datepicker2.prototype.hide = function() {
      this._datepickerInstance.hide();
      this._options.onHide(this);
    };
    Datepicker2.prototype._getDatepickerOptions = function(options) {
      var datepickerOptions = {};
      if (options.buttons) {
        datepickerOptions.todayBtn = true;
        datepickerOptions.clearBtn = true;
        if (options.autoSelectToday) {
          datepickerOptions.todayBtnMode = 1;
        }
      }
      if (options.autohide) {
        datepickerOptions.autohide = true;
      }
      if (options.format) {
        datepickerOptions.format = options.format;
      }
      if (options.maxDate) {
        datepickerOptions.maxDate = options.maxDate;
      }
      if (options.minDate) {
        datepickerOptions.minDate = options.minDate;
      }
      if (options.orientation) {
        datepickerOptions.orientation = options.orientation;
      }
      if (options.title) {
        datepickerOptions.title = options.title;
      }
      if (options.language) {
        datepickerOptions.language = options.language;
      }
      return datepickerOptions;
    };
    Datepicker2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Datepicker2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    return Datepicker2;
  }()
);
function initDatepickers() {
  document.querySelectorAll("[datepicker], [inline-datepicker], [date-rangepicker]").forEach(function($datepickerEl) {
    if ($datepickerEl) {
      var buttons = $datepickerEl.hasAttribute("datepicker-buttons");
      var autoselectToday = $datepickerEl.hasAttribute("datepicker-autoselect-today");
      var autohide = $datepickerEl.hasAttribute("datepicker-autohide");
      var format = $datepickerEl.getAttribute("datepicker-format");
      var maxDate = $datepickerEl.getAttribute("datepicker-max-date");
      var minDate = $datepickerEl.getAttribute("datepicker-min-date");
      var orientation_1 = $datepickerEl.getAttribute("datepicker-orientation");
      var title = $datepickerEl.getAttribute("datepicker-title");
      var language = $datepickerEl.getAttribute("datepicker-language");
      var rangePicker = $datepickerEl.hasAttribute("date-rangepicker");
      new Datepicker($datepickerEl, {
        buttons: buttons ? buttons : Default.buttons,
        autoSelectToday: autoselectToday ? autoselectToday : Default.autoSelectToday,
        autohide: autohide ? autohide : Default.autohide,
        format: format ? format : Default.format,
        maxDate: maxDate ? maxDate : Default.maxDate,
        minDate: minDate ? minDate : Default.minDate,
        orientation: orientation_1 ? orientation_1 : Default.orientation,
        title: title ? title : Default.title,
        language: language ? language : Default.language,
        rangePicker: rangePicker ? rangePicker : Default.rangePicker
      });
    } else {
      console.error("The datepicker element does not exist. Please check the datepicker attribute.");
    }
  });
}
if (typeof window !== "undefined") {
  window.Datepicker = Datepicker;
  window.initDatepickers = initDatepickers;
}
function initFlowbite() {
  initAccordions();
  initCollapses();
  initCarousels();
  initDismisses();
  initDropdowns();
  initModals();
  initDrawers();
  initTabs();
  initTooltips();
  initPopovers();
  initDials();
  initInputCounters();
  initCopyClipboards();
  initDatepickers();
}
if (typeof window !== "undefined") {
  window.initFlowbite = initFlowbite;
}
var events = new Events("load", [
  initAccordions,
  initCollapses,
  initCarousels,
  initDismisses,
  initDropdowns,
  initModals,
  initDrawers,
  initTabs,
  initTooltips,
  initPopovers,
  initDials,
  initInputCounters,
  initCopyClipboards,
  initDatepickers
]);
events.init();
const createVueApp = (additionalComponents = {}) => {
  const app = createApp({
    components: __spreadValues({}, additionalComponents)
  });
  return app;
};
export {
  createVueApp as c
};

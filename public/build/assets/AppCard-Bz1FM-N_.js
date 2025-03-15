import { a as _export_sfc } from "./AppInputText-Dy64zcCM.js";
import { f as openBlock, g as createElementBlock, i as createBaseVNode, p as renderSlot, q as createCommentVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
const _sfc_main = {};
const _hoisted_1 = { class: "mt-4 rounded-md bg-skin-neutral-2 shadow" };
const _hoisted_2 = { class: "rounded-t-md bg-skin-neutral-3 px-4 py-2" };
const _hoisted_3 = { class: "text-xl font-semibold tracking-tight" };
const _hoisted_4 = { class: "p-4" };
const _hoisted_5 = {
  key: 0,
  class: "px-4 py-2 pb-4"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("h3", _hoisted_3, [
        renderSlot(_ctx.$slots, "title")
      ]),
      renderSlot(_ctx.$slots, "description")
    ]),
    createBaseVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "content")
    ]),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "footer")
    ])) : createCommentVNode("", true)
  ]);
}
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __unplugin_components_6 as _
};

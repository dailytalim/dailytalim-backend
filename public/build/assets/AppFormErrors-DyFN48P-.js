import { a as _export_sfc } from "./AppInputText-Dy64zcCM.js";
import { f as openBlock, g as createElementBlock, i as createBaseVNode, p as renderSlot, q as createCommentVNode, b as computed, t as toDisplayString, F as Fragment, z as renderList } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import { n as ne } from "./app-LWwlYPSu.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "mt-4 rounded-md bg-skin-neutral-2 shadow" };
const _hoisted_2$1 = { class: "rounded-t-md bg-skin-neutral-3 px-4 py-2" };
const _hoisted_3$1 = { class: "text-xl font-semibold tracking-tight" };
const _hoisted_4 = { class: "p-4" };
const _hoisted_5 = {
  key: 0,
  class: "px-4 py-2 pb-4"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("h3", _hoisted_3$1, [
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
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "font-medium text-skin-error" };
const _hoisted_3 = { class: "mt-3 list-inside list-disc text-sm text-skin-error" };
const _sfc_main = {
  __name: "AppFormErrors",
  setup(__props) {
    const errors = computed(() => ne().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    return (_ctx, _cache) => {
      return hasErrors.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.__("Whoops! Something went wrong...")), 1),
        createBaseVNode("ul", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value, (error, key) => {
            return openBlock(), createElementBlock("li", { key }, toDisplayString(_ctx.__(error)), 1);
          }), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
export {
  __unplugin_components_6 as _,
  _sfc_main as a
};

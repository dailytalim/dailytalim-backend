import { n as ne } from "./app-DtBtwHzA.js";
import { b as computed, f as openBlock, g as createElementBlock, i as createBaseVNode, t as toDisplayString, F as Fragment, z as renderList, q as createCommentVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
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
  _sfc_main as _
};

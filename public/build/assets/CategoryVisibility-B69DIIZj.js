import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { _ as _sfc_main$1 } from "./AppCheckbox-Cq19lkFS.js";
import { u as useCategoryStore } from "./CategoryStore-Ch8sTgw9.js";
import { g as createElementBlock, j as createVNode, u as unref, k as withCtx, f as openBlock, y as createTextVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./AppInputText-Dy64zcCM.js";
import "./app-DtBtwHzA.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "mt-5 flex items-center" };
const _sfc_main = {
  __name: "CategoryVisibility",
  setup(__props) {
    const categoryStore = useCategoryStore();
    return (_ctx, _cache) => {
      const _component_AppCheckbox = _sfc_main$1;
      const _component_AppLabel = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_AppCheckbox, {
          id: "term",
          modelValue: unref(categoryStore).category.is_visible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(categoryStore).category.is_visible = $event),
          name: "term",
          value: true
        }, null, 8, ["modelValue"]),
        createVNode(_component_AppLabel, {
          for: "term",
          class: "ml-3"
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode(" Turn Category visible ")
          ])),
          _: 1
        })
      ]);
    };
  }
};
export {
  _sfc_main as default
};

import { a as _export_sfc } from "./AppInputText-zGYkzQim.js";
import { f as openBlock, g as createElementBlock, i as createBaseVNode, t as toDisplayString, n as normalizeClass, F as Fragment, j as createVNode, u as unref } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
import { u as usePostStore } from "./PostStore-CaY5yP_v.js";
import "./app-C4Iz7QyH.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1$1 = ["for"];
const _hoisted_2 = ["id", "name", "value"];
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "AppInputDate",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("label", {
          class: "mb-1 flex",
          for: __props.name
        }, toDisplayString(__props.label), 9, _hoisted_1$1),
        createBaseVNode("input", {
          id: __props.name,
          type: "date",
          name: __props.name,
          value: __props.modelValue,
          class: normalizeClass(["date-picker focus:ring-skin-primary-focus mt-1 block w-full rounded-md border-0 bg-skin-neutral-1 px-3 py-2 text-skin-neutral-12 placeholder-skin-neutral-9 shadow-sm ring-1 ring-inset ring-skin-neutral-7 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", _ctx.$attrs.class]),
          onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
        }, null, 42, _hoisted_2)
      ], 64);
    };
  }
});
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-790e0ffb"]]);
const _hoisted_1 = { class: "mt-4" };
const _sfc_main = {
  __name: "PostPublishDate",
  setup(__props) {
    const postStore = usePostStore();
    return (_ctx, _cache) => {
      const _component_AppInputDate = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_AppInputDate, {
          modelValue: unref(postStore).post.published_at,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(postStore).post.published_at = $event),
          label: "Publish Date",
          name: "publish_date"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};

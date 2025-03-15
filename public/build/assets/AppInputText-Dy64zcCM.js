import { f as openBlock, g as createElementBlock, p as renderSlot, r as ref } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "AppButton",
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a3b1349"]]);
const _hoisted_1 = ["value"];
const _sfc_main = {
  __name: "AppInputText",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const inputRef = ref(null);
    const focusInput = () => {
      inputRef.value.focus();
    };
    __expose({
      focusInput
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        ref_key: "inputRef",
        ref: inputRef,
        value: __props.modelValue,
        class: "mt-1 block w-full rounded-md border-0 bg-skin-neutral-1 px-3 py-2 text-skin-neutral-12 placeholder-skin-neutral-9 shadow-sm ring-1 ring-inset ring-skin-neutral-7 focus:ring-2 focus:ring-inset focus:ring-skin-neutral-7 sm:text-sm sm:leading-6",
        onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
      }, null, 40, _hoisted_1);
    };
  }
};
export {
  __unplugin_components_0 as _,
  _export_sfc as a,
  _sfc_main as b
};

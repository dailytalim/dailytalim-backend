import { r as ref, f as openBlock, g as createElementBlock, i as createBaseVNode, ae as mergeProps, n as normalizeClass } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _hoisted_1 = { class: "relative mt-1" };
const _hoisted_2 = ["value", "type"];
const _hoisted_3 = { class: "absolute inset-y-0 right-0 flex items-center pr-3 hover:cursor-pointer" };
const _sfc_main = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "AppInputPassword",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const inputType = ref("password");
    const eyeIcon = ref("ri-eye-line");
    const toggleInput = () => {
      inputType.value = inputType.value === "password" ? "text" : "password";
      eyeIcon.value = eyeIcon.value === "ri-eye-line" ? "ri-eye-off-line" : "ri-eye-line";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("input", mergeProps({ value: __props.modelValue }, _ctx.$attrs, {
          class: "mt-1 block w-full rounded-md border-0 bg-skin-neutral-1 px-3 py-2 text-skin-neutral-12 placeholder-skin-neutral-6 shadow-sm ring-1 ring-inset ring-skin-neutral-7 focus:ring-2 focus:ring-inset focus:ring-skin-neutral-7 sm:text-sm sm:leading-6",
          type: inputType.value,
          onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
        }), null, 16, _hoisted_2),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("i", {
            class: normalizeClass(["inline-block w-5", eyeIcon.value]),
            onClick: toggleInput
          }, null, 2)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};

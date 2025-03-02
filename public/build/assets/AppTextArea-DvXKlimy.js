import { a as _export_sfc } from "./AppInputText-CnCOpisB.js";
import { o as onMounted, r as ref, f as createElementBlock, g as openBlock, n as normalizeClass } from "./runtime-dom.esm-bundler-CDgXytbd.js";
const _hoisted_1 = ["value"];
const _sfc_main = {
  __name: "AppTextArea",
  props: {
    modelValue: {
      type: [String, null],
      required: true
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    onMounted(() => {
      if (props.autoResize) {
        resizeTextarea();
      }
    });
    const emit = __emit;
    const textarea = ref(null);
    function handleInput() {
      const value = textarea.value.value;
      emit("update:modelValue", value);
      if (props.autoResize) {
        resizeTextarea();
      }
    }
    function resizeTextarea() {
      if (textarea.value) {
        textarea.value.style.height = `${textarea.value.scrollHeight}px`;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("textarea", {
        ref_key: "textarea",
        ref: textarea,
        placeholder: "Enter your message here",
        class: normalizeClass(["mt-1 block w-full rounded-md border-0 bg-skin-neutral-1 px-3 py-2 text-skin-neutral-12 placeholder-skin-neutral-9 shadow-sm ring-1 ring-inset ring-skin-neutral-7 focus:ring-2 focus:ring-inset focus:ring-skin-neutral-7 sm:text-sm sm:leading-6", { "overflow-y-hidden": __props.autoResize }]),
        value: __props.modelValue,
        onInput: handleInput
      }, null, 42, _hoisted_1);
    };
  }
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9f668ff"]]);
export {
  __unplugin_components_2 as _
};

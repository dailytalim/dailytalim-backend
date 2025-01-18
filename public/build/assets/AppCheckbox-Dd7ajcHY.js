import { b as computed, r as ref, o as onMounted, f as openBlock, g as createElementBlock, ae as mergeProps } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _hoisted_1 = ["checked"];
const _hoisted_2 = ["value", "checked"];
const _sfc_main = {
  __name: "AppCheckbox",
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: () => []
    },
    value: {
      type: [String, Number, Boolean, Object],
      required: false,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isBooleanType = computed(() => typeof props.modelValue === "boolean");
    function updateBooleanValue(event) {
      emit("update:modelValue", event.target.checked);
    }
    const isChecked = ref(false);
    onMounted(() => {
      if (Array.isArray(props.modelValue)) {
        props.modelValue.forEach((value) => {
          if (value.id === props.value.id) {
            isChecked.value = true;
          }
        });
      }
    });
    const updateArrayValue = (event) => {
      if (Array.isArray(props.modelValue)) {
        const updatedValue = [...props.modelValue];
        if (event.target.checked) {
          updatedValue.push(props.value);
        } else {
          props.modelValue.forEach((value, index) => {
            if (value.id === props.value.id) {
              updatedValue.splice(index, 1);
            }
          });
        }
        emit("update:modelValue", updatedValue);
      }
    };
    return (_ctx, _cache) => {
      return isBooleanType.value ? (openBlock(), createElementBlock("input", mergeProps({
        key: 0,
        type: "checkbox",
        class: "text-skin-primary h-4 w-4 rounded focus:ring-2"
      }, _ctx.$attrs, {
        checked: __props.modelValue,
        onChange: updateBooleanValue
      }), null, 16, _hoisted_1)) : (openBlock(), createElementBlock("input", mergeProps({
        key: 1,
        type: "checkbox",
        class: "text-skin-primary h-4 w-4 rounded focus:ring-2"
      }, _ctx.$attrs, {
        value: __props.value,
        checked: isChecked.value,
        onChange: updateArrayValue
      }), null, 16, _hoisted_2));
    };
  }
};
export {
  _sfc_main as _
};

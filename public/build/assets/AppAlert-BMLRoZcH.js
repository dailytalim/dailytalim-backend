import { a as _export_sfc } from "./AppInputText-Dy64zcCM.js";
import { b as computed, f as openBlock, g as createElementBlock, i as createBaseVNode, n as normalizeClass, p as renderSlot } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
const _sfc_main = {
  __name: "AppAlert",
  props: {
    type: {
      type: String,
      default: "info",
      validator: (value) => {
        return ["info", "success", "warning", "error"].includes(value);
      }
    }
  },
  setup(__props) {
    const props = __props;
    const iconClass = computed(() => {
      return {
        "ri-information-line": props.type === "info",
        "ri-check-line": props.type === "success",
        "ri-alert-line": props.type === "warning",
        "ri-error-warning-line": props.type === "error"
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["alert", __props.type]),
        role: "alert"
      }, [
        createBaseVNode("i", {
          class: normalizeClass([iconClass.value, "mr-2"])
        }, null, 2),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b46b7a2"]]);
export {
  __unplugin_components_8 as _
};

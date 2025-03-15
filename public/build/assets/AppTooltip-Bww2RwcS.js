import { r as ref, b as computed, f as openBlock, g as createElementBlock, i as createBaseVNode, p as renderSlot, j as createVNode, k as withCtx, ab as withDirectives, n as normalizeClass, ae as normalizeStyle, t as toDisplayString, ac as vShow, T as Transition } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import { a as _export_sfc } from "./AppInputText-Dy64zcCM.js";
const _hoisted_1 = { class: "relative inline-block" };
const _sfc_main = {
  __name: "AppTooltip",
  props: {
    text: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: "top"
    }
  },
  setup(__props) {
    const showTooltip = ref(false);
    const props = __props;
    const tooltipClass = computed(() => {
      switch (props.position) {
        case "top":
          return "tooltip-top";
        case "bottom":
          return "tooltip-bottom";
        case "left":
          return "tooltip-left";
        case "right":
          return "tooltip-right";
        default:
          return "tooltip-top";
      }
    });
    const tooltipStyle = ref({
      width: "max-content"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          onMouseover: _cache[0] || (_cache[0] = ($event) => showTooltip.value = true),
          onMouseout: _cache[1] || (_cache[1] = ($event) => showTooltip.value = false)
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 32),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass(["absolute inline-flex rounded bg-skin-neutral-10 p-2 text-xs text-skin-neutral-1 transition-opacity duration-500 ease-in-out", tooltipClass.value]),
              style: normalizeStyle(tooltipStyle.value)
            }, toDisplayString(__props.text), 7), [
              [vShow, showTooltip.value]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0316ba2d"]]);
export {
  __unplugin_components_4 as _
};

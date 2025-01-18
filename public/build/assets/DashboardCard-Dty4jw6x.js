import { a as _export_sfc } from "./AppInputText-zGYkzQim.js";
import { g as createElementBlock, i as createBaseVNode, n as normalizeClass, t as toDisplayString, f as openBlock } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _hoisted_1 = { class: "mb-2 font-semibold" };
const _sfc_main = {
  __name: "DashboardCard",
  props: {
    link: {
      type: String,
      default: null
    },
    count: {
      type: Number,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "info",
      validator: (value) => {
        return ["info", "success", "warning", "danger"].includes(value);
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "shadow-xs flex items-center rounded-lg border border-skin-neutral-4 bg-skin-neutral-2 p-4 transition-all duration-300 hover:cursor-pointer hover:bg-skin-neutral-3",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route(__props.link)))
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["mr-4 rounded-full px-3 py-2", __props.color])
        }, [
          createBaseVNode("i", {
            class: normalizeClass([__props.icon, "text-2xl"])
          }, null, 2)
        ], 2),
        createBaseVNode("div", null, [
          createBaseVNode("p", _hoisted_1, toDisplayString(__props.label), 1),
          createBaseVNode("p", null, toDisplayString(__props.count), 1)
        ])
      ]);
    };
  }
};
const DashboardCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa514aa7"]]);
export {
  DashboardCard as default
};

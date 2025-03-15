import { a as _export_sfc } from "./AppInputText-Dy64zcCM.js";
import { f as openBlock, g as createElementBlock, p as renderSlot, i as createBaseVNode, j as createVNode, u as unref, F as Fragment } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import { _ as _imports_0, m as me, a as __unplugin_components_0$1 } from "./app-DtBtwHzA.js";
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "flex h-screen flex-col items-center justify-center" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _sfc_main$1 = {};
const _hoisted_1 = ["href"];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("a", {
    href: _ctx.route("adminAuth.loginForm"),
    class: "mb-6 flex items-center"
  }, _cache[0] || (_cache[0] = [
    createBaseVNode("img", {
      class: "w-48",
      src: _imports_0,
      alt: "logo"
    }, null, -1)
  ]), 8, _hoisted_1);
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = {
  __name: "GuestLayout",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_AppFlashMessage = __unplugin_components_0$1;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: "Modular" }),
        createBaseVNode("main", null, [
          createBaseVNode("article", null, [
            createVNode(_component_AppFlashMessage),
            renderSlot(_ctx.$slots, "default")
          ])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as _,
  __unplugin_components_7 as a,
  __unplugin_components_0 as b
};

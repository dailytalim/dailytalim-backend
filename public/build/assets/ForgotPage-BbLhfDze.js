import { _ as _sfc_main$1, a as __unplugin_components_7, b as __unplugin_components_0 } from "./GuestLayout-ENL0bWfZ.js";
import { a as _sfc_main$2, _ as __unplugin_components_6 } from "./AppFormErrors-M9vAl0Nk.js";
import { _ as __unplugin_components_7$1 } from "./AppLink-BRiIPEVh.js";
import { b as _sfc_main$3, _ as __unplugin_components_0$1 } from "./AppInputText-Dy64zcCM.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { C, m as me } from "./app-CgEHurdE.js";
import { u as useFormErrors } from "./useFormErrors-BGCQKWOi.js";
import { g as createElementBlock, j as createVNode, u as unref, k as withCtx, F as Fragment, f as openBlock, i as createBaseVNode, t as toDisplayString, y as createTextVNode, n as normalizeClass } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
const _hoisted_1 = { class: "px-2 py-3 text-lg font-semibold tracking-tight" };
const _hoisted_2 = { class: "px-2 text-sm leading-relaxed" };
const _hoisted_3 = { class: "px-2" };
const _hoisted_4 = { class: "px-2" };
const _hoisted_5 = { class: "mt-3" };
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "ForgotPage",
  setup(__props) {
    const form = C({
      email: ""
    });
    function submitForm() {
      form.post(route("adminAuth.sendResetLinkEmail"));
    }
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppAuthLogo = __unplugin_components_0;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppButton = __unplugin_components_0$1;
      const _component_AppLink = __unplugin_components_7$1;
      const _component_AppCard = __unplugin_components_6;
      const _component_AppAuthShell = __unplugin_components_7;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: "Forgot Password" }),
        createVNode(_component_AppAuthShell, null, {
          default: withCtx(() => [
            createVNode(_component_AppAuthLogo),
            createVNode(_component_AppCard, { class: "w-80 space-y-2 bg-skin-neutral-2" }, {
              title: withCtx(() => [
                createBaseVNode("h3", _hoisted_1, toDisplayString(_ctx.__("Forgot your password?")), 1)
              ]),
              description: withCtx(() => [
                createBaseVNode("h2", _hoisted_2, toDisplayString(_ctx.__("Enter your email to reset your password.")), 1)
              ]),
              content: withCtx(() => [
                createVNode(_component_AppFormErrors, { class: "mb-4 px-2" }),
                createBaseVNode("form", null, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_AppLabel, { for: "email" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Your Email")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AppInputText, {
                      id: "email",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).email = $event),
                      type: "text",
                      class: normalizeClass(["w-full", {
                        "p-invalid": unref(errorsFields).includes("email")
                      }])
                    }, null, 8, ["modelValue", "class"])
                  ])
                ])
              ]),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_AppButton, {
                    class: "btn btn-primary flex w-full justify-center",
                    onClick: submitForm
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Send Password Reset Link")), 1)
                    ]),
                    _: 1
                  }),
                  createBaseVNode("p", _hoisted_5, [
                    createVNode(_component_AppLink, {
                      href: _ctx.route("adminAuth.loginForm")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Back to Login")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};

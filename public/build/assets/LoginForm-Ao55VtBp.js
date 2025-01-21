import { _ as _sfc_main$1, a as __unplugin_components_7, b as __unplugin_components_0 } from "./GuestLayout-ENL0bWfZ.js";
import { a as _sfc_main$2, _ as __unplugin_components_6 } from "./AppFormErrors-M9vAl0Nk.js";
import { _ as __unplugin_components_7$1 } from "./AppLink-BRiIPEVh.js";
import { b as _sfc_main$3, _ as __unplugin_components_0$1 } from "./AppInputText-Dy64zcCM.js";
import { _ as _sfc_main$5 } from "./AppCheckbox-Cq19lkFS.js";
import { _ as _sfc_main$4 } from "./AppInputPassword-DmJsordy.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { g as createElementBlock, j as createVNode, u as unref, k as withCtx, F as Fragment, f as openBlock, i as createBaseVNode, t as toDisplayString, y as createTextVNode, n as normalizeClass, a9 as withModifiers } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import { C, m as me } from "./app-CgEHurdE.js";
import { u as useFormErrors } from "./useFormErrors-BGCQKWOi.js";
const _hoisted_1 = { class: "text-center text-lg font-semibold tracking-tight" };
const _hoisted_2 = { class: "mt-6" };
const _hoisted_3 = { class: "mt-4 flex items-center" };
const _hoisted_4 = { class: "mt-3" };
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "LoginForm",
  setup(__props) {
    const form = C({
      email: "",
      password: "",
      remember: false
    });
    function submitForm() {
      form.post(route("adminAuth.login"));
    }
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppAuthLogo = __unplugin_components_0;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppInputPassword = _sfc_main$4;
      const _component_AppCheckbox = _sfc_main$5;
      const _component_AppButton = __unplugin_components_0$1;
      const _component_AppLink = __unplugin_components_7$1;
      const _component_AppCard = __unplugin_components_6;
      const _component_AppAuthShell = __unplugin_components_7;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: "Login" }),
        createVNode(_component_AppAuthShell, null, {
          default: withCtx(() => [
            createVNode(_component_AppAuthLogo),
            createBaseVNode("form", {
              onSubmit: withModifiers(submitForm, ["prevent"])
            }, [
              createVNode(_component_AppCard, { class: "w-80 space-y-2 bg-skin-neutral-2" }, {
                title: withCtx(() => [
                  createBaseVNode("h3", _hoisted_1, toDisplayString(_ctx.__("Sign in to your account")), 1)
                ]),
                content: withCtx(() => [
                  createVNode(_component_AppFormErrors, { class: "mb-4" }),
                  createBaseVNode("div", null, [
                    createVNode(_component_AppLabel, { for: "email" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Email")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AppInputText, {
                      id: "email",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).email = $event),
                      name: "email",
                      type: "text",
                      class: normalizeClass(["w-full", {
                        "input-error": unref(errorsFields).includes("email")
                      }]),
                      autocomplete: "email"
                    }, null, 8, ["modelValue", "class"])
                  ]),
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(_component_AppLabel, { for: "email" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Password")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AppInputPassword, {
                      id: "password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).password = $event),
                      name: "password",
                      class: normalizeClass(["w-full", {
                        "input-error": unref(errorsFields).includes("password")
                      }]),
                      autocomplete: "current-password"
                    }, null, 8, ["modelValue", "class"])
                  ]),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_AppCheckbox, {
                      id: "remember",
                      modelValue: unref(form).remember,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).remember = $event),
                      name: "remember",
                      value: true
                    }, null, 8, ["modelValue"]),
                    createVNode(_component_AppLabel, {
                      for: "remember",
                      class: "ml-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Remember me")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_component_AppButton, {
                    class: "btn btn-primary flex w-full justify-center",
                    "aria-label": "botao submit",
                    type: "submit",
                    onClick: submitForm
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Sign in")), 1)
                    ]),
                    _: 1
                  }),
                  createBaseVNode("p", _hoisted_4, [
                    createVNode(_component_AppLink, {
                      href: _ctx.route("adminAuth.forgotPassword")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Forgot your password?")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                _: 1
              })
            ], 32)
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

import { _ as _sfc_main$1, a as __unplugin_components_0, b as __unplugin_components_7 } from "./GuestLayout-BlCmAlpm.js";
import { a as __unplugin_components_6, _ as _sfc_main$2 } from "./AppFormErrors-0I84ZZlX.js";
import { _ as __unplugin_components_0$1, b as _sfc_main$3 } from "./AppInputText-CnCOpisB.js";
import { _ as _sfc_main$4 } from "./AppInputPassword-kMzgclKO.js";
import { _ as __unplugin_components_2 } from "./AppLabel-DghcdlCQ.js";
import { C } from "./app-eEjzJFVR.js";
import { u as useFormErrors } from "./useFormErrors-DIKlSlSm.js";
import { l as createBlock, g as openBlock, k as withCtx, j as createVNode, y as createTextVNode, t as toDisplayString, i as createBaseVNode, n as normalizeClass, u as unref } from "./runtime-dom.esm-bundler-CDgXytbd.js";
const _hoisted_1 = { class: "text-2xl font-semibold tracking-tight" };
const _hoisted_2 = { class: "mt-6" };
const _hoisted_3 = { class: "mt-6" };
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "ResetPassword",
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = C({
      email: props.email,
      token: props.token,
      password: "",
      password_confirmation: ""
    });
    function submitForm() {
      form.post(route("adminAuth.resetPassword"));
    }
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppAuthLogo = __unplugin_components_0;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppInputPassword = _sfc_main$4;
      const _component_AppButton = __unplugin_components_0$1;
      const _component_AppCard = __unplugin_components_6;
      const _component_AppAuthShell = __unplugin_components_7;
      return openBlock(), createBlock(_component_AppAuthShell, null, {
        default: withCtx(() => [
          createVNode(_component_AppAuthLogo),
          createVNode(_component_AppCard, { class: "min-w-[360px] space-y-6 px-16" }, {
            title: withCtx(() => [
              createBaseVNode("h3", _hoisted_1, toDisplayString(_ctx.__("Password Reset")), 1)
            ]),
            description: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.__("Fill the form below to reset your password")) + ". ", 1)
            ]),
            content: withCtx(() => [
              createVNode(_component_AppFormErrors, { class: "mb-4" }),
              createBaseVNode("form", null, [
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
                    type: "text",
                    class: normalizeClass(["w-full", {
                      "input-error": unref(errorsFields).includes("email")
                    }])
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
                  createVNode(_component_AppLabel, { for: "password_confirmation" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Password Confirmation")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AppInputPassword, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).password_confirmation = $event),
                    name: "password_confirmation",
                    class: normalizeClass(["w-full", {
                      "input-error": unref(errorsFields).includes("password")
                    }])
                  }, null, 8, ["modelValue", "class"])
                ])
              ])
            ]),
            footer: withCtx(() => [
              createVNode(_component_AppButton, {
                class: "btn btn-primary",
                onClick: submitForm
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};

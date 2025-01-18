import { _ as __unplugin_components_6, a as _sfc_main$2 } from "./AppFormErrors-ozD0oAUb.js";
import { b as _sfc_main$3, _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { _ as _sfc_main$4 } from "./AppInputPassword-DH2RAlHc.js";
import { _ as __unplugin_components_2 } from "./AppLabel-CW1bbGwg.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DyGp0Yo1.js";
import { C, m as me } from "./app-fUwecSfK.js";
import { u as useTitle } from "./useTitle-CDeIpNVF.js";
import { u as useFormContext } from "./useFormContext-irIFvdmS.js";
import { u as useFormErrors } from "./useFormErrors-m1LYda6i.js";
import { g as createElementBlock, j as createVNode, u as unref, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, i as createBaseVNode, n as normalizeClass } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _hoisted_1 = { class: "mt-6" };
const _hoisted_2 = { class: "mt-6" };
const _sfc_main = {
  __name: "UserForm",
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const { title } = useTitle("User");
    const props = __props;
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Users", href: route("user.index") },
      { label: "User", last: true }
    ];
    const form = C({
      name: props.user ? props.user.name : "",
      email: props.user ? props.user.email : "",
      password: ""
    });
    const { isCreate } = useFormContext();
    const submitForm = () => {
      if (isCreate.value) {
        form.post(route("user.store"));
      } else {
        form.put(route("user.update", props.user.id));
      }
    };
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppInputPassword = _sfc_main$4;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: unref(title) }, null, 8, ["title"]),
        createVNode(_component_AppSectionHeader, {
          title: unref(title),
          "bread-crumb": breadCrumb
        }, null, 8, ["title"]),
        createVNode(_component_AppCard, { class: "w-full md:w-3/4 xl:w-1/2" }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(unref(title)), 1)
          ]),
          content: withCtx(() => [
            createVNode(_component_AppFormErrors, { class: "mb-4" }),
            createBaseVNode("form", null, [
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "name" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Name")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("name")
                  }),
                  autocomplete: "off"
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_1, [
                createVNode(_component_AppLabel, { for: "email" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Email")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).email = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("email")
                  }),
                  autocomplete: "off"
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
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).password = $event),
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("password")
                  }),
                  autocomplete: "off"
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
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

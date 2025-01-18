var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as __unplugin_components_6, a as _sfc_main$2 } from "./AppFormErrors-ozD0oAUb.js";
import { _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { _ as _sfc_main$4 } from "./AppCheckbox-Dd7ajcHY.js";
import { _ as _sfc_main$3 } from "./AppTipTapEditor-Cp5FwHYi.js";
import { _ as __unplugin_components_2 } from "./AppLabel-CW1bbGwg.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DyGp0Yo1.js";
import { C, m as me } from "./app-fUwecSfK.js";
import { u as useTitle } from "./useTitle-CDeIpNVF.js";
import { u as useFormContext } from "./useFormContext-irIFvdmS.js";
import { u as useFormErrors } from "./useFormErrors-m1LYda6i.js";
import { g as createElementBlock, j as createVNode, u as unref, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, i as createBaseVNode, n as normalizeClass } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = { class: "mt-5 flex items-center" };
const _sfc_main = {
  __name: "HadithForm",
  props: {
    hadith: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const { title } = useTitle("hadith");
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "hadiths", href: route("hadith.index") },
      { label: title, last: true }
    ];
    const form = C({
      description: props.hadith ? props.hadith.description : "",
      active: props.hadith ? props.hadith.active : ""
    });
    const { isCreate } = useFormContext();
    const submitForm = () => {
      const postData = (data) => {
        const commonData = __spreadValues({}, data);
        return isCreate.value ? commonData : __spreadProps(__spreadValues({}, commonData), { _method: "PUT" });
      };
      if (isCreate.value) {
        form.transform(postData).post(route("hadith.store"));
      } else {
        form.transform(postData).post(route("hadith.update", props.hadith.id));
      }
    };
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppTipTapEditor = _sfc_main$3;
      const _component_AppCheckbox = _sfc_main$4;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: unref(title) }, null, 8, ["title"]),
        createVNode(_component_AppSectionHeader, {
          title: unref(title),
          "bread-crumb": breadCrumb
        }, null, 8, ["title"]),
        createVNode(_component_AppCard, { class: "w-full" }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(unref(title)), 1)
          ]),
          content: withCtx(() => [
            createVNode(_component_AppFormErrors, { class: "mb-4" }),
            createBaseVNode("form", _hoisted_1, [
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "description" }, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [
                    createTextVNode("Description")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppTipTapEditor, {
                  modelValue: unref(form).description,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).description = $event),
                  "editor-id": "description",
                  class: normalizeClass({
                    "app-tip-tap-error": unref(errorsFields).includes("description")
                  }),
                  "file-upload-url": _ctx.route("hadith.uploadEditorImage")
                }, null, 8, ["modelValue", "class", "file-upload-url"])
              ]),
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_AppCheckbox, {
                  id: "active",
                  modelValue: unref(form).active,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).active = $event),
                  name: "active",
                  value: true
                }, null, 8, ["modelValue"]),
                createVNode(_component_AppLabel, {
                  for: "active",
                  class: "ml-3"
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" Active ")
                  ])),
                  _: 1
                })
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

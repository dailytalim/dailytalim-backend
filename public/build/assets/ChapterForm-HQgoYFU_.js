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
import { _ as _sfc_main$2, a as __unplugin_components_6 } from "./AppFormErrors-0I84ZZlX.js";
import { _ as __unplugin_components_0, b as _sfc_main$3 } from "./AppInputText-CnCOpisB.js";
import { _ as _sfc_main$4 } from "./AppCheckbox-6CDAHsF0.js";
import { _ as __unplugin_components_2 } from "./AppLabel-DghcdlCQ.js";
import { _ as __unplugin_components_3 } from "./AppCombobox-CT0SRbII.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DUuZje-H.js";
import { C, m as me } from "./app-eEjzJFVR.js";
import { u as useTitle } from "./useTitle-CoIzRuPZ.js";
import { u as useFormContext } from "./useFormContext-Bd_C1v1K.js";
import { u as useFormErrors } from "./useFormErrors-DIKlSlSm.js";
import { o as onMounted, f as createElementBlock, g as openBlock, j as createVNode, u as unref, k as withCtx, y as createTextVNode, t as toDisplayString, i as createBaseVNode, n as normalizeClass, F as Fragment } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = { class: "mt-5 flex items-center" };
const _sfc_main = {
  __name: "ChapterForm",
  props: {
    chapter: {
      type: Object,
      default: null
    },
    kitabs: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const { title } = useTitle("Chapter");
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Chapters", href: route("chapter.index") },
      { label: title, last: true }
    ];
    const form = C({
      kitab_id: props.chapter ? props.chapter.kitab_id : "",
      name: props.chapter ? props.chapter.name : "",
      active: props.chapter ? props.chapter.active : true
    });
    onMounted(() => {
      if (form.kitab_id) {
        form.kitab_id = props.kitabs.find(
          (kitab) => kitab.value === form.kitab_id
        );
      }
    });
    const { isCreate } = useFormContext();
    const getValueFromKey = (data, key) => {
      var _a;
      return ((_a = data[key]) == null ? void 0 : _a.value) || null;
    };
    const submitForm = () => {
      const postData = (data) => {
        const commonData = __spreadProps(__spreadValues({}, data), {
          kitab_id: getValueFromKey(data, "kitab_id")
        });
        return isCreate.value ? commonData : __spreadProps(__spreadValues({}, commonData), { _method: "PUT" });
      };
      if (isCreate.value) {
        form.transform(postData).post(route("chapter.store"));
      } else {
        form.transform(postData).post(route("chapter.update", props.chapter.id));
      }
    };
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppCombobox = __unplugin_components_3;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppCheckbox = _sfc_main$4;
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
            createBaseVNode("form", _hoisted_1, [
              createBaseVNode("div", null, [
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "mb-1 mt-5" }, "Kitab", -1)),
                createVNode(_component_AppCombobox, {
                  modelValue: unref(form).kitab_id,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).kitab_id = $event),
                  options: __props.kitabs,
                  "combo-label": "Select a Kitab",
                  class: "w-full"
                }, null, 8, ["modelValue", "options"])
              ]),
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
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).name = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("name")
                  })
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_AppCheckbox, {
                  id: "active",
                  modelValue: unref(form).active,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).active = $event),
                  name: "active",
                  value: true
                }, null, 8, ["modelValue"]),
                createVNode(_component_AppLabel, {
                  for: "active",
                  class: "ml-3"
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [
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

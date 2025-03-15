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
import { _ as __unplugin_components_6 } from "./AppCard-Bz1FM-N_.js";
import { b as _sfc_main$3, _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { _ as _sfc_main$5 } from "./AppTipTapEditor-D7Se7nUF.js";
import { _ as _sfc_main$4 } from "./AppCheckbox-Cq19lkFS.js";
import { _ as __unplugin_components_3 } from "./AppCombobox-BlgsiT-s.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { _ as _sfc_main$2 } from "./AppFormErrors-BtfqiRSC.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { C, m as me } from "./app-DfNp2XFq.js";
import { u as useTitle } from "./useTitle-CJbjwJnB.js";
import { u as useFormContext } from "./useFormContext-CSgVhLbJ.js";
import { u as useFormErrors } from "./useFormErrors-CnkJJg2b.js";
import { r as ref, w as watch, o as onMounted, g as createElementBlock, j as createVNode, u as unref, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, i as createBaseVNode, n as normalizeClass } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./slug-BnyHR7ug.js";
function useFormKitabOptions(props, form) {
  const kitabOptions = ref([]);
  const chapterOptions = ref([]);
  const formatOptions = (items, labelKey = "name", valueKey = "id") => items.map((item) => ({
    label: item[labelKey],
    value: item[valueKey]
  }));
  const preSelectValue = (options, value) => {
    return options.find((option) => option.value == value) || null;
  };
  const populateChapters = (kitabId) => {
    const kitab = props.kitabs.find((kitab2) => kitab2.id == kitabId);
    chapterOptions.value = formatOptions((kitab == null ? void 0 : kitab.chapters) || []);
  };
  const initializeOptions = () => {
    var _a, _b;
    kitabOptions.value = formatOptions(props.kitabs);
    if (form.kitab_id) {
      form.kitab_id = preSelectValue(kitabOptions.value, form.kitab_id);
      if ((_a = form.kitab_id) == null ? void 0 : _a.value) {
        populateChapters(form.kitab_id.value);
        chapterOptions.value = formatOptions(((_b = props.kitabs.find((k) => k.id == form.kitab_id.value)) == null ? void 0 : _b.chapters) || []);
        form.chapter_id = preSelectValue(chapterOptions.value, form.chapter_id);
      }
    }
  };
  watch(
    () => form.kitab_id,
    (newValue) => {
      var _a;
      form.chapter_id = null;
      if (newValue == null ? void 0 : newValue.value) {
        populateChapters(newValue.value);
        chapterOptions.value = formatOptions(((_a = props.kitabs.find((k) => k.id == newValue.value)) == null ? void 0 : _a.chapters) || []);
        form.chapter_id = preSelectValue(chapterOptions.value, form.chapter_id);
      }
    }
  );
  onMounted(() => {
    initializeOptions();
  });
  return {
    kitabOptions,
    chapterOptions
  };
}
const _hoisted_1 = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" };
const _hoisted_2 = { class: "mt-5 flex items-center" };
const _hoisted_3 = { class: "md:col-span-2" };
const _hoisted_4 = { class: "md:col-span-2" };
const _hoisted_5 = { class: "md:col-span-2" };
const _sfc_main = {
  __name: "HadithForm",
  props: {
    hadith: {
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
    const { title } = useTitle("hadith");
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Hadiths", href: route("hadith.index") },
      { label: title, last: true }
    ];
    const form = C({
      kitab_id: props.hadith ? props.hadith.kitab_id : "",
      chapter_id: props.hadith ? props.hadith.chapter_id : "",
      hadith_no: props.hadith ? props.hadith.hadith_no : "",
      active: props.hadith ? props.hadith.active : true,
      ar: props.hadith ? props.hadith.ar : "",
      bn: props.hadith ? props.hadith.bn : "",
      en: props.hadith ? props.hadith.en : ""
    });
    const { kitabOptions, chapterOptions } = useFormKitabOptions(props, form);
    const { isCreate } = useFormContext();
    const getValueFromKey = (data, key) => {
      var _a;
      return ((_a = data[key]) == null ? void 0 : _a.value) || null;
    };
    const submitForm = () => {
      const postData = (data) => {
        const commonData = __spreadProps(__spreadValues({}, data), {
          kitab_id: getValueFromKey(data, "kitab_id"),
          chapter_id: getValueFromKey(data, "chapter_id")
        });
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
      const _component_AppCombobox = __unplugin_components_3;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppCheckbox = _sfc_main$4;
      const _component_AppTipTapEditor = _sfc_main$5;
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
                createVNode(_component_AppLabel, { for: "kitab_id" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Kitab")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppCombobox, {
                  modelValue: unref(form).kitab_id,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).kitab_id = $event),
                  options: unref(kitabOptions),
                  "combo-label": "Select a Kitab",
                  class: "w-full"
                }, null, 8, ["modelValue", "options"])
              ]),
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "chapter_id" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Chapter")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppCombobox, {
                  modelValue: unref(form).chapter_id,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).chapter_id = $event),
                  options: unref(chapterOptions),
                  "combo-label": "Select a Chapter",
                  class: "w-full"
                }, null, 8, ["modelValue", "options"])
              ]),
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "hadith_no" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Hadith Number")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "hadith_no",
                  modelValue: unref(form).hadith_no,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).hadith_no = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("hadith_no")
                  })
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_AppCheckbox, {
                  id: "active",
                  modelValue: unref(form).active,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).active = $event),
                  name: "active",
                  value: true
                }, null, 8, ["modelValue"]),
                createVNode(_component_AppLabel, {
                  for: "active",
                  class: "ml-3"
                }, {
                  default: withCtx(() => _cache[7] || (_cache[7] = [
                    createTextVNode(" Active ")
                  ])),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_AppLabel, { for: "ar" }, {
                  default: withCtx(() => _cache[8] || (_cache[8] = [
                    createTextVNode("Arabic")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppTipTapEditor, {
                  modelValue: unref(form).ar,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).ar = $event),
                  "editor-id": "ar",
                  class: normalizeClass({
                    "app-tip-tap-error": unref(errorsFields).includes("ar")
                  }),
                  "file-upload-url": _ctx.route("hadith.uploadEditorImage")
                }, null, 8, ["modelValue", "class", "file-upload-url"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_AppLabel, { for: "bn" }, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createTextVNode("Bangla")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppTipTapEditor, {
                  modelValue: unref(form).bn,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).bn = $event),
                  "editor-id": "bn",
                  class: normalizeClass({
                    "app-tip-tap-error": unref(errorsFields).includes("bn")
                  }),
                  "file-upload-url": _ctx.route("hadith.uploadEditorImage")
                }, null, 8, ["modelValue", "class", "file-upload-url"])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_AppLabel, { for: "en" }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode("English")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppTipTapEditor, {
                  modelValue: unref(form).en,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).en = $event),
                  "editor-id": "en",
                  class: normalizeClass({
                    "app-tip-tap-error": unref(errorsFields).includes("en")
                  }),
                  "file-upload-url": _ctx.route("hadith.uploadEditorImage")
                }, null, 8, ["modelValue", "class", "file-upload-url"])
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

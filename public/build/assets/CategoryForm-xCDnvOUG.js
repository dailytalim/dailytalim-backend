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
import { _ as __unplugin_components_0 } from "./AppInputText-CnCOpisB.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DUuZje-H.js";
import { C } from "./app-eEjzJFVR.js";
import { u as useTitle } from "./useTitle-CoIzRuPZ.js";
import { u as useFormContext } from "./useFormContext-Bd_C1v1K.js";
import _sfc_main$3 from "./CategoryBody-BBNd9XKv.js";
import _sfc_main$4 from "./CategoryImage-BKb59XD_.js";
import _sfc_main$5 from "./CategorySeo-A3KLy6GO.js";
import _sfc_main$6 from "./CategoryVisibility-BPWo3idJ.js";
import { u as useCategoryStore } from "./CategoryStore-ZUp3kURs.js";
import { b as onUnmounted, f as createElementBlock, g as openBlock, j as createVNode, k as withCtx, y as createTextVNode, i as createBaseVNode, t as toDisplayString, u as unref, F as Fragment } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./AppTipTapEditor-CqF5YX9f.js";
import "./AppLabel-DghcdlCQ.js";
import "./useFormErrors-DIKlSlSm.js";
import "./AppInputFile-BtOpaExx.js";
import "./AppTextArea-DvXKlimy.js";
import "./AppCheckbox-6CDAHsF0.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "pt-4" };
const _sfc_main = {
  __name: "CategoryForm",
  props: {
    category: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const categoryStore = useCategoryStore();
    const props = __props;
    if (props.category) {
      categoryStore.setCategory(props.category);
    }
    onUnmounted(() => {
      categoryStore.$reset();
    });
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Categories", href: route("blogCategory.index") },
      { label: "Category", last: true }
    ];
    const { title } = useTitle("Category");
    const { isCreate } = useFormContext();
    const submitForm = () => {
      const form = C(categoryStore.category);
      if (isCreate.value) {
        form.post(route("blogCategory.store"));
      } else {
        form.transform((data) => __spreadProps(__spreadValues({}, data), {
          _method: "PUT"
        })).post(route("blogCategory.update", props.category.id));
      }
    };
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AppSectionHeader, {
          title: "Categories",
          "bread-crumb": breadCrumb
        }),
        createVNode(_component_AppCard, { class: "w-full md:w-3/4 xl:w-1/2" }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(unref(title)), 1)
          ]),
          content: withCtx(() => [
            createVNode(_component_AppFormErrors, { class: "mb-4" }),
            createBaseVNode("form", _hoisted_1, [
              createVNode(_sfc_main$3),
              createVNode(_sfc_main$4),
              createVNode(_sfc_main$5),
              createVNode(_sfc_main$6)
            ])
          ]),
          footer: withCtx(() => [
            createVNode(_component_AppButton, {
              class: "btn btn-primary",
              onClick: submitForm
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode(" Save ")
              ])),
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

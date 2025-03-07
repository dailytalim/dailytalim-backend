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
import { _ as __unplugin_components_6, a as _sfc_main$6 } from "./AppFormErrors-DyFN48P-.js";
import { _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { _ as _sfc_main$5 } from "./AppSectionHeader-DjvbNo74.js";
import { C } from "./app-LWwlYPSu.js";
import { u as useTitle } from "./useTitle-CJbjwJnB.js";
import { u as useFormContext } from "./useFormContext-CSgVhLbJ.js";
import _sfc_main$1 from "./CategoryBody-DCj7BUrE.js";
import _sfc_main$2 from "./CategoryImage-D7OWfBW-.js";
import _sfc_main$3 from "./CategorySeo-t7kerF3A.js";
import _sfc_main$4 from "./CategoryVisibility-K6xUmoGq.js";
import { u as useCategoryStore } from "./CategoryStore-C8SmNEAh.js";
import { e as onUnmounted, g as createElementBlock, j as createVNode, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, u as unref, i as createBaseVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./AppTipTapEditor-D7Se7nUF.js";
import "./AppLabel-88FyTEN3.js";
import "./useFormErrors-By5WXFUZ.js";
import "./AppInputFile-BNVf3OW4.js";
import "./AppTextArea-CXtBd_Eu.js";
import "./AppCheckbox-Cq19lkFS.js";
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
      const _component_AppSectionHeader = _sfc_main$5;
      const _component_AppFormErrors = _sfc_main$6;
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
              createVNode(_sfc_main$1),
              createVNode(_sfc_main$2),
              createVNode(_sfc_main$3),
              createVNode(_sfc_main$4)
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

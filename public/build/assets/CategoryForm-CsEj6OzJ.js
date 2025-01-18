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
import { _ as __unplugin_components_6, a as _sfc_main$6 } from "./AppFormErrors-DVioyJlH.js";
import { _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { _ as _sfc_main$5 } from "./AppSectionHeader-DyGp0Yo1.js";
import { C } from "./app-CIBQdNIk.js";
import { u as useTitle } from "./useTitle-CDeIpNVF.js";
import { u as useFormContext } from "./useFormContext-irIFvdmS.js";
import _sfc_main$1 from "./CategoryBody-hJ0rVOVm.js";
import _sfc_main$2 from "./CategoryImage-BU6tc_Px.js";
import _sfc_main$3 from "./CategorySeo-DIur5aH8.js";
import _sfc_main$4 from "./CategoryVisibility-B7lwDsj8.js";
import { u as useCategoryStore } from "./CategoryStore-CHQYz0iG.js";
import { e as onUnmounted, g as createElementBlock, j as createVNode, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, u as unref, i as createBaseVNode } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
import "./AppTipTapEditor-Cp5FwHYi.js";
import "./AppLabel-CW1bbGwg.js";
import "./useFormErrors-Cq2ZeyMU.js";
import "./AppInputFile-DpAaA6ow.js";
import "./AppTextArea-sFKvssBq.js";
import "./AppCheckbox-Dd7ajcHY.js";
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

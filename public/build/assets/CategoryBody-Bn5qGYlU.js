import { _ as _sfc_main$2 } from "./AppTipTapEditor-B-Y4U4LL.js";
import { b as _sfc_main$1 } from "./AppInputText-CnCOpisB.js";
import { _ as __unplugin_components_2 } from "./AppLabel-DghcdlCQ.js";
import { u as useFormErrors } from "./useFormErrors-BNa3lBxB.js";
import { u as useCategoryStore } from "./CategoryStore-mtESB_Ms.js";
import { f as createElementBlock, g as openBlock, i as createBaseVNode, j as createVNode, k as withCtx, y as createTextVNode, n as normalizeClass, u as unref, F as Fragment } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./app-NqH6V6F3.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "mt-5" };
const _sfc_main = {
  __name: "CategoryBody",
  setup(__props) {
    const categoryStore = useCategoryStore();
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$1;
      const _component_AppTipTapEditor = _sfc_main$2;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createVNode(_component_AppLabel, { for: "name" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("Name")
            ])),
            _: 1
          }),
          createVNode(_component_AppInputText, {
            id: "name",
            modelValue: unref(categoryStore).category.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(categoryStore).category.name = $event),
            type: "text",
            class: normalizeClass({
              "input-error": unref(errorsFields).includes("name")
            }),
            autocomplete: "off"
          }, null, 8, ["modelValue", "class"])
        ]),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_AppLabel, { for: "description" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("Description")
            ])),
            _: 1
          }),
          createVNode(_component_AppTipTapEditor, {
            modelValue: unref(categoryStore).category.description,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(categoryStore).category.description = $event),
            "editor-id": "description",
            class: normalizeClass({
              "app-tip-tap-error": unref(errorsFields).includes("description")
            }),
            "file-upload-url": _ctx.route("blogCategory.uploadEditorImage")
          }, null, 8, ["modelValue", "class", "file-upload-url"])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

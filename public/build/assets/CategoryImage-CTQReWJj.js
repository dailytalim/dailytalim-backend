import { _ as _sfc_main$1 } from "./AppInputFile-DpAaA6ow.js";
import { u as useFormContext } from "./useFormContext-irIFvdmS.js";
import { u as useCategoryStore } from "./CategoryStore-hz0Wttf9.js";
import { g as createElementBlock, j as createVNode, u as unref, f as openBlock } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
import "./AppInputText-zGYkzQim.js";
import "./app-C4Iz7QyH.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "mt-5" };
const _sfc_main = {
  __name: "CategoryImage",
  setup(__props) {
    const categoryStore = useCategoryStore();
    const { isCreate } = useFormContext();
    const getImagePreviewURL = () => {
      if (!isCreate.value && categoryStore.category.image_url) {
        return categoryStore.category.image_url;
      }
      return null;
    };
    return (_ctx, _cache) => {
      const _component_AppInputFile = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_AppInputFile, {
          modelValue: unref(categoryStore).category.image,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(categoryStore).category.image = $event),
          "image-preview-url": getImagePreviewURL(),
          onRemoveFile: _cache[1] || (_cache[1] = ($event) => unref(categoryStore).category.remove_previous_image = true)
        }, null, 8, ["modelValue", "image-preview-url"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};

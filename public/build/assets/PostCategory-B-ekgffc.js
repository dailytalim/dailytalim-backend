import { _ as __unplugin_components_0 } from "./AppCombobox-CZ3LWQ7q.js";
import { u as usePostStore } from "./PostStore-AFpzrARk.js";
import { o as onMounted, f as createElementBlock, g as openBlock, i as createBaseVNode, j as createVNode, u as unref, F as Fragment } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./AppInputText-CnCOpisB.js";
import "./slug-BnyHR7ug.js";
import "./app-NqH6V6F3.js";
const _sfc_main = {
  __name: "PostCategory",
  props: {
    categories: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const postStore = usePostStore();
    const props = __props;
    onMounted(() => {
      if (postStore.post.blog_category_id) {
        postStore.post.blog_category_id = props.categories.find(
          (category) => category.value === postStore.post.blog_category_id
        );
      }
    });
    return (_ctx, _cache) => {
      const _component_AppCombobox = __unplugin_components_0;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[1] || (_cache[1] = createBaseVNode("p", { class: "mb-1 mt-5" }, "Category", -1)),
        createVNode(_component_AppCombobox, {
          modelValue: unref(postStore).post.blog_category_id,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(postStore).post.blog_category_id = $event),
          options: __props.categories,
          "combo-label": "Select a Category",
          class: "w-64 xl:w-full"
        }, null, 8, ["modelValue", "options"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

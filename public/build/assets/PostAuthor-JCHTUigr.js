import { _ as __unplugin_components_0 } from "./AppCombobox-DQW4BNs4.js";
import { u as usePostStore } from "./PostStore-CaY5yP_v.js";
import { o as onMounted, g as createElementBlock, i as createBaseVNode, j as createVNode, u as unref, F as Fragment, f as openBlock } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
import "./AppInputText-zGYkzQim.js";
import "./slug-BnyHR7ug.js";
import "./app-C4Iz7QyH.js";
const _sfc_main = {
  __name: "PostAuthor",
  props: {
    authors: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const postStore = usePostStore();
    const props = __props;
    onMounted(() => {
      if (postStore.post.blog_author_id) {
        postStore.post.blog_author_id = props.authors.find(
          (author) => author.value === postStore.post.blog_author_id
        );
      }
    });
    return (_ctx, _cache) => {
      const _component_AppCombobox = __unplugin_components_0;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[1] || (_cache[1] = createBaseVNode("p", { class: "mb-1 mt-5" }, "Author", -1)),
        createVNode(_component_AppCombobox, {
          modelValue: unref(postStore).post.blog_author_id,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(postStore).post.blog_author_id = $event),
          options: __props.authors,
          "combo-label": "Select an Author",
          class: "w-64 xl:w-full"
        }, null, 8, ["modelValue", "options"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

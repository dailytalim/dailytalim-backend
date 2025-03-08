import { _ as __unplugin_components_3 } from "./AppCombobox-CT0SRbII.js";
import { u as usePostStore } from "./PostStore-CMw525jZ.js";
import { r as ref, w as watch, f as createElementBlock, g as openBlock, i as createBaseVNode, j as createVNode, F as Fragment, z as renderList, u as unref, t as toDisplayString } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./AppInputText-CnCOpisB.js";
import "./slug-BnyHR7ug.js";
import "./app-eEjzJFVR.js";
const _hoisted_1 = { class: "mt-2" };
const _hoisted_2 = ["onClick"];
const _sfc_main = {
  __name: "PostTags",
  props: {
    tags: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const postStore = usePostStore();
    const selectedTag = ref(null);
    const updateTagsStatus = () => {
      if (!postStore.tagsHasChanged) {
        postStore.post.tagsHasChanged = true;
      }
    };
    watch(selectedTag, (value) => {
      if (!value) {
        return;
      }
      const postTags = postStore.post.tags;
      const tag = {
        id: value.value,
        name: value.label
      };
      if (!postTags.some((tag2) => tag2.id === value.value)) {
        postTags.push(tag);
        updateTagsStatus();
      }
    });
    const removeTag = (tag) => {
      const postTags = postStore.post.tags;
      const index = postTags.indexOf(tag);
      postTags.splice(index, 1);
      updateTagsStatus();
    };
    return (_ctx, _cache) => {
      const _component_AppCombobox = __unplugin_components_3;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[1] || (_cache[1] = createBaseVNode("p", { class: "mb-1 mt-5" }, "Tag", -1)),
        createVNode(_component_AppCombobox, {
          modelValue: selectedTag.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTag.value = $event),
          options: __props.tags,
          "combo-label": "Select a Tag",
          class: "w-64 xl:w-full"
        }, null, 8, ["modelValue", "options"]),
        createBaseVNode("ul", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(postStore).post.tags, (tag) => {
            return openBlock(), createElementBlock("li", {
              key: tag.id,
              class: "bg-skin-neutral-3 mb-3 flex items-center justify-between rounded p-3"
            }, [
              createBaseVNode("span", null, toDisplayString(tag.name), 1),
              createBaseVNode("i", {
                class: "ri-close-line text-skin-neutral-11 hover:text-skin-neutral-12 hover:cursor-pointer",
                onClick: ($event) => removeTag(tag)
              }, null, 8, _hoisted_2)
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

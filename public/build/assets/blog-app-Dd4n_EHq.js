import { c as createVueApp } from "./create-vue-app-DZPe_E0M.js";
import { _ as __unplugin_components_0 } from "./AppCombobox-CZ3LWQ7q.js";
import { r as ref, o as onMounted, w as watch, f as createElementBlock, g as openBlock, j as createVNode, i as createBaseVNode, M as withKeys } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import { b as _sfc_main$4 } from "./AppInputText-CnCOpisB.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1$3 = { class: "bg-skin-neutral-1 h-12" };
const _sfc_main$3 = {
  __name: "ArchiveSelector",
  props: {
    archiveOptions: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const archiveOptionsList = ref([]);
    onMounted(() => {
      props.archiveOptions.forEach((archiveDate) => {
        archiveOptionsList.value.push({
          value: archiveDate.value,
          label: archiveDate.label
        });
      });
    });
    const selectedArchiveOption = ref(null);
    watch(selectedArchiveOption, (value) => {
      if (value && value.value) {
        window.location.href = `/blog/archive/${value.value}`;
      }
    });
    return (_ctx, _cache) => {
      const _component_AppCombobox = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(_component_AppCombobox, {
          modelValue: selectedArchiveOption.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedArchiveOption.value = $event),
          options: archiveOptionsList.value,
          "use-search": false,
          "combo-label": "Archive",
          class: "w-full"
        }, null, 8, ["modelValue", "options"])
      ]);
    };
  }
};
const _hoisted_1$2 = { class: "bg-skin-neutral-1 h-12" };
const _sfc_main$2 = {
  __name: "TagSelector",
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const tagOptions = ref([]);
    onMounted(() => {
      props.tags.forEach((tag) => {
        tagOptions.value.push({
          value: tag.slug,
          label: tag.name
        });
      });
    });
    const selectedTagOption = ref(null);
    watch(selectedTagOption, (value) => {
      if (value && value.value) {
        window.location.href = `/blog/tag/${value.value}`;
      }
    });
    return (_ctx, _cache) => {
      const _component_AppCombobox = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_AppCombobox, {
          modelValue: selectedTagOption.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTagOption.value = $event),
          options: tagOptions.value,
          "use-search": false,
          "combo-label": "Tags",
          class: "w-full"
        }, null, 8, ["modelValue", "options"])
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "bg-skin-neutral-1 relative" };
const _hoisted_2$1 = { class: "flex items-center align-middle" };
const _sfc_main$1 = {
  __name: "SearchInput",
  setup(__props) {
    const searchTerm = ref("");
    const searchPosts = () => {
      if (searchTerm.value.length) {
        window.location.href = `/blog/search/${searchTerm.value}`;
      }
    };
    return (_ctx, _cache) => {
      const _component_AppInputText = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "pointer-events-none absolute flex items-center pl-3" }, [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              class: "text-skin-neutral-11 h-6 w-6"
            }, [
              createBaseVNode("path", { d: "M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" })
            ])
          ], -1)),
          createVNode(_component_AppInputText, {
            id: "post-search",
            modelValue: searchTerm.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchTerm.value = $event),
            placeholder: "Search Posts...",
            name: "search",
            class: "py-2 pl-11",
            onKeydown: withKeys(searchPosts, ["enter"])
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "mx-auto my-6 max-w-7xl px-6 lg:px-9" };
const _hoisted_2 = { class: "grid grid-cols-1 gap-9 lg:grid-cols-3" };
const _sfc_main = {
  __name: "BlogToolbar",
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    archiveOptions: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$3, { "archive-options": __props.archiveOptions }, null, 8, ["archive-options"]),
          createVNode(_sfc_main$2, { tags: __props.tags }, null, 8, ["tags"]),
          createVNode(_sfc_main$1)
        ])
      ]);
    };
  }
};
createVueApp({
  BlogToolbar: _sfc_main
}).mount("#app");

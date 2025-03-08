import { a as _export_sfc, _ as __unplugin_components_0, b as _sfc_main$1 } from "./AppInputText-CnCOpisB.js";
import { r as ref, o as onMounted, ad as onBeforeUnmount, w as watch, e as computed, f as createElementBlock, g as openBlock, j as createVNode, k as withCtx, i as createBaseVNode, t as toDisplayString, ab as withDirectives, a9 as withModifiers, ac as vShow, M as withKeys, F as Fragment, z as renderList, n as normalizeClass, T as Transition } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import { s as slug } from "./slug-BnyHR7ug.js";
function useClickOutside(elementRef) {
  const isClickOutside = ref(false);
  const handler = (e) => {
    if (elementRef.value && !elementRef.value.contains(e.target)) {
      isClickOutside.value = true;
    } else {
      isClickOutside.value = false;
    }
  };
  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("click", handler);
  });
  return { isClickOutside };
}
const _hoisted_1 = { class: "mr-2 inline-block" };
const _hoisted_2 = { class: "absolute z-50 mt-1 w-full" };
const _hoisted_3 = { class: "bg-skin-neutral-1 p-1 shadow" };
const _hoisted_4 = ["for"];
const _hoisted_5 = { class: "relative" };
const _hoisted_6 = {
  class: "bg-skin-neutral-1 p-1 shadow",
  role: "listbox"
};
const _hoisted_7 = ["aria-selected", "onClick"];
const _sfc_main = {
  __name: "AppCombobox",
  props: {
    modelValue: {
      type: [Object, Number, String, null],
      required: true
    },
    comboLabel: {
      type: String,
      default: "Dropdown search"
    },
    useSearch: {
      type: Boolean,
      default: true
    },
    searchPlaceholder: {
      type: String,
      default: "Search"
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const wrapperRef = ref(null);
    const { isClickOutside } = useClickOutside(wrapperRef);
    watch(isClickOutside, (val) => {
      if (val) {
        isOpen.value = false;
      }
    });
    onMounted(() => {
      isOpen.value && (highlightedIndex.value = 0);
    });
    const getElementId = () => {
      return slug(props.comboLabel);
    };
    const emit = __emit;
    const isOpen = ref(false);
    const searchInputRef = ref(null);
    const toggleState = () => {
      isOpen.value = !isOpen.value;
      highlightedIndex.value = 0;
      window.setTimeout(() => {
        if (isOpen.value) {
          searchOptionText.value = "";
          searchInputRef.value.focusInput();
        }
      }, 100);
    };
    const updateModelValue = (option) => {
      emit("update:modelValue", option);
      toggleState();
    };
    const searchOptionText = ref("");
    const filteredOptions = computed(() => {
      if (searchOptionText.value) {
        return props.options.filter(
          (option) => option.label.toLowerCase().includes(searchOptionText.value.toLowerCase())
        );
      } else {
        return props.options;
      }
    });
    const validateOptionHighlighted = () => {
      if (filteredOptions.value[highlightedIndex.value]) {
        updateModelValue(filteredOptions.value[highlightedIndex.value]);
      }
    };
    const highlightedIndex = ref(0);
    const handleArrowKeys = (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (highlightedIndex.value > 0) {
            highlightedIndex.value--;
          }
          break;
        case "ArrowDown":
          if (highlightedIndex.value < filteredOptions.value.length - 1) {
            highlightedIndex.value++;
          }
          break;
      }
    };
    const clearSelection = (e) => {
      e.stopPropagation();
      highlightedIndex.value = 0;
      emit("update:modelValue", null);
      isOpen.value = false;
    };
    const comboLabelText = computed(() => {
      if (props.modelValue) {
        return props.modelValue.label;
      } else {
        return props.comboLabel;
      }
    });
    return (_ctx, _cache) => {
      const _component_AppButton = __unplugin_components_0;
      const _component_AppInputText = _sfc_main$1;
      return openBlock(), createElementBlock("div", {
        ref_key: "wrapperRef",
        ref: wrapperRef,
        class: "relative w-48"
      }, [
        createVNode(_component_AppButton, {
          class: "mt-1 flex w-full justify-between rounded-md border-0 bg-skin-neutral-1 px-3 py-2 align-middle text-skin-neutral-12 placeholder-skin-neutral-9 shadow-sm ring-1 ring-inset ring-skin-neutral-7 focus:ring-2 focus:ring-inset focus:ring-skin-neutral-7 sm:text-sm sm:leading-6",
          "aria-haspopup": "true",
          "aria-expanded": isOpen.value,
          onClick: toggleState
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_1, toDisplayString(comboLabelText.value), 1),
            createBaseVNode("span", null, [
              withDirectives(createBaseVNode("i", {
                class: "ri-close-circle-line mr-2 inline-block hover:text-skin-neutral-9",
                onClick: withModifiers(clearSelection, ["prevent"])
              }, null, 512), [
                [vShow, __props.modelValue]
              ]),
              _cache[1] || (_cache[1] = createBaseVNode("i", { class: "ri-arrow-down-line hover:text-skin-neutral-9" }, null, -1))
            ])
          ]),
          _: 1
        }, 8, ["aria-expanded"]),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_2, [
              withDirectives(createBaseVNode("div", _hoisted_3, [
                createBaseVNode("label", {
                  for: getElementId(),
                  class: "sr-only"
                }, "Search", 8, _hoisted_4),
                createBaseVNode("div", _hoisted_5, [
                  _cache[2] || (_cache[2] = createBaseVNode("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
                    createBaseVNode("i", {
                      class: "ri-search-line",
                      "aria-hidden": "true"
                    })
                  ], -1)),
                  createVNode(_component_AppInputText, {
                    id: getElementId(),
                    ref_key: "searchInputRef",
                    ref: searchInputRef,
                    modelValue: searchOptionText.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchOptionText.value = $event),
                    role: "searchbox",
                    "aria-autocomplete": "list",
                    type: "text",
                    class: "pl-10",
                    placeholder: __props.searchPlaceholder,
                    onKeypress: withKeys(validateOptionHighlighted, ["enter"]),
                    onKeydown: [
                      handleArrowKeys,
                      withKeys(toggleState, ["esc"])
                    ]
                  }, null, 8, ["id", "modelValue", "placeholder"])
                ])
              ], 512), [
                [vShow, __props.useSearch]
              ]),
              createBaseVNode("ul", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (option, index) => {
                  return openBlock(), createElementBlock("li", {
                    key: option.value,
                    role: "option",
                    "aria-selected": index === highlightedIndex.value,
                    class: normalizeClass(["block px-4 py-2 text-sm hover:cursor-pointer hover:bg-skin-neutral-3 hover:text-skin-neutral-12", {
                      "bg-skin-neutral-3 text-skin-neutral-12": index === highlightedIndex.value
                    }]),
                    onClick: ($event) => updateModelValue(option)
                  }, toDisplayString(option.label), 11, _hoisted_7);
                }), 128))
              ])
            ], 512), [
              [vShow, isOpen.value]
            ])
          ]),
          _: 1
        })
      ], 512);
    };
  }
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d521b099"]]);
export {
  __unplugin_components_3 as _
};

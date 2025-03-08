import { e as computed, l as createBlock, g as openBlock, k as withCtx, ab as withDirectives, i as createBaseVNode, n as normalizeClass, a9 as withModifiers, q as renderSlot, p as createCommentVNode, ac as vShow, T as Transition, r as ref, j as createVNode, y as createTextVNode, t as toDisplayString, x as resolveComponent, f as createElementBlock, F as Fragment, z as renderList, ae as normalizeStyle, w as watch, o as onMounted, u as unref, C as isRef } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import { a as _export_sfc, _ as __unplugin_components_0, b as _sfc_main$9 } from "./AppInputText-CnCOpisB.js";
import { W as Wr } from "./app-eEjzJFVR.js";
const _sfc_main$8 = {
  __name: "AppModal",
  props: {
    backdropClasses: {
      type: String,
      default: "bg-skin-neutral-9 bg-opacity-75 fixed inset-0 z-50"
    },
    placement: {
      type: String,
      default: "center"
    },
    isModalOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["modal:toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const placementClass = computed(() => {
      switch (props.placement) {
        case "center":
          return "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
        case "top":
          return "absolute top-0 left-1/2 transform -translate-x-1/2";
        case "bottom":
          return "absolute bottom-0 left-1/2 transform -translate-x-1/2";
        case "left":
          return "absolute top-1/2 left-0 transform -translate-y-1/2";
        case "right":
          return "absolute top-1/2 right-0 transform -translate-y-1/2";
        case "top-left":
          return "absolute top-0 left-0";
        case "top-right":
          return "absolute top-0 right-0";
        case "bottom-left":
          return "absolute bottom-0 left-0";
        case "bottom-right":
          return "absolute bottom-0 right-0";
        default:
          return "";
      }
    });
    function hideModal() {
      emit("modal:toggle");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(__props.backdropClasses),
            onClick: hideModal
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["mx-auto my-auto min-w-[360px] rounded-lg bg-skin-neutral-2 p-4 text-skin-neutral-11 lg:w-1/3", [placementClass.value, "absolute"]]),
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, [
              _ctx.$slots.header ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : createCommentVNode("", true),
              _ctx.$slots.body ? renderSlot(_ctx.$slots, "body", { key: 1 }, void 0, true) : createCommentVNode("", true),
              _ctx.$slots.footer ? renderSlot(_ctx.$slots, "footer", { key: 2 }, void 0, true) : createCommentVNode("", true)
            ], 2)
          ], 2), [
            [vShow, __props.isModalOpen]
          ])
        ]),
        _: 3
      });
    };
  }
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-150864e9"]]);
const _hoisted_1$6 = { class: "flex items-center justify-between rounded-t border-b border-skin-neutral-6 p-5" };
const _hoisted_2$3 = { class: "text-xl font-semibold lg:text-2xl" };
const _hoisted_3$1 = { class: "space-y-6 p-5" };
const _hoisted_4$1 = { class: "text-base leading-relaxed" };
const _hoisted_5$1 = { class: "flex items-center justify-end space-x-2 rounded-b border-t border-skin-neutral-6 p-5" };
const _sfc_main$7 = {
  __name: "AppConfirmDialog",
  setup(__props, { expose: __expose }) {
    const isModalOpen = ref(false);
    const deleteItemRoute = ref(null);
    const toggleModal = () => {
      isModalOpen.value = !isModalOpen.value;
    };
    const openModal = (deleteRoute) => {
      deleteItemRoute.value = deleteRoute;
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const deleteItem = () => {
      isModalOpen.value = false;
      Wr.visit(deleteItemRoute.value, {
        method: "delete"
      });
    };
    __expose({
      openModal
    });
    return (_ctx, _cache) => {
      const _component_AppButton = __unplugin_components_0;
      const _component_AppModal = __unplugin_components_1;
      return openBlock(), createBlock(_component_AppModal, {
        "is-modal-open": isModalOpen.value,
        "onModal:toggle": toggleModal
      }, {
        header: withCtx(() => [
          createBaseVNode("div", _hoisted_1$6, [
            createBaseVNode("h3", _hoisted_2$3, toDisplayString(_ctx.__("Confirmation")), 1),
            createVNode(_component_AppButton, {
              class: "btn btn-neutral btn-icon",
              onClick: closeModal
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("i", { class: "ri-close-line h-5 w-5" }, null, -1)
              ])),
              _: 1
            })
          ])
        ]),
        body: withCtx(() => [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("p", _hoisted_4$1, toDisplayString(_ctx.__("Are you sure you want to proceed?")), 1)
          ])
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_component_AppButton, {
              class: "btn btn-neutral mr-3",
              onClick: closeModal
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("No")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_AppButton, {
              class: "btn btn-destructive",
              onClick: _cache[0] || (_cache[0] = ($event) => deleteItem())
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Yes")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["is-modal-open"]);
    };
  }
};
const _hoisted_1$5 = { class: "flex justify-between" };
const _hoisted_2$2 = { class: "pt-5" };
const _hoisted_3 = { class: "font-bold" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["innerHTML"];
const _sfc_main$6 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "AppPaginator",
  props: {
    links: {
      type: Array,
      required: true
    },
    from: {
      type: Number,
      required: true
    },
    to: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Link = resolveComponent("Link");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$2, [
          createTextVNode(" Showing " + toDisplayString(__props.from) + " to " + toDisplayString(__props.to) + " of ", 1),
          createBaseVNode("span", _hoisted_3, toDisplayString(__props.total), 1),
          _cache[0] || (_cache[0] = createTextVNode(" results "))
        ]),
        __props.links.length > 3 ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", {
            class: normalizeClass(["flex flex-wrap", _ctx.$attrs.class])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, (link, index) => {
              return openBlock(), createElementBlock(Fragment, { key: index }, [
                link.url === null ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "mb-1 mr-1 rounded border px-3 py-2 text-sm leading-4 opacity-30",
                  innerHTML: link.label
                }, null, 8, _hoisted_5)) : (openBlock(), createBlock(_component_Link, {
                  key: 1,
                  class: normalizeClass(["mb-1 mr-1 rounded border px-3 py-2 text-sm leading-4 hover:bg-skin-primary-10 hover:text-skin-primary-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", {
                    "bg-skin-primary-9 text-skin-primary-2": link.active
                  }]),
                  href: link.url,
                  innerHTML: link.label
                }, null, 8, ["class", "href", "innerHTML"]))
              ], 64);
            }), 128))
          ], 2)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$5 = {
  __name: "AppDataTableHead",
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("thead", null, [
        createBaseVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, (header) => {
            return openBlock(), createElementBlock("th", {
              key: header,
              class: "border border-skin-neutral-6 bg-skin-neutral-5 px-2 py-2"
            }, toDisplayString(header), 1);
          }), 128))
        ])
      ]);
    };
  }
};
const _hoisted_1$4 = { class: "overflow-x-auto" };
const _hoisted_2$1 = { class: "w-full table-auto text-left" };
const _sfc_main$4 = {
  __name: "AppDataTable",
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_AppDataTableHead = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("table", _hoisted_2$1, [
          _ctx.$slots.TableHead ? renderSlot(_ctx.$slots, "TableHead", { key: 0 }) : createCommentVNode("", true),
          !_ctx.$slots.TableHead && __props.headers.length ? (openBlock(), createBlock(_component_AppDataTableHead, {
            key: 1,
            headers: __props.headers
          }, null, 8, ["headers"])) : createCommentVNode("", true),
          _ctx.$slots.TableBody ? renderSlot(_ctx.$slots, "TableBody", { key: 2 }) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
const _sfc_main$3 = {};
const _hoisted_1$3 = { class: "border border-skin-neutral-4 hover:bg-skin-neutral-3" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("tr", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
const _hoisted_1$2 = { class: "relative inline-block" };
const _sfc_main$2 = {
  __name: "AppTooltip",
  props: {
    text: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: "top"
    }
  },
  setup(__props) {
    const showTooltip = ref(false);
    const props = __props;
    const tooltipClass = computed(() => {
      switch (props.position) {
        case "top":
          return "tooltip-top";
        case "bottom":
          return "tooltip-bottom";
        case "left":
          return "tooltip-left";
        case "right":
          return "tooltip-right";
        default:
          return "tooltip-top";
      }
    });
    const tooltipStyle = ref({
      width: "max-content"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", {
          onMouseover: _cache[0] || (_cache[0] = ($event) => showTooltip.value = true),
          onMouseout: _cache[1] || (_cache[1] = ($event) => showTooltip.value = false)
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 32),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass(["absolute inline-flex rounded bg-skin-neutral-10 p-2 text-xs text-skin-neutral-1 transition-opacity duration-500 ease-in-out", tooltipClass.value]),
              style: normalizeStyle(tooltipStyle.value)
            }, toDisplayString(__props.text), 7), [
              [vShow, showTooltip.value]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0316ba2d"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "whitespace-nowrap border border-skin-neutral-6 px-2 py-1.5 font-medium" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("td", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function useDataSearch(routePath, columnsToSearch, aditionalParams = {}) {
  const searchTerm = ref("");
  const debouncedSearch = debounce((value) => {
    const params = {
      page: 1,
      searchContext: columnsToSearch,
      searchTerm: value
    };
    Object.assign(params, aditionalParams);
    fetchData(params);
  }, 500);
  watch(searchTerm, (value, oldValue) => {
    if (oldValue === "" && value.length > 1) {
      return;
    }
    debouncedSearch(value);
  });
  const fetchData = (params) => {
    Wr.visit(routePath, {
      data: params,
      replace: true,
      preserveState: true
    });
  };
  const clearSearch = () => {
    searchTerm.value = "";
    const params = { page: 1 };
    Object.assign(params, aditionalParams);
    fetchData(params);
  };
  onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    searchTerm.value = urlParams.get("searchTerm") || "";
  });
  return { searchTerm, clearSearch };
}
const _hoisted_1 = { class: "rounded-tl rounded-tr bg-skin-neutral-3 pb-4 pl-3 pt-3" };
const _hoisted_2 = { class: "flex items-center pr-4 align-middle" };
const _sfc_main = {
  __name: "AppDataSearch",
  props: {
    url: {
      type: String,
      required: true
    },
    fieldsToSearch: {
      type: String,
      required: true
    },
    additionalParams: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { searchTerm, clearSearch } = useDataSearch(
      props.url,
      props.fieldsToSearch,
      props.additionalParams
    );
    return (_ctx, _cache) => {
      const _component_AppInputText = _sfc_main$9;
      const _component_AppButton = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[3] || (_cache[3] = createBaseVNode("label", {
          for: "search",
          class: "sr-only"
        }, "Search", -1)),
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "pointer-events-none absolute flex items-center pl-3" }, [
            createBaseVNode("i", { class: "ri-search-line" })
          ], -1)),
          createVNode(_component_AppInputText, {
            id: "search",
            modelValue: unref(searchTerm),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchTerm) ? searchTerm.value = $event : null),
            placeholder: _ctx.__("Search"),
            name: "search",
            class: "w-full py-2 pl-9 md:w-1/2"
          }, null, 8, ["modelValue", "placeholder"]),
          unref(searchTerm) ? (openBlock(), createBlock(_component_AppButton, {
            key: 0,
            class: "btn ml-2 border border-skin-neutral-8 bg-skin-neutral-5 hover:bg-skin-neutral-8",
            onClick: unref(clearSearch)
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("i", { class: "ri-close-line" }, null, -1)
            ])),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
export {
  __unplugin_components_5 as _,
  __unplugin_components_3 as a,
  __unplugin_components_4 as b,
  _sfc_main$6 as c,
  _sfc_main$7 as d,
  _sfc_main as e,
  _sfc_main$4 as f
};

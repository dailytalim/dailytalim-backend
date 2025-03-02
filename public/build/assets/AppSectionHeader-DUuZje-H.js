import { x as resolveComponent, f as createElementBlock, g as openBlock, p as createCommentVNode, l as createBlock, t as toDisplayString, k as withCtx, y as createTextVNode, F as Fragment, i as createBaseVNode, z as renderList, j as createVNode, q as renderSlot } from "./runtime-dom.esm-bundler-CDgXytbd.js";
const _hoisted_1$2 = {
  key: 0,
  class: "opacity-50"
};
const _hoisted_2$1 = { key: 2 };
const _sfc_main$2 = {
  __name: "AppBreadCrumbItem",
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Link = resolveComponent("Link");
      return openBlock(), createElementBlock(Fragment, null, [
        !__props.item.href ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(_ctx.__(__props.item.label)), 1)) : createCommentVNode("", true),
        __props.item.href ? (openBlock(), createBlock(_component_Link, {
          key: 1,
          href: __props.item.href,
          class: "hover:underline"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.__(__props.item.label)), 1)
          ]),
          _: 1
        }, 8, ["href"])) : createCommentVNode("", true),
        !__props.item.last ? (openBlock(), createElementBlock("span", _hoisted_2$1, " > ")) : createCommentVNode("", true)
      ], 64);
    };
  }
};
const _hoisted_1$1 = { "aria-label": "Breadcrumb" };
const _sfc_main$1 = {
  __name: "AppBreadCrumb",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_AppBreadCrumbItem = _sfc_main$2;
      return openBlock(), createElementBlock("nav", _hoisted_1$1, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createBlock(_component_AppBreadCrumbItem, {
              key: item.label,
              item
            }, null, 8, ["item"]);
          }), 128))
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "mb-6 mt-4" };
const _hoisted_2 = { "aria-label": "Top" };
const _hoisted_3 = { class: "flex w-full items-center justify-between py-6" };
const _hoisted_4 = { class: "flex items-center" };
const _hoisted_5 = { class: "text-2xl" };
const _hoisted_6 = { class: "ml-10 space-x-4" };
const _sfc_main = {
  __name: "AppSectionHeader",
  props: {
    title: {
      type: String,
      default: "-"
    },
    breadCrumb: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_AppBreadCrumb = _sfc_main$1;
      return openBlock(), createElementBlock("header", _hoisted_1, [
        createBaseVNode("nav", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", null, [
                createBaseVNode("h2", _hoisted_5, toDisplayString(__props.title), 1),
                createVNode(_component_AppBreadCrumb, { items: __props.breadCrumb }, null, 8, ["items"])
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              renderSlot(_ctx.$slots, "right")
            ])
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _
};

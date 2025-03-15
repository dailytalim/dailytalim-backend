import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as __unplugin_components_3, d as __unplugin_components_5, e as _sfc_main$5 } from "./AppDataSearch-BegMC6fF.js";
import { _ as __unplugin_components_8 } from "./AppAlert-BMLRoZcH.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { u as useAuthCan, m as me } from "./app-DfNp2XFq.js";
import { u as useTitle } from "./useTitle-CJbjwJnB.js";
import { r as ref, g as createElementBlock, j as createVNode, u as unref, k as withCtx, l as createBlock, q as createCommentVNode, F as Fragment, f as openBlock, i as createBaseVNode, y as createTextVNode, z as renderList, n as normalizeClass, t as toDisplayString } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./useFormContext-CSgVhLbJ.js";
const _hoisted_1 = { class: "flex gap-2" };
const _sfc_main = {
  __name: "MessageIndex",
  props: {
    messages: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const { title } = useTitle("Messages");
    const { can } = useAuthCan();
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: title, last: true }
    ];
    const headers = ["Sender", "Phone", "Subject", "Date"];
    const confirmDialogRef = ref(null);
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppDataSearch = _sfc_main$2;
      const _component_AppDataTableData = __unplugin_components_3;
      const _component_AppDataTableRow = __unplugin_components_5;
      const _component_AppDataTable = _sfc_main$3;
      const _component_AppPaginator = _sfc_main$4;
      const _component_AppAlert = __unplugin_components_8;
      const _component_AppConfirmDialog = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: unref(title) }, null, 8, ["title"]),
        createVNode(_component_AppSectionHeader, {
          title: unref(title),
          "bread-crumb": breadCrumb
        }, {
          right: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              unref(can)("message-recycle-bin-list") ? (openBlock(), createBlock(_component_AppButton, {
                key: 0,
                class: "btn btn-secondary",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("message.recycleBin.index")))
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createBaseVNode("i", { class: "ri-recycle-line mr-1" }, null, -1),
                  createTextVNode(" Recycle Bin ")
                ])),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        __props.messages.data.length || _ctx.route().params.searchTerm ? (openBlock(), createBlock(_component_AppDataSearch, {
          key: 0,
          url: _ctx.route("message.index"),
          "fields-to-search": "name"
        }, null, 8, ["url"])) : createCommentVNode("", true),
        __props.messages.data.length ? (openBlock(), createBlock(_component_AppDataTable, {
          key: 1,
          headers
        }, {
          TableBody: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.messages.data, (item, index) => {
                return openBlock(), createBlock(_component_AppDataTableRow, {
                  key: item.id,
                  class: normalizeClass([!item.read_at ? "font-semibold" : "", "cursor-pointer hover:bg-skin-neutral-4 hover:text-skin-primary-12"]),
                  onClick: ($event) => _ctx.$inertia.visit(_ctx.route("message.show", item.id))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AppDataTableData, {
                      class: normalizeClass(
                        !item.read_at ? "font-semibold" : "text-skin-neutral-11"
                      )
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    createVNode(_component_AppDataTableData, {
                      class: normalizeClass(
                        !item.read_at ? "font-semibold" : "text-skin-neutral-11"
                      )
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.phone), 1)
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    createVNode(_component_AppDataTableData, {
                      class: normalizeClass(
                        !item.read_at ? "font-semibold" : "text-skin-neutral-11"
                      )
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.subject), 1)
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    createVNode(_component_AppDataTableData, {
                      class: normalizeClass(
                        !item.read_at ? "font-semibold" : "text-skin-neutral-11"
                      )
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.created_at), 1)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]);
              }), 128))
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_AppPaginator, {
          links: __props.messages.links,
          from: (_a = __props.messages.from) != null ? _a : 0,
          to: (_b = __props.messages.to) != null ? _b : 0,
          total: (_c = __props.messages.total) != null ? _c : 0,
          class: "mt-4 justify-center"
        }, null, 8, ["links", "from", "to", "total"]),
        !__props.messages.data.length ? (openBlock(), createBlock(_component_AppAlert, {
          key: 2,
          class: "mt-4"
        }, {
          default: withCtx(() => _cache[2] || (_cache[2] = [
            createTextVNode(" No data found. ")
          ])),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_AppConfirmDialog, {
          ref_key: "confirmDialogRef",
          ref: confirmDialogRef
        }, null, 512)
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

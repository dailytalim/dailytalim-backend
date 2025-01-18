import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as __unplugin_components_3, d as __unplugin_components_4, e as __unplugin_components_5, f as _sfc_main$5 } from "./AppDataSearch-C9C2_7TX.js";
import { _ as __unplugin_components_8 } from "./AppAlert-Czo9abnJ.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DyGp0Yo1.js";
import { _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { u as useAuthCan } from "./app-CIBQdNIk.js";
import { r as ref, g as createElementBlock, j as createVNode, k as withCtx, l as createBlock, q as createCommentVNode, F as Fragment, f as openBlock, u as unref, y as createTextVNode, i as createBaseVNode, z as renderList, t as toDisplayString } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _sfc_main = {
  __name: "TagIndex",
  props: {
    tags: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Tags", last: true }
    ];
    const headers = ["Name", "Actions"];
    const confirmDialogRef = ref(null);
    const confirmDelete = (deleteRoute) => {
      confirmDialogRef.value.openModal(deleteRoute);
    };
    const { can } = useAuthCan();
    return (_ctx, _cache) => {
      const _component_AppButton = __unplugin_components_0;
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppDataSearch = _sfc_main$2;
      const _component_AppDataTableData = __unplugin_components_3;
      const _component_AppTooltip = __unplugin_components_4;
      const _component_AppDataTableRow = __unplugin_components_5;
      const _component_AppDataTable = _sfc_main$3;
      const _component_AppPaginator = _sfc_main$4;
      const _component_AppAlert = __unplugin_components_8;
      const _component_AppConfirmDialog = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AppSectionHeader, {
          title: "Tags",
          "bread-crumb": breadCrumb
        }, {
          right: withCtx(() => [
            unref(can)("Blog: Tag - Create") ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              class: "btn btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("blogTag.create")))
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode(" Create Tag ")
              ])),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        __props.tags.data.length || _ctx.route().params.searchTerm ? (openBlock(), createBlock(_component_AppDataSearch, {
          key: 0,
          url: _ctx.route("blogTag.index"),
          "fields-to-search": "name"
        }, null, 8, ["url"])) : createCommentVNode("", true),
        __props.tags.data.length ? (openBlock(), createBlock(_component_AppDataTable, {
          key: 1,
          headers
        }, {
          TableBody: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tags.data, (item) => {
                return openBlock(), createBlock(_component_AppDataTableRow, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        unref(can)("Blog: Tag - Edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 0,
                          text: "Edit Tag",
                          class: "mr-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(
                                _ctx.route("blogTag.edit", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[2] || (_cache[2] = [
                                createBaseVNode("i", { class: "ri-edit-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        unref(can)("Blog: Tag - Delete") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 1,
                          text: "Delete Tag"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-destructive",
                              onClick: ($event) => confirmDelete(
                                _ctx.route("blogTag.destroy", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[3] || (_cache[3] = [
                                createBaseVNode("i", { class: "ri-delete-bin-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_AppPaginator, {
          links: __props.tags.links,
          from: __props.tags.from || 0,
          to: __props.tags.to || 0,
          total: __props.tags.total || 0,
          class: "mt-4 justify-center"
        }, null, 8, ["links", "from", "to", "total"]),
        !__props.tags.data.length ? (openBlock(), createBlock(_component_AppAlert, {
          key: 2,
          class: "mt-4"
        }, {
          default: withCtx(() => _cache[4] || (_cache[4] = [
            createTextVNode(" No tags found. ")
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

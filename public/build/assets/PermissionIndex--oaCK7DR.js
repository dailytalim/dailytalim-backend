import { _ as __unplugin_components_5, a as __unplugin_components_3, b as __unplugin_components_4, c as _sfc_main$2, d as _sfc_main$3, e as _sfc_main$4, f as _sfc_main$5 } from "./AppDataSearch-r5CGCtTu.js";
import { _ as __unplugin_components_8 } from "./AppAlert-D7j6r4X1.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DUuZje-H.js";
import { _ as __unplugin_components_0 } from "./AppInputText-CnCOpisB.js";
import { u as useAuthCan } from "./app-B1Sq0VTC.js";
import { r as ref, f as createElementBlock, g as openBlock, j as createVNode, l as createBlock, p as createCommentVNode, k as withCtx, u as unref, y as createTextVNode, t as toDisplayString, i as createBaseVNode, F as Fragment, z as renderList } from "./runtime-dom.esm-bundler-CDgXytbd.js";
const _sfc_main = {
  __name: "PermissionIndex",
  props: {
    permissions: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const { can } = useAuthCan();
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Permissions", last: true }
    ];
    const headers = ["ID", "Name", "Actions"];
    const confirmDialogRef = ref(null);
    const confirmDelete = (deleteRoute) => {
      confirmDialogRef.value.openModal(deleteRoute);
    };
    return (_ctx, _cache) => {
      const _component_AppButton = __unplugin_components_0;
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppDataSearch = _sfc_main$4;
      const _component_AppDataTableData = __unplugin_components_3;
      const _component_AppTooltip = __unplugin_components_4;
      const _component_AppDataTableRow = __unplugin_components_5;
      const _component_AppDataTable = _sfc_main$5;
      const _component_AppPaginator = _sfc_main$2;
      const _component_AppAlert = __unplugin_components_8;
      const _component_AppConfirmDialog = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AppSectionHeader, {
          title: _ctx.__("Permissions"),
          "bread-crumb": breadCrumb
        }, {
          right: withCtx(() => [
            unref(can)("Acl: Permission - Create") ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              class: "btn btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("aclPermission.create")))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Create Permission")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title"]),
        __props.permissions.data.length || _ctx.route().params.searchTerm ? (openBlock(), createBlock(_component_AppDataSearch, {
          key: 0,
          url: _ctx.route("aclPermission.index"),
          "fields-to-search": "name"
        }, null, 8, ["url"])) : createCommentVNode("", true),
        __props.permissions.data.length ? (openBlock(), createBlock(_component_AppDataTable, {
          key: 1,
          headers
        }, {
          TableBody: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.permissions.data, (item) => {
                return openBlock(), createBlock(_component_AppDataTableRow, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.id), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        unref(can)("Acl: Permission - Edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 0,
                          text: _ctx.__("Edit Permission"),
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(
                                _ctx.route("aclPermission.edit", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[1] || (_cache[1] = [
                                createBaseVNode("i", { class: "ri-edit-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["text"])) : createCommentVNode("", true),
                        unref(can)("Acl: Permission - Delete") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 1,
                          text: _ctx.__("Delete Permission")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-destructive",
                              onClick: ($event) => confirmDelete(
                                _ctx.route("aclPermission.destroy", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[2] || (_cache[2] = [
                                createBaseVNode("i", { class: "ri-delete-bin-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["text"])) : createCommentVNode("", true)
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
          links: __props.permissions.links,
          from: __props.permissions.from || 0,
          to: __props.permissions.to || 0,
          total: __props.permissions.total || 0,
          class: "mt-4 justify-center"
        }, null, 8, ["links", "from", "to", "total"]),
        !__props.permissions.data.length ? (openBlock(), createBlock(_component_AppAlert, {
          key: 2,
          class: "mt-4"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.__("No permissions found.")), 1)
          ]),
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

import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as __unplugin_components_3, d as __unplugin_components_5, e as _sfc_main$5 } from "./AppDataSearch-BegMC6fF.js";
import { _ as __unplugin_components_8 } from "./AppAlert-BMLRoZcH.js";
import { _ as __unplugin_components_4 } from "./AppTooltip-Bww2RwcS.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { u as useAuthCan } from "./app-DfNp2XFq.js";
import { r as ref, g as createElementBlock, j as createVNode, k as withCtx, l as createBlock, q as createCommentVNode, F as Fragment, f as openBlock, u as unref, y as createTextVNode, t as toDisplayString, i as createBaseVNode, z as renderList } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
const _sfc_main = {
  __name: "UserIndex",
  props: {
    users: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const { can } = useAuthCan();
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Users", last: true }
    ];
    const headers = ["ID", "Name", "Email", "Actions"];
    const confirmDialogRef = ref(null);
    const confirmDelete = (deleteRoute) => {
      confirmDialogRef.value.openModal(deleteRoute);
    };
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
          title: _ctx.__("Users"),
          "bread-crumb": breadCrumb
        }, {
          right: withCtx(() => [
            unref(can)("Acl: User - Create") ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              class: "btn btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("user.create")))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Create User")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title"]),
        __props.users.data.length || _ctx.route().params.searchTerm ? (openBlock(), createBlock(_component_AppDataSearch, {
          key: 0,
          url: _ctx.route("user.index"),
          "fields-to-search": "name"
        }, null, 8, ["url"])) : createCommentVNode("", true),
        __props.users.data.length ? (openBlock(), createBlock(_component_AppDataTable, {
          key: 1,
          headers
        }, {
          TableBody: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.users.data, (item) => {
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
                        createTextVNode(toDisplayString(item.email), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        unref(can)("Acl: User: Role - Edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 0,
                          text: _ctx.__("User Roles"),
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(
                                _ctx.route("aclUserRole.edit", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[1] || (_cache[1] = [
                                createBaseVNode("i", { class: "ri-account-box-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["text"])) : createCommentVNode("", true),
                        unref(can)("Acl: User: Permission - Edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 1,
                          text: _ctx.__("User Permissions"),
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(
                                _ctx.route("aclUserPermission.edit", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[2] || (_cache[2] = [
                                createBaseVNode("i", { class: "ri-shield-keyhole-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["text"])) : createCommentVNode("", true),
                        unref(can)("Acl: User - Edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 2,
                          text: _ctx.__("Edit User"),
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(_ctx.route("user.edit", item.id))
                            }, {
                              default: withCtx(() => _cache[3] || (_cache[3] = [
                                createBaseVNode("i", { class: "ri-edit-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["text"])) : createCommentVNode("", true),
                        unref(can)("Acl: User - Delete") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 3,
                          text: _ctx.__("Delete User")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-destructive",
                              onClick: ($event) => confirmDelete(
                                _ctx.route("user.destroy", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[4] || (_cache[4] = [
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
          links: __props.users.links,
          from: __props.users.from || 0,
          to: __props.users.to || 0,
          total: __props.users.total || 0,
          class: "mt-4 justify-center"
        }, null, 8, ["links", "from", "to", "total"]),
        !__props.users.data.length ? (openBlock(), createBlock(_component_AppAlert, {
          key: 2,
          class: "mt-4"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.__("No users found")), 1)
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

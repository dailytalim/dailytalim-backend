import { _ as __unplugin_components_5, a as __unplugin_components_3, b as __unplugin_components_4, c as _sfc_main$2, d as _sfc_main$3, e as _sfc_main$4, f as _sfc_main$5 } from "./AppDataSearch-dchWGWJ9.js";
import { _ as __unplugin_components_8 } from "./AppAlert-D7j6r4X1.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DUuZje-H.js";
import { _ as __unplugin_components_0 } from "./AppInputText-CnCOpisB.js";
import { u as useAuthCan } from "./app-eEjzJFVR.js";
import { A as AppImageNotAvailable } from "./AppImageNotAvailable-Cskil57i.js";
import { r as ref, f as createElementBlock, g as openBlock, j as createVNode, l as createBlock, p as createCommentVNode, k as withCtx, u as unref, y as createTextVNode, i as createBaseVNode, F as Fragment, z as renderList, t as toDisplayString } from "./runtime-dom.esm-bundler-CDgXytbd.js";
const _hoisted_1 = ["src"];
const _hoisted_2 = { class: "text-skin-neutral-9 text-sm" };
const _hoisted_3 = { class: "text-skin-neutral-9 text-sm" };
const _sfc_main = {
  __name: "AuthorIndex",
  props: {
    authors: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Authors", last: true }
    ];
    const headers = ["Image", "Name/Email", "Social", "Actions"];
    const confirmDialogRef = ref(null);
    const confirmDelete = (deleteRoute) => {
      confirmDialogRef.value.openModal(deleteRoute);
    };
    const { can } = useAuthCan();
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
          title: "Authors",
          "bread-crumb": breadCrumb
        }, {
          right: withCtx(() => [
            unref(can)("Blog: Author - Create") ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              class: "btn btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("blogAuthor.create")))
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode(" Create Author ")
              ])),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        __props.authors.data.length || _ctx.route().params.searchTerm ? (openBlock(), createBlock(_component_AppDataSearch, {
          key: 0,
          url: _ctx.route("blogAuthor.index"),
          "fields-to-search": "name"
        }, null, 8, ["url"])) : createCommentVNode("", true),
        __props.authors.data.length ? (openBlock(), createBlock(_component_AppDataTable, {
          key: 1,
          headers
        }, {
          TableBody: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.authors.data, (item) => {
                return openBlock(), createBlock(_component_AppDataTableRow, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        item.image_url ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: item.image_url,
                          class: "h-10 w-10 rounded"
                        }, null, 8, _hoisted_1)) : (openBlock(), createBlock(AppImageNotAvailable, { key: 1 }))
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1),
                        _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
                        createBaseVNode("small", _hoisted_2, toDisplayString(item.email), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createBaseVNode("small", _hoisted_3, [
                          _cache[3] || (_cache[3] = createBaseVNode("i", { class: "ri-github-fill mr-0 h-5 w-5" }, null, -1)),
                          createTextVNode(" " + toDisplayString(item.github_handle), 1),
                          _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
                          _cache[5] || (_cache[5] = createBaseVNode("i", { class: "ri-twitter-x-line mr-1 h-5 w-5" }, null, -1)),
                          createTextVNode(toDisplayString(item.twitter_handle), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        unref(can)("Blog: Author - Edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 0,
                          text: "Edit Author",
                          class: "mr-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(
                                _ctx.route("blogAuthor.edit", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[6] || (_cache[6] = [
                                createBaseVNode("i", { class: "ri-edit-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        unref(can)("Blog: Author - Delete") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 1,
                          text: "Delete Author"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-destructive",
                              onClick: ($event) => confirmDelete(
                                _ctx.route("blogAuthor.destroy", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[7] || (_cache[7] = [
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
          links: __props.authors.links,
          from: __props.authors.from || 0,
          to: __props.authors.to || 0,
          total: __props.authors.total || 0,
          class: "mt-4 justify-center"
        }, null, 8, ["links", "from", "to", "total"]),
        !__props.authors.data.length ? (openBlock(), createBlock(_component_AppAlert, {
          key: 2,
          class: "mt-4"
        }, {
          default: withCtx(() => _cache[8] || (_cache[8] = [
            createTextVNode(" No authors found. ")
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

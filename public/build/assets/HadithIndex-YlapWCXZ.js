import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as __unplugin_components_3, d as __unplugin_components_5, e as _sfc_main$5 } from "./AppDataSearch-BegMC6fF.js";
import { _ as __unplugin_components_8 } from "./AppAlert-BMLRoZcH.js";
import { _ as __unplugin_components_4 } from "./AppTooltip-Bww2RwcS.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { u as useAuthCan, m as me } from "./app-DfNp2XFq.js";
import { u as useTitle } from "./useTitle-CJbjwJnB.js";
import { r as ref, g as createElementBlock, j as createVNode, u as unref, k as withCtx, l as createBlock, q as createCommentVNode, F as Fragment, f as openBlock, i as createBaseVNode, y as createTextVNode, z as renderList, t as toDisplayString, n as normalizeClass } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./useFormContext-CSgVhLbJ.js";
const _hoisted_1 = { class: "flex gap-2" };
const _sfc_main = {
  __name: "HadithIndex",
  props: {
    hadiths: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const { title } = useTitle("Hadiths");
    const { can } = useAuthCan();
    const getStatusClass = (status) => {
      return status == true ? "active" : "inactive";
    };
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: title, last: true }
    ];
    const headers = [
      "SL",
      "Kitab",
      "Chapter",
      "No",
      "Hadith",
      "Views",
      "Status",
      "Actions"
    ];
    const confirmDialogRef = ref(null);
    const confirmDelete = (deleteRoute) => {
      confirmDialogRef.value.openModal(deleteRoute);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
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
        createVNode(unref(me), { title: unref(title) }, null, 8, ["title"]),
        createVNode(_component_AppSectionHeader, {
          title: unref(title),
          "bread-crumb": breadCrumb
        }, {
          right: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              unref(can)("hadith-create") ? (openBlock(), createBlock(_component_AppButton, {
                key: 0,
                class: "btn btn-primary",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("hadith.create")))
              }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createBaseVNode("i", { class: "ri-add-fill mr-1" }, null, -1),
                  createTextVNode(" Add hadith ")
                ])),
                _: 1
              })) : createCommentVNode("", true),
              unref(can)("hadith-recycle-bin-list") ? (openBlock(), createBlock(_component_AppButton, {
                key: 1,
                class: "btn btn-secondary",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$inertia.visit(_ctx.route("hadith.recycleBin.index")))
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createBaseVNode("i", { class: "ri-recycle-line mr-1" }, null, -1),
                  createTextVNode(" Recycle Bin ")
                ])),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        __props.hadiths.data.length || _ctx.route().params.searchTerm ? (openBlock(), createBlock(_component_AppDataSearch, {
          key: 0,
          url: _ctx.route("hadith.index"),
          "fields-to-search": "name"
        }, null, 8, ["url"])) : createCommentVNode("", true),
        __props.hadiths.data.length ? (openBlock(), createBlock(_component_AppDataTable, {
          key: 1,
          headers
        }, {
          TableBody: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.hadiths.data, (item, index) => {
                return openBlock(), createBlock(_component_AppDataTableRow, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString((__props.hadiths.current_page - 1) * __props.hadiths.per_page + (index + 1)), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => {
                        var _a2, _b2;
                        return [
                          createTextVNode(toDisplayString((_b2 = (_a2 = item.kitab) == null ? void 0 : _a2.name) != null ? _b2 : "-"), 1)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => {
                        var _a2, _b2;
                        return [
                          createTextVNode(toDisplayString((_b2 = (_a2 = item.chapter) == null ? void 0 : _a2.name) != null ? _b2 : "-"), 1)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createTextVNode(toDisplayString((_a2 = item.hadith_no) != null ? _a2 : "-"), 1)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.bn), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createTextVNode(toDisplayString((_a2 = item.view_count) != null ? _a2 : "-"), 1)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        createBaseVNode("span", {
                          class: normalizeClass(["rounded px-3 py-1 text-sm", getStatusClass(item.active)])
                        }, toDisplayString(item.active ? "Active" : "Inactive"), 3)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        unref(can)("hadith-edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 0,
                          text: "Edit",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(
                                _ctx.route("hadith.edit", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[4] || (_cache[4] = [
                                createBaseVNode("i", { class: "ri-edit-line" }, null, -1)
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        unref(can)("hadith-delete") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 1,
                          text: "Delete"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-destructive",
                              onClick: ($event) => confirmDelete(
                                _ctx.route("hadith.destroy", item.id)
                              )
                            }, {
                              default: withCtx(() => _cache[5] || (_cache[5] = [
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
          links: __props.hadiths.links,
          from: (_a = __props.hadiths.from) != null ? _a : 0,
          to: (_b = __props.hadiths.to) != null ? _b : 0,
          total: (_c = __props.hadiths.total) != null ? _c : 0,
          class: "mt-4 justify-center"
        }, null, 8, ["links", "from", "to", "total"]),
        !__props.hadiths.data.length ? (openBlock(), createBlock(_component_AppAlert, {
          key: 2,
          class: "mt-4"
        }, {
          default: withCtx(() => _cache[6] || (_cache[6] = [
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

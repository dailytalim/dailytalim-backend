import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as __unplugin_components_3, d as __unplugin_components_4, e as __unplugin_components_5, f as _sfc_main$5 } from "./AppDataSearch-BbsDsy3s.js";
import { _ as __unplugin_components_8 } from "./AppAlert-Czo9abnJ.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DyGp0Yo1.js";
import { a as _export_sfc, _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { u as useAuthCan } from "./app-fUwecSfK.js";
import { A as AppImageNotAvailable } from "./AppImageNotAvailable-DWNXfqmd.js";
import { r as ref, g as createElementBlock, j as createVNode, k as withCtx, l as createBlock, q as createCommentVNode, F as Fragment, f as openBlock, u as unref, y as createTextVNode, i as createBaseVNode, z as renderList, t as toDisplayString, n as normalizeClass } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _hoisted_1 = ["src"];
const _sfc_main = {
  __name: "CategoryIndex",
  props: {
    categories: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Categories", last: true }
    ];
    const headers = ["Image", "Name", "Visibility", "Actions"];
    const getCategoryVisibilityClass = (isVisible) => {
      return isVisible ? "category-visible" : "category-invisible";
    };
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
          title: "Categories",
          "bread-crumb": breadCrumb
        }, {
          right: withCtx(() => [
            unref(can)("Blog: Category - Create") ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              class: "btn btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("blogCategory.create")))
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode(" Create Category ")
              ])),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        __props.categories.data.length || _ctx.route().params.searchTerm ? (openBlock(), createBlock(_component_AppDataSearch, {
          key: 0,
          url: _ctx.route("blogCategory.index"),
          "fields-to-search": "name"
        }, null, 8, ["url"])) : createCommentVNode("", true),
        __props.categories.data.length ? (openBlock(), createBlock(_component_AppDataTable, {
          key: 1,
          headers
        }, {
          TableBody: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.categories.data, (item) => {
                return openBlock(), createBlock(_component_AppDataTableRow, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        item.image_url ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: item.image_url,
                          class: "h-6 w-24 rounded"
                        }, null, 8, _hoisted_1)) : (openBlock(), createBlock(AppImageNotAvailable, {
                          key: 1,
                          class: "!h-6 !w-24"
                        }))
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
                        createBaseVNode("span", {
                          class: normalizeClass(["rounded px-3 py-1 text-sm", getCategoryVisibilityClass(item.is_visible)])
                        }, toDisplayString(item.is_visible ? "Visible" : "Invisible"), 3)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AppDataTableData, null, {
                      default: withCtx(() => [
                        unref(can)("Blog: Category - Edit") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 0,
                          text: "Edit Category",
                          class: "mr-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-primary",
                              onClick: ($event) => _ctx.$inertia.visit(
                                _ctx.route("blogCategory.edit", item.id)
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
                        unref(can)("Blog: Category - Delete") ? (openBlock(), createBlock(_component_AppTooltip, {
                          key: 1,
                          text: "Delete Category"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppButton, {
                              class: "btn btn-icon btn-destructive",
                              onClick: ($event) => confirmDelete(
                                _ctx.route("blogCategory.destroy", item.id)
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
          links: __props.categories.links,
          from: __props.categories.from || 0,
          to: __props.categories.to || 0,
          total: __props.categories.total || 0,
          class: "mt-4 justify-center"
        }, null, 8, ["links", "from", "to", "total"]),
        !__props.categories.data.length ? (openBlock(), createBlock(_component_AppAlert, {
          key: 2,
          class: "mt-4"
        }, {
          default: withCtx(() => _cache[4] || (_cache[4] = [
            createTextVNode(" No categories found. ")
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
const CategoryIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f19e1fcc"]]);
export {
  CategoryIndex as default
};

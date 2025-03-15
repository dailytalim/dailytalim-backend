import { _ as __unplugin_components_6 } from "./AppCard-Bz1FM-N_.js";
import { _ as __unplugin_components_4 } from "./AppTooltip-Bww2RwcS.js";
import { a as _export_sfc, _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { u as useAuthCan, m as me, C } from "./app-DfNp2XFq.js";
import { u as useTitle } from "./useTitle-CJbjwJnB.js";
import { u as useFormErrors } from "./useFormErrors-CnkJJg2b.js";
import { g as createElementBlock, j as createVNode, u as unref, k as withCtx, F as Fragment, f as openBlock, i as createBaseVNode, y as createTextVNode, t as toDisplayString, l as createBlock, q as createCommentVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./useFormContext-CSgVhLbJ.js";
const _hoisted_1 = { class: "flex items-center justify-between" };
const _hoisted_2 = { class: "text-xl font-bold text-gray-800" };
const _hoisted_3 = { class: "text-blue-600" };
const _hoisted_4 = { class: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" };
const _hoisted_5 = { class: "text-base text-gray-800" };
const _hoisted_6 = { class: "text-base text-gray-800" };
const _hoisted_7 = { class: "text-base text-blue-600" };
const _hoisted_8 = ["href"];
const _hoisted_9 = { class: "text-base text-gray-800" };
const _hoisted_10 = { class: "col-span-full" };
const _hoisted_11 = { class: "text-base leading-relaxed text-gray-800" };
const _hoisted_12 = { class: "mt-4 flex justify-end gap-4" };
const _sfc_main = {
  __name: "MessageShow",
  props: {
    message: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const { can } = useAuthCan();
    const { title } = useTitle("Message");
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Messages", href: route("message.index") },
      { label: title, last: true }
    ];
    const confirmDelete = (url) => {
      if (confirm("Are you sure you want to delete this message?")) {
        C().delete(url, {
          onSuccess: () => {
            alert("Message deleted successfully!");
          }
        });
      }
    };
    useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppTooltip = __unplugin_components_4;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: unref(title) }, null, 8, ["title"]),
        createVNode(_component_AppSectionHeader, {
          title: unref(title),
          "bread-crumb": breadCrumb
        }, null, 8, ["title"]),
        createVNode(_component_AppButton, {
          class: "btn btn-primary flex items-center gap-2",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$inertia.visit(_ctx.route("message.index")))
        }, {
          default: withCtx(() => _cache[2] || (_cache[2] = [
            createBaseVNode("i", { class: "ri-arrow-left-line" }, null, -1),
            createTextVNode(" Back ")
          ])),
          _: 1
        }),
        createVNode(_component_AppCard, { class: "w-full rounded-lg border border-gray-300 bg-white shadow-sm" }, {
          title: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("h2", _hoisted_2, [
                createBaseVNode("span", _hoisted_3, toDisplayString(__props.message.subject), 1)
              ])
            ])
          ]),
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", null, [
                _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-sm font-semibold text-gray-500" }, "Name:", -1)),
                createBaseVNode("p", _hoisted_5, toDisplayString(__props.message.name), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-sm font-semibold text-gray-500" }, "Phone:", -1)),
                createBaseVNode("p", _hoisted_6, toDisplayString(__props.message.phone), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-sm font-semibold text-gray-500" }, "Email:", -1)),
                createBaseVNode("p", _hoisted_7, [
                  createBaseVNode("a", {
                    href: `mailto:${__props.message.email}`,
                    class: "hover:underline"
                  }, toDisplayString(__props.message.email), 9, _hoisted_8)
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-sm font-semibold text-gray-500" }, "Date:", -1)),
                createBaseVNode("p", _hoisted_9, toDisplayString(__props.message.created_at), 1)
              ]),
              createBaseVNode("div", _hoisted_10, [
                _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-sm font-semibold text-gray-500" }, " Message: ", -1)),
                createBaseVNode("p", _hoisted_11, toDisplayString(__props.message.message), 1)
              ])
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_12, [
              unref(can)("message-delete") ? (openBlock(), createBlock(_component_AppTooltip, {
                key: 0,
                text: "Delete"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppButton, {
                    class: "btn btn-icon btn-destructive flex items-center gap-2",
                    onClick: _cache[1] || (_cache[1] = ($event) => confirmDelete(_ctx.route("message.destroy", __props.message.id)))
                  }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createBaseVNode("i", { class: "ri-delete-bin-line" }, null, -1),
                      createTextVNode(" Delete ")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const MessageShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c25e1629"]]);
export {
  MessageShow as default
};

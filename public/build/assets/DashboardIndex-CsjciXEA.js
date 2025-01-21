import { u as useAuthCan, m as me } from "./app-CgEHurdE.js";
import DashboardCard from "./DashboardCard-f4zdUdi8.js";
import { g as createElementBlock, j as createVNode, u as unref, i as createBaseVNode, y as createTextVNode, t as toDisplayString, l as createBlock, q as createCommentVNode, F as Fragment, f as openBlock } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./AppInputText-Dy64zcCM.js";
const _hoisted_1 = { class: "shadow-xs mt-6 flex flex-col justify-between rounded-md border border-skin-neutral-4 bg-skin-neutral-2 px-4 py-2 md:flex-row" };
const _hoisted_2 = { class: "font-bold" };
const _hoisted_3 = { class: "my-6 grid grid-cols-1 gap-6 md:grid-cols-3" };
const _sfc_main = {
  __name: "DashboardIndex",
  props: {
    count: {
      type: Object
    }
  },
  setup(__props) {
    const { can } = useAuthCan();
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: "Dashboard" }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", null, [
            _cache[0] || (_cache[0] = createBaseVNode("i", { class: "ri-megaphone-line" }, null, -1)),
            _cache[1] || (_cache[1] = createTextVNode(" Welcome ")),
            createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.$page.props.auth.user.name), 1),
            _cache[2] || (_cache[2] = createTextVNode(" ! "))
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          unref(can)("Acl") ? (openBlock(), createBlock(DashboardCard, {
            key: 0,
            link: "user.index",
            label: "Users",
            count: props.count.users,
            icon: "ri-user-line",
            color: "info"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Acl") ? (openBlock(), createBlock(DashboardCard, {
            key: 1,
            link: "aclRole.index",
            label: "Roles",
            count: props.count.roles,
            icon: "ri-account-box-line",
            color: "warning"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Acl") ? (openBlock(), createBlock(DashboardCard, {
            key: 2,
            link: "aclPermission.index",
            label: "Permissions",
            count: props.count.permissions,
            icon: "ri-shield-keyhole-line",
            color: "success"
          }, null, 8, ["count"])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

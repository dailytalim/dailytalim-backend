import { u as useAuthCan, m as me } from "./app-B1Sq0VTC.js";
import DashboardCard from "./DashboardCard-CbWOk1BN.js";
import { f as createElementBlock, g as openBlock, j as createVNode, i as createBaseVNode, u as unref, y as createTextVNode, t as toDisplayString, l as createBlock, p as createCommentVNode, F as Fragment } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./AppInputText-CnCOpisB.js";
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
          unref(can)("hadith-list") ? (openBlock(), createBlock(DashboardCard, {
            key: 0,
            link: "hadith.index",
            label: "Hadiths",
            count: props.count.hadiths,
            icon: "ri-book-open-line",
            color: "success"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("kitab-list") ? (openBlock(), createBlock(DashboardCard, {
            key: 1,
            link: "kitab.index",
            label: "Kitabs",
            count: props.count.kitabs,
            icon: "ri-book-marked-line",
            color: "success"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("chapter-list") ? (openBlock(), createBlock(DashboardCard, {
            key: 2,
            link: "chapter.index",
            label: "Chapters",
            count: props.count.chapters,
            icon: "ri-book-read-line",
            color: "success"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Blog") ? (openBlock(), createBlock(DashboardCard, {
            key: 3,
            link: "post.index",
            label: "Posts",
            count: props.count.posts,
            icon: "ri-article-line",
            color: "success"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Blog") ? (openBlock(), createBlock(DashboardCard, {
            key: 4,
            link: "category.index",
            label: "Categories",
            count: props.count.categories,
            icon: "ri-node-tree",
            color: "success"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Blog") ? (openBlock(), createBlock(DashboardCard, {
            key: 5,
            link: "tag.index",
            label: "Tags",
            count: props.count.tags,
            icon: "ri-bookmark-line",
            color: "success"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Acl") ? (openBlock(), createBlock(DashboardCard, {
            key: 6,
            link: "user.index",
            label: "Users",
            count: props.count.users,
            icon: "ri-user-line",
            color: "info"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Acl") ? (openBlock(), createBlock(DashboardCard, {
            key: 7,
            link: "aclRole.index",
            label: "Roles",
            count: props.count.roles,
            icon: "ri-account-box-line",
            color: "warning"
          }, null, 8, ["count"])) : createCommentVNode("", true),
          unref(can)("Acl") ? (openBlock(), createBlock(DashboardCard, {
            key: 8,
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

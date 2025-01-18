var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as __unplugin_components_6, a as _sfc_main$9 } from "./AppFormErrors-ozD0oAUb.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DyGp0Yo1.js";
import { _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { u as useAuthCan, C } from "./app-fUwecSfK.js";
import { u as useTitle } from "./useTitle-CDeIpNVF.js";
import { u as useFormContext } from "./useFormContext-irIFvdmS.js";
import _sfc_main$2 from "./PostBody-Dc7Fu4eL.js";
import _sfc_main$3 from "./PostImage-CIfLIgJT.js";
import _sfc_main$4 from "./PostSeo-4rJno_nA.js";
import _sfc_main$5 from "./PostPublishDate-DRx06Ywi.js";
import _sfc_main$6 from "./PostCategory-g08UK9b_.js";
import _sfc_main$7 from "./PostTags-CvAajszU.js";
import _sfc_main$8 from "./PostAuthor-6ZEv4Vi5.js";
import { u as usePostStore } from "./PostStore-brycVqKj.js";
import { e as onUnmounted, g as createElementBlock, j as createVNode, k as withCtx, i as createBaseVNode, u as unref, l as createBlock, q as createCommentVNode, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
import "./AppTipTapEditor-Cp5FwHYi.js";
import "./AppLabel-CW1bbGwg.js";
import "./useFormErrors-m1LYda6i.js";
import "./AppInputFile-DpAaA6ow.js";
import "./AppTextArea-sFKvssBq.js";
import "./AppCombobox-DQW4BNs4.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "flex flex-col xl:flex-row" };
const _hoisted_2 = { class: "pt-4" };
const _sfc_main = {
  __name: "PostForm",
  props: {
    post: {
      type: Object,
      default: null
    },
    categories: {
      type: Object,
      default: () => {
      }
    },
    tags: {
      type: Object,
      default: () => {
      }
    },
    authors: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const postStore = usePostStore();
    const { can } = useAuthCan();
    const props = __props;
    if (props.post) {
      postStore.setPost(props.post);
    }
    onUnmounted(() => {
      postStore.$reset();
    });
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Posts", href: route("blogPost.index") },
      { label: "Post", last: true }
    ];
    const { title } = useTitle("Blog Post");
    const { isCreate } = useFormContext();
    const getValueFromKey = (data, key) => {
      return data[key] ? data[key].value : null;
    };
    const submitForm = () => {
      const form = C(postStore.post);
      const postData = (data) => {
        const commonData = __spreadProps(__spreadValues({}, data), {
          blog_category_id: getValueFromKey(data, "blog_category_id"),
          blog_author_id: getValueFromKey(data, "blog_author_id")
        });
        return isCreate.value ? commonData : __spreadProps(__spreadValues({}, commonData), { _method: "PUT" });
      };
      if (isCreate.value) {
        form.transform(postData).post(route("blogPost.store"));
      } else {
        form.transform(postData).post(route("blogPost.update", props.post.id));
      }
    };
    return (_ctx, _cache) => {
      const _component_AppButton = __unplugin_components_0;
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$9;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AppSectionHeader, {
          title: "Blogs",
          "bread-crumb": breadCrumb
        }, {
          default: withCtx(() => [
            unref(can)(unref(isCreate) ? "Blog: Post - Create" : "Blog: Post - Edit") ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              class: "btn btn-primary mt-6",
              onClick: submitForm
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode(" Save ")
              ])),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_AppCard, { class: "w-full xl:w-8/12" }, {
            title: withCtx(() => [
              createTextVNode(toDisplayString(unref(title)), 1)
            ]),
            content: withCtx(() => [
              createVNode(_component_AppFormErrors, { class: "mb-4" }),
              createBaseVNode("form", _hoisted_2, [
                createVNode(_sfc_main$2),
                createVNode(_sfc_main$3),
                createVNode(_sfc_main$4)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_AppCard, { class: "mt-4 w-full xl:ml-5 xl:mt-0 xl:w-4/12" }, {
            title: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode(" Post Info ")
            ])),
            content: withCtx(() => [
              createVNode(_sfc_main$5),
              createVNode(_sfc_main$6, { categories: __props.categories }, null, 8, ["categories"]),
              createVNode(_sfc_main$7, { tags: __props.tags }, null, 8, ["tags"]),
              createVNode(_sfc_main$8, { authors: __props.authors }, null, 8, ["authors"])
            ]),
            _: 1
          })
        ]),
        unref(can)(unref(isCreate) ? "Blog: Post - Create" : "Blog: Post - Edit") ? (openBlock(), createBlock(_component_AppButton, {
          key: 0,
          class: "btn btn-primary mt-6",
          onClick: submitForm
        }, {
          default: withCtx(() => _cache[2] || (_cache[2] = [
            createTextVNode(" Save ")
          ])),
          _: 1
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

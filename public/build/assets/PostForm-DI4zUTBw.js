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
import { _ as _sfc_main$2, a as __unplugin_components_6 } from "./AppFormErrors-0I84ZZlX.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DUuZje-H.js";
import { _ as __unplugin_components_0 } from "./AppInputText-CnCOpisB.js";
import { u as useAuthCan, C } from "./app-eEjzJFVR.js";
import { u as useTitle } from "./useTitle-CoIzRuPZ.js";
import { u as useFormContext } from "./useFormContext-Bd_C1v1K.js";
import _sfc_main$3 from "./PostBody-R6owzL_Y.js";
import _sfc_main$4 from "./PostImage-CjP39IBl.js";
import _sfc_main$5 from "./PostSeo-CG_s4Gk-.js";
import _sfc_main$6 from "./PostPublishDate-CnAqo3BP.js";
import _sfc_main$7 from "./PostCategory-XbAdC3y0.js";
import _sfc_main$8 from "./PostTags-BAxVLcGp.js";
import _sfc_main$9 from "./PostAuthor-PHSY2IN5.js";
import { u as usePostStore } from "./PostStore-CMw525jZ.js";
import { b as onUnmounted, f as createElementBlock, g as openBlock, j as createVNode, i as createBaseVNode, l as createBlock, p as createCommentVNode, k as withCtx, u as unref, y as createTextVNode, t as toDisplayString, F as Fragment } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./AppTipTapEditor-CqF5YX9f.js";
import "./AppLabel-DghcdlCQ.js";
import "./useFormErrors-DIKlSlSm.js";
import "./AppInputFile-BtOpaExx.js";
import "./AppTextArea-DvXKlimy.js";
import "./AppCombobox-CT0SRbII.js";
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
      const _component_AppFormErrors = _sfc_main$2;
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
                createVNode(_sfc_main$3),
                createVNode(_sfc_main$4),
                createVNode(_sfc_main$5)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_AppCard, { class: "mt-4 w-full xl:ml-5 xl:mt-0 xl:w-4/12" }, {
            title: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode(" Post Info ")
            ])),
            content: withCtx(() => [
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$7, { categories: __props.categories }, null, 8, ["categories"]),
              createVNode(_sfc_main$8, { tags: __props.tags }, null, 8, ["tags"]),
              createVNode(_sfc_main$9, { authors: __props.authors }, null, 8, ["authors"])
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

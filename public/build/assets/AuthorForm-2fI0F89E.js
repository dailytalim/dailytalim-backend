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
import { _ as __unplugin_components_6 } from "./AppCard-Bz1FM-N_.js";
import { b as _sfc_main$3, _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { _ as _sfc_main$5 } from "./AppInputFile-BNVf3OW4.js";
import { _ as _sfc_main$4 } from "./AppTipTapEditor-D7Se7nUF.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { _ as _sfc_main$2 } from "./AppFormErrors-C27Dv4u8.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { u as useAuthCan, C } from "./app-DtBtwHzA.js";
import { u as useTitle } from "./useTitle-CJbjwJnB.js";
import { u as useFormContext } from "./useFormContext-CSgVhLbJ.js";
import { u as useFormErrors } from "./useFormErrors-DDoq4Qns.js";
import { g as createElementBlock, j as createVNode, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, u as unref, i as createBaseVNode, n as normalizeClass, l as createBlock, q as createCommentVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
const _hoisted_1 = { class: "pt-4" };
const _hoisted_2 = { class: "mt-5" };
const _hoisted_3 = { class: "mt-5" };
const _hoisted_4 = { class: "mt-5" };
const _hoisted_5 = { class: "mt-5" };
const _hoisted_6 = { class: "mt-5" };
const _sfc_main = {
  __name: "AuthorForm",
  props: {
    author: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Authors", href: route("blogAuthor.index") },
      { label: "Author", last: true }
    ];
    const { title } = useTitle("Author");
    const { isCreate } = useFormContext();
    const { can } = useAuthCan();
    const form = C({
      id: props.author ? props.author.id : null,
      name: props.author ? props.author.name : "",
      bio: props.author ? props.author.bio : "",
      email: props.author ? props.author.email : "",
      github_handle: props.author ? props.author.github_handle : "",
      twitter_handle: props.author ? props.author.twitter_handle : "",
      image: null,
      image_url: props.author ? props.author.image_url : null,
      remove_previous_image: false
    });
    const getImagePreviewURL = () => {
      if (!isCreate.value && form.image_url) {
        return form.image_url;
      }
      return null;
    };
    const submitForm = () => {
      if (isCreate.value) {
        form.post(route("blogAuthor.store"));
      } else {
        form.transform((data) => __spreadProps(__spreadValues({}, data), {
          _method: "PUT"
        })).post(route("blogAuthor.update", props.author.id));
      }
    };
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppTipTapEditor = _sfc_main$4;
      const _component_AppInputFile = _sfc_main$5;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AppSectionHeader, {
          title: "Authors",
          "bread-crumb": breadCrumb
        }),
        createVNode(_component_AppCard, { class: "w-full md:w-3/4 xl:w-1/2" }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(unref(title)), 1)
          ]),
          content: withCtx(() => [
            createVNode(_component_AppFormErrors, { class: "mb-4" }),
            createBaseVNode("form", _hoisted_1, [
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "name" }, {
                  default: withCtx(() => _cache[7] || (_cache[7] = [
                    createTextVNode("Name")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("name")
                  }),
                  autocomplete: "off"
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_AppLabel, { for: "bio" }, {
                  default: withCtx(() => _cache[8] || (_cache[8] = [
                    createTextVNode("Bio")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppTipTapEditor, {
                  modelValue: unref(form).bio,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).bio = $event),
                  "editor-id": "bio",
                  class: normalizeClass({
                    "app-tip-tap-error": unref(errorsFields).includes("bio")
                  })
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_AppInputFile, {
                  modelValue: unref(form).image,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).image = $event),
                  "image-preview-url": getImagePreviewURL(),
                  onRemoveFile: _cache[3] || (_cache[3] = ($event) => unref(form).remove_previous_image = true)
                }, null, 8, ["modelValue", "image-preview-url"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_AppLabel, { for: "email" }, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createTextVNode("Email")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).email = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("email")
                  }),
                  autocomplete: "off"
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_AppLabel, { for: "github-handle" }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode("Github")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "github-handle",
                  modelValue: unref(form).github_handle,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).github_handle = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("github_handle")
                  })
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_AppLabel, { for: "twitter-handle" }, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode("Twitter")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "twitter-handle",
                  modelValue: unref(form).twitter_handle,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).twitter_handle = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("twitter_handle")
                  })
                }, null, 8, ["modelValue", "class"])
              ])
            ])
          ]),
          footer: withCtx(() => [
            unref(can)(
              unref(isCreate) ? "Blog: Author - Create" : "Blog: Author - Edit"
            ) ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              class: "btn btn-primary",
              onClick: submitForm
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Save")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

import { _ as _sfc_main$2 } from "./AppTipTapEditor-D7Se7nUF.js";
import { b as _sfc_main$1 } from "./AppInputText-Dy64zcCM.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { u as useFormErrors } from "./useFormErrors-CnkJJg2b.js";
import { u as usePostStore } from "./PostStore-CZezUZ0Q.js";
import { g as createElementBlock, i as createBaseVNode, j as createVNode, k as withCtx, u as unref, n as normalizeClass, F as Fragment, f as openBlock, y as createTextVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import "./app-DfNp2XFq.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "mt-5" };
const _hoisted_2 = { class: "mt-5" };
const _sfc_main = {
  __name: "PostBody",
  setup(__props) {
    const postStore = usePostStore();
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$1;
      const _component_AppTipTapEditor = _sfc_main$2;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createVNode(_component_AppLabel, { for: "title" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("Title")
            ])),
            _: 1
          }),
          createVNode(_component_AppInputText, {
            id: "title",
            modelValue: unref(postStore).post.title,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(postStore).post.title = $event),
            type: "text",
            class: normalizeClass({
              "input-error": unref(errorsFields).includes("title")
            })
          }, null, 8, ["modelValue", "class"])
        ]),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_AppLabel, { for: "notes" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("Content")
            ])),
            _: 1
          }),
          createVNode(_component_AppTipTapEditor, {
            modelValue: unref(postStore).post.content,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(postStore).post.content = $event),
            "editor-id": "notes",
            class: normalizeClass({
              "app-tip-tap-error": unref(errorsFields).includes("content")
            }),
            "file-upload-url": _ctx.route("blogPost.uploadEditorImage")
          }, null, 8, ["modelValue", "class", "file-upload-url"])
        ]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_AppLabel, { for: "notes" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("Summary")
            ])),
            _: 1
          }),
          createVNode(_component_AppTipTapEditor, {
            modelValue: unref(postStore).post.summary,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(postStore).post.summary = $event),
            "editor-id": "summary",
            class: normalizeClass({
              "app-tip-tap-error": unref(errorsFields).includes("summary")
            }),
            "file-upload-url": _ctx.route("blogPost.uploadEditorImage")
          }, null, 8, ["modelValue", "class", "file-upload-url"])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

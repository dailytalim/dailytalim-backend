import { _ as __unplugin_components_2$1 } from "./AppTextArea-CXtBd_Eu.js";
import { b as _sfc_main$1 } from "./AppInputText-Dy64zcCM.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { r as ref, o as onMounted, g as createElementBlock, i as createBaseVNode, a9 as withModifiers, ab as withDirectives, ac as vShow, u as unref, F as Fragment, t as toDisplayString, j as createVNode, k as withCtx, n as normalizeClass, q as createCommentVNode, f as openBlock, y as createTextVNode } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import { u as useFormErrors } from "./useFormErrors-By5WXFUZ.js";
import { u as useFormContext } from "./useFormContext-CSgVhLbJ.js";
import { u as useCategoryStore } from "./CategoryStore-C8SmNEAh.js";
import "./app-LWwlYPSu.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "mt-10" };
const _hoisted_2 = { class: "flex items-end justify-between text-xl" };
const _hoisted_3 = { class: "text-skin-neutral-9 block text-sm" };
const _hoisted_4 = { class: "mb-2 mt-2 flex items-center" };
const _hoisted_5 = { class: "flex flex-col items-start" };
const _hoisted_6 = { class: "text-skin-neutral-10 -mt-1 text-sm" };
const _hoisted_7 = { class: "text-skin-primary-11 text-2xl" };
const _hoisted_8 = { class: "" };
const _hoisted_9 = { class: "mt-5 border-t border-dashed pt-5" };
const _hoisted_10 = { class: "text-skin-neutral-9 block text-right" };
const _hoisted_11 = { class: "mt-5" };
const _hoisted_12 = { class: "text-skin-neutral-9 block text-right" };
const _sfc_main = {
  __name: "CategorySeo",
  setup(__props) {
    const categoryStore = useCategoryStore();
    const { errorsFields } = useFormErrors();
    const { isCreate } = useFormContext();
    const showSeoForm = ref(false);
    onMounted(() => {
      if (!isCreate.value) {
        showSeoForm.value = true;
      }
    });
    const toggleSeoForm = () => {
      if (!showSeoForm.value && isCreate.value && !categoryStore.category.meta_tag_title.length && !categoryStore.category.meta_tag_description.length) {
        categoryStore.initSeoTags();
      }
      showSeoForm.value = !showSeoForm.value;
    };
    return (_ctx, _cache) => {
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$1;
      const _component_AppTextArea = __unplugin_components_2$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("h4", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("span", null, "SEO - Preview of how it will be listed on Google", -1)),
          createBaseVNode("a", {
            href: "#",
            class: "text-skin-primary-9 text-sm hover:underline",
            onClick: withModifiers(toggleSeoForm, ["prevent"])
          }, " Edit SEO content ")
        ]),
        withDirectives(createBaseVNode("small", _hoisted_3, " (fill the title and description to see a preview) ", 512), [
          [vShow, unref(categoryStore).showSeoAlert()]
        ]),
        showSeoForm.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_4, [
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "from-skin-neutral-3 to-skin-neutral-6 mr-4 flex h-10 w-10 rounded-full bg-gradient-to-bl" }, null, -1)),
              createBaseVNode("div", _hoisted_5, [
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-sm" }, "Your Site Name", -1)),
                createBaseVNode("p", _hoisted_6, " https://your-domain.com/blog/category/" + toDisplayString(unref(categoryStore).getSlug()), 1)
              ])
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("p", _hoisted_7, toDisplayString(unref(categoryStore).category.meta_tag_title), 1),
              createBaseVNode("p", _hoisted_8, toDisplayString(unref(categoryStore).category.meta_tag_description), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createVNode(_component_AppLabel, { for: "meta_tag_title" }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createTextVNode("Meta Tag Title")
              ])),
              _: 1
            }),
            createVNode(_component_AppInputText, {
              id: "meta_tag_title",
              modelValue: unref(categoryStore).category.meta_tag_title,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(categoryStore).category.meta_tag_title = $event),
              type: "text",
              maxlength: "60",
              class: normalizeClass({
                "input-error": unref(errorsFields).includes("meta_tag_title")
              })
            }, null, 8, ["modelValue", "class"]),
            createBaseVNode("small", _hoisted_10, toDisplayString(unref(categoryStore).getRemainingChars("meta_tag_title", 60)) + " of 60 ", 1)
          ]),
          createBaseVNode("div", _hoisted_11, [
            createVNode(_component_AppLabel, { for: "meta_tag_description" }, {
              default: withCtx(() => _cache[6] || (_cache[6] = [
                createTextVNode("Meta Tag Description")
              ])),
              _: 1
            }),
            createVNode(_component_AppTextArea, {
              id: "meta_tag_description",
              modelValue: unref(categoryStore).category.meta_tag_description,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(categoryStore).category.meta_tag_description = $event),
              class: normalizeClass(["h-24", {
                "input-error": unref(errorsFields).includes(
                  "meta_tag_description"
                )
              }]),
              maxlength: "160"
            }, null, 8, ["modelValue", "class"]),
            createBaseVNode("small", _hoisted_12, toDisplayString(unref(categoryStore).getRemainingChars(
              "meta_tag_description",
              160
            )) + " of 160 ", 1)
          ])
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as default
};

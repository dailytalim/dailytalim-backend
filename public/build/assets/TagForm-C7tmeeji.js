import { _ as __unplugin_components_6 } from "./AppCard-Bz1FM-N_.js";
import { b as _sfc_main$3, _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { _ as _sfc_main$2 } from "./AppFormErrors-BtfqiRSC.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { g as createElementBlock, j as createVNode, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, u as unref, i as createBaseVNode, n as normalizeClass, a9 as withModifiers } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
import { C } from "./app-DfNp2XFq.js";
import { u as useTitle } from "./useTitle-CJbjwJnB.js";
import { u as useFormContext } from "./useFormContext-CSgVhLbJ.js";
import { u as useFormErrors } from "./useFormErrors-CnkJJg2b.js";
const _sfc_main = {
  __name: "TagForm",
  props: {
    tag: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Blog Tags", href: route("blogTag.index") },
      { label: "Tag", last: true }
    ];
    const { title } = useTitle("Role");
    const form = C({
      name: props.tag ? props.tag.name : ""
    });
    const { isCreate } = useFormContext();
    const submitForm = () => {
      if (isCreate.value) {
        form.post(route("blogTag.store"));
      } else {
        form.put(route("blogTag.update", props.tag.id));
      }
    };
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AppSectionHeader, {
          title: "Tag",
          "bread-crumb": breadCrumb
        }),
        createVNode(_component_AppCard, { class: "w-full md:w-3/4 xl:w-1/2" }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(unref(title)), 1)
          ]),
          content: withCtx(() => [
            createVNode(_component_AppFormErrors, { class: "mb-4" }),
            createBaseVNode("form", {
              onSubmit: withModifiers(submitForm, ["prevent"])
            }, [
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "name" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Name")), 1)
                  ]),
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
              ])
            ], 32)
          ]),
          footer: withCtx(() => [
            createVNode(_component_AppButton, {
              class: "btn btn-primary",
              onClick: submitForm
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Save")), 1)
              ]),
              _: 1
            })
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

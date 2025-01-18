import { _ as __unplugin_components_6, a as _sfc_main$2 } from "./AppFormErrors-BJrEvl4v.js";
import { b as _sfc_main$3, _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { _ as __unplugin_components_2 } from "./AppLabel-CW1bbGwg.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DyGp0Yo1.js";
import { g as createElementBlock, j as createVNode, u as unref, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, i as createBaseVNode, n as normalizeClass, a8 as withModifiers } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
import { C, m as me } from "./app-C4Iz7QyH.js";
import { u as useTitle } from "./useTitle-CDeIpNVF.js";
import { u as useFormContext } from "./useFormContext-irIFvdmS.js";
import { u as useFormErrors } from "./useFormErrors-m06ae-6Y.js";
const _sfc_main = {
  __name: "RoleForm",
  props: {
    role: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const { title } = useTitle("Role");
    const props = __props;
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Roles", href: route("aclRole.index") },
      { label: "Role", last: true }
    ];
    const form = C({
      name: props.role ? props.role.name : ""
    });
    const { isCreate } = useFormContext();
    const submitForm = () => {
      if (isCreate.value) {
        form.post(route("aclRole.store"));
      } else {
        form.put(route("aclRole.update", props.role.id));
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
        createVNode(unref(me), { title: unref(title) }, null, 8, ["title"]),
        createVNode(_component_AppSectionHeader, {
          title: unref(title),
          "bread-crumb": breadCrumb
        }, null, 8, ["title"]),
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

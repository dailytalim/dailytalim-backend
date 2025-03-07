import { _ as __unplugin_components_6, a as _sfc_main$2 } from "./AppFormErrors-DyFN48P-.js";
import { _ as __unplugin_components_0 } from "./AppInputText-Dy64zcCM.js";
import { _ as __unplugin_components_8 } from "./AppAlert-BMLRoZcH.js";
import { _ as __unplugin_components_2 } from "./AppLabel-88FyTEN3.js";
import { _ as _sfc_main$3 } from "./AppCheckbox-Cq19lkFS.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DjvbNo74.js";
import { C } from "./app-LWwlYPSu.js";
import { c as chunk } from "./chunk-CEaP2F_8.js";
import { b as computed, g as createElementBlock, j as createVNode, aa as createSlots, k as withCtx, F as Fragment, f as openBlock, y as createTextVNode, t as toDisplayString, i as createBaseVNode, z as renderList, u as unref, l as createBlock } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
const _hoisted_1 = { class: "text-skin-primary-10" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "mt-5 flex" };
const _sfc_main = {
  __name: "UserRoleForm",
  props: {
    user: {
      type: Object,
      required: true
    },
    roles: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Users", href: route("user.index") },
      { label: "User Roles", last: true }
    ];
    const form = C({
      userRoles: props.user.roles
    });
    const chunks = computed(() => {
      const itensPerColumn = props.roles.length / 3;
      return chunk(props.roles, Math.ceil(itensPerColumn));
    });
    const submitForm = () => {
      form.put(route("aclUserRole.update", props.user.id));
    };
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppCheckbox = _sfc_main$3;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppAlert = __unplugin_components_8;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AppSectionHeader, {
          title: _ctx.__("User Roles"),
          "bread-crumb": breadCrumb
        }, null, 8, ["title"]),
        createVNode(_component_AppCard, null, createSlots({
          title: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.__("User Roles for")) + ": ", 1),
            createBaseVNode("span", _hoisted_1, toDisplayString(__props.user.name), 1)
          ]),
          content: withCtx(() => [
            chunks.value.length ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_component_AppFormErrors, { class: "mb-4" }),
              createBaseVNode("form", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(chunks.value, (column, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "w-1/3"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(column, (role) => {
                      return openBlock(), createElementBlock("div", {
                        key: role.id,
                        class: "mb-4 flex items-center"
                      }, [
                        createVNode(_component_AppCheckbox, {
                          id: role.name,
                          modelValue: unref(form).userRoles,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).userRoles = $event),
                          name: "role",
                          value: role
                        }, null, 8, ["id", "modelValue", "value"]),
                        createVNode(_component_AppLabel, {
                          for: role.name,
                          class: "ml-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(role.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["for"])
                      ]);
                    }), 128))
                  ]);
                }), 128))
              ])
            ])) : (openBlock(), createBlock(_component_AppAlert, {
              key: 1,
              class: "mt-4"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("No roles found")), 1)
              ]),
              _: 1
            }))
          ]),
          _: 2
        }, [
          chunks.value.length ? {
            name: "footer",
            fn: withCtx(() => [
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
            key: "0"
          } : void 0
        ]), 1024)
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

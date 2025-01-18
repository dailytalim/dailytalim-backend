import { _ as __unplugin_components_0 } from "./AppInputText-zGYkzQim.js";
import { o as onMounted, r as ref, f as openBlock, g as createElementBlock, i as createBaseVNode, j as createVNode, k as withCtx, q as createCommentVNode, l as createBlock, y as createTextVNode, t as toDisplayString } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
const _hoisted_1 = { class: "flex flex-col items-center space-y-4 rounded-lg border-2 border-dashed border-skin-neutral-6 p-4" };
const _hoisted_2 = { class: "flex flex-row space-x-3" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 1,
  class: "ri-loader-line animate-spin"
};
const _hoisted_5 = {
  key: 0,
  class: "text-center text-sm"
};
const _hoisted_6 = {
  key: 1,
  class: "flex w-full justify-center"
};
const _hoisted_7 = ["src"];
const acceptedFormats = "image/*";
const _sfc_main = {
  __name: "AppInputFile",
  props: {
    imagePreviewUrl: {
      type: [String, null],
      default: null
    },
    showRemoveFileButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "remove-file"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    onMounted(() => {
      if (props.imagePreviewUrl) {
        imagePreview.value = props.imagePreviewUrl;
        emit("update:modelValue", null);
      }
    });
    const file = ref(null);
    const imagePreview = ref(null);
    const fileInputRef = ref(null);
    const isLoading = ref(false);
    const emit = __emit;
    const triggerFileInput = () => {
      if (isLoading.value === true) {
        return;
      } else {
        isLoading.value = true;
      }
      fileInputRef.value.click();
    };
    const removeFile = () => {
      file.value = null;
      imagePreview.value = null;
      isLoading.value = false;
      emit("update:modelValue", null);
      if (props.imagePreviewUrl) {
        emit("remove-file", true);
        return;
      }
    };
    const handleFileChange = (event) => {
      const uploadedFile = event.target.files[0];
      emit("update:modelValue", uploadedFile);
      if (!uploadedFile) {
        isLoading.value = false;
        return;
      }
      file.value = uploadedFile;
      if (file.value) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file.value);
      }
      isLoading.value = false;
      event.target.value = null;
    };
    const cancelFileChange = () => {
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_AppButton = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("input", {
          ref_key: "fileInputRef",
          ref: fileInputRef,
          type: "file",
          accept: acceptedFormats,
          hidden: "",
          onChange: handleFileChange,
          onCancel: cancelFileChange
        }, null, 544),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_AppButton, {
            class: "btn btn-primary",
            onClick: triggerFileInput
          }, {
            default: withCtx(() => [
              !isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_3, "Upload File")) : createCommentVNode("", true),
              isLoading.value ? (openBlock(), createElementBlock("i", _hoisted_4)) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          __props.showRemoveFileButton && (file.value || imagePreview.value) ? (openBlock(), createBlock(_component_AppButton, {
            key: 0,
            class: "btn btn-destructive",
            onClick: removeFile
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode(" Remove File ")
            ])),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        file.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("p", null, [
            _cache[1] || (_cache[1] = createBaseVNode("strong", { class: "text-skin-neutral-12" }, "File Name:", -1)),
            createTextVNode(" " + toDisplayString(file.value.name), 1)
          ]),
          createBaseVNode("p", null, [
            _cache[2] || (_cache[2] = createBaseVNode("strong", { class: "text-skin-neutral-12" }, "File Size:", -1)),
            createTextVNode(" " + toDisplayString(file.value.size) + " bytes ", 1)
          ])
        ])) : createCommentVNode("", true),
        imagePreview.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("img", {
            src: imagePreview.value,
            alt: "image preview",
            class: "h-auto max-w-full rounded shadow-md"
          }, null, 8, _hoisted_7)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as _
};

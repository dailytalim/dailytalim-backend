import { r as ref } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
function useFormContext() {
  const isCreate = ref();
  const isEdit = ref();
  isCreate.value = route().current().includes(".create");
  isEdit.value = route().current().includes(".edit");
  return { isCreate, isEdit };
}
export {
  useFormContext as u
};

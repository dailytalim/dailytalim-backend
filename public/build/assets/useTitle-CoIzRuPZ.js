import { u as useFormContext } from "./useFormContext-Bd_C1v1K.js";
import { v as inject, e as computed } from "./runtime-dom.esm-bundler-CDgXytbd.js";
function useTitle(sectionName) {
  const translate = inject("translate");
  const { isCreate, isEdit } = useFormContext();
  const title = computed(() => {
    let prefix = "";
    if (isCreate.value) {
      prefix = "Create";
    }
    if (isEdit.value) {
      prefix = "Edit";
    }
    prefix = translate(prefix);
    return prefix + " " + translate(sectionName);
  });
  return { title };
}
export {
  useTitle as u
};

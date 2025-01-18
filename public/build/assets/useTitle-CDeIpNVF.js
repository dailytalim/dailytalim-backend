import { u as useFormContext } from "./useFormContext-irIFvdmS.js";
import { v as inject, b as computed } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
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

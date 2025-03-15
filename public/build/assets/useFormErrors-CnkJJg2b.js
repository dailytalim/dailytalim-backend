import { n as ne } from "./app-DfNp2XFq.js";
import { b as computed } from "./runtime-dom.esm-bundler-C6XC7_wD.js";
function useFormErrors() {
  const errors = computed(() => ne().props.errors);
  const errorsFields = computed(() => Object.keys(errors.value));
  return { errors, errorsFields };
}
export {
  useFormErrors as u
};

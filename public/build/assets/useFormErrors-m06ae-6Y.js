import { n as ne } from "./app-C4Iz7QyH.js";
import { b as computed } from "./runtime-dom.esm-bundler-CnJVbtqA.js";
function useFormErrors() {
  const errors = computed(() => ne().props.errors);
  const errorsFields = computed(() => Object.keys(errors.value));
  return { errors, errorsFields };
}
export {
  useFormErrors as u
};

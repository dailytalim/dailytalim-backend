import { n as ne } from "./app-NqH6V6F3.js";
import { e as computed } from "./runtime-dom.esm-bundler-CDgXytbd.js";
function useFormErrors() {
  const errors = computed(() => ne().props.errors);
  const errorsFields = computed(() => Object.keys(errors.value));
  return { errors, errorsFields };
}
export {
  useFormErrors as u
};

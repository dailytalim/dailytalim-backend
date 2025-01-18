function slug(string) {
  return string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-").replace(/[^\w-]+/g, "");
}
export {
  slug as s
};

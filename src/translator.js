import Translator from "@andreasremdt/simple-translator";

// The below provided options are default.
var translator = new Translator({
  defaultLanguage: "en",
  detectLanguage: true,
  selector: "[data-i18n]",
  debug: false,
  registerGlobally: "__",
  persist: false,
  persistKey: "preferred_language",
  filesLocation: "/i18n",
});

translator.fetch(["de", "en", "es", "in"]).then(() => {
  // Calling `translatePageTo()` without any parameters
  // will translate to the default language.
  translator.translatePageTo();
});

export default translator;

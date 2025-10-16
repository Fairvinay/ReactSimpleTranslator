/*eslint no-undef: "off"*/

import React from "react";
import translator from "./translator";

function Content() {
  function handleClick() {
    // Using `translateForKey()` without a target language,
    // the current language will be used.
    // See: https://github.com/andreasremdt/simple-translator#user-content-translateforkeystring-key-string-language
    alert(translator.translateForKey("dialog.content"));

    // You can also use the shorthand helper:
    console.log(__("dialog.content"));
  }

  return (
    <main>
      <h1 data-i18n="title">How To Cook A Juicy Chicken Breast</h1>
      <p data-i18n="content">
        There’s a big difference between juicy chicken breasts and rubbery
        chicken breasts. Obviously, you want to avoid the latter at all costs.
        Follow these 4 steps and you’re gold. You want to add protein to
        favorites like Caesar salad or fix up a quick chicken salad or club
        sandwich? Try this method and savor the results.
      </p>
      <h2 data-i18n="ingredients.title">Ingredients</h2>
      <ul>
        <li data-i18n="ingredients.$0">1 pound boneless chicken breasts</li>
        <li data-i18n="ingredients.$1">2 teaspoons olive oil</li>
        <li data-i18n="ingredients.$2">salt and pepper</li>
      </ul>
      <button type="button" data-i18n="dialog.button" onClick={handleClick}>
        Show calories
      </button>
    </main>
  );
}

export default Content;

// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/**
 * @param {string} elName ID for targeted element
 * @returns {dom} attribute setting
 */
toggleInterruption = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  dialog.hasAttribute('open')
  ? dialog.removeAttribute("open")
  : (dialog.removeAttribute("open"),
    dialog.setAttribute("open", true))
}

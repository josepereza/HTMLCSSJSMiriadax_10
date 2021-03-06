'use strict';

var deferredInstallPrompt = null;
var installButton = document.getElementById('butInstall');
/**
 * Event handler for beforeinstallprompt event.
 *   Saves the event & shows install button.
 *
 * @param {Event} evt
 */
// function saveBeforeInstallPromptEvent(evt) {

var saveBeforeInstallPromptEvent = function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  // console.log('Entro a saveBeforeInstallPromptEvent', evt)
  console.log('tararirorirori');
  evt.preventDefault();
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
};

window.onload = function (evt) {
  // console.log(installButton);
  installButton.addEventListener('click', installPWA); // CODELAB: Add event listener for beforeinstallprompt event

  window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent); // CODELAB: Add event listener for appinstalled event

  window.addEventListener('appinstalled', logAppInstalled);
};
/**
 * Event handler for butInstall - Does the PWA installation.
 *
 * @param {Event} evt
 */


function installPWA(evt) {
  // CODELAB: Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt(); // Hide the install button, it can't be called twice.

  evt.srcElement.setAttribute('hidden', true); // CODELAB: Log user response to prompt.

  deferredInstallPrompt.userChoice.then(function (choice) {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt', choice);
    } else {
      console.log('User dismissed the A2HS prompt', choice);
    }

    deferredInstallPrompt = null;
  });
}
/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */


function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
  console.log('Weather App was installed.', evt);
}
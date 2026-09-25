'use strict';

// Static English content remains readable when JavaScript is unavailable.
const languageButton = document.getElementById('language-toggle');
const translatedNodes = [...document.querySelectorAll('[data-it]')];
const translatedLabels = [...document.querySelectorAll('[data-it-label]')];
const englishContent = new Map(translatedNodes.map(node => [node, node.innerHTML]));
const englishLabels = new Map(translatedLabels.map(node => [node, node.getAttribute('aria-label')]));
let currentLanguage = 'en';

function setLanguage(language, announce = false) {
  currentLanguage = language === 'it' ? 'it' : 'en';
  const italian = currentLanguage === 'it';
  document.documentElement.lang = currentLanguage;
  translatedNodes.forEach(node => {
    // Only trusted translations authored in this HTML are inserted.
    node.innerHTML = italian ? node.dataset.it : englishContent.get(node);
  });
  translatedLabels.forEach(node => node.setAttribute('aria-label', italian ? node.dataset.itLabel : englishLabels.get(node)));
  languageButton.textContent = italian ? 'EN ↗' : 'IT ↗';
  languageButton.setAttribute('aria-label', italian ? 'Switch to English' : 'Passa alla lingua italiana');
  languageButton.setAttribute('lang', italian ? 'en' : 'it');
  if (announce) document.getElementById('language-status').textContent = italian ? 'Lingua impostata su italiano.' : 'Language changed to English.';
  try { localStorage.setItem('portfolio-language', currentLanguage); } catch { /* Optional preference. */ }
}

languageButton.hidden = false;
languageButton.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'it' : 'en', true));
let savedLanguage;
try { savedLanguage = localStorage.getItem('portfolio-language'); } catch { /* Use English. */ }
setLanguage(savedLanguage);
const printButton = document.getElementById('print-button');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());

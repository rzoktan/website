import '../styles/deferred.css';

import { init as initTextNav } from './modules/textNav.js';
import { raf, body } from './modules/utils.js';
import { screenEl } from './tv.js';
import TVScreen from './components/Screen.svelte';
import Remote from './components/Remote.svelte';
import HeaderControls from './components/HeaderControls.svelte';

const bootstrap = () => {
  raf(() => {
    body.removeAttribute('no-js', '');

    initTextNav();

    new TVScreen({ target: screenEl });

    new Remote({ target: document.querySelector('.js-remote') });

    new HeaderControls({
      target: document.querySelector('.js-header-controls'),
    });
  });
};

if (document.readyState !== 'interactive') {
  window.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

import { configure } from '@kadira/storybook';
import '../dist/react-select.css';

function loadStories() {
  require('../lib/.stories');
  // require as many as stories you need.
}

configure(loadStories, module);

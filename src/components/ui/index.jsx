import ReactUI from '@react-ui/core';

// styles
import themeDefault from '@react-ui/theme-default';
import * as themeFcomb from 'styles/ui';

console.log(themeFcomb);
const styles = {
  ...themeDefault,
  ...themeFcomb,
};

// components
import Modal from './modal';

const components = {
  Modal: Modal(styles.modal),
};

const UI = ReactUI({
  styles,
  components,
});

export default UI;

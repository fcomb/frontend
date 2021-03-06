import ReactUI from '@react-ui/core';

// styles
import themeDefault from '@react-ui/theme-default';
import * as themeFcomb from 'styles/ui';

const styles = {
  ...themeDefault,
  ...themeFcomb,
};

// components
import Modal from './modal';
import Dropdown from './dropdown';
import Icon from './icon';
import Text from './text';

const components = {
  Modal: Modal(styles.modal),
  Dropdown: Dropdown(styles.dropdown),
  Icon: Icon(),
  Text: Text(),
};

const UI = ReactUI({
  styles,
  components,
});

export default UI;

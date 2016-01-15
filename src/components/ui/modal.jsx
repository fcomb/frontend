import React from 'react';
import Portal from 'react-portal';
import cn from 'classnames';

export default (styles = {}) => (props) => {
  const contentClassName = {
    [styles[props.size]]: !!props.size,
  };

  return (
    <Portal {...props} className={cn(props.className, styles.container)}>
      <div {...props} className={cn(styles.content, contentClassName)}>
        {props.children}
      </div>
    </Portal>
  );
};

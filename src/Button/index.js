import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css';

const Index = forwardRef(({}, inputRef) => {
  return <div className={s.root}></div>;
});

Index.propTypes = {};

Index.displayName = 'Button';

export default Index;

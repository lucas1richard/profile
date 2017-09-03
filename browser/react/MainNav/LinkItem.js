import React from 'react';
import {Link, hashHistory} from 'react-router';

const LinkItem = ({path, children}) => {
  const warn = variable => console.warn(`No '${variable}' property on LinkItem instance`);

  if (!path) {
    warn('path');
    return null;
  }

  if (!children) {
    warn('children');
    return null;
  }

  const isActive = hashHistory.getCurrentLocation().pathname === path;

  return (
    <Link className={isActive ? 'active' : null} to={path}>
      {children}
    </Link>
  );
};

export default LinkItem;

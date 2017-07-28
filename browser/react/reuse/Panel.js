import React from 'react';

const Panel = ({ type, title, footer, children, titleStyle }) => {
  if (!footer) {
    footer = '';
  }

  return (
    <div className={`panel panel-${type || 'default'}`}>
      <div className="panel-heading">
        <h4 className={`panel-title`} style={ titleStyle || {} }>
          { title }
        </h4>
      </div>
      <div className="panel-body">
        { children }
      </div>
      { !footer.length ? '' : <div className="panel-footer">{ footer }</div>}
    </div>
  );
};

export default Panel;

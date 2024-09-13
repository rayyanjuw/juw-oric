// Breadcrumb.js
import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items, activePath }) => {
  return (
    <nav className="breadcrumb">
      <ul className="px-3">
        {items.map((item, index) => (
          <li key={index} className="bred-label">
            {index === items.length - 1 ? (
              <Link className= {item.path === activePath ? 'active' : 'none-active'} to={item.path}>{item.label}</Link>
            ) : (
              <Link className={item.path === activePath ? 'active' : 'none-active'} to={item.path}>{item.label}</Link>
            )}
            {index < items.length - 1 && <span className="separator"> / </span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
    activePath: PropTypes.string.isRequired,
};

export default Breadcrumb;



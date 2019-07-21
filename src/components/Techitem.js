import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Hidden',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
export default TechItem;

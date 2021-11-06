import React from 'react';
import PropTypes from 'prop-types';

const CFOCPageCommitteeDetailComponent = props => (
  <div className="cfoc-committee-detail" >
    <h1>{props.title}</h1>
    <article dangerouslySetInnerHTML={{ __html: props.body }} />
  </div>
);

CFOCPageCommitteeDetailComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

CFOCPageCommitteeDetailComponent.defaultProps = {
  title: '',
  body: '',
};

export default CFOCPageCommitteeDetailComponent;

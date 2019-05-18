import React from 'react';
import { connect } from 'react-redux';
import { resetForm } from '../../../redux/actions';
import './ResetButton.css';
import Button from '../Button/Button';

const ResetButton = ({ form, resetForm }) => (
  <Button
    text="Reset"
    color="light"
    events={{
      onClick: () => resetForm(form),
    }}
  />
);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);

/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
import { resetForm, changeFormStep } from '../../../redux/actions';
import './ResetButton.css';
import Button from '../Button/Button';

const ResetButton = ({ form, resetForm, changeFormStep }) => (
  <Button
    text="Reset"
    color="light"
    events={{
      onClick: (e) => {
        e.preventDefault();
        const confirmation = `Are you sure, you want to reset this form?\nIf yes, press \'Ok\' to continue.`;
        if (global.confirm(confirmation)) {
          resetForm(form);
          changeFormStep(form, 1);
        }
      },
    }}
  />
);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  resetForm,
  changeFormStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);

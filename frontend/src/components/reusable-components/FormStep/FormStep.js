import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFormStep } from '../../../redux/actions';
import './FormStep.css';

class FormStep extends Component {
  constructor(props) {
    super(props);
    this.form = props.form || 'default_form';
    this.title = props.title || null;
    this.description = props.description || null;
    this.index = props.index || null;

    this.props.addFormStep(this.form, this.title, this.description, this.index);
    this.state = {
      currentStep: props.currentStep || 1,
    };
  }

  render() {
    return (
      <div className="FormStep" data-visible={ parseInt(this.index) === this.props.currentStep }>
        <div className="FormStep__header">
          { this.title && (<div className="FormStep__header__title">{ this.title }</div>) }
          { this.description && (<div className="FormStep__header__desc">{ this.description }</div>) }
        </div>
        <div className="FormStep__content">
          { this.props.children }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const { steps } = state.forms[ownProps.form];
  const { currentStep } = steps;
  return {
    currentStep,
  };
};

const mapDispatchToProps = {
  addFormStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStep);

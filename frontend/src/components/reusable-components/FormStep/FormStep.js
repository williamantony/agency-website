import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addFormStep, removeFormStep } from '../../../redux/actions';
import './FormStep.css';

class FormStep extends Component {
  constructor(props) {
    super(props);
    this.id = props.id || uuid();
    this.form = props.form || 'default_form';
    this.title = props.title || null;
    this.description = props.description || null;
    this.index = props.index || 'last';

    this.props.addFormStep(this.form, this.id, this.index);

    this.state = {
      index: this.index,
      currentStep: props.currentStep || 1,
    };
  }
  
  static getDerivedStateFromProps(props, state) {
    if ((!!props.stepIndex && props.stepIndex !== state.index) ||
      (!!props.currentStep && props.currentStep !== state.currentStep)) {
      return {
        index: props.stepIndex,
        currentStep: props.currentStep,
      };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.removeFormStep(this.form, this.id);
  }

  render() {
    return (
      <div className="FormStep" data-visible={ this.state.index === this.state.currentStep }>
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
  const { steps } = state.forms[ownProps.form] || {};
  const { currentStep, list } = steps || {};
  return {
    currentStep,
    stepIndex: list[ownProps.id],
  };
};

const mapDispatchToProps = {
  addFormStep,
  removeFormStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStep);

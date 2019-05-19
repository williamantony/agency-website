import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFormStep } from '../../../redux/actions';
import uuid from 'uuid/v4';
import './FormStepProgress.css';

class FormStepProgress extends Component {
  constructor(props) {
    super(props);
    this.form = props.form || 'FormStepProgress';
    this.state = {
      currentStep: 1,
      stepsCount: props.stepsCount || 1,
      steps: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if ((!!props.currentStep && props.currentStep !== state.currentStep) ||
      (!!props.stepsCount && props.stepsCount !== state.stepsCount)) {
      
      const steps = [];
      for (let i = 1; i <= props.stepsCount; i++) {
        steps.push({
          id: uuid(),
          index: i,
          text: i,
        });
      }

      return {
        currentStep: props.currentStep,
        stepsCount: props.stepsCount,
        steps,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps) {
    if ((nextProps.currentStep !== this.state.currentStep) ||
      (nextProps.stepsCount !== this.state.stepsCount))
      return true;
    return false;
  }

  changeProgress = (index) => {
    this.props.changeFormStep(this.form, index);
    this.setState({
      currentStep: index,
    });
  }

  render() {
    const progress = `${ ((100 / (this.state.steps.length - 1)) * (this.state.currentStep - 1)) }%`;

    return (
      <div className="FormStepProgress">
        <div className="FormStepProgress__bar">
          <div className="FormStepProgress__bar__fill" style={{ width: progress }}></div>
        </div>
        <div className="FormStepProgress__list">
          {
            this.state.steps.map(step => (
              <div
                key={step.id}
                className="FormStepProgress__list__item"
                data-passed={(step.index <= this.state.currentStep)}
                onClick={() => this.changeProgress(step.index)}
              >{ step.text }</div>
            ))
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const { steps } = state.forms[ownProps.form] || {};
  const { currentStep, count } = steps || {};
  return {
    currentStep,
    stepsCount: count,
  };
};

const mapDispatchToProps = {
  changeFormStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStepProgress);

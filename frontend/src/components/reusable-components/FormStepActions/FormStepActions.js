import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextFormStep, previousFormStep } from '../../../redux/actions';
import './FormStepActions.css';
import Button from '../Button/Button';
import ResetButton from '../ResetButton/ResetButton';

class FormStepActions extends Component {
  constructor(props) {
    super(props);
    this.form = props.form || 'default_form';

    this.state = {
      currentStep: props.currentStep,
      count: props.count,
      events: props.events,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { currentStep, count, events } = props;
    if (
      (currentStep !== state.currentStep) ||
      (count !== state.count) ||
      (events !== state.events)
    ) {
      return { currentStep, count, events };
    }
    return null;
  }

  prevFormStep = () => {
    this.props.previousFormStep(this.form);
  }

  nextFormStep = () => {
    this.props.nextFormStep(this.form);
  }

  handlePrev = (e) => {
    e.preventDefault();
    const { onPrev } = this.state.events;

    if (typeof onPrev === 'function') {
      return onPrev((data) => {
        this.nextFormStep();
      });
    }
    
    return this.prevFormStep();
  }
  
  handleNext = (e) => {
    e.preventDefault();
    const { onNext, onSubmit } = this.state.events;
    const { currentStep, count } = this.state;
    
    if (currentStep === count && typeof onSubmit === 'function') {
      return onSubmit((data) => {
        this.nextFormStep();
      });
    }

    if (typeof onNext === 'function') {
      return onNext((data) => {
        this.nextFormStep();
      });
    }

    return this.nextFormStep();
  }

  render() {
    return (
      <div className="FormStepActions">
        <ResetButton form={this.form} />
        <div className="FormStepActions__buttons">
          {
            (this.state.currentStep > 1) && (
              <Button
                text="go back"
                color="dark"
                events={{
                  onClick: (e) => this.handlePrev(e),
                }}
              />
            )
          }{
            (this.state.currentStep === this.state.count)
              ? (
                <Button
                  text="Submit"
                  color="green"
                  events={{
                    onClick: (e) => this.handleNext(e),
                  }}
                />
              ) : (
                <Button
                  text="Continue"
                  color="blue"
                  events={{
                    onClick: (e) => this.handleNext(e),
                  }}
                />
              )
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const { currentStep, count, events, order } = state.forms[ownProps.form].steps;
  return {
    currentStep,
    count,
    events: events[order[currentStep - 1]] || {},
  };
};

const mapDispatchToProps = {
  nextFormStep,
  previousFormStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStepActions);

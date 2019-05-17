import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeData } from '../../../redux/actions';
import uuid from 'uuid/v4';
import './StepProgress.css';

class StepProgress extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'StepProgress';
    this.state = {
      currentStep: 1,
      steps: props.steps.map((step, index) => ({
        id: uuid(),
        index: index + 1,
        text: step || index + 1,
      })),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!!props.currentStep && props.currentStep !== state.currentStep) {
      return {
        currentStep: props.currentStep,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.currentStep !== this.state.currentStep)
      return true;
    return false;
  }

  changeProgress = (index) => {
    this.props.storeData(this.name, index);
    this.setState({
      currentStep: index,
    });
  }

  render() {
    const progress = `${ ((100 / (this.state.steps.length - 1)) * (this.state.currentStep - 1)) }%`;

    return (
      <div className="StepProgress">
        <div className="StepProgress__bar">
          <div className="StepProgress__bar__fill" style={{ width: progress }}></div>
        </div>
        <div className="StepProgress__list">
          {
            this.state.steps.map(step => (
              <div
                key={step.id}
                className="StepProgress__list__item"
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
  return {
    currentStep: state.data[ownProps.name],
  };
};

const mapDispatchToProps = {
  storeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepProgress);

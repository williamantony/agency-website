import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { setFormData } from '../../../redux/actions';
import './SelectInput.css';

class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.input = {
      name: props.name || uuid(),
      form: props.form || 'default_form',
      label: props.label || '',
      placeholder: props.placeholder,
      options: (props.options || []).map(option => ({
        ...option,
        id: option.id || uuid(),
        text: option.text,
        value: option.value,
      })),
    };

    this.state = {
      value: '',
      placeholder: this.input.placeholder,
      isOpen: false,
      isFilled: false,
      isFocused: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        value: props.value,
        placeholder: props.value === '' ? props.placeholder : state.placeholder,
        isFilled: props.value !== '',
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.state.value) return true;
    if (nextState.isOpen !== this.state.isOpen) return true;
    if (nextState.isFocused !== this.state.isFocused) return true;
    if (nextState.isFilled !== this.state.isFilled) return true;
    
    return false;
  }

  setInput = (value, text) => {
    this.props.setFormData(this.input.form, {
      [this.input.name]: value,
    });
    this.setState({
      value,
      placeholder: text,
      isFilled: value.trim() !== '',
    });
  }

  setInputOnKeyPress = (e, value, text) => {
    if (e.key === 'Enter')
      this.setInput(value, text);
  }

  toggleOptions = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isFocused: true,
    });
  }

  toggleOptionsOnKeyPress = (e) => {
    if (e.key === 'Enter')
      this.toggleOptions();
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleFocusToOpen = () => {
    this.setState({ isOpen: true });
  }

  handleBlur = () => {
    this.setState({
      isOpen: false,
      isFocused: false,
    });
  }

  render() {
    return (
      <div
        className={ `SelectInput ${ (this.input.label === '') ? 'SelectInput--nolabel' : '' }` }
        data-focused={this.state.isFocused}
        data-filled={this.state.isFilled}
        data-opened={this.state.isOpen}
      >
        <div className="SelectInput__bg" onMouseDown={this.handleBlur} />
        <div
          className="SelectInput__holder"
          onClick={this.toggleOptions} 
          tabIndex="0"
          onKeyPressCapture={this.toggleOptionsOnKeyPress}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <div className="SelectInput__input__holder">
            <label htmlFor={this.input.name} className="SelectInput__label">{ this.input.label }</label>
            <div className="SelectInput__input">
              <div className="SelectInput__placeholder">
                <div className="SelectInput__placeholder__text">{ this.state.placeholder }</div>
                <div className="SelectInput__placeholder__icon" />
              </div>
              <div className="SelectInput__options">
                <div className="SelectInput__options__list">
                  <div className="SelectInput__options__list__holder">
                    {
                      this.input.options.map((option, index) => (
                        <div
                          key={option.id}
                          className="SelectInput__options__item"
                          tabIndex={this.state.isOpen ? '0' : '-1'}
                          onClick={() => this.setInput(option.value, option.text)}
                          onKeyPress={(e) => this.setInputOnKeyPress(e, option.value, option.text)}
                          onFocus={this.handleFocusToOpen}
                          onBlur={this.handleBlur}
                        >
                          <div className="SelectInput__options__item__text">{ option.text }</div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const formData = state.forms[ownProps.form].data || {};
  const value = formData[ownProps.name] || '';
  return {
    value,
    placeholder: ownProps.placeholder || 'Click to see your options',
  };
};

const mapDispatchToProps = {
  setFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);

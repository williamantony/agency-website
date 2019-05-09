import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { setFormData } from '../../../redux/actions';
import './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.input = {
      name: props.name || uuid(),
      form: props.form || 'default_form',
      type: props.type || 'text',
      label: props.label || '',
      placeholder: props.placeholder || '',
      value: props.value || '',
      element: React.createRef(),
    };
    this.state = {
      form: this.input.form,
      value: this.input.value,
      isFocused: false,
      isFilled: false,
    };
  }

  setInput = (value) => {
    this.props.setFormData(this.input.form, {
      [this.input.name]: value,
    });
    this.setState({
      value,
      isFilled: value.trim() !== '',
    });
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setInput(e.target.value);
  }

  clearInput = () => {
    this.setInput('');
  }

  focusInput = () => {
    this.input.element.current.focus();
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
  }

  render() {
    const allowedTypes = [ 'text', 'number', 'password', 'email', 'tel', ];

    if (!allowedTypes.includes(this.input.type)) {
      return null;
    }

    return (
      <div
        className="TextInput"
        data-focused={this.state.isFocused}
        data-filled={this.state.isFilled}
        onClick={this.focusInput}
      >
        <div className="TextInput__holder">
          <label htmlFor={this.input.name} className="TextInput__label">{ this.input.label }</label>
          <input
            ref={this.input.element}
            id={this.input.name}
            className="TextInput__input"
            type={this.input.type}
            placeholder={this.input.placeholder}
            value={this.state.value}
            onChange={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <div className="TextInput__clear-icon" onClick={this.clearInput} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  setFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);

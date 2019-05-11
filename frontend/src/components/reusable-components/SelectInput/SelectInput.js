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
      placeholder: props.placeholder || '',
      options: (props.options || []).map(option => ({
        ...option,
        id: option.id || uuid(),
        text: option.text,
        value: option.value,
      })),
    };

    this.state = {
      value: '',
      isOpen: false,
      isFilled: false,
    };
  }

  setInput = (value, text) => {
    this.props.setFormData(this.input.form, {
      [this.input.name]: value,
    });
    this.input.placeholder = text;
    this.setState({
      value,
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
    });
  }

  toggleOptionsOnKeyPress = (e) => {
    if (e.key === 'Enter')
      this.toggleOptions();
  }

  handleFocus = () => {
    this.setState({ isOpen: true });
  }

  handleBlur = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div
        className="SelectInput"
        data-filled={this.state.isFilled}
        data-opened={this.state.isOpen}
        tabIndex="0"
        onClick={this.toggleOptions}
        onKeyPress={this.toggleOptionsOnKeyPress}
        onBlur={this.handleBlur}
      >
        <div className="SelectInput__holder">
          <label htmlFor={this.input.name} className="SelectInput__label">{ this.input.label }</label>
          <div className="SelectInput__input">
            <div className="SelectInput__placeholder">
              <div className="SelectInput__placeholder__text">{ this.input.placeholder }</div>
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
                        onFocus={this.handleFocus}
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
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  setFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);

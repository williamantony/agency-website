import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { setFormData } from '../../../redux/actions';
import './ChoiceInput.css';

class ChoiceInput extends Component {
  constructor(props) {
    super(props);
    this.input = {
      name: props.name || uuid(),
      form: props.form || 'default_form',
      type: props.type || 'checkbox',
      label: props.label || '',
      options: (props.options || []).map(option => ({
        ...option,
        id: option.id || uuid(),
        text: option.text,
        value: option.value,
        selected: option.selected || false,
      })),
    };

    this.selection = this.input.options.reduce((selection, option) => {
      return {
        ...selection,
        [option.value]: option.selected,
      };
    }, {});
    
    this.state = {
      value: this.selection,
      isFocused: false,
      isFilled: false,
    };
  }

  chooseOption = (optionValue, e) => {
    if (!!e && e.type === 'keypress') {
      if (e.key !== 'Enter') {
        return false;
      }
    }

    let value = optionValue;

    if (this.input.type === 'checkbox') {
      this.selection[optionValue] = !this.selection[optionValue];
      value = this.selection;
    } else if (this.input.type === 'radio') {
      this.selection = {};
      this.selection[value] = true;
    }

    this.props.setFormData(this.input.form, {
      [this.input.name]: value,
    });

    this.setState({
      value,
      isFilled: value.length !== 0,
    });
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
    const allowedTypes = [ 'checkbox', 'radio' ];

    if (!allowedTypes.includes(this.input.type)) {
      return null;
    }

    return (
      <div
        className="ChoiceInput"
        data-filled={this.state.isFilled}
        data-focused={this.state.isFocused}
      >
        <div className="ChoiceInput__holder">
          <label htmlFor={this.input.name} className="ChoiceInput__label">{ this.input.label }</label>
          <div className="ChoiceInput__input">
            <div className="ChoiceInput__input__options">
              {
                this.input.options.map(option => (
                  <div
                    key={option.id}
                    className="ChoiceInput__input__options__item"
                    data-selected={this.selection[option.value]}
                    onClick={() => this.chooseOption(option.value)}
                    onKeyPress={(e) => this.chooseOption(option.value, e)}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                  >
                    <div
                      className="ChoiceInput__input__options__item__checkbox"
                      data-selected={this.selection[option.value]}
                      tabIndex="0"
                    >
                      <div
                        className="ChoiceInput__input__options__item__checkbox__image"
                        data-selected={this.selection[option.value]}
                      />
                    </div>
                    <div className="ChoiceInput__input__options__item__text">{ option.text }</div>
                  </div>
                ))
              }
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

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceInput);

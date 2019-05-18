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
      value: '',
      options: (props.options || []).map(option => ({
        ...option,
        id: option.id || uuid(),
        text: option.text,
        value: option.value,
        selected: option.selected || false,
      })),
    };

    this.selection = {};

    this.input.options.forEach(option => {
      this.selection[option.value] = option.selected;
      if (option.selected)
        this.input.value = option.value;
    });
    
    this.state = {
      value: this.input.value,
      selection: this.selection,
      isFocused: false,
      isFilled: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      const selection = Object.keys(state.selection).reduce((selection, name) => {
        return {
          ...selection,
          [name]: false,
        };
      }, {});

      const returns = {
        value: props.value,
        selection,
        isFilled: props.value !== '',
      }

      if (props.value !== '') {
        return {
          ...returns,
          selection: {
            ...selection,
            [props.value]: true,
          },
        };
      }
      return returns;
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.state.value) return true;
    if (nextState.isFocused !== this.state.isFocused) return true;
    if (nextState.isFilled !== this.state.isFilled) return true;
    return false;
  }

  chooseOption = (optionValue, e) => {
    if (!!e && e.type === 'keypress') {
      e.preventDefault();
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
      selection: this.selection,
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
        className={ `ChoiceInput ${ (this.input.label === '') ? 'ChoiceInput--nolabel' : '' }` }
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
                    data-selected={this.state.selection[option.value]}
                    onClick={() => this.chooseOption(option.value)}
                    onKeyPress={(e) => this.chooseOption(option.value, e)}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                  >
                    <div
                      className="ChoiceInput__input__options__item__checkbox"
                      data-selected={this.state.selection[option.value]}
                      tabIndex="0"
                    >
                      <div
                        className="ChoiceInput__input__options__item__checkbox__image"
                        data-selected={this.state.selection[option.value]}
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

const mapStateToProps = (state, ownProps) => {
  const formData = state.forms[ownProps.form] || {};
  const value = formData[ownProps.name] || '';
  return { value };
};

const mapDispatchToProps = {
  setFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceInput);

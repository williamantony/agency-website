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
      flex: props.flex || 'column',
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

    const selection = {};

    this.input.options.forEach(option => {
      selection[option.value] = option.selected;
      if (option.selected)
        this.input.value = option.value;
    });

    this.input.value = this.input.type === 'checkbox' ? selection : '';

    this.props.setFormData(this.input.form, {
      [this.input.name]: this.input.value,
    });

    this.state = {
      value: this.input.value,
      selection,
      isFocused: false,
    };
  }

  static getDerivedStateFromProps(props, state) {

    let propsValue = props.value;
    let selection = {};
    
    if (!propsValue || (typeof propsValue === 'string' && propsValue === '')) {
      propsValue = {};
    }

    if (!!propsValue && typeof propsValue === 'object') {

        selection = Object.keys(propsValue).reduce((obj, key) => {
          if (propsValue[key] === true)
            obj[key] = true;
          return obj;
        }, {});

    } else {
      selection[propsValue] = true;
    }

    return {
      value: selection,
      selection,
    };

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.state.value) return true;
    if (nextState.isFocused !== this.state.isFocused) return true;
    if (this.input.type === 'checkbox') return true;
    return false;
  }

  chooseOption = (optionValue, e) => {
    if (!!e && e.type === 'keypress') {
      e.preventDefault();
      if (e.key !== 'Enter' && e.key !== ' ') {
        return false;
      }
    }

    let value = optionValue;
    let selection = this.state.selection;

    if (this.input.type === 'checkbox') {
      selection[optionValue] = !selection[optionValue];
      value = selection;
    }

    this.props.setFormData(this.input.form, {
      [this.input.name]: value,
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
        data-focused={this.state.isFocused}
      >
        <div className="ChoiceInput__holder">
          <label htmlFor={this.input.name} className="ChoiceInput__label">{ this.input.label }</label>
          <div className="ChoiceInput__input">
            <div className={ `ChoiceInput__input__options ChoiceInput__input__options--${this.input.flex}` }>
              {
                this.input.options.map(option => (
                  <div
                    key={option.id}
                    className="ChoiceInput__input__options__item"
                    data-selected={this.state.value[option.value]}
                    onClick={() => this.chooseOption(option.value)}
                    onKeyPress={(e) => this.chooseOption(option.value, e)}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                  >
                    <div
                      className="ChoiceInput__input__options__item__checkbox"
                      data-selected={this.state.value[option.value]}
                      tabIndex="0"
                    >
                      <div
                        className="ChoiceInput__input__options__item__checkbox__image"
                        data-selected={this.state.value[option.value]}
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
  const formData = state.forms[ownProps.form].data || {};
  const value = formData[ownProps.name] || '';
  return { value };
};

const mapDispatchToProps = {
  setFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceInput);

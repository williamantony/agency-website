import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { createForm, nextFormStep } from '../../../redux/actions';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.form = props.name || 'default_form';
    this.id = localStorage.getItem(`${this.form}__id`) || uuid();
    this.props.createForm(this.form, this.id);
  }

  render() {
    return (
      <form className="Form">
        { this.props.children}
      </form>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  createForm,
  nextFormStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

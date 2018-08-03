import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends Component {
  state = {
    data: { email: '', password: '' },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Correo no válido';
    if (Validator.isEmpty(data.email)) errors.email = 'Vacio';
    if (Validator.isEmpty(data.password))
      errors.password = 'No puede estar en blanco.';
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="control">
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="example@hotmail.com"
              value={data.email}
              onChange={this.onChange}
            />
          </div>
          {errors.email && <InlineError text={errors.email} />}
        </div>
        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Type your password"
              value={data.password}
              onChange={this.onChange}
            />
          </div>
          {errors.password && <InlineError text={errors.password} />}
        </div>
        <button className="button" type="submit">
          Login
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};
export default LoginForm;

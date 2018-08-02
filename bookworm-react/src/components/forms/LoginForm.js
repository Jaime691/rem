import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    data: { email: '', password: '' },
    loading: false,
    errors: []
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
  };
  render() {
    const { data } = this.state;
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
        </div>
        <button className="button is-link">Login</button>
      </form>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../actions/user_actions';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { required, validEmail, minSix, composeValidators } from '../common/validation';
import Grid from '@material-ui/core/Grid';

const LabelError = styled.span`
  color: red;
  font-size: 0.75rem;
  justify-content: right;  
`

const LabelContainer = styled.label`
  display:flex;
  justify-content: space-between;
`;

class LoginForm extends Component {

  onSubmit = async (values) => {
    await this.props.login(values, this.props.history);
  }

  generateFields(name, validation, type, label, placeholder) {
    return (
      <Grid item xs={3}>
        <Field name={name} validate={validation}>
          {({ input, meta }) => (
            <div>
              <LabelContainer>
                <label>{label}</label> {meta.error && meta.touched && <LabelError>{meta.error}</LabelError>}
              </LabelContainer>
              <input {...input} type={type} placeholder={placeholder} />
            </div>
          )}
        </Field>
      </Grid>
    );
  }

  render() {
    if (this.props.user.authenticated) {
      return (
        //todo: do something with this.
        <h1>Login successful</h1>
      );
    }
    return (
      <div>
        <h1>Login</h1>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} autoComplete='off'>
              <Grid container spacing={16}>
                {this.generateFields('email', composeValidators(required, validEmail), 'text', 'Email', 'email@example.com')}
              </Grid>
              <Grid container spacing={16}>
                {this.generateFields('password', composeValidators(required, minSix), 'password', 'Password', '')}
              </Grid>
              <div className="buttons">
                <Button variant="contained" type="submit" color="primary" disabled={submitting}>
                  Submit
                </Button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(mapStateToProps, { login })(LoginForm);
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { required, validEmail, minSix, composeValidators } from '../common/validation';
import Grid from '@material-ui/core/Grid';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

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
    return (
      <div>
        <h1>Login</h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} autoComplete='off'>
              <Grid container spacing={16}>
                {this.generateFields('email', composeValidators(required, validEmail), 'text', 'Email', 'email@example.com')}
                {this.generateFields('username', required, 'text', 'Username', 'user1234')}
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

export default LoginForm;
import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Form,
  Field,
} from 'react-final-form'
import {
  Paper
} from '@material-ui/core'



const openWeatherURL = (zipcode) => (
  `api.openweathermap.org/data/2.5/weather?zip=${zipcode},us`
)

class Weather extends Component {

  required = (value) => (
    value ? undefined : 'Required'
  )

  render() {

    return (
      <Paper>
        <Form
          onSubmit={this.handleSubmit}
        >
          <Field
            name='zipcode'
            component='input'
            validate={this.required}
            placeholder='zipcode'
          >
            {
              <div className={meta.active ? 'active' : ''}>
                <label>Details</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <Alert >{meta.error}</Alert>}
              </div>
            }
          </Field>
        </Form>
      </Paper>
    )
  }
}
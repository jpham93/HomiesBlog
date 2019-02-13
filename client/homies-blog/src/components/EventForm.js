import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Form, Field, FormSpy } from 'react-final-form'
import {
    Paper,
    Typography,
    Grid,
    Button,
} from '@material-ui/core'

const StyledPaper = styled(Paper)
    `
    width: 300px;
    padding: 20px 0;
`
const StyledTypography = styled(Typography)
    `
    text-align: center;
`
const StyledGrid = styled(Grid)
    `
    width: 95%;
`
const StyledTextarea = styled.textarea
    `
    resize: none;
    outline: none;
    border: none;
    border-bottom: 1px #99AAAB solid;
    &:active {
        border-bottom: 1px #00CCCD solid;
    };
`
const Alert = styled.span
    `
    color: red;
`
class EventForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
    }

    required = (value) => (
        value ? undefined : 'Required'
    )

    render() {

        return (
            <StyledPaper>
                <StyledTypography
                    variant='headline'
                >
                    Create Event
                </StyledTypography>
                <Form
                    onSubmit={this.handleSubmit}
                >
                    {({ handleSubmit, values, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                lg={12}
                                direction='column'
                                justify='center'
                                alignItems='center'
                            >
                                <StyledGrid item lg>
                                    <label>Title</label>
                                    <Field
                                        name='title'
                                        component='input'
                                        validate={this.required}
                                        placeholder='Title'
                                    >
                                        {
                                            ({ input, meta, placeholder }) => (
                                                <div className={meta.active ? 'active' : ''}>
                                                    <label>Details</label>
                                                    <input {...input} placeholder={placeholder} />
                                                    {meta.error && meta.touched && <Alert >{meta.error}</Alert>}
                                                </div>
                                            )
                                        }
                                    </Field>
                                </StyledGrid>
                                <StyledGrid item lg>
                                    <label>Description</label>
                                    <Field
                                        name='content'
                                        component='input'
                                        validate={this.required}
                                        placeholder='Description'
                                    >
                                        {
                                            ({ input, meta, placeholder }) => (
                                                <div className={meta.active ? 'active' : ''}>
                                                    <label>Details</label>
                                                    <input {...input} placeholder={placeholder} />
                                                    {meta.error && meta.touched && <Alert >{meta.error}</Alert>}
                                                </div>
                                            )
                                        }
                                    </Field>

                                </StyledGrid>
                                <StyledGrid item lg>
                                    <label>Date</label>
                                    <Field
                                        name='date'
                                        component='input'
                                        validate={this.required}
                                        placeholder='Date'
                                    >
                                        {
                                            ({ input, meta, placeholder }) => (
                                                <div className={meta.active ? 'active' : ''}>
                                                    <label>Details</label>
                                                    <input {...input} placeholder={placeholder} />
                                                    {meta.error && meta.touched && <Alert >{meta.error}</Alert>}
                                                </div>
                                            )
                                        }
                                    </Field>
                                </StyledGrid>
                                <StyledGrid item lg>
                                    <Field
                                        name='details'
                                        component='input'
                                        validate={this.required}
                                        placeholder='Details'
                                    >
                                        {
                                            ({ input, meta, placeholder }) => (
                                                <div className={meta.active ? 'active' : ''}>
                                                    <label>Details</label>
                                                    <StyledTextarea {...input} placeholder={placeholder} rows='6' />
                                                    {meta.error && meta.touched && <Alert >{meta.error}</Alert>}
                                                </div>
                                            )
                                        }
                                    </Field>
                                </StyledGrid>
                                <Button
                                    type='submit'
                                    disabled={submitting}
                                    variant='outlined'
                                    color='primary'
                                >
                                    Create
                                </Button>
                            </Grid>
                        </form>
                    )}
                </Form>
            </StyledPaper>
        )
    }
}

export default EventForm
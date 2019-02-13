import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import {
    Paper,
    Typography,
} from '@material-ui/core'

const StyledPaper = styled(Paper)`
    width: 200px;
    text-align: center;
    height 300px;
`


class EventForm extends Component {

    render() {
        return(
            <StyledPaper>
                <Typography
                    variant='headline'
                >
                    Create
                </Typography>
                <Form>
                    <form>
                        <label>Title</label><Field name='title' component='input' />
                        <label>Description</label><Field name='content' component='input' />
                        <label>Date</label><Field name='date' component='input' /> 
                        <label>Details</label><Field name='details' component='input' />
                    </form>
                </Form>
            </StyledPaper> 
        )
    }
}

export default EventForm
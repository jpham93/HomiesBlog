import React, { Component } from 'react'
import styled from 'styled-components'
import {
    TextField,
    Paper,
    Grid,
    Button,
    Typography,
} from '@material-ui/core'
import {
    indigo,
    grey,
} from '@material-ui/core/colors'

const StyledPaper = styled.div
    `
    background: ${grey[50]};
    padding: 20px;
    opacity: 0.85;
    height: 601px;
    `
const StyledButton = styled(Button)`
    margin: 0 5px;
`
const StyledGrid = styled(Grid)`
    margin: 'auto'; 
    margin-top: -26px;
`

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mediaURl: '',
            title: '',
            body: '',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    handleClear = () => {
        this.setState({
            mediaURl: '',
            title: '',
            body: '',
        })
    }

    handleSubmit = () => {
        const { title, body } = this.state

        alert(`You a snitch! Here's what you said:\nTitle: ${title}\nBody: ${body}`)
        // POST via axios
    }

    render() {
        const { title, body } = this.state

        return (
            <StyledGrid md={12}>
                <StyledPaper>
                    <Typography
                        variant='h2'
                        align='center'
                    >
                        Make a Post
                    </Typography>
                    <Grid
                        container
                        md={12}
                        direction='column'
                        justify='center'
                        alignItems='center'

                    >
                        <form onSubmit={this.handleSubmit}>
                            <Grid
                                container
                                md
                                direction='column'
                                justify='center'
                                alignItems='center'
                                style={{ margin: 'auto' }}
                            >
                                <Grid item md>
                                    <TextField
                                        label="Title"
                                        helperText="Post Title"
                                        variant="outlined"
                                        margin="normal"

                                        onChange={this.handleChange}
                                        name='title'
                                        value={title}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md>
                                <TextField
                                    label='Body'
                                    helperText='Post Goes here'
                                    variant='filled'
                                    margin="dense"
                                    multiline
                                    rows='10'
                                    rowsMax="20"
                                    style={{ width: 400, overflowY: 'auto' }}
                                    onChange={this.handleChange}
                                    name='body'
                                    value={body}
                                />
                            </Grid>
                            <Grid
                                container
                                md
                                justify='center'
                            >
                                <StyledButton
                                    color='primary'
                                    variant='contained'
                                    size='large'
                                    onClick={this.handleSubmit}
                                >
                                    Post
                                </StyledButton>
                                <StyledButton
                                    color='primary'
                                    variant='contained'
                                    size='large'
                                    onClick={this.handleClear}
                                >
                                    Clear
                                </StyledButton>
                            </Grid>
                        </form>
                    </Grid>
                </StyledPaper>
            </StyledGrid>

        )
    }
}

export default PostForm
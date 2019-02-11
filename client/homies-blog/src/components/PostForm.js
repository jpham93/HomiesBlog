import React, {Component} from 'react'
import { 
    TextField, 
    Paper, 
    Grid,
    Button,
    Typography,
} from '@material-ui/core'
import {
    
} from '@material-ui/icons'

const style={
    Paper: {padding: 20, marginTop: 30}
}

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
            [name] : value,
        })
    }

    handleSubmit = () => {
        const {title, body} = this.state

        alert(`You a snitch! Here's what you said:\nTitle: ${title}\nBody: ${body}`)
        // POST via axios
    }

    render() {
        const { title, body } = this.state

        return(
            <Grid md={6} style={{margin: 'auto'}}>
                <Paper style={style.Paper}>
                    <Typography
                        variant='display1'
                        align='center'
                    >
                        Make a Post
                    </Typography>
                    <Grid 
                        container 
                        md
                        alignItems='center'
                        justify='center'
                        
                    >
                        <form onSubmit={this.handleSubmit}> 
                            <Grid
                                container
                                md={6}
                                style={{margin: 'auto'}}    
                            >
                                <Grid item sm>
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
                            <Grid item sm>
                                <TextField 
                                    label='Body'
                                    helperText='Post Goes here'
                                    variant='filled'
                                    margin="dense"
                                    multiline
                                    rows='10'
                                    rowsMax="20"
                                    style={{width: 400, overflowY: 'auto'}}

                                    onChange={this.handleChange}
                                    name='body'
                                    value={body}
                                />
                            </Grid>
                            <Grid
                                container
                                md
                            >
                                <Button
                                    color='primary'
                                    variant='raised'
                                    size='large'
                                    style={{margin: 'auto'}}
                                    onClick={this.handleSubmit}
                                >
                                    Post
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
            
        )
    }
}

export default PostForm
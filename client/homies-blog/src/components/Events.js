import React, { Component, Fragment } from 'react'
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    withStyles,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Badge,
} from '@material-ui/core'
import {
    Image,
    ExpandMore,
    NotificationImportant
} from '@material-ui/icons/'

const sampleEvents = [
    { id: 1, title: 'Event', content: 'Do your homework', date: '1/10/2019', description: 'Blah Blah Blah' },
    { id: 2, title: 'Event', content: 'Take out the trash', date: '1/10/2019', description: 'Blah Blah Blah' },
    { id: 3, title: 'Event', content: 'Mow the loan', date: '1/10/2019', description: 'Blah Blah Blah' },
    { id: 4, title: 'Event', content: 'Call your mom', date: '1/10/2019', description: 'Blah Blah Blah' },
    { id: 5, title: 'Event', content: 'Eat vegetables', date: '1/10/2019', description: 'Blah Blah Blah' },
]

const styles = (theme) => ({
    ExpansionPanel: {
        width: 300,
        position: 'absolute',
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    // ExpansionPanelSummary : {
    //     textAlign: 'center',
    // },
    Badge: {
        width: '20%',
    },
    NotificationImportant: {
        marginRight: 5,
    },
})

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    handleClick = (data) => {
        const { title, content, date, description } = data
        this.setState({
            title,
            content,
            date,
            description,
        })
        this.handleToggle()
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { classes } = this.props
        // const alertIcon = sampleEvents.length ? <NotificationImportant className={classes.NotificationImportant } color='secondary' /> : null
        const length = sampleEvents.length
        const events = sampleEvents.length ?
            sampleEvents.map(event => {
                return (
                    <Fragment>
                        <Divider />
                        <ListItem key={event.id} onClick={() => this.handleClick(event)}>
                            <Avatar>
                                <Image />
                            </Avatar>
                            <ListItemText primary={event.title} secondary={event.content} />
                            <Typography variant='subtitle2'>{event.date}</Typography>
                        </ListItem>
                        <Divider />
                    </Fragment>
                )
            }) :
            "There are no events right now"

        const { title, content, date, description } = this.state

        return (
            <Fragment>
                <ExpansionPanel className={classes.ExpansionPanel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <Badge className={classes.Badge}
                            color="secondary"
                            badgeContent={length}
                            variant='dot'
                        >
                            <Typography variant='subtitle1'>
                                Events
                            </Typography>
                        </Badge>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List >
                            {events}
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleToggle}
                >
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Divider />
                            <Typography variant='subheading'>
                                {content}
                            </Typography>
                            <Divider /><br />
                            {description}
                        </DialogContentText>
                    </DialogContent>
                    <Button
                        variant='contained'
                        onClick={this.handleToggle}
                    >
                        Close
                    </Button>
                </Dialog>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Events);
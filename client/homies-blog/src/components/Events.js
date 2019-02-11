import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem  from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText'
import Avatar  from '@material-ui/core/Avatar'
import ImageIcon  from '@material-ui/icons/Image'


const sampleEvents = [
    {id: 1, title: 'Event', content: 'Do your homework'},
    {id: 2, title: 'Event', content: 'Take out the trash'},
    {id: 3, title: 'Event', content: 'Mow the loan'},
    {id: 4, title: 'Event', content: 'Call your mom'},
    {id: 5, title: 'Event', content: 'Eat vegetables'},
]

/*
const Events = (props) => {

    const contents = sampleEvents.length ? 
        sampleEvents.map( event => {
            return(
                <li key={event.id} className='collection-item'>
                    { event.event }
                </li>
            )
        }) :
            "There are no events right now"

    const headerStyle = sampleEvents.length ? 'indigo-text darken-3 flow-text pulse' : 'indigo-text lighten-2 flow-text'
    const containerStyle = {width: '300px', position: 'absolute', right: '10px '}

    return(
        <div style={containerStyle} id='event'>
            <ul className='collection with-header'>
                <li className={headerStyle} style={{paddingLeft: '5px'}}>Reminders</li>
                {events}       
            </ul>
        </div>
    )
}
*/

const Events = (props) => {

    const events = sampleEvents.length ? 
        sampleEvents.map( event => {
            return(
                <li key={event.id}>
                    <ListItem>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        <ListItemText primary={event.title} secondary={event.content} />
                    </ListItem>
                    <li>
                        <Divider />
                    </li>
                </li>
            )
        }) :
            "There are no events right now"
            
    const containerStyle = {width: '300px', position: 'absolute', right: '10px '}

    return(
            <List style={ containerStyle }>
                {events}
            </List>
    );
}

export default Events;
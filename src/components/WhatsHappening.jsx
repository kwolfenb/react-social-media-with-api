import React from 'react'
import Moment from 'moment';
import { v4 } from 'uuid';

function WhatsHappening(props) {
    let _names = null;
    let _message = null;

    function handleNewPost(event) {
        event.preventDefault();
        props.onNewPostCreation({ names: _names.value, message: _message.value, likes: 0, dislikes: 0, id: v4(), timePosted: new Moment() });
        _names.value = '';
        _message.value = '';
    }

    let background = {
        display: 'grid',
        backgroundColor: 'skyblue',
        height: 115,
        gridTemplateColumns: '1fr 4fr'
    }
    let profileIcon = {
        borderStyle: 'solid',
        height: '40',
        width: '40',
        backgroundColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '25',
        marginBottom: 'auto',
    }
    let input = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
    let inputNameField = {
        margin: 5,
        width: 400,
        height: 25,
        fontSize: '14px',
        paddingLeft: '5px',
    }

    let inputMessageField = {
        margin: 5,
        width: 400,
        height: 35,
        fontSize: '14px',
        paddingLeft: '5px',
    }

    return (
        <div>
            <div style={background} >
                <div style={profileIcon} >
                </div>
                <div style={input} >
                    <form onSubmit={handleNewPost}>
                        <input style={inputNameField} type="text" placeholder="User Name" id='names' ref={(input) => { _names = input; }} />
                        <br />
                        <input style={inputMessageField} type='text' id='message' placeholder='Message' ref={(input) => { _message = input; }} />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WhatsHappening
import React from 'react'

function WhatsHappening() {

    let background = {
        display: 'grid',
        backgroundColor: 'skyblue',
        height: 75,
        gridTemplateColumns: '1fr 4fr'
    }
    let profileIcon = {
        borderStyle: 'solid',
        height: '40',
        width: '40',
        backgroundColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
    let input = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
    let inputField = {
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
                    <input style={inputField} type="text" placeholder="What's Happening?" />
                </div>
            </div>
        </div>  
    )
}

export default WhatsHappening
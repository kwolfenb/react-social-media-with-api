import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    let styleGrid = {
      display: "grid",
      gridTemplateColumns: '2fr 3fr 2fr 15fr 1fr 1fr',
      marginLeft: '20px',
      marginRight: '20px'
    };

    let navTabs = {
        borderWidth: '1',
        borderStyle: 'solid',
        textAlign: 'center',
        borderColor: 'lightgrey',
        height: '30px',
        paddingTop: '10px',
        marginTop: '20px'
    }
    let searchBar = {
      borderStyle: 'solid',
      borderRadius: '20px',
      borderColor: '#6DADEC',
      borderWidth: '3',
      width: '175',
      fontSize: '12px',
      paddingLeft: '25',
      marginTop: '20px',
      marginBottom: '25px',
      marginRight: '25px',
      marginLeft: '25px',
      height: '25px'
    };

    let tweetButton = {
        backgroundColor: '#6DADEC',
        borderRadius: '20px',
        borderColor: '#6DADEC',
        borderWidth: '3',
        fontSize: '12px',
        color: 'white',
        marginTop: '20px',
        marginBottom: '25px',
        marginRight: '25px',
        marginLeft: '25px',
        height: '33px', 
        width: '100',
    };

    return (
        <div style={styleGrid}>
            <div>
            <Link to='/'> <p style={navTabs}>Home</p> </Link>
            </div>
            <div>
                <Link to='/notifications'> <p style={navTabs}>Notifications</p> </Link>
            </div>
            <div>
                <p style={navTabs}>Messages</p>
            </div>
            <div>
            </div>
            <div>
                <div>
                    <input style={searchBar} type="text" placeholder="Search" />
                </div>
            </div>
            <div>
                <div>
                    <button style={tweetButton}> Tweet</button>
                </div>
            </div>

        </div>
        
    )
}

export default Navbar;
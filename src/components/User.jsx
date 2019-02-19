import React from 'react'

function User() {

    let topHalf = {
        backgroundColor: '#6DADEC',
        height: '125'
    }
    let user = {
        textAlign: 'right',
        marginRight: '25px',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '20',
    }
    let content = {
        textAlign: 'center',
        paddingBottom: '15'
    }
    let profilePic = {
      position: "relative",
      height: 75,
      width: 75,
      left: 15,
      top: 85,
      borderRadius: 20,
      borderColor: "white",
      borderStyle: "solid",
      borderWidth: 2,
      backgroundColor: "#6DADEC"
    };

    return (
        <div>
            <div style={topHalf}>
                <div style={profilePic}>
                </div>
            </div>
            <div>
                <p style={user}>Cristian Lucero</p>
            </div>
            <div>
                <p style={content} >Tweets Followers  Following  </p>
            </div>

        </div>
    );
}

export default User;
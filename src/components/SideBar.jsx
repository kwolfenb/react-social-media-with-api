import React from 'react';
import PropTypes from "prop-types";

function SideBar(props) {
    let wrapper = {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        paddingLeft: 15,
    };

    let iconRow = {
        gridRowStart: 'span 2',
    };

    let icon = {
        backgroundColor: props.color,
        height: 60,
        width: 60
    };

    let button = {
      height: 25,
      width: 75,
      backgroundColor: "navy",
      color: "white",
      marginBottom: 15,
      fontWeight: "bold"
    };

    let text = {
        fontWeight: 'bold',
        
    };
    return (
        <div style={wrapper} >
            <div style={iconRow}>
                <p style={icon}></p>
            </div>
            <div>
                <p style={text}>Donec eu orci et</p>
            </div>
            <div>
                <button style={button}>Add</button>
            </div>
        </div>
    )
}

SideBar.propTypes = {
    color: PropTypes.color,
};

export default SideBar
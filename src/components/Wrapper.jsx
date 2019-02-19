import React from 'react'
import User from './User'
import WhatsHappening from './WhatsHappening'
import Feed from './Feed'
import FeedList from './FeedList'
import SideBar from './SideBar'

function Wrapper() {
    let wrapper = {
        display: 'grid',
        gridTemplateColumns: '2fr 4fr 2fr'
    };
    let user = {
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        width: '300',
        marginLeft: '20',
        height: '225'
    };
    let leftText = {
        borderColor: "lightgrey",
        borderStyle: "solid",
        padding: 5,
        marginLeft: '-2',
        height: '225',
        width: '290'
    };

    let centerColumn = {
        marginLeft: '8px',
        marginRight: '8px',
    };
    let sideBar = {
        margin: 5,
        height: 400,
        borderStyle: 'solid',
        borderColor: 'lightgrey'
    }
    let title = {
        paddingLeft: '15',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: '18px'
    }

    return (
      <div style={wrapper}>
        <div style={user}>
          <User />
            <div style={leftText}>
                <p>Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec eu orci et nulla ultricies commodo ac vel leo. Suspendisse non ex veneatis, rhoncus nunc sed, pretium tortor. Ut ac massa et libero tincidunt convallis. Nam porttitor odio sit amet nulla hendrerit pharetra.</p>
            </div>
        </div>
        <div style={centerColumn}>
          <WhatsHappening />
          <FeedList/>
        </div>
        <div style={sideBar}>
            <p style={title}>Lorem ipsum</p>
            <SideBar color="brown"/>
            <SideBar color="tan"/>
            <SideBar color="green"/>
        </div>
      </div>
    );
}

export default Wrapper
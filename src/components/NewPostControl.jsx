import React from 'react'
import PropTypes from 'prop-types'
import WhatsHappening from './WhatsHappening'
// import Moment from 'moment';


class NewPostControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
      
  render() {


    return (
      <div>
        <WhatsHappening
          onNewPostCreation={this.props.onNewPostCreation}
        />
      </div>
    )
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
}
export default NewPostControl
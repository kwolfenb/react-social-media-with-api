import React from 'react'
import PropTypes from 'prop-types'


function Feed(props) {
  let feedList = {
    display: 'grid',
    gridTemplateColumns: '1fr 6fr',
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    borderWidth: '1.5'
  }
  let profileIcon = {
    borderStyle: 'solid',
    borderColor: 'tan',
    height: '40',
    width: '40',
    backgroundColor: 'tan',
    margin: '20'


  }
  let text = {
    textAlign: 'left'
  }
  let userName = {
    fontWeight: 'bold'
  }

  let Btn = {
    marginTop: 13,
    height: 20,
    width: 50,
    backgroundColor: '#ceffa8',
    color: '#1420c8'
  }

  let Btn2 = {
    marginTop: 13,
    height: 20,
    width: 50,
    backgroundColor: '#ceffa8',
    color: '#f52433'
  }

  let buttons = {
    display: 'grid',
    gridTemplateColumns: '1fr 6fr'
  }



  return (
    <div style={feedList}>
      <style jsx>{`
        .likes{
            font-size: 15px;   
        }
        `}
      </style>
      <div>
        <div style={profileIcon} />
      </div>
      <div>
        <h3>{props.names}</h3>
        <p><em>{props.message}</em></p>
        <hr />
        <div style={buttons}>
          <button style={Btn} onClick={props.addLike}>Like</button><p className='likes'>{props.likes}</p>
          <button style={Btn2} onClick={props.addDislike}>Dislike</button><p className='likes'>{props.dislikes}</p>
        </div>
      </div>
    </div>
  );
}

Feed.propTypes = {
  names: PropTypes.string.isRequired,
  message: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  addLike: PropTypes.func,
  addDislike: PropTypes.func
};

export default Feed;
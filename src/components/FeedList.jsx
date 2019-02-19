
import React from 'react';
import Feed from './Feed';
import NewPostControl from './NewPostControl';



class FeedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    }

    componentDidMount() {
        this.waitTimeUpdateTimer = setInterval(() =>
          this.updatePostElapsedWaitTime(),
          5000
        );
      }

      updatePostElapsedWaitTime() {
        let newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.forEach((post) =>
          post.formattedWaitTime = (post.timePosted).fromNow(true)
        );
        this.setState({masterPostList: newMasterPostList})
      }

      componentWillUnmount(){
        clearInterval(this.waitTimeUpdateTimer);
      }

    displayTimePosted(timePosted) {
        return timePosted.from(new Moment(), true);
      }

    handleAddingNewPostToList(newPost) {
        var newMasterPostList = this.state.masterPostList.slice();
        newPost.formattedWaitTime = (newPost.timePosted).fromNow(true)
        newMasterPostList.push(newPost);
        this.setState({ masterPostList: newMasterPostList });
    }

    addLike(id) {
        for (let post of this.state.masterPostList) {
            if (post.id === id) {
                post.likes++;
                let newState = Object.assign({}, this.state.masterPostList, post);
                this.setState({ newState });

            }
        }
    }

    addDislike(id) {
        for (let post of this.state.masterPostList) {
            if (post.id === id) {
                post.dislikes++;
                let newState = Object.assign({}, this.state.masterPostList, post);
                this.setState({ newState });
            }
        }
    }

    render() {
        let tempPost = this.state.masterPostList.slice();
        tempPost.sort((a,b) => (a.likes < b.likes) ? 1 : -1)
        return (
            <div>
                <NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />
                {tempPost.map((feed) =>
                    <Feed names={feed.names}
                        message={feed.message}
                        likes={feed.likes}
                        dislikes={feed.dislikes}
                        formattedWaitTime={feed.formattedWaitTime}
                        key={feed.id}
                        addLike={() => this.addLike(feed.id)}
                        addDislike={() => this.addDislike(feed.id)}
                    />
                )}
            </div>
        );
    }
}


export default FeedList;
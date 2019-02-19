
import React from 'react';
import Feed from './Feed';
import NewPostControl from './NewPostControl';
import WhatsHappening from './WhatsHappening';


class FeedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    }

    handleAddingNewPostToList(newPost) {
        var newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.push(newPost);
        this.setState({ masterPostList: newMasterPostList });
    }

    addLike(key) {
        for (let post of this.state.masterPostList) {
            if (post.key === key) {
                post.likes++;
                let newState = Object.assign({}, this.state.masterPostList, post);
                this.setState({ newState });
            }
        }
    }

    addDislike(key) {
        for (let post of this.state.masterPostList) {
            if (post.key === key) {
                post.dislikes++;
                let newState = Object.assign({}, this.state.masterPostList, post);
                this.setState({ newState });
            }
        }
    }

    render() {
        return (
            <div>
                <NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />
                {this.state.masterPostList.map((feed) =>
                    <Feed names={feed.names}
                        message={feed.message}
                        likes={feed.likes}
                        dislikes={feed.dislikes}
                        key={feed.key}
                        addLike={() => this.addLike(feed.key)}
                        addDislike={() => this.addDislike(feed.key)}
                    />
                )}
            </div>
        );
    }
}


export default FeedList;
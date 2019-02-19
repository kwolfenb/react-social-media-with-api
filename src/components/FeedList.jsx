
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

    handleAddingNewPostToList(newPost) {
        var newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.push(newPost);
        console.table(newPost);
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
        return (
            <div>
                <NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />
                {this.state.masterPostList.map((feed) =>
                    <Feed names={feed.names}
                        message={feed.message}
                        likes={feed.likes}
                        dislikes={feed.dislikes}
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
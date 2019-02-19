
import React from 'react';
import Feed from './Feed';
import { v4 } from 'uuid';

class FeedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    names: 'Thato and Haley',
                    content: 'Firebase won\'t save record. Halp.',
                    likes: 3,
                    dislikes:1,
                    key: v4()
                  },
                  {
                    names: 'Sleater and Kinney',
                    content: 'Fox image not displaying on page, can only see duck?',
                    likes: 3,
                    dislikes:1,
                    key: v4()
                  },
                  {
                    names: 'Imani & Jacob',
                    content: 'Donkey picture not displaying on hover in Zoology app. :(',
                    likes: 3,
                    dislikes:1,
                    key: v4()
                  }
            ]
        }
    }

        addLike(key) {
            for(let post of this.state.posts) {
                if(post.key === key) {
                    post.likes++;
                    let newState = Object.assign({}, this.state.posts, post);
                    this.setState({newState});
                }
            }
        }

        addDislike(key) {
            for(let post of this.state.posts) {
                if(post.key === key) {
                    post.dislikes++;
                    let newState = Object.assign({}, this.state.posts, post);
                    this.setState({newState});
                }
            }
        }

        render(){
            return (
                <div>
                {this.state.posts.map((feed) =>
                    <Feed names={feed.names}
                    content={feed.content}
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
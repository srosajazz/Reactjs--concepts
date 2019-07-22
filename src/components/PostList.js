import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Mary Smith',
          avatar: 'https://i.pravatar.cc/150?img=1',
        },
        date: '04 Jun 2019',
        content: 'Lorem Ipsum is simply dummy it to make a type specimen book.',
        comments: [
          {
            id: 2,
            author: {
              name: 'Sergio Rosa',
              avatar:
                'https://avatars3.githubusercontent.com/u/42471460?s=460&v=4',
            },
            date: '04 Jun 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.)',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Mike Doe',
          avatar: 'https://i.pravatar.cc/150?img=8',
        },
        date: '04 Jun 2019',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting',
        comments: [
          {
            id: 4,
            author: {
              name: 'Nancy Smith',
              avatar: 'https://i.pravatar.cc/150?img=5',
            },
            date: '04 Jun 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting',
          },
          {
            id: 5,
            author: {
              name: 'Kyle joe',
              avatar: 'https://i.pravatar.cc/150?img=11',
            },
            date: '04 Jun 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting',
          },
        ],
      },
      {
        id: 6,
        author: {
          name: 'Michael Hez',
          avatar: 'https://i.pravatar.cc/150?img=51',
        },
        date: '04 Jun 2019',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting',
        comments: [
          {
            id: 4,
            author: {
              name: 'Nancy Smith',
              avatar: 'https://i.pravatar.cc/150?img=5',
            },
            date: '04 Jun 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting',
          },
          {
            id: 5,
            author: {
              name: 'Kyle joe',
              avatar: 'https://i.pravatar.cc/150?img=11',
            },
            date: '04 Jun 2019',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;

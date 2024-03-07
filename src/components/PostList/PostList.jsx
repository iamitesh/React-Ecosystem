import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostList.css'
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data.slice(1,10));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='posts'>
      <h2 className='posts-title'>Posts</h2>
      <ul className='posts-list'>
        {posts.map(post => (
          <li className='post-item' key={post.id}>
            <h3 className='post-title'>{(post.title.toUpperCase())}</h3>
            <p className='post-desc'>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

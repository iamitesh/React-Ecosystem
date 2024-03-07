import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../Store/postsSlice';
// import axios from 'axios';
import './PostList.css'
const PostList = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // fetch posts using axios
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //       setPosts(response.data.slice(1,10));
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);


  return (
    <div className='posts'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className='posts-title'>Posts</h2>
          <ul className='posts-list'>
            {posts.map(post => (
              <li className='post-item' key={post.id}>
                <h3 className='post-title'>{(post.title.toUpperCase())}</h3>
                <p className='post-desc'>{post.body}</p>
              </li>
            ))}
          </ul>
        </>)}
    </div>
  );
};

export default PostList;

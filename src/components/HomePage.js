import React, { useState } from 'react';
import './HomePage.css';
import RegistrationFormPage from './RegistrationFormPage';
import SearchBarPage from './SearchBarPage';
import PostPage from './PostPage';
import CreatePostFormPage from './CreatePostFormPage';
import {v4 as uuidv4} from 'uuid'

const HomePage=()=> {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Taking Username, Contact from RegistrationFormPage
  const handleRegister = (userData) => {
    setUser(userData);
  };
  
  // Creating new Post
  const handleCreatePost = (content) => {
    const newPost = {
      id:uuidv4(), // uuid is an univerisal unique identifier which is used to create unique id
      content,
      likes: 0,
    };
    setPosts([...posts, newPost]);
    setFilteredPosts([...filteredPosts, newPost]);
  };

  // Increasing likes count if the id's are equal else keeping like count same
  const handleLike = (postId) => {
    const updatedPosts = posts.map((each) =>
      each.id === postId ? { ...each, likes: each.likes + 1 } : each
    );
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  // Deleting a post 
  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((each) => each.id !== postId);
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  // Comparing content post with search post
  const handleSearch = (searchTerm) => {
    const filtered = posts.filter((each) =>
      each.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container">
      <h1>Content Sharing Platform</h1>
      {user ? (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <CreatePostFormPage onCreatePost={handleCreatePost} />
          <SearchBarPage onSearch={handleSearch} />
          {filteredPosts.map((post) => (
            <PostPage
              key={post.id}
              post={post}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <RegistrationFormPage onRegister={handleRegister} />
      )}
    </div>
  );
}

export default HomePage;
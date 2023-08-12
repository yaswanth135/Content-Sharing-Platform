import React, { useState } from 'react';
import './CreatePostFormPage.css';

const CreatePostFormPage=(props)=> {
  
  const {onCreatePost}=props
  const [postContent, setPostContent] = useState('');

  const handleCreatePost = () => {
    onCreatePost(postContent);
    setPostContent('');
  };

  const onChangePost=(event)=>{
    setPostContent(event.target.value)
  }

  return (
    <div className="create-post-form">
      <h3>Create Post</h3>
      <textarea
        value={postContent}
        onChange={onChangePost}
        placeholder="Enter Your Post Text"
        rows="5"
        cols="20"
      /><br></br>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
}

export default CreatePostFormPage;
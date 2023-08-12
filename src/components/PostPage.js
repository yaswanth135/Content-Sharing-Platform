import React from 'react';
import {AiFillLike} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import './PostPage.css'

const PostPage=(props)=> {
  const { post, onLike, onDelete }=props
  const {content,id,likes}=post

  const onLikeButton=()=>{
    onLike(id)
  }

  const onClickDelete=()=>{
    onDelete(id)
  }
  
  return (
    <div className="post-container">
      <p className="post-content">{content}</p>
      <div className="post-actions">
        <button className="button" onClick={onLikeButton}>
          <AiFillLike /> ({likes})
        </button>
        <button className="button" onClick={onClickDelete}>
          <AiFillDelete/>
        </button>
      </div>
    </div>
  );
}

export default PostPage;
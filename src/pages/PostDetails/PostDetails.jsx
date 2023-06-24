import React from 'react';
import { MdArrowBack } from 'react-icons/md';

import styles from './PostDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useForum } from '../../context/ForumContext';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import Sidebar from '../../components/Sidebar/Sidebar';
const PostDetails = () => {
  const { id } = useParams();
  const forum = useForum();
  const navigate = useNavigate();

  const selectedPost = forum?.forumData?.posts.find(
    (post) => post.postId === id
  );
  return (
    <main>
      <Sidebar />
      <section>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <MdArrowBack /> Posts
        </button>
        <PostCard postData={selectedPost} />
        <h5>Comments</h5>
        {selectedPost?.comments?.map((comment) => (
          <CommentCard key={comment.commentId} commentData={comment} />
        ))}
      </section>
    </main>
  );
};

export default PostDetails;

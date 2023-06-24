import React from 'react';
import {
  MdArrowDropUp,
  MdArrowDropDown,
  MdAccountCircle,
  MdChatBubble,
  MdShare,
  MdBookmark,
} from 'react-icons/md';

import styles from './PostCard.module.css';
import { useForum } from '../../context/ForumContext';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ postData }) => {
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
  } = postData;

  const forum = useForum();
  const navigate = useNavigate();

  const voteCount = +upvotes - +downvotes;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.voteButtonContainer}>
        <div className={styles.svgBtn}>
          <MdArrowDropUp onClick={() => forum.upvotePost(postId)} />
        </div>
        {voteCount}
        <MdArrowDropDown onClick={() => forum.downvotePost(postId)} />
      </div>
      <div className={styles.postContentContainer}>
        <div className={styles.postHeader}>
          <div className={styles.avatarContainer}>
            <img src={forum?.forumData?.picUrl} alt='avatar' />
          </div>
          <p>
            Posted By <span>{username}</span>
          </p>
        </div>

        <div className={styles.postTitle}>
          <h3>{post}</h3>
        </div>
        <div className={styles.postTagsContainer}>
          {tags?.map((tag, index) => (
            <p key={index} className={styles.postTag}>
              {tag}
            </p>
          ))}
        </div>
        <div className={styles.postContent}>
          <p>{postDescription}</p>
        </div>
        <div className={styles.postButtonsContainer}>
          <div
            className={styles.svgBtn}
            onClick={() => navigate(`/details/${postId}`)}
          >
            <MdChatBubble />
          </div>
          <MdShare />
          <div
            className={
              forum?.forumData?.isBookmarked === true && styles.bookmarked
            }
            onClick={() => forum.bookmark(postId)}
          >
            <MdBookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

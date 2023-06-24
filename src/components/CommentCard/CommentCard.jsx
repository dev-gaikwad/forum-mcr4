import React from 'react';
import { MdAccountCircle, MdThumbUp } from 'react-icons/md';

import styles from './Commentcard.module.css';
const CommentCard = ({ commentData }) => {
  const { username, picUrl, likes, comment } = commentData;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.avatarContainer}>
        <img src={picUrl} alt='avatar' />
      </div>
      <div className={styles.commentContentContainer}>
        <div className={styles.commentHeader}>
          <span>@{username}</span>
        </div>
        <p>{comment}</p>
        <MdThumbUp /> {likes}
      </div>
    </div>
  );
};

export default CommentCard;

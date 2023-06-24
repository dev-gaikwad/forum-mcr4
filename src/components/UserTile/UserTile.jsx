import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

import styles from './UserTile.module.css';
import { useForum } from '../../context/ForumContext';

const UserTile = () => {
  const forum = useForum();
  return (
    <div className={styles.tileContainer}>
      <div className={styles.avatarContainer}>
        <img src={forum?.forumData?.picUrl} alt='avatar' />
      </div>
      <div className={styles.tileContent}>
        <p>{forum?.forumData?.name}</p>
        <small>@{forum?.forumData?.username}</small>
      </div>
    </div>
  );
};

export default UserTile;

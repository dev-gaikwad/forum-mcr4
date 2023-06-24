import React from 'react';
import {
  MdHome,
  MdExplore,
  MdBookmarks,
  MdAccountCircle,
} from 'react-icons/md';

import styles from './Sidebar.module.css';
import UserTile from '../UserTile/UserTile';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <ul>
        <li className={styles.navPill}>
          <div>
            <MdHome /> Home
          </div>
        </li>
        <li className={styles.navPill}>
          <MdExplore /> Explore
        </li>
        <li className={styles.navPill}>
          <MdBookmarks /> BookMarks
        </li>
        <li className={styles.navPill}>
          <MdAccountCircle /> Profile
        </li>
      </ul>
      <UserTile />
    </aside>
  );
};

export default Sidebar;

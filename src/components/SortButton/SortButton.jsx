import React from 'react';

import { useForum } from '../../context/ForumContext';

const SortButton = () => {
  const forum = useForum();
  return (
    <aside>
      <select
        name='sort'
        id='sort'
        onChange={(e) => forum.sortBy(e.target.value)}
      >
        <option value='latest' defaultChecked>
          Latest First
        </option>
        <option value='voted'>Most Voted</option>
      </select>
    </aside>
  );
};

export default SortButton;

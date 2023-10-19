import React from 'react';
import Stats from './Stats';
export const Statistics = ({ id, title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(statsItem => (
          <Stats key={id} {...statsItem} />
        ))}
      </ul>
    </section>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TabBar.scss';
import classNames from 'classnames';

const tabs = [
  { label: 'Now Playing', path: '/' },
  { label: 'Top Rated', path: '/top-rated' },
];

const TabBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          to={tab.path}
          className={classNames('tab-item', {
            'active' : location.pathname === tab.path
          })}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default TabBar;

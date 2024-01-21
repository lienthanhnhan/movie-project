import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import './ViewSwitchMode.scss';
import classNames from 'classnames';

export const VIEW_MODE = {
  GRID: 'grid',
  LIST: 'list',
}

interface ViewSwitchModeProps {
  setViewMode: (viewMode: string) => void;
  currentView: string;
}

const ViewSwitchMode: React.FC<ViewSwitchModeProps> = ({ setViewMode, currentView }) => {
  return (
    <div className="view-switcher">
      <button
        className={classNames('tab-item', {
          'active': currentView === VIEW_MODE.LIST,
        })}
        onClick={() => setViewMode(VIEW_MODE.LIST)}
      >
        <FontAwesomeIcon icon={faList} />
      </button>
      <button
        className={classNames('tab-item', {
          'active': currentView === VIEW_MODE.GRID,
        })}
        onClick={() => setViewMode(VIEW_MODE.GRID)}
      >
        <FontAwesomeIcon icon={faTh} />
      </button>
    </div>
  );
};

export default ViewSwitchMode;

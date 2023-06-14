/* eslint-disable no-unused-vars */
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { selectedTabs } from '../../store/tabs/tabs.selector';
import { setCheapSort, setFastSort, setOptimalSort } from '../../store/tabs/tabs.actions';

import classes from './tabs.module.scss';

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTabs = useSelector(selectedTabs);

  const cheapSortIsActive = activeTabs.cheapSort;
  const fastSortIsActive = activeTabs.fastSort;
  const optimalSortIsActive = activeTabs.optimalSort;

  const cheapSortActiveClass = cheapSortIsActive ? `${classes.button} ${classes.active}` : `${classes.button}`;
  const fastSortActiveClass = fastSortIsActive ? `${classes.button} ${classes.active}` : `${classes.button}`;
  const optimalSortActiveClass = optimalSortIsActive ? `${classes.button} ${classes.active}` : `${classes.button}`;

  return (
    <Space.Compact>
      <Button className={cheapSortActiveClass} onClick={() => dispatch(setCheapSort())}>
        САМЫЙ ДЕШЁВЫЙ
      </Button>
      <Button className={fastSortActiveClass} onClick={() => dispatch(setFastSort())}>
        САМЫЙ БЫСТРЫЙ
      </Button>
      <Button className={optimalSortActiveClass} onClick={() => dispatch(setOptimalSort())}>
        ОПТИМАЛЬНЫЙ
      </Button>
    </Space.Compact>
  );
};

export default Tabs;

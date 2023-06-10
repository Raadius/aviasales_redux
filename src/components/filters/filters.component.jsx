/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';

import {
  setAllFilters,
  setDirectFilter,
  setOneStop,
  setTwoStops,
  setThreeStops,
} from '../store/filters/filters.actions';
import { selectFilters } from '../store/filters/filters.selector';

import classes from './filters.module.scss';
const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  return (
    <ul className={classes.filter}>
      <div className={classes['filter__header']}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <li className={classes['filter__item']}>
        <label>
          <input type="checkbox" checked={filters.allTickets} onChange={() => dispatch(setAllFilters())}></input>
          <span>Все билеты</span>
        </label>
      </li>
      <li className={classes['filter__item']}>
        <label>
          <input type="checkbox" checked={filters.directFlight} onChange={() => dispatch(setDirectFilter())}></input>
          <span>Без пересадок</span>
        </label>
      </li>
      <li className={classes['filter__item']}>
        <label>
          <input type="checkbox" checked={filters.oneStop} onChange={() => dispatch(setOneStop())}></input>
          <span>1 пересадка</span>
        </label>
      </li>
      <li className={classes['filter__item']}>
        <label>
          <input type="checkbox" checked={filters.twoStops} onChange={() => dispatch(setTwoStops())}></input>
          <span>2 пересадки</span>
        </label>
      </li>
      <li className={classes['filter__item']}>
        <label>
          <input type="checkbox" checked={filters.threeStops} onChange={() => dispatch(setThreeStops())}></input>
          <span>3 пересадки</span>
        </label>
      </li>
    </ul>
  );
};

export default Filters;

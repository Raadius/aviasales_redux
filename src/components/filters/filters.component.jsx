import classes from './filters.module.scss';

const Filters = () => {
  return (
    <ul className={classes.filter}>
      <div className={classes['filter__header']}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <li className={classes['filter__item']}>
        <label>
          <input type="checkbox"></input>
          <span>1 пересадка</span>
        </label>
      </li>
    </ul>
  );
};

export default Filters;

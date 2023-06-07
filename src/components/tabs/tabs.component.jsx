import classes from './tabs.module.scss';

const Tabs = () => {
  return (
    <div>
      <button className={classes.button}>
        <span>ОПТИМАЛЬНЫЙ</span>
      </button>
      <button className={classes.button}>
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </button>
      <button className={classes.button}>
        <span>САМЫЙ БЫСТРЫЙ</span>
      </button>
    </div>
  );
};

export default Tabs;

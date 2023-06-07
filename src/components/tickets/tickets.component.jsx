import classes from './tickets.module.scss';

const Tickets = () => {
  return (
    <div className={classes.tickets}>
      <div className={classes['tickets__header']}>
        <div className={classes['tickets__header__price']}>13 400 ₽</div>
        <img src="../../images/Logo.svg" alt="logo"></img>
      </div>
      <div className={classes['tickets__body']}>
        <div className={classes['tickets__body__headers']}>
          <div style={{ width: '30%' }}>MSK - HSK</div>
          <div style={{ width: '30%' }}>В ПУТИ</div>
          <div style={{ width: '30%' }}>2 пересадки</div>
        </div>
        <div className={classes['tickets__body__info']}>
          <div style={{ width: '30%' }}>22:12 - 12:18</div>
          <div style={{ width: '30%' }}>20ч 10мин</div>
          <div style={{ width: '30%' }}>DOX, DHB</div>
        </div>
        <div className={classes['tickets__body__headers']}></div>
        <div className="tickets__body__info"></div>
      </div>
    </div>
  );
};

export default Tickets;

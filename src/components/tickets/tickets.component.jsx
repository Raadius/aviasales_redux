/* eslint-disable no-unused-vars */
import classes from './tickets.module.scss';

const Tickets = ({ price, carrier, segments }) => {
  const segmentOne = segments[0];
  const segmentTwo = segments[1];
  const priceOfTicket = price.toString();

  const amountOfTransfers = (segment) => {
    if (segment.stops.length > 1) {
      return `${segment.stops.length} ПЕРЕСАДКИ`;
    } else if (segment.stops.length === 1) {
      return `${segment.stops.length} ПЕРЕСАДКА`;
    } else if (segment.stops.length < 1) {
      return 'ПРЯМОЙ РЕЙС';
    }
  };

  const calculateMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  };

  const calculateDate = (dateValue, minutes) => {
    const date = new Date(dateValue);
    const start = new Date(date.getTime());
    const end = new Date(date.getTime() + minutes * 60000);
    return `${start.toISOString().slice(11, 16)} - ${end.toISOString().slice(11, 16)}`;
  };

  const setPrice =
    priceOfTicket.length === 6
      ? `${priceOfTicket.slice(0, 3)} ${priceOfTicket.slice(3, 6)}`
      : `${priceOfTicket.slice(0, 2)} ${priceOfTicket.slice(2, 5)}`;

  console.log(setPrice);

  return (
    <div className={classes.tickets}>
      <div className={classes['tickets__header']}>
        <div className={classes['tickets__header__price']}>{setPrice} ₽</div>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="{carrier}"></img>
      </div>
      <div className={classes['tickets__body']}>
        <div className={classes['tickets__body__headers']}>
          <div style={{ width: '30%' }}>
            {segmentOne.origin} - {segmentOne.destination}
          </div>
          <div style={{ width: '30%' }}>В ПУТИ</div>
          <div>{amountOfTransfers(segmentOne)}</div>
        </div>
        <div className={classes['tickets__body__info']}>
          <div style={{ width: '28%' }}>{calculateDate(segmentOne.date, segmentOne.duration)}</div>
          <div style={{ width: '24%' }}>{calculateMinutesToHours(segmentOne.duration)}</div>
          <div style={{ width: '24%', textAlign: 'right' }}>{segmentOne.stops.join(', ')}</div>
        </div>
        <div className={classes['tickets__body__headers']}>
          <div style={{ width: '30%' }}>
            {segmentTwo.origin} - {segmentTwo.destination}
          </div>
          <div style={{ width: '30%' }}>В ПУТИ</div>
          <div>{amountOfTransfers(segmentTwo)}</div>
        </div>
        <div className={classes['tickets__body__info']}>
          <div style={{ width: '28%' }}>{calculateDate(segmentTwo.date, segmentTwo.duration)}</div>
          <div style={{ width: '24%' }}>{calculateMinutesToHours(segmentTwo.duration)}</div>
          <div style={{ width: '24%', textAlign: 'right' }}>{segmentTwo.stops.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

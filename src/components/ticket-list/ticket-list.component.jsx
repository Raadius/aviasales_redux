/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BarLoader from 'react-spinners/BarLoader';

import { selectedTabs } from '../../store/tabs/tabs.selector';
import { fetchTicketsAsync } from '../../store/tickets/tickets.action';
import { selectTickets, selectError, selectIsLoading } from '../../store/tickets/tickets.selector';
import { selectFilters } from '../../store/filters/filters.selector';
import { selectQuantity } from '../../store/button/button.selector';
import { setButtonAction } from '../../store/button/button.actions';
import Tickets from '../tickets/tickets.component';

import classes from './ticket-list.module.scss';
const TicketList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTicketsAsync());
  }, [dispatch]);

  const ticketList = useSelector(selectTickets);
  const errorStatus = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);
  const tabs = useSelector(selectedTabs);
  const slicer = useSelector(selectQuantity);

  const { cheapSort, fastSort, optimalSort } = tabs;
  const { directFlight, oneStop, twoStops, threeStops } = filters;
  const { quantity } = slicer;

  const filteredTicketsByTabs = (ticketsList) => {
    let sortableByTabs = [];

    for (const ticket in ticketsList) {
      sortableByTabs.push(ticketsList[ticket]);
    }

    if (cheapSort) {
      return sortableByTabs.sort((a, b) => a.price - b.price);
    } else if (fastSort) {
      return sortableByTabs.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      );
    } else if (optimalSort) {
      return sortableByTabs.sort(
        (a, b) =>
          a.segments[0].stops.length +
          a.segments[1].stops.length +
          (a.segments[0].duration + a.segments[1].duration) -
          (b.segments[0].stops.length + b.segments[1].stops.length) +
          (b.segments[0].duration + b.segments[1].duration)
      );
    } else {
      return sortableByTabs;
    }
  };

  const filteredTicketsByFilter = (ticketsList) => {
    const filteredByTabs = filteredTicketsByTabs(ticketsList);
    console.log(filteredByTabs);

    const noTransition = directFlight ? 0 : null;
    const oneTransition = oneStop ? 1 : null;
    const twoTransitions = twoStops ? 2 : null;
    const threeTransitions = threeStops ? 3 : null;

    const filterArr = [noTransition, oneTransition, twoTransitions, threeTransitions].filter((x) => x !== null);
    const newArr = filteredByTabs.filter(
      (ticket) =>
        filterArr.includes(ticket.segments[0].stops.length) && filterArr.includes(ticket.segments[1].stops.length)
    );

    return newArr;
  };

  const ticketsToShow = filteredTicketsByFilter(ticketList);
  const showLoadingBar = isLoading ? <BarLoader className={classes.loader} color="#2196F3" width="500px" /> : null;
  const showButtonOrNullResult =
    ticketsToShow.length === 0 && !isLoading ? (
      <div className={classes.noTickets}>
        <p>No tickets found matching this filters</p>
      </div>
    ) : (
      <button className={classes.button} onClick={() => dispatch(setButtonAction(5))}>
        Показать еще 5 билетов
      </button>
    );

  return (
    <>
      <div>
        {showLoadingBar}
        {ticketsToShow.slice(0, quantity).map((ticket) => {
          return (
            <Tickets
              key={Math.random() * 10000000}
              price={ticket.price}
              carrier={ticket.carrier}
              segments={ticket.segments}
            />
          );
        })}
      </div>
      {showButtonOrNullResult}
    </>
  );
};

export default TicketList;

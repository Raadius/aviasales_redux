import Filters from './components/filters/filters.component';
import TicketList from './components/ticket-list/ticket-list.component';
import Tabs from './components/tabs/tabs.component';
// import ShowMoreButton from './components/show-more-button/show-more-button.component';
import classes from './App.module.scss';
import logo from './assets/Logo.svg';

function App() {
  return (
    <div className={classes.app}>
      <img src={logo} alt="logo" className={classes.image} />
      <div className={classes['app-content']}>
        <Filters />
        <div className={classes.tickets}>
          <Tabs />
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default App;

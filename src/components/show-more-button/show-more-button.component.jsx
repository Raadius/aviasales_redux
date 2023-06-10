import { useDispatch, useSelector } from 'react-redux';

import { selectQuantity } from '../store/button/button.selector';
import { setButtonAction } from '../store/button/button.actions';

import classes from './show-more-button.module.scss';
const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantity);
  console.log(quantity);
  return (
    <button className={classes.button} onClick={() => dispatch(setButtonAction(5))}>
      Показать еще 5 билетов
    </button>
  );
};

export default ShowMoreButton;

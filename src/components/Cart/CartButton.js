import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleCart } from '../../store/reducer/cartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button className={classes.button} onClick={()=>dispatch(toggleCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

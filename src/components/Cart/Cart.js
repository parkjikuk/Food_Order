import { useContext , useState} from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css'
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `${cartCtx.totalAmount}원`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmit(true);
    await fetch('https://react-http-9f2dc-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items
      })
    });
    setIsSubmit(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartItems = (
  <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem 
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}
  </ul>
  );

  const modalActions = <div className={classes.actions}>
  <button className={classes['button--alt']} onClick={props.onClose}>닫기</button>
  {hasItems && <button className={classes.button} onClick={orderHandler}>주문</button>}
</div>

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>총 가격</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModal = <p>주문중입니다.</p>;

  const didSubmitModal = (
  <>
    <p>주문 완료되었습니다.</p>
    <div className={classes.actions}>
    <button className={classes.button} onClick={props.onClose}>닫기</button>
    </div>
  </>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmit && !didSubmit && cartModalContent}
      {isSubmit && isSubmittingModal}
      {!isSubmit &&didSubmit && didSubmitModal}
    </Modal>
  );
};

export default Cart;
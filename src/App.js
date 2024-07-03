import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
// import { showNotification } from "./store/reducer/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true; // defining it outside component so that it does not get re-initialized when component re-renders, only gets initialized once when the application starts

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    // const sendCartData = async () => {
    // dispatch(
    //   showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );

    // const response = await fetch(
    //   "https://expense-tracker-new-9d398-default-rtdb.firebaseio.com/redux-cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Sending cart data failed.");
    // }

    // dispatch(
    //   showNotification({
    //     status: "success",
    //     title: "Success!",
    //     message: "Sent cart data successfully!",
    //   })
    // );
    // };

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

    // sendCartData().catch((error) => { // executing sendCartData here with sendCartData() so if isInitial is true, we are not sending the cart data
    // dispatch(
    //   showNotification({
    //     status: "error",
    //     title: "Error!",
    //     message: "Sending cart data failed!",
    //   })
    // );
    // });
  }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

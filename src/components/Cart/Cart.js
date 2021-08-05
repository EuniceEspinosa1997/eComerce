import React, { useContext } from "react";
import { UserContext } from "../../Context/Context";

export const Cart = () => {
  const value = useContext(UserContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
  };
  console.log(menu);

  const show1 = menu ? "cart show" : "carts";
  const show2 = menu ? "cart show" : "cart";

  const deleteItems = id => {
    if (window.confirm("Do you want to delete this item?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.quantity = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };
  const subtracProduct = id => {
    cart.forEach(item => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
  };

  const addingProduct = id => {
    cart.forEach(item => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="close-cart" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Your cart</h2>
        <div className="cart-content">
          {cart.length === 0 ? (
            <h2 style={{ testAlign: "center", fontSize: "3rem" }}>
              {" "}
              Empty cart
            </h2>
          ) : (
            <>
              {cart.map(product => (
                <div className="cart-item" key={product.id + "01"}>
                  <img src={product.image} alt="product-view"></img>
                  <div>
                    <h3>{product.title}</h3>
                    <p className="price">${product.price}</p>
                  </div>
                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => {
                        addingProduct(product.id);
                      }}
                    />
                    <p className="quantity">{product.quantity}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => {
                        subtracProduct(product.id);
                      }}
                    />
                  </div>
                  <div
                    className="remove-item"
                    onClick={() => {
                      deleteItems(product.id);
                    }}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="cart-footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
};

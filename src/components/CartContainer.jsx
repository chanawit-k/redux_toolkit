import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((state) => state.cart)
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} {...cartItem} />
          })}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer

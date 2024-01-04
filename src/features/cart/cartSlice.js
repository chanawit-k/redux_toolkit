import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
    increaseItem: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.amount++
        }
      })
    },
    decreaseItem: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.amount - 1
          if (newAmount < 0) {
            newAmount = 0
          }
          item.amount = newAmount
        }
      })
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

console.log(cartSlice)
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
} = cartSlice.actions
export default cartSlice.reducer

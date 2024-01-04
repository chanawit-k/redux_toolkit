import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

const url = 'https://course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(error))
})

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false
      state.cartItems = action.payload
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false
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

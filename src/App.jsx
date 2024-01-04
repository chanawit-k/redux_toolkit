import { useSelector, useDispatch } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { useEffect } from 'react'
import { calculateTotal } from './features/cart/cartSlice'

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </main>
  )
}
export default App

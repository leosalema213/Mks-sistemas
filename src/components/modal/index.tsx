import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"

import { RootReducer } from '@/store'
import { close } from "@/store/reducers/carrinho";
import { getTotalPrice, parseToBrl } from '@/utils'

import CardsModal from '../listCardsModal'
import * as S from './styles'


export default function Modal() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(close())
  }
  return (
    isOpen &&
    (<motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }}>
      <S.Modal>
        <S.HeaderModal>
          <h2>Carrinho <br />de compras</h2>

          <button onClick={closeModal}>
            <img src="/assets/Close_cart.png" alt="X" />
          </button>
        </S.HeaderModal>

        <S.ContentModal>
          <CardsModal />
        </S.ContentModal>

        <S.FooterModal>
          <div className="total">
            <p>Total: </p>
            <p>{parseToBrl(getTotalPrice(items))}{' '}</p>
          </div>

          <button>
            Finalizar compra
          </button>
        </S.FooterModal>
      </S.Modal>
    </motion.div>
    )
  )
}
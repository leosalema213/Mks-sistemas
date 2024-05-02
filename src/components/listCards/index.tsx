import { useDispatch } from "react-redux";
import { motion } from "framer-motion"

import { add,open } from "@/store/reducers/carrinho";
import { Product } from "@/interface/Produtos";
import { useProductData } from "@/service/produtosService";

import Card from "../card";
import SkeletonCard from "../skeletonCard";

export default function ListCards() {
  const dispatch = useDispatch()
  const { data,isLoading } = useProductData();

  const addToCart = (p: Product) => {
    dispatch(add(p))
    dispatch(open())
  }

  return (
    <>
      {isLoading ? (
        <>
          {[...new Array(8)].map((pr, index) => (
              <SkeletonCard key={index} />
            ))}
        </>
      ):(
        <>
            {data?.map((p) => (
              <motion.div className=''
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                key={p.id}
              >
                <Card
                  buybutton={() => addToCart(p)}
                  image={p.photo}
                  description={p.description}
                  price={Math.floor(p.price)}
                  title={p.name}
                />
              </motion.div>
            ))}
          </>
        )}
    </>
  )
}
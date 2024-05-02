import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"

import { api } from "@/service/produtosService";
import { add,open } from "@/store/reducers/carrinho";
import { Product, Products } from "@/interface/Produtos";

import Card from "../card";
import SkeletonCard from "../skeletonCard";

const getProducts = async () => {
  let adress = '/products?page=1&rows=8&sortBy=id&orderBy=DESC'

  const response = await api.get<Products>(adress)
  return response.data.products;
}

export default function Cards() {
  const dispatch = useDispatch()

  const addToCart = (p: Product) => {
    dispatch(add(p))
    dispatch(open())
  }

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

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
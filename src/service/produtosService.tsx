import { Products } from "@/interface/Produtos";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
    baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1"
})

const fetchData = async () => {
    let adress = '/products?page=1&rows=8&sortBy=id&orderBy=DESC'

    const response = await api.get<Products>(adress)
    return response.data.products;
}

export function useProductData() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchData
    })

    return { data, isLoading }
}



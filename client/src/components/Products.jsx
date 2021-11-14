import axios from "axios"
import { useState, useEffect } from "react"

import styled from "styled-components"

import { popularProducts } from "../data"

import Product from "./Product"


const Container = styled.div `
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
`


const Products = ( { cat, filters, sort}) => {
          const [products, setProducts] = useState([])
          const [filteredProducts,  setFilteredProducts] = useState([])


          // useEffect(() => {fxn}, [depend])
          useEffect(() => {
                    const getProducts = async () =>{
                              try {
                                        const res = await axios.get(
                                                  cat ? `http://localhost:7000/api/products?category=${cat}`
                                                  : "http://localhost:7000/api/products"
                                        )

                                        setProducts(res.data)
                                        
                              } catch (err) {
                                        console.log(err)
                              }

                    }

                    getProducts()
          }, [cat])

          console.log(products)



          return (
                    <Container>
                              {
                                        popularProducts.map(item => (
                                                  <Product 
                                                            item={item}
                                                            key = {item.id}
                                                  />
                                        ))
                              }
                    </Container>
          )
}


export default Products
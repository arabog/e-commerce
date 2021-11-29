import styled from "styled-components"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"

import { useLocation } from "react-router"
import { useState } from "react"

import { mobile } from "../responsive"



const Container = styled.div `

`

const Title = styled.h1 `
          margin: 20px;
`

const FilterContainer = styled.div `
          display: flex;
          justify-content: space-between;

          ${mobile(
                    {
                              flexDirection: "column",
                    }
          )}
`

const Filter = styled.div `
          margin: 20px;

          ${mobile(
                    {
                              // width: "0px 10px",
                              width: "40%",
                              display: "flex",
                              flexDirection: "column",
                    }
          )}
`

const FilterText = styled.span `
          font-size: 20px;
          font-weight: 600;
          margin-right: 20px;

          ${mobile(
                    {
                              width: "100%",
                              marginBottom: "10px"
                    }
          )}
`

const Horizontal = styled.div `
          ${mobile(
                    {
                              display: "flex",

                              marginLeft: "20px",
                    }
          )}
`

const Select =styled.select `
          padding: 10px;
          margin-right: 20px;
`

const Option = styled.option `

`


const ProductList = () => {
          const location = useLocation()
          const cat = location.pathname.split("/")[2]

          const [filters, setFilters] = useState({})
          const [ sort, setSort] = useState("newest")


          const handleFilters = (e) => {
                    const value = e.target.value;

                    setFilters(
                              {
                                        ...filters,
          
                                        [e.target.name]: value
                              }
                    )
          }

          
          return (
                    <Container>
                              <Navbar />

                              <Announcement />

                              <Title> { cat } </Title>

                              <FilterContainer>
                                        <Filter>
                                                  <FilterText> Filter Products </FilterText>

                                                  <Horizontal >
                                                            <Select name="color" onChange={handleFilters}>
                                                                      <Option disabled >Color</Option>

                                                                      <Option>white</Option>

                                                                      <Option>black</Option>

                                                                      <Option>red</Option>

                                                                      <Option>blue</Option>

                                                                      <Option>yellow</Option>

                                                                      <Option>green</Option>
                                                            </Select>

                                                            <Select name="size" onChange={handleFilters} >
                                                                      <Option disabled >Size</Option>
                                                                      {/* <Option disabled selected>Size</Option> */}

                                                                      <Option>XS</Option>

                                                                      <Option>S</Option>

                                                                      <Option>M</Option>

                                                                      <Option>L</Option>

                                                                      <Option>XL</Option>
                                                            </Select>
                                                  </Horizontal>
                                        </Filter>

                                        <Filter>
                                                  <FilterText> Sort Products: </FilterText>

                                                  <Select onChange={e => setSort(e.target.value)} >
                                                            <Option value="newest"> Newest </Option>

                                                            <Option value="asc"> Price(asc) </Option>

                                                            <Option value="desc"> Price (desc) </Option>
                                                  </Select>
                                        </Filter>
                              </FilterContainer>

                              <Products cat={cat} filters={filters} sort={sort} />

                              <Newsletter />

                    </Container>
          )
}


export default ProductList

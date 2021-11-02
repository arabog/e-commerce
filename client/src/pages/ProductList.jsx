import styled from "styled-components"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"



const Container = styled.div `

`

const Title = styled.h1 `
          margin: 20px;
`

const FilterContainer = styled.div `
          display: flex;
          justify-content: space-between;
`

const Filter = styled.div `
          margin: 20px;
`

const FilterText = styled.span `
          font-size: 20px;
          font-weight: 600;
          margin-right: 20px;
`

const Select =styled.select `
          padding: 10px;
          margin-right: 20px;
`

const Option = styled.option `

`


const ProductList = () => {

          
          return (
                    <Container>
                              <Navbar />

                              <Announcement />

                              <Title> Categories </Title>

                              <FilterContainer>
                                        <Filter>
                                                  <FilterText> Filter Products </FilterText>

                                                  <Select name="color">
                                                            <Option disabled>Color</Option>

                                                            <Option>White</Option>

                                                            <Option>Black</Option>

                                                            <Option>Red</Option>

                                                            <Option>Blue</Option>

                                                            <Option>Yellow</Option>

                                                            <Option>Green</Option>
                                                  </Select>

                                                  <Select name="size">
                                                            <Option disabled>Size</Option>

                                                            <Option>XS</Option>

                                                            <Option>S</Option>

                                                            <Option>M</Option>

                                                            <Option>L</Option>

                                                            <Option>XL</Option>
                                                  </Select>
                                        </Filter>

                                        <Filter>
                                                  <FilterText> Sort Products: </FilterText>

                                                  <Select>
                                                            <Option value="newest"> Newest </Option>

                                                            <Option value="asc"> Price(asc) </Option>

                                                            <Option value="desc"> Price (desc) </Option>
                                                  </Select>
                                        </Filter>
                              </FilterContainer>

                              <Products />

                              <Newsletter />

                    </Container>
          )
}


export default ProductList

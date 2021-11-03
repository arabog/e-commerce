import styled from "styled-components"

import { Add, Remove } from "@material-ui/icons"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Container = styled.div `
          
`

const Wrapper= styled.div `
          padding: 50px;
          display: flex;
`

const ImgContainer = styled.div `
          flex: 1;
`

const Image = styled.img `
          width: 100%;
          height: 90vh;
          object-fit: cover;
`

const InfoContainer = styled.div `
          flex: 1;
          padding: 0 50px;
`

const Title = styled.h1 `
          font-weight: 200;
`

const Desc = styled.p `
          margin: 20px 0;
`

const Price = styled.span `
          font-weight: 100;
          font-size: 40px;
`

const FilterContainer = styled.div `
          width: 50%;

          margin: 30px 0;

          display: flex;
          justify-content: space-between;
`

const Filter = styled.div `
          display: flex;
          align-items: center;
`

const FilterTitle = styled.span `
          font-size: 20px;
          font-weight: 200;
`

const FilterColor = styled.div `
          width: 20px;
          height: 20px;

          border-radius: 50%;
          background: ${props => props.color}

          margin: 0 50px;
          cursor: pointer;
`

const FilterSize = styled.select `
          margin-left: 10px;
          padding: 5px;
`

const FilterSizeOption = styled.div `

`

const AddContainer = styled.div `
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-between;
`

const AmountContainer = styled.div `
          display: flex;
          align-item: center;
          font-weight: 700;
`

const Amount = styled.span `
          width: 30px;
          height: 30px;

          border-radius: 10px;
          border: 1px solid teal;

          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0 5px;
`

const Button = styled.button `
          padding: 15px;
          border: 2px solid teal;
          background: white;
          cursor: pointer;

          font-weight: 500;

          &:hover {
                    background: #f8f4f4;
          }
`




const Product = () => {

          
          return (
                    <Container>
                              <Navbar />

                              <Announcement />

                              <Wrapper>
                                        <ImgContainer>
                                                  <Image src="https://i.ibb.co/SX4NVWN/9.jpg"  />
                                        </ImgContainer>

                                        <InfoContainer>
                                                  <Title> Title </Title>

                                                  <Desc> Product Desc</Desc>

                                                  <Price> $200</Price>

                                                  <FilterContainer>
                                                            <Filter>
                                                                      <FilterTitle> Color </FilterTitle>

                                                                      <FilterColor color="red" />
                                                            </Filter>

                                                            <Filter>
                                                                      <FilterTitle> Size </FilterTitle>

                                                                      <FilterSize>
                                                                                <FilterSizeOption>XL</FilterSizeOption>
                                                                      </FilterSize>
                                                            </Filter>
                                                  </FilterContainer>

                                                  <AddContainer>
                                                            <AmountContainer>
                                                                      <Remove />

                                                                      <Amount> 4 </Amount>

                                                                      <Add />
                                                            </AmountContainer>

                                                            <Button> ADD TO CART </Button>
                                                  </AddContainer>
                                        </InfoContainer>
                              </Wrapper>

                              <Newsletter />

                              <Footer />
                    </Container>
          )
}


export default Product

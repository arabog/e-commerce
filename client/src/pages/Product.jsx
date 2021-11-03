import styled from "styled-components"

import { Add, Remove } from "@material-ui/icons"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Container = styled.div ``

const Wrapper= styled.div ``

const ImgContainer = styled.div ``

const Image = styled.div ``

const InfoContainer = styled.div ``

const Title = styled.h1 ``

const Desc = styled.div ``

const Price = styled.div ``

const FilterContainer = styled.div ``

const Filter = styled.div ``

const FilterTitle = styled.h1 ``

const FilterColor = styled.h1 ``

const FilterSize = styled.div ``

const FilterSizeOption = styled.div ``

const AddContainer = styled.div ``

const AmountContainer = styled.div ``

const Amount = styled.h1 ``

const Button = styled.button ``




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

                                                  <Price> $200.00</Price>

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

                                                                      <Amount> Quantity </Amount>

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

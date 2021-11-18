import style from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Container = style.div `
          height: 60px;
`

const Wrapper = style.div `
          padding: 10px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;
`

const Left = style.div `
          flex: 1;

          display: flex;
          align-items: center;
`

const Language = style.span`
          font-size: 14px;

          cursor: pointer;
`

const SearchContainer = style.div `
          border: 0.5px solid lightgray;

          display: flex;
          align-items: center;
          margin-left: 25px;
          padding: 5px;
`

const Input = style.input `
          border: none;
          outline: none;
`

const Center = style.div `
          flex: 1;

          text-align: center;
`

const Logo = style.h1`
          font-weight: bold;
`


const Right = style.div `
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
`

const MenuItem = style.div `
          font-size: 14px;
          cursor: pointer;
          margin-left: 25px;
`


const Navbar = () => {
          const quantity = useSelector(state => state.cart.quantity)


          return (
                    <Container>
                              <Wrapper>
                                        <Left>
                                                  <Language> EN </Language>

                                                  <SearchContainer>
                                                            <Input placeholder="Search" />

                                                            <Search
                                                                      style = {
                                                                                {
                                                                                          color: "gray",
                                                                                          fontSize: 16
                                                                                }
                                                                      }
                                                            />
                                                  </SearchContainer>
                                        </Left>


                                        <Center>
                                                  <Logo>HUGB</Logo>
                                        </Center>


                                        <Right>
                                                  <MenuItem>REGISTER</MenuItem>

                                                  <MenuItem>SIGN IN</MenuItem>

                                                  <Link to="/cart">
                                                            <MenuItem>
                                                                      <Badge badgeContent = {quantity} color = "primary" >
                                                                                <ShoppingCartOutlined />
                                                                      </Badge>
                                                            </MenuItem>
                                                  </Link>
                                        </Right>

                              </Wrapper>
                    </Container>
          )
}


export default Navbar

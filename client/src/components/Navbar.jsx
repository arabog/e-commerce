import style from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { mobile } from "../responsive"


const Container = style.div `
          height: 60px;

          ${mobile(
                    {
                              height: "50px"
                    }
          )}
`

const Wrapper = style.div `
          padding: 10px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          ${mobile(
                    {
                              padding: "10px 0"
                    }
          )}
`

const Left = style.div `
          flex: 1;

          display: flex;
          align-items: center;
`

const Language = style.span`
          font-size: 14px;

          cursor: pointer;

          ${mobile(
                    {
                              display: "none"
                    }
          )}
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

          ${mobile(
                    {
                              width: "50px"
                    }
          )}
`

const Center = style.div `
          flex: 1;

          text-align: center;
`

const Logo = style.h1`
          font-weight: bold;

          ${mobile(
                    {
                              fontSize: "24px"
                    }
          )}
`


const Right = style.div `
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          ${mobile(
                    {
                              flex: 2,
                              justifyContent: "center"
                    }
          )}
`

const MenuItem = style.div `
          font-size: 14px;
          cursor: pointer;
          margin-left: 25px;
          color: teal;

          ${mobile(
                    {
                              marginLeft: "10px"
                    }
          )}
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
                                                  <Logo>.HUGB.</Logo>
                                        </Center>


                                        <Right>
                                                  <Link to="/register"  style={{ textDecoration: "none"}}>
                                                            <MenuItem>REGISTER</MenuItem>
                                                  
                                                  </Link>

                                                  <Link to="/login" style={{ textDecoration: "none"}}>
                                                            <MenuItem>LOGIN</MenuItem>
                                                  </Link>
                                                  
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

import styled from "styled-components"

import { Link } from "react-router-dom"


const Container = styled.div `
          flex: 1;
          height: 70vh;

          margin: 3px 10px;

          position: relative;
`

const Image = styled.img `
          width: 100%;
          height: 100%;

          object-fit: cover;
`

const Info = styled.div `
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
`

const Title = styled.h1 `
          color: white;
          margin-bottom: 20px;
`

const Button = styled.button `
          border: none;
          padding: 10px;
          background: white;
          color: gray;
          font-weight: 600;

          cursor: pointer;
`


const CategoryItem = ( { item } ) => {


          return (
                    <Container>
                              <Image src={item.img} />

                              <Link to={`/products/${item.cat}`}>
                                        <Info>
                                                  <Title> {item.title} </Title>

                                                  <Button> SHOP NOW </Button>
                                        </Info>
                              </Link>
                              
                    </Container>
          )
}


export default CategoryItem

import styled from "styled-components"


const Container = styled.div `

`

const Wrapper = styled.div `

`

const Title = styled.h1 `

`

const Form = styled.form `

`

const Input = styled.input `

`

const Button = styled.button `

`

const Link = styled.a `

`

const Error = styled.span `

`


const Login = () => {

          
          return (
                    <Container>
                              <Wrapper>
                                        <Title> SIGN IN </Title>

                                        <Form>
                                                  <Input 
                                                            placeholder="username" 
                                                  />

                                                  <Input 
                                                            placeholder="password" 
                                                  />

                                                  <Button> CREATE </Button>

                                                  {
                                                            // error && 
                                                            <Error>Something went wrong....</Error> 
                                                  }

                                                  <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                              
                                                  <Link>CREATE A NEW ACCOUNT</Link>
                                        </Form>
                              </Wrapper>
                    </Container>
          )
}

export default Login

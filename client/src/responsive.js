import { css } from "styled-components";

export const minimobile = (props) => {

          return css`

                    @media only screen and (min-width: 350px) {
                              ${props}
                    }
          `
          ;

};

export const mobile = (props) => {

          return css`

                    @media only screen and (min-width: 380px) {
                              ${props}
                    }
          `
          ;

};

export const tablet = (props) => {

          return css`

                    @media only screen and (min-width: 768px) {
                              ${props}
                    }
          `
          ;

};
import styled from 'styled-components'

export const ModalWrapper = styled.div`
z-index: 100;
background: white;
position: relative;
margin: 1.75rem auto;
border-radius: 3px;
max-width: 500px;
padding: 2rem;

@media only screen and (min-width: 376px) and (max-width: 768px) {
    width: ${props => props.width[0]};
    margin: ${props => props.margin[0]};
    padding: ${props => props.padding[0]};
    background: yellow;
  }
@media only screen and (max-width: 375px) {
    width: ${props => props.width[1]};
    margin: ${props => props.margin[1]};
    padding: ${props => props.padding[1]};
    background: red;
  }
`;
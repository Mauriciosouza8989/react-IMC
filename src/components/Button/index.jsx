/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./style";
export function Button({typeButton, onclick, title }){
    return(
        <Container type={typeButton} onClick={onclick}>
            {title}
        </Container>
    )
}
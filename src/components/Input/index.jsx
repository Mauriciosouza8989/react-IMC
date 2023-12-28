/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Input({ label, placeholder, onchange}){
    return(
        <Container>
            <label required className="label" htmlFor="peso">{label}</label>
            <input onChange={onchange} required className="input" id="peso" type="number" placeholder={placeholder} />
        </Container>
    )
}
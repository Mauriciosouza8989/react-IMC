import { useState } from "react";
import { Container } from "./style";
import { Input } from "../Input";
import { Button } from "../Button";
export function Form(){
    const [Weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [imc, setImc] = useState(0);
    function calculateImc(){
        const heightInMeters = height / 100;
        const calc = Weight / (heightInMeters * heightInMeters)
        setImc(calc);
    }
    function message(){
        if(imc < 25){
            return "O seu peso está normal.";
        }
        else if(imc <30){
            return "Sobrepeso";
        }
        else if(imc < 35){
            return "Obesidade grau I";
        }
        else if(imc < 40){
            return "Obesidade grau II";
        }
        else {
            return "Obesidade grau III";
        }
    }
    return(
        <Container>
            <h1 className="title">Calcule seu IMC</h1>
            <Input onchange={event => setWeight(event.target.value)} label="Peso(kg)" placeholder="ex:60"/>
            <Input onchange={event => setHeight(event.target.value)} label="Altura(cm)" placeholder="ex:178"/>
            <Button onclick={calculateImc} typeButton="button" title="Calcular IMC"/>
            {imc > 0 && 
                <>
                    <h3>Resultado: {imc.toFixed(2)}</h3>
                    <p>{message()}</p>
                </>
            }
        </Container>
    )
}
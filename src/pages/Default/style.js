import styled from "styled-components";

export const Container = styled.main `
    max-width: 1024px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

    img{
        max-width: 100%;
    }

    @media (max-width: 920px) {
        max-width: 90%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;

        img{
            max-width: 400px;
        }
        
    }
    @media (max-width: 500px) {
        img{
            max-width: 90%;
        }
        
    }
`;

import homeBackground from '../Imagens/Brayan.jpg';
import PrimeiraCapaInicio from '../Imagens/Capa2.jpg';
import SegundaCapaInicio from '../Imagens/Capa1.jpg';
import styled from "styled-components";
import './index.css'


const Home = () => {
    return (
        <>
            <body>
                <HomeImg src={homeBackground} />
                <h3 class="carousel-caption"> Amantes de Velozes & Furiosos </h3>

                <br /><br /><br /><br /><br /><br />

                <div class="container">
                    <div class="col-6" id="texto">
                        <div id='centro'>
                            <h1> Entre nesse mundo de carros </h1> <br />
                            <h2> A trilogia conta com 9 filmes...</h2>
                        </div>
                    </div>
                    <div class="col-6">
                        <Raiden2 id="imagem" src={SegundaCapaInicio} />
                    </div>
                </div>

                <br /><br /><br /><br />

                <div class="container">
                    <div class="col-6">
                        <Raiden1 id="imagem" src={PrimeiraCapaInicio} />
                    </div>
                    <div class="col-6" id="texto">
                        <div id='centro'>
                            <div id="centroteste">
                                <h1> Disponível agora, com todos os filmes na: "Globo Play" </h1> <br />
                                <h2> <b> [VELOZES & FURIOSOS ] </b> (2001) <br />
                                    <b> [+VELOZES +FURIOSOS] </b> (2003) <br />
                                    <b> [VELOZES & FURIOSOS] </b> DESAFIO EM TÓQUIO (2006) <br/>
                                    <b> [VELOZES & FURIOSOS 4] </b> (2009) <br />
                                    <b> [VELOZES & FURIOSOS 5] </b> OPERAÇÃO RIO (2011)
                                    <b> [VELOZES & FURIOSOS 6] </b> (2013) <br/> 
                                    <b> [VELOZES & FURIOSOS 7] </b> (2015) <br/>
                                    <b> [VELOZES & FURIOSOS 8] </b> (2017) <br/>
                                    <b> [VELOZES & FURIOSOS 9] </b> (2021) <br/></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />

                <h4> Esse site foi um teste :D (GitHub: MoraesJoseThiago)</h4>
                
            </body>
        </>
    );
}

export default Home;

const HomeImg = styled.img`
    height: 100%;
    width: 100%;
`;

const Raiden1 = styled.img`
    width: 110%;
`;

const Raiden2 = styled.img`
    width: 110%;
`;
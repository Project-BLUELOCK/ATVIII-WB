/* eslint-disable react/jsx-pascal-case */
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';

function VisualizarServico() {
    return(
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
            <h1>Visualizar Serviço: "Manicure"</h1>
                <Button variant="outline-dark" href='/servicos'>Voltar</Button>
                <Card
                bg="dark"
                text="white"
                style={{ width: '18rem' }}
                className="mb-2"
                >  
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Manicure</Card.Title>
                        <Card.Text>
                            Preço: R$30
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
};

export default VisualizarServico;
/* eslint-disable react/jsx-pascal-case */
import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

function Servicos() {
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1>Serviços</h1>
                <div className="tables">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Serviço</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Manicure</td>
                                <td>R$30</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754" /></a>
                                        <a href="/servicos/1"><Eye size={35} color="#0DCAF0" /></a>
                                        <a href="##"><Eraser size={35} color="#DC3545" /></a>
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='/servicos/1'>Visualizar</Button>{' '}

                                        <Button variant="outline-success" href='/editar_servico/1'>Editar</Button>{' '}

                                        <Button variant="outline-danger">Remover</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Pedicure</td>
                                <td>R$30</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754" /></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0" /></a>
                                        <a href="##"><Eraser size={35} color="#DC3545" /></a>
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='/servicos/1'>Visualizar</Button>{' '}

                                        <Button variant="outline-success" href='/editar_servico/1'>Editar</Button>{' '}

                                        <Button variant="outline-danger">Remover</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Hidratação</td>
                                <td>R$55</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754" /></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0" /></a>
                                        <a href="##"><Eraser size={35} color="#DC3545" /></a>
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='/servicos/1'>Visualizar</Button>{' '}

                                        <Button variant="outline-success" href='/editar_servico/1'>Editar</Button>{' '}

                                        <Button variant="outline-danger">Remover</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Servicos;
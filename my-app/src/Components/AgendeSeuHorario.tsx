import React from 'react';
import FotoCadeira from "../assets/cadeira.png"

function AgendeSeuHorario() {
    return <div>
        <div className='agendeseuhorariobox' id='agendeseuhorariobox'>
            <div className='agendeLeft'>
                <h3>AGENDE SEU HORARIO</h3>
                <p>Clique no ícone da cadeira ao lado <br />
                para se cadastrar em nossa agenda <br />de atendimentos. <br />
                É simples e prático!</p>
            </div>
            <div className='agendeRight'>
                <a href="https://andradebarbeariadelivery.vercel.app/agendamento-barbearia/index.html" target='_blank'><img src={FotoCadeira} alt="" className='fotocadeira'/></a>
                <p>Entre em contato via Whatsapp ( 1 1 ) 9 5 8 9 0 -9 2 2 6</p>
            </div>
        </div>
    </div>
}
export default AgendeSeuHorario;
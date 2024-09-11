import React from 'react';
import InstaLogo from "../assets/instaLogo.png";
import WhatsLogo from "../assets/WhatsApp-Logo.png";

function RedesSociais() {
    return <div>
        <div className='redes' id='redes'>
            <div className='insta'>
                <p>Nos siga em nosso Instagram</p>
                <a href="https://www.instagram.com/barbe.ariaandrades?igsh=eHB0NWtldXhpbXNz&utm_source=qr" target='_blank'><img src={InstaLogo} alt="" className='instalogo' /></a>
            </div>
            <div className='whats'>
                <p>Entre em nosso Grupo de clientes <br />para ficar por dentro de todas <br />novidades e atualizações de nossa agenda.</p>
                <a href="https://chat.whatsapp.com/LGbOYkidhcR6ptBabABjcX" target='_blank'><img src={WhatsLogo} alt="" className='wpplogo' /></a>
            </div>
            <div className='h3Frase'>
                <h3>“Um corte de cabelo é a moldura perfeita para o quadro da sua vida. Transforme seu visual, transforme sua vida.”</h3>
            </div>
        </div>
    </div>
}
export default RedesSociais;
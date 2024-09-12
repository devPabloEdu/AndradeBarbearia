import React from 'react';
import BarbeariaLogo from "../assets/barbearia.png";
import InstaLogo from "../assets/instagram.png";
import WhatsLogo from "../assets/whatsapp.png";

function FooterBarber() {
    return <div>
        <hr />
        <div className='footerbox'>
            <div>
                <img src={BarbeariaLogo}alt=""  className='imgfooter'/>
            </div>
            <div>
                <p>&copy; 2024  desenvolvido por Pablo Eduardo. Todos os direitos reservados</p>
            </div>
            <div className='redes' id='redes'>
            <div className='insta'>
                <p>Nos siga em nosso Instagram</p>
                <a href="https://www.instagram.com/barbe.ariaandrades?igsh=eHB0NWtldXhpbXNz&utm_source=qr" target='_blank'><img src={InstaLogo} alt="" className='instalogo' /></a>
            </div>
            <div className='whats'>
                <p>Entre em nosso Grupo de clientes</p>
                <a href="https://chat.whatsapp.com/LGbOYkidhcR6ptBabABjcX" target='_blank'><img src={WhatsLogo} alt="" className='wpplogo' /></a>
            </div>
        </div>
        <div className='h3Frase'>
                <h3>“Um corte de cabelo é a moldura perfeita para o quadro da sua vida. Transforme seu visual, transforme sua vida.”</h3>
            </div>
        </div>
    </div>
}
export default FooterBarber;
import React from 'react';
import BarbeariaLogo from "../assets/barbearia.png";

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
        </div>
    </div>
}
export default FooterBarber;
import React from 'react';
import FotoLucas from "../assets/fotoLukas.JPG"
import BannerBck from "../assets/backgroundBanner.JPG"

function HeaderBanner() {
    return <div>
            <div className='BannerBox' id='BannerBox'>
                <div>
                    <h1 className='h1Banner'>Sobre a Lucas Barber - Barbearia Delivery</h1>
                    <p className='pBanner'>Desde 2010, a Barbearia Andrade Delivery, criada por Lucas Andrade, <br />é o lugar onde o cliente encontra sua autoestima e beleza.Nós levamos <br />a barbearia até você, proporcionando mais conforto e agilidade ao atender <br />na sua casa. Oferecemos preços justos, que cabem no seu bolso, sem a necessidade <br />de pegar fila ou esperar pelo próximo.</p>
                </div>
                <div className='FotoLucasClass'>
                    <img src={FotoLucas} alt="" className='FotoLucasClass'/>
                </div>
            </div>
    </div>
}

export default HeaderBanner;
import React from 'react'
import Eu from '../../Img/Pessoa.jpg'
import logoFiap from '../../Img/logoFiap.png'
import CarteirinhaEditavelCss from '../../css/CarteirinhaEditavel.css'

export default function CarteirinhaEditavel(){
    
    return(

        <div >
            <div className="container" style={CarteirinhaEditavelCss}>
                <div className="foto-carteirinha">
                <img src={Eu} alt="Foto pessoal" />
                </div>
                <div className="info-carteirinha">
                    <img src={logoFiap} alt="Logo Fiap" className="logo-fiap"/>
                    <h2><input type="text" className="inputCarteirinha" placeholder="Digite seu nome:"/></h2>
                    <h3><input type="text" className="inputCarteirinha" placeholder="Digite seu curso:"/></h3>
                </div>
            </div>

        </div>

    )

}
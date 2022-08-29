import React from 'react'
import pessoa from '../../img/Pessoa.jpg'
import logoFiap from '../../img/logoFiap.png'
import CarteirinhaCss from '../../css/Carterinha.css'

export default function Carteirinha(){
    return(
        <div >
            <div className="container" style={CarteirinhaCss}>
                <div className="foto-carteirinha">
                <img src={pessoa} width="250px"/>
                </div>
                <div className="info-carteirinha">
                    <img src={logoFiap} width="150px"/>
                    <h2>Ana Karolyne de Jesus Oliveira</h2>
                    <h3>TECNOLOGIA EM ANALISE E DESENVOLVIMENTO DE SISTEMAS</h3>
                </div>
            </div>

        </div>

    )

}
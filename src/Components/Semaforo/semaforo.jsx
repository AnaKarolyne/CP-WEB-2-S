import React from "react";

export default function semaforo(){

    const [opacVm,setOpacVm]= useState(100);
    const [opacAm,setOpacAm]= useState(0);
    const [opacVr,setOpacVr]= useState(0);
    
    const vermelho={
        color: '#f00',
        opacity:opacVm
    }
    const amarelo={
        color:'#ffff00',
        opacity:opacAm
    }
    const verde={
        color:'#008000',
        opacity:opacVr
    }
    function trocaSinal(){
        if(vermelho.opacity===100 && amarelo.opacity===0 && verde.opacity===0){
           setOpacVm(0)
           setOpacVr(100)
        }
        if(vermelho.opacity===0 && amarelo.opacity===0 && verde.opacity===100){
            setOpacVr(0)
            setOpacAm(100)
        }
        if(vermelho.opacity===0 && amarelo.opacity===100 && verde.opacity===0){
            setOpacAm(0)
            setOpacVm(100)
        }
    }
    return(
        <div>
            <div>
                <h2 style={vermelho}>Pare</h2>
                <h2 style={amarelo}>Atenção</h2>
                <h2 style={verde}>Siga</h2>
                <button onClick={trocaSinal}>Aperte o botão para prosseguir</button>
            </div>
        </div>
    )
}
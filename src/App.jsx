import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu/Menu'
import Semaforo from './Components/Semaforo/semaforo'
import ListaDeCarros from './Components/ListaCarros/ListaDeCarros'
import Carteirinha from './Components/Carteirinha/Carteirinha'
import CarteirinhaEditavel from './Components/CarteirinhaEditavel/CarteirinhaEditavel'

export default function App(){
  return(
      <>
         <h1>ANA KAROLYNE DE JESUS OLIVEIRA - RM93668 - 1TDSR 2022</h1>

         <Menu/>
         <Routes>
            <Route path='/ListaDeCarros' element={<ListaDeCarros/>} />
            <Route path='/Semaforo' element={<Semaforo/>}/>
            <Route path='/Carteirinha' element={<Carteirinha/>}/>
            <Route path='/CarteirinhaEditavel' element={<CarteirinhaEditavel/>}/>
         </Routes>
      </>
  )
}
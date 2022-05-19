//passar pbjeto como paremtro

import React from 'react'
import {Text} from 'react-native' 
import Estilo from './estilo'
import If from './If'
 

/* se usuarui etiver setado vai dar verdadeiro {usuario } retorna verdadeiro */

export default props =>{
    const usuario = props.usuario || {}
return( //condicao que de regras que tem que ter para aaparecer usuario e email
    <>
        <If teste={usuario && usuario.nome && usuario.email}>  
            <Text style={Estilo.txtG}>Usuario Logado:{usuario.nome} - {usuario.email}
            </Text>

            <Text style={Estilo.txtG}>Usuario Logado:{usuario.nome} - {usuario.email}
            </Text>
        </If>
        </>


)}
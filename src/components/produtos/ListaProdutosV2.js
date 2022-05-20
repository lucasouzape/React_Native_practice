import React from 'react'
import {Text, FlatList} from 'react-native' 
import Estilo from '../estilo'

import Produtos from './Produtos'
 
export default props => {
    const produtoRender = ({ item: p}) => {
        return <Text>{p.id} {p.nome}</Text>
    }
        return(
            <>
                    <Text style={Estilo.txtG}>
                        Lista de produtos V2
                    </Text>
                    <FlatList
                        data= {Produtos}
                        keyExtactor={i => `${ i.id}`}
                        renderItem={produtoRender} 
                    />

                  
                    
            </>
)}
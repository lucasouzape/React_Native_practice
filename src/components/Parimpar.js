import React from 'react'
import {View,Text} from 'react-native' 
import Estilo from './estilo'
 
export default({num = 0}) => {
                       // "===" == estritamente igual a zero
       return (                                                      /* Rendereização Condicional*/
            <View> 
                    <Text style={Estilo.txtG}>O resultado é :</Text>
                    {num % 2 === 0
                        ? <Text style={Estilo.txtG}>Par</Text> //vai mostrar isso
                        : <Text style={Estilo.txtG}>Impar</Text> // Caso contrario
                    }
                    
            </View>
        )

  }
import React, {Component} from "react";
import {Text} from 'react-native';
import Estilo from '../estilo'

export default class Mega extends Component {

    render ()  {      /*veio la do app js o this.props*/
        return(
            <Text style= {Estilo.txtG}>    
                Gerador de Mega-Sena 
                {this.props.qtdeNumeros} 
            </Text>
        )
    }

}

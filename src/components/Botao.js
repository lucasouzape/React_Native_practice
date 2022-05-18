import React from "react"
import { Button } from 'react-native'

export default props => {

    const executar = () => {
        console.warn('Exec #01!!!')
    }

    return (
        <>
            <Button
                title="Executar #01!"
                onPress={executar}
            />
            <Button
                title="Executar #02!"
                onPress={function() {
                        console.warn('Exec #02!!!')
                }}
            />
            <Button  title="Executar #03!" onPress={() => console.warn('Exec #03!!!')}                                                                // forma mais facil fazer botao , depois manda la n oappjs


            />
        </>
    )
}


















 





     //depois de tacar o botao vai para o app js e importa a funcao e faz a funcao rodar na tela

  
    




























































































   /*
   
   
    function qualquerCoisa(){
        console.warn('qualquer cosia')

    }


    return(
        <Button
            title='Coisa qualquer'
            onPress={qualquerCoisa}
        />
    ) */

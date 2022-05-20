import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'



import DigiteSeuNome from './components/DigiteSeuNome'

//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import UsuarioLogado from './components/UsuarioLogado'
//import Familia from './components/Relacao/Familia'
//import Membro from './components/Relacao/Membro'
//import Parimpar from './components/Parimpar'
//import Diferenciar from './components/Diferenciar' 
//import ContadorV2 from './components/Contador/ContadorV2';
//import Familia from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

/* componente dentro do outro */

export default () => (
    <SafeAreaView style={style.App}>
          <DigiteSeuNome/>
      


        
    
      
  
       
        {/*
            <ListaProdutosV2 />

          <ListaProdutos />

               <UsuarioLogado usuario={   {nome: 'Gui', email: 'gui@email.com'}    }/> 
       <UsuarioLogado usuario={   {email: 'jorge@email.com'}    }/> 

                <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
        </Familia>

        <Parimpar num={3}/>
          <Diferenciar/>
        <ContadorV2 />

        <Pai/>
         <Pai/>

         <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />

        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> 
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

})
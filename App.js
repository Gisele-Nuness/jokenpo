
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import { Modal } from 'react-native-web';

export default function App() {
  const[player, setPlayer] = useState(0)
  const[pc, setPC] = useState(0)

  const[jogadaPlayer, setJogadaPlayer]=useState(0)
  const[jogadaPC, setJogadaPC]=useState(0)

  const [modal, setModal] = useState(false)

  const [mensagem, setMensagem] = useState("Você venceu!!!");

  const exibirImagem =(valor) =>{
      if(valor==0){
        return (
        <Image
        style={styles.mao}
        source={require('./assets/caixa.png')}
      />
      )
      }else if(valor==1){
        return (
          <Image
          style={styles.mao}
          source={require('./assets/pedra.png')}
        />
        )
      }else if(valor==2){
        return (
          <Image
          style={styles.mao}
          source={require('./assets/papel.png')}
        />
        )
      }else if(valor==3){
        return (
          <Image
          style={styles.mao}
          source={require('./assets/tesoura.png')}
        />
        )
      }
    
  }

  const play =(atri) =>{
    setJogadaPlayer(atri)
    const sorteio = Math.floor(Math.random()*3)+1
    setJogadaPC(sorteio)
   
    if(atri == sorteio){
      setPlayer(player+0)
      setPC(pc+0)
    }else if((atri==1  && sorteio==3) || (atri==2  && sorteio==1) || (atri==3  && sorteio==2)){
      setPlayer(player+1)
    }else{
      setPC(pc+1)
    }

    if (player + 1 == 5) {
      setMensagem("Você venceu!🥳");
      setModal(true);
    } else if (pc + 1 == 5) {
      setMensagem("Você perdeu!😢");
      setModal(true);
    }

  }

    
  const voltar= () => {
    setModal(false)
    setJogadaPC(0)
    setPC(0)

    setJogadaPlayer(0)
    setPlayer(0)
  }
  
  const reiniciar =() =>{
    setJogadaPC(0)
    setPC(0)

    setJogadaPlayer(0)
    setPlayer(0)

    return (
      <Image
      style={styles.mao}
      source={require('./assets/caixa.png')}
    />
    )

  }


  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Image
          style={styles.titulo}
          source={require('./assets/titulo.png')}
        /> 
      </View>

      <View style={styles.container2}>
        <Text style={styles.text}>Placar</Text>
      </View>

      <View style={styles.container3}>
        <Text style={styles.text}>{player}</Text>
        <Text style={styles.text}>{pc}</Text>
      </View>

      <View style={styles.container4}>

        {exibirImagem(jogadaPlayer)}

        <Image
            style={styles.vs}
            source={require('./assets/vs.png')}
          /> 

        {exibirImagem(jogadaPC)}

      </View>

      <View style={styles.container5}>
        <Pressable style={styles.btn} onPress={() => {reiniciar(0)}}>
          <Text>NEW GAME</Text>
        </Pressable>

      </View>

      <View style={styles.container6}>
        <Pressable onPress={()=>play(1)}>
          <Image
            style={styles.mao}
            source={require('./assets/pedra.png')}
          />
        </Pressable>

        <Pressable onPress={()=>play(2)}>
          <Image
              style={styles.mao}
              source={require('./assets/papel.png')}
          /> 
        </Pressable>

        <Pressable onPress={()=>play(3)}>
          <Image
              style={styles.mao}
              source={require('./assets/tesoura.png')}
          />  
        </Pressable>

      </View>

      <Modal visible={modal} animationType='fade' style={styles.modal}>
        <View style={styles.containerModal}>
          <Text style={styles.text}>{mensagem}</Text>

          <Button title="Voltar" onPress={() => voltar()}></Button>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },

  container1: {
    flex:1,

  },

  container2: {
    flex: 0.6
  },

  container3: {
    flex: 0.5,
    display: "flex",
    flexDirection: "row",
    gap: 180,
  },

  container4: {
    flex:1,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  container5: {
    flex:1,
    marginTop: 50,
  },

  container6: {
    flex:1,
    display: "flex",
    flexDirection: "row",
    gap: 30,
    alignItems: "center"
  },

  image: {
    width: 80,
    height: 80,
  },

  titulo: {
    width: 220,
    height: 30,
    marginTop: 50,
  },

  text: {
    fontSize: 30,
    fontWeight: 600,
  },

  vs: {
    width: 80,
    height: 50,
  },

  btn: {
    width: 200,
    height: 60,
    border: 2,
    borderColor: "000000",
    borderRadius: 10,
    border: 'solid',
    fontSize: 30,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFA500",
    justifyContent: "center"

  },

  mao: {
    width: 85,
    height: 70,
  },

  modal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerModal: {
    flex: 1,
    backgroundColor: '#FFFACD',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },

});

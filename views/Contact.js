import { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function Contact(){
    const [nomeContato,setNomeContato]=useState('')
    const [telefone, setTelefone]=useState('')
    const [contatos,setContatos]=useState([])
    const [contador,setContador]=useState(0)
    const capturarContatoDigitado=(contatoDigitado)=>{
        setNomeContato(contatoDigitado)
    }
    const capturarTelefoneDigitado=(telefoneDigitado)=>{
        setTelefone(telefoneDigitado)
    }
    const adicionarContato=()=>{
        setContatos(contatos=>{
            setContador(contato+1)
            let aux=[{key:contador.toString(),value:contato},...contatos]
            setNomeContato('')
            setTelefone('')
            return aux
        })
    }
        return(
            <View
      style={styles.telaPrincipalView}>
      <View>
        {/*usuario vai inserir nome e telefone aqui  */}
        <TextInput
          placeholder="Nome"
          style={
            styles.contatoTextInput}
          onChangeText={capturarContatoDigitado}
          value={nomeContato}
        />
        <TextInput
          placeholder="Telefone"
          style={
            styles.contatoTextInput}
          onChangeText={capturarTelefoneDigitado}
          value={telefone}
        />
        <Button
          disabled={nomeContato.length === 0 || telefone.length === 0}
          title="Adicionar contato"
          onPress={adicionarContato}
        />
      </View>
      <FlatList
        data={contatos}
        renderItem={l => (
          <View style={styles.itemNaLista}>
            <Text>{l.item.value.nomeContato} - {l.item.value.telefone}</Text>
          </View>
        )}

      />
    </View>
  );
}

const styles = StyleSheet.create({

  telaPrincipalView: {
    padding: 40
  },

  contatoTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 12
  },

  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }

});

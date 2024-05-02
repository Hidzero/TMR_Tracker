import React, {useState} from "react";
import { View, TextInput } from "react-native";
import { styles } from "../../assets/css/Css";
import { EnterButton } from '../buttons/Buttons';
import axios from 'axios';
import { IP, PORT } from '@env';

export default function CreateCar() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    async function handleCreateCar() {
        const data = {
            marca: marca,
            modelo: modelo,
            ano: ano,
        }
        await axios.post(`http://${IP}:${PORT}/car`, data)
        .then(res => {
            alert('Carro criado com sucesso')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.container_login2}>
                <TextInput 
                    style={styles.login_input}
                    placeholder="Marca"
                    value={marca}
                    onChangeText={setMarca}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.login_input}
                    placeholder="Modelo"
                    value={modelo}
                    onChangeText={setModelo}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.login_input}
                    placeholder="Ano"
                    value={ano}
                    onChangeText={setAno}
                    autoCapitalize="none"
                />
                <EnterButton title="Criar Carro" value='Entrar' style={styles.margin_button}  onPress={handleCreateCar}/>
            </View>
        </View>
    );
}
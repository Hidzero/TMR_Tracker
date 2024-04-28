import React, {useState} from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from '../../assets/css/Css';
import { EnterButton } from '../buttons/Buttons';
import axios from 'axios';

export default function SignUp({ navigation: { navigate }}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignUp() {
        const data = {
            name: name,
            email: email,
            password: password
        }
        await axios.post('http://192.168.0.110:3000/user', data)
        .then(res => {
            console.log(res.data);
            navigate("Sign In")
        })
        .catch(err => {
            console.log(err)
            alert('Erro ao cadastrar')
        })
    }
    
    const Cadastrar = 'Criar conta'
    return (
            <View style={styles.container_forgot_password}>
                <Text 
                    style={styles.forgot_password}>Faça o cadastro em nosso aplicativo
                </Text>
                <TextInput 
                    style={styles.login_input} 
                    placeholder="nome"
                    placeholderTextColor={"black"}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput 
                    style={styles.login_input} 
                    placeholder="e-mail"
                    placeholderTextColor={"black"}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                />
                <TextInput 
                    style={styles.sign_up_login_input} 
                    placeholder="senha" 
                    secureTextEntry={true} 
                    placeholderTextColor={"black"}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                />
                <EnterButton title="Cadastrar" value={Cadastrar} onPress={handleSignUp} />
                
            </View>
    );
}

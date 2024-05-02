import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../assets/css/Css';
import { EnterButton } from '../buttons/Buttons';
import axios from 'axios';
import { IP, PORT } from '@env';

export default function SignUp({ navigation: { navigate } }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    async function handleSignUp() {
        const data = {
            name: name,
            email: email,
            password: password
        };
        await axios.post(`http://${IP}:${PORT}/user`, data)
            .then(res => {
                alert('Conta criada com sucesso!');
                navigate("Sign In");
            })
            .catch(err => {
                console.log(err);
                alert('Erro ao cadastrar');
            });
    }

    const Cadastrar = 'Criar conta';
    return (
        <View style={styles.container_forgot_password}>
            <Text style={styles.forgot_password}>Faça o cadastro em nosso aplicativo</Text>
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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextInput
                    style={[styles.sign_up_login_input, { flex: 1 }]}
                    placeholder="senha"
                    secureTextEntry={!passwordVisible}
                    placeholderTextColor={"black"}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eye_icon}>
                    <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={24} color="grey" />
                </TouchableOpacity>
            </View>
            <EnterButton title={Cadastrar} value={Cadastrar} onPress={handleSignUp} />
        </View>
    );
}

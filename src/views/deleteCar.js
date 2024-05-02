import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { styles } from "../../assets/css/Css";
import { EnterButton } from '../buttons/Buttons';
import axios from 'axios';
import { IP, PORT } from '@env';

export default function DeleteCar() {
    const [cars, setCars] = useState([]);
    const [modelo, setModelo] = useState(''); 

    useEffect(() => {
        getCars();
    }, []);

    async function getCars() {
        await axios.get(`http://${IP}:${PORT}/car`)
        .then(res => {
            const data = res.data.map(car => {
                return {
                    marca: car.marca,
                    modelo: car.modelo,
                    ano: car.ano,
                    id: car._id
                }
            });
            setCars(data);
        })
        .catch(err => {
            console.log(err);
            Alert.alert("Erro", "Falha ao carregar carros");
        });
    }

    async function handleDeleteCar() {
        const carToDelete = cars.find(car => car.modelo.toLowerCase() === modelo.toLowerCase());        

        if (carToDelete) {
            await axios.delete(`http://${IP}:${PORT}/car/${carToDelete.id}`)
            .then(res => {
                Alert.alert('Sucesso', 'Carro deletado com sucesso');
                setCars(cars.filter(car => car.id !== carToDelete.id));  // Atualiza a lista local de carros
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Erro', 'Erro ao deletar carro');
            });
        } else {
            Alert.alert('Não Encontrado', 'Carro não encontrado');
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.container_login2}>
                <TextInput 
                    style={styles.login_input}
                    placeholder="Modelo"
                    value={modelo}
                    onChangeText={setModelo}
                    autoCapitalize="none"
                />
                <EnterButton title="Deletar Carro" value='Deletar' style={styles.margin_button} onPress={handleDeleteCar}/>
            </View>
        </View>
    );
}

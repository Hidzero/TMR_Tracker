import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Alert, ScrollView } from "react-native";
import { styles } from "../../assets/css/Css";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { IP, PORT } from '@env';

export default function DeleteCar(props) {
    const allCars = props.route.params;
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

    async function handleDeleteCar(carToDelete) {     
        if (carToDelete) {
            await axios.delete(`http://${IP}:${PORT}/car/${carToDelete.id}`)
            .then(() => {
                Alert.alert('Sucesso', 'Carro deletado com sucesso');
                // Corrigindo a atualização do estado para excluir o carro correto
                setCars(cars.filter(existingCar => existingCar.id !== carToDelete.id));
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
        <ScrollView>
        <View style={styles.container}>
            <View style={{width:'90%', marginTop:20}}>
                {cars.map((car, index) => (
                    <View key={index} style={[styles.carContainer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <View style={{flex:1}}>
                            <Text style={styles.textCarContainer}>Marca: {car.marca}</Text>
                            <Text style={styles.textCarContainer}>Modelo: {car.modelo}</Text>
                            <Text style={styles.textCarContainer}>Ano: {car.ano}</Text>
                        </View>
                        <View>
                        <TouchableOpacity onPress={() => handleDeleteCar(car)} style={{marginRight:20}}>
                            <Icon name='trash' size={24} color="black" />
                        </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    </ScrollView>
    );
}

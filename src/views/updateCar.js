import React, { useState, useEffect } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../../assets/css/Css";
import { EnterButton } from '../buttons/Buttons';
import axios from 'axios';

export default function UpdateCar() {
    const [cars, setCars] = useState([]);
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');
    const [carToUpdate, setCarToUpdate] = useState(null);


    useEffect(() => {
        getCars();
    }, []);

    async function getCars() {
        await axios.get('http://192.168.0.110:3000/car/')
        .then(res => {
            setCars(res.data.map(car => ({
                marca: car.marca,
                modelo: car.modelo,
                ano: car.ano,
                id: car._id
            })));
        })
        .catch(err => {
            console.log(err);
            Alert.alert("Erro", "Falha ao carregar carros");
        });
    }

    function handleUpdateCar() {
        const foundCar = cars.find(car => car.modelo.toLowerCase() === modelo.toLowerCase());
        if (foundCar) {
            setCarToUpdate(foundCar);
            setMarca(foundCar.marca);
            setModelo(foundCar.modelo);
            setAno(foundCar.ano.toString());
        } else {
            Alert.alert('Não Encontrado', 'Carro não encontrado');
            setCarToUpdate(null);
        }
    }
    
    async function submitUpdate() {
        if (carToUpdate) {
            const updatedData = {
                marca: marca,
                modelo: modelo,
                ano: ano
            };
    
            await axios.put(`http://192.168.0.110:3000/car/${carToUpdate.id}/${carToUpdate}`, updatedData)
            .then(() => {
                Alert.alert('Sucesso', 'Dados do carro atualizados com sucesso');
                getCars();
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Erro', 'Erro ao atualizar dados do carro');
            });
        
            setCarToUpdate(null); 
        }
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.container_login2}>
                <TextInput
                    style={styles.login_input}
                    placeholder="Digite o modelo para encontrar"
                    value={modelo}
                    onChangeText={setModelo}
                    autoCapitalize="none"
                />
                <EnterButton title="Encontrar Carro" value= 'Encontrar'onPress={handleUpdateCar} />
                {carToUpdate && (
                    <>
                        <TextInput
                            style={styles.login_input}
                            placeholder="Marca"
                            value={marca}
                            onChangeText={setMarca}
                        />
                        <TextInput
                            style={styles.login_input}
                            placeholder="Modelo"
                            value={modelo}
                            onChangeText={setModelo}
                        />
                        <TextInput
                            style={styles.login_input}
                            placeholder="Ano"
                            value={ano}
                            onChangeText={setAno}
                            keyboardType="numeric"
                        />
                        <EnterButton title="Atualizar Carro" value='Atualizar' onPress={submitUpdate} />
                    </>
                )}
            </View>
        </View>
    );
    
}

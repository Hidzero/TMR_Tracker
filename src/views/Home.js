import React from "react";
import { View  } from "react-native";
import { styles } from "../../assets/css/Css";
import { ButtonHome } from "../buttons/Buttons";
import { Bloquear, Desbloquear, Localizacao } from "../../assets/img/icons/index"
import MapView from "react-native-maps";

export default function HomeLive() {
    return (
        <View style={styles.container}>
            <View style={styles.container_flex}>
                <View style={styles.container_teste}>
                    {/* <MapView 
                        style={styles.map} 
                        onMapReady={this.handleMapReady} 
                        initialRegion={
                            {
                                latitude: 23.55052,
                                longitude: 46.633308,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }
                        }
                    /> */}
                </View>       
            </View>
            <View style={styles.container_flex}>
                <View style={styles.container_home}>
                    <ButtonHome icon={Bloquear} text={ 'Bloquear'} style={styles.squares} />
                    <ButtonHome icon={Localizacao} text={ 'Lozalizar'} style={styles.squares} />
                    <ButtonHome icon={Desbloquear} text={ 'Desbloquear'} style={styles.squares} />
                </View>       
            </View>
        </View>
    );
}

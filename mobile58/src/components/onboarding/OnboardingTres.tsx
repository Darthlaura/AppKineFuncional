
import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function OnboardingTres() {

    const { width, height } = useWindowDimensions();

    // Medidas adaptables a dispositivos pequeños.
    const anchoTarjetas = Math.min(width - 48, 400);
    const compacto = height < 750;

    const altoTarjeta = compacto ? 100 : 126;
    const espacioTarjetas = compacto ? 9 : 13;

    return (
        <View style={styles.contenedor}>

            {/* TÍTULO Y DESCRIPCIÓN */}

            <View
                style={[
                    styles.encabezado,
                    { width: anchoTarjetas },
                ]}
            >

                <Text style={styles.titulo}>
                    Bienestar{'\n'}y ejercicios
                </Text>

                <Text style={styles.descripcion}>
                    Descubre rutinas personalizadas{'\n'}
                    para una vida más saludable.
                </Text>

            </View>

            {/* CONTENEDOR DE LAS TRES TARJETAS */}

            <View style={styles.zonaTarjetas}>

                <View
                    style={[
                        styles.tarjetas,
                        {
                            width: anchoTarjetas,
                            gap: espacioTarjetas,
                        },
                    ]}
                >

                    {/* TARJETA 1 - RUTINAS */}

                    <View
                        style={[
                            styles.tarjeta,
                            styles.tarjetaRosa,
                            { height: altoTarjeta },
                        ]}
                    >

                        <Image
                            source={require('../../../assets/images/icono_mancuerna.png')}
                            style={styles.icono}
                            resizeMode="contain"
                        />

                        <View style={styles.textoTarjeta}>

                            <Text style={styles.tituloTarjeta}>
                                Rutinas{'\n'}de ejercicio
                            </Text>

                            <Text style={styles.subtituloTarjeta}>
                                Muévete a tu ritmo
                            </Text>

                        </View>

                        {/* Ilustración de la mujer */}

                        <Image
                            source={require('../../../assets/images/mujer_yoga.png')}
                            style={[
                                styles.mujerYoga,
                                compacto && styles.mujerCompacta,
                            ]}
                            resizeMode="contain"
                        />

                        <View style={styles.flecha}>
                            <Ionicons
                                name="chevron-forward"
                                size={17}
                                color="#7776AD"
                            />
                        </View>

                    </View>

                    {/* TARJETA 2 - HÁBITOS */}

                    <View
                        style={[
                            styles.tarjeta,
                            styles.tarjetaAzul,
                            { height: altoTarjeta },
                        ]}
                    >

                        <Image
                            source={require('../../../assets/images/tarjeta_azul.png')}
                            style={styles.imagenFondoAzul}
                            resizeMode="stretch"
                        />

                        <Image
                            source={require('../../../assets/images/icono_hojas.png')}
                            style={styles.icono}
                            resizeMode="contain"
                        />

                        <View style={styles.textoTarjeta}>

                            <Text style={styles.tituloTarjeta}>
                                Hábitos{'\n'}saludables
                            </Text>

                            <Text style={styles.subtituloTarjeta}>
                                Mejora tu día a día
                            </Text>

                        </View>

                        <Image
                            source={require('../../../assets/images/hojas_decorativas.png')}
                            style={styles.hojas}
                            resizeMode="contain"
                        />

                        <View style={styles.flecha}>
                            <Ionicons
                                name="chevron-forward"
                                size={17}
                                color="#7776AD"
                            />
                        </View>

                    </View>

                    {/* TARJETA 3 - PROGRESO */}

                    <View
                        style={[
                            styles.tarjeta,
                            styles.tarjetaDurazno,
                            { height: altoTarjeta },
                        ]}
                    >

                        <Image
                            source={require('../../../assets/images/icono_progreso.png')}
                            style={styles.icono}
                            resizeMode="contain"
                        />

                        <View style={styles.textoTarjeta}>

                            <Text style={styles.tituloTarjeta}>
                                Tu progreso
                            </Text>

                            <Text style={styles.subtituloTarjeta}>
                                Pequeños cambios,{'\n'}
                                grandes resultados
                            </Text>

                        </View>

                        <Image
                            source={require('../../../assets/images/icono_progreso.png')}
                            style={styles.graficoProgreso}
                            resizeMode="contain"
                        />

                        <View style={styles.flecha}>
                            <Ionicons
                                name="chevron-forward"
                                size={17}
                                color="#7776AD"
                            />
                        </View>

                    </View>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    // ESTRUCTURA GENERAL

    contenedor: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    encabezado: {
        paddingTop: 0,
        marginTop: -15,
        marginBottom: 25,
    },

    titulo: {
        fontSize: 34,
        lineHeight: 38,
        fontWeight: '700',
        letterSpacing: -0.8,
        color: '#30345E',
        marginBottom: 10,
    },

    descripcion: {
        fontSize: 15,
        lineHeight: 22,
        color: '#8585AF',
    },

    zonaTarjetas: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
    },

    tarjetas: {
        alignItems: 'center',
    },

    // ESTILOS COMPARTIDOS DE TARJETAS

    tarjeta: {
        width: '100%',
        borderRadius: 27,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        overflow: 'hidden',
    },

    tarjetaRosa: {
        backgroundColor: '#FBE3EE',
    },

    tarjetaAzul: {
        backgroundColor: '#E5EEFF',
    },

    tarjetaDurazno: {
        backgroundColor: '#FFF0E6',
    },

    icono: {
        width: 43,
        height: 43,
        zIndex: 2,
    },

    textoTarjeta: {
        marginLeft: 10,
        flex: 1,
        zIndex: 2,
        justifyContent: 'center',
    },

    tituloTarjeta: {
        fontSize: 16,
        fontWeight: '700',
        color: '#33375F',
        lineHeight: 19,
    },

    subtituloTarjeta: {
        fontSize: 11,
        color: '#8687AF',
        lineHeight: 15,
        marginTop: 5,
    },

    flecha: {
        width: 27,
        height: 27,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        marginLeft: 4,
    },

    // ILUSTRACIÓN DE LA MUJER

    mujerYoga: {
        position: 'absolute',
        width: 146,
        height: 116,
        right: 21,
        bottom: -10,
    },

    mujerCompacta: {
        width: 118,
        height: 96,
    },

    // DECORACIÓN BOTÁNICA

    fondoImagenAzul: {
        borderRadius: 27,
    },

    hojas: {
        position: 'absolute',
        right: 22,
        bottom: -12,
        width: 120,
        height: 105,
        opacity: 0.78,
    },

    // DECORACIÓN DE PROGRESO

    graficoProgreso: {
        position: 'absolute',
        right: 37,
        bottom: 3,
        width: 70,
        height: 72,
        opacity: 0.85,
    },
    imagenFondoAzul: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 27,
    },

});

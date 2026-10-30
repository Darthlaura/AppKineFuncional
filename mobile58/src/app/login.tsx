
import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {

    const router = useRouter();

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contenido}>

                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.volver}>← Volver</Text>
                </TouchableOpacity>

                <Text style={styles.emoji}>💜</Text>

                <Text style={styles.titulo}>
                    Bienvenida de nuevo
                </Text>

                <Text style={styles.descripcion}>
                    Inicia sesión para continuar con tu bienestar.
                </Text>

                <Text style={styles.etiqueta}>
                    Correo electrónico
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="ejemplo@correo.com"
                    placeholderTextColor="#9993AD"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={correo}
                    onChangeText={setCorreo}
                />

                <Text style={styles.etiqueta}>
                    Contraseña
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Tu contraseña"
                    placeholderTextColor="#9993AD"
                    secureTextEntry={true}
                    value={contrasena}
                    onChangeText={setContrasena}
                />

                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>
                        Iniciar sesión
                    </Text>
                </TouchableOpacity>

                <Text style={styles.registro}>
                    ¿No tienes una cuenta? Regístrate
                </Text>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FCFAFF',
    },

    contenido: {
        flex: 1,
        paddingHorizontal: 28,
        paddingTop: 45,
    },

    volver: {
        fontSize: 16,
        color: '#7667D8',
    },

    emoji: {
        fontSize: 65,
        textAlign: 'center',
        marginTop: 55,
        marginBottom: 30,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#26223C',
        marginBottom: 12,
    },

    descripcion: {
        fontSize: 16,
        color: '#87839E',
        marginBottom: 38,
    },

    etiqueta: {
        fontSize: 14,
        color: '#55506D',
        marginBottom: 9,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E6E1F1',
        borderRadius: 20,
        padding: 17,
        fontSize: 16,
        marginBottom: 24,
        color: '#26223C',
    },

    boton: {
        backgroundColor: '#7969DF',
        padding: 19,
        borderRadius: 22,
        marginTop: 15,
        alignItems: 'center',
    },

    textoBoton: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },

    registro: {
        color: '#7969DF',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 30,
    },
});

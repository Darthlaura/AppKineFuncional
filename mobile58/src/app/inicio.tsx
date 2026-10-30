import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
export default function Inicio() {

    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contenido}>

                <Text style={styles.saludo}>¡Hola! 👋</Text>

                <Text style={styles.titulo}>
                    Tu bienestar comienza aquí
                </Text>

                <Text style={styles.descripcion}>
                    Descubre una manera más sencilla
                    de cuidar tu movimiento.
                </Text>

                <View style={styles.tarjeta}>
                    <Text style={styles.icono}>📅</Text>

                    <Text style={styles.tarjetaTitulo}>
                        Reserva tus sesiones
                    </Text>

                    <Text style={styles.tarjetaDescripcion}>
                        Próximamente podrás explorar
                        profesionales y sus horarios.
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => router.push('/login')}
                >
                    <Text style={styles.textoBoton}>
                        Iniciar sesión
                    </Text>
                </TouchableOpacity>

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
        padding: 28,
        paddingTop: 65,
    },

    saludo: {
        fontSize: 19,
        color: '#7969DF',
        marginBottom: 18,
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#26223C',
        marginBottom: 14,
    },

    descripcion: {
        fontSize: 16,
        color: '#87839E',
        marginBottom: 35,
    },

    tarjeta: {
        backgroundColor: '#EAE4FF',
        padding: 25,
        borderRadius: 26,
        marginBottom: 35,
    },

    icono: {
        fontSize: 35,
        marginBottom: 18,
    },

    tarjetaTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3A3264',
        marginBottom: 10,
    },

    tarjetaDescripcion: {
        fontSize: 15,
        color: '#6D6687',
    },

    boton: {
        backgroundColor: '#7969DF',
        padding: 19,
        borderRadius: 22,
        alignItems: 'center',
    },

    textoBoton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

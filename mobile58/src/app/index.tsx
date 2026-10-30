
import { useRef, useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  type ScrollViewInstance,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

// Componente independiente para la segunda pantalla.
import OnboardingDos from '../components/onboarding/OnboardingDos';
import OnboardingTres from '../components/onboarding/OnboardingTres';

export default function Onboarding() {

  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const scrollRef = useRef<ScrollViewInstance>(null);
  const [pagina, setPagina] = useState(0);

  const pantallas = [
    {
      titulo: 'Tu salud en un solo lugar',
      descripcion: 'Agenda tus citas, lleva un control de tu bienestar y crea hábitos más saludables.',
      icono: '💜',
      color: '#FCFAFF',
    },
    {
      titulo: 'Reserva con facilidad',
      descripcion: 'Agenda tus citas en unos pasos y mantén todo bajo control.',
      icono: '📅',
      color: '#FCFAFF',
    },
    {
      titulo: 'Acompaña tu progreso',
      descripcion: 'Avanza hacia tus objetivos de bienestar.',
      icono: '🌿',
      color: '#FCFAFF',
    },
  ];

  // Conservamos las dimensiones de la primera pantalla.
  const anchoContenido = Math.min(width - 48, 440);

  const alturaImagen = Math.min(
    Math.max(height * 0.34, 190),
    355
  );

  // Cambia de pantalla sin modificar las rutas.
  function irAPagina(destino: number) {

    if (destino < 0 || destino >= pantallas.length) {
      return;
    }

    scrollRef.current?.scrollTo({
      x: destino * width,
      animated: true,
    });

    setPagina(destino);
  }

  function avanzar() {

    if (pagina < pantallas.length - 1) {
      irAPagina(pagina + 1);
    } else {
      router.replace('/inicio');
    }
  }

  function retroceder() {
    if (pagina > 0) {
      irAPagina(pagina - 1);
    }
  }

  function cambiarPagina(
    evento: NativeSyntheticEvent<NativeScrollEvent>
  ) {

    const posicion = evento.nativeEvent.contentOffset.x;
    const nuevaPagina = Math.round(posicion / width);

    if (
      nuevaPagina >= 0 &&
      nuevaPagina < pantallas.length
    ) {
      setPagina(nuevaPagina);
    }
  }

  return (
    <View style={styles.container}>

      {/* Botón volver visible desde la segunda pantalla */}
      {pagina > 0 && (
        <TouchableOpacity
          style={[
            styles.volver,
            { top: insets.top + 16 },
          ]}
          onPress={retroceder}
          accessibilityRole="button"
          accessibilityLabel="Volver a la pantalla anterior"
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color="#7773A8"
          />
        </TouchableOpacity>
      )}

      {/* Botón para saltar la introducción */}
      <TouchableOpacity
        style={[
          styles.omitir,
          { top: insets.top + 16 },
        ]}
        onPress={() => router.replace('/inicio')}
        accessibilityRole="button"
        accessibilityLabel="Saltar introducción"
      >
        <Text style={styles.omitirTexto}>Saltar</Text>
      </TouchableOpacity>

      {/* Carrusel principal */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={cambiarPagina}
        style={styles.carrusel}
        contentContainerStyle={styles.contenidoCarrusel}
      >

        {pantallas.map((pantalla, indice) => (

          <View
            key={indice}
            style={[
              styles.pagina,
              {
                width: width,
                backgroundColor: pantalla.color,
                paddingTop: insets.top + 58,
              },
            ]}
          >

            {indice === 0 ? (

              // PRIMERA PANTALLA: se conserva el diseño.
              <View
                style={[
                  styles.primeraPantalla,
                  { width: anchoContenido },
                ]}
              >

                <Image
                  source={require('../../assets/images/Logo Luma_ Salud, Balance y Bienestar.png')}
                  style={styles.logo}
                  resizeMode="contain"
                  accessibilityLabel="Logo de Luma Salud Balance Bienestar"
                />

                <Image
                  source={require('../../assets/images/Mujer serena entre hojas pastel.png')}
                  style={[
                    styles.mujer,
                    { height: alturaImagen },
                  ]}
                  resizeMode="contain"
                  accessibilityLabel="Mujer serena rodeada de hojas pastel"
                />

                <View style={styles.contenedorTexto}>

                  <Text style={styles.tituloPrincipal}>
                    Tu salud en un{'\n'}solo lugar
                  </Text>

                  <Text style={styles.descripcionPrincipal}>
                    {pantalla.descripcion}
                  </Text>

                </View>

              </View>

            ) : indice === 1 ? (

              // SEGUNDA PANTALLA: nuestro nuevo componente.
              <OnboardingDos />

            ) : (

              // TERCERA PANTALLA: BIENESTAR Y EJERCICIOS
              <OnboardingTres />

            )}
          </View>

        ))}

      </ScrollView>

      {/* Navegación inferior común */}
      <View
        style={[
          styles.inferior,
          {
            paddingBottom:
              Math.max(insets.bottom, 12) + 12,
          },
        ]}
      >

        {/* Indicadores */}
        <View style={styles.indicadores}>

          {pantallas.map((pantalla, indice) => (

            <View
              key={indice}
              style={[
                styles.punto,
                pagina === indice && styles.puntoActivo,
              ]}
            />

          ))}

        </View>

        {/* Botón principal */}
        <TouchableOpacity
          style={styles.boton}
          onPress={avanzar}
          activeOpacity={0.85}
          accessibilityRole="button"
        >

          <Text style={styles.textoBoton}>
            {pagina === 0
              ? 'Comenzar'
              : pagina === 2
                ? 'Comenzar ahora'
                : 'Siguiente'}
            {'  →'}
          </Text>

        </TouchableOpacity>

        {/* Acceso para usuarios registrados */}
        <TouchableOpacity
          style={styles.cuenta}
          onPress={() => router.replace('/login')}
        >

          <Text style={styles.textoCuenta}>
            Ya tengo una cuenta
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FCFAFF',
  },

  carrusel: {
    flex: 1,
  },

  contenidoCarrusel: {
    flexGrow: 1,
  },

  omitir: {
    position: 'absolute',
    right: 28,
    zIndex: 10,
    padding: 8,
  },

  omitirTexto: {
    color: '#626AB0',
    fontSize: 17,
    fontWeight: '500',
  },

  volver: {
    position: 'absolute',
    left: 22,
    zIndex: 10,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 8,
  },

  primeraPantalla: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  logo: {
    width: '88%',
    height: 145,
    maxWidth: 335,
  },

  mujer: {
    width: '100%',
    maxWidth: 440,
  },

  contenedorTexto: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 8,
  },

  tituloPrincipal: {
    fontSize: 34,
    fontWeight: '700',
    color: '#10134E',
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: -0.8,
    marginBottom: 18,
  },

  descripcionPrincipal: {
    fontSize: 17,
    color: '#626BAA',
    lineHeight: 26,
    textAlign: 'center',
    maxWidth: 345,
  },

  contenidoSecundario: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  icono: {
    fontSize: 100,
    marginBottom: 45,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#27233E',
    textAlign: 'center',
    marginBottom: 20,
  },

  descripcion: {
    fontSize: 18,
    color: '#65607D',
    textAlign: 'center',
    lineHeight: 27,
  },

  inferior: {
    backgroundColor: '#FCFAFF',
    paddingHorizontal: 24,
    paddingTop: 12,
  },

  indicadores: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  punto: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#DFDEF8',
    marginHorizontal: 5,
  },

  puntoActivo: {
    backgroundColor: '#8980F9',
  },

  boton: {
    backgroundColor: '#9087FA',
    minHeight: 62,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },

  cuenta: {
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 6,
  },

  textoCuenta: {
    fontSize: 15,
    color: '#6355BA',
  },

});

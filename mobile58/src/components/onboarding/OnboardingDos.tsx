
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function OnboardingDos() {

  const { width, height } = useWindowDimensions();

  // Ajustamos la ilustración a diferentes dispositivos.
  const anchoDisponible = Math.max(width - 48, 220);
  const escalaAncho = Math.min(anchoDisponible / 320, 1);
  const escalaAlto = height < 700 ? 0.75 : height < 850 ? 0.88 : 1;
  const escala = Math.min(escalaAncho, escalaAlto);

  const dias = [
    'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'
  ];

  const fechas = [
    '15', '16', '17', '18', '19', '20', '21'
  ];

  return (
    <View style={styles.contenedor}>

      {/* ENCABEZADO DE LA SEGUNDA PANTALLA */}
      <View style={styles.encabezado}>

        <Text style={styles.titulo}>
          Reserva{'\n'}con facilidad
        </Text>

        <Text style={styles.descripcion}>
          Agenda tus citas en unos pasos{'\n'}
          y mantén todo bajo control.
        </Text>

      </View>

      {/* ZONA CENTRAL DEL DISEÑO */}
      <View style={styles.zonaIlustracion}>

        <View
          style={[
            styles.espacioEscenario,
            {
              width: 320 * escala,
              height: 345 * escala,
            },
          ]}
        >
          <View
            style={[
              styles.escenario,
              {
                transform: [{ scale: escala }],
              },
            ]}
          >

            {/* DECORACIONES PASTEL */}

            <View style={styles.circuloRosaIzquierdo} />

            <View style={styles.circuloAzulDerecho} />

            <View style={styles.hojaAzulSuperior} />

            <View style={styles.hojaRosaInferior} />

            <View style={styles.hojaAzulInferior} />

            <View style={styles.baseDecorativa} />

            {/* CALENDARIO */}

            <View style={styles.calendario}>

              <View style={styles.cabeceraCalendario}>

                <View style={styles.botonCircular}>
                  <Ionicons
                    name="chevron-back"
                    size={16}
                    color="#7774A5"
                  />
                </View>

                <Text style={styles.mes}>
                  Abril 2024
                </Text>

                <View style={styles.botonCircular}>
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color="#7774A5"
                  />
                </View>

              </View>

              {/* DÍAS DE LA SEMANA */}

              <View style={styles.filaDias}>

                {dias.map((dia) => (
                  <Text key={dia} style={styles.dia}>
                    {dia}
                  </Text>
                ))}

              </View>

              {/* FECHAS */}

              <View style={styles.filaFechas}>

                {fechas.map((fecha) => (

                  <View
                    key={fecha}
                    style={[
                      styles.fecha,
                      fecha === '18' && styles.fechaSeleccionada,
                    ]}
                  >

                    <Text
                      style={[
                        styles.numeroFecha,
                        fecha === '18' && styles.numeroSeleccionado,
                      ]}
                    >
                      {fecha}
                    </Text>

                  </View>

                ))}

              </View>

            </View>

            {/* ICONO DECORATIVO DEL CALENDARIO */}

            <View style={styles.iconoCalendario}>
              <Ionicons
                name="calendar-outline"
                size={27}
                color="#E26A98"
              />
            </View>

            {/* TARJETA PRIMERA CITA */}

            <View style={styles.tarjetaPrimera}>

              <View style={styles.avatar}>
                <Text style={styles.emojiAvatar}>
                  👩🏻‍⚕️
                </Text>
              </View>

              <View style={styles.detallesCita}>

                <Text style={styles.nombreCita}>
                  Consulta general
                </Text>

                <Text style={styles.horaCita}>
                  10:30 – 11:00
                </Text>

              </View>

              <Ionicons
                name="chevron-forward"
                size={17}
                color="#8585B7"
              />

            </View>

            {/* TARJETA SEGUNDA CITA */}

            <View style={styles.tarjetaSegunda}>

              <View style={styles.iconoDiente}>
                <Text style={styles.emojiDiente}>
                  🦷
                </Text>
              </View>

              <View style={styles.detallesCita}>

                <Text style={styles.nombreCita}>
                  Consulta dental
                </Text>

                <Text style={styles.horaCita}>
                  16:00 – 16:30
                </Text>

              </View>

              <Ionicons
                name="chevron-forward"
                size={17}
                color="#8585B7"
              />

            </View>

          </View>
        </View>

      </View>

    </View>
  );
}

// ESTILOS DE LA SEGUNDA PANTALLA

const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  encabezado: {
    width: '100%',
    maxWidth: 400,
    paddingTop: 8,
  },

  titulo: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '700',
    color: '#30345E',
    letterSpacing: -0.8,
    marginBottom: 8,
  },

  descripcion: {
    fontSize: 15,
    lineHeight: 22,
    color: '#8585AF',
  },

  zonaIlustracion: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 230,
  },

  espacioEscenario: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  escenario: {
    width: 320,
    height: 345,
    alignItems: 'center',
    justifyContent: 'center',
  },

  circuloRosaIzquierdo: {
    position: 'absolute',
    width: 155,
    height: 155,
    borderRadius: 90,
    backgroundColor: '#FBE1ED',
    left: 0,
    top: 90,
    opacity: 0.8,
  },

  circuloAzulDerecho: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 95,
    backgroundColor: '#E5EAFF',
    right: -5,
    bottom: 4,
    opacity: 0.8,
  },

  hojaAzulSuperior: {
    position: 'absolute',
    width: 35,
    height: 77,
    borderRadius: 40,
    backgroundColor: '#D3DFFF',
    right: 12,
    top: 2,
    transform: [{ rotate: '36deg' }],
  },

  hojaRosaInferior: {
    position: 'absolute',
    width: 18,
    height: 48,
    borderRadius: 30,
    backgroundColor: '#F9CDCE',
    left: 19,
    bottom: 12,
    transform: [{ rotate: '-38deg' }],
  },

  hojaAzulInferior: {
    position: 'absolute',
    width: 18,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ADBFFF',
    right: 12,
    bottom: 36,
    transform: [{ rotate: '40deg' }],
  },

  baseDecorativa: {
    position: 'absolute',
    width: 285,
    height: 240,
    borderRadius: 50,
    backgroundColor: '#EFF1FF',
    opacity: 0.75,
    transform: [{ rotate: '-12deg' }],
  },

  calendario: {
    position: 'absolute',
    top: 56,
    width: 282,
    height: 170,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    shadowColor: '#8A81C9',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 5,
    transform: [{ rotate: '-5deg' }],
  },

  cabeceraCalendario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  botonCircular: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#F7F7FE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mes: {
    fontSize: 14,
    fontWeight: '600',
    color: '#37365F',
  },

  filaDias: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  dia: {
    width: 32,
    textAlign: 'center',
    fontSize: 9,
    color: '#9292BD',
    fontWeight: '600',
  },

  filaFechas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  fecha: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fechaSeleccionada: {
    backgroundColor: '#A49AF5',
  },

  numeroFecha: {
    color: '#68698F',
    fontSize: 13,
  },

  numeroSeleccionado: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  iconoCalendario: {
    position: 'absolute',
    top: 36,
    right: 18,
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#FFE0E5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#DB9AAE',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  tarjetaPrimera: {
    position: 'absolute',
    top: 196,
    left: 29,
    width: 266,
    minHeight: 62,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
    elevation: 6,
    shadowColor: '#7D78BC',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    transform: [{ rotate: '-5deg' }],
  },

  tarjetaSegunda: {
    position: 'absolute',
    top: 269,
    left: 43,
    width: 266,
    minHeight: 62,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
    elevation: 6,
    shadowColor: '#7D78BC',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    transform: [{ rotate: '-5deg' }],
  },

  avatar: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#F5E7ED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emojiAvatar: {
    fontSize: 23,
  },

  iconoDiente: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#E9E7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emojiDiente: {
    fontSize: 23,
  },

  detallesCita: {
    flex: 1,
    gap: 4,
  },

  nombreCita: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3E3D69',
  },

  horaCita: {
    fontSize: 11,
    color: '#8B8CB2',
  },

});

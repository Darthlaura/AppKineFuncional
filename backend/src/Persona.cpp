#include "Persona.h"

int Persona::contador = 0; // inicializar el contador de persona
// constructor

Persona::Persona(std::string nombre, std::string apellido, std::string rut)
{

    this->nombre = nombre;
    this->apellido = apellido;
    this->rut = rut;
    // aumentar el contador cada vez que se crea una persona
    contador++;
    this->idPersona = contador;
}

std::string Persona::getNombre() const
{
    return this->nombre;
}

std::string Persona::getApellido() const
{
    return this->apellido;
}

std::string Persona::getRut() const
{

    return this->rut;
}

int Persona::getIdPersona() const
{
    return this->idPersona;
}

Persona::~Persona()
{
}

#include "Paciente.h"

Paciente::Paciente(std::string nombre, std::string apellido, std::string rut, std::string telefono, std::string correo, std::string fechaDeNacimiento) : Persona(nombre, apellido, rut)
{
    this->telefono = telefono;
    this->correo = correo;
    this->fechaDeNacimiento = fechaDeNacimiento;
}

std::string Paciente::getTelefono() const
{
    return this->telefono;
}

std::string Paciente::getCorreo() const
{

    return this->correo;
}

std::string Paciente::getFechaDeNacimiento() const
{

    return this->fechaDeNacimiento;
}

void Paciente::setTelefono(std::string nuevoTelefono)
{

    this->telefono = nuevoTelefono;
}

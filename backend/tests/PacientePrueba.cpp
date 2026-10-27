#include <iostream>
#include "Persona.h"
#include "Paciente.h"
using namespace std;

int main()
{

    Paciente *paciente1 = new Paciente(
        "Ana",
        "Soto",
        "12345678-9",
        "912345678",
        "ana@ejemplo.com",
        "1998-08-15");

    std::cout << "Nombre: " << paciente1->getNombre() << std::endl;
    std::cout << "Telefono: " << paciente1->getTelefono() << std::endl;
    std::cout << "Correo: " << paciente1->getCorreo() << std::endl;
    std::cout << "Nacimiento: " << paciente1->getFechaDeNacimiento() << std::endl;

    delete paciente1;

    return 0;
};

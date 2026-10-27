//compilacion 
//g++ -std=c++17 -Wall -Wextra -Ibackend/include backend/tests/personaPrueba.cpp backend/src/Persona.cpp -o personaPrueba.exe
//.\personaPrueba.exe

#include <iostream>
#include "Persona.h"
#include "Paciente.h"
using namespace std; 


int main() {

   
    Persona* persona1 = new Persona("Laura", "Garcia", "26427429-k"); 
    // Aquí crearemos nuestros objetos Persona


    cout << "Nombre : " << persona1->getNombre() << " Apellido : " << persona1->getApellido() << " Rut: " << persona1->getRut() << endl; 
    
    delete persona1; 
    return 0;
}



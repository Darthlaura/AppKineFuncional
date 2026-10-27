#pragma once 
#include  <string>
#include "Persona.h"


class Paciente : public Persona {

   private: 

   std::string telefono; 
   std::string correo; 
   std::string fechaDeNacimiento; 

   public: 

   Paciente(std::string nombre, std::string apellido, std::string rut,std::string telefono, std::string correo, std::string fechaDeNacimiento); 
   
   

   std::string getTelefono() const; 
   std::string getCorreo() const;
   std::string getFechaDeNacimiento() const; 


   void setTelefono(std::string nuevoTelefono); 



};
#pragma once 
#include <string>


class Persona {
 
   private: 

   int idPersona; 
   std::string nombre; 
   std::string apellido; 
   std::string rut; 
   static int contador; // indica que ese contador pertenece a la clase y es compartido por todos los objetos Persona.

   public: 
   Persona(std::string nombre, std::string apellido, std::string rut);

   std::string getNombre() const ; 
   std::string getApellido() const; 
   std::string getRut() const ; 
   int getIdPersona() const;

   virtual ~Persona();

};

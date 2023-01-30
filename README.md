# Journey Mates 🛫

## Índice

* [i. Acerca de "Journey Mates"](#1-acerca-de-Journey_Mates)
* [ii. Historias de Usuario](#2-historias-de-usuario)
* [iii. Prototipos](#3-prototipos)
* [iv. Consideraciones generales](#4-consideraciones-generales)
* [v. Listado de problemas que detectaste a través de tests de usabilidad](#v-listado-de-problemas-que-detectaste-a-través-de-tests-de-usabilidad)


***

## i. Acerca de Journey Mates

El proyecto _"Journey Mates"_ surge con la finalidad de brindar a las usuarias que disfrutan de viajar y conocer nuevos lugares en Latinoamerica, una red social en la cual, podrán compartir sus experiencias y recomendaciones, y descubrir a través de las recomendaciones de otras usuarias, nuevos lugares, ciudades y otros sitios de interés. 


## ii. Historias de Usuario

Las historias de usuario las realizamos en función de los hallazgos de una investigación con personas que disfrutan de viajar.

Nuestras Historias de Usuario fueron 8:

1. **HU Crear Cuenta:** Como viajera, quiero registrarme en JourneyMates para crear un perfil.

**Criterios de aceptación:** 

    *La página tiene que ser responsive.
    * Al presionar el botón "Registrarme" permite crear una cuenta usando un correo electrónico o a través de gmail.
    * Permite crear una contraseña de acceso.
    *Fiel a prototipo.

**Definición de terminado:**

    *Debe ser una SPA.
    La página muestra un botón "Registarme".
    
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.

    *La página muestra un input a través del cual se puede crear una cuenta usando un correo electrónico.
    Se puede crear una contraseña para poder acceder a la cuenta.

    *Se muestra un error si el correo electrónico ya se registró anteriormente.

    *Se muestra un error si la contraseña no cumple con los requisitos (mínimo 8 caracteres y un número)

  3. **HU Personajes filtrados:** Como seguidora de Harry Potter, quiero visualizar a los personajes  casas del Colegio Hogwarts de Magia y Hechicería  en función de la escuela a la que pertenecen para conocer a qué escuela asiste cada uno de ellos.

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página le permite a la usuaria acceder a la base de datos a través del escudo de cada escuela. Esta muestra a los personajes de cada una de las escuelas con nombre completo, escuela a la que pertenece y especie.

    *Fiel a prototipo.

**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    **La página muestra con imágenes/logos las 4 escuelas del Colegio Hogwarts de Magia y Hechicería en un contenedor y al momento de dar click a cada escudo dirige a los personajes que pertenecen a esa escuela.

    *Pasa los tests necesarios.

    *Visualmente es fiel a prototipo.


4. **HU Personajes ordenados alfabeticamente:** Como seguidora de Harry Potter, quiero visualizar a todos los personajes de las diferentes casas del Colegio Hogwarts de Magia y Hechicería ordenados alfabeticamente en orden ascendente (A-Z) para que la data sea más amigable de explorar.

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página le permite a la usuaria ordenar de forma alfabetica (A-Z) los nombres de los personajes.

    *Fiel a prototipo.

**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    **La página muestra un ícono que que al darle click ordena automáticamente a todos los personajes alfabeticamente (A-Z).

    *Pasa los tests necesarios.

    *Visualmente es fiel a prototipo.


5. **HU Porcentaje de mujeres y hombres:** Como seguidora de Harry Potter, quiero visualizar el porcentaje de mujeres y de hombres del total de los personajes de la saga de HP.

**Criterios de aceptación:** 

    *La página es responsive (desktop & mobile).

    *La página le permite a la usuaria obtener el porcentaje de mujeres y de hombres del total de personajes de la saga de Harry Potter.

    *Fiel a prototipo.

**Definición de terminado:**

    *La página se puede abrir con las mismas funcionalidades en celulares, tablets y pc.

    **La página muestra un botón que que al darle click muestra el porcentaje de mujeres y de hombres de los personajes de la saga de Harry Potter. 

    *Pasa los tests necesarios.

    *Visualmente es fiel a prototipo.

## iii. Prototipos

* Prototipo de baja fidelidad

![img](./src/images/Prototipos/HU%20Casas%20.png)
![img](./src/images/Prototipos/HU%20Personajes.png)
![img](./src/images/Prototipos/HU%20Personajes%20Filtrados.png)
![img](./src/images/Prototipos/HU%20Orden%20A-Z%20y%20HU%20Porcentajes.png)

* Prototipo de alta fidelidad

![img](./src/images/tinified/Prototipo%20alta%20fidelidad%20mobile.png)
![img](./src/images/tinified/Prototipo%20alta%20fidelidad%20desktop.png)

## iv. Proyectos desplegados

💻 Laura: https://laugardc.github.io/DEV002-data-lovers/ 
💻 Daniela: https://dvnielx.github.io/DEV002-data-lovers/ 

## v. Listado de problemas que detectaste a través de tests de usabilidad

    *Las lineas 6-9 en data.js no estan cubiertas en los test, ya que utilizamos el método Fetch para traer los datos, pues inicialemnte estábamos trabajando con la url de la API, sin embargo, el servidor dejó de funcionar y trajimos los datos desde la carpeta .json del repositorio. Conservamos comentada la url de la API por si en algun momento volvía a funcionar y poder hacer la llamada correspondiente para trabajar con dicho código. 
    *Nos faltó crear los test para los errores.
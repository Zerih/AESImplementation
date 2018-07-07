# AESImplementation

<h1>Documento de diseño</h1>

<h2> Indice </h2>
<ol>
  <li><a href="#intro">Introduccion</a></li>
  <li><a href="#desarrollo">Desarrollo</a></li>
  <li><a href="#conclusion">Conclusiones</a></li>
</ol>

<br />

<h2 id="intro">Introduccion</h2>
<p>
  Este proyecto fue hecho con el propósito de realizar una página web mediante un servidor Apache, que a la vez debe funcionar remotamente y poder acceder a esta desde cualquier lugar. Para ello se utilizó la herramienta de No-IP, brindando un dominio para la página.
La página fue realizada en lenguaje HTML, creando la interfaz con la que el usuario puede interactuar con esta. Por otro lado, el sitio funciona y trabaja con código en lenguaje JavaScript, que realiza todas las funciones que son ejecutadas y dan funcionalidad y vida al sitio.
La funcionalidad y el propósito son utilizar el ya conocido esquema de cifrado AES, el cual brinda un sistema de encriptado al texto que el usuario decida ingresar, asignando también una clave secreta.
El sitio cuenta con 3 campos de texto:
•	En el primer campo de texto se escribirá la clave secreta de 128 bits. 
•	En el segundo irá el texto en claro, o bien, el mensaje que se quiere encriptar.
•	En el tercero se mostrará el texto ya encriptado.
Y cuenta con 3 botones:
•	El botón “Read the Design Document [in spanish] mostrará este documento.
•	El botón “Encrypt” encriptará el mensaje y mostrará el resultado.
•	El botón “Decrypt” mostrará el mensaje “Esta aplicacion no soporta descifrado de AES sorry”, porque es verdad.

</p>

<br/>
<h2 id="desarrollo">Desarrollo</h2>
<p>
  Introducción al algoritmo
Advanced Encryption Standard (AES), también conocido como Rijndael (pronunciado "Rain Doll" en inglés), es un esquema de cifrado por bloques adoptado como un estándar de cifrado por el gobierno de los Estados Unidos. El AES fue anunciado por el Instituto Nacional de Estándares y Tecnología (NIST) como FIPS PUB 197 de los Estados Unidos (FIPS 197) el 26 de noviembre de 2001 después de un proceso de estandarización que duró 5 años.
El cifrado fue desarrollado por dos criptólogos belgas, Joan Daemen y Vincent Rijmen, ambos estudiantes de la Katholieke Universiteit Leuven, y fue enviado al proceso de selección AES bajo el nombre "Rijndael".
Este algoritmo toma como base los datos en una matriz de 4x4, a la cual se le denomina “estado”, cuyos 16 bytes van cambiando de acuerdo a los procedimientos de cómputo que se van ejecutando, en específico técnicas de sustitución y permutación. Todas las operaciones se realizan sobre bytes, en palabras de 32 bits que se escriben de arriba hacia abajo y de izquierda a derecha. 

Primero que nada, se cargan los datos (el mensaje) en la matriz estado. Después, el tamaño de la clave dictará el número de repeticiones de transformación para transformar el mensaje. Las repeticiones van así: 

10 ciclos para llaves de 128-bits. 
12 ciclos para llaves de 192-bits. 
14 ciclos para llaves de 256-bits. 

En cada una de las vueltas, se generará una clave (key) de vuelta generada a partir de la clave maestra. El algoritmo de cifrado comienza con la operación AddRoundKey donde se regresará una clave, para una clave de 128 bits se calculan 10 subclaves, 1 por cada vuelta. Después se ejecutarán las siguientes operaciones, SubBytes, ShiftRows, MixColumns, y AddRoundKey durante 9 vueltas (en este caso) de nuevo. Para finalizar se repiten las operaciones SubBytes, ShiftRows y AddRoundKey, dando como resultado a una matriz de estado final con 16 bytes que formarán el criptograma resultado a descifrar.

Al ingresar el mensaje y la clave, el programa realizará todas las operaciones antes mencionadas para llegar a una matriz final.
La matriz resultado se mostrará en el área de texto de Result, distribuida en una sola fila.

  </p>
<br />
<h2 id="conclusion">Conclusiones</h2>
<p>
  Realizar un algoritmo de cifrado no sólo representa un gran reto, también representa la seguridad que muchos sistemas de información consideran una necesidad y que a través de los años se han convertido en algo indispensable para el resguardo de información, sobretodo de manera digital. La información es algo que siempre necesitará un resguardo mientras esta sea valiosa, por lo que los métodos de encriptación probablemente siempre estarán presentes dentro de las plataformas que manejen muchos datos.
Al utilizar el algoritmo AES se pudo notar lo complejo que puede ser un proceso de cifrado, por lo que es muy importante conocer sobre estos y entender cómo funcionan para cuidar la información que se necesite encriptar.
Se puede decir que se cumplió satisfactoriamente con los resultados y que el algoritmo funciona como es debido, por lo tanto, se considera que el proyecto fue un éxito.

  </p>

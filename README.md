# *NO GAP*

###Descripción de la app y vista a futuro.


######"No gap" es una aplicación en fase beta cuya meta es ser una aplicación destinada a la libre compra de ropa de primer y segunda mano, una especie de "feria americana/vintage" de libre y fácil compra; En esta misma la idea es implementar diferentes marcas/brands y sus productos, para poder tener al alcance la ropa de la marca que busques en una misma aplicación.



##Features utilizados, el porqué  de su implementacion e instalación

###1.SQLite

######Decidi implementer SQLite para lograr la persistencia de datos dentro de mi app, ya que provee una base de datos ligera que no requiere un servidor separado debido a que funciona como un servidor propio e independiente.

Abrir la consola, dirígete  hacia la carpeta de tu proyecto y coloca los siguientes comandos.

. npx expo install expo-sqlite

###2.Expo ImagePicker

######Decidi utilizar este feature para poder tener una screen dedicada al usuario para que este pueda lograr una integridad dentro de la app, y creí que un feature de cámara sería óptimo para lograrlo.

Abrir la consola, dirígete  hacia la carpeta de tu proyecto y coloca los siguientes comandos.
. npx expo install expo-image-picker
. npx expo install expo-file-system

###3.Expo Location

######Implemente este feature por razones similares a los 2 anteriores, para lograr que el usuario se sienta integrado en la app y facilitarle el acceso a la tienda física mediante este feature, expo location, mediante un mapa para guiarse y así mismo poder, entre otras cosas, guardar una ubicación gracias a la persistencia de datos (las ubicaciones son ficticias).

Abrir la consola, dirígete  hacia la carpeta de tu proyecto y coloca los siguientes comandos.

. npm i expo-location


##Librerias usadas y su importancia

###1.Navigation

######Su implementación se debió a que buscaba una librería que me dé plena navegación entre mis screens, y esta era la ideal.


###2.Yup

######Implementada para la validación de datos dentro de la app, se ve usada en la screen SignUpSchema.js.

para poder instalar esta libreria debes abrir la consola, dirigirte hacia tu carpeta del proyecto que estes desarrollando y ejecutar el/los siguientes comandos:

. npm i yup

###3.React Native

######Fundamental su implementación dentro de la app, ya que gracias a esto pude usar componentens básicos a lo largo de todo el código como Stylesheet u otros más "avanzados" como modal,ActivityIndicator.

para poder instalar esta libreria debes abrir la consola, dirigirte hacia tu carpeta del proyecto que estes desarrollando y ejecutar el/los siguientes comandos:

. npx create-expo-app

. cd "nombre de tu app" (my-first-app)

. npx expo start

###4.@reduxjs/toolkit

######Usar redux toolkit en react native es crucial si es que el objetivo de la app es el de hacer compras, ya que para crear un carrito de compras, por ejemplo, necesitamos crear acciones y reducers, estos te los facilita redux toolkit.

para poder instalar esta libreria debes abrir la consola, dirigirte hacia tu carpeta del proyecto que estes desarrollando y ejecutar el/los siguientes comandos:

. npm install @reduxjs/toolkit

. npm install react-redux


###Notas/aclaraciones

######La app como anteriormente dije, está en fase beta, aún le falta colocar los productos y así mismo, sus categorías, dejé los archivos base que se brindó en el curso para no perder tiempo en colocar productos que posteriormente voy a borrar, ya que cuando ponga los productos quiero que sean de marcas reales.
######El clearcart no es funcional, solamente agregué el trash icon, fui bastante justo de tiempo, lo fui postergando, y al final, no recordé de hacerlo.
######Los productos dentro de las categorías tardan en cargar, no encontré la forma de optimizarlo o arreglarlo, aún no sé cuál es la causa, pero cargan.
######Cuando explico los pasos de instalación solamente explicó cómo instalar la librería o el feature, no cómo ejecutarlo/utilizarlo dentro del código, es lo que entendí que debía realizar, quería aclararlo por las dudas, espero no estar equivocado.
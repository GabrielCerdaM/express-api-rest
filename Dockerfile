# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Copiar el script de espera de MySQL
# COPY wait-for-mysql.sh /usr/local/bin/wait-for-mysql.sh

# Cambiar los permisos para que sea ejecutable
# RUN chmod +x /usr/local/bin/wait-for-mysql.sh

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación estará corriendo
EXPOSE 3000

# Establecer el script de espera de MySQL como el comando de inicio predeterminado
CMD ["node", "src/index.js"]
# CMD ["wait-for-mysql.sh","node", "src/index.js"]

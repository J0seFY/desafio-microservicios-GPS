#imagen de node
FROM node:22

#establece el directorio de trabajo
WORKDIR /usr/src/app

#copia el package.json 
COPY package*.json ./

#instala las dependencias
RUN npm install

#copia el resto de archivos
COPY . .

#Compila el codigo typescript a javascript
RUN npm run build

#expone el puerto 8081
EXPOSE 8082
#comando para ejecutar la aplicacion
CMD ["npm", "start"]

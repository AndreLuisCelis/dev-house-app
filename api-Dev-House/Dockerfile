# Usa uma imagem base do Node.js
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /user

VOLUME  /user/uploads

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN yarn install

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# Conexão com mongodb 
ENV MONGO_URI="mongodb://mongo:27017/devHouse"

# Expõe a porta 3333 para acessar a API
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["yarn", "dev"]

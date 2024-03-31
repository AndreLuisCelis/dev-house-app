# Usa uma imagem base do Node.js
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /user

VOLUME  /user

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN yarn install

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# Conexão com mongodb Atlas na nuvem 
# ENV MONGO_URI="mongodb+srv://andreluiscelis:501782@cluster0.qkqvv8i.mongodb.net/devHouse?retryWrites=true&w=majority&appName=Cluster0"

# Expõe a porta 3333 para acessar a API
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["yarn", "dev"]

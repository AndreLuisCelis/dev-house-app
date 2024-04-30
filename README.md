
# Dev House App

Este app consiste em um sistema que permite ao usuário cadastrar-se na aplicação e após seu cadastro será possível incluir houses para locação.

Na aplicação é possivel fazer as operações básicas de um CRUD e também é possivel fazer uma atenticação de usuário simples.

Também é possível adicionar uma imagem ao fazer um cadastro.

A Api foi desenvolvida seguindo as lições deste curso da Udemy: https://www.udemy.com/course/curso-nodejs/?couponCode=ST8MT40924

----------------------------------------

![imagem do projeto](/front-dev-house/dev-house/src/assets/login.png)
---------------------------------------------

![imagem do projeto](/front-dev-house/dev-house/src/assets/cadastro.png)
----------------------------------------------------

![imagem do projeto](/front-dev-house/dev-house/src/assets/edicao.png)

A Api foi desenvolvida seguindo as lições deste curso da Udemy: https://www.udemy.com/course/curso-nodejs/?couponCode=ST8MT40924

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- HTML5
- CSS3
- JavaScript
- Docker Compose

## Como Executar

Certifique-se de ter o Docker e o Docker Compose instalados no seu sistema.

1. Clone este repositório:

```bash
git clone https://github.com/AndreLuisCelis/dev-house-app.git
```

2. Navegue até o diretório do projeto:

```bash
cd dev-house-app
```

3. Execute o seguinte comando para construir e iniciar os contêineres da aplicação:

```bash
docker-compose up
```

Isso criará e iniciará os contêineres necessários para a aplicação, incluindo o servidor Node.js e o servidor MongoDB.

4. Após a execução bem-sucedida, você pode acessar o aplicativo em um navegador da web:

```
http://localhost:4000
```

## Observações

- Certifique-se de que nenhuma outra aplicação esteja utilizando as portas especificadas no arquivo `docker-compose.yml`.
- Se necessário, você pode modificar as configurações de porta no arquivo `docker-compose.yml`.
- Para parar a execução dos contêineres, você pode pressionar `Ctrl + C` no terminal onde o comando `docker-compose up` está sendo executado.
- Para remover os contêineres após a execução, você pode executar o comando:

```bash
docker-compose down
```

Isso encerrará e removerá os contêineres da aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para relatar problemas ou sugestões de melhorias.

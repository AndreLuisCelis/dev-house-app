

# API Dev House

Bem-vindo à API Dev House! Esta é uma API incrível para gerenciar casas de desenvolvedores. Com esta API, você pode adicionar, atualizar, excluir e visualizar informações sobre as casas dos desenvolvedores de forma fácil e eficiente.

## Como Usar

### Instalação

1. Clone este repositório:
   ```
   git clone https://github.com/AndreLuisCelis/api-Dev-House.git
   ```
2. Instale as dependências:
   ```
   npm install
   ```

### Configuração

1. Renomeie o arquivo `.env.example` para `.env`.
2. Configure as variáveis de ambiente no arquivo `.env` conforme necessário.
3. Crie na raiz do projeto a pasta uploads.

### Execução

1. Para iniciar o servidor, execute:
   ```
   npm start
   ```

2. Acesse a API em `http://localhost:3333`.

## Endpoints

Aqui estão alguns dos principais endpoints disponíveis na API:

- `GET /houses`: Retorna todas as casas de desenvolvedores cadastradas.
- `GET /houses/:id`: Retorna informações detalhadas sobre uma casa específica.
- `POST /houses`: Adiciona uma nova casa de desenvolvedor.
- `PUT /houses/:id`: Atualiza as informações de uma casa existente.
- `DELETE /houses/:id`: Exclui uma casa de desenvolvedor.

## Contribuindo

Sinta-se à vontade para contribuir para este projeto! Se você encontrar problemas, bugs ou tiver ideias para melhorias, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT) - veja o arquivo `LICENSE` para mais detalhes.

## Contato

Para mais informações, entre em contato com o mantenedor do projeto:

Nome: André Luís Celis
Email: celisandreluis@gmail.com

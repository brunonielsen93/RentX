# Cadastro de Carro

**RF** => Requisitos Funcionais
Deve ser possível cadastrar um novo carro



**RN** => Regra de negócio
Não deve ser possível cadastrart um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário admistrador.

# Listagem de Carros

**RF** => Requisitos Funcionais
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.



**RN** => Regra de negócio
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no Carro

**RF** Requisitos Funcionais
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN** => Regra de negócio
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário admistrador.

# Cadastro de imagens do carro

**RF** Requisitos Funcionais
Deve ser possível cadastrar a imagem do carro.
Deve ser possivel listar tods os carros.

**RNF** Requisitos não Funcionais
Utilizar o multer para upload dos arquivos

**RN** Regra de negócio
O usuário deve poder cadastrart mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário admistrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel


**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrart um novo aluguem caso já exisa um aberto para o mesmo usuário. 
Não deve ser possível cadastrart um novo aluguem caso já exisa um aberto para o mesmo carro. 




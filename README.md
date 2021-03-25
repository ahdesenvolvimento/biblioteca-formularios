# Biblioteca de formulários validados
## Essa biblioteca ainda está em desenvolvimento

## Considerações iniciais
1. Essa biblioteca ainda está em desenvolvimento
2. Propósitos da biblioteca: Estudo e praticidade no desenvolvimento
3. Para fazer uso desta biblioteca, você precisa ter o jquery inserido na sua página html

## Objetivo
- Durante o meu estudo de desenvolvimento, notei que alguns campos são comuns, como RG, CPF e Telefone, como forma de evitar que sempre tivesse que validar tais campos e também para aprimorar meu estudo em JavaScript, tomei a decisão de criar esta biblioteca.

## Funcionamento
- Para fazer o uso correto da biblioteca, siga as instruções:
1. Faça a criação de inputs do tipo text no qual cada input deve receber o id cpf, rg e telefone, caso queria colocar outro nome, você terá de alterar o código fonte também;
2. O input cpf deverá conter o maxlength de 14, rg de 9 e telefone de 14, para assim ter o funcionamento normal;
3. Por padrão, ao carregar a tela os formulários já serão válidados permitindo somente números, entretanto existem funções que permite o programador inserir mensagens no HTML para serem exibidas. As funções validacao_telefone_com_mensagem, validacao_rg_com_mensagem, validacao_cpf_com_mensagem, recebem dois parâmetros, sendo o primeiro um boolean que irá dizer se você deseja ou não inserir as mensagens, true=sim, façse=não, o segundo é a mensagem que você deseja exibir, para exibir as mensagens deve-se criar uma tag small(recomendado) que irá conter um id, os ids disponiveis são cpf_message, rg_message e telefone_message;


## Adições futuras
1. Validar campos de email e gmail
2. Validar campos de quantidades
3. Validar campos floats

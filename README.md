## 💡 Sobre o Projeto

O *Sistema Acadêmico* é um projeto universitário que simula a fase de testes de um sistema simples de gerenciamento de notas, na perspectiva de um professor. Este sistema foi desenvolvido com o objetivo de compreender e aplicar práticas de Integração Contínua (CI), Desenvolvimento Orientado a Testes (TDD) e Code Review, além de incentivar o uso de metodologias ágeis de desenvolvimento e promover o trabalho colaborativo, simulando ambientes reais de desenvolvimento e testes de software.

## Tecnologias Utilizadas

- *Node.js*: Ambiente de execução para JavaScript no lado do servidor(backend).
- *Jest*: Framework para testes automatizados.

## Estrutura do Projeto

O repositório possui duas pastas principais:

- *src*: Contém os módulos do sistema, cada um responsável por uma funcionalidade específica.
  - *Módulo 1 (lancamentoNotas.js):* Permite ao professor lançar as notas dos alunos.
  - *Módulo 2 (calcularMedia.js):* Calcula a média das notas lançadas.
  - *Módulo 3 (exibirStatus.js):* Determina o status de aprovação do aluno com base na média.

- *test*: Contém os arquivos de testes correspondentes a cada módulo.
  - *lancamentoNotas.test.js*
  - *calcularMedia.test.js*
  - *exibirStatus.test.js*

Cada módulo utiliza *module.exports* e *require* para integração entre si.

## Como Executar os Testes

### Pré-requisitos

- *Node.js*: Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

### Passo a Passo

1. Clone o Repositório

```bash
git clone <url-do-repositório>
```

2. Navegue até o diretório do projeto:
```bash
cd <caminho-para-diretório>
```

Instale as dependências do projeto:
```bash
npm install
```

Execute os testes no JavaScript Debug Terminal:
```bash
npm test
```

Os resultados dos 18 casos de teste serão exibidos no terminal, indicando se todos os testes passaram com sucesso.

### Exemplo de saída dos testes:
```bash
PASS  tests/lancamentoNotas.test.js
PASS  tests/calcularMedia.test.js
PASS  tests/exibirStatus.test.js
------------------------------
Test Suites: 3 passed, 3 total
Tests:       18 passed, 18 total
```

## Contribuidores

- [Bruna Carvalho](https://github.com/brucarv) - Desenvolvedora 
- [João Galdino](https://github.com/joaogldn) - Desenvolvedor 

Sinta-se à vontade para explorar nossos perfis e repositórios! 🚀

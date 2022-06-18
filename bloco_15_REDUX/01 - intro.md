# Redux

**Biblioteca utilizada para gerenciamento do estado.**

Redux não é uma biblioteca *exclusiva* do React, podendo ser combinada com outro *framework front-end*, ou mesmo *javascript* puro.

## Vídeo Alberto

**Problema:** onde será guardado o estado da aplicação?

Em aplicações grandes, o problema começa a se agravar. O transtorno de passagem de props e callbacks entre componentes pai e filho se reflete em operações complexas e encadeadas entre os componentes. O Redux se propõe a solucionar este problema.

O Redux é um local **central** da aplicação que permite a *troca de informações* entre os componentes. **Todo componente tem acesso a ele e ele tem acesso a todos os componentes.**

O Redux tem uma estrutura complexa, que necessita de um bom entendimento para garantir o bom uso desta ferramenta.

### Objetivos:

* Criar uma *Store* para armazenar o estado de uma aplicação.
* Utilizar *Reducers* e *Actions* para atualizar a *Store*


# As Peças do Redux

O Redux não é uma ferramenta simples, ele é composto por várias peças para nos permitir a troca de informações ente diferentes componentes.

* **Store**: é a entidade que armazena o estado centralizado da aplicação. É definido em um local ou arquivo separado. Todos os os outros arquivos deverão acessá-lo para recuperação de informações. É um **objeto** *Javacript*.

* **Action**: é o objeto *JavaScript* que representa a mudança necessária a ser feita no *state*.

* **Reducer**: o reducer é o controle de fluxo entre os pedidos de atualização de estado e o store, para controle do estado da aplicação. É uma **função** *Javacript*.

* **store.dispatch()**: O *dispatch* é uma função que envia uma *action* para ser processada;

* **store.getState()**: A função *getState* é utilizada para recuperar informações armazenadas no *estado* do *Store*.

O **Reducer** recebe o estado atual (*current state*) e a ação corrente (*current action*) e retorna um novo estado(*new state*). É de responsabilidade dessa função administrar o que acontecerá ao estado, dada uma ação.


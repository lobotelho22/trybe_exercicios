# Combinando Reducers

Em algumas aplicações complexas, por muitas vezes será necessária a combinação de vários *reducers*, para que seja possível a articulação entre vários componentes e *actions* diferentes. Imagine a complexidade de coordenar e passar todos os reducers a um único *store*!

Para resolver esse problema, o Redux possui a função **combineReducers()**. Essa função recebe um objeto como parâmetro, contendo cada um dos reducers utilizados em uma aplicação. Como no exemplo abaixo:

```
// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;
```

Aqui importamos dois reducers utilizados em nossa aplicação fictícia e os combinamos com a função *combineReducers()*, posteriormente exportando essa combinação. No código-exemplo a seguir, importamos esse objeto para nosso store:

```
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
...
```

Imaginando que utilizamos um comando de *console.log* para verificarmos a informação de nosso estado, teríamos como saída um objeto, contendo duas chaves, respectivas a cada um dos reducers da aplicação e, como respectivos valores, seus objetos de estado:

```
{
 meuReducer: {/_estado do meuReducer_/},
 meuOutroReducer: {/_estado do meuOutroReducer_/,}
}
```
Em reducers combinados, as *actions* podem ser escritas normalmente, pois todos eles escutam as *actions* escritas e só executam mudanças quando a *action.type* é reconhecida.

Portanto, o que acontece com a combinação de 
reducers, é que cada *action* é enviada a todos os reducers, independente se são compatíveis ou não com a sua execução. Caberá a cada *switch* administrar a execução de cada *action*, com base na propriedade *type*.

A única alteração de ordem mais considerável se dá no acesso às propriedades do estado, que deverão indicar o reducer responsável pelo gerenciamento deste respectivo estado.

Ou seja, se antes acessávamos uma determinada propriedade *email*, por **state.email**, agora necessitaremos indicar o reducer que a gerencia: **state.meuReducer.email**.

É uma forma de organizar o fluxo das propriedades e podemos encarar como uma espécie de móvel de arquivo onde os reducers representam gavetas e as propriedades, suas pastas.


# Subscribe

Esa funcionalidade adiciona um *listener* que executará uma *callback* a cada vez que uma *action* for despachada. No exemplo abaixo, poderemos ver como isso acontece, observando um *console.log* a cada alteração do estado:

```
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

store.subscribe(() => {
  console.log(store.getState());
});
...
```
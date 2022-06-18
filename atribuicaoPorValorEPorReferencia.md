# Atribuição Por Valor e Por Referência

Em JavaScript, temos dois tipos de dados: primitivos e objetos. A cada variável a que atribuímos valor, fazemos uso destes tipos de dados. Como a linguagem é de tipagem dinÂmica, podemos alterar os tipos de variáveis de forma sucessiva.

No entanto, nos interessa aqui discutir o comportamento entre os tipos de dados em JavaScript, afim de identificar e prevenir possíveis problemas decorrentes do processo de atribuição de valores. Atribuir valor, *grosso modo*, é declarar valores a constantes e/ou variáveis.

&nbsp;

## Tipos Primitivos e Atribuição por Valor


A documentação do JavaScript nos diz que a linguagem possui sete tipos primitivos:

* String;
* Number;
* Boolean;
* Null (caso especial);
* Undefined;
* BigInt;
* Symbol
  
Os dados de tipo primitivo possuem valores imutáveis. Isso significa dizer que eles utilizam um espaço definido na memória que, quando alterado, é *abandonado* e substituído por um novo espaço.

Vejamos o exemplo simples abaixo:

```
let astro = 'Betelgeuse';
let estrela = astro;


console.log(astro === estrela) // true
```
&nbsp;

O nosso console retornará o valor *true* para o teste efetuado. Isso acontece porque ao declarar o valor de **estrela** como a variável **astro** referencia as duas constantes ao mesmo valor armazenado na memória.

Observemos que o valor atribuído a cada uma das variáveis não as tornam dependentes entre si. Isto é, se atribuirmos um novo valor à primeira variável, o valor da segunda permanecerá o mesmo. Vejamos:

```
astro = 'Sol';

console.log(estrela) // Betelgeuse
console.log(astro) // sol
console.log(astro === estrela) // false
```

&nbsp;

Em resumo, ao declaramos variáveis de tipo primitivo, estamos referenciando espaços diferentes na memória. Logo se comportarão como dados independentes entre si.

&nbsp;

## Tipos Não Primitivos e Atribuição por Referência

Em JavaScript o tipo alternativo aos tipos primitivos é um Objeto. Na Ciência da Computação, um objeto é um valor na memória que pode ser referenciado por um *identifier*. Um *identifier* é uma sequência de caracteres que identifica uma variável, função ou propriedade.

Em JavaScript um objeto tem como propriedades um conjunto indeterminado de chaves e valores. Uma chave é sempre definida por uma *string* e valores podem assumir qualquer tipo. **Funções** também são objetos com uma capacidade adicional, que é a de serem chamados.

A representação de **Datas** e **Arrays** também são objetos em JavaScript. Uma característica dos objetos, relacionada ao seu caráter de identificação no espaço de memória, diz respeito a sua atribuição por referência.

Objetos diferentes possuem referêncas diferentes à memória. Isso significa que mesmo que possuam a mesma informação, objetos diferentes ao terem sua igualdade testada, retornarão *false*. Como no exemplo a seguir:

```
let constelacao = { nome: 'Touro' };
let signo = { nome: 'Touro' };

console.log(constelacao === signo) // false
```

Podemos interpretar a aparente situação paradoxal desse exemplo, da seguinte maneira: embora tenham o mesmo conteúdo, os objetos são diferentes. Por analogia, é como se tivéssemos duas gavetas de meia, em armários diferentes. Embora as duas gavetas contenham meias, elas são diferentes entre si. Pode ser que as gavetas tenham tamanhos diferentes, cores, etc. Não são o mesmo objeto, portanto.

No entando, e se referenciarmos um objeto a partir de um novo e novamente testarmos?

```
let constelacao = { nome: 'Touro' };
let signo = constelacao;

console.log(constelacao === signo) // true
```

A comparação agora é verdadeira, pois signo é uma variável que referencia a variável constelação. Ou seja, signo e constelação, no exemplo acima, se referencia ao mesmo objeto. Pela nossa analogia anterior, seriam dois nomes diferentes para nos referirmos à mesma gaveta de meias -- será que alguém dá nomes a gavetas!?

A situação acima pode acarretar problemas no desenvolvimento de códigos e aplicações. O problema repousa na seguinte situação: ao modificarmos o valor de *constelação*, automaticamente alteramos o valor de *signo*, pois ambas as variáveis se referem ao mesmo conjunto de dados alocado na memória. Elas são, de fato, o **mesmo** objeto.


<h1>CHMODE: Como dominar o significado dos códigos numéricos</h1>
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/99725896/154583745-a4bc817f-3d93-4818-bb63-de4e9654167f.png"></p>


O comando chmode como está lá no course aceita dois tipos de entrada, para alterar permissões de usuários. Uma em que indicamos se alteramos <b>usuário (u), grupo(g), outros (o) ou para todos (a)</b>. Além disso, temos que indicar se estamos <b>adicionando(+), mantendo(=) ou excluindo (-)</b> uma permissão, que também deve ser indicada. Neste caso, se é <b>leitura (r), escrita (w) ou execução (x)</b>. Um comando chmode seria escrito como no exemplo abaixo:

	$ chmod u-rw lista.txt


A alternativa é a utilização dos códigos numéricos, cuja tabela foi disponibilizada no material didátido do course. Esta última teria um formato <b><i>mais compacto</i></b> e, na minha opinião, <b><i>mais ágil</i></b> na digitação do comando. A sintaxe é mais econômica, pois acompanharia o comando <b>três dígitos, que variam de 0 a 7,</b> para indicar as alterações de pemissão. Exemplo:

	$ chmod 177 lista.txt
	
No caso do exemplo acima, cada um dos três dígitos indicam as permissões para usuário, grupo e outros, nesta ordem. Esses dígitos representam um caminho para números binários que, aqui, servem para <i>"ligar" e "desligar"</i> as permissões.

Vamos lá, parece complicado porém é mais simples do que aparenta. Vamos com um pouquinho de teoria dos números para entender a questão: nosso sistema de numeração é chamado <b>_decimal_</b> porque (não por coincidência) <b>é organizado por grupos de dez algarismos que vão de 0 a 9</b>. No caso dos <b>números binários</b>, como o nome indica, <b>utilizamos dois algarismos, que são 0 e 1</b>. Então, no _chmode_ podemos entender que <b>os dígitos 0 e 1 funcionam como um interruptor</b>, onde o 0 _desliga_ uma permissão e o 1 _liga_ a permissão.

Vamos conferir a tabela dos códigos e os números a que estão ligados:

	--- = 000 ( 0 | Todos Acessos Negados )
	--x = 001 ( 1 | Somente Execução )
	-w- = 010 ( 2 | Somente Escrita )
	-wx = 011 ( 3 | Somente Escrita e Execução )
	r-- = 100 ( 4 | Somente Leitura )
	r-x = 101 ( 5 | Somente Leitura e Execução )
	rw- = 110 ( 6 | Somente Leitura e Escrita )
	rwx = 111 ( 7 | Acesso Total )
	
Perceba: no comando do _chmod_ chamamos a combinação <b>177</b>, o que significa que destinamos a _posição_ <b>1</b> ao usuário. Consultando na tabela, vemos que se trata do código binário 001, que estabelece que o usuário tem permissão apenas para a execução do arquivo. Aqui é de fácil entendimento: a posição está ordenada por <b>rwx (leitura, escrita, execução)</b>, o código binário 001 indica que leitura e escrita estão com a chave na _posição zero_, ou seja, _desligadas_, enquanto o numéro 1 na posição da execução diz que _está "ligada"_, portanto _permitida_ ao usuário.

Como repetimos o <b>7</b> nas duas posições seguintes no comando _chmode_, vemos que se refere ao "chaveamento" 111, _"ligado, ligado, ligado"_, <b>permitindo leitura, escrita e execução do arquivo a grupo e outros usuários, respectivamente.</b>

Agora vem o pulo do gato: <b>como relacionamos os códigos binários (100, 010, 011, etc) aos números de índice (0 a 7)?</b>

Vamos com mais um pouquinho de teoria dos números! Dizemos que nossos números são <b>posicionais</b>. Ou seja o 1 não necessariamente é menor que o 3. Isso depende da posição em que ele ocupa em um número. Vejamos com um exemplo: todos concordamos com a afirmação "100 > 30", embora os algarismos 1 e 0 sejam menores que o algarismo 3, as posições que ocupam no número 100 indicam que este é maior que 30. Que posições são essas?

Aprendemos lá no primário: unidade, dezena, centena, etc. Essas são as posições e o valor numérico depende da _posição_ que um algarismo ocupa nessa arquitetura. Podemos "desmembrar" um número como uma expressão que envolve soma, produto e potenciação.

Rememorando as <b>regras de potenciação</b>: _se temos um número base elevado à zero, o resultado é 1,_ Logo <b>10⁰ = 1</b>. Portanto se temos um número na casa das unidades, 8, por exemplo. Podemos escrever 8 como <b>8x10⁰</b>, visto que <b>8x1 = 8</b>. São duas formas de representarmos o mesmo número. _Se elevarmos um número qualquer a potência 1, teremos como resultado o próprio número_. Ou seja, <b>10¹ = 10</b>. Vamos pensar, então como podemos escrever o número 18...

	18 = 1x10¹ + 8x10⁰
	
Vamos lá, o raciocínio é o seguinte: <b>1 x 10¹ é igual a 10 e 8x10⁰=8, como já vimos. Se somamos 10+8, chegamos à 18</b>. Isso funciona a cada casa decimal que o número "cresce", multiplicando por uma potência que aumenta uma unidade a cada casa. Poderíamos, por exemplo escrever o número 3026:

	3026 = 3x10³ + 0x10² + 2x10¹ + 6x10⁰

Com os números binários, _o raciocínio é o mesmo_, com as essenciais diferenças: por cada posição só podemos utilizar os algarismos 0 e 1 e por conta disso a base da potência de cada casa é o número 2 (duas opções, certo?).

Então, por exemplo, o código binário que se refere à permissão -wx (somente Escrita e Execução), podemos ver na tabela é o 011. Vamos representar esse número como _uma expressão envolvendo potências de 2_. Contando da direita para esquerda os índices das potências _crescem_, começando pelo zero:

	011 = 0x2² + 1x2¹ + 1x2⁰
	
resolvendo a expressão teremos:
	
	011 = 0 + 2 + 1 = 3
	
Consultando na tabela vemos que 3 é exatamente o índice dessa posição das "chaves de permissão". O raciocínio se estende aos demais números:

	000 = 0x2² + 0x2¹ + 0x2⁰ = 0
	001 = 0x2² + 0x2¹ + 1x2⁰ = 1
	010 = 0x2² + 1x2¹ + 0x2⁰ = 2
	011 = 0x2² + 0x2¹ + 0x2⁰ = 3
	100 = 1x2² + 0x2¹ + 0x2⁰ = 4
	101 = 1x2² + 0x2¹ + 1x2⁰ = 5
	110 = 1x2² + 1x2¹ + 0x2⁰ = 6
	111 = 1x2² + 1x2¹ + 1x2⁰ = 7
	
E a gente dizia na escola que Matemática não serve pra nada... rs

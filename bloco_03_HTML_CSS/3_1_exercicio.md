
# Construindo seu primeiro Portfólio Web!

Antes de começar, tenha em mente que, por estar utilizando o GitHub Pages, a maneira como você versionará seu código do exercício de hoje (e dos próximos dois dias) é um pouco diferente da forma como o realizará no decorrer do curso. Para os exercícios relacionados ao seu Portfólio Web, você não utilizará seu diretório `trybe-exercicios`.

Você deve seguir as instruções a seguir e fazer o setup para o exercício de hoje:

>1. Crie um novo diretório onde você vai desenvolver o seu portfólio. É importante que ele seja criado fora do seu diretório de exercícios , pois a sua manutenção daqui em diante será feita em outro ambiente;
>   
>2. Inicie um novo repositório local com Git no diretório que você criou na etapa 1;
>
>3. Crie um arquivo index.html ;
>
>4. Para executar o seu código enquanto o desenvolve, utilize a extensão Live Server . Para saber mais sobre ela acesse nosso conteúdo sobre isso.

--------------------------

## Requisitos


Seu Portfólio Web deve ter as seguintes informações:

+ Seu nome completo;
+ Uma foto atual sua, acompanhada de um texto alternativo, que deve ser a descrição da foto que você está usando;
+ Uma breve descrição sobre você, destacando algumas informações como nacionalidade e a cidade/estado onde mora;
+ Uma lista de habilidades que você possui, com destaque para aquela de que você mais se orgulha;
+ Um link interno para a sua foto;
+ Um link externo para algum blog de que você goste, que abra em uma nova aba;
+ Partes do seu portfólio destacadas com negrito e/ou itálico;
+ Um índice com links internos para as diferentes seções do seu portfólio.


> ### Dica:
>
> Parabéns, você aprendeu Git ! Agora, sempre que você finalizar um dos requisitos, faça um novo commit , assim você mantém o histórico das alterações e deixa o código organizado.

--------------------------

# Resultado

Segui o passo a passo indicado e incluí todo o conteúdo solicitado. Criei em minha pasta de Documentos, a pasta *portfolio*. A partir desta, iniciei como um repositório git com o comando `git init`.

Além do arquivo `index.html`, criei uma pasta para os arquivos de imagem, onde inseri meu arquivo de foto de perfil.

No documento html efetuei as solicitações do exercício, utilizando as tags necessárias. Ao término, adicionei ao `stage` os arquivos para **commit**, através do comando `git add .`.

Realizei o **commit** das alterações, marcando como "versão inicial de meu portfolio".

Após o **commit**, criei um novo repositório em minha conta github. Utilizei como nome do repositório: [lobotelho22.github.io](https://lobotelho22.github.io).

Tal passo é necessário para criar uma GitHub Page. Para iniciar a troca de arquivos entre meu repositório git local (_master_) e o remoto (_lobotelho22.github.io), realizei o comando:

> `git remote add portfolio git@github.com:lobotelho22/lobotelho22.github.io.git`

A intenção foi fazer a ligação entre os repostiórios local e remoto, apelidando o repositório remoto como *portfolio*, afim de diferenciar do tradicional *origin*.

Cumprido esse passo, efetuamos nosso primeiro `push`, subindo para o repositório remoto os arquivos editados no repositório local.

> `git push -u portfolio master`

Como o processo ocorreu sem problemas, a primeira versão de nosso portfolio está disponível no link a seguir:

> [https://lobotelho22.github.io](https://lobotelho22.github.io)

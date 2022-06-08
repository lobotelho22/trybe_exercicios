import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

function Contents(contentArray) {
  const contentList = contentArray.map((content) =>
    //const { conteudo, bloco, status} = content;
    <li key={content.bloco}>
      <em>O Conteúdo é:</em> {content.conteudo} <br></br>
      <em>O Status é:</em> {content.status}<br></br>
      <em>Bloco:</em> {content.bloco}
    </li>
  );
  return <ul>{contentList}</ul>
}

// console.log(Contents(conteudos));

class Content extends React.Component {
    render () {
        return (<div className="mainDiv">{Contents(conteudos)}</div>)
    }
}

export default Content
import React from 'react';

const BotaoUnidades = () => {
  function preencheTabela() {
    var node = document.getElementById('minhaTabelaContent');
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }

    var tabela = (document.getElementById('minhaTabela').style.display =
      'block');
    const URL = `https://my-json-server.typicode.com/tractian/fake-api/units`;
    fetch(URL)
      .then((resposta) => resposta.json())
      .then((data) => {
        var tableContent = document.getElementById('minhaTabelaContent');
        var titulo1 = document.getElementById('Titulo1');
        var titulo2 = document.getElementById('Titulo2');
        var titulo3 = document.getElementById('Titulo3');
        var titulo4 = document.getElementById('Titulo4');
        var titulo5 = document.getElementById('Titulo5');
        var titulo6 = document.getElementById('Titulo6');
        var titulo7 = document.getElementById('Titulo7');
        var titulo8 = document.getElementById('Titulo8');
        var titulo9 = document.getElementById('Titulo9');
        var titulo10 = document.getElementById('Titulo10');
        var titulo11 = document.getElementById('Titulo11');
        var titulo12 = document.getElementById('Titulo12');
        var titulo13 = document.getElementById('Titulo13');

        titulo1.innerText = 'CompanyId';
        titulo2.innerText = 'Id';
        titulo3.innerText = 'Nome';
        titulo4.innerText = '';
        titulo5.innerText = '';
        titulo6.innerText = '';
        titulo7.innerText = '';
        titulo8.innerText = '';
        titulo9.innerText = '';
        titulo10.innerText = '';
        titulo11.innerText = '';
        titulo12.innerText = '';
        titulo13.innerText = '';

        for (var i = 0; i < data.length; i++) {
          var row =
            '<tr>' +
            '<td>' +
            data[i].companyId +
            '</td>' +
            '<td>' +
            data[i].id +
            '</td>' +
            '<td>' +
            data[i].name +
            '</td>' +
            '</tr>';
          tableContent.innerHTML += row;
        }
      });
  }

  return (
    <>
      <button title="Unidades" onClick={preencheTabela}>
        <h2>Verificar Unidades</h2>
      </button>
    </>
  );
};
export default BotaoUnidades;

import React from 'react';

const BotaoUsuarios = () => {
  function preencheTabela() {
    var node = document.getElementById('minhaTabelaContent');
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }

    var tabela = (document.getElementById('minhaTabela').style.display =
      'block');
    const URL = `https://my-json-server.typicode.com/tractian/fake-api/users`;
    fetch(URL)
      .then((resposta) => resposta.json())
      .then((data) => {
        var tableContent = document.getElementById('minhaTabelaContent');
        console.log(data);
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
        titulo2.innerText = 'Email';
        titulo3.innerText = 'Id';
        titulo4.innerText = 'Name';
        titulo5.innerText = 'UnityId';
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
            data[i].email +
            '</td>' +
            '<td>' +
            data[i].id +
            '</td>' +
            '<td>' +
            data[i].name +
            '</td>' +
            '<td>' +
            data[i].unitId +
            '</td>' +
            '</tr>';
          tableContent.innerHTML += row;
        }
      });
  }

  return (
    <>
      <button title="Usuários" onClick={preencheTabela}>
        <h2>Verificar Usuários</h2>
      </button>
    </>
  );
};
export default BotaoUsuarios;

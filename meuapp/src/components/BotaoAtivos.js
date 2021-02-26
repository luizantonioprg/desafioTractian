import React from 'react';

const BotaoAtivos = () => {
  function preencheTabela() {
    var node = document.getElementById('minhaTabelaContent');
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }

    var tabela = (document.getElementById('minhaTabela').style.display =
      'block');

    const URL = `https://my-json-server.typicode.com/tractian/fake-api/assets`;
    fetch(URL)
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
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
        titulo2.innerText = 'HealthScore';
        titulo3.innerText = 'Id';
        titulo4.innerText = 'Image';
        titulo5.innerText = 'lastUptimeAt';
        titulo6.innerText = 'totalCollectsUptime';
        titulo7.innerText = 'totalUptime';
        titulo8.innerText = 'Model';
        titulo9.innerText = 'Name';
        titulo10.innerText = 'Sensors';
        titulo11.innerText = 'Max Temp';
        titulo12.innerText = 'Status';
        titulo13.innerText = 'UnityId';

        for (var i = 0; i < data.length; i++) {
          var row =
            '<tr>' +
            '<td>' +
            data[i].companyId +
            '</td>' +
            '<td>' +
            data[i].healthscore +
            '</td>' +
            '<td>' +
            data[i].id +
            '</td>' +
            '<td>' +
            data[i].image +
            '</td>' +
            '<td>' +
            data[i].metrics.lastUptimeAt +
            '</td>' +
            '<td>' +
            data[i].metrics.totalCollectsUptime +
            '</td>' +
            '<td>' +
            data[i].metrics.totalUptime +
            '</td>' +
            '<td>' +
            data[i].model +
            '</td>' +
            '<td>' +
            data[i].name +
            '</td>' +
            '<td>' +
            data[i].sensors[0] +
            '</td>' +
            '<td>' +
            data[i].specifications.maxTemp +
            '</td>' +
            '<td>' +
            data[i].status +
            '</td>' +
            '<td>' +
            data[i].unityId +
            '</td>' +
            '</tr>';
          tableContent.innerHTML += row;
        }
      });
  }
  return (
    <>
      <button title="Ativos" onClick={preencheTabela}>
        <h2>Verificar Ativos</h2>
      </button>
    </>
  );
};
export default BotaoAtivos;

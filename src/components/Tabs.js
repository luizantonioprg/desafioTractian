import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// const options = {
//   chart: {
//     type: 'pie',
//   },
//   series: [
//     {
//       data: [1, 2, 3],
//     },
//   ],
// };
const ExibirTabs = () => {
  function buscaRapida() {
    var selecionado = document.getElementById('categoriasBuscaRapida').value;
    var id = document.getElementById('idBuscaRapida').value;

    if (selecionado == 'usuarios') {
      var URL =
        `https://my-json-server.typicode.com/tractian/fake-api/users/` + id;
    } else if (selecionado == 'unidades') {
      var URL =
        `https://my-json-server.typicode.com/tractian/fake-api/units/` + id;
    } else if (selecionado == 'ativos') {
      var URL =
        `https://my-json-server.typicode.com/tractian/fake-api/assets/` + id;
    } else {
      var URL =
        `https://my-json-server.typicode.com/tractian/fake-api/companies/` + id;
    }

    fetch(URL)
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
        var jsonStr = JSON.stringify(data, undefined, 2);
        document.getElementById('buscaResposta').innerHTML = jsonStr;
      });
  }
  function setaGrafico() {
    var id = document.getElementById('idBuscaRapida').value;
    var URL =
      `https://my-json-server.typicode.com/tractian/fake-api/assets/` + id;
    fetch(URL)
      .then((resposta) => resposta.json())
      .then((data) => {
        var healthScore = data.healthscore;
        console.log(healthScore);
        // GRAFICO CONFIG
        var healthScoreVar = data.healthscore;
        sessionStorage.setItem('healthScore', healthScoreVar);
        sessionStorage.getItem('healthScore');

        window.location.href = '/graphic.html';
      });
  }
  function verificaSelect() {
    var selecionado = document.getElementById('categoriasBuscaRapida').value;
    var botaoGrafico = document.getElementById('botaoGrafico');
    if (selecionado == 'ativos') {
      botaoGrafico.classList.remove('disabled');
      botaoGrafico.classList.add('enabled');
    } else {
      botaoGrafico.classList.remove('enabled');
      botaoGrafico.classList.add('disabled');
    }
  }
  return (
    <>
      <h2 id="buscaRapidaH2">Busca Rápida</h2>
      <div class="buscaContainer">
        <select
          name="categoriasBuscaRapida"
          id="categoriasBuscaRapida"
          onClick={verificaSelect}
        >
          <option value="usuarios">Usuarios</option>
          <option value="unidades">Unidades</option>
          <option value="ativos">Ativos</option>
          <option value="empresas">Empresas</option>
        </select>
        <input type="text" id="idBuscaRapida" placeholder="ID"></input>
        <button title="buscaRapida" onClick={buscaRapida}>
          <h2>Pesquisar</h2>
        </button>
        <button
          title="buscaRapida"
          id="botaoGrafico"
          class="disabled"
          onClick={setaGrafico}
        >
          <h2>Gráfico</h2>
        </button>
      </div>
      <pre id="buscaResposta"></pre>
    </>
  );
};

export default ExibirTabs;

import React from 'react';

const ExibirTabela = () => {
  return (
    <>
      <div className="container">
        <table id="minhaTabela">
          <thead>
            <tr>
              <th id="Titulo1"></th>
              <th id="Titulo2"></th>
              <th id="Titulo3"></th>
              <th id="Titulo4"></th>
              <th id="Titulo5"></th>
              <th id="Titulo6"></th>
              <th id="Titulo7"></th>
              <th id="Titulo8"></th>
              <th id="Titulo9"></th>
              <th id="Titulo10"></th>
              <th id="Titulo11"></th>
              <th id="Titulo12"></th>
              <th id="Titulo13"></th>
            </tr>
          </thead>
          <tbody id="minhaTabelaContent"></tbody>
        </table>
      </div>
    </>
  );
};
export default ExibirTabela;

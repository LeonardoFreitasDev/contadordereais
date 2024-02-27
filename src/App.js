import './App.css';
import { useState } from 'react';

function App() {

  //Notas
  const [notaDuzentos, setNotaDuzentos] = useState(0);
  const [notaCem, setNotaCem] = useState(0);
  const [notaCinquenta, setNotaCinquenta] = useState(0);
  const [notaVinte, setNotaVinte] = useState(0);
  const [notaDez, setNotaDez] = useState(0);
  const [notaCinco, setNotaCinco] = useState(0);
  const [notaDois, setNotaDois] = useState(0);

  //Moedas
  const [moedaUm, setMoedaUm] = useState(0);
  const [moedaCinquenta, setMoedaCinquenta] = useState(0);
  const [moedaVinteECinco, setMoedaVinteECinco] = useState(0);
  const [moedaDez, setMoedaDez] = useState(0);
  const [moedaCinco, setMoedaCinco] = useState(0);


  const somaValor = (event) => {
    if (event.target.name === 'nota-duzentos') {
      setNotaDuzentos(event.target.value);
    }
    if (event.target.name === 'nota-cem') {
      setNotaCem(event.target.value);
    }
    if (event.target.name === 'nota-cinquenta') {
      setNotaCinquenta(event.target.value);
    }
    if (event.target.name === 'nota-vinte') {
      setNotaVinte(event.target.value);
    }
    if (event.target.name === 'nota-dez') {
      setNotaDez(event.target.value);
    }
    if (event.target.name === 'nota-cinco') {
      setNotaCinco(event.target.value);
    }
    if (event.target.name === 'nota-dois') {
      setNotaDois(event.target.value);
    }

    //Moedas
    if (event.target.name === 'moeda-um') {
      setMoedaUm(event.target.value);
    }
    if (event.target.name === 'moeda-cinquenta') {
      setMoedaCinquenta(event.target.value);
    }
    if (event.target.name === 'moeda-vinte-e-cinco') {
      setMoedaVinteECinco(event.target.value);
    }
    if (event.target.name === 'moeda-dez') {
      setMoedaDez(event.target.value);
    }
    if (event.target.name === 'moeda-cinco') {
      setMoedaCinco(event.target.value);
    }
  }

  function somatorio() {
    return notaDuzentos * 200 + notaCem * 100 + notaCinquenta * 50 + notaVinte * 20 + notaDez * 10 + notaCinco * 5 + notaDois * 2 + moedaUm * 1 + moedaCinquenta * 0.50 + moedaVinteECinco * 0.25 + moedaDez * 0.1 + moedaCinco * 0.05;
  }

  return (
    <div className='App'>
      <h1>Contador de Caixa</h1>
      <div className='container'>

        <div className='content'>
        <div className='card'>
            <label htmlFor='nota-duzentos'>R$ 200,00: </label>
            <input name='nota-duzentos' type='number' onChange={somaValor}></input>
            <span> Total: R$ {notaDuzentos * 200}</span>
          </div>
          <div className='card'>
            <label htmlFor='nota-cem'>R$ 100,00: </label>
            <input name='nota-cem' type='number' onChange={somaValor}></input>
            <span> Total: R$ {notaCem * 100}</span>
          </div>

          <div className='card'>
            <label htmlFor='nota-cinquenta'>R$ 50: </label>
            <input name='nota-cinquenta' type='number' onChange={somaValor}></input>
            <span> Total: {notaCinquenta * 50}</span>
          </div>

          <div className='card'>
            <label htmlFor='nota-vinte'>R$ 20,00: </label>
            <input name='nota-vinte' type='number' onChange={somaValor}></input>
            <span> Total: R$ {notaVinte * 20}</span>
          </div>

          <div className='card'>
            <label htmlFor='nota-dez'>R$ 10,00: </label>
            <input name='nota-dez' type='number' onChange={somaValor}></input>
            <span> Total : R$ {notaDez * 10}</span>
          </div>

          <div className='card'>
            <label htmlFor='nota-cinco'>R$ 5,00: </label>
            <input name='nota-cinco' type='number' onChange={somaValor}></input>
            <span> Total: R$ {notaCinco * 5}</span>
          </div>

        </div>

        <div className='content'>
        <div className='card'>
            <label htmlFor='nota-dois'>R$ 2,00:</label>
            <input name='nota-dois' type='number' onChange={somaValor}></input>
            <span> Total: R$ {notaDois * 2}</span>
          </div>
          <div className='card'>
            <label htmlFor='moeda-um'>R$ 1,00: </label>
            <input name='moeda-um' type='number' onChange={somaValor}></input>
            <span> Total: R$ {moedaUm * 1}</span>
          </div>

          <div className='card'>
            <label htmlFor='moeda-cinquenta'>Moedas de cinquenta centavos: </label>
            <input name='moeda-cinquenta' type='number' onChange={somaValor}></input>
            <span> Total de moedas de cinquenta centavos: {moedaCinquenta * 0.5}</span>
          </div>

          <div className='card'>
            <label htmlFor='moeda-vinte-e-cinco'>Moedas de vinte e cinco centavos: </label>
            <input name='moeda-vinte-e-cinco' type='number' onChange={somaValor}></input>
            <span> Total de moedas de vinte e cinco centavos: {moedaVinteECinco * 0.25}</span>
          </div>

          <div className='card'>
            <label htmlFor='moeda-dez'>Moedas de dez centavos: </label>
            <input name='moeda-dez' type='number' onChange={somaValor}></input>
            <span> Total de moedas de dez centavos: {moedaDez * 0.1}</span>
          </div>

          <div className='card'>
            <label htmlFor='moeda-cinco'>Moedas de cinco centavos: </label>
            <input name='moeda-cinco' type='number' onChange={somaValor}></input>
            <span> Total de moedas de cinco centavos: {moedaCinco * 0.05}</span>
          </div>
        </div>
      </div>
      <div>
        <span>Total: R$ {somatorio()}</span>
      </div>
    </div>
  );
}

export default App;

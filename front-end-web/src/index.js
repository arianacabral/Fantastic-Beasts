import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route} from "react-router-dom" // npm i react-router-dom

const lista = [
  /* Cards web  
        id: identificador 
        nome: nome do card 
        imagemUrl: URL da imagem
        */
  {
    id: 1,
    nome: "NIFFER",
    imagemUrl:
      "https://i.pinimg.com/originals/fe/35/42/fe3542497d4183a2c5cf2d5253636a4d.jpg",
  },
  {
    id: 2,
    nome: "BOWTRUCKLWE",
    imagemUrl:
      "https://i.pinimg.com/originals/eb/32/37/eb32371bbf43081bec727de610f8d629.jpg",
  },
  {
    id: 3,
    nome: "OCCAMY",
    imagemUrl:
      "https://i.pinimg.com/736x/09/f4/c0/09f4c054da9dffd002f4cba6389ac7d7.jpg",
  },
  {
    id: 4,
    nome: "DEMIGUISE",
    imagemUrl:
      "https://i.pinimg.com/originals/1c/16/09/1c1609e614a8ea33dcd451ac974be935.jpg",
  },
];

function Item(props) {
  const indice = props.indice;

  const item = lista[indice];

  return (
    <a href={"visualizar/" + indice} className = "item__title">
    <div className="item">
    <h1 className="item__title">{item.nome}</h1>
      <img src={item.imagemUrl} alt={item.nome} width="250" />
      </div>
     </a>
  );
}

function Lista() {
  return (
    <div className="lista">
      {lista.map(
        (
          item,
          index // iteração >> map
        ) => (
          <Item indice={index} key={index} />
        )
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://freepikpsd.com/media/2019/10/home-png-white-4-Transparent-Images.png"
          alt="Home"
          width="25"
        />
      </a>
    </header>
  );
}

function Footer() {
  return <footer className="footer"> Feito com ❤️. </footer>;
}

function ListarItem() {
  return <div>
    <Lista />
  </div>;
}

function VisualizarItem(props) {
  
  //console.log(props);

  return <div>
    <Item indice={props.match.params.id}/>
  </div>
}

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ListarItem} />

        <Route path="/visualizar/:id" component={VisualizarItem} />
      </Switch>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root") // elemento html
);
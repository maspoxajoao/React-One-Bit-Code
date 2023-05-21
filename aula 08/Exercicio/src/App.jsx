import Card from "./components/Cards";
import posterImg from "./assets/imagem.jpg";
import posterImg2 from "./assets/filme-2.jpg";
import posterImg3 from "./assets/filme-3.jpg";

function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={posterImg} />
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={posterImg2} />
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={posterImg3} />
    </>
  );
}

export default App;

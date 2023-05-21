import styles from "./styles.module.css";
import Button from "../Button";

export default function Card({title, posterImg}) {
  return (
    <div className={styles.container}>
      <img src={posterImg} className={styles.poster} />
      <div>
        <h2>{title}</h2>
        <p>
          Um pôster decorativo épico do filme Wtar Wars, com moldura de MDF e
          tamanho A3. Uma ótima recordacção de um dos mais icônicos filmes de
          todos os tempos. Este clássico pôster trará aventura, nostalgia e a
          magia de Star Wars para qualquer lugar que voce decidir pendurar. Não
          perca a chance de acidionar essa linda memória ao seu acervo!
        </p>
        <Button text="Comprar Agora" />
      </div>
    </div>
  );
}

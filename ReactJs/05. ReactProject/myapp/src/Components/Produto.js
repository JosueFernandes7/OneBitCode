import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Produto.module.css";

function Produto() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [produto, setProduto] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchProduto = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
        setLoading(false);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    };
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  console.log(produto);
  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title={produto.nome} description={produto.descricao} />
      <div>
        {produto.fotos.map(({ src, titulo }) => (
          <img src={src} alt={titulo} key={src}></img>
        ))}
      </div>
      <div>
        <h1 className={styles.nome}>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;

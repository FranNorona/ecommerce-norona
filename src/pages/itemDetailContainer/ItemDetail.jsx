import CounterContainer from "../../components/counter/CounterContainer";
import "./itemdetail.css";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="itemDetailContainer">
        <div className="imageContainer">
          <div className="imageSmallSize">
            <img src={item.img} alt="imageProduct" />
          </div>
          <div className="imageBigSize">
            <img src={item.img} alt="imageProduct" />
          </div>
        </div>
        <div className="titleContainer">
          <div className="titleAndDescript">
            <h1>{item.title}</h1>
            <div className="stars">
              <img src="#" alt="#" />
            </div>
            <p>{item.description}</p>
          </div>
          <div className="buttonAndOfert">
            <h2>OFERTA</h2>
            <CounterContainer />
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

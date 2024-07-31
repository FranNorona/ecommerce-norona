import CounterContainer from "../../components/counter/CounterContainer";
import "./itemdetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
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
              <img
                src="https://res.cloudinary.com/dmhprmqnk/image/upload/v1720132440/rating-24185_1280_bf8wml.png"
                alt="starsrating"
              />
            </div>
            <p>{item.description}</p>
          </div>
          <div className="buttonAndOfert">
            <h2>OFERTA VALIDA HASTA 30/12</h2>
            <CounterContainer
              onAdd={onAdd}
              stock={item.stock}
              initial={initial}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

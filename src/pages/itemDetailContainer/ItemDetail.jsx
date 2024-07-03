import CounterContainer from "../../components/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div style={{ minHeight: "70vh" }}>
        <h2>{item.title}</h2>
        <CounterContainer />
      </div>
    </>
  );
};

export default ItemDetail;

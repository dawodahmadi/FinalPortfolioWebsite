import "../../components/Github/Loader.css";

const Loader = () => {
  return (
    <>
      <div className="lds-ring mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
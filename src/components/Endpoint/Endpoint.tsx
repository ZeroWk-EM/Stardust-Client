import { useEndpoint } from "../../hook/useEndpoint";
import CardEndpoint from "./Card/CardEndopoint";
const Endpoint = () => {
  let [endpointCard] = useEndpoint({});
  return (
    <div className="container px-4 py-5 text-white" id="custom-cards">
      <h2 className="pb-2 border-bottom">Endpoint</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {endpointCard && endpointCard.map((item,index)=>{
          return (
            <CardEndpoint key={Math.random()} title={item.title} backgroundIMG={item.backgroundIMG} icon={item.icon} counter={item.counter} link={item.link}/>
          )
        })}
      </div>
    </div>
  );
};

export default Endpoint;

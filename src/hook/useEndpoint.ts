import { useState, useEffect } from "react";
import axios from "axios";
import { EndpointCardProps } from "../components/Endpoint/Card/CardEndopoint";
const urlEndpoint = "http://localhost:5000/v1/endpoint";

export const useEndpoint = (
  props: EndpointCardProps
): [EndpointCardProps[]] => {
  const [endpointCard, setndpointCard] = useState<EndpointCardProps[]>([]);
  useEffect(() => {
    axios
      .get<EndpointCardProps>(`${urlEndpoint}`)
      .then((response: any) => {
        setndpointCard(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return [endpointCard];
};

import { ShortLink } from "../types";

const BASE_API_URL = "https://api.shrtco.de/v2";
const Server_Herokuapp ="https://cors-anywhere.herokuapp.com";


const request = async (
    path: string,
    method: Method = "GET"
  ): Promise<IResponse> => {
    try {
      const response = await fetch(`${Server_Herokuapp}/${BASE_API_URL}/shorten?url=${path}`, {
        method,
        headers: { "Content-Type": "application/json" },
      });
      const responseBody = await response.json();

      return {response:responseBody, error:null};
    } catch (error) {
      return  {response:null, error} ;
    }
  };
  
  const get = (path: string) => {
    return request(path);
  };

  type IResponse =
  | { response: ShortLink; error: null }
  | { response: null; error: Error };
  
  const api = { get };
  
  type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  
export {api}
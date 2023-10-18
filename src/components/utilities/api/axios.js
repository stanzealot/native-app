import axios from "axios";

export const apiGet = (url, conf = {}, auth = true,customHeaders={}) => {
    const defaultHeaders ={
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
    const config = {
      ...conf,
      headers: {
        ...defaultHeaders,
        ...customHeaders,
      },
    };
    return axios.get(url, config);
};

export const apiPost = (url, data, conf = {}, auth = true,customHeaders={}) => {
    // const defaultHeaders ={
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    // }
    const config = {
      ...conf,
      headers: {
        ...customHeaders,
      },
    };
    return axios.post(url, data, config);
};
  

  //settings
// const baseUrl = "1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/";
export const apiGetSet = (url, conf = {}, auth = true) => {
const config = {
    ...conf,
    headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
};
return axios.get(url, config);
};

// settings

export const apiGett = (url, conf = {}, auth = true, customHeaders = {}, customConfig = {}) => {
    // const defaultHeaders = {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // };
  
    const config = {
      ...customConfig,
      ...conf,
      headers: { 
        ...customHeaders,
      },
    };
  
    return axios.get(url, config);
};
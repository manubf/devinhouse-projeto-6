import { useEffect, useRef } from "react";
import axios from "axios";

import { useKeycloak } from "@react-keycloak/web";

export const useAxios = () => {
  const axiosInstance = useRef();
  const { keycloak, initialized } = useKeycloak();
  const kcToken = keycloak?.token ?? "";
  const baseURL = process.env.REACT_APP_URL;

  useEffect(() => {
    axiosInstance.current = axios.create({
      baseURL,
      headers: {
        Authorization: initialized ? `Bearer ${kcToken}` : undefined,
      },
    });

    return () => {
      axiosInstance.current = undefined;
    };
  }, [baseURL, initialized, kcToken]);

  // const callApi = useCallback(() => {
  // 	!!axiosInstance.current && axiosInstance.current.get("/user");
  // }, [axiosInstance]);

  const getEndpoint = async (path) => {
    try {
      const response = await axiosInstance?.current?.get(path);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const postEndpoint = async (path, data) => {
    try {
      const response = await axiosInstance?.current?.post(path, data); // JSON.stringfy
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const putEndpoint = async (path, data) => {
    try {
      const response = await axiosInstance?.current?.put(path, data); // JSON.stringfy
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEndpoint = async (path) => {
    try {
      await axiosInstance?.current?.delete(path);
    } catch (error) {
      console.error(error);
    }
  };

  // return (
  //   !!axiosInstance.current &&
  return {
    getEndpoint,
    postEndpoint,
    putEndpoint,
    deleteEndpoint,
  };
  // );
};

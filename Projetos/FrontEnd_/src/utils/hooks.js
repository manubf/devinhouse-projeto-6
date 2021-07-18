import { useEffect, useRef } from "react";
import axios from "axios";

import { useKeycloak } from "@react-keycloak/web";

const baseURL = "http://localhost:8080"; // alterar

export const useAxios = () => {
  const axiosInstance = useRef();
  const { keycloak, initialized } = useKeycloak();
  const kcToken = keycloak?.token ?? "";

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
  }, [initialized, kcToken]);

  // return axiosInstance;

  const getProcess = async () => {
    try {
      const response = await axiosInstance.current.get("/process");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    !!axiosInstance.current && {
      getProcess,
    }
  );
};

import { useEffect, useRef, useCallback } from "react";
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

	const getEndpoint = useCallback(
		async (path) => {
			try {
				const response = await axiosInstance?.current?.get(path);
				return response.data;
			} catch (error) {
				console.error(error);
			}
		},
		[axiosInstance]
	);

	const postEndpoint = async (path, data) => {
		try {
			const response = await axiosInstance?.current?.post(path, data);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	};

	const putEndpoint = async (path, data) => {
		try {
			await axiosInstance?.current?.put(path, data);
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

	return {
		getEndpoint,
		postEndpoint,
		putEndpoint,
		deleteEndpoint,
	};
};

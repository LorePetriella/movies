import { SignUpPayload } from "../types";
import { fireBase } from "../utils/axios";

const add = async (userPrueba: SignUpPayload) => {
  const response = await fireBase.post("/users.json", userPrueba);

  return response.data;
};

const getAll = async () => {
  const response = await fireBase.get("/users.json");
  return response.data;
};

export const servicesUser = { add, getAll };

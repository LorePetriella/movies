import { mapToArray } from "../helpers/mapToArray";
import { SignUpPayload, User } from "../types";
import { fireBase } from "../utils/axios";

const add = async (userPrueba: SignUpPayload) => {
  const response = await fireBase.post("/users.json", userPrueba);

  return response.data;
};

const getAll = async (): Promise<User[]> => {
  const response = await fireBase.get("/users.json");
  return mapToArray(response.data);
};

const getBy = async (value: string, type: "email" | "sesiontoken") => {
  const users = await getAll();
  const user = users.find((user) => user[type] === value);
  return user;
};

const update = ({ id, ...rest }: Partial<User>) => {
  const response = fireBase.patch(`/users/${id}.json`, { ...rest });
};
export const servicesUser = { add, getAll, update, getBy };

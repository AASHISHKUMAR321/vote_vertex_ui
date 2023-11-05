import API from "@/configs/axios.config";
import { GetAllUserAPIResponse } from "@/types/user.type";

export const getAllUsers = async (): Promise<GetAllUserAPIResponse> => {
  const res = await API.get("/admin/getAllUsers");
  return res.data;
};

import API from "@/configs/axios.config";

export const getAllUsers = async () => {
  const res = await API.get("/admin/getAllUsers");
  console.log(res);
  return res.data;
};

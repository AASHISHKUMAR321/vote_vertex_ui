import { UIUser } from "@/interfaces/user.interface";
import { BaseAPIResponse } from "./index.type";

export type GetAllUserAPIResponse = BaseAPIResponse & {
  data?: UIUser;
};

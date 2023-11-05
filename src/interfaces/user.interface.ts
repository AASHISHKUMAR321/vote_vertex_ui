import { UserRole } from "@/enums/user.enum";

export interface UIUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role: UserRole;
  updateAt: Date;
  createdAt: Date;
}

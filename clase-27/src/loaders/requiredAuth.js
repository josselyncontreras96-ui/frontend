import { redirect } from "react-router-dom";
import { getProfile } from "../services/AuthService";

export const requiredAuth = async () => {
  try {
    await getProfile();
  } catch {
    return redirect("/login");
  }
};
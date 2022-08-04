import type User from "@/types/user.interface";
import axios from "axios";

export default async function getAllUsers(): Promise<User[] | null> {
  try {
    const response = await axios.get(
      "https://dummyapi.io/data/v1/user?limit=10",
      {
        headers: {
          "app-id": `62e939beeb3595baa8e7128d`,
        },
      }
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      console.error("Echec requête");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

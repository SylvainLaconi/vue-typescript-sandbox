import type User from "@/types/user.interface";
import axios from "axios";

export default async function getUserById(
  userId: string
): Promise<User | null> {
  try {
    const response = await axios.get(
      `https://dummyapi.io/data/v1/user/${userId}`,
      {
        headers: {
          "app-id": `62e939beeb3595baa8e7128d`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Echec requête");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

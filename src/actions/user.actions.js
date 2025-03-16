"use server";

import supabase from "@/_lib/supabase.client";
import { decrypt } from "@/_lib/utils";
import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = await cookies();
  const { value } = cookieStore.get("authToken");

  const {userID} = await decrypt(value);
  const { data ,error} = await supabase
    .from("users")
    .select()
    .eq("id", userID)
    .single();
  return data;
};

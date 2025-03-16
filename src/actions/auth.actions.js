'use server'
import supabase from "@/_lib/supabase.client";
import { createSession } from "@/_lib/utils";
import { hash, genSaltSync,compare } from "bcryptjs";
export async function signUp(values) {
  const { name, email, username, password } = values || {};
  const hashedPassword = await hash(password, genSaltSync());

  const { data, error } = await supabase
    .from("users")
    .insert({ name, email, username, password: hashedPassword })
    .select()
    .single();

  if (error) {
    return error?.message;
  }

  const userId = data.id;
  await createSession(userId);
}

export async function signIn(values) {

    const { email, password } = values || {};
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      .single();
     
      
    if (error) {
      return { error: error?.message };
    }
    if (data?.password) {
      const isValid = await compare(password, data.password);
      if (isValid) {
        const userId = data.id;
        await createSession(userId);
      } else {
        return { error: "Password is not matching" };
      }
    }
 
}

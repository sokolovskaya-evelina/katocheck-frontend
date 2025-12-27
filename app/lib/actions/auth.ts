"use server"
import { signIn } from "@/lib/auth"

export async function signInUser(values) {
  try {
    const res = await signIn("credentials", { email: values.email, password: values.password, redirect: false })
    return res
  } catch (e) {
    console.log(e)
  }
}
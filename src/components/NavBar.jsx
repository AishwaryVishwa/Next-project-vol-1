import { getUser } from "@/actions/user.actions";
import Link from "next/link";
import React from "react";
import ProfileSelect from "./ProfileSelect";

export default async function NavBar() {
  let res;
  try {
    res = await getUser();
  } catch (error) {
    console.log("error in navbar", error);
  }

  console.log(res);

  return (
    <div className="flex justify-between p-4">
      <div>
        <Link href="/">
          <h3>LOGO</h3>
        </Link>
      </div>

      {!res ? (
        <div className="flex gap-10 items-center">
          <Link
            className="bg-slate-100 text-black px-3 py-1 rounded"
            href="/login"
          >
            Login
          </Link>
          <Link href="/signup">Sign up</Link>
        </div>
      ) : (
        <>
        <ProfileSelect userData={res}/>
        </>
      )}
    </div>
  );
}

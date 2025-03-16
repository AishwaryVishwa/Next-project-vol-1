"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DefaultProfile from "../../public/assets/images/nanami_profile_img.jpg";
import { logoutUser } from "@/_lib/helpers";
import { deleteSession } from "@/_lib/utils";

export default function ProfileSelect({ userData }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className="relative">
      <span className="cursor-pointer" onClick={handleShowOptions}>
        <Image
          height={33}
          width={33}
          className="rounded-full"
          alt="image"
          src={userData?.profileImage || DefaultProfile}
        />
      </span>
      <AnimatePresence>
        {showOptions && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="max-h-40 p-2 min-w-40 rounded border border-white absolute right-[0.3rem] text-sm top-12 bg-[#082f49]"
          >
            <li>
                <button onClick={deleteSession}>
                    Logout
                </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

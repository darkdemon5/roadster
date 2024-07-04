import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "../routes";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-2xl right-0 top-[3.5rem] p-5 pt-0 bg-white border-b border-neutral-950 ">
          <ul className="grid gap-2">
            {routes.map((route) => {
              const { Icon } = route;

              return (
                <li
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                >
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center justify-center w-full p-5 rounded-xl bg-neutral-950"
                    href={route.href}
                  >
                    <span className="flex gap-1 text-lg">{route.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;

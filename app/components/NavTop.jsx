import styles from "@/styles/NavTop.module.css";
// import styles2 from '@/styles/NavLeft.module.css';
import Image from "next/image";
import Link from "next/link";

import Modal from "../components/Modal";
import NavLeftItems from "../components/NavLeftItems";

import { useRouter } from "next/router";
/* Temporary Modal Imports */
import FormGoogle from "../components/FormGoogle";
import flamesIcon from "../public/flames-icon.webp";
import { useModal } from "@/providers/modalProvider";

export default function NavTop() {
  const { modals, handleModal } = useModal();
  const router = useRouter();

  return (
    <>
      <nav className={styles.navTop}>
        <ul>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/flames-logo-white.webp"
                className={styles.logo}
                height="32"
                width="236"
                alt="Flames Agency"
              />
            </Link>
          </li>
          <li onClick={() => handleModal("modalBurgerMenu")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </li>
        </ul>
      </nav>

      <Modal
        id="modalBurgerMenu"
        isOpen={modals["modalBurgerMenu"]}
        setIsOpen={handleModal}
      >
        <NavLeftItems />
      </Modal>
    </>
  );
}

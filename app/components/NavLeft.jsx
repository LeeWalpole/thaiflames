import styles from '@/styles/NavLeft.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import { useState } from 'react'
import { useRouter } from 'next/router'

/* Temporary Modal Imports */
import Modal from '../components/Modal'
import NavLeftItems from '../components/NavLeftItems'


// Send data to Google Form
import FormGoogle from '../components/FormGoogle'


import flamesIcon from '../public/flames-icon.webp'
import {useModal} from "@/providers/modalProvider";

export default function NavLeft () {


  const { modals, handleModal} = useModal();
    console.log(modals)

  const router = useRouter();
 console.log(router)
    return ( <>

<div className={styles.navLeft}>
    <nav className={styles.sticky}>

    <li className="button" onClick={() => handleModal("modalBurgerMenu")}>Popup 1</li>

<Modal id="modalBurgerMenu" isOpen={modals["modalBurgerMenu"]} setIsOpen={handleModal}>

<NavLeftItems/>

</Modal>

        <NavLeftItems />

      {/* <ul className='buttons'>
          <li onClick={() => handleModal("modalGoogleForm")} className='button'>GET PROMOTED</li>
      </ul> */}
   
      </nav>
    </div>


<Modal id="modalSidenavMore" isOpen={modals["modalSidenavMore"]} setIsOpen={handleModal}>
      <aside className="modal-popup modal-share">

          <section>
          <ul class="buttons-vertical">

          <li onClick={() => handleModal("modalSidenavMore")}>
            <Link class="icon-text-horizontal" href="/swr">
              <span class="icon-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
              </span>
              <span class="text-horizontal"><p>SWR</p></span>
              </Link>
            </li>

            <li onClick={() => handleModal("modalSidenavMore")}>
            <Link class="icon-text-horizontal" href="/test">
              <span class="icon-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
              </span>
              <span class="text-horizontal"><p>Test</p></span>
              </Link>
            </li>

            <li onClick={() => handleModal("modalSidenavMore")}>
            <Link class="icon-text-horizontal" href="/captainmarvel">
              <span class="icon-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
              </span>
              <span class="text-horizontal"><p>captainmarvel</p></span>
              </Link>
            </li>

            <li onClick={() => handleModal("modalSidenavMore")}>
            <Link class="icon-text-horizontal" href="/ignore">
              <span class="icon-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
              </span>
              <span class="text-horizontal"><p>ignore</p></span>
              </Link>
            </li>

            <li class="icon-text-horizontal" onClick={() => handleModal("modalComingSoon")}>
              <span class="icon-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

              </span>
              <span class="text-horizontal"><p>Message </p></span>
            </li>

            </ul></section>

            <section>
          <ul class="buttons-vertical">
            
            <li class="icon-text-horizontal" onClick={() => handleModal("modalSidenavMore")}>
              <span class="icon-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
              </span>
              <span class="text-horizontal"><p>Close</p></span>
            </li>
          </ul>
          </section>
      </aside>
</Modal>

<Modal id="modalGoogleForm" isOpen={modals["modalGoogleForm"]} setIsOpen={handleModal}>

<FormGoogle
  inputs={[

    {
      type: 'text',
      placeholder: 'Instagram',
      name: 'instagram',
      required: true,
    },
    {
      type: 'email',
      placeholder: 'Your Email',
      name: 'email',
      required: true,
    },
    {
      type: 'radio',
      placeholder: 'form_tags',
      name: 'form_tags',
      required: true,
      options: [
        { value: 'fan', label: 'I’m a Fan' },
        { value: 'model', label: 'I’m a Model' },
      ],
    },
  ]}
  formTitle="Join Flames"
  formDesc="Thailand’s Sexiest Promo Agency"
  buttonText="Join For Free"
  smallPrint="You must be aged 18+"
  formSuccessTitle="Application Sent"
  formSuccessDesc="We will be in touch soon. Make sure you’re following @flamesagency and @thaiflames on Instagram."
/>

</Modal>






    </>
    )
  }


  
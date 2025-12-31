"use client";

import { useModal } from '../hooks/modaContext';
import Modal from './Modal';
import Form from './Form';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ModalTrigger() {
  const [pagePaths, setPagePaths] = useState('')
  const { isOpen, openModal, closeModal } = useModal();
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const pathname = usePathname()

  useEffect(()=>{
    if(!pathname.includes('/thanks.htm')){
      const timer = setTimeout(()=>{
        openModal()
      }, 5000)
  
      return()=>clearTimeout(timer);
    }
  }, [pathname])

  useEffect(()=>{
    if(pathname.includes('discovery')){
      setPagePaths('discovery');
    }
    else if(pathname.includes('remarketing')){
      setPagePaths('remarketing');
    }
    else if(pathname.includes('placement')){
      setPagePaths('placement');
    }
    else if(pathname.includes('branding')){
      setPagePaths('branding');
    }
  }, [pathname]);

  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault(); // prevent href="#"
          openModal();
        }}
        className="sms-chat text-decoration-none"
        href="#"
        rel="nofollow"
      >
        <img
          src={basePath+"/email.png"}
          alt="SMS"
          width="24"
          height="24"
        />
      </a>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Form formVia={pagePaths} />
      </Modal>
    </>
  );
}

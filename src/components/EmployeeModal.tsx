'use client'
import { createContext, useContext, useState } from 'react';
import { EmployeeModalContents } from './EmployeeModalContents';

export interface ModalContextData {
  isOpen: boolean
  setIsOpen: (newValue: boolean) => void
}

const defaultValue: ModalContextData = {
  isOpen: false,
  setIsOpen: () => { throw Error("Not implemented setIsOpen"); }
}
export const ModalContext = createContext(defaultValue);

export function EmployeeModal() {
  const [isOpen, setIsOpen] = useState(defaultValue.isOpen);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <EmployeeModalContents />
    </ModalContext.Provider>
  );
}

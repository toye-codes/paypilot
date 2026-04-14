"use client";

import { useState } from "react";

const initialState = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export function useAccountSecurity() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialState);

  const toggle = () => setOpen((prev) => !prev);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const reset = () => {
    setForm(initialState);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleSubmit = () => {
    console.log("Password Update:", form);

    // later:
    // validate
    // call API

    handleClose();
  };

  return {
    open,
    form,
    toggle,
    handleChange,
    handleSubmit,
    handleClose,
  };
}

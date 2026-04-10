"use client";

import { useState } from "react";

const initialState = {
  name: "",
  owner: "",
  email: "",
  phone: "",
};

export function useEditProfile(onClose: () => void) {
  const [form, setForm] = useState(initialState);

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
    reset();
    onClose();
  };

  const handleSubmit = () => {
    console.log("Updated Profile:", form);

    // future:
    // await updateBusinessProfile(form)

    handleClose();
  };

  return {
    form,
    handleChange,
    handleSubmit,
    handleClose,
  };
}

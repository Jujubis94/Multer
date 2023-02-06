import React, { useRef } from "react";
import axios from "axios";

export default function Form() {
  const inputRef = useRef();

  const hSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios.post("http://localhost:5000/api/avatar", formData);
  };

  return (
    <form encType="multipart/form-data" onSubmit={hSubmit}>
      <input type="file" name="avatar" ref={inputRef} />
      <button type="submit">Envoyer</button>
    </form>
  );
}

"use client"

import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import axios from "axios";

export default function LoginPage() {
  const [firstName, setFirstName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  // E-posta doğrulama fonksiyonu
  const validateEmail = (value: string): RegExpMatchArray | null =>
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

  // E-posta geçerliliğini kontrol etme
  const isInvalid = React.useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);

  // Tüm alanların doldurulup doldurulmadığını kontrol etme
  const handleAll = () => {
    if (!(password && firstName && email)) {
      setError("Please fill all fields.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    // Tüm alanlar dolu mu kontrol et
    const allValid = handleAll();
    // E-posta geçerli mi diye bak
    if (allValid) {  
      // Axios POST isteği
      axios
        .post("/api/users", { name, email, password })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (isInvalid) {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48 sm:w-38 sm:h-38">
          <img className="justify-center items-center w-20 mb-3" src="/images/cake.png" alt="cake" />
          <h1 className="font-hand-write text-5xl font-bold">CAKES</h1>
          <h1 className="font-hand-write text-3xl font-bold">Login</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 mb-3">
        <Input
          type="text"
          label="Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          color="default"
          variant="bordered"
        />

        <Input
          value={email}
          type="email"
          label="Email"
          variant="bordered"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          errorMessage="Please enter a valid email address"
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-md"
        />

        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          color="default"
          variant="bordered"
          maxLength={6}
        />
      </div>

      <div>
        <Button
          onClick={handleSubmit}
          radius="full"
          className="bg-stone-100 shadow-lg"
        >
          Submit
        </Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

    </div>
  );
}


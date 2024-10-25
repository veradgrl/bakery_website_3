"use client"

import React from "react";
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function LoginPage() {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const validateEmail = (value: string): RegExpMatchArray | null =>
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);


  const handleSubmit = (): void => {
    if (isInvalid) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
    } else {
      console.log(`Gönderildi - İsim: ${firstName}`);
      console.log(`Gönderildi - Soyisim: ${lastName}`);
      console.log(`Gönderildi - Telefon: ${phone}`);
      console.log(`Gönderildi - E-posta: ${email}`);
    }
  };

  return (
    <div>

      <div className='flex items-center justify-center mb-10'>
        <div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48 sm:w-38 sm:h-38 ">
          <img className="justify-center items-center w-20 mb-3 " src="/images/cake.png" alt="cake" />
          <h1 className="font-hand-write text-5xl font-bold ">CAKES</h1>
          <h1 className="font-hand-write text-3xl font-bold ">login</h1>
        </div></div>

      <div className="flex flex-col justify-center gap-4 mb-3 ">
        <Input
          type="text"
          label="Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          color={"default"}
          variant="bordered"

        />
        <Input
          type="text"
          label="Surname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          color={"default"}
          variant="bordered"

        />
        <Input
          type="tel"
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          color={"default"}
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
      </div>
      <div>
        <Button onClick={handleSubmit} radius="full" className="bg-stone-100 shadow-lg">
          Submit
        </Button>
      </div>
    </div>
  );
}
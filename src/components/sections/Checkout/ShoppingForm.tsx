import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";

const ShoppingForm = () => {
  return (
    <section>
      {/* title */}
      <h4 className="text-3xl font-medium mb-7">Shipping info form</h4>

      <form action="" className="space-y-4">
        {/* full name */}
        <div className="flex items-center gap-4">
          <InputCustomBox
            label={"First Name"}
            id={"firstName"}
            placeholder={"Jhon"}
          />
          <InputCustomBox
            label={"Last Name"}
            id={"firstName"}
            placeholder={"Dev"}
            required={false}
          />
        </div>

        {/* town city */}
        <InputCustomBox label={"Town/City"} id={"city"} placeholder={"Dhaka"} />

        {/* Address */}
        <InputCustomBox
          label={"Address"}
          id={"address"}
          placeholder={"Zigatoal, Danmondi, Dhaka"}
        />

        {/* Address */}
        <InputCustomBox
          label={"Apartment, floor, etc. (optional)"}
          id={"coreAddress"}
          placeholder={"Rode 2, House 12"}
          required={false}
        />

        {/* phone, email */}
        <div className="flex items-center gap-4">
          <InputCustomBox
            label={"Phone Number"}
            id={"phoneNumber"}
            placeholder={"+8801812345678"}
          />
          <InputCustomBox
            label={"Email Address"}
            id={"email"}
            placeholder={"demo@gmail.com"}
            type="email"
          />
        </div>

        {/* order summary */}
        <InputCustomBox
          label={"Order Summery (optional)"}
          id={"orderSummary"}
          placeholder={"Additional note"}
          required={false}
        />

        {/* confirm checkbox */}
        <Field orientation="horizontal">
          <Checkbox id="saveInfo" name="saveInfo" defaultChecked/>
          <FieldLabel htmlFor="saveInfo">
            Save this information for faster check-out next time{" "}
          </FieldLabel>
        </Field>
      </form>
    </section>
  );
};

export const InputCustomBox = ({
  label,
  type = "text",
  id,
  placeholder,
  required = true,
}: {
  label: string;
  type?: string;
  id: string;
  placeholder: string;
  required?: boolean;
}) => {
  return (
    <Field>
      <FieldLabel htmlFor={id}>
        {label}
        <span className="text-red-400">{required && "*"}</span>
      </FieldLabel>
      <Input
        required={required}
        type={type}
        id={id}
        placeholder={placeholder}
        name={id}
      />
    </Field>
  );
};

export default ShoppingForm;

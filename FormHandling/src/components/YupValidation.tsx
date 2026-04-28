// Yup Validation  Zod Validations 

// npm i yup    npm i zod
// resolver install : npm i @hookform/resolver : use for both yup and Zod validations 

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  phone: string;
};

const FormSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "First Name Must be At least 3 Characters...")
    .max(10, "First Name At max 10 Characters...")
    .required("First Name is Required"),

  lastName: yup
    .string()
    .min(3, "Last Name Must be At least 3 Characters...")
    .max(10, "Last Name At max 10 Characters...")
    .required("Last Name is Required"),

  email: yup
    .string()
    .email("Enter Valid Email ID...")
    .required("Email is required"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "age at least 18")
    .max(40, "age at max 40"),

  password: yup
    .string()
    .min(8, "password must have 8 length")
    .max(15, "at max 15 Char..")
    .required("Password is required...")
    .matches(/[A-Z]/, "Must contain uppercase")
    .matches(/[a-z]/, "Must contain lowercase")
    .matches(/[0-9]/, "Must contain number")
    .matches(/[@$!%*?&#]/, "Must contain special character"),

  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\d+$/, "Phone number must contain only digits"),
});

export function YupValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: 18,
      phone: "",
    },
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        First Name:
        <input type="text" {...register("firstName")} />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
      </div>

      <div>
        Last Name:
        <input type="text" {...register("lastName")} />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
      </div>

      <div>
        Email:
        <input type="email" {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        Age:
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>

      <div>
        Password:
        <input type="password" {...register("password")} />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>

      <div>
        Phone:
        <input type="tel" {...register("phone")} />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}

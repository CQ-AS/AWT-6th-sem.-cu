import { useForm } from "react-hook-form"
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



export function ZodValidation(){

type FormData=zod.infer<typeof userSchema>

    const userSchema=zod.object({
        firstName:zod.string()
        .min(3,"first Name Must be at least 3 Char...")
        .max(10, "first Name can't exceed 10 Char..."),

        lastName:zod.string()
        .min(3,"first Name Must be at least 3 Char...")
        .max(10, "first Name can't exceed 10 Char..."),

        userID:zod.number()
        .min(5," Must be at least 3 Char...")
        .max(10,"At max 10 Char..."),

        email: zod.string()
        .email("Please Enter a valid email address"),

        password:zod.string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one digit")
        .regex(/[@$!%*?&#]/, "Password must contain at least one special character"),

        phone:zod.string() .min(10, "Phone number must be at least 10 digits")
        .max(12, "Phone number can't exceed 12 digits")
        .regex(/^\d+$/, "Phone number must contain only digits"),

    })



    const {register,handleSubmit,formState:{errors}}=useForm<FormData>(
        {
            resolver:zodResolver(userSchema),defaultValues:{firstName:"",lastName:"",userID:undefined,email:"",password:"",phone:""}
        }
    );

    function onSubmit(data:FormData){
        console.log(data)
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            First Name:
            <input type="text" {...register("firstName")}/>
            {errors.firstName && <p>{errors.firstName.message}</p>}
            Last Name:
            <input type="text" {...register("lastName")}/>
            {errors.lastName && <p>{errors.lastName.message}</p>}
            User ID:
            <input type="text" {...register("userID")}/>
            {errors.userID && <p>{errors.userID.message}</p>}
        

            Email:
            <input type="email" {...register("email")}/>
            {errors.email && <p>{errors.email.message}</p>}

            Password:
            <input type="password" {...register("password")}/>
            {errors.password && <p>{errors.password.message}</p>}
            Phone:
            <input type="text" {...register("phone")}/>
            {errors.phone && <p>{errors.phone.message}</p>}
            
            <input type="submit" />

        </form>

        
        </>
    )
}
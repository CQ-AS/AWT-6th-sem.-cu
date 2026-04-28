import  {useForm} from 'react-hook-form'

export function ReactHookForm(){

       const {register, handleSubmit ,watch,formState:{errors ,isSubmitting}} =useForm();
   
        async function onSubmit(data:{}){
        await new Promise((resolve)=>setTimeout(resolve,5000))
        console.log(data);
       }

    return(
        
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name: </label>
            <input type="text" {...register("firstName", {
                required: true,
                pattern:{
                    value: /^[A-Za-z]+$/i ,
                    message: "Enter valued Name.."
                }
                
                })}/>
                {errors.firstName && <p className="messg-error">{errors.firstName.message as string}</p>}
                <br/>

            <label>Last Name: </label>
            <input type="text" {...register("lastName" , {required: true})}/><br/>

            <label >User Id: </label>
            <input type="text" className={errors.id?"input-error":""} {...register("id" ,
                {
                    required : true ,
                    maxLength: {value: 6, message:" At max 6 Char.."},
                    minLength: {value:3 , message:" At least 3 Char.."}
                } )}/>
            {errors.id && <p className='messg-error'>{errors.id.message as string}</p>}
                <br/>

            <label >User Email: </label>
            <input type="email" {...register("email")}/><br/>

            <input type="submit" disabled= {isSubmitting} value={isSubmitting?"Submitting" : "Submit"}/><br/>
        </form>
        <br/>

        <div>
            <p>First Name:{watch().firstName} </p>
            <p>Last Name: </p>
            <p>User Id: </p>
             <p>User Email: </p>
        </div>
        
        </>
    )
}
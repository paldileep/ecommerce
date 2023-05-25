import * as Yup from 'yup'

export const formValidation = Yup.object({ 

        
    name: Yup.string().required('please enter product name'),

    cover: Yup.mixed().required()
    // .test("empty", "Please provide a image", (value)=>{ 
    //     return value && value.size < 100
    // })
    .test("size", "The file is too large", (value) => {
        return value && value.size <= 4000000
    })
    .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp", (value) =>  {
        return value && (
            value.type === "image/jpeg" ||
            value.type === "image/bmp" ||
            value.type === "image/png" 
  
        );
    }),


    price: Yup.number().required(), 
    short: Yup.string().required(),
    details: Yup.string().required(),
    category: Yup.string().required(),
    color: Yup.string().required(),
    stock: Yup.number().min(1).max(100).required(),

})
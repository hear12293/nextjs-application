
// import  {Metadata}  from 'next'


// type Props = {
//     params: {
//         productId:string
//     }
// }

// export const genareteMetadata = async({ params }: Props): Promise<Metadata> => {
//     const title = await new Promise((resolve) => {
//         setTimeout(() => {
//            resolve(`iPhone ${params.productId}`) 
//         },1000)
//     })
//     return {
//         title:`Product ${title}`,
//     }
// }

export default function ProductDetails({ params }:{params:{productId:string}}) {
    return <h3>Product details -{params.productId}</h3>
}
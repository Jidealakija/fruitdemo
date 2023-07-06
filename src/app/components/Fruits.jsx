import Image from "next/image"
import {BsInstagram} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import style from './fruit.module.css'

export default function Fruits({list}) {
    const fruitList = list.map(fruit => (
        <section key={fruit.id} className={`m-auto mt-10 ${style.section}`}>
            <Image className="hover:animate-bounce" src={fruit.image} alt={fruit.name} width={200} height={200}/>
            <h2>{fruit.name}</h2>
            <h2>{fruit.botanicalName}</h2>
            <h2>{fruit.season}</h2>
            <h2>{fruit.season}</h2>
            <div className="flex space-x-3">
            <BsInstagram/> <BsGoogle/> <BsFacebook/>
            </div>
            
        </section>
    ))
  
    return (
    <div  className="grid grid-cols-3 gap-1 bg-green-400">{fruitList}</div>
  )
}

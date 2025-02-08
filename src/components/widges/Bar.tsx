import Image from "next/image"
import Versace from "/public/versace.png"
import Calvin from "/public/cop.png"
import Prada from "/public/prada.png"
import Zara from "/public/zara.png"
import Gucci from "/public/gucci.png"

 
const Bar = () => {
  return (
    <div>
      <div className='bg-black h-[122px] w-full  flex justify-center space-x-4 md:justify-between items-center px-6 flex-wrap'>
  
    <Image src={Versace} alt='versace' width={167} height={38}></Image>
    <Image src={Zara} alt='zara' width={91} height={38}></Image>
    <Image src={Gucci} alt='gucci' width={167} height={36}></Image>
    <Image src={Prada} alt='prda' width={194} height={32}></Image>
    <Image src={Calvin} alt='calvin' width={207} height={34}></Image>

  
   </div>
    </div>
  )
}

export default Bar
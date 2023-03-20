import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.svg'
const Navbar = ({Links}) => {
    // console.log(Links) 
    return (
        <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="pr-4">
                <div className="flex items-center  h-16">
                    <div className="self-start">
                        <Image src={logo} alt='' className="absolute top-0 left-0" height={65}></Image>
                    </div>
                    <div className="ml-auto">
                        <div className="flex space-x-4 text-gray-900">
                            
                            {Links.map(({ linkUrl, linkText, index }) => { return (<Link key={index} href={linkUrl}>{linkText }</Link>)})}

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
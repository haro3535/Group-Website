import { ToggleButtonOnClicked, CloseToggleMenu} from '../utils/NavBarScripts.js';


export default function NavBar(){
    return(
        <>
            <nav id='navbar' className="bg-white w-full h-auto fixed  justify-center 
            items-center border-b-[1px] border-gray-300">
                <div className='w-full flex justify-center items-center'>
                    <div id='nav-element' className="h-[12vh] w-3/4 flex justify-between items-center transition-[height] duration-[0.4s] ease-in-out">
                        <a href='/'>
                            Websitesi
                        </a>
                        <div className="md:flex hidden">
                            <ul className="flex space-x-5 cursor-pointer">
                                <li>Ana Sayfa</li>
                                <li>Hakkımızda</li>
                                <li>Projelerimiz</li>
                                <li>Referanslarımız</li>
                                <li>İletişim</li>
                            </ul>
                        </div>
                        <svg class="block cursor-pointer hover:text-gray-500 md:hidden w-6 h-6" onClick={ToggleButtonOnClicked} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </div>
                </div>
                <div id='toggle-menu' className="w-full bg-white fixed hidden justify-center border-y-[1px] border-gray-300 transition-[max-height] duration-500 ease-in-out overflow-hidden max-h-0">
                    <div className='w-full flex justify-center'>
                        <ul className="cursor-pointer relative w-3/4">
                            <li className="py-2" onClick={CloseToggleMenu}>Ana Sayfa</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Hakkımızda</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Projelerimiz</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Referanslarımız</li>
                            <li className="py-2" onClick={CloseToggleMenu}>İletişim</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

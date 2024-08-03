import { ToggleButtonOnClicked, CloseToggleMenu} from '../utils/NavBarScripts.js';
import LanguageButton from './LanguageButton.js';


export default function NavBar(){
    return(
        <>
            <nav id='navbar' className="bg-white w-full h-auto fixed  justify-center 
                items-center border-b-[1px] border-gray-300 z-10" >
                <div className='w-full flex justify-center items-center'>
                    <div id='nav-element' className="h-[12vh] w-3/4 flex justify-between items-center transition-[height] duration-[0.4s] ease-in-out">
                        <a href='/' className="text-2xl font-bold font-inter text-[var(--blue-second)]" >
                            BOHESA
                        </a>
                        <div className="lg:flex hidden">
                            <ul className="flex space-x-5 cursor-pointer font-inter text-light-gray">
                                <li>Services</li>
                                <li>Solutions</li>
                                <li>Community</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='hidden lg:block'>
                            <LanguageButton />
                        </div>
                        <svg className="block cursor-pointer hover:text-gray-500 lg:hidden w-6 h-6" onClick={ToggleButtonOnClicked} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </div>
                </div>
                <div id='toggle-menu' className="w-full lg:hidden bg-white fixed hidden justify-center border-y-[1px] border-gray-300 transition-[max-height] duration-500 ease-in-out overflow-hidden h-0">
                    <div className='w-full flex flex-col items-center'>
                        <ul className="cursor-pointer relative w-3/4">
                            <li className="py-2" onClick={CloseToggleMenu}>Ana Sayfa</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Hakkımızda</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Projelerimiz</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Referanslarımız</li>
                            <li className="py-2" onClick={CloseToggleMenu}>İletişim</li>
                            <li className="py-2"><LanguageButton className="z-10"/></li>
                        </ul>
                        
                        
                    </div>
                </div>
                
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="absolute opacity-80" viewBox="0 0 1440 320" >
                    <path fill="#0099ff" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,208C480,192,600,192,720,208C840,224,960,256,1080,266.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute opacity-50" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,128L60,122.7C120,117,240,107,360,122.7C480,139,600,181,720,213.3C840,245,960,267,1080,256C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute opacity-50" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,186.7C560,203,640,245,720,266.7C800,288,880,288,960,272C1040,256,1120,224,1200,213.3C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg> */}
            </nav>
        </>
    )
}

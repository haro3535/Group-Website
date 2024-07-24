import { ToggleButtonOnClicked, CloseToggleMenu} from '../utils/NavBarScripts.js';
import LanguageButton from './LanguageButton.js';


export default function NavBar(){
    return(
        <>
            <nav id='navbar' className="bg-white w-full h-auto fixed  justify-center 
                items-center border-b-[1px] border-gray-300 z-10" >
                <div className='w-full flex justify-center items-center'>
                    <div id='nav-element' className="h-[12vh] w-3/4 flex justify-between items-center transition-[height] duration-[0.4s] ease-in-out">
                        <a href='/' className="text-2xl text-[var(--blue-second)]" >
                            BOHESA
                        </a>
                        <div className="md:flex hidden">
                            <ul className="flex space-x-5 cursor-pointer">
                                <li>Hakkımızda</li>
                                <li>Projelerimiz</li>
                                <li>Ekibimiz</li>
                                <li>Referanslarımız</li>
                                <li>İletişim</li>
                            </ul>
                        </div>
                        <LanguageButton/>
                        <svg class="block cursor-pointer hover:text-gray-500 md:hidden w-6 h-6" onClick={ToggleButtonOnClicked} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </div>
                </div>
                <div id='toggle-menu' className="w-full md:hidden bg-white fixed hidden justify-center border-y-[1px] border-gray-300 transition-[max-height] duration-500 ease-in-out overflow-hidden max-h-0">
                    <div className='w-full flex flex-col items-center'>
                        <ul className="cursor-pointer relative w-3/4">
                            <li className="py-2" onClick={CloseToggleMenu}>Ana Sayfa</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Hakkımızda</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Projelerimiz</li>
                            <li className="py-2" onClick={CloseToggleMenu}>Referanslarımız</li>
                            <li className="py-2" onClick={CloseToggleMenu}>İletişim</li>
                        </ul>
                        
                        <button type="button" class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--blue-second)">
                            <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/>
                        </svg>
                            <p className=' text-start pb-0'>Dil</p>
                            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        
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




export default function NavBar(){
    return(
        <div className="w-full py-3 h-[10vh] fixed bg-white border-b-[1.5px] border-gray-300">
            <div className="w-full h-auto flex justify-around items-center">
                <p className="text-2xl cursor-default" >Website</p>
                <div className="h-auto w-auto flex justify-around items-baseline space-x-8">
                    <div className="w-full text-md">
                        <p className="cursor-pointer">Hakkımızda</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">Hizmetler</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">İletişim</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">Topluluk</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">Other</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

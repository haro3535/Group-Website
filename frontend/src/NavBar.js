


export default function NavBar(){
    return(
        <div className="w-full py-3 h-auto">
            <div className="w-full h-auto flex justify-around items-center">
                <p className="text-2xl" >Website</p>
                <div className="h-auto w-auto flex justify-around items-baseline space-x-8 ">
                    <div className="w-full text-md">
                        <p className="cursor-pointer">About</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">Projects</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">Contact</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">Community</p>
                    </div>
                    <div className="w-full py-2 ">
                        <p className="cursor-pointer">Other</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

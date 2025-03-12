import { Link } from "@inertiajs/react";
import LayoutRoot from "./layout-root";
import { ToggleTheme } from "./components/toogle-theme";

interface Props {
    children: React.ReactNode;
}


const LayoutGuess = ({ children }: Props) => {
    return (
        <LayoutRoot>
            <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
                
                <div className="absolute top-4 right-4 flex items-center gap-2">
                    <ToggleTheme />
                </div>
                <div className="w-full flex flex-col items-center space-y-6">
                    <Link href="/" className="flex flex-col items-center" >
                        {/* <x-application-logo /> */}
                        <span className="text-gray-400 text-xs">PROFESIONALES</span>
                    </Link>
                    {children}
                </div>
            </div>
        </LayoutRoot>

    )
}

export default LayoutGuess
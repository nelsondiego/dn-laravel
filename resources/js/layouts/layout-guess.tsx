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
                <div
                    className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
            bg-[size:24px_24px]">
                </div>
                <div className="fixed -z-10 h-screen w-full bg-[radial-gradient(circle_800px_at_100px_100px,#9333ea0d,transparent)]">
                </div>
                <div className="fixed -z-10 h-screen w-full bg-[radial-gradient(circle_800px_at_80%_80%,#3b82f610,transparent)]"></div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                    <ToggleTheme />
                </div>
                <div className="w-full flex flex-col items-center space-y-6">
                    <Link href="/" className="flex flex-col items-center" >
                        {/* <x-application-logo /> */}
                        <span className="text-gray-400 text-xs">DN STARTER KIT</span>
                    </Link>
                    {children}
                </div>
            </div>
        </LayoutRoot>

    )
}

export default LayoutGuess
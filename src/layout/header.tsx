// import { Bell, User } from "lucide-react"
import { Text } from "../Components/common/text"
import { NavigationMenuDemo } from "../Components/common/navigation-menu-demo"

export const Header = () => {
    return (
        <header className="bg-white shadow-md pl-30">
            <div className="py-4">
                <div className="flex items-start justify-between">
                    <Text
                        as="h1"
                        variant="default"
                        className="font-extrabold text-2xl text-muted-foreground"
                    >
                        Tasks Manager
                    </Text>
                    {/* <h1 className="text-2xl font-bold text-gray-900">Tasks Manager</h1> */}
                    <div className="pr-5 space-x-2.5">
                        <NavigationMenuDemo />
                        {/* <button className="rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <Bell size={20} />
                        </button>

                        <button className="ml-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <User size={20} />
                        </button> */}
                    </div>
                </div>
            </div>
        </header>
    )
}
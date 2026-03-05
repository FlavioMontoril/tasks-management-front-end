import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import AppLayout from "./layout/app-layout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CalendarTasks from "./pages/CalendarTasks";
import { SplashScreen } from "./layout/splash-screen";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route element={<AppLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<CalendarTasks />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
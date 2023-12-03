import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainPages from "../pages/mainPages";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<MainPages/>}></Route>
        </Route>
    )
)

export default router
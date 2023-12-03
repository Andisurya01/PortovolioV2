/* eslint-disable react/prop-types */
import { useInView } from "framer-motion";
import { createContext } from "react";

export const ViewContext = createContext();

export default function ViewProvider({childern}){
    const isInView = useInView()
    return(
        <ViewContext.Provider value={isInView}>
            {childern}
        </ViewContext.Provider>
    )
}
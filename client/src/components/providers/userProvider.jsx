import { createContext, useContext } from "react";

import { useCreateUser } from "../hooks/useCreateUser";
import { useLoginUser } from "../hooks/useLoginUser";

const userContext = createContext()
const newUserContext = createContext()
const loginUserContext = createContext()

export const useUserContext = () => {
    return useContext(userContext)
}

export const useNewUserContext = () => {
    return useContext(newUserContext)
}

export const useLoginUserContext = () => {
    return useContext(loginUserContext)
}
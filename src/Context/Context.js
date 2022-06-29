import { createContext } from "react";

const INITIAL_STATE = { prop: "1" }
const ContextDefault = createContext(INITIAL_STATE);

export default ContextDefault;

import Realm from "realm";
import React from "react";
const app = new Realm.App({ id: "data-kihsp" });
export default app;

const AuthContext = React.createContext(null);

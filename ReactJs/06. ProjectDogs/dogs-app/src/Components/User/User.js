import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import { UserPhotoPhost } from "./UserPhotoPhost";
import UserStats from "./UserStats";

function User() {
    return <section className="container">
    <UserHeader/>
    <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/postar" element={<UserPhotoPhost/>}/>
        <Route path="/estatisticas" element={<UserStats/>}/>
    </Routes>
    </section>;
}

export default User;

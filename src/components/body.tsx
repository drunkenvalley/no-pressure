import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchUserCount() {
    const [userCount, setUserCount] = useState(0);
    const server : string = "7WQ8qrsm9g";

    useEffect(() => {
        axios.get(`https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`).then((res) => {
            setUserCount(res.data.approximate_member_count);
        });
    }, []);

    return (
        <div className="grid gap-4 grid-cols-3">
            <span><h1 className="text-4xl font-bold text-center">Meet people!</h1>
            <p className="text-xl text-center">Relax with {userCount} people.</p></span>
            {Dungoneer()}
            {Raider()}
        </div>
    );
    
}

function Dungoneer() {
    return (
        <div>
            <span><h1 className="text-4xl font-bold text-center">Dungoneer!</h1>
            <p className="text-xl text-center">Group with No Pressure</p></span>
       </div>   
    );
}

function Raider(){
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Raid with us!</h1>
            <p className="text-xl text-center">Croushing with No Pressure</p>
        </div>
    );
}

function Discord(){
    const wowMadeEasy : string = "https://www.wowmadeeasy.com/";
    const discord : string = "https://discord.com/invite/7WQ8qrsm9g";

    return(
        <div className=" center justify-center items-center">
            <label className="text-2xl font-bold text-center text-yellow-400" >No Pressure </label>
            <label className="text-yellow-400">started as a European counterpart to</label>
            <br></br>
            <label><a href={wowMadeEasy} className="text-yellow-200">WoW Made Easy</a></label>
            <label className="text-yellow-400"> -  a community built on enjoying.</label>
            <p className="text-yellow-400">Dragonflight together, without the pressure</p>  
        </div>
    );
}

function Progression(){

}

export { FetchUserCount, Discord };


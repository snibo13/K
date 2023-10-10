import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import Habit from "./Schema";
// import { useAuth } from "./AuthProvider";
import { OpenRealmBehaviorType } from "realm";

const HabitsContext = React.createContext(null);
const API_key: string = "ivPR7trisCWFn6ZLkGKFt0m0OM2g9hbgkcLQHw6MYqH5j4OPl6xf00kJqsDaSwrU";
const MONGO_URI: string = "https://us-east-1.aws.data.mongodb-api.com/app/data-kihsp/endpoint/data/v1/action";


export async function loadHabits() {
    // Make a get request to mmongo uri with the api key
    const response = await fetch(MONGO_URI + "/find", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apiKey': API_key
        },
        body: JSON.stringify({
            "database": "Habits",
            "collection": "habits",
            "dataSource": "Blocks"
        }),
    });
    // Parse the response into json
    const json = await response.json();
    // Set the habits to the json
    return json.documents;
}

export async function createHabit(_name: string, _description: string, _unit: string) {
    // Make a post request to mmongo uri with the api key
    const response = await fetch(MONGO_URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: _name,
            description: _description,
            unit: _unit
        }),
    });

};
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: any) {
    try {
        // Set CORS headers
        // const headers = {
        //     "Access-Control-Allow-Origin": "https://f0f2b2tx-3000.inc1.devtunnels.ms/",
        //     "Access-Control-Allow-Methods": "GET, POST",
        //     "Access-Control-Allow-Headers": "Content-Type, Authorization",
        //     "Access-Control-Allow-Credentials": "true"
        // };

        // // Check if it's a preflight request and handle it
        // if (request.method === "OPTIONS") {
        //     return NextResponse.json(null, { headers });
        // }

        // Make the request to the external API
        const response = await axios.get("https://cdn15.t4ce4ma.shop/AjaxCenter/Searching/inception/");

        // Return the response with CORS headers
        return NextResponse.json(response.data, {  });
    } catch (error: any) {
        // Handle errors here
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
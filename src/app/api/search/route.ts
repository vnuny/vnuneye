import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
    try {
        // Set CORS headers
        const headers = {
            "Access-Control-Allow-Origin": "*", // Change this to your specific domain if needed
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true"
        };

        // Check if it's a preflight request and handle it
        if (request.method === "OPTIONS") {
            return NextResponse.json(null, { headers });
        }

        // Make the request to the external API
        const response = await axios.get("https://cdn15.t4ce4ma.shop/AjaxCenter/Searching/inception/", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        });

        // Return the response with CORS headers
        console.log(request)
        return NextResponse.json({ data: response.data, NextRequest}, { headers });
    } catch (error: any) {
        // Handle errors here
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

import type { NextConfig } from "next";


const nextConfig: NextConfig = {

    allowedDevOrigins: [
    '172.19.16.1', 
    '172.19.16.1:3000',
    '192.168.1.50',        // <--- Add your Windows Wi-Fi IP
    '192.168.1.50:3000'   // <--- Add your Windows Wi-Fi IP with port
  ],
  
};


export default nextConfig;

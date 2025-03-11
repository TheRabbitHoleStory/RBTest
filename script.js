{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", async function () \{\
    console.log("
\f1 \uc0\u9989 
\f0  Fetching Global Countdown from Supabase...");\
\
    // 
\f1 \uc0\u9989 
\f0  Supabase Configuration\
    const supabaseUrl = "https://dtckcuvhroqvhhmjbzzd.supabase.co";\
    const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y2tjdXZocm9xdmhobWpienpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0OTgwMzIsImV4cCI6MjA1NTA3NDAzMn0.C6WXh9BnqT7pY1Lu-zNSmREKZmuJYjwMtf9NRwLO2jY";\
    const supabase = createClient(supabaseUrl, supabaseAnonKey);\
\
    try \{\
        const \{ data, error \} = await supabase\
            .from("launchTimestamp")\
            .select("launchTimestamp")\
            .order("created_at", \{ ascending: false \}) // Fetch latest timestamp\
            .limit(1)\
            .single(); \
\
        if (error) \{\
            console.error("
\f1 \uc0\u55357 \u57000 
\f0  Error fetching countdown:", error);\
            return;\
        \}\
\
        const launchDate = new Date(data.launchTimestamp);\
        function updateCountdown() \{\
            let now = new Date().getTime();\
            let timeLeft = launchDate - now;\
\
            if (timeLeft <= 0) \{\
                document.getElementById("countdown").innerHTML = "IT'S TIME.";\
                return;\
            \}\
\
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));\
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));\
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);\
\
            document.getElementById("countdown").innerHTML =\
                `$\{days\}d $\{hours\}h $\{minutes\}m $\{seconds\}s`;\
        \}\
\
        setInterval(updateCountdown, 1000);\
        updateCountdown();\
    \} catch (err) \{\
        console.error("
\f1 \uc0\u55357 \u57000 
\f0  Error fetching countdown:", err);\
    \}\
\});}
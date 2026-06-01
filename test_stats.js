const fs = require('fs');
async function test() {
    const APP_KEY = "HakanGlosPuls_Ekologi2026_v1";
    const currentSessionId = "12345";
    const currentQ = 1;
    
    // Simulate Student Answering
    console.log("Student sending opt_A...");
    await fetch(`https://api.counterapi.dev/v1/${APP_KEY}_${currentSessionId}/Q${currentQ}_opt_A/up`);
    
    // Simulate Teacher Polling
    console.log("Teacher polling opt_A...");
    const res = await fetch(`https://api.counterapi.dev/v1/${APP_KEY}_${currentSessionId}/Q${currentQ}_opt_A`);
    const data = await res.json();
    console.log("Teacher received:", data);
}
test();

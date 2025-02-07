// import e from "express";
import anthropic from "../OpenAI/AIclient.js";

export default async function generateResponse(){
  function getWeatherDetails(city = ''){
    if(city.toLowerCase() === 'patiala') return '10°C';
    if(city.toLowerCase() === 'mohali') return '14°C';
    if(city.toLowerCase() === 'bangalore') return '20°C';
    if(city.toLowerCase() === 'chandigarh') return '8°C';
    if(city.toLowerCase() === 'delhi') return '12°C';
  }
  
  // c
  
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1000,
    temperature: 0,
    system: "Respond only with short poems.",
    messages: [
        {
        "role": "user",
        "content": [
            {
            "type": "text",
            "text": "Why is the ocean salty?"
            }
        ]
        }
    ]
    });
  
  console.log(msg.content[0].text);
}

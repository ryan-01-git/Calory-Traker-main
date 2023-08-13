import {useState} from "react";

const Demo = () =>{

    const [state, setState] = useState(["Mango","Banana"]);
    let query = "apple";
    
    async function clicked(){
        const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,{
            method: "Get",
            headers: {
                'x-app-id': '8ffb66d7',
                'x-app-key': '3ea32925bd59365beb23bebe4e978280',
            },
        });

        const data = await response.json();
        console.log(data["branded"][0]);
        // const food = data["branded"];
        // const foodData = [];
        // for (let i = 0; i < (food.length > 10 ? 10 : food.length) ; i++) {
        //     foodData[i] = food[i]["food_name"];
        // }
        // setState(foodData);
        
    }

    const getInput = (event) =>{
        query = event.target.value.toLowerCase();
        console.log(query);
        clicked();
    }

    return(
        <div>
            <input type="text" onChange = {getInput}/>
            <button onClick={clicked}>Api fetch</button>
            {
                state.map((foodItem)=>(
                    <p>{foodItem}</p>
                ))
            }
        </div>
    )
}

export default Demo;
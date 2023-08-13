import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const AddMealModal = ({ closeModal, addCalories}) =>{

    const [apiList, setApiList] = useState([]);
    let query = "apple";

    async function getData() {
        const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`, {
            method: "Get",
            headers: {
                'x-app-id': '8ffb66d7',
                'x-app-key': '3ea32925bd59365beb23bebe4e978280',
            },
        });

        const data = await response.json();
        const food = data["branded"];
        const foodData = [];
        for (let i = 0; i < (food.length > 20 ? 20 : food.length); i++) {
            foodData.push({
                "id": nanoid(),
                "name": food[i]["food_name"],
                "calories": food[i]["nf_calories"],
                "serving": 1,
                "serving-unit": food[i]["serving_unit"]
            })
        }
        setApiList(foodData);
    }

    const getInput = (e) => {
        query = e.target.value.toLowerCase();
        getData();
    }

    const onCloseClick = () =>{
        closeModal()
    }

    function onAddMeal(foodData){
        addCalories(foodData);
        closeModal();
    }

    function onServingChange(foodData,event){
        for (let i = 0; i < apiList.length; i++) {
            if(apiList[i]["id"] === foodData["id"]){
                apiList[i]["serving"] = event.target.value;
            }
        }
        setApiList(apiList);
    }

    useEffect(() => {
        let isFirst = false;
        if (!isFirst){
            getData();
        }
        return () => { 
            isFirst = true; 
        }
        // eslint-disable-next-line
    }, []);

    return(
        <div className="add-meal-modal">
            <button className="add-meal-close-btn" onClick = {onCloseClick}>X</button>
            <input type="text" className="add-meal-input" placeholder = "Search Meal.." onChange = {getInput} onFocus = {getData}/>
            <div className="add-meal-items-container">
                {
                apiList.map((item) => (
                    <div className="add-meal-item">
                        <div className="add-meal-item-data">
                            <p> {item["name"]}</p>
                            <p>{item["calories"]}Kcal</p>
                            <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}> <input type="number" className="add-meal-item-serving" min="1" onChange={(e)=>onServingChange(item,e)}/> <span>{item["serving-unit"]}</span> </p>
                        </div>

                        <button className="add-meal-item-btn" onClick = {() =>{onAddMeal(item)}}>+</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default AddMealModal;
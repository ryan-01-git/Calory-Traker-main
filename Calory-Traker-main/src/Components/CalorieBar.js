const CalorieBar = ({ foodData, removeCalorie}) =>{

    const calorieWidth = (foodData["calories"] * foodData["serving"]/5);
    let calorieColor = "red";
    if(calorieWidth>66){
        calorieColor = "red";
    }
    else if (calorieWidth > 33){
        calorieColor = "yellow";
    }
    else{
        calorieColor = "green";
    }

    const onRemoveClick = ()=>{
        removeCalorie(foodData["id"]);
    }

    return(
        <div className="calorie-bar" onClick={onRemoveClick}>
            <div className="calorie-bar-up">
                <h3 className="calorie-bar-name" style={{ marginLeft: "10px" }}>{foodData["name"]}</h3>
                <div className = "calorie-bar-macros-container" style = {{marginRight:"10px"}}>
                    <p className="calorie-bar-macros">{foodData["calories"] * foodData["serving"]} Kcal</p>
                    <p className="calorie-bar-macros">{foodData["serving"]} {foodData["serving-unit"]}</p>
                </div>
            </div>
            <div className="calorie-bar-down" style = {{width:`${calorieWidth}%`, backgroundColor:`${calorieColor}`}}></div>

        </div>
    )
}

export default CalorieBar;
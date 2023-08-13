import { useState } from "react";
import AddMealModal from "./AddMealModal";

const Header = ({ addCalories }) =>{

    const [addItemBool, setAddItemBool] = useState(false);

    const onAddClick = () =>{
        setAddItemBool(true);
    }

    const setBool = () =>{
        setAddItemBool(false);
    }

    return(
        <div className="header">
            <button className = "open-calorie-btn" onClick={onAddClick}>+ Add Meal</button>
            {
                addItemBool ? <AddMealModal closeModal={setBool} addCalories={addCalories}/> :null
            }
        </div>
    )
}

export default Header;
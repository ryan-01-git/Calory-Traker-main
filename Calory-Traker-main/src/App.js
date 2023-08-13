import {useState} from "react";
import Container from "./Components/Container";
import ContainerBlank from "./Components/ContainerBlank";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

const App = () =>{
  const [searchText, setSearchText] = useState("");
  const [totalCal, setTotalCal] = useState(0);

  const [calorieList, setCalorieList] = useState([]);

  const addCalories = (foodData) =>{
    setTotalCal(totalCal + (foodData["calories"] * foodData["serving"]));
    const newFoodList = [...calorieList, foodData]
    setCalorieList(newFoodList);
  }

  const removeCalorie = (foodId) =>{
    const newFoodList = calorieList.filter((food) => food["id"] !== foodId);
    setCalorieList(newFoodList);
  }

  return (
    <div className = "app"> 
      <NavBar/>
      <Header addCalories={addCalories}/>
      {
        calorieList.length === 0 ? <ContainerBlank /> : <Container calorieList={calorieList.filter((item) => item["name"].toLowerCase().includes(searchText))} removeCalorie={removeCalorie} handleSearch={setSearchText} totalCalorie={totalCal}/>
      }
      {/* <Demo/> */}

    </div>
  )
}
export default App;
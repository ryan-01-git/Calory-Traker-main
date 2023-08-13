import CalorieBar from "./CalorieBar";

const Container = ({ calorieList, removeCalorie, handleSearch, totalCalorie}) =>{

    const onSearch = (e) =>{
        handleSearch(e.target.value)
    }

    return(
        <div className="container">

            <div className="container-header">
                <div className="container-header-item   header-total">Total: {totalCalorie} Kcal</div>
            </div>
            
            <div className="container-search">
                <h1>Tracked Meal</h1>
                <input type="text" placeholder="Filter Meal..." onChange={onSearch}/>
            </div>
            <div className="calorie-bar-container">
                {
                    calorieList.map((item) => (
                        <CalorieBar foodData={item} removeCalorie={removeCalorie}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Container;
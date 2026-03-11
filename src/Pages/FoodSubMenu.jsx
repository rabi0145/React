import { useState } from "react";
import { foodMenuList } from "../datas/food_sub_menu";
import "./FoodSMenu.css";

const FoodSubMenu = () => {
    const [AllFoodSubMenu, setAllFoodSubMenu] = useState(foodMenuList);
    const handleAddFoodSubMenu = () => {
    let newData = { 
        id: 4, 
        name: "Momo", 
        icon: "#", 
        foodMenuId: 4, 
        description: "Fresh and healthy salads with a variety of vegetables and dressing.", 
        price: 120 
    };

    setAllFoodSubMenu({ ...AllFoodSubMenu, ...newData });
};

  return (
    <div>
      <h3>Food Sub Menu</h3>
      <button onClick={handleAddFoodSubMenu}>Add New Item</button>
      {/* Food sub-menus list */}
      <div className="fsm-container">
        {foodMenuList.map((fsm, index) => {
          return (
            <div
              className="fsm-card"
              key={`${fsm.id}-${fsm.name}-${fsm.foodMenuId}`}
            >
              <h4>{fsm.name}</h4>
              <h4>{fsm.icon}</h4>
              <h4>Proce: {fsm.price}</h4>
              <h4>{fsm.description}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodSubMenu;

import { useState } from "react";

const FoodMenu = () => {
  const [FoodMenus, setFoodMenus] = useState([
    {
      id: 1,
      name: "Pizza",
      price: 10.99,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
      description: "Delecipus cheese pizza with fresh topping",
    },
  ]);

  return (
    <div>
      <h1>Food Menu</h1>
      {/* Food menus list */}
      {FoodMenus.map((fm, index) => {
        return (
          <div key={`${fm.id}-${fm.name}`}>
            <h4>{fm.name}</h4>
            <h4>Proce: {fm.price}</h4>
            <h4>{fm.description}</h4>
            <img src={fm.image} width="200px" />
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;

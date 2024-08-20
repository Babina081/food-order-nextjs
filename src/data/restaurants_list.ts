export type MenuSubProp = { name: string; price: number; image: string };
export type MenuProps = {
  category: string;
  items: MenuSubProp[];
};
export type Restaurant = {
  id: number;
  name: string;
  locationUrl: string;
  address: string;
  isAvailable: boolean;
  isFavorite: boolean;
  favCount: number;
  menuLists: MenuProps[];
  services: string[];
  restaurantImage: string;
  gallery: string[];
  minOrder: number;
  reviewNum?: number;
  rating: number;
  image: string;
  images: string[];
  isFeatured: boolean;
  orderLimit: number;
  dateCreated: Date;
};

export const restaurantsInfo: Restaurant[] = [
  {
    id: 1,
    name: "Himalayan Java",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 152,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 500,
    reviewNum: 120,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 2,
    name: "Moondance Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 64,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 1000,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 3,
    name: "New Everest Momo Center",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Mahendrapul, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 98,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 300,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 4,
    name: "Or2k",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 210,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 800,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 5,
    name: "Busy Bee Cafe",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 45,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 700,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 6,
    name: "Aangan Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 132,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 600,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 7,
    name: "Pokhara Java",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 30,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 8,
    name: "Lakeside Kitchen & Bar",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 180,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 900,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 9,
    name: "Caffe Concerto",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 12,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 350,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 10,
    name: "Yangling Tibetan Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 75,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 550,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 11,
    name: "Black & White Cafe",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 18,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 250,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 12,
    name: "La Bella Nepali Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 88,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 450,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 13,
    name: "Momo Hut",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 9,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 200,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 14,
    name: "Maya Devi Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 120,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 700,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 15,
    name: "Godfather's Pizzeria",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 40,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 600,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 16,
    name: "Pho 99 Vietnamese Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 55,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 650,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 17,
    name: "Potala Tibetan Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 25,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 300,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 18,
    name: "Big B Burger",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 68,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 19,
    name: "Om Shanti Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 14,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 550,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 20,
    name: "Fire & Ice Pizzeria",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 95,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 750,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 21,
    name: "Cafe Concerto",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 20,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 22,
    name: "Caffe Concerto",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 20,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 23,
    name: "Boomerang Restaurant & German Bakery",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 82,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 600,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 24,
    name: "Rosemary Kitchen & Coffee Shop",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 16,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 500,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 25,
    name: "Peace Eye Guest House & Korean Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 37,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 650,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 26,
    name: "Mo:Mo & Co. Cafe & Bar",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 28,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 300,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 27,
    name: "Laurel Bakery Cafe",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 49,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 28,
    name: "Metro Restaurant & Bar",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 21,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 600,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 29,
    name: "Fire & Ice Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 79,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 750,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 30,
    name: "Caffe Concerto",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 20,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 31,
    name: "Caffe Concerto",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 20,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 32,
    name: "Boomerang Restaurant & German Bakery",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 82,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 600,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 33,
    name: "Rosemary Kitchen & Coffee Shop",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 16,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 500,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 34,
    name: "Peace Eye Guest House & Korean Restaurant",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 37,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 650,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 35,
    name: "Mo:Mo & Co. Cafe & Bar",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: false,
    favCount: 28,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 300,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
  {
    id: 36,
    name: "Laurel Bakery Cafe",
    locationUrl: "https://maps.app.goo.gl/7zmFdngTRSv5ovMJ6",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    isAvailable: true,
    isFavorite: true,
    favCount: 49,
    menuLists: [
      {
        category: "Coffee",
        items: [
          { name: "Espresso", price: 150, image: "espresso.jpg" },
          { name: "Cappuccino", price: 200, image: "cappuccino.jpg" },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea", price: 100, image: "black_tea.jpg" },
          { name: "Green Tea", price: 120, image: "green_tea.jpg" },
        ],
      },
      {
        category: "Pastries",
        items: [
          { name: "Croissant", price: 80, image: "croissant.jpg" },
          { name: "Danish Pastry", price: 90, image: "danish_pastry.jpg" },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 250,
            image: "chicken_sandwich.jpg",
          },
          {
            name: "Vegetarian Sandwich",
            price: 200,
            image: "vegetarian_sandwich.jpg",
          },
        ],
      },
      {
        category: "Momo",
        items: [
          { name: "Chicken Momo", price: 120, image: "chicken_momo.jpg" },
          { name: "Vegetable Momo", price: 100, image: "vegetable_momo.jpg" },
        ],
      },
      {
        category: "Chowmein",
        items: [
          {
            name: "Chicken Chowmein",
            price: 180,
            image: "chicken_chowmein.jpg",
          },
          {
            name: "Vegetable Chowmein",
            price: 150,
            image: "vegetable_chowmein.jpg",
          },
        ],
      },
      {
        category: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 300,
            image: "margherita_pizza.jpg",
          },
          { name: "Pepperoni Pizza", price: 350, image: "pepperoni_pizza.jpg" },
        ],
      },
      {
        category: "Burger",
        items: [
          { name: "Beef Burger", price: 280, image: "beef_burger.jpg" },
          { name: "Chicken Burger", price: 250, image: "chicken_burger.jpg" },
        ],
      },
      {
        category: "Corndog",
        items: [
          { name: "Cheese Corndog", price: 150, image: "cheese_corndog.jpg" },
          {
            name: "Vegetable Corndog",
            price: 120,
            image: "vegetable_corndog.jpg",
          },
        ],
      },
    ],
    services: ["delivery", "takeaway"],
    restaurantImage: "/food-restro.png",
    gallery: [
      "/food1.png",
      "/food2.png",
      "/food3.png",
      "/food4.png",
      "/food5.png",
      "/food6.png",
    ],
    minOrder: 400,
    rating: 4.5, // Adding the rating property
    image: "/restaurant-main.jpg", // Adding the image property
    images: ["/restaurant1.jpg", "/restaurant2.jpg"], // Adding the images property
    isFeatured: true, // Adding the isFeatured property
    orderLimit: 5, // Adding the orderLimit property
    dateCreated: new Date("2023-01-01"), // Adding the dateCreated property
  },
];

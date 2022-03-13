exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          Title: "Jollof Rice",
          Price: "N2500",
          Qty: 3,
          image:
            "https://media.istockphoto.com/photos/west-african-jollof-rice-with-chicken-and-plantains-picture-id1305969440?k=20&m=1305969440&s=612x612&w=0&h=YEcKCQp_G2p4UabmEM8l6jPAqjv-cv0E8QWZb5BU18o=",
          items_id: 1,
        },
        {
          Title: "Rice and Orange Chicken",
          Price: "N2500",
          Qty: 3,
          image:
            "https://images.unsplash.com/photo-1599354607448-8ad6e92b027a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
          items_id: 2,
        },
        {
          Title: "Rice and Plantain",
          Price: "N2500",
          Qty: 3,
          image:
            "https://media.istockphoto.com/photos/west-african-jollof-rice-with-fried-plantains-picture-id1305969502?b=1&k=20&m=1305969502&s=170667a&w=0&h=O6xNs_9r28AC1544urE4qDiAaq0H3Bxlbn9n5m8OYTY=",
          items_id: 3,
        },
        {
          Title: "Shrimp Fried rice",
          Price: "N2500",
          Qty: 3,
          image:
            "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpvbGxvZiUyMHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          items_id: 4,
        },
        {
          Title: "Pizza",
          Price: "N7500",
          Qty: 3,
          image:
            "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60https://www.costafarms.com/CostaFarms/Croton-Header-Costa-Farms-Indoor-Plant.jpg",
          items_id: 5,
        },
        {
          Title: "Orange soup",
          Price: "N4500",
          Qty: 3,
          image:
            "https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291cHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          items_id: 6,
        },
        {
          Title: "Shrimp soup",
          Price: "N8500",
          Qty: 3,
          image:
            "https://images.unsplash.com/photo-1574653853117-0274131c2175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvdXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          items_id: 7,
        },
        {
          Title: "Kale Soup",
          Price: "N4500",
          Qty: 3,
          image:
            "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvdXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          items_id: 8,
        },
        {
          Title: "Burgers",
          Price: "N5500",
          Qty: 3,
          image:
            "https://media.istockphoto.com/photos/junk-food-homemade-beef-burgers-on-vintage-wooden-background-picture-id1302436326?b=1&k=20&m=1302436326&s=170667a&w=0&h=MvSjb8R4lOJT_NteIiZxfIoZvXIkKucRUVeViFBLVN4=",
          items_id: 9,
        },
      ]);
    });
};

const products = [
  {
    name: "PlayStation 5",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 15,
    brand: "PlayStation",
    category: "Game Console",
    rate: 4,
  },
  {
    name: "IPhone 12",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Apple",
    category: "Phone",
    rate: 5,
  },
  {
    name: "Amazon Alexa",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    price: 50,
    quantity: 25,
    brand: "Apple",
    category: "Virtual Assistant",
    rate: 3.5,
  },
  {
    name: "JBL FLIP 4",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "JBL",
    category: "Speaker",
    rate: 4,
  },
  {
    name: "Macbock Air 15",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Apple",
    category: "Laptop",
    rate: 4,
  },
  {
    name: "AirPods 2",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1574920162043-b872873f19c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Apple",
    category: "Headphone",
    rate: 5,
  },

  {
    name: "Laptop Dell Vostro",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Dell",
    category: "Laptop",
    rate: 4,
  },
  {
    name: "Keyboard Ducky",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Ducky",
    category: "Keyboard",
    rate: 4,
  },
  {
    name: "Xiaomi note 10",
    price: 230,
    image:
      "https://images.unsplash.com/photo-1591447493924-7cf932d2ed81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Xiaomi",
    category: "Phone",
    rate: 5,
  },
  {
    name: "Samsung Galaxy S20",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=895&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Samsung",
    category: "Phone",
    rate: 4.5,
  },
  {
    name: "Logitech Master 3",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1618247130379-980b9fe0df04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "Logitech",
    category: "Mouse",
    rate: 4,
  },
  {
    name: "MSI Laptop GF63",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
    quantity: 10,
    brand: "MSI",
    category: "Laptop",
    rate: 5,
  },
];

module.exports = products;

import Dog from "./dog";
import Duck from "./duck";

// created instances from classes

const animal1 = new Dog(
  "Dog1",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
  3,
  4
);

const animal2 = new Dog(
  "Dog2",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
  5,
  4
);

const animal3 = new Duck(
  "Duck1",
  "https://images.unsplash.com/photo-1556596187-c3d988ea368c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1973&q=80",
  2,
  2
);

const animal4 = new Duck(
  "Duck2",
  "https://images.unsplash.com/photo-1574137909559-82597cfeef21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  6,
  2
);

const animal5 = new Dog(
  "Dog3",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1924&q=80",
  3,
  4
);

const animal6 = new Dog(
  "Dog4",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
  5,
  4
);

const animal7 = new Duck(
  "Duck3",
  "https://images.unsplash.com/photo-1556596187-c3d988ea368c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1973&q=80",
  2,
  2
);

const animal8 = new Duck(
  "Duck4",
  "https://images.unsplash.com/photo-1574137909559-82597cfeef21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  6,
  2
);

const animal9 = new Dog(
  "Dog5",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
  5,
  4
);

const animal10 = new Duck(
  "Duck5",
  "https://images.unsplash.com/photo-1556596187-c3d988ea368c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1973&q=80",
  2,
  2
);

const animal11 = new Duck(
  "Duck6",
  "https://images.unsplash.com/photo-1574137909559-82597cfeef21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  6,
  2
);

const animal12 = new Dog(
  "Dog6",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
  3,
  4
);

// assigned instances to an array

const animalsArray = [
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6,
  animal7,
  animal9,
  animal8,
  animal12,
  animal10,
  animal11,
];


export default { animalsArray };

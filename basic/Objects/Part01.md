# JavaScript Object

An **object** is an entity which can have details about one thing.  
In JavaScript, these details are stored as **key–value pairs**.  
- The **key** represents the property name.  
- The **value** represents the property data.  

This makes objects useful for grouping related information and behavior together.

---

### Example: **Car Object**

```js
let car = {
  brand: "Toyota",
  color: "Red",
  speed: 120,
  start: function() {
    console.log("Car started!");
  }
};

console.log(car.brand);    // "Toyota"
console.log(car["color"]); // "Red"
car.start();               // "Car started!"
```

### Key Points

* Objects are created using curly braces {}.

* They store data in key: value format.

* Keys are also called properties.

* Functions inside objects are called methods.

* You can access object properties in two ways:

    * Dot notation → car.brand

    * Bracket notation → car["color"]

<br><br>

### Why Do We Use Bracket Notation `[]` in JavaScript?

We use **bracket notation** when the property name is **not fixed** or is **defined outside the object** (for example, stored in a variable).

### Key Points
- With **dot notation**, JavaScript looks for a property with that exact name inside the object.  
  - If it doesn’t exist, it returns `undefined`.  
- With **bracket notation**, we can use a **variable** or **string**, which makes it possible to access properties dynamically.  

### Example

```js
let car = {
  brand: "Toyota",
  color: "Red"
};

let prop = "color";

console.log(car.brand);   // "Toyota"  (dot notation, fixed key)
console.log(car[prop]);   // "Red"     (bracket notation, variable key)

console.log(car["speed"]); // undefined (not defined in object)
```


### Rule of thumb:

* Use dot notation when the property name is known.

* Use bracket notation when the property name is dynamic or comes from a variable.

<br>
<hr><hr>
<br><br>

# Nesting and Deep Access in JavaScript Objects

### Nesting
**Nesting** is when an object contains another object inside it.  
This allows us to represent more complex data structures.

### Deep Access
**Deep access** means accessing the properties of a nested object.

---

### Example

```js
let student = {
  name: "Alice",
  age: 21,
  address: {
    city: "Kathmandu",
    country: "Nepal",
    postal: {
      code: 44600,
      area: "Bagbazar"
    }
  }
};

// Accessing nested properties
console.log(student.address.city);          // "Kathmandu"
console.log(student.address.postal.code);   // 44600

// Using bracket notation
console.log(student["address"]["country"]); // "Nepal"
```
<br>

# What is Destructuring?
**Destructuring** is a process that allows you to **extract values from objects (or arrays) and assign them to variables directly**, even if those values are nested deep inside the object.  

This means you don’t have to repeatedly use **deep access** (`obj.prop1.prop2...`) to get the values.

---

### Example

```js
let humans = {
  passion: {
    programming: {
      lang1: "JavaScript",
      lang2: "Python"
    }
  }
};

// Destructuring nested object
let { lang1, lang2 } = humans.passion.programming;

// Now you can access directly
console.log(lang1); // "JavaScript"
console.log(lang2); // "Python"

```

## Ways to achive destructuring

```js
let car = {
  brand: "Toyota",
  color: "Red",
  speed: 120
};

// Basic destructuring
let { brand, color } = car;
console.log(brand); // "Toyota"
console.log(color); // "Red"

// Renaming variables
let { speed: maxSpeed } = car;
console.log(maxSpeed); // 120

// Using rest operator (...) to get remaining properties
let { brand: carBrand, ...rest } = car;
console.log(carBrand); // "Toyota"
console.log(rest);     // { color: "Red", speed: 120 }
```

### Key Points

* Destructuring extracts nested values into variables directly.
* You don’t need to follow the full deep access path every time.
* Makes the code shorter, cleaner, and easier to read.
* Works with nested objects and arrays.


## Looping in Objects

We can loop through objects in JavaScript using different methods:

- **for...in**
- **Object.keys()**
- **Object.entries()**

---

### 1. for...in
The `for...in` loop iterates over the **keys (properties)** of an object.

```javascript
let obj = {
  name: "Sharwan",
  age: 11,
  location: "Nepal"
};

// Print all properties
for (let key in obj) {
  console.log(key, ":", obj[key]);
}

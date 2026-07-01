# 🧪 Shared Codebase Testing Activity

## 🎯 Objective
Students will work together to write unit tests for a shared codebase, verify method behavior, and provide feedback to their peers. This activity emphasizes collaboration, critical thinking, and knowledge sharing within the learning community.

---

## 🧱 Activity Overview

### 🔧 Setup a Shared Codebase

Provide a starter project containing partially implemented methods (e.g., `calculateDiscount`, `filterProducts`, `sortInventory`).  
Include minimal or no existing tests, encouraging students to create them from scratch.

### 📂 Partially Implemented Methods

```js

const fakeProducts = [
  {
    id: 1,
    name: "Apex Wireless Mouse",
    description: "Ergonomic 2.4GHz wireless mouse with adjustable DPI and silent clicks.",
    price: 29.99
  },
  {
    id: 2,
    name: "Quantum Mechanical Keyboard",
    description: "Tactile blue switches, vibrant RGB backlighting, and a premium aluminum frame.",
    price: 89.95
  },
  {
    id: 3,
    name: "AeroStream Noise-Canceling Headphones",
    description: "Over-ear Bluetooth headphones featuring active noise cancellation and 40-hour battery life.",
    price: 149.99
  },
  {
    id: 4,
    name: "NovaCharge 10K Power Bank",
    description: "Ultra-slim 10,000mAh portable charger with USB-C Power Delivery.",
    price: 24.50
  },
  {
    id: 5,
    name: "Titanium EDC Pocket Knife",
    description: "Lightweight, corrosion-resistant folding knife with a razor-sharp drop point blade.",
    price: 45.00
  },
  {
    id: 6,
    name: "Lumina Smart LED Desk Lamp",
    description: "Dimmable desk light with adjustable color temperatures and a built-in wireless charger.",
    price: 39.99
  }
];


function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    let newPrice = price * (1 - discountRate);
    let roundedPrice = Math.round(newPrice * 100) / 100;
    return roundedPrice;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    return inventory.sort((a, b) => a[key] - b[key]);
}
```

## 👥 Form Groups

Divide students into small groups of 3–5. Each group will be responsible for writing unit tests for one or more methods in the shared codebase.

### 🧑‍🤝‍🧑 Assign Roles Within the Group:

- **Test Writer**: Writes initial test cases.
- **Code Reviewer**: Reviews and improves the test cases.
- **Debugger**: Ensures the implementation passes all tests.
- **Presenter**: Summarizes the group’s contributions for sharing with the class.

---

## 📝 Instructions

### 🧪 Write Tests
- Use **Jest** to write unit tests for their assigned method(s).
- Ensure they include **positive**, **negative**, and **edge cases**.

### 🤝 Collaborate
- Share and discuss test ideas within their group.
- Ensure all possible scenarios are covered.

### 🧪 Run Tests
- Use the command below to execute the test suite and refine the implementation:

```bash
npm test
```

## 📄 Sample Test Code (Students Will Write)

```js
test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});
```
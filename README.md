# 🔁 JS Event Loop Visualizer

An interactive visualizer designed to simplify and animate the internal workings of JavaScript's **Event Loop**, including the **Call Stack**, **Task Queue**, and **Microtask Queue**. This tool allows learners and developers to visually comprehend how JavaScript handles asynchronous operations.



## 📌 Features

- 🎯 Real-time simulation of JavaScript's Event Loop
- 🧠 Clear differentiation between Call Stack, Task Queue, and Microtask Queue
- ⏱️ Adjustable execution speed via a slider
- 🌈 Animated task execution with color-coded labels and glowing border effects
- 📱 Fully responsive and optimized for mobile devices
- 🧼 Clear button to fully reset the simulation and timers


## ⚙️ Built With

### HTML5

### CSS3
- Custom Theme Colors:
  - `#273F4F` – Deep Stack Blue
  - `#447D9B` – Process Blue
  - `#D7D7D7` – Neutral Light
- Glow effects and fade transitions
- Responsive design via media queries

### JavaScript
- DOM manipulation and event handling
- Task simulation using:
  - `setTimeout` (Task Queue)
  - `Promise.then()` and `queueMicrotask()` (Microtask Queue)
- Reset, run, and timing logic for seamless interaction



## 📝 Usage

1. Click **"Run Simulation"** to start.
2. Adjust the **Speed Slider** to change execution pace.
3. Observe the **execution order**:
   - Microtasks are prioritized over Tasks.
   - Tasks execute once the Call Stack is empty.
4. Click **"Clear"** to fully reset the simulation and interface.



## 📄 Concepts Demonstrated

- JavaScript's single-threaded concurrency model
- Call Stack behavior and function execution order
- Difference between Microtasks and Tasks
- Event loop cycles and how asynchronous code executes



## 💡 Inspiration

This project was inspired by the need to **demystify the JavaScript Event Loop**, especially for visual learners. By animating each step of execution, users gain a clearer understanding of how JavaScript processes tasks, making asynchronous behavior more intuitive and less abstract.



## 📷 Preview

![Event Loop Preview](https://github.com/Varsini10/Event-Loop-Visualizer/blob/main/Website%20image%201.png) 
![Event Loop Preview](https://github.com/Varsini10/Event-Loop-Visualizer/blob/main/Website%20image%202.png) 





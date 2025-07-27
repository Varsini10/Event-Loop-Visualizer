let timeouts = []; // Store timeout IDs globally

const speedSlider = document.getElementById("speedSlider");
const speedLabel = document.getElementById("speedLabel");

speedSlider.oninput = () => {
  speedLabel.textContent = `${speedSlider.value}ms`;
};

function addItem(queueId, text, isExecuting = false) {
  const list = document.getElementById(queueId);
  const item = document.createElement("li");

  const box = document.createElement("div");
  box.className = "task-box";
  box.innerText = `() => { ${isExecuting ? 'Executing ' : ''}${text} }`;

  item.appendChild(box);
  list.appendChild(item);

  requestAnimationFrame(() => item.classList.add("visible"));
}

function removeFirst(queueId) {
  const list = document.getElementById(queueId);
  if (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function simulateEventLoop() {
  const speed = parseInt(speedSlider.value);

  // Add to task & microtask queues
  addItem("taskQueueList", "setTimeout");
  addItem("microtaskQueueList", "Promise.then");
  addItem("taskQueueList", "fetch");
  addItem("microtaskQueueList", "queueMicrotask");
  addItem("taskQueueList", "setInterval");
  addItem("microtaskQueueList", "MutationObserver");
  addItem("microtaskQueueList", "Promise.then #2");

  // Microtasks first (processed before macrotasks)
  timeouts.push(setTimeout(() => {
    resetCallStack();
    addItem("callStackList", "Executing Promise.then");
    removeFirst("microtaskQueueList");
  }, speed));

  timeouts.push(setTimeout(() => {
    resetCallStack();
    addItem("callStackList", "Executing queueMicrotask");
    removeFirst("microtaskQueueList");
  }, speed * 2));

  timeouts.push(setTimeout(() => {
    resetCallStack();
    addItem("callStackList", "Executing MutationObserver");
    removeFirst("microtaskQueueList");
  }, speed * 3));

  timeouts.push(setTimeout(() => {
    resetCallStack();
    addItem("callStackList", "Executing Promise.then #2");
    removeFirst("microtaskQueueList");
  }, speed * 4));

  // Then macrotasks
  timeouts.push(setTimeout(() => {
    resetCallStack();
    addItem("callStackList", "Executing setTimeout");
    removeFirst("taskQueueList");
  }, speed * 5));

  timeouts.push(setTimeout(() => {
    resetCallStack();
    addItem("callStackList", "Executing fetch");
    removeFirst("taskQueueList");
  }, speed * 6));

  timeouts.push(setTimeout(() => {
    resetCallStack();
    addItem("callStackList", "Executing setInterval");
    removeFirst("taskQueueList");
  }, speed * 7));
}

function resetCallStack() {
  removeFirst("callStackList");
}

function clearQueues() {
  // Cancel all timeouts
  timeouts.forEach(timeout => clearTimeout(timeout));
  timeouts = [];

  // Clear all queues
  ["callStackList", "taskQueueList", "microtaskQueueList"].forEach(id => {
    const list = document.getElementById(id);
    list.innerHTML = "";
  });
}

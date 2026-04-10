# Bài 10 - Mini Project

## Mục tiêu bài học

* Vận dụng kiến thức về biến, hàm, mảng, object, DOM, sự kiện, form, bất đồng bộ
* Xây dựng một ứng dụng nhỏ có giao diện tương tác
* Biết tổ chức code theo chức năng rõ ràng
* Hiểu cách lưu trữ dữ liệu tạm thời bằng LocalStorage
* Rèn luyện kỹ năng debug và làm việc với dữ liệu động

---

## Nội dung chính

### Mini Project: Quản lý Công việc (To-do List)

#### Mô tả chức năng:

* Giao diện đơn giản gồm ô nhập, nút thêm và danh sách công việc
* Người dùng nhập nội dung công việc, bấm "Thêm" để thêm vào danh sách
* Mỗi công việc có thể **đánh dấu hoàn thành**, **xoá**, hoặc **lọc** theo trạng thái
* Dữ liệu được **lưu vào LocalStorage** để không mất khi refresh

---

### 1. Giao diện HTML cơ bản

```html
<div id="app">
  <h2>To-do List</h2>
  <input id="taskInput" placeholder="Nhập công việc..." />
  <button id="addBtn">Thêm</button>
  
  <ul id="taskList"></ul>
</div>
```

---

### 2. Xử lý JavaScript – thêm công việc

```js
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let addBtn = document.getElementById("addBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleDone(${index})">
      <span style="text-decoration: ${task.done ? "line-through" : "none"}">${task.name}</span>
      <button onclick="deleteTask(${index})">Xoá</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  if (taskInput.value.trim() === "") return;
  tasks.push({ name: taskInput.value, done: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
renderTasks();

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}
```

---

## Mở rộng

### a. Lọc công việc theo trạng thái

Thêm 3 nút: “Tất cả”, “Đã xong”, “Chưa xong” để lọc danh sách.

### b. Tìm kiếm theo từ khoá

Thêm ô tìm kiếm để lọc danh sách theo nội dung công việc.

### c. Sử dụng `async/await` để mô phỏng việc tải dữ liệu công việc từ server giả lập (dùng `setTimeout`).

---

## Bài tập

### Bài 1 – Giao diện CRUD

Bổ sung tính năng **sửa tên công việc** ngay trong danh sách bằng cách click vào tên công việc.

---

### Bài 2 – Giao diện đẹp hơn

Thêm CSS cơ bản: màu sắc, spacing, biểu tượng (nếu dùng font awesome), trạng thái hover.

---

### Bài 3 – Hiển thị thời gian tạo công việc

Mỗi task khi thêm vào nên lưu thêm `createdAt` và hiển thị ngày giờ tương ứng.

---

### Bài 4 – Đồng bộ dữ liệu với API giả

Tạo hàm `syncWithServer()` để sau mỗi lần thêm/xoá công việc sẽ giả lập fetch API lưu dữ liệu.

---

### Bài 5 – Chuyển sang module ES6

Tách code thành các module riêng: `taskService.js`, `ui.js`, `main.js`, và sử dụng `import/export`.



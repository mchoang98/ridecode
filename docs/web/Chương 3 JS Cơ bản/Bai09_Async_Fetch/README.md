# Bài 09 Async/Fetch

## Mục tiêu bài học

* Hiểu bất đồng bộ (asynchronous) là gì trong JavaScript
* Biết sử dụng `setTimeout`, `Promise`, `async/await` để xử lý tác vụ bất đồng bộ
* Biết cách gọi API với `fetch()`
* Biết xử lý kết quả trả về từ API
* Biết xử lý lỗi trong quá trình fetch dữ liệu

---

## Nội dung chính

### 1. Đồng bộ vs. bất đồng bộ

```js
console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");
```

> Kết quả: A → C → B (vì `setTimeout` chạy bất đồng bộ)

---

### 2. Promise – cách viết xử lý bất đồng bộ

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dữ liệu trả về sau 2 giây");
  }, 2000);
});

promise.then(data => {
  console.log(data);
}).catch(err => {
  console.log("Lỗi: ", err);
});
```

---

### 3. Async / Await – cú pháp mới dễ đọc hơn

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Bắt đầu");
  await wait(2000);
  console.log("Đã đợi 2 giây");
}

run();
```

---

### 4. Gọi API với `fetch()`

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log("Dữ liệu:", data);
  })
  .catch(error => {
    console.error("Lỗi:", error);
  });
```

---

### 5. Gọi API với `async/await`

```js
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
}

getUsers();
```

---

### 6. Hiển thị dữ liệu ra HTML

```html
<ul id="userList"></ul>

<script>
  async function loadUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    
    let html = "";
    users.forEach(user => {
      html += `<li>${user.name} - ${user.email}</li>`;
    });

    document.getElementById("userList").innerHTML = html;
  }

  loadUsers();
</script>
```

---

## Bài tập

### Bài 1 – Mô phỏng API với Promise

Viết một hàm `getData()` trả về dữ liệu giả lập sau 2 giây bằng `Promise`. Sau khi có dữ liệu, hiển thị lên console.

---

### Bài 2 – Dùng `fetch` lấy danh sách posts

Sử dụng API `https://jsonplaceholder.typicode.com/posts` và `fetch()` để lấy danh sách bài viết và in tiêu đề từng bài.

---

### Bài 3 – Hiển thị người dùng ra giao diện

Gọi API `https://jsonplaceholder.typicode.com/users` và hiển thị `name` và `email` của từng người dùng trong danh sách HTML.

---

### Bài 4 – Xử lý lỗi khi fetch

Viết hàm gọi API nhưng cố tình sai URL để kiểm tra bắt lỗi và hiển thị thông báo lỗi ra giao diện.

---

### Bài 5 – Form tìm kiếm user qua API

Tạo một ô nhập `userId`, khi người dùng nhập vào số và nhấn nút "Tìm", gọi API `https://jsonplaceholder.typicode.com/users/{id}` để hiển thị thông tin người đó.



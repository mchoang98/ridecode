# Bài 05 - Object

## Mục tiêu bài học

* Hiểu được khái niệm Object trong JavaScript là gì
* Biết cách khai báo, truy cập và cập nhật thuộc tính trong đối tượng
* Nắm được cách lồng đối tượng và mảng trong nhau
* Biết sử dụng vòng lặp `for...in` để duyệt qua thuộc tính
* Biết định nghĩa phương thức (hàm bên trong đối tượng)

---

## Nội dung chính

### 1. Object là gì?

Object là kiểu dữ liệu dùng để lưu trữ tập hợp các giá trị dưới dạng cặp `key: value`.

### 2. Khai báo đối tượng

```js
let student = {
  name: "Phú",
  age: 18,
  isMale: true
};
```

### 3. Truy cập và cập nhật thuộc tính

```js
console.log(student.name);      // Truy cập bằng dot notation
console.log(student["age"]);    // Truy cập bằng bracket notation

student.age = 19;               // Cập nhật giá trị
student["grade"] = "A";         // Thêm thuộc tính mới
```

### 4. Lồng object trong object hoặc mảng

```js
let classRoom = {
  className: "12A1",
  teacher: {
    name: "Cô Lan",
    subject: "Toán"
  },
  students: ["Nam", "Phú", "An"]
};
console.log(classRoom.teacher.name); // Truy cập object lồng nhau
```

### 5. Duyệt object với `for...in`

```js
for (let key in student) {
  console.log(key + ": " + student[key]);
}
```

### 6. Định nghĩa phương thức trong object

```js
let user = {
  name: "Phú",
  greet: function() {
    console.log("Xin chào, tôi là " + this.name);
  }
};

user.greet(); // Gọi phương thức
```

---

## Bài tập

### Bài 1 – Tạo đối tượng `person`

Tạo một object có tên `person` chứa các thuộc tính: `name`, `age`, `email`. In ra toàn bộ thông tin của người này.

---

### Bài 2 – Cập nhật thông tin đối tượng

Thêm thuộc tính `address` vào object `person`. Sau đó cập nhật tuổi thành 21 và in lại toàn bộ thông tin.

---

### Bài 3 – Duyệt thuộc tính đối tượng

Viết hàm nhận vào một đối tượng bất kỳ và in ra tất cả key + value bằng vòng lặp `for...in`.

---

### Bài 4 – Mảng chứa các object

Tạo mảng `students` chứa 3 object, mỗi object đại diện cho một học sinh (có `name`, `score`). In ra danh sách học sinh và điểm số của họ.

---

### Bài 5 – Thêm phương thức vào object

Tạo một object `calculator` chứa 2 phương thức `add(a, b)` và `subtract(a, b)` để thực hiện phép cộng và trừ. Gọi thử 2 phương thức với các giá trị cụ thể.


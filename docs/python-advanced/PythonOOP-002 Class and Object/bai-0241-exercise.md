

# Bài tập Getter và Setter

## **Phần 1: Cơ bản**

###  **Bài 1: Lớp Sinh Viên**

Viết lớp `Student` gồm các thuộc tính:

* `name`: tên sinh viên (kiểu chuỗi)
* `age`: tuổi sinh viên (kiểu số nguyên)

**Yêu cầu:**

* Tạo getter để lấy tên và tuổi.
* Tạo setter cho tuổi, chỉ cho phép tuổi từ 10 đến 100.

---

###  **Bài 2: Tài khoản ngân hàng**

Viết lớp `BankAccount` với thuộc tính:

* `balance`: số dư tài khoản (kiểu số thực)

**Yêu cầu:**

* Tạo getter để truy xuất số dư.
* Tạo setter để cập nhật số dư, nhưng không cho phép set giá trị âm.

---

## **Phần 2: Nâng cao**

###  **Bài 3: Tạo email tự động**

Viết lớp `User` với các thuộc tính:

* `first_name`
* `last_name`
* `email`

**Yêu cầu:**

* Tạo thuộc tính `email` chỉ đọc, được tự động sinh ra từ `first_name` và `last_name` theo định dạng `first.last@gmail.com`.
* Cho phép cập nhật `email` theo định dạng trên, khi cập nhật thì `first_name` và `last_name` phải tự thay đổi theo.

---

###  **Bài 4: Hình chữ nhật**

Viết lớp `Rectangle` với các thuộc tính:

* `width`: chiều rộng
* `height`: chiều cao

**Yêu cầu:**

* Tạo getter cho `area` để tự động tính diện tích theo công thức `width * height`.
* Không cho phép set giá trị trực tiếp cho `area`.

---

## **Phần 3: Tự luyện / Challenge**

###  **Bài 5: Chuyển đổi nhiệt độ**

Viết lớp `Temperature` với:

* Một thuộc tính `_celsius` dùng để lưu nhiệt độ gốc theo độ C.

**Yêu cầu:**

* Tạo getter `fahrenheit` để trả về nhiệt độ F (theo công thức: `C * 1.8 + 32`).
* Tạo setter `fahrenheit` để khi gán nhiệt độ F, nó tự chuyển sang độ C và cập nhật lại `_celsius`.



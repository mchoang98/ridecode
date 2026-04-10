# Ôn tập kiến thức cơ bản

## 1. Ôn kiến thức nền tảng (biến, hàm, list)

### Bài 1. Tính diện tích hình chữ nhật
Viết hàm nhận vào chiều dài và chiều rộng, trả về diện tích.

Gợi ý input:
```python
length = 5  
width = 3
````

### Bài 2. Kiểm tra số nguyên tố

Viết hàm `is_prime(n)` trả về `True` nếu `n` là số nguyên tố.

### Bài 3. Danh sách học sinh

Nhập vào 5 tên học sinh, lưu vào list. In ra danh sách theo thứ tự ngược lại.

---

## 2. Làm quen với Class và Object

### Bài 4. Class `Dog`

Tạo class `Dog` có:

* Thuộc tính: `name`, `age`
* Phương thức `bark()` in ra `"Gâu gâu, tôi là <name>!"`

Tạo 2 object và gọi hàm `bark()` của mỗi object.

### Bài 5. Class `Rectangle`

Tạo class `Rectangle` gồm:

* Thuộc tính: `width`, `height`
* Phương thức `area()` → tính diện tích
* Phương thức `perimeter()` → tính chu vi

---

## 3. Luyện đóng gói (Encapsulation)

### Bài 6. Class `BankAccount`

* Thuộc tính private: `__balance`
* Phương thức: `deposit()`, `withdraw()`, `get_balance()`
* Kiểm tra không cho rút quá số dư.

### Bài 7. Class `PasswordManager`

* Thuộc tính private: `__password`
* `set_password(pw)` → chỉ chấp nhận password dài ≥ 6 ký tự
* `check_password(pw)` → kiểm tra đúng/sai

---

## 4. Kế thừa và đa hình

### Bài 8. Class `Animal` → `Dog`, `Cat`

* `Animal`: có phương thức `speak()` mặc định
* `Dog` và `Cat` kế thừa và override `speak()`
* Viết hàm `make_sound(animal)` gọi `speak()` tương ứng

### Bài 9. Class `Shape` → `Circle`, `Square`

* `Shape`: có phương thức `area()` mặc định
* `Circle`, `Square` kế thừa, tính diện tích cụ thể
* Viết hàm `print_area(shape)` để test tính đa hình

---

## 5. Phân tích bài toán OOP tổng hợp

### Bài 10. Quản lý học sinh

* `Student`: `name`, `math_score`, `english_score`, `average()`
* `Classroom`: quản lý danh sách `Student`

  * `add_student()`
  * `print_all()`
  * `find_top_student()`

### Bài 11. Quản lý giỏ hàng

* `Product`: `id`, `name`, `price`
* `Cart`: danh sách sản phẩm

  * `add_product(product)`
  * `total_price()`
  * `print_receipt()`

### Bài 12. Trò chơi Người chơi vs Quái vật

* `Character`: `name`, `hp`, `attack()`
* `Player`, `Monster`: kế thừa từ `Character`
* Viết vòng lặp chiến đấu → tới khi 1 bên `hp <= 0`

---

Gợi ý:
Trước khi code, hãy vẽ sơ đồ class và viết giả mã (pseudocode) nếu thấy khó hình dung.


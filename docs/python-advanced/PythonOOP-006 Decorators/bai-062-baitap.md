# BÀI TẬP DECORATOR TRONG PYTHON


## I. BÀI TẬP VỚI BUILT-IN DECORATORS (5 bài)

### Bài 1: Dùng `@staticmethod`

Viết class `MathUtils` có phương thức `multiply(a, b)` là static method. Không được dùng `self` hoặc `cls`.

> Gợi ý: `@staticmethod`

---

### Bài 2: Dùng `@classmethod`

Viết class `User` có thuộc tính class `total_users`, mỗi khi tạo instance thì tăng số lượng. Viết method `get_total_users()` dùng `@classmethod`.

---

### Bài 3: Dùng `@property` và `@setter`

Viết class `Circle` với thuộc tính `radius`. Dùng `@property` để tính diện tích (`area`), và `@area.setter` để thay đổi `radius` theo giá trị diện tích mong muốn.

---

### Bài 4: Dùng `@abstractmethod`

Tạo abstract class `Shape` với phương thức `area()`. Tạo lớp `Rectangle` và `Circle` kế thừa từ `Shape` và cài đặt phương thức `area()`.

> Gợi ý: Dùng `from abc import ABC, abstractmethod`

---

### Bài 5: Kết hợp nhiều built-in decorator

Viết class `Person`:

* Có thuộc tính `name`
* Có method `is_adult()` là `@staticmethod`
* Có method `from_string()` là `@classmethod`
* Có `@property` để hiển thị `greeting` dạng `"Hello, <name>"`

---

## II. BÀI TẬP VỚI CUSTOM DECORATORS (5 bài)

### Bài 6: Custom decorator log

Viết decorator `@log_call` để in ra tên hàm trước khi thực thi và in `"Done"` sau khi thực thi.

```python
@log_call
def greet(name):
    print(f"Hi {name}")
```

---

### Bài 7: Decorator đo thời gian chạy

Viết decorator `@time_it` đo thời gian chạy của một hàm. Áp dụng cho hàm tính tổng 1 triệu số.

---

### Bài 8: Decorator có tham số

Viết decorator `@repeat(n)` lặp lại việc gọi hàm `n` lần.

```python
@repeat(3)
def hello():
    print("Hello!")
```

---

### Bài 9: Decorator kiểm tra quyền truy cập

Viết decorator `@require_role(role)`:

* Nếu user không có quyền phù hợp → in `"Access Denied"`
* Nếu đúng quyền → thực thi bình thường

```python
@require_role("admin")
def delete_data(user):
    print("Deleted!")
```

Input user: `{"username": "phu", "role": "user"}`

---

### Bài 10: Class decorator để cache kết quả

Viết class decorator `@cache_result` dùng dictionary để cache kết quả của hàm với đầu vào cụ thể.

```python
@cache_result
def slow_fib(n):
    # giả lập hàm đệ quy chậm
```

---

## GỢI Ý CHẤM ĐIỂM

| Bài  | Kỹ thuật chính          | Điểm |
| ---- | ----------------------- | ---- |
| 1–3  | Built-in cơ bản         | 1–2  |
| 4–5  | Kết hợp hoặc abstract   | 2–3  |
| 6–7  | Custom decorator cơ bản | 2–3  |
| 8–10 | Decorator nâng cao      | 3–4  |



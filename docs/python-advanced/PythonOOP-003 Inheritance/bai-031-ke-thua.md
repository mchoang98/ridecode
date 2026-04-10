# Bài 031 - Kế thừa - Inheritance

### 1. Khái niệm kế thừa là gì?

Kế thừa (Inheritance) là một trong những **tính chất cốt lõi của lập trình hướng đối tượng**. Nó cho phép bạn tạo ra một **lớp mới (subclass)** dựa trên một **lớp đã có (superclass)**, **kế thừa** lại các **thuộc tính** và **phương thức** của lớp cha.

Hiểu nôm na:

> *“Một đứa con có thể thừa hưởng tài sản và kỹ năng từ cha mẹ.”*

---

### 2. Lợi ích của kế thừa

* ✅ **Tái sử dụng mã nguồn (code reuse)**
  → Giảm trùng lặp, tiết kiệm thời gian.
* ✅ **Bảo trì dễ hơn**
  → Sửa đổi tại lớp cha, tất cả lớp con đều được cập nhật.
* ✅ **Mở rộng hệ thống dễ dàng**
  → Có thể xây thêm các lớp con từ lớp cha mà không đụng đến lớp cha.

---

### 3. Ví dụ thực tế: Phần mềm quản lý trường đại học

Giả sử bạn cần xây dựng phần mềm quản lý cho một trường học, có các loại người dùng:

* Sinh viên
* Giảng viên
* Nhân viên

Tất cả họ đều có điểm chung như:

* Mã số
* Họ tên
* Địa chỉ

Nếu bạn tạo ba class riêng biệt, bạn sẽ bị **trùng code** rất nhiều. Giải pháp: **tạo một class `Person` làm lớp cha**, rồi cho các class con kế thừa lại.

---

### 4. Cách cài đặt kế thừa trong Python

```python
# Lớp cha (Super Class)
class Person:
    def __init__(self, id, name):
        self.id = id
        self.name = name

# Lớp con kế thừa từ Person
class Employee(Person):
    def __init__(self, id, name, salary):
        super().__init__(id, name)  # Gọi hàm __init__ của Person
        self.salary = salary

    def printDetails(self):
        print(self.id)
        print(self.name)
        print(self.salary)

# Tạo đối tượng
e = Employee(101, "Rahul", 40000)
e.printDetails()
```

#### Kết quả in ra:

```
101
Rahul
40000
```

---

### 5. Giải thích mã lệnh

* `Person` là lớp cha chứa các thuộc tính chung.
* `Employee` kế thừa từ `Person` và thêm thuộc tính `salary`.
* `super().__init__()` được dùng để gọi constructor của lớp cha, tránh viết lại mã trùng lặp.

---

### 6. Sơ đồ kế thừa minh họa

```plaintext
Person
├── Student
│   ├── EnggStudent
│   └── MgmtStudent
└── Faculty
    ├── Prof
    ├── AstProf
    └── AssociateProf

Employee
├── SalesEmb
├── HREmb
├── MarketingEmb
└── SDEEmb
```

---

### 7. Các loại kế thừa thường gặp trong Python

| Loại kế thừa                                | Mô tả                            |
| ------------------------------------------- | -------------------------------- |
| Kế thừa đơn (Single Inheritance)            | 1 lớp cha → 1 lớp con            |
| Kế thừa đa cấp (Multilevel Inheritance)     | lớp A → lớp B → lớp C            |
| Kế thừa đa hình (Multiple Inheritance)      | lớp con kế thừa từ nhiều lớp cha |
| Kế thừa phân cấp (Hierarchical Inheritance) | 1 lớp cha → nhiều lớp con        |

---

### 8. Các khái niệm nâng cao

#### 🌀 Ghi đè phương thức (Overriding)

* Lớp con có thể định nghĩa lại phương thức của lớp cha.

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

Dog().speak()  # ➜ In ra "Dog barks"
```

#### 🧩 Lớp trừu tượng (Abstract Class)

* Không thể tạo đối tượng từ lớp này.
* Chỉ dùng làm khung cho các lớp con kế thừa.

---

### 9. Mọi class đều kế thừa từ `object`

Trong Python 3, mọi class **ngầm định kế thừa từ `object`**. Điều này giúp thống nhất cấu trúc và hỗ trợ các tính năng như:

* `__str__()`, `__repr__()`
* `__eq__()`, `__lt__()`
* Các method đặc biệt khác

```python
class ABC(object):
    pass

# hoặc đơn giản hơn:
class ABC:
    pass
```

---

### 10. Kết luận

* Kế thừa giúp mã gọn hơn, dễ bảo trì và mở rộng.
* Bạn nên dùng kế thừa khi có quan hệ **"is-a" (là một)** giữa các đối tượng.
* Tránh lạm dụng kế thừa nếu các lớp không thực sự liên quan.

---

### 🧠 Bài tập gợi ý

1. Viết class `Vehicle`, sau đó tạo các class con như `Car`, `Motorbike` kế thừa từ `Vehicle`.
2. Tạo class `Account`, rồi tạo `SavingAccount` và `CheckingAccount` kế thừa và mở rộng hành vi.
3. Thử viết phương thức `display()` trong lớp cha, sau đó ghi đè ở lớp con.

---


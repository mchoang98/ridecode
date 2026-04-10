# BÀI 024: Getter và setter trong python

## Mục tiêu

Sau bài học này, học viên có thể:

* Phân biệt và sử dụng thuộc tính instance và thuộc tính class
* Hiểu vai trò của getter và setter trong việc kiểm soát truy cập dữ liệu
* Biết cách dùng decorator `@property` để viết getter/setter một cách Pythonic

---

## 1. Thuộc tính Instance (Instance Attributes)

### Khái niệm

Thuộc tính instance là các thuộc tính **gắn với từng đối tượng** (instance) cụ thể. Mỗi object có bản sao riêng của các thuộc tính này.

### Cách khai báo

Được khai báo trong phương thức `__init__` hoặc bất kỳ phương thức nào sử dụng từ khóa `self`.

### Ví dụ:

```python
class Student:
    def __init__(self, name, age):
        self.name = name  # thuộc tính instance
        self.age = age

a = Student("An", 18)
b = Student("Bình", 20)

print(a.name)  # An
print(b.name)  # Bình
```

Mỗi object `a` và `b` có `self.name` và `self.age` riêng biệt.

---

## 2. Thuộc tính Class (Class Attributes)

### Khái niệm

Thuộc tính class là các thuộc tính **dùng chung** cho mọi đối tượng của class. Không gắn với từng instance riêng biệt.

### Cách khai báo

Được khai báo trực tiếp bên trong class nhưng **ngoài** bất kỳ phương thức nào.

### Ví dụ:

```python
class Student:
    school = "Python Academy"  # thuộc tính class

    def __init__(self, name):
        self.name = name  # thuộc tính instance

a = Student("An")
b = Student("Bình")

print(a.school)  # Python Academy
print(b.school)  # Python Academy

Student.school = "AI Academy"
print(a.school)  # AI Academy
```

Tất cả các instance dùng chung `school`. Khi thay đổi `Student.school`, mọi object đều bị ảnh hưởng nếu không gán riêng `self.school`.

---

## 3. Getter và Setter – Cách kiểm soát truy cập

### Tại sao cần?

* Ẩn thông tin (encapsulation)
* Kiểm tra hoặc xử lý dữ liệu trước khi gán/lấy

### Cách cổ điển:

```python
class Person:
    def __init__(self, age):
        self._age = age  # convention: dấu _ cho thấy "private"

    def get_age(self):
        return self._age

    def set_age(self, value):
        if value >= 0:
            self._age = value
        else:
            raise ValueError("Tuổi không hợp lệ")

p = Person(20)
print(p.get_age())  # 20
p.set_age(25)
print(p.get_age())  # 25
```

---

## 4. Sử dụng `@property` – Cách Pythonic

### Tại sao nên dùng?

* Truy cập thuộc tính như bình thường (`obj.age`) nhưng vẫn có thể kiểm soát
* Gọn hơn so với dùng `get_` và `set_`

### Cách dùng:

```python
class Person:
    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value >= 0:
            self._age = value
        else:
            raise ValueError("Tuổi không hợp lệ")

p = Person(20)
print(p.age)      # dùng như thuộc tính, không gọi hàm
p.age = 30        # vẫn có kiểm soát như setter
print(p.age)      # 30
```

Lưu ý:

* `@property` biến phương thức thành getter
* `@age.setter` biến phương thức thành setter của thuộc tính `age`

---

## 5. So sánh nhanh

| Thuộc tính | Nằm ở đâu            | Gắn với ai    | Dùng để làm gì                           |
| ---------- | -------------------- | ------------- | ---------------------------------------- |
| Instance   | `self.attribute`     | Mỗi đối tượng | Dữ liệu riêng của từng object            |
| Class      | `Class.attribute`    | Toàn bộ class | Dữ liệu chung cho tất cả instance        |
| Getter     | `get_x()`            | -             | Lấy giá trị nhưng vẫn kiểm soát logic    |
| Setter     | `set_x(value)`       | -             | Gán giá trị với điều kiện kiểm tra       |
| @property  | `@property` + setter | -             | Gọn gàng, Pythonic hơn cho getter/setter |

---

## 6. Tổng kết

* Sử dụng instance attribute khi dữ liệu là riêng của từng object
* Sử dụng class attribute khi muốn chia sẻ dữ liệu giữa các object
* Dùng getter/setter để kiểm soát truy cập thuộc tính (đặc biệt khi cần validate)
* `@property` là cách tốt hơn trong Python để thực hiện getter/setter một cách tự nhiên



# Bài 4-1 Tính Trừu Tượng (Abstraction) 

## 1. Khái niệm và Mục đích

**Tính trừu tượng** là nguyên lý giúp lập trình viên:
- Ẩn các chi tiết triển khai phức tạp.
- Chỉ hiển thị các chức năng quan trọng cần thiết.
- Tập trung vào *"cái gì"* thay vì *"làm như thế nào"*.

**Mục tiêu của trừu tượng**:
- Làm cho chương trình rõ ràng và dễ bảo trì.
- Giảm độ phức tạp của hệ thống lớn.
- Tăng khả năng tái sử dụng và mở rộng.

Ví dụ đời thường: Người lái xe chỉ cần biết nhấn ga, không cần biết động cơ hoạt động thế nào.

---

## 2. Cách triển khai trong Python

Python hỗ trợ trừu tượng hóa qua module `abc` (Abstract Base Class).

Để tạo một lớp trừu tượng:
- Kế thừa từ `ABC`.
- Dùng decorator `@abstractmethod` để đánh dấu phương thức trừu tượng.

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

    @abstractmethod
    def get_area(self):
        pass
```

Lưu ý:
- Không thể khởi tạo một lớp trừu tượng (`Shape()` sẽ báo lỗi).
- Bất kỳ lớp con nào kế thừa mà không triển khai đầy đủ các phương thức trừu tượng sẽ cũng trở thành lớp trừu tượng.

---

## 3. Ví dụ cụ thể

```python
class Rectangle(Shape):
    def __init__(self, length, breadth):
        self.length = length
        self.breadth = breadth

    def draw(self):
        print("Drawing a rectangle")

    def get_area(self):
        return self.length * self.breadth

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def draw(self):
        print("Drawing a circle")

    def get_area(self):
        return 3.14 * self.radius ** 2
```

Trong ví dụ này:
- `Shape` định nghĩa một giao diện chung cho các hình học.
- `Rectangle` và `Circle` triển khai cụ thể các phương thức đó.

---

## 4. Ứng dụng thực tế

**1. Phần mềm đồ họa**:
- Lớp `Shape`: chứa phương thức `draw()` và `get_area()` (trừu tượng).
- Các lớp cụ thể như `Circle`, `Rectangle` kế thừa và hiện thực hóa logic riêng.

**2. Quản lý nhân sự**:
```python
class Employee(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def raise_salary(self):
        pass
```

- `Employee` là lớp cơ sở cho các vai trò như `SalesEmployee`, `SoftwareEmployee`.
- Mỗi vai trò có cách tính lương tăng khác nhau.

---

## 5. Lợi ích của tính trừu tượng

| Lợi ích                         | Ý nghĩa thực tế                                       |
|----------------------------------|--------------------------------------------------------|
| Giảm phức tạp                   | Người dùng không cần biết chi tiết triển khai          |
| Giao diện lập trình rõ ràng     | Mọi lớp con đều phải tuân theo cùng một giao diện      |
| Tăng tính mở rộng               | Dễ dàng thêm chức năng mới mà không ảnh hưởng hệ thống |
| Tăng khả năng bảo trì           | Dễ thay thế, nâng cấp mà không phá vỡ chương trình     |

---

## 6. Phân biệt Abstraction và Inheritance

| Tính trừu tượng (Abstraction)        | Kế thừa (Inheritance)                        |
|--------------------------------------|----------------------------------------------|
| Tập trung vào *làm gì*               | Tập trung vào *chia sẻ cái gì*               |
| Định nghĩa giao diện                 | Tái sử dụng logic                            |
| Áp dụng cho phương thức, lớp        | Áp dụng cho toàn bộ class                    |

---

## 7. Tổng kết

- Tính trừu tượng giúp thiết kế phần mềm rõ ràng, dễ phát triển.
- Lớp trừu tượng không thể khởi tạo trực tiếp.
- Các lớp con kế thừa phải triển khai đầy đủ các phương thức trừu tượng.
- Python dùng `abc.ABC` và `@abstractmethod` để hỗ trợ abstraction.


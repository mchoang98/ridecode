
# Bài 4-2 Abstract Class 

## 1. Khái niệm

**Abstract Class (Lớp trừu tượng)** là một loại lớp trong Python mà:

* **Không thể khởi tạo trực tiếp**.
* Được dùng để **định nghĩa giao diện (interface)** cho các lớp con.
* Có thể chứa **phương thức trừu tượng** (chưa được cài đặt) và **phương thức cụ thể** (đã cài đặt).

### Khi nào dùng Abstract Class?

* Khi bạn muốn tạo một **khuôn mẫu chung** cho các lớp con.
* Khi bạn muốn **ép buộc** các lớp con phải cài đặt một số phương thức nhất định.

---

## 2. Cách tạo lớp trừu tượng trong Python

### Import các thành phần cần thiết:

```python
from abc import ABC, abstractmethod
```

* `ABC`: là lớp cơ sở để tạo lớp trừu tượng.
* `@abstractmethod`: decorator đánh dấu một phương thức là trừu tượng (phải được lớp con override).

---

## 3. Ví dụ cơ bản

```python
from abc import ABC, abstractmethod

class Polygon(ABC):
    def __init__(self, color):
        self.color = color

    @abstractmethod
    def printSides(self):
        pass
```

### Giải thích:

* `Polygon` là lớp trừu tượng, kế thừa từ `ABC`.
* Phương thức `printSides` là trừu tượng – không có thân hàm.
* Không thể khởi tạo `Polygon()` vì nó chưa đủ triển khai.

---

## 4. Lớp con cụ thể kế thừa và triển khai

```python
class Triangle(Polygon):
    def __init__(self, color):
        super().__init__(color)

    def printSides(self):
        print("There are 3 sides")

b = Triangle("Red")
b.printSides()
```

**Output**:

```
There are 3 sides
```

### Giải thích:

* `Triangle` là lớp cụ thể, kế thừa từ `Polygon`.
* `printSides()` được override trong lớp con => OK.
* Có thể khởi tạo và sử dụng bình thường.

---

## 5. Gây lỗi khi không override phương thức trừu tượng

```python
class Triangle(Polygon):
    def __init__(self, color):
        super().__init__(color)

b = Triangle("Red")  # Lỗi
```

**Kết quả**:

```
TypeError: Can't instantiate abstract class Triangle with abstract method printSides
```

Vì `Triangle` không triển khai `printSides()`, nên nó **vẫn bị xem là lớp trừu tượng**.

---

## 6. Lớp trừu tượng có thể chứa phương thức cụ thể

```python
class Polygon(ABC):
    def __init__(self, color):
        self.color = color

    @abstractmethod
    def printSides(self):
        pass

    def printColor(self):
        print(self.color)

class Triangle(Polygon):
    def __init__(self, color):
        super().__init__(color)

    def printSides(self):
        print("There are 3 sides")

b = Triangle("Red")
b.printSides()
b.printColor()
```

**Output**:

```
There are 3 sides
Red
```

### Giải thích:

* Lớp `Polygon` có cả **phương thức trừu tượng (`printSides`)** và **phương thức cụ thể (`printColor`)**.
* `Triangle` chỉ cần triển khai các phương thức trừu tượng, các phương thức cụ thể có thể dùng lại.

---

## 7. Tóm tắt kiến thức

| Đặc điểm                  | Mô tả                                                         |
| ------------------------- | ------------------------------------------------------------- |
| Không thể tạo instance    | Bạn không thể gọi `Polygon()` nếu nó còn chứa abstract method |
| Bắt buộc override         | Lớp con phải override **tất cả các abstract method**          |
| Có thể chứa method cụ thể | Lớp trừu tượng vẫn có thể chứa các hàm đã cài đặt             |
| Dùng abc.ABC              | Tất cả lớp trừu tượng đều kế thừa từ `ABC`                    |

---

## 8. Kết luận

* Lớp trừu tượng là công cụ hữu ích giúp thiết kế hệ thống rõ ràng và dễ mở rộng.
* Trong Python, sử dụng `ABC` và `@abstractmethod` để xây dựng trừu tượng.
* Nếu lớp con không triển khai hết các abstract method, nó sẽ **không thể khởi tạo**.
* Lớp trừu tượng vẫn có thể chứa logic đã cài sẵn (concrete methods).


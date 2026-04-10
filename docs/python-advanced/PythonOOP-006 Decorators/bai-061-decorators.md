# BÀI GIẢNG: DECORATOR TRONG PYTHON – MẶC ĐỊNH VÀ TÙY CHỈNH

---

## I. DEFINITION – DECORATOR LÀ GÌ?

Decorator là một kỹ thuật lập trình cho phép "gói" một hàm hoặc phương thức bằng một hàm khác nhằm thêm chức năng mà không thay đổi code gốc.

Nói cách khác, decorator giúp mở rộng hoặc can thiệp hành vi của một đối tượng, hàm hoặc phương thức mà không phải chỉnh sửa bên trong chúng.

Python hỗ trợ decorator như một cú pháp riêng thông qua ký hiệu `@`.

---

## II. KHI NÀO DÙNG DECORATOR?

* Khi cần thêm hành vi cho hàm hoặc phương thức (như log, kiểm tra quyền, đo thời gian chạy)
* Khi muốn viết code tuân thủ nguyên tắc mở rộng mà không chỉnh sửa (Open/Closed Principle)
* Khi làm việc với lập trình hướng đối tượng để định nghĩa các quy tắc hoặc ràng buộc bắt buộc (ví dụ với abstract class)

---

## III. CẤU TRÚC CƠ BẢN CỦA MỘT DECORATOR

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Trước khi gọi hàm")
        result = func(*args, **kwargs)
        print("Sau khi gọi hàm")
        return result
    return wrapper

@my_decorator
def greet():
    print("Xin chào!")

greet()
```

Khi gọi `greet()`, thực chất Python sẽ chạy `my_decorator(greet)`.

---

## IV. CUSTOM DECORATOR

### 1. Decorator đơn giản

```python
def log(func):
    def wrapper(*args, **kwargs):
        print(f"Đang gọi hàm {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log
def add(a, b):
    return a + b

print(add(3, 4))
```

---

### 2. Decorator có tham số

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi")

say_hi()
```

---

### 3. Class Decorator (sử dụng class làm decorator)

```python
class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        import time
        start = time.time()
        result = self.func(*args, **kwargs)
        end = time.time()
        print(f"Thời gian chạy: {end - start:.4f}s")
        return result

@Timer
def compute():
    sum([i for i in range(1000000)])

compute()
```

---

### 4. Sử dụng `functools.wraps` để bảo toàn metadata

```python
from functools import wraps

def log(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log
def greet(name):
    """Chào người dùng"""
    print(f"Hello {name}")

print(greet.__name__)   # greet
print(greet.__doc__)    # Chào người dùng
```

---

## V. DECORATOR MẶC ĐỊNH TRONG PYTHON OOP

### 1. `@staticmethod`

Dùng để định nghĩa method không phụ thuộc vào instance (`self`) hoặc class (`cls`).

```python
class Math:
    @staticmethod
    def add(a, b):
        return a + b

print(Math.add(2, 3))
```

---

### 2. `@classmethod`

Method dùng `cls` làm tham số đầu tiên, thường dùng để thao tác với class, tạo factory method.

```python
class Person:
    count = 0

    def __init__(self):
        Person.count += 1

    @classmethod
    def get_count(cls):
        return cls.count
```

---

### 3. `@property`

Dùng để biến method thành thuộc tính. Hữu ích khi cần tính toán giá trị nhưng vẫn truy cập như biến.

```python
class Rectangle:
    def __init__(self, w, h):
        self._w = w
        self._h = h

    @property
    def area(self):
        return self._w * self._h

r = Rectangle(3, 4)
print(r.area)  # gọi như thuộc tính
```

Có thể dùng thêm `@area.setter` để gán giá trị mới nếu cần.

---

### 4. `@abstractmethod`

Dùng để khai báo phương thức trừu tượng – bắt buộc các lớp con phải cài đặt lại. Thường dùng trong interface hoặc base class.

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        print("Gâu gâu")

# Không thể tạo instance từ Animal nếu chưa override phương thức
```

Nếu lớp con không override method đó, Python sẽ báo lỗi khi khởi tạo.

---

## VI. TỔNG KẾT CÁC DECORATOR MẶC ĐỊNH

| Decorator         | Dùng cho         | Chức năng chính                  |
| ----------------- | ---------------- | -------------------------------- |
| `@staticmethod`   | method           | Không truy cập self, cls         |
| `@classmethod`    | method           | Truy cập class thông qua cls     |
| `@property`       | method           | Truy cập như thuộc tính (getter) |
| `@abstractmethod` | method trong ABC | Yêu cầu lớp con phải override    |

---

## VII. BÀI TẬP THỰC HÀNH

1. Viết decorator `@log_time` để đo thời gian chạy của một hàm.
2. Viết decorator `@require_login` để kiểm tra quyền truy cập người dùng trước khi chạy một hàm.
3. Viết class decorator `@cache_result` để cache kết quả của một hàm với đầu vào cụ thể.
4. Tạo một abstract class `Vehicle` với phương thức `move()`. Viết lớp con kế thừa và triển khai đầy đủ phương thức.

---

## VIII. GỢI Ý MỞ RỘNG

* Kết hợp nhiều decorator trên cùng một hàm.
* Viết decorator cho phương thức trong class (method-level).
* Tìm hiểu các decorator nâng cao trong thư viện `functools`: `lru_cache`, `partial`, `singledispatch`.

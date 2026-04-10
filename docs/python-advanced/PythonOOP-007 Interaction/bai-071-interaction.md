# Tương tác giữa các Object (Object Interaction)

## 1. Định nghĩa

**Object Interaction** là quá trình trong đó một đối tượng giao tiếp hoặc phối hợp với một hoặc nhiều đối tượng khác để thực hiện một chức năng hoặc quy trình nghiệp vụ.

Việc tương tác có thể diễn ra thông qua:

* **Gọi phương thức** (method call)
* **Truy cập thuộc tính** (attribute access)
* **Truyền đối tượng** làm tham số
* **Tạo hoặc sở hữu đối tượng khác**

---

## 2. Các hình thức tương tác phổ biến

### a. Gọi phương thức (Method Invocation)

```python
car.start()
```

Đối tượng `car` gọi phương thức `start` — tương tác trực tiếp.

---

### b. Truy cập thuộc tính (Attribute Access)

```python
print(car.engine.status)
```

Một đối tượng truy cập thuộc tính của một đối tượng khác được nó sở hữu.

---

### c. Giao tiếp thông qua đối tượng thứ ba

```python
class Controller:
    def control(self, car):
        car.start()
```

`Controller` tương tác gián tiếp với `Car`.

---

## 3. Các loại quan hệ giữa các lớp (Relationships Between Classes)

| Loại quan hệ | Ý nghĩa                                                                 | Biểu hiện trong Python        |
| ------------ | ----------------------------------------------------------------------- | ----------------------------- |
| Association (Kết hợp)  | Một đối tượng **biết về** đối tượng khác                                | Truyền làm đối số             |
| Aggregation (Tổng hợp)  | Một đối tượng **có** đối tượng khác, nhưng **không kiểm soát vòng đời** | Gán từ bên ngoài              |
| Composition (Cấu thành)  | Một đối tượng **sở hữu** đối tượng khác và **quản lý vòng đời**         | Khởi tạo bên trong `__init__` |
| Dependency (Phụ thuộc)  | Một đối tượng **phụ thuộc tạm thời** vào một đối tượng khác             | Gọi phương thức tạm thời      |

- Giải thích thêm

| Loại quan hệ    | Câu ví dụ đời thường                                                |
| --------------- | ------------------------------------------------------------------- |
| **Association** | “Sinh viên biết giảng viên” – nhưng hai bên sống riêng.             |
| **Aggregation** | “Một đội bóng có HLV” – HLV có thể huấn luyện đội khác.             |
| **Composition** | “Một chiếc xe có động cơ riêng” – tháo ra là xe không chạy được.    |
| **Dependency**  | “Báo cáo dùng máy in để in ra giấy” – xài xong thôi, không lưu lại. |

---

## 4. Ví dụ minh họa quan hệ

### a. Association

```python
class Teacher:
    def answer(self, question):
        return f"Answering: {question}"

class Student:
    def ask(self, teacher, question):
        return teacher.answer(question)
```

> `Student` biết đến `Teacher`, truyền vào như tham số → **association**

---

### b. Aggregation

```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self, engine):
        self.engine = engine
```

> `Car` chứa `Engine`, nhưng engine được cung cấp từ bên ngoài → **aggregation**

---

### c. Composition

```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()

    def start(self):
        self.engine.start()
```

> `Car` tạo và sở hữu `Engine`, quản lý toàn bộ vòng đời → **composition**

---

### d. Dependency

```python
class Printer:
    def print_invoice(self, invoice):
        print(f"Printing: {invoice}")

class Order:
    def generate_invoice(self, printer):
        printer.print_invoice("Invoice for Order #123")
```

> `Order` sử dụng `Printer` chỉ tại thời điểm gọi hàm → **dependency**

---

## 5. Sơ đồ minh họa quan hệ

### Quan hệ giữa Student và Teacher (Association)

```
+-----------+             +-----------+
|  Student  | --------->> |  Teacher  |
+-----------+             +-----------+
| - name    |             |           |
| +ask()    |             | +answer() |
+-----------+             +-----------+
```

---

### Quan hệ Aggregation

```
+-------+      uses-a      +--------+
|  Car  | <-------------   | Engine |
+-------+                  +--------+
| engine| (injected)       |        |
+-------+                  +--------+
```

---

### Quan hệ Composition

```
+-------+    has-a (strong)   +--------+
|  Car  | ------------------> | Engine |
+-------+                     +--------+
| +engine = Engine()          |
+-----------------------------+
```

---

## 6. So sánh: Kế thừa vs Tương tác

| Kế thừa (`is-a`)              | Tương tác (`has-a`, `uses-a`)                    |
| ----------------------------- | ------------------------------------------------ |
| Một class mở rộng class khác  | Một object sử dụng/giữ reference tới object khác |
| Liên kết chặt chẽ             | Mềm dẻo, tách biệt                               |
| Tái sử dụng code qua override | Dễ bảo trì, tái cấu trúc hệ thống                |

---

## 7. Nguyên lý thiết kế liên quan

* **Single Responsibility Principle**: mỗi class chỉ có một lý do để thay đổi
* **Law of Demeter (LoD)**: chỉ nên tương tác với các object "thân cận"
* **Tell, Don’t Ask**: gửi hành vi, không chỉ hỏi dữ liệu rồi xử lý bên ngoài
* **Dependency Injection**: dùng để tách biệt dependency, dễ kiểm thử và mở rộng

---

## 8. Kết luận

* Tương tác giữa các đối tượng là **nền tảng** của thiết kế hướng đối tượng.
* Việc hiểu rõ **association / aggregation / composition / dependency** sẽ giúp bạn:

  * Viết code **linh hoạt**
  * Dễ bảo trì
  * Tách biệt các thành phần tốt hơn
* Hãy sử dụng tương tác thay vì lạm dụng kế thừa để **giảm phụ thuộc và tăng khả năng mở rộng**.



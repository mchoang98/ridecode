# Bài 10: SINGLETON VÀ FACTORY METHOD PATTERN

---

## 1. Singleton Pattern

### 1.1. Ý tưởng

* Singleton là mẫu thiết kế đảm bảo **chỉ có một đối tượng duy nhất** của một class trong suốt chương trình.
* Các nơi trong chương trình muốn dùng thì **đều trỏ về cùng một object đó**, không tạo mới nữa.

### 1.2. Ví dụ ngoài đời

* Hiệu trưởng trong một trường học → chỉ có một người.
* Tổng thống một quốc gia → chỉ có một.
* Trong phần mềm: kết nối Database thường dùng Singleton để tránh mở nhiều kết nối gây tốn tài nguyên.

### 1.3. Code Python minh họa

```python
class Singleton:
    _instance = None   # biến class lưu instance duy nhất

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# ----- Client -----
s1 = Singleton()
s2 = Singleton()

print(s1 is s2)  # True, vì chỉ có 1 instance
```

### 1.4. Bài tập cho học viên

* Viết một class `DatabaseConnection` theo Singleton pattern.
* In ra id của object khi tạo 2 biến khác nhau, xem có giống nhau không.

---

## 2. Factory Method Pattern

### 2.1. Ý tưởng

* Factory Method là mẫu thiết kế để **tạo đối tượng mà không cần chỉ rõ class cụ thể**.
* Client chỉ gọi **factory** (nhà máy), factory sẽ quyết định tạo ra object nào.
* Giúp code dễ mở rộng, không cần sửa chỗ client.

### 2.2. Ví dụ ngoài đời

* Nhà máy sản xuất phương tiện: chỉ cần gọi "sản xuất xe máy" hoặc "sản xuất ô tô", ta không cần quan tâm chi tiết quy trình lắp ráp.
* Trong lập trình: bạn muốn tạo `Circle`, `Square`, `Triangle` thì chỉ cần gọi `ShapeFactory.create("circle")`.

### 2.3. Code Python minh họa

```python
from abc import ABC, abstractmethod

# ----- Product -----
class Vehicle(ABC):
    @abstractmethod
    def drive(self):
        pass

class Bike(Vehicle):
    def drive(self):
        return "Đi bằng xe máy"

class Car(Vehicle):
    def drive(self):
        return "Đi bằng ô tô"

# ----- Factory -----
class VehicleFactory:
    def create_vehicle(self, vehicle_type):
        if vehicle_type == "bike":
            return Bike()
        elif vehicle_type == "car":
            return Car()
        else:
            raise ValueError("Loại phương tiện không hợp lệ!")

# ----- Client -----
factory = VehicleFactory()
v1 = factory.create_vehicle("bike")
v2 = factory.create_vehicle("car")

print(v1.drive())  # Đi bằng xe máy
print(v2.drive())  # Đi bằng ô tô
```

### 2.4. Bài tập cho học viên

* Viết một `ShapeFactory` có thể tạo `Circle`, `Square`, `Triangle`.
* Mỗi shape có phương thức `draw()` in ra tên hình.
* Test bằng cách gọi `ShapeFactory.create("circle")` và gọi `draw()`.

---

## 3. So sánh và Ứng dụng

* **Singleton**: quản lý tài nguyên chung, khi chỉ cần 1 object duy nhất (ví dụ: logger, config, kết nối DB).
* **Factory Method**: tách việc tạo object ra khỏi client, giúp dễ mở rộng khi có nhiều loại sản phẩm khác nhau.


# Bài tập thực hành

### **Bài 1: Singleton - Kết nối Database**

Viết class `DatabaseConnection` theo Singleton Pattern.

* Mỗi lần gọi `DatabaseConnection()`, chỉ được tạo duy nhất 1 instance.
* In ra `id(object)` để kiểm tra, nếu tạo nhiều lần thì id phải giống nhau.

*Gợi ý kiểm tra:*

```python
db1 = DatabaseConnection()
db2 = DatabaseConnection()
print(db1 is db2)  # True
```

---

### **Bài 2: Singleton - Logger**

Viết class `Logger` theo Singleton Pattern.

* Có phương thức `log(message)` in ra tin nhắn.
* Khi gọi logger ở nhiều nơi trong code, phải dùng chung một instance.

*Ví dụ:*

```python
log1 = Logger()
log2 = Logger()
log1.log("Chương trình bắt đầu")
log2.log("Lỗi: Không tìm thấy file")
```

---

### **Bài 3: Factory - Hình học**

Viết `ShapeFactory` có thể tạo ra:

* `Circle` với phương thức `draw()` in ra "Vẽ hình tròn"
* `Square` với phương thức `draw()` in ra "Vẽ hình vuông"
* `Triangle` với phương thức `draw()` in ra "Vẽ hình tam giác"

*Ví dụ:*

```python
factory = ShapeFactory()
shape = factory.create_shape("circle")
shape.draw()
```

---

### **Bài 4: Factory - Phương tiện giao thông**

Viết `TransportFactory` có thể tạo ra:

* `Bike` → phương thức `move()` in ra "Đi bằng xe máy"
* `Car` → phương thức `move()` in ra "Đi bằng ô tô"
* `Bus` → phương thức `move()` in ra "Đi bằng xe buýt"

Viết đoạn code cho phép nhập từ bàn phím `"bike"`, `"car"`, `"bus"` và tạo object tương ứng.

---

### **Bài 5: Kết hợp Singleton + Factory**

Tạo một hệ thống đặt đồ uống:

* `DrinkFactory` có thể tạo `Coffee`, `Tea`.
* Có class `OrderManager` (theo Singleton pattern) quản lý danh sách order.
* Khi gọi `OrderManager.add_order(drink)`, order sẽ được lưu trong danh sách chung.

*Ví dụ:*

```python
factory = DrinkFactory()
coffee = factory.create_drink("coffee")
tea = factory.create_drink("tea")

order_manager = OrderManager()
order_manager.add_order(coffee)
order_manager.add_order(tea)

order_manager.show_orders()
# Output: Coffee, Tea
```

# Bài tập thực hành design pattern

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


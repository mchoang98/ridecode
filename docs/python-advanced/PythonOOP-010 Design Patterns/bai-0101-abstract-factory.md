# Bài 10: ABSTRACT FACTORY PATTERN

## 1. Abstract Factory Pattern

### 1.1. Ý tưởng

* **Abstract Factory** là mẫu thiết kế giúp tạo ra **một nhóm (family) đối tượng liên quan** mà không cần chỉ rõ class cụ thể.
* Client chỉ việc gọi factory, factory sẽ quyết định trả về những object nào cho phù hợp.
* Khác với Factory Method (chỉ tạo 1 sản phẩm), Abstract Factory thường tạo ra **nhiều sản phẩm cùng họ** để đảm bảo tính đồng bộ.

---

### 1.2. Ví dụ ngoài đời

* Quán nước có **combo**:

  * Hãng A: Coca + Nước cam.
  * Hãng B: Pepsi + Nước táo.
    👉 Khách chỉ cần chọn hãng, sẽ có nguyên combo đồ uống phù hợp.
* Trong phần mềm: UI Toolkit đa nền tảng.

  * WindowsFactory tạo Button & Checkbox theo style Windows.
  * MacFactory tạo Button & Checkbox theo style MacOS.

---

### 1.3. Code Python minh họa

```python
from abc import ABC, abstractmethod

# ----- Abstract Product -----
class SoftDrink(ABC):
    @abstractmethod
    def drink(self): pass

class Juice(ABC):
    @abstractmethod
    def drink(self): pass


# ----- Concrete Product cho Hãng A -----
class Coca(SoftDrink):
    def drink(self):
        print("Uống Coca của hãng A")

class OrangeJuice(Juice):
    def drink(self):
        print("Uống nước cam của hãng A")


# ----- Concrete Product cho Hãng B -----
class Pepsi(SoftDrink):
    def drink(self):
        print("Uống Pepsi của hãng B")

class AppleJuice(Juice):
    def drink(self):
        print("Uống nước táo của hãng B")


# ----- Abstract Factory -----
class DrinkFactory(ABC):
    @abstractmethod
    def create_soft_drink(self): pass

    @abstractmethod
    def create_juice(self): pass


# ----- Concrete Factory -----
class FactoryA(DrinkFactory):
    def create_soft_drink(self):
        return Coca()
    def create_juice(self):
        return OrangeJuice()

class FactoryB(DrinkFactory):
    def create_soft_drink(self):
        return Pepsi()
    def create_juice(self):
        return AppleJuice()


# ----- Client -----
def order(factory: DrinkFactory):
    drink1 = factory.create_soft_drink()
    drink2 = factory.create_juice()
    drink1.drink()
    drink2.drink()


# ----- Test -----
print("Khách chọn hãng A:")
order(FactoryA())

print("\nKhách chọn hãng B:")
order(FactoryB())
```

---

### 1.4. Bài tập cho học viên

* Viết chương trình Abstract Factory mô phỏng **nhà hàng phở**:

  * **Factory Hà Nội**: Phở bò Hà Nội + Nem rán.
  * **Factory Sài Gòn**: Phở gà Sài Gòn + Gỏi cuốn.
* Viết class, factory và client code in ra món ăn tương ứng khi khách chọn vùng miền.

---

## 2. So sánh với các pattern khác

* **Factory Method**: chỉ tạo 1 sản phẩm → linh hoạt nhưng chưa đảm bảo tính đồng bộ giữa nhiều sản phẩm.
* **Abstract Factory**: tạo **cả nhóm sản phẩm liên quan** → đảm bảo sự nhất quán (ví dụ: toàn bộ UI theo style Windows hoặc Mac).
* **Singleton**: hoàn toàn khác → dùng để đảm bảo chỉ có **1 instance duy nhất** trong hệ thống.

---

## 3. Ứng dụng thực tế

* Phát triển **giao diện đa nền tảng** (Windows, MacOS, Linux).
* Làm **game nhiều theme** (Ví dụ: theme rừng, theme sa mạc, theme băng tuyết → mỗi theme có hero, quái vật, vũ khí riêng).
* Xây dựng hệ thống **plugin** cần các nhóm chức năng đồng bộ.

---

👉 **Tóm gọn:**

* Abstract Factory = **gọi combo sản phẩm** (thay vì từng món lẻ như Factory Method).
* Giúp đảm bảo các object được tạo ra **phù hợp và đồng bộ với nhau**.


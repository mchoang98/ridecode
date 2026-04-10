# Bài 032 – Các Kiểu Kế Thừa Trong Python

## Mục tiêu bài học

* Hiểu được các kiểu kế thừa phổ biến trong lập trình hướng đối tượng.
* Biết cách cài đặt kế thừa trong Python.
* Nắm được cách hoạt động của `super()` và Method Resolution Order (MRO).
* Ứng dụng được kiến thức vào xây dựng mô hình phân cấp lớp hợp lý.

---

## 1. Khái niệm kế thừa

Kế thừa (Inheritance) là cơ chế cho phép lớp con kế thừa thuộc tính và phương thức từ lớp cha, giúp tái sử dụng mã và mở rộng chương trình dễ dàng.

---

## 2. Các kiểu kế thừa trong Python

### 2.1. Kế thừa đơn (Single Inheritance)

Chỉ có một lớp cha và một lớp con.

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

d = Dog()
d.speak()
d.bark()
```
![Logo](https://media.geeksforgeeks.org/wp-content/uploads/20200108135809/inheritance11.png)

---

### 2.2. Kế thừa đa cấp (Multilevel Inheritance)

Lớp con kế thừa từ lớp con khác → tạo thành chuỗi nhiều cấp.

```python
class Person:
    def show(self):
        print("I am a person")

class Employee(Person):
    def work(self):
        print("I am an employee")

class Manager(Employee):
    def manage(self):
        print("I manage team")

m = Manager()
m.show()
m.work()
m.manage()
```
![Logo](https://media.geeksforgeeks.org/wp-content/uploads/20200108144705/Multilevel-inheritance1.png)

---

### 2.3. Kế thừa đa hình (Multiple Inheritance)

Một lớp con kế thừa từ nhiều lớp cha.

```python
class Father:
    def skills(self):
        print("Coding")

class Mother:
    def hobbies(self):
        print("Music")

class Child(Father, Mother):
    pass

c = Child()
c.skills()
c.hobbies()
```
![Logo](https://media.geeksforgeeks.org/wp-content/uploads/20200108144424/multiple-inheritance1.png)


Python hỗ trợ kế thừa đa hình và xử lý vấn đề Diamond Problem bằng cơ chế MRO (Method Resolution Order).

---

### 2.4. Kế thừa phân cấp (Hierarchical Inheritance)

Một lớp cha được nhiều lớp con kế thừa.

```python
class Person:
    def greet(self):
        print("Hello")

class Student(Person):
    def study(self):
        print("Studying...")

class Teacher(Person):
    def teach(self):
        print("Teaching...")

s = Student()
t = Teacher()
s.greet()
t.greet()
```
![Logo](https://media.geeksforgeeks.org/wp-content/uploads/20200108144949/Hierarchical-inheritance1.png)

---

### 2.5. Kế thừa hỗn hợp (Hybrid Inheritance)

Là sự kết hợp nhiều kiểu kế thừa ở trên.

```python
class A:
    def methodA(self):
        print("A")

class B(A):
    def methodB(self):
        print("B")

class C:
    def methodC(self):
        print("C")

class D(B, C):
    def methodD(self):
        print("D")

d = D()
d.methodA()
d.methodB()
d.methodC()
d.methodD()
```

![Logo](https://media.geeksforgeeks.org/wp-content/uploads/Hybrid-Inheritance.png)


---

## 3. Ghi đè phương thức (Method Overriding)

Lớp con có thể định nghĩa lại phương thức của lớp cha để thay đổi hoặc mở rộng hành vi.

```python
class Animal:
    def speak(self):
        print("Animal sound")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

a = Animal()
d = Dog()
a.speak()
d.speak()
```



---

## 4. Ví dụ kế thừa đa cấp có ghi đè

```python
class Person:
    def __init__(self, id, name):
        self.id = id
        self.name = name

    def printDetails(self):
        print(self.id)
        print(self.name)

class Employee(Person):
    def __init__(self, id, name, salary):
        super().__init__(id, name)
        self.salary = salary

    def printDetails(self):
        super().printDetails()
        print(self.salary)

class SalesEmployee(Employee):
    def __init__(self, id, name, sal, si):
        super().__init__(id, name, sal)
        self.salesInc = si

    def printDetails(self):
        super().printDetails()
        print(self.salesInc)

# Khởi tạo
se = SalesEmployee(101, "Rahul", 40000, 2000)
e = Employee(102, "Sandub", 50000)

# Gọi phương thức
se.printDetails()
print("---")
e.printDetails()
```

Kết quả:

```
101
Rahul
40000
2000
---
102
Sandub
50000
```

---

## 5. MRO – Method Resolution Order

Khi một lớp kế thừa nhiều lớp cha và có phương thức trùng tên, Python sẽ tìm theo thứ tự từ trái sang phải trong danh sách lớp cha (sử dụng C3 Linearization).

```python
class A:
    def who(self):
        print("A")

class B(A):
    def who(self):
        print("B")

class C(A):
    def who(self):
        print("C")

class D(B, C):
    pass

d = D()
d.who()  # In ra: B
print(D.__mro__)  # Xem thứ tự kế thừa
```

---

## 6. Hàm `super()` trong Python

* Dùng để gọi constructor hoặc phương thức của lớp cha từ lớp con.
* Hữu ích khi ghi đè phương thức mà vẫn muốn sử dụng logic từ lớp cha.

---

## Tổng kết

| Kiểu kế thừa     | Mô tả                              |
| ---------------- | ---------------------------------- |
| Kế thừa đơn      | 1 lớp cha → 1 lớp con              |
| Kế thừa đa cấp   | 1 lớp cha → lớp con → lớp cháu     |
| Kế thừa đa hình  | 1 lớp con kế thừa từ nhiều lớp cha |
| Kế thừa phân cấp | 1 lớp cha → nhiều lớp con          |
| Kế thừa hỗn hợp  | Kết hợp nhiều kiểu trên            |

---

## Bài tập về nhà

1. Tạo lớp `Vehicle`, các lớp `Car`, `Bike`, `Truck` kế thừa từ `Vehicle`, ghi đè phương thức `describe()`.
2. Viết mô hình kế thừa cho hệ thống nhân sự: `Person` → `Employee` → `Manager`.
3. Thử kế thừa hỗn hợp gồm `Person`, `Logger`, `Employee`, trong đó `Employee` kế thừa từ cả `Person` và `Logger`.




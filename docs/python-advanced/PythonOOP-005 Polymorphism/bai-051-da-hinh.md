# Bài 5-1: Tính Đa hình (Polymorphism)

## **1. Định nghĩa tính đa hình**

Tính đa hình (Polymorphism) là **một trong bốn đặc trưng cơ bản của lập trình hướng đối tượng (OOP)**. Ba đặc trưng còn lại là:

* Tính đóng gói (Encapsulation)
* Tính kế thừa (Inheritance)
* Tính trừu tượng (Abstraction)

**Polymorphism** cho phép **một tên hàm hoặc phương thức có thể mang nhiều “hình dạng” khác nhau**, tùy vào ngữ cảnh.

---

## **2. Các loại đa hình**

Tính đa hình được chia thành hai loại chính:

1. **Đa hình tĩnh** (Static Polymorphism) – còn gọi là *compile-time polymorphism*
2. **Đa hình động** (Dynamic Polymorphism) – còn gọi là *runtime polymorphism*

---

## **3. Đa hình tĩnh**

### ⚠ Python KHÔNG hỗ trợ đa hình tĩnh theo kiểu truyền thống như các ngôn ngữ C++ hay Java.

Trong các ngôn ngữ đó, đa hình tĩnh thường được thực hiện thông qua **nạp chồng hàm (function overloading)** – tức là nhiều hàm cùng tên nhưng khác số lượng hoặc kiểu tham số.

#### ❌ Ví dụ sai trong Python:

```python
def fun(a, b):
    print(a)
    print(b)

def fun(a, b, c):
    print(a)
    print(b)
    print(c)

def fun(l):
    for x in l:
        print(x)

fun(10, 20)       # Lỗi!
fun([10, 20])     # In: 10 20
```

→ Lý do lỗi: Python **không cho phép định nghĩa nhiều hàm cùng tên**. Khi bạn khai báo nhiều lần, định nghĩa **cuối cùng sẽ ghi đè lên các định nghĩa trước đó**. Trong ví dụ trên, `fun(10, 20)` gây lỗi vì phiên bản `fun()` đang tồn tại chỉ nhận 1 đối số.

---

## **4. Tại sao Python không hỗ trợ nạp chồng hàm?**

Vì Python là ngôn ngữ **dynamically typed** – kiểu dữ liệu được xác định khi chạy (runtime), nên hệ thống không kiểm tra kiểu tham số khi biên dịch. Do đó, Python **không thể quyết định chọn hàm nào** trong các phiên bản đã định nghĩa như C++/Java.

---

## **5. Đa hình động trong Python**

### Đây là loại đa hình được **hỗ trợ mạnh mẽ trong Python**.

#### Ví dụ:

```python
def fun(data):
    print(data)

fun([10, 20])       # In ra: [10, 20]
fun("Sandeep")      # In ra: Sandeep
fun(123)            # In ra: 123
```

→ Một hàm duy nhất `fun()` có thể nhận nhiều loại dữ liệu khác nhau: list, string, int,... Điều này thể hiện tính **đa hình động** – hành vi khác nhau tùy thuộc kiểu dữ liệu truyền vào khi chạy chương trình.

---

## **6. Giả lập đa hình tĩnh bằng container**

Mặc dù không hỗ trợ nạp chồng hàm, Python có thể **giả lập đa hình tĩnh** bằng cách truyền vào **các container** như danh sách, tuple, set,... rồi xử lý bên trong.

#### Ví dụ:

```python
def fun(l):
    for x in l:
        print(x)

fun([10, 20, 30])      # In ra từng phần tử
fun(("a", "b", "c"))   # In ra: a, b, c
fun({1, 2, 3})         # In ra các số
```

→ Hàm `fun()` có thể xử lý danh sách, tuple, hay set bằng cách lặp qua từng phần tử. Đây là một cách xử lý linh hoạt giúp ta "mô phỏng" việc truyền nhiều đối số.

---

## **7. Ưu điểm của cách dùng container**

* Dễ mở rộng, linh hoạt.
* Có thể xử lý nhiều loại đối tượng khác nhau chỉ với một định nghĩa hàm.
* Phù hợp với triết lý của Python: **“Đơn giản là tốt nhất.”**

---

## **8. Tóm tắt**

| Hình thức         | Python có hỗ trợ? | Mô tả                                                                   |
| ----------------- | ----------------- | ----------------------------------------------------------------------- |
| Đa hình tĩnh      | ❌ Không           | Python không hỗ trợ nạp chồng hàm theo số/thứ tự tham số.               |
| Đa hình động      | ✅ Có              | Hàm có thể xử lý nhiều kiểu dữ liệu khác nhau tại runtime.              |
| Mô phỏng overload | ✅ Có              | Có thể dùng `*args`, `**kwargs` hoặc container như list/tuple để xử lý. |

---

## 📌 Gợi ý thêm cho người học

Nếu muốn linh hoạt hơn khi viết hàm, hãy tìm hiểu:

* `*args`: Nhận số lượng đối số vị trí không giới hạn
* `**kwargs`: Nhận số lượng đối số tên (key=value) không giới hạn


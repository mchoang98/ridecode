
# Bài 8-1 Module trong Python

---

## 1. Khái niệm về Module

* **Module** là một tệp (file) Python (`.py`) chứa các **hàm, biến, lớp** có thể tái sử dụng trong nhiều chương trình.
* Thay vì viết lại code, ta có thể **import** module để sử dụng.

Lợi ích:

* Tái sử dụng code.
* Dễ quản lý, dễ bảo trì.
* Chia nhỏ chương trình lớn thành nhiều phần.

---

## 2. Phân loại Module trong Python

### (a) Built-in Modules

Là các module được Python cung cấp sẵn, không cần cài thêm.
Ví dụ:

* `math`: toán học (sqrt, pow, sin, cos…)
* `random`: số ngẫu nhiên
* `datetime`: ngày giờ
* `sys`: thông tin hệ thống

Cách sử dụng:

```python
import math
print(math.sqrt(16))  # 4.0

import random
print(random.randint(1, 100))  # số ngẫu nhiên 1–100
```

Có thể đổi tên module cho ngắn gọn:

```python
import math as m
print(m.pi)   # 3.141592653589793
```

### (b) Custom Modules

* Người lập trình tự tạo ra module dưới dạng file `.py`.
* Ví dụ, tạo file `mymath.py`:

```python
def cong(a, b):
    return a + b

def tru(a, b):
    return a - b
```

Sử dụng trong file `main.py`:

```python
import mymath

print(mymath.cong(5, 3))  # 8
```

---

## 3. Package trong Python

* **Package** là một **thư mục** chứa nhiều module, có file `__init__.py` (dù rỗng cũng được).
* Dùng để tổ chức code khi dự án lớn.

Ví dụ cấu trúc:

```
mypackage/
    __init__.py
    tinhcong.py
    tinhtru.py
```

Trong `tinhcong.py`:

```python
def add(a, b):
    return a + b
```

Trong file `main.py`:

```python
from mypackage import tinhcong
print(tinhcong.add(2, 3))   # 5
```

---

## 4. Thứ tự tìm kiếm Module trong Python

Khi `import`, Python tìm theo thứ tự:

1. **Built-in modules** (ưu tiên cao nhất).
2. **Thư mục hiện tại (current directory)**.
3. **PYTHONPATH** (biến môi trường).
4. **Thư viện cài đặt toàn hệ thống**.

👉 Nghĩa là nếu bạn tạo file `random.py` trong thư mục hiện tại, khi `import random` thì Python sẽ lấy file của bạn chứ không phải built-in `random`. Điều này dễ gây **lỗi che khuất** (shadowing).

---

## 5. External Modules & Cộng đồng Python

* Ngoài built-in, ta có thể cài thêm module từ cộng đồng qua **pip**.
* Ví dụ cài module `requests` để làm việc với HTTP:

```bash
pip install requests
```

Sử dụng:

```python
import requests
res = requests.get("https://jsonplaceholder.typicode.com/todos/1")
print(res.json())
```

👉 Python có một hệ sinh thái cực lớn, hầu như mọi thứ đều có thư viện hỗ trợ (AI, web, dữ liệu, game…).

---

## 6. Tổng kết

* **Module** = 1 file `.py` có thể import.
* Có **built-in modules** và **custom modules**.
* **Package** = thư mục chứa nhiều module.
* Có thể dùng `import … as …` để đặt tên ngắn gọn.
* Thứ tự tìm kiếm module quan trọng để tránh lỗi.
* Có thể cài **external modules** từ cộng đồng qua `pip`.

---

## 7. Bài tập vận dụng

### **Bài 1: Built-in `math`**

Viết chương trình:

* Nhập vào một số nguyên `n`.
* In ra căn bậc 2, bình phương và giá trị cos(n) bằng `math`.

---

### **Bài 2: Built-in `random`**

Viết chương trình:

* Sinh ra 10 số ngẫu nhiên trong khoảng 1 → 50.
* In ra số lớn nhất và nhỏ nhất trong danh sách đó.

---

### **Bài 3: Built-in `datetime`**

Viết chương trình in ra:

* Ngày giờ hiện tại.
* Năm hiện tại.
* Kiểm tra xem năm hiện tại có phải **năm nhuận** không.

---

### **Bài 4: Custom module `temperature.py`**

1. Tạo file `temperature.py` với 2 hàm:

   ```python
   def c_to_f(c):
       return c * 9/5 + 32

   def f_to_c(f):
       return (f - 32) * 5/9
   ```
2. Trong `main.py`, import module này.
3. Thử đổi:

   * 0°C → ? °F
   * 100°F → ? °C

---

### **Bài 5: Custom module `stringtools.py`**

1. Tạo file `stringtools.py` với các hàm:

   * `to_upper(s)` → trả về chuỗi viết hoa.
   * `count_vowels(s)` → đếm số nguyên âm (a, e, i, o, u).
2. Trong `main.py`, import và chạy thử với chuỗi `"Hello Python"`.


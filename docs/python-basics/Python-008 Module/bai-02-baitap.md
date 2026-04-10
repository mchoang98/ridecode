# Bài 8-2 Bài tập vận dụng module, package trong Python
## (A) Built-in Modules

### **Bài 1. Dùng `math`**

**Yêu cầu:**

* Tính căn bậc 2 của 25.
* Tính lũy thừa 2³.
* Tính sin(π/2).

**Các bước:**

1. Tạo file `bai1.py`.
2. Import module `math`.
3. Gọi `math.sqrt(25)`.
4. Gọi `math.pow(2, 3)`.
5. Gọi `math.sin(math.pi / 2)`.
6. In kết quả ra màn hình.

---

### **Bài 2. Dùng `random`**

**Yêu cầu:**

* Tạo danh sách gồm 5 số nguyên ngẫu nhiên từ 1 → 100.

**Các bước:**

1. Tạo file `bai2.py`.
2. Import module `random`.
3. Sử dụng vòng lặp `for` 5 lần.
4. Mỗi lần gọi `random.randint(1, 100)`.
5. Thêm số đó vào một danh sách.
6. In danh sách ra màn hình.

---

### **Bài 3. Dùng `datetime`**

**Yêu cầu:**

* In ra ngày giờ hiện tại.

**Các bước:**

1. Tạo file `bai3.py`.
2. Import `datetime`.
3. Gọi `datetime.datetime.now()`.
4. In ra kết quả.

---

### **Bài 4. Dùng `sys`**

**Yêu cầu:**

* In ra đường dẫn Python đang chạy.

**Các bước:**

1. Tạo file `bai4.py`.
2. Import `sys`.
3. In `sys.executable`.

---

### **Bài 5. Đổi tên module**

**Yêu cầu:**

* Import `math` với tên `m`.
* In `m.pi` và `m.e`.

**Các bước:**

1. Tạo file `bai5.py`.
2. Import module `math` với cú pháp `import math as m`.
3. In `m.pi`.
4. In `m.e`.

---

## (B) Custom Modules

### **Bài 6. Tạo module `mymath.py`**

**Yêu cầu:**

* Tạo module `mymath.py` với các hàm `nhan`, `chia`.
* Import vào `main.py` và sử dụng.

**Các bước:**

1. Tạo file `mymath.py`.
2. Trong đó định nghĩa:

   ```python
   def nhan(a, b):
       return a * b

   def chia(a, b):
       if b == 0:
           return "Không chia được cho 0"
       return a / b
   ```
3. Tạo file `main.py`.
4. Import `mymath`.
5. Gọi thử `mymath.nhan(4, 5)` và `mymath.chia(10, 2)`.

---

### **Bài 7. Package `geometry`**

**Yêu cầu:**

* Tạo package `geometry` có file `circle.py`.
* Viết hàm tính diện tích, chu vi hình tròn.

**Các bước:**

1. Tạo thư mục `geometry`.
2. Trong `geometry`, tạo file `__init__.py` (có thể để trống).
3. Tạo file `circle.py` với nội dung:

   ```python
   def area(r):
       return 3.14 * r * r

   def perimeter(r):
       return 2 * 3.14 * r
   ```
4. Tạo file `main.py`.
5. Import:

   ```python
   from geometry import circle
   print(circle.area(5))
   print(circle.perimeter(5))
   ```

---

### **Bài 8. Module `mystring.py`**

**Yêu cầu:**

* Viết hàm `dem_nguyen_am(s)` → đếm số nguyên âm (a, e, i, o, u) trong chuỗi.

**Các bước:**

1. Tạo file `mystring.py`.
2. Viết:

   ```python
   def dem_nguyen_am(s):
       vowels = "aeiouAEIOU"
       count = 0
       for ch in s:
           if ch in vowels:
               count += 1
       return count
   ```
3. Tạo file `main.py`.
4. Import `mystring`.
5. Gọi `mystring.dem_nguyen_am("Hello Python")`.

---

### **Bài 9. Module `factorial.py`**

**Yêu cầu:**

* Viết hàm tính giai thừa `n!`.
* Import vào `main.py`, tính thử với n=5.

**Các bước:**

1. Tạo file `factorial.py`.
2. Viết:

   ```python
   def factorial(n):
       if n == 0 or n == 1:
           return 1
       result = 1
       for i in range(2, n+1):
           result *= i
       return result
   ```
3. Tạo file `main.py`.
4. Import `factorial`.
5. Gọi `factorial.factorial(5)` và in ra.

---

### **Bài 10. Shadowing Module**

**Yêu cầu:**

* Tạo file `random.py` trong thư mục hiện tại.
* Thử import `random` và quan sát kết quả.

**Các bước:**

1. Trong thư mục dự án, tạo file `random.py`.
2. Viết:

   ```python
   def test():
       return "Đây là random.py do bạn tạo"
   ```
3. Tạo file `main.py`.
4. Viết:

   ```python
   import random
   print(random.test())
   ```
5. Chạy chương trình → bạn sẽ thấy Python import file `random.py` của mình, không phải built-in `random`.




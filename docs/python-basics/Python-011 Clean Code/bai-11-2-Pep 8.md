

# BÀI 11-2: PEP 8 – Quy tắc viết mã Python chuẩn

---

## 1. PEP là gì?

* **PEP** là viết tắt của **Python Enhancement Proposal** – đề xuất cải tiến Python.
* **PEP 8** là tài liệu hướng dẫn về **quy tắc viết mã Python** rõ ràng, thống nhất, dễ đọc và dễ bảo trì.

> "Code is read much more often than it is written." – Guido van Rossum (cha đẻ Python)

---

## 2. Tại sao phải tuân theo PEP 8?

* Làm cho code **dễ đọc hơn**
* Dễ làm việc nhóm, dễ review code
* Giúp code đồng nhất, chuyên nghiệp
* Tránh gây nhầm lẫn hoặc bug do format lộn xộn

---

## 3. Các quy tắc PEP 8 cơ bản

### 3.1. **Thụt lề (Indentation)**

* Sử dụng **4 dấu cách (space)** cho mỗi mức thụt lề
* Không dùng tab (`\t`)

```python
def tinh_tong(a, b):
    tong = a + b
    return tong
```

---

### 3.2. **Chiều dài dòng**

* Mỗi dòng không dài quá **79 ký tự**
* Nếu cần dài hơn, nên tách dòng hoặc viết xuống dòng tiếp theo có thụt lề

```python
result = ham_gia_long_voi_nhieu_dieu_kien(so_a, so_b, so_c, bien_phu, 
                                          trang_thai=True)
```

---

### 3.3. **Khoảng trắng**

* Không đặt khoảng trắng **sai chỗ**
* Có khoảng trắng **sau dấu phẩy**, **sau toán tử**, **sau từ khóa `if`, `for`**, nhưng **không ở trong cặp dấu ngoặc**

```python
# Sai
x=1
ham( a, b )

# Đúng
x = 1
ham(a, b)
```

---

### 3.4. **Đặt tên biến và hàm**

* Tên biến, hàm: dùng **chữ thường** và **gạch dưới (`snake_case`)**
* Tên hằng số: viết hoa toàn bộ (`UPPER_CASE`)
* Tên class: dùng **chữ hoa đầu mỗi từ** (`PascalCase`)

```python
def tinh_giai_thua(n):
    ...

PI = 3.14

class HinhChuNhat:
    ...
```

---

### 3.5. **Dòng trống**

* Dùng **2 dòng trống** giữa các định nghĩa hàm hoặc class
* Dùng **1 dòng trống** giữa các khối logic lớn trong hàm

```python
def ham1():
    ...

def ham2():
    ...
```

---

### 3.6. **Gán giá trị**

```python
# Sai
x             = 1
y             = 2

# Đúng
x = 1
y = 2
```

---

### 3.7. **Import module**

* Đặt import ở đầu file
* Nhóm import theo thứ tự:

  1. Thư viện chuẩn
  2. Thư viện bên thứ ba
  3. Thư viện nội bộ
* Mỗi `import` một dòng

```python
# Đúng
import os
import sys

import numpy as np

from my_module import ham_chinh
```

---

### 3.8. **Chú thích và docstring**

* Dùng dấu `#` để viết chú thích ngắn
* Dùng **docstring ba nháy (`"""`)** cho mô tả hàm hoặc class

```python
def tinh_tong(a, b):
    """
    Trả về tổng của hai số a và b.
    """
    return a + b
```

---

## 4. Công cụ hỗ trợ kiểm tra PEP 8

* **flake8**: Phát hiện lỗi PEP 8
* **black**: Tự động định dạng code theo chuẩn
* **pylint**: Kiểm tra chất lượng code, phát hiện bug

Cài đặt:

```bash
pip install flake8 black pylint
```

---

## 5. Một ví dụ đúng chuẩn PEP 8

```python
def la_so_nguyen_to(n: int) -> bool:
    """
    Kiểm tra xem một số có phải là số nguyên tố không.
    """
    if n < 2:
        return False

    for uoc in range(2, int(n ** 0.5) + 1):
        if n % uoc == 0:
            return False

    return True


def in_cac_so_nguyen_to(den: int):
    """
    In ra các số nguyên tố từ 2 đến 'den'.
    """
    for i in range(2, den + 1):
        if la_so_nguyen_to(i):
            print(i)
```

---

## 6. Bài tập luyện tập

1. Viết lại đoạn mã sau theo chuẩn PEP 8:

```python
def TinhTong(a,b):return a+b
```

2. Kiểm tra file Python của bạn bằng `flake8`
3. Dùng `black` để định dạng tự động file `.py`

---

## 7. Tổng kết

| Điều cần nhớ                            |
| --------------------------------------- |
| Dùng 4 dấu cách thay vì tab             |
| Tên hàm/biến theo `snake_case`          |
| Class theo `PascalCase`                 |
| Có docstring cho hàm và class           |
| Không dài dòng, không viết dính liền    |
| Dùng công cụ tự động kiểm tra và format |


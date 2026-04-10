# BÀI GIẢNG: MODULE VÀ PACKAGE TRONG PYTHON

---

## I. Mục tiêu bài học

Sau bài học này, học sinh sẽ:

* Hiểu khái niệm **module** và **package** trong Python.
* Biết cách tạo và sử dụng module từ file `.py`.
* Biết cách chia nhỏ chương trình thành nhiều phần dễ quản lý.
* Biết cách sử dụng thư viện có sẵn và tự viết package đơn giản.

---

## II. Khái niệm cơ bản

### 1. **Module là gì?**

* Một **module** là **một file Python (.py)** chứa các biến, hàm, class.
* Mục đích: **tái sử dụng** và **tổ chức code rõ ràng hơn**.

Ví dụ: file `math_tools.py`

```python
def add(a, b):
    return a + b
```

Sử dụng:

```python
import math_tools

print(math_tools.add(3, 5))
```

Hoặc:

```python
from math_tools import add

print(add(3, 5))
```

---

### 2. **Package là gì?**

* Một **package** là **một thư mục chứa nhiều module**.
* Thư mục đó **phải có file `__init__.py`** (có thể để trống).
* Dùng để nhóm các module liên quan lại với nhau.

Cấu trúc:

```
my_package/
    __init__.py
    math_tools.py
    string_tools.py
```

Dùng:

```python
from my_package import math_tools

print(math_tools.add(2, 3))
```

---

## III. Tạo module và sử dụng

### Bước 1: Tạo file `greetings.py`

```python
def say_hello(name):
    return f"Hello, {name}!"
```

### Bước 2: Tạo file `main.py`

```python
import greetings

print(greetings.say_hello("Nam"))
```

Chạy:

```bash
python main.py
```

---

## IV. Tạo package và sử dụng

### Bước 1: Tạo cấu trúc thư mục:

```
my_app/
    main.py
    tools/
        __init__.py
        math_utils.py
```

### `math_utils.py`:

```python
def multiply(a, b):
    return a * b
```

### `main.py`:

```python
from tools import math_utils

print(math_utils.multiply(4, 5))
```

Chạy:

```bash
python main.py
```

---

## V. Một số cách import khác

| Cách viết                 | Ý nghĩa                   |
| ------------------------- | ------------------------- |
| `import module`           | Import toàn bộ            |
| `from module import func` | Import riêng một hàm      |
| `from module import *`    | Import tất cả (nên tránh) |
| `import module as m`      | Đặt tên ngắn              |

Ví dụ:

```python
from math_tools import add as cong

print(cong(1, 2))
```

---

## VI. Module chuẩn và module bên ngoài

| Loại                 | Ví dụ                                          |
| -------------------- | ---------------------------------------------- |
| **Chuẩn (built-in)** | `math`, `random`, `os`, `datetime`             |
| **Ngoài (external)** | `requests`, `pandas`, `flask` (cài bằng `pip`) |
| **Tự tạo**           | File `.py` do mình viết                        |

---

## VII. Lưu ý khi dùng module/package

* File `.py` phải nằm cùng thư mục hoặc trong **Python path**.
* Khi tạo package, **luôn cần file `__init__.py`** (có thể để trống).
* Không đặt tên file trùng với module có sẵn (ví dụ: đừng đặt tên file là `random.py`).

---

## VIII. Bài tập thực hành

1. Tạo thư mục `project_modular`.
2. Bên trong có:

   * `main.py`
   * Thư mục `utils/` chứa:

     * `__init__.py`
     * `maths.py`: chứa hàm cộng, trừ
     * `texts.py`: chứa hàm đảo ngược chuỗi
3. Trong `main.py`, import và sử dụng các hàm.
4. Chạy chương trình từ dòng lệnh.

---

## IX. Kết luận

* Module giúp chia nhỏ chương trình.
* Package giúp nhóm các module lại với nhau.
* Làm quen với module/package là bước đầu để viết chương trình lớn, hoặc tạo thư viện chia sẻ cho người khác.


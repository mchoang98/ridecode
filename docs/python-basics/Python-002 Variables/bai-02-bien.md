
# Bài 02: Biến, Kiểu Dữ Liệu và Ép Kiểu trong Python



## Mục tiêu

* Hiểu được khái niệm biến trong Python.
* Biết cách khai báo, đặt tên và gán giá trị cho biến.
* Nắm được các kiểu dữ liệu cơ bản trong Python.
* Biết cách ép kiểu dữ liệu khi cần thiết.

---

## 1. Biến trong Python

### 1.1 Biến là gì?

Biến là tên gọi đại diện cho một vùng nhớ trong máy tính, dùng để lưu trữ dữ liệu. Khi cần sử dụng lại dữ liệu, ta chỉ cần gọi tên biến.

### 1.2 Khai báo biến

Trong Python, không cần khai báo kiểu dữ liệu cho biến. Chỉ cần gán giá trị:

```python
name = "Alice"
age = 20
height = 1.65
```

** Hình minh họa:**

<img src= "https://www.datamentor.io/sites/tutorial2program/files/assign-value-to-variable.png" width="500" />


### 1.3 Quy tắc đặt tên biến

* Tên biến bắt đầu bằng chữ cái hoặc dấu gạch dưới (\_).
* Không được bắt đầu bằng số.
* Không chứa khoảng trắng hoặc ký tự đặc biệt.
* Không trùng với từ khóa của Python.
* Phân biệt chữ hoa và chữ thường.

| Ví dụ đúng     | Ví dụ sai  |
| -------------- | ---------- |
| `student_name` | `1name`    |
| `_score`       | `my-score` |
| `total`        | `class`    |

**Hình minh họa:**

<img src="https://hi-static.z-dn.net/files/d7e/8b67b00b45c03edb4809cb80843352eb.jpg" />


### 1.4 Gán giá trị cho biến

Python sử dụng dấu `=` để gán giá trị:

```python
x = 10
message = "Hello"
```

### 1.5 Thay đổi giá trị của biến

Biến có thể gán lại giá trị mới, kể cả giá trị khác kiểu:

```python
x = 5
x = "Python"
```

Trong ví dụ trên, `x` ban đầu là số nguyên, sau đó được gán thành chuỗi. Python cho phép thay đổi kiểu dữ liệu như vậy.

---

## 2. Các kiểu dữ liệu cơ bản

Python hỗ trợ nhiều kiểu dữ liệu. Một số kiểu phổ biến gồm:

| Kiểu dữ liệu | Ví dụ           | Mô tả                  |
| ------------ | --------------- | ---------------------- |
| `int`        | `42`, `-5`      | Số nguyên              |
| `float`      | `3.14`, `-0.5`  | Số thực (số thập phân) |
| `str`        | `"Hello"`       | Chuỗi ký tự            |
| `bool`       | `True`, `False` | Kiểu logic (đúng/sai)  |
| `list`       | `[1, 2, 3]`     | Danh sách              |
| `dict`       | `{"a": 1}`      | Từ điển (key-value)    |

**Chèn hình minh họa:**

<img src = "https://images.theengineeringprojects.com/image/main/2020/06/Datatypes-in-python.jpg" />

### Ví dụ:

```python
name = "Alice"     # str
age = 25           # int
height = 1.65      # float
is_student = True  # bool
```

---

## 3. Ép kiểu dữ liệu (Type Casting)

### 3.1 Ép kiểu tường minh

Python hỗ trợ các hàm ép kiểu như:

| Hàm ép kiểu | Công dụng              |
| ----------- | ---------------------- |
| `int()`     | Chuyển sang số nguyên  |
| `float()`   | Chuyển sang số thực    |
| `str()`     | Chuyển sang chuỗi      |
| `bool()`    | Chuyển sang kiểu logic |

Ví dụ:

```python
a = "10"
b = int(a)  # b = 10 (int)
```

**Lưu ý:** Khi ép từ `float` sang `int`, phần thập phân bị cắt bỏ:

```python
x = 5.99
y = int(x)  # y = 5
```

### 3.2 Ép kiểu ngầm định

Python tự động ép kiểu khi thực hiện các phép toán hỗn hợp:

```python
x = 5       # int
y = 2.5     # float
z = x + y   # z = 7.5 (float)
```

**Chèn hình minh họa:**
<img src ="https://i.ytimg.com/vi/Kjziohpfooo/sddefault.jpg" width="600" height="400"/>
---

## 4. Ví dụ tổng hợp

```python
name = "Linh"
age = 21
score = "9.5"

# Hiển thị thông tin
print("Họ tên:", name)
print("Tuổi sau 3 năm:", age + 3)
print("Điểm học tập:", float(score))




# Bài 4-3: Pattern Matching trong Python (match-case)

## 1. Giới thiệu

* Python 3.10 trở lên hỗ trợ cú pháp **match-case** (giống `switch-case` ở nhiều ngôn ngữ khác).
* Nhưng mạnh hơn `switch-case`, vì Python hỗ trợ **pattern matching** – tức là không chỉ so sánh giá trị, mà còn có thể "so khớp mẫu" dữ liệu phức tạp (list, tuple, dict, class).

---

## 2. Cú pháp cơ bản

```python
match giá_trị:
    case mẫu_1:
        # code
    case mẫu_2:
        # code
    case _:
        # mặc định (default)
```

* `match`: từ khóa để bắt đầu.
* `case`: từng trường hợp so khớp.
* `_`: giống `default` trong switch-case (khớp với mọi giá trị còn lại).

---

## 3. Các kiểu pattern

### 3.1. Value Pattern (so sánh giá trị)

So khớp trực tiếp với hằng số hoặc giá trị cụ thể.

Ví dụ:

```python
day = 3
match day:
    case 1:
        print("Thứ Hai")
    case 2:
        print("Thứ Ba")
    case 3:
        print("Thứ Tư")
    case _:
        print("Không hợp lệ")
```

---

### 3.2. Variable Pattern (gán biến)

Nếu không khớp với case nào trước đó, ta có thể gán vào biến.

Ví dụ:

```python
x = 42
match x:
    case 0:
        print("Zero")
    case other:
        print(f"Giá trị khác: {other}")
```

---

### 3.3. Sequence Pattern (danh sách, tuple)

So khớp cấu trúc dạng list/tuple.

Ví dụ:

```python
point = (0, 5)

match point:
    case (0, y):
        print(f"Nằm trên trục Oy tại {y}")
    case (x, 0):
        print(f"Nằm trên trục Ox tại {x}")
    case (x, y):
        print(f"Tọa độ ({x}, {y})")
```

---

### 3.4. Mapping Pattern (dictionary)

So khớp với dict có key nhất định.

Ví dụ:

```python
student = {"name": "An", "age": 20}

match student:
    case {"name": n, "age": a}:
        print(f"Sinh viên {n}, {a} tuổi")
    case {"name": n}:
        print(f"Sinh viên {n}")
    case _:
        print("Không rõ thông tin")
```

---

### 3.5. OR Pattern (nhiều giá trị cùng case)

Dùng dấu `|` để gom nhiều giá trị.

Ví dụ:

```python
color = "red"

match color:
    case "red" | "blue" | "green":
        print("Đây là màu cơ bản")
    case _:
        print("Màu khác")
```

---

### 3.6. Guard Pattern (thêm điều kiện if)

Thêm điều kiện phụ sau `if`.

Ví dụ:

```python
num = 10

match num:
    case x if x % 2 == 0:
        print("Số chẵn")
    case x if x % 2 != 0:
        print("Số lẻ")
```

---

### 3.7. Class Pattern (so khớp object)

So khớp thuộc tính của object theo định nghĩa class.

Ví dụ:

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)

match p:
    case Point(x=0, y=y):
        print(f"Nằm trên trục Oy tại {y}")
    case Point(x=x, y=y):
        print(f"Tọa độ ({x}, {y})")
```

---

## 4. Ứng dụng thực tế

* **Menu chương trình**: chọn chức năng dựa vào số nhập.
* **Xử lý dữ liệu JSON**: match theo key của dict.
* **Xử lý dữ liệu phức tạp**: phân loại tuple, list.
* **Viết code ngắn gọn hơn** thay cho nhiều `if-elif-else`.

---

## 5. Tổng kết

* `match-case` mạnh hơn `switch-case` nhờ pattern matching.
* Các pattern phổ biến: **Value, Variable, Sequence, Mapping, OR, Guard, Class**.
* Luôn có `case _` để xử lý mặc định.



# Bài tập Match-Case (Python ≥ 3.10)

**Bài 1. Value Pattern (so sánh giá trị)**
Nhập vào số từ 1–7, dùng match-case in ra tên ngày trong tuần.
Nếu nhập ngoài phạm vi thì in “Không hợp lệ”.

---

**Bài 2. Variable Pattern (gán biến)**
Nhập vào một số nguyên.

* Nếu bằng 0 → in “Zero”.
* Ngược lại → gán vào biến và in “Giá trị khác: x”.

---

**Bài 3. OR Pattern (hoặc)**
Viết chương trình nhập vào màu (chuỗi).

* Nếu là “red” | “blue” | “green” → in “Màu cơ bản”.
* Ngược lại → in “Màu khác”.

---

**Bài 4. Guard Pattern (if trong case)**
Nhập vào một số nguyên.

* Nếu số chẵn → in “Số chẵn”.
* Nếu số lẻ → in “Số lẻ”.

---

**Bài 5. Sequence Pattern (tuple)**
Cho một điểm tọa độ (x, y).

* Nếu x = 0 → in “Nằm trên trục Oy”.
* Nếu y = 0 → in “Nằm trên trục Ox”.
* Ngược lại → in “Điểm (x, y)”.

---

**Bài 6. Sequence Pattern (list)**
Nhập vào một danh sách có 3 phần tử.

* Nếu \[0, \_, \_] → in “Bắt đầu bằng số 0”.
* Nếu \[\_, 0, \_] → in “Số 0 nằm ở giữa”.
* Nếu \[\_, \_, 0] → in “Kết thúc bằng số 0”.
* Ngược lại → in danh sách vừa nhập.

---

**Bài 7. Mapping Pattern (dict)**
Cho dict lưu thông tin sinh viên: `{"name": "An", "age": 20}`.

* Nếu có cả name và age → in `Sinh viên {name}, {age} tuổi`.
* Nếu chỉ có name → in `Sinh viên {name}`.
* Ngược lại → in `Không rõ thông tin`.


---

**Bài 8. Menu bằng match-case**
Viết chương trình hiển thị menu:

```
1. Cộng
2. Trừ
3. Nhân
4. Chia
```

Người dùng chọn số (1–4), sau đó nhập 2 số và thực hiện phép toán tương ứng.
Nếu chọn khác → in “Lựa chọn không hợp lệ”.

---

**Bài 9. Class Pattern**
Định nghĩa lớp `Point(x, y)`.
Viết match-case:

* Nếu x = 0 → in “Trên trục Oy”.
* Nếu y = 0 → in “Trên trục Ox”.
* Ngược lại → in “Điểm (x, y)”.

---

**Bài 10. Ứng dụng tổng hợp**
Viết chương trình nhập một danh sách bất kỳ.

* Nếu là list rỗng → in “Danh sách trống”.
* Nếu là list có 1 phần tử → in “Danh sách có 1 phần tử: …”.
* Nếu là list có 2 phần tử → in “Danh sách có 2 phần tử: … và …”.
* Nếu có nhiều hơn 2 phần tử → in “Danh sách có nhiều phần tử, phần đầu là …”.


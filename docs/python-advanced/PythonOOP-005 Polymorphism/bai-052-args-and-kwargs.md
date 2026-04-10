# Bài 5-2 `*args` và `**kwargs`

---

## **I. Mục tiêu phần học**

* Hiểu rõ bản chất và cách hoạt động của `*args` và `**kwargs`.
* Phân biệt khi nào nên dùng `*args`, khi nào nên dùng `**kwargs`.
* Biết áp dụng vào việc **giả lập đa hình** và viết hàm linh hoạt trong Python.
* Biết kết hợp `*args`, `**kwargs` với các loại tham số khác.

---

## **II. `*args`: Đối số không xác định theo vị trí**

### 1. Giải thích

* `*args` (arguments) cho phép **truyền vào một số lượng đối số không xác định** dưới dạng **vị trí (positional arguments)**.
* Python sẽ tự động gom các đối số đó lại thành **một tuple**.

### 2. Cú pháp

```python
def ten_ham(*args):
    # args là một tuple chứa các đối số vị trí
```

### 3. Ví dụ

```python
def tong_tat_ca(*args):
    print("args =", args)
    return sum(args)

print(tong_tat_ca(1, 2, 3))            # Kết quả: 6
print(tong_tat_ca(10, 20, 30, 40, 50)) # Kết quả: 150
```

### 4. Ứng dụng

Khi bạn **không biết trước sẽ có bao nhiêu tham số** được truyền vào, dùng `*args` để thu nhận chúng.

---

## **III. `**kwargs`: Đối số không xác định theo tên (key=value)**

### 1. Giải thích

* `**kwargs` (keyword arguments) cho phép truyền vào **số lượng đối số không xác định có tên** dưới dạng `key=value`.
* Python sẽ gom chúng lại thành một **dictionary**.

### 2. Cú pháp

```python
def ten_ham(**kwargs):
    # kwargs là một dict chứa các đối số có tên
```

### 3. Ví dụ

```python
def in_thong_tin(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

in_thong_tin(ten="Phú", tuoi=25, ngon_ngu="Python")
```

### 4. Kết quả

```
ten: Phú
tuoi: 25
ngon_ngu: Python
```

### 5. Ứng dụng

Dùng `**kwargs` khi muốn truyền vào **các cấu hình hoặc tham số tùy chọn**, ví dụ: cấu hình API, render template, thông tin user,...

---

## **IV. Kết hợp `*args` và `**kwargs`**

### 1. Ví dụ tổng hợp

```python
def demo(a, *args, **kwargs):
    print("a =", a)
    print("args =", args)
    print("kwargs =", kwargs)

demo(1, 2, 3, x=10, y=20)
```

### 2. Kết quả

```
a = 1
args = (2, 3)
kwargs = {'x': 10, 'y': 20}
```

---

## **V. Quy tắc khai báo tham số**

Trong định nghĩa hàm, thứ tự các loại tham số nên như sau:

```
def ham(tham_số_bắt_buộc, *args, tham_số_mặc_định, **kwargs):
```

Nếu vi phạm thứ tự, Python sẽ báo lỗi cú pháp.

---

## **VI. Ứng dụng `*args` và `**kwargs` để mô phỏng đa hình**

### 1. Mô phỏng overload bằng `*args`

```python
class MyMath:
    def cong(self, *args):
        if len(args) == 2:
            return args[0] + args[1]
        elif len(args) == 3:
            return args[0] + args[1] + args[2]
        else:
            return sum(args)

m = MyMath()
print(m.cong(1, 2))         # 3
print(m.cong(1, 2, 3))      # 6
print(m.cong(1, 2, 3, 4))   # 10
```

> Đây là cách Python xử lý tình huống mà các ngôn ngữ khác dùng nạp chồng hàm (overloading).

---

### 2. Tuỳ biến hành vi bằng `**kwargs`

```python
def say_hello(**kwargs):
    if 'name' in kwargs:
        print(f"Hello, {kwargs['name']}!")
    else:
        print("Hello, stranger!")

say_hello(name="Phú")  # Hello, Phú!
say_hello()            # Hello, stranger!
```

---

## **VII. Giải nén đối số với `*` và `**` khi gọi hàm**

### 1. Dùng `*` để unpack list/tuple

```python
def add(a, b, c):
    print(a + b + c)

nums = [1, 2, 3]
add(*nums)  # tương đương add(1, 2, 3)
```

### 2. Dùng `**` để unpack dict

```python
def show(name, age):
    print(f"{name} is {age} years old")

info = {"name": "Phú", "age": 25}
show(**info)  # tương đương show(name="Phú", age=25)
```

---

## **VIII. Tóm tắt**

| Cú pháp    | Loại đối số         | Dạng dữ liệu nhận vào | Khi nào dùng                               |
| ---------- | ------------------- | --------------------- | ------------------------------------------ |
| `*args`    | Vị trí (positional) | Tuple                 | Khi không biết số lượng đối số theo thứ tự |
| `**kwargs` | Có tên (keyword)    | Dictionary            | Khi không biết trước tên/tham số cụ thể    |
| `*`        | Giải nén tuple/list | Tuple/List            | Khi gọi hàm cần truyền nhiều đối số        |
| `**`       | Giải nén dictionary | Dict                  | Khi gọi hàm với đối số key=value           |

---

## 📌 Bài tập tự luyện

1. Viết hàm `multiply_all(*args)` trả về tích của tất cả đối số truyền vào.
2. Viết hàm `create_user(**kwargs)` in ra các thông tin người dùng: `name`, `email`, `age`, mặc định nếu thiếu.
3. Viết lớp `Logger` có phương thức `log(*args, **kwargs)` để in ra các thông điệp dưới nhiều hình thức khác nhau (tin nhắn ngắn, tin nhắn kèm thời gian, tin nhắn có severity,…).
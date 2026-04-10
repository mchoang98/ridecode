# Bài 6-2: Tham số và giá trị trả về

Trong lập trình Python, khi bạn định nghĩa một hàm, bạn có thể sử dụng **tham số** để nhận đầu vào và **giá trị trả về** để gửi kết quả từ hàm ra ngoài. Việc sử dụng tham số và giá trị trả về giúp cho các hàm trở nên linh hoạt và tái sử dụng được trong nhiều tình huống khác nhau.

## Tham số (Parameters)

Tham số là các biến được định nghĩa trong hàm, giúp nhận dữ liệu đầu vào khi hàm được gọi. Tham số được đặt trong dấu ngoặc đơn khi định nghĩa hàm.

### Cách định nghĩa tham số

```python
def ten_ham(tham_so_1, tham_so_2):
    # Các câu lệnh trong hàm sử dụng tham_so_1 và tham_so_2
    print(tham_so_1, tham_so_2)
```

Khi gọi hàm, bạn cần truyền giá trị vào các tham số này.

### Ví dụ về tham số:

```python
def greet(name, age):
    print(f"Chào {name}, bạn {age} tuổi.")
    
greet("Mai", 25)
```

Kết quả:

```
Chào Mai, bạn 25 tuổi.
```

Ở đây, hàm `greet()` nhận hai tham số `name` và `age`. Khi gọi hàm, bạn truyền giá trị "Mai" và 25 cho các tham số này.

## Giá trị trả về (Return Value)

Giá trị trả về là giá trị mà hàm sẽ trả về khi thực hiện xong. Bạn sử dụng từ khóa `return` để trả về một giá trị từ hàm. Hàm có thể trả về một giá trị đơn lẻ, một tuple, hoặc thậm chí một danh sách, từ điển, v.v.

### Cách trả về giá trị trong hàm

```python
def add(a, b):
    return a + b
```

Hàm `add()` nhận hai tham số `a` và `b`, thực hiện phép cộng và trả về kết quả.

### Ví dụ về giá trị trả về:

```python
def multiply(x, y):
    return x * y

result = multiply(3, 4)
print(result)
```

Kết quả:

```
12
```

Hàm `multiply()` trả về tích của `x` và `y`. Khi gọi hàm với tham số `3` và `4`, giá trị trả về là `12`, được gán cho biến `result`.

## Các kiểu tham số

1. **Tham số mặc định (Default Parameters):**

Tham số mặc định là các tham số có giá trị mặc định nếu không được cung cấp khi gọi hàm. Bạn có thể định nghĩa tham số mặc định khi cần thiết.

### Ví dụ với tham số mặc định:

```python
def greet(name="Người lạ"):
    print(f"Chào {name}!")
    
greet()
greet("Lan")
```

Kết quả:

```
Chào Người lạ!
Chào Lan!
```

Trong ví dụ trên, nếu không cung cấp tham số `name` khi gọi hàm, giá trị mặc định "Người lạ" sẽ được sử dụng.

2. **Tham số không xác định (Variable-length Parameters):**

Đôi khi bạn muốn hàm nhận một số lượng tham số không xác định. Python hỗ trợ hai loại tham số không xác định: `*args` và `**kwargs`.

- **`*args`**: Dùng để nhận một danh sách các tham số không xác định, dưới dạng tuple.
- **`**kwargs`**: Dùng để nhận một danh sách các tham số không xác định dưới dạng từ điển.

### Ví dụ với `*args`:

```python
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total

result = sum_numbers(1, 2, 3, 4, 5)
print(result)
```

Kết quả:

```
15
```

Hàm `sum_numbers()` sử dụng `*args` để nhận một số lượng tham số không xác định và tính tổng các tham số này.

### Ví dụ với `**kwargs`:

```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Lan", age=25)
```

Kết quả:

```
name: Lan
age: 25
```

Hàm `print_info()` nhận một số lượng tham số không xác định dưới dạng từ điển và in ra tên và giá trị của từng tham số.

## Trả về nhiều giá trị

Python cho phép bạn trả về nhiều giá trị từ một hàm. Các giá trị này sẽ được trả về dưới dạng một tuple.

### Ví dụ trả về nhiều giá trị:

```python
def calculate(a, b):
    sum_result = a + b
    diff_result = a - b
    return sum_result, diff_result

sum_val, diff_val = calculate(10, 5)
print(f"Tổng: {sum_val}, Hiệu: {diff_val}")
```

Kết quả:

```
Tổng: 15, Hiệu: 5
```

Hàm `calculate()` trả về hai giá trị là tổng và hiệu của `a` và `b`. Bạn có thể gán chúng vào hai biến riêng biệt khi gọi hàm.

## Kết luận

Tham số và giá trị trả về là hai thành phần cơ bản giúp bạn tạo ra các hàm linh hoạt và có thể tái sử dụng. Việc sử dụng tham số giúp hàm có thể nhận các đầu vào khác nhau và trả về các kết quả tùy chỉnh, giúp chương trình của bạn dễ dàng mở rộng và bảo trì.
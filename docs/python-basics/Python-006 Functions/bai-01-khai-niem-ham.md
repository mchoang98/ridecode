# Bài 6-1: Khái niệm hàm

Trong lập trình Python, hàm (function) là một khối mã có thể tái sử dụng, được sử dụng để thực hiện một nhiệm vụ cụ thể. Hàm giúp mã nguồn trở nên rõ ràng, dễ hiểu và dễ bảo trì hơn. Bạn có thể gọi hàm nhiều lần trong chương trình mà không cần phải viết lại mã nguồn.

## Cấu trúc cơ bản của một hàm

Cấu trúc cơ bản của một hàm trong Python như sau:

```python
def ten_ham():
    # Các dòng mã trong hàm
    print("Chào mừng bạn đến với hàm!")
```

- **`def`**: Từ khóa để định nghĩa một hàm.
- **`ten_ham`**: Tên của hàm (bạn có thể đặt tên hàm tùy ý, nhưng nên đặt tên sao cho dễ hiểu và miêu tả đúng chức năng của hàm).
- **Dấu `:`**: Dấu này đánh dấu sự kết thúc của phần định nghĩa hàm và bắt đầu khối mã của hàm.
- **Khối mã của hàm**: Các dòng mã thực hiện công việc của hàm, được thụt lề (indentation) vào bên trong.

## Ví dụ cơ bản về hàm

```python
def say_hello():
    print("Chào bạn!")
    
# Gọi hàm
say_hello()
```

Kết quả:

```
Chào bạn!
```

Khi gọi `say_hello()`, hàm sẽ in ra câu "Chào bạn!" như đã định nghĩa trong hàm.

## Hàm với tham số

Hàm có thể nhận các tham số (parameters) để xử lý thông tin đầu vào. Các tham số là các giá trị được truyền vào hàm khi gọi hàm.

### Ví dụ hàm với tham số:

```python
def say_hello(name):
    print(f"Chào {name}!")
    
say_hello("Lan")
say_hello("Nam")
```

Kết quả:

```
Chào Lan!
Chào Nam!
```

Ở đây, hàm `say_hello()` nhận tham số `name` và sử dụng tham số này để in ra lời chào tên người gọi hàm.

## Hàm với giá trị trả về (return)

Ngoài việc thực hiện hành động, hàm có thể trả về một giá trị. Bạn có thể sử dụng từ khóa `return` để trả về kết quả từ hàm.

### Ví dụ với giá trị trả về:

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)
```

Kết quả:

```
7
```

Hàm `add()` nhận hai tham số `a` và `b`, cộng chúng lại và trả về kết quả. Kết quả này được gán cho biến `result` và sau đó in ra.

## Hàm với tham số mặc định

Bạn có thể định nghĩa giá trị mặc định cho tham số trong hàm. Nếu không cung cấp giá trị khi gọi hàm, tham số sẽ sử dụng giá trị mặc định.

### Ví dụ với tham số mặc định:

```python
def greet(name="Bạn"):
    print(f"Chào {name}!")
    
greet()
greet("An")
```

Kết quả:

```
Chào Bạn!
Chào An!
```

Ở đây, khi gọi `greet()`, tham số `name` sẽ mặc định là "Bạn" nếu không có giá trị nào được cung cấp. Nếu có giá trị, như "An", thì tham số sẽ sử dụng giá trị đó.

## Hàm trả về nhiều giá trị

Một hàm có thể trả về nhiều giá trị bằng cách sử dụng dấu phẩy. Các giá trị này sẽ được trả về dưới dạng một tuple.

### Ví dụ với nhiều giá trị trả về:

```python
def calculate(a, b):
    sum_result = a + b
    product_result = a * b
    return sum_result, product_result

sum_value, product_value = calculate(3, 4)
print(f"Tổng: {sum_value}, Tích: {product_value}")
```

Kết quả:

```
Tổng: 7, Tích: 12
```

Hàm `calculate()` trả về hai giá trị là tổng và tích của `a` và `b`. Bạn có thể gán chúng vào hai biến riêng biệt khi gọi hàm.

## Hàm Lambda (Hàm ẩn danh)

Trong Python, bạn cũng có thể định nghĩa một hàm mà không cần đặt tên cho nó. Đây là hàm lambda, còn gọi là hàm ẩn danh, thường dùng cho các tác vụ ngắn gọn.

### Ví dụ hàm lambda:

```python
multiply = lambda x, y: x * y
print(multiply(3, 4))
```

Kết quả:

```
12
```

Hàm `lambda` là một cách nhanh chóng để định nghĩa một hàm đơn giản mà không cần phải sử dụng từ khóa `def`. Hàm lambda có thể chỉ có một biểu thức và trả về kết quả của biểu thức đó.

## Kết luận

Hàm là một phần quan trọng trong lập trình, giúp bạn tái sử dụng mã và tổ chức chương trình một cách hợp lý. Bằng cách sử dụng các tham số, giá trị trả về và các tính năng khác của hàm, bạn có thể làm cho chương trình của mình linh hoạt hơn và dễ bảo trì.
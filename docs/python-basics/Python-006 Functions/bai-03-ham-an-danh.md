# Bài 6-3: Hàm Ẩn Danh (Lambda Function)

Trong Python, hàm ẩn danh (hay còn gọi là hàm lambda) là một loại hàm được định nghĩa mà không cần đặt tên. Hàm lambda thường được sử dụng khi bạn cần một hàm nhỏ gọn cho một tác vụ cụ thể, đặc biệt khi không cần phải sử dụng lại hàm đó nhiều lần.

## Cấu trúc của hàm lambda

Cấu trúc cơ bản của hàm lambda trong Python như sau:

```python
lambda tham_so_1, tham_so_2, ...: biểu_thức
```

- **`lambda`**: Từ khóa dùng để định nghĩa một hàm lambda.
- **`tham_so_1, tham_so_2, ...`**: Các tham số mà hàm lambda nhận vào (giống như tham số trong hàm bình thường).
- **`biểu_thức`**: Một biểu thức mà hàm lambda sẽ thực hiện và trả về kết quả. Hàm lambda không có câu lệnh `return`, thay vào đó biểu thức được tự động trả về.

### Ví dụ cơ bản về hàm lambda:

```python
# Hàm lambda cộng hai số
add = lambda x, y: x + y

result = add(3, 4)
print(result)
```

Kết quả:

```
7
```

Ở đây, hàm lambda `add` nhận vào hai tham số `x` và `y`, và trả về tổng của chúng. Hàm này tương đương với hàm bình thường:

```python
def add(x, y):
    return x + y
```

## Các ví dụ sử dụng hàm lambda

### Ví dụ 1: Hàm lambda để tính bình phương của một số

```python
square = lambda x: x ** 2
print(square(5))
```

Kết quả:

```
25
```

Hàm lambda này nhận vào một tham số `x` và trả về bình phương của `x`.

### Ví dụ 2: Hàm lambda để lọc các số chẵn trong một danh sách

Kết hợp với hàm `filter()`, hàm lambda có thể được sử dụng để lọc các phần tử trong một danh sách.

```python
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = filter(lambda x: x % 2 == 0, numbers)
print(list(even_numbers))
```

Kết quả:

```
[2, 4, 6]
```

Hàm lambda này kiểm tra xem một số có chia hết cho 2 hay không (tức là số chẵn).

### Ví dụ 3: Hàm lambda với hàm `map()`

Hàm `map()` áp dụng một hàm vào mỗi phần tử của một danh sách và trả về một đối tượng map.

```python
numbers = [1, 2, 3, 4, 5]
squared_numbers = map(lambda x: x ** 2, numbers)
print(list(squared_numbers))
```

Kết quả:

```
[1, 4, 9, 16, 25]
```

Hàm lambda này tính bình phương của mỗi số trong danh sách `numbers`.

### Ví dụ 4: Hàm lambda với hàm `sorted()`

Hàm lambda cũng có thể được sử dụng để sắp xếp danh sách theo một tiêu chí tùy chỉnh. Bạn có thể truyền hàm lambda vào đối số `key` của hàm `sorted()`.

```python
points = [(1, 2), (3, 4), (5, 0), (2, 3)]
sorted_points = sorted(points, key=lambda point: point[1])
print(sorted_points)
```

Kết quả:

```
[(5, 0), (1, 2), (2, 3), (3, 4)]
```

Ở đây, hàm lambda sắp xếp danh sách `points` theo giá trị ở chỉ số thứ hai của mỗi tuple.

## Khi nào nên sử dụng hàm lambda?

Hàm lambda là lựa chọn lý tưởng khi bạn cần một hàm ngắn gọn, chỉ thực hiện một tác vụ đơn giản mà không cần đặt tên cho hàm đó. Ví dụ:
- Khi bạn cần một hàm tạm thời chỉ dùng một lần.
- Khi bạn sử dụng hàm lambda trong các hàm như `map()`, `filter()`, và `sorted()`, nơi bạn cần cung cấp một hàm ngắn gọn.

Tuy nhiên, khi tác vụ phức tạp hơn hoặc hàm có nhiều dòng mã, bạn nên sử dụng hàm thông thường (được định nghĩa bằng `def`) thay vì hàm lambda.

## Kết luận

Hàm ẩn danh (lambda) trong Python rất hữu ích khi bạn cần tạo ra các hàm ngắn gọn và linh hoạt. Với cú pháp đơn giản và khả năng hoạt động với các hàm tích hợp sẵn của Python như `map()`, `filter()`, và `sorted()`, hàm lambda là công cụ mạnh mẽ cho lập trình viên khi cần xử lý dữ liệu nhanh chóng mà không cần phải định nghĩa một hàm lớn.
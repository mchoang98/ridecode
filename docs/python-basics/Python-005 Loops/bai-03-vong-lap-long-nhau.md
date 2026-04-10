# Bài 5-3: Vòng lặp lồng nhau

Vòng lặp lồng nhau (nested loops) trong Python là khi bạn đặt một vòng lặp bên trong một vòng lặp khác. Điều này rất hữu ích khi bạn làm việc với các cấu trúc dữ liệu đa chiều, chẳng hạn như danh sách 2 chiều (ma trận) hoặc khi bạn muốn lặp qua nhiều bộ dữ liệu trong một lần.

## Cấu trúc của vòng lặp lồng nhau

Cấu trúc cơ bản của vòng lặp lồng nhau là một vòng lặp bên ngoài và một vòng lặp bên trong. Vòng lặp bên trong sẽ thực hiện hoàn toàn một lần mỗi khi vòng lặp bên ngoài lặp qua một phần tử.

```python
for i in dãy_ngoài:
    for j in dãy_trong:
        # Thực hiện hành động với i và j
```

- **`i`**: Là phần tử của vòng lặp bên ngoài.
- **`j`**: Là phần tử của vòng lặp bên trong.

## Ví dụ cơ bản

Giả sử bạn có một danh sách con và bạn muốn lặp qua từng phần tử của danh sách con trong một danh sách lớn hơn:

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for element in row:
        print(element, end=" ")
    print()  # Dùng để in xuống dòng sau mỗi hàng
```

Kết quả:

```
1 2 3
4 5 6
7 8 9
```

Trong ví dụ này, vòng lặp ngoài lặp qua mỗi hàng trong ma trận (danh sách con), và vòng lặp trong lặp qua từng phần tử trong hàng đó.

## Ví dụ với danh sách số

Giả sử bạn có một danh sách chứa các số và bạn muốn tính tổng của tất cả các cặp số trong danh sách:

```python
numbers = [1, 2, 3, 4]

for i in numbers:
    for j in numbers:
        print(f"Cặp: {i}, {j}")
```

Kết quả:

```
Cặp: 1, 1
Cặp: 1, 2
Cặp: 1, 3
Cặp: 1, 4
Cặp: 2, 1
Cặp: 2, 2
Cặp: 2, 3
Cặp: 2, 4
Cặp: 3, 1
Cặp: 3, 2
Cặp: 3, 3
Cặp: 3, 4
Cặp: 4, 1
Cặp: 4, 2
Cặp: 4, 3
Cặp: 4, 4
```

Ở đây, vòng lặp bên ngoài lặp qua từng số `i` trong danh sách `numbers`, và vòng lặp bên trong lặp qua từng số `j` trong danh sách đó, tạo ra tất cả các cặp số có thể.

## Vòng lặp lồng nhau với điều kiện

Vòng lặp lồng nhau cũng có thể kết hợp với các câu lệnh điều kiện để thực hiện các hành động dựa trên điều kiện.

```python
numbers = [1, 2, 3, 4]

for i in numbers:
    for j in numbers:
        if i + j == 5:
            print(f"Cặp: {i}, {j} có tổng bằng 5")
```

Kết quả:

```
Cặp: 1, 4 có tổng bằng 5
Cặp: 2, 3 có tổng bằng 5
Cặp: 3, 2 có tổng bằng 5
Cặp: 4, 1 có tổng bằng 5
```

Trong ví dụ này, chỉ những cặp số có tổng bằng 5 mới được in ra, nhờ vào câu lệnh `if i + j == 5`.

## Vòng lặp lồng nhau với `break` và `continue`

Bạn có thể sử dụng các câu lệnh `break` và `continue` trong vòng lặp lồng nhau để thoát khỏi vòng lặp hoặc bỏ qua một vòng lặp cụ thể.

### Ví dụ với `break`:

```python
numbers = [1, 2, 3, 4]

for i in numbers:
    for j in numbers:
        if i + j == 5:
            print(f"Thoát khi gặp cặp: {i}, {j}")
            break
```

Kết quả:

```
Thoát khi gặp cặp: 1, 4
```

Ở đây, vòng lặp sẽ dừng ngay khi tìm thấy cặp có tổng bằng 5 nhờ vào câu lệnh `break`.

### Ví dụ với `continue`:

```python
numbers = [1, 2, 3, 4]

for i in numbers:
    for j in numbers:
        if i + j == 5:
            print(f"Cặp: {i}, {j} bỏ qua")
            continue
        print(f"Cặp: {i}, {j} không bỏ qua")
```

Kết quả:

```
Cặp: 1, 1 không bỏ qua
Cặp: 1, 2 không bỏ qua
Cặp: 1, 3 không bỏ qua
Cặp: 1, 4 bỏ qua
Cặp: 2, 1 không bỏ qua
Cặp: 2, 2 không bỏ qua
Cặp: 2, 3 bỏ qua
Cặp: 2, 4 không bỏ qua
Cặp: 3, 1 không bỏ qua
Cặp: 3, 2 không bỏ qua
Cặp: 3, 3 không bỏ qua
Cặp: 3, 4 không bỏ qua
Cặp: 4, 1 không bỏ qua
Cặp: 4, 2 không bỏ qua
Cặp: 4, 3 không bỏ qua
Cặp: 4, 4 không bỏ qua
```

Trong ví dụ này, khi tổng của `i` và `j` bằng 5, vòng lặp sẽ bỏ qua phần còn lại của vòng lặp trong lần đó và tiếp tục với lần lặp tiếp theo.

## Kết luận

Vòng lặp lồng nhau là một kỹ thuật quan trọng trong lập trình, cho phép bạn xử lý các tình huống phức tạp, đặc biệt là khi làm việc với các cấu trúc dữ liệu đa chiều hoặc các phép toán cần tính toán trên các cặp dữ liệu. Tuy nhiên, bạn cũng cần lưu ý rằng vòng lặp lồng nhau có thể làm tăng độ phức tạp của chương trình, vì vậy cần sử dụng cẩn thận để tránh làm chậm chương trình.
# Bài 5-2: Vòng lặp while

Vòng lặp `while` trong Python được sử dụng để lặp lại một khối mã khi điều kiện xác định là đúng. Điều này có nghĩa là vòng lặp sẽ tiếp tục chạy cho đến khi điều kiện trong câu lệnh `while` trở thành sai.

## Cấu trúc cơ bản

Cấu trúc của vòng lặp `while` trong Python như sau:

```python
while điều_kiện:
    # Thực hiện hành động
```

- **`điều_kiện`**: Là một biểu thức điều kiện, nếu điều kiện này trả về `True`, vòng lặp sẽ tiếp tục lặp. Khi điều kiện trả về `False`, vòng lặp sẽ dừng lại.
- **Khối mã bên trong vòng lặp**: Mã sẽ được thực thi liên tục miễn là điều kiện vẫn đúng.

## Ví dụ cơ bản

```python
count = 0

while count < 5:
    print(count)
    count += 1
```

Kết quả:

```
0
1
2
3
4
```

Trong ví dụ này:
- Ban đầu `count = 0`, vòng lặp kiểm tra điều kiện `count < 5`, và thực thi mã bên trong vòng lặp.
- Sau mỗi lần lặp, `count` được tăng lên 1 (`count += 1`).
- Khi `count` đạt 5, điều kiện `count < 5` trở thành `False`, và vòng lặp dừng lại.

## Vòng lặp while vô hạn

Nếu điều kiện trong vòng lặp `while` luôn đúng, vòng lặp sẽ chạy vô hạn. Điều này thường được sử dụng trong những trường hợp bạn không biết chính xác số lần lặp mà chỉ muốn vòng lặp tiếp tục cho đến khi có một điều kiện dừng khác.

Ví dụ vòng lặp vô hạn:

```python
while True:
    response = input("Nhập 'quit' để thoát: ")
    if response == 'quit':
        print("Thoát khỏi vòng lặp.")
        break
```

Kết quả:

```
Nhập 'quit' để thoát: hello
Nhập 'quit' để thoát: quit
Thoát khỏi vòng lặp.
```

Ở đây:
- Vòng lặp sẽ tiếp tục yêu cầu người dùng nhập dữ liệu cho đến khi họ nhập 'quit'.
- Khi người dùng nhập 'quit', vòng lặp sẽ dừng nhờ câu lệnh `break`.

## Vòng lặp while với câu lệnh `else`

Giống như vòng lặp `for`, vòng lặp `while` cũng có thể đi kèm với câu lệnh `else`. Câu lệnh `else` sẽ được thực thi nếu vòng lặp kết thúc mà không bị dừng lại bởi `break`.

```python
count = 0

while count < 5:
    print(count)
    count += 1
else:
    print("Vòng lặp kết thúc.")
```

Kết quả:

```
0
1
2
3
4
Vòng lặp kết thúc.
```

Trong trường hợp này, phần `else` sẽ được thực thi khi vòng lặp hoàn tất mà không gặp `break`.

## Sử dụng `break` và `continue` trong vòng lặp while

- **`break`**: Dừng ngay lập tức vòng lặp.
- **`continue`**: Bỏ qua phần còn lại của vòng lặp và quay lại kiểm tra điều kiện.

### Ví dụ sử dụng `break`:

```python
count = 0

while count < 10:
    if count == 5:
        break
    print(count)
    count += 1
```

Kết quả:

```
0
1
2
3
4
```

Vòng lặp sẽ dừng lại khi `count` đạt giá trị 5 nhờ câu lệnh `break`.

### Ví dụ sử dụng `continue`:

```python
count = 0

while count < 5:
    count += 1
    if count == 3:
        continue
    print(count)
```

Kết quả:

```
1
2
4
5
```

Ở đây, khi `count` đạt 3, câu lệnh `continue` sẽ bỏ qua phần còn lại của vòng lặp và tiếp tục với lần lặp tiếp theo.

## Kết luận

Vòng lặp `while` là một công cụ mạnh mẽ trong Python, đặc biệt khi bạn không biết trước số lần cần lặp. Bạn có thể kết hợp vòng lặp với các câu lệnh `break`, `continue`, và `else` để kiểm soát quá trình lặp và dừng lại khi cần thiết.

# Bài 3-5: Toán Tử Bitwise trong Python

## Mục tiêu bài học

* Hiểu các toán tử bitwise và cách chúng hoạt động trên các số nguyên.
* Biết cách ứng dụng toán tử bitwise vào các bài toán thực tế.
* Thành thạo khi sử dụng các toán tử: `&`, `|`, `^`, `~`, `<<`, `>>`.

---

## 1. Bitwise là gì?

Bitwise là thao tác trên từng **bit nhị phân** của số nguyên. Python lưu trữ số nguyên dưới dạng nhị phân trong bộ nhớ, nên các phép toán bitwise cho phép ta thao tác trực tiếp trên các bit này.

Ví dụ:

```python
a = 5     # 0101
b = 3     # 0011
```

---

## 2. Các toán tử bitwise cơ bản

| Toán tử | Tên gọi                 | Mô tả                                        | Ví dụ (a = 5, b = 3)                      |     |                |
| ------- | ----------------------- | -------------------------------------------- | ----------------------------------------- | --- | -------------- |
| `&`     | AND                     | Bit kết quả là 1 nếu cả hai bit là 1         | `a & b = 1` (0001)                        |     |                |
| \`      | \`                      | OR                                           | Bit kết quả là 1 nếu ít nhất một bit là 1 | \`a | b = 7\` (0111) |
| `^`     | XOR                     | Bit kết quả là 1 nếu hai bit khác nhau       | `a ^ b = 6` (0110)                        |     |                |
| `~`     | NOT                     | Đảo bit                                      | `~a = -6`                                 |     |                |
| `<<`    | Dịch trái (left shift)  | Dịch các bit sang trái (nhân 2 mỗi lần dịch) | `a << 1 = 10`                             |     |                |
| `>>`    | Dịch phải (right shift) | Dịch các bit sang phải (chia 2 mỗi lần dịch) | `a >> 1 = 2`                              |     |                |

---

## 3. Giải thích ví dụ cụ thể

```python
a = 5        # 0101
b = 3        # 0011

print(a & b) # 0001 => 1
print(a | b) # 0111 => 7
print(a ^ b) # 0110 => 6
print(~a)    # -(a+1) => -6
print(a << 1)# 1010 => 10
print(a >> 1)# 0010 => 2
```

Lưu ý: Phép `~a` thực hiện đảo tất cả các bit của `a`, và theo hệ thống biểu diễn số âm (dạng bù 2), ta có `~a = -a - 1`.

---

## 4. Ứng dụng thực tế

### Kiểm tra bit thứ n có bật không

```python
def is_nth_bit_set(number, n):
    return (number & (1 << n)) != 0

print(is_nth_bit_set(5, 0)) # True
print(is_nth_bit_set(5, 2)) # True
print(is_nth_bit_set(5, 1)) # False
```

### Bật hoặc tắt một bit

```python
def set_bit(number, n):
    return number | (1 << n)

def clear_bit(number, n):
    return number & ~(1 << n)

print(set_bit(5, 1))   # 7 (bật bit 1)
print(clear_bit(5, 0)) # 4 (tắt bit 0)
```

---

## 5. Bài tập luyện tập

### Bài tập lý thuyết

1. Dự đoán kết quả và giải thích:

   ```python
   a = 10
   b = 4
   print(a & b)
   print(a | b)
   print(a ^ b)
   print(~b)
   ```

2. Viết công thức Python để:

   * Bật bit thứ `n` của một số `x`
   * Tắt bit thứ `n` của `x`
   * Kiểm tra bit thứ `n` của `x` có đang bật không

### Bài tập lập trình

1. Viết hàm `count_set_bits(n)` trả về số lượng bit `1` trong biểu diễn nhị phân của `n`.

2. Viết chương trình chuyển một số nguyên thành chuỗi nhị phân 8-bit (ví dụ: `5` thành `'00000101'`).

3. Viết chương trình kiểm tra xem hai số nguyên có cùng số lượng bit `1` không.

---

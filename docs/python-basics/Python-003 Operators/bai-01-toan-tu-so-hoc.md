# Bài 3-1: Toán Tử Số Học Trong Python

## Giới thiệu
Toán tử số học là những ký hiệu đặc biệt giúp thực hiện các phép toán trên số. Python hỗ trợ nhiều toán tử số học để thực hiện các phép tính toán cơ bản.

## 1. Các toán tử số học
Python cung cấp các toán tử số học sau:

| Toán tử | Mô tả | Ví dụ |
|---------|-------|-------|
| `+` | Cộng | `5 + 3 = 8` |
| `-` | Trừ | `10 - 4 = 6` |
| `*` | Nhân | `6 * 7 = 42` |
| `/` | Chia (kết quả float) | `10 / 3 = 3.3333` |
| `//` | Chia lấy nguyên | `10 // 3 = 3` |
| `%` | Chia lấy dư | `10 % 3 = 1` |
| `**` | Lũy thừa | `2 ** 3 = 8` |

## 2. Ví dụ minh họa
Dưới đây là ví dụ sử dụng các toán tử số học trong Python:
```python
a = 10
b = 3

print(a + b)  # Kết quả: 13
print(a - b)  # Kết quả: 7
print(a * b)  # Kết quả: 30
print(a / b)  # Kết quả: 3.3333...
print(a // b) # Kết quả: 3
print(a % b)  # Kết quả: 1
print(a ** b) # Kết quả: 1000
```

## 3. Thứ tự ưu tiên toán tử
Khi có nhiều toán tử trong cùng một biểu thức, Python tuân theo thứ tự ưu tiên sau:
1. `**` (Lũy thừa)
2. `*`, `/`, `//`, `%` (Nhân, chia, chia lấy nguyên, chia lấy dư)
3. `+`, `-` (Cộng, trừ)

Ví dụ:
```python
x = 2 + 3 * 4  # Kết quả: 14 (nhân trước, cộng sau)
y = (2 + 3) * 4  # Kết quả: 20 (ngoặc trước)
```

## 4. Tổng kết
- Python có nhiều toán tử số học để tính toán.
- Cần chú ý thứ tự ưu tiên khi sử dụng nhiều toán tử.
- Hãy thực hành để nắm vững cách sử dụng toán tử số học!
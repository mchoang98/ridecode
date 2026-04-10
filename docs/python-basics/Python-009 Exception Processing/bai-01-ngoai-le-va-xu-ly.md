
# Bài 9-1: Ngoại Lệ và Xử Lý Ngoại Lệ trong Python

## Mục tiêu bài học:

* Hiểu được **ngoại lệ** (exception) là gì và vì sao chúng xảy ra.
* Biết cách sử dụng **try - except** để xử lý lỗi.
* Biết sử dụng thêm các mệnh đề **else**, **finally** trong xử lý ngoại lệ.

---

## 1. Ngoại lệ là gì?

**Ngoại lệ (Exception)** là lỗi xảy ra trong khi chương trình đang chạy. Nếu không xử lý, chương trình sẽ **bị dừng**.

### Ví dụ:

```python
print(10 / 0)  # Lỗi chia cho 0
```

Chạy dòng này sẽ ra lỗi:

```
ZeroDivisionError: division by zero
```

---

## 2. Xử lý ngoại lệ với `try - except`

### Cú pháp cơ bản:

```python
try:
    # đoạn code có thể gây lỗi
except TenLoaiLoi:
    # xử lý khi lỗi xảy ra
```

### Ví dụ:

```python
try:
    a = int(input("Nhập số nguyên: "))
    print(10 / a)
except ZeroDivisionError:
    print("Không được chia cho 0!")
except ValueError:
    print("Phải nhập số nguyên!")
```

---

## 3. `else` và `finally`

* `else`: chạy khi **không có lỗi**
* `finally`: chạy **luôn luôn**, dù có lỗi hay không

### Ví dụ:

```python
try:
    x = int(input("Nhập số: "))
    y = 10 / x
except ZeroDivisionError:
    print("Lỗi chia 0!")
else:
    print("Kết quả:", y)
finally:
    print("Kết thúc chương trình.")
```

---

## 4. Tự tạo ngoại lệ (`raise`)

Dùng để **chủ động báo lỗi** khi gặp điều kiện không hợp lệ.

```python
def set_age(age):
    if age < 0:
        raise ValueError("Tuổi không được âm")
    print(f"Tuổi: {age}")

set_age(-5)  # Báo lỗi ngay lập tức
```

---

## 5. Tóm tắt

| Thành phần | Mục đích                         |
| ---------- | -------------------------------- |
| `try`      | Gồm đoạn code có thể gây lỗi     |
| `except`   | Bắt và xử lý lỗi                 |
| `else`     | Chạy nếu **không có lỗi** xảy ra |
| `finally`  | Luôn chạy, dù có lỗi hay không   |
| `raise`    | Tự tạo ngoại lệ                  |

---

## Bài tập thực hành

### Bài 1: Chia số an toàn

**Yêu cầu:** Viết chương trình yêu cầu người dùng nhập 2 số, chia số thứ nhất cho số thứ hai. Bắt lỗi chia cho 0 và lỗi nhập sai kiểu số.

*Gợi ý:* Dùng `try`, `except ZeroDivisionError`, `except ValueError`.

---

### Bài 2: Tính căn bậc hai

**Yêu cầu:** Viết chương trình yêu cầu nhập số, in ra căn bậc hai. Nếu số âm thì báo lỗi "Không thể tính căn bậc hai của số âm".

---

### Bài 3: Tạo hàm kiểm tra tuổi

**Yêu cầu:** Viết hàm `kiem_tra_tuoi(age)`:

* Nếu tuổi < 0 → raise `ValueError("Tuổi không hợp lệ")`
* Nếu hợp lệ → in "Tuổi: x"

Gọi thử hàm với `-3` và xử lý lỗi bằng `try`.

---

### Bài 4: Danh sách chia số

**Yêu cầu:** Cho danh sách số `[10, 5, 0, 'a', 2]`, duyệt qua từng phần tử, chia 10 cho phần tử đó và xử lý ngoại lệ nếu có.

---

### Bài 5: Trò chơi đoán số nâng cao

Viết trò chơi cho người dùng đoán số từ 1–10. Nếu người dùng nhập không phải số nguyên, hoặc nằm ngoài khoảng → báo lỗi và yêu cầu nhập lại (tối đa 3 lần, nếu sai quá thì kết thúc).


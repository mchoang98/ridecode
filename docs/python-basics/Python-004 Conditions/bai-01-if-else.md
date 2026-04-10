# Bài 4-1: Câu lệnh điều kiện trong Python

## 1. Giới thiệu

Câu lệnh điều kiện cho phép chương trình **ra quyết định** – nghĩa là chỉ thực hiện một đoạn mã nếu điều kiện nào đó đúng. Python hỗ trợ nhiều dạng câu lệnh điều kiện như: `if`, `if-else`, `if-elif-else` và `if lồng nhau`.

---

<img src="https://www.scientecheasy.com/wp-content/uploads/2022/10/flowchart-if-elif-else.png" alt="Logo Python" width="500"/>


## 2. Câu lệnh `if`

### Cú pháp:

```python
if điều_kiện:
    # Khối lệnh nếu điều kiện đúng
```

### Ví dụ:

```python
if 10 > 5:
    print("10 lớn hơn 5")

print("Chương trình kết thúc")
```

### Kết quả:

```
10 lớn hơn 5
Chương trình kết thúc
```

---

## 3. Câu lệnh `if - else`

Cho phép xử lý thêm trường hợp khi điều kiện sai.

### Cú pháp:

```python
if điều_kiện:
    # Khối lệnh nếu điều kiện đúng
else:
    # Khối lệnh nếu điều kiện sai
```

### Ví dụ:

```python
x = 3
if x == 4:
    print("x là 4")
else:
    print("x không phải là 4")

print("Chương trình kết thúc")
```

### Kết quả:

```
x không phải là 4
Chương trình kết thúc
```

---

## 4. Câu lệnh `if - elif - else`

Sử dụng khi có **nhiều điều kiện cần kiểm tra**.

### Cú pháp:

```python
if điều_kiện_1:
    # Khối lệnh nếu điều_kiện_1 đúng
elif điều_kiện_2:
    # Khối lệnh nếu điều_kiện_2 đúng
else:
    # Khối lệnh nếu không điều kiện nào đúng
```

### Ví dụ:

```python
letter = "B"

if letter == "A":
    print("Chữ là A")
elif letter == "B":
    print("Chữ là B")
elif letter == "C":
    print("Chữ là C")
else:
    print("Chữ không phải A, B hoặc C")

print("Chương trình kết thúc")
```

### Kết quả:

```
Chữ là B
Chương trình kết thúc
```

---

## 5. Câu lệnh `if` lồng nhau (nested if)

Cho phép viết `if` bên trong một `if` khác để kiểm tra điều kiện nhiều cấp.

### Cú pháp:

```python
if điều_kiện_1:
    if điều_kiện_2:
        # Cả hai điều kiện đúng
    else:
        # Chỉ điều_kiện_1 đúng
else:
    if điều_kiện_2:
        # Chỉ điều_kiện_2 đúng
    else:
        # Cả hai điều kiện sai
```

### Ví dụ:

```python
num = 21

if num >= 15:
    print("Lớn hơn hoặc bằng 15")
    if num % 2 == 0:
        print("Số chẵn")
    else:
        print("Số lẻ")
else:
    print("Nhỏ hơn 15")

print("Chương trình kết thúc")
```

### Kết quả:

```
Lớn hơn hoặc bằng 15
Số lẻ
Chương trình kết thúc
```

---

## 6. Ghi nhớ

* `if` dùng để kiểm tra điều kiện đúng.
* `if-else` xử lý thêm trường hợp điều kiện sai.
* `if-elif-else` dùng để kiểm tra nhiều điều kiện.
* Cần **thụt đầu dòng (indentation)** đúng để xác định khối lệnh.

Dưới đây là **tập bài tập tổng hợp** gồm **7 bài Python cơ bản về điều kiện**

---

## **BÀI TẬP PYTHON – CÂU LỆNH ĐIỀU KIỆN**

---

### 🔹 **Bài 1: Kiểm tra số chẵn hay lẻ**

#### Mô tả:

Viết chương trình kiểm tra xem một số nguyên nhập vào có phải là số chẵn hay số lẻ.

#### Input:

Một số nguyên `n`.

#### Output:

* `"Even"` nếu `n` là số chẵn
* `"Odd"` nếu `n` là số lẻ

#### Ví dụ:

```
Input: 8
Output: Even

Input: 15
Output: Odd
```

---

### 🔹 **Bài 2: Tìm số lớn nhất trong ba số**

#### Mô tả:

Viết chương trình nhập vào 3 số nguyên và in ra số lớn nhất trong ba số đó.

#### Input:

Ba số nguyên `a`, `b`, `c`.

#### Output:

Số lớn nhất trong ba số.

#### Ví dụ:

```
Input: 7 12 5
Output: 12

Input: 10 10 8
Output: 10
```

---

### 🔹 **Bài 3: Kiểm tra năm nhuận**

#### Mô tả:

Viết chương trình kiểm tra xem một năm bất kỳ có phải là năm nhuận hay không.

#### Điều kiện năm nhuận:

* Năm chia hết cho 4 và không chia hết cho 100, hoặc chia hết cho 400.

#### Input:

Một số nguyên `year`.

#### Output:

* `"Leap year"` nếu là năm nhuận
* `"Not a leap year"` nếu không phải

#### Ví dụ:

```
Input: 2020
Output: Leap year

Input: 1900
Output: Not a leap year
```

---

### 🔹 **Bài 4: Máy tính đơn giản**

#### Mô tả:

Viết chương trình mô phỏng một máy tính đơn giản thực hiện 4 phép toán: cộng (+), trừ (-), nhân (\*), chia (/).

#### Input:

* Hai số thực `a`, `b`
* Một toán tử: `+`, `-`, `*`, hoặc `/`

#### Output:

Kết quả của phép tính theo toán tử đã nhập. Nếu phép chia mà mẫu số là 0 thì in `"Error"`.

#### Ví dụ:

```
Input:
a = 6
b = 2
operator = *

Output:
12

Input:
a = 8
b = 0
operator = /

Output:
Error
```

---
## Bài tập tự luyện

### 🔹 **Bài 5: Kiểm tra số âm, dương hay bằng 0**

#### Mô tả:

Viết chương trình kiểm tra xem một số nguyên nhập vào là **số âm**, **số dương** hay **bằng 0**.

#### Input:

Một số nguyên `n`.

#### Output:

* `"Positive"` nếu `n > 0`
* `"Negative"` nếu `n < 0`
* `"Zero"` nếu `n == 0`

#### Ví dụ:

```
Input: -8
Output: Negative

Input: 0
Output: Zero

Input: 15
Output: Positive
```

---

### 🔹 **Bài 6: Phân loại học lực theo điểm**

#### Mô tả:

Viết chương trình nhập điểm số (thang điểm 10) và phân loại học lực theo quy tắc:

* Từ 8 đến 10: `"Giỏi"`
* Từ 6.5 đến dưới 8: `"Khá"`
* Từ 5 đến dưới 6.5: `"Trung bình"`
* Dưới 5: `"Yếu"`

#### Input:

Một số thực `score` (0 ≤ score ≤ 10)

#### Output:

Phân loại học lực tương ứng.

#### Ví dụ:

```
Input: 8.2
Output: Giỏi

Input: 6.7
Output: Khá

Input: 4.9
Output: Yếu
```

---

### 🔹 **Bài 7: Kiểm tra số có chia hết cho 3 và 5**

#### Mô tả:

Viết chương trình kiểm tra xem một số nguyên có chia hết cho 3, 5, cả hai, hay không chia hết cho cái nào.

#### Input:

Một số nguyên `n`.

#### Output:

* `"Chia hết cho cả 3 và 5"` nếu chia hết cho cả hai
* `"Chia hết cho 3"` nếu chỉ chia hết cho 3
* `"Chia hết cho 5"` nếu chỉ chia hết cho 5
* `"Không chia hết cho 3 và 5"` nếu không chia hết cho cái nào

#### Ví dụ:

```
Input: 15
Output: Chia hết cho cả 3 và 5

Input: 9
Output: Chia hết cho 3

Input: 10
Output: Chia hết cho 5

Input: 7
Output: Không chia hết cho 3 và 5


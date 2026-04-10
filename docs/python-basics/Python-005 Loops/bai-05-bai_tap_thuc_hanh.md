# Bài tập thực hành vòng lặp

###  **Bài 1: Máy lọc chuỗi**

**Mô tả:**
Viết chương trình yêu cầu người dùng nhập vào một chuỗi văn bản. Chương trình sẽ lọc ra **những từ**:

* Có **độ dài là số lẻ**
* **Không chứa chữ số**

**Yêu cầu cụ thể:**

* Tách chuỗi thành danh sách từ bằng `.split()`
* Kiểm tra từng từ:

  * Nếu `len(word) % 2 == 1` và `not any(c.isdigit() for c in word)` → giữ lại
* In ra danh sách các từ thoả mãn yêu cầu

**Ví dụ:**

```python
Input: "hello python3 code cool99 try again7"
Output: ['hello', 'try']
```

---

###  **Bài 2: Tính điểm trung bình**

**Mô tả:**
Viết chương trình nhập vào danh sách điểm của học sinh, **loại bỏ điểm thấp nhất**, rồi tính và in ra điểm trung bình còn lại.

**Yêu cầu cụ thể:**

* Nhập điểm bằng input: `10 8.5 9 7.25 6`
* Dùng `.split()` và ép kiểu sang float
* Dùng `min()` để tìm điểm thấp nhất, rồi loại khỏi danh sách
* Tính trung bình các điểm còn lại
* Làm tròn 2 chữ số sau dấu phẩy

**Ví dụ:**

```python
Input: "10 8.5 9 7.25 6"
Output: Trung bình sau khi loại điểm thấp nhất (6.0) là: 8.69
```

---

###  **Bài 3: Mini CAPTCHA**

**Mô tả:**
Viết chương trình tạo 5 chuỗi CAPTCHA ngẫu nhiên, mỗi chuỗi gồm 5 ký tự (chữ cái viết hoa và số).
Người dùng cần nhập đúng chuỗi trong **5 giây**, nếu sai → **kết thúc luôn (break)**.

**Yêu cầu cụ thể:**

* Dùng `random.choices(string.ascii_uppercase + string.digits, k=5)` để tạo chuỗi
* In ra chuỗi yêu cầu người dùng nhập lại
* Dùng `time.time()` để đo thời gian nhập
* Nếu nhập sai hoặc quá 5 giây thì dừng
* Nếu nhập đúng cả 5 → thông báo pass

**Ví dụ:**

```
CAPTCHA: Q9A1Z
Nhập: Q9A1Z (trong 3 giây)
✅ Passed

Lặp lại 5 lần...
```

---

###  **Bài 4: In tam giác Pascal**

**Mô tả:**
Viết chương trình in **tam giác Pascal** với số dòng do người dùng nhập vào.

**Yêu cầu cụ thể:**

* Dùng **nested loop** để sinh các số tam giác Pascal
* Áp dụng công thức:

  ```
  C(n, k) = C(n-1, k-1) + C(n-1, k)
  ```

  hoặc dùng `math.comb(n, k)` (Python 3.8+)
* Căn lề cho tam giác đều

**Ví dụ với 5 dòng:**

```
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
```

---

###  **Bài 5: Mô phỏng máy ATM**

**Mô tả:**
Viết chương trình yêu cầu người dùng nhập mã PIN.
Nếu đúng → cho phép rút tiền. Nếu sai quá **3 lần** → khóa tài khoản.

**Yêu cầu cụ thể:**

* Mã PIN đúng là `1234`
* Nếu nhập đúng:

  * In thông báo: “Bạn có thể rút tiền”
* Nếu sai → tăng biến đếm lỗi
* Sau 3 lần sai → in “Tài khoản bị khóa!”
* Dùng `while` hoặc `for`, kết hợp `break`

**Ví dụ:**

```
Nhập PIN: 1111 → Sai
Nhập PIN: 2222 → Sai
Nhập PIN: 3333 → Sai
=> Tài khoản bị khóa!
```

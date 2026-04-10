# Quản lý lỗi và ngoại lệ trong OOP Python

## 1. Ôn tập kiến thức cơ bản

Trong Python, khi chương trình gặp lỗi, nó sẽ phát sinh (raise) một **ngoại lệ (exception)**. Nếu không xử lý, chương trình sẽ dừng ngay tại đó.

* `try`: chứa đoạn code có thể phát sinh lỗi
* `except`: xử lý khi có lỗi xảy ra
* `raise`: tự tạo và phát sinh ngoại lệ
* `finally`: luôn chạy dù có lỗi hay không

Ví dụ:

```python
try:
    x = int("abc")
except ValueError as e:
    print("Có lỗi:", e)
```

---

## 2. Quản lý ngoại lệ trong OOP

Trong lập trình hướng đối tượng, chúng ta thường dùng ngoại lệ để:

1. **Đóng gói và trừu tượng hóa lỗi**: Ẩn đi chi tiết phức tạp, chỉ đưa ra thông điệp rõ ràng.
2. **Tạo ngoại lệ riêng cho lớp/hệ thống**: Mỗi class có thể định nghĩa loại lỗi riêng, giúp việc debug và bảo trì dễ dàng hơn.
3. **Kết hợp với tính kế thừa**: Có thể xây dựng một hệ thống ngoại lệ có phân cấp giống như class bình thường.

### 2.1. Tạo lớp ngoại lệ tùy chỉnh

Trong Python, tất cả ngoại lệ nên kế thừa từ **`Exception`** (hoặc lớp con của nó).

Ví dụ:

```python
class BankError(Exception):
    """Ngoại lệ chung cho hệ thống ngân hàng"""
    pass

class InsufficientFundsError(BankError):
    """Lỗi khi rút quá số dư"""
    def __init__(self, balance, amount):
        super().__init__(f"Số dư hiện tại {balance}, không đủ để rút {amount}")
        self.balance = balance
        self.amount = amount

class InvalidTransactionError(BankError):
    """Lỗi khi giao dịch không hợp lệ"""
    pass
```

---

### 2.2. Sử dụng ngoại lệ trong class

Ví dụ một class `BankAccount`:

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise InvalidTransactionError("Số tiền nạp phải > 0")
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance
```

---

### 2.3. Xử lý ngoại lệ khi sử dụng class

```python
try:
    acc = BankAccount("Alice", 100)
    acc.withdraw(200)  # Cố tình rút quá số dư
except InsufficientFundsError as e:
    print("Lỗi rút tiền:", e)
except InvalidTransactionError as e:
    print("Lỗi giao dịch:", e)
except BankError as e:
    print("Lỗi ngân hàng:", e)
```

👉 Ở đây có thể xử lý **tùy theo loại lỗi cụ thể**, hoặc gom chung theo `BankError`.

---

### 2.4. Thiết kế hệ thống ngoại lệ dạng phân cấp

Một cách tổ chức tốt trong dự án OOP lớn:

* `AppError (Exception)`
  ├── `DatabaseError(AppError)`
  ├── `NetworkError(AppError)`
  └── `BusinessError(AppError)`

Việc phân cấp này giúp code rõ ràng hơn, dễ debug, dễ logging.

---

### 2.5. Best practices khi dùng ngoại lệ trong OOP

* Không **lạm dụng ngoại lệ** cho các tình huống bình thường (ví dụ: kiểm tra `if` vẫn tốt hơn so với raise exception cho luồng logic đơn giản).
* Luôn viết thông điệp lỗi rõ ràng.
* Tạo **ngoại lệ riêng cho domain** của bạn (như `BankError`, `GameError`…), thay vì dùng Exception chung chung.
* Kết hợp với logging để lưu vết lỗi.

---

## 3. Bài tập thực hành

### Bài 1

Tạo class `Student` với các thuộc tính `name`, `age`.

* Nếu `age < 0` hoặc `age > 150` thì raise ngoại lệ `InvalidAgeError`.
* Viết chương trình nhập danh sách sinh viên và xử lý ngoại lệ khi có dữ liệu sai.

---

### Bài 2

Tạo class `Rectangle` với `width`, `height`.

* Nếu nhập giá trị âm → raise `InvalidDimensionError`.
* Viết method `area()` và `perimeter()`.
* Viết chương trình test với nhiều dữ liệu, xử lý ngoại lệ khi nhập sai.

---

### Bài 3

Tạo class `Library` để quản lý sách.

* Nếu mượn sách không có trong thư viện → raise `BookNotFoundError`.
* Nếu sách đã được mượn hết → raise `OutOfStockError`.
* Viết chương trình test với try-except.

---

### Bài 4

Tạo hệ thống bán hàng online:

* Class `Product`, `Order`.
* Nếu đặt hàng số lượng âm → raise `InvalidQuantityError`.
* Nếu đặt hàng nhiều hơn số lượng tồn kho → raise `OutOfStockError`.

---

### Bài 5

Thiết kế hệ thống ngoại lệ phân cấp cho một game RPG:

* `GameError` (base class)

  * `InvalidMoveError`
  * `NotEnoughManaError`
  * `CharacterDeadError`
* Tạo class `Character` có method `attack()`, `cast_spell()`.
* Viết test mô phỏng 1 trận đánh và xử lý ngoại lệ.


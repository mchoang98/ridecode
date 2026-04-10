# Bài thực hành

### **Mục tiêu:**

Thiết kế một hệ thống cho phép người dùng thực hiện giao dịch thanh toán thông qua nhiều phương thức khác nhau, sử dụng abstract class để đảm bảo kiến trúc mở rộng được và tuân thủ quy ước giao tiếp chuẩn.

---

### **Yêu cầu cụ thể:**

#### 1. **Tạo abstract class `PaymentMethod`:**

* Các thuộc tính bắt buộc: `user_name`, `balance`
* Các phương thức abstract:

  * `authenticate()`: kiểm tra xác thực người dùng
  * `pay(amount)`: thực hiện giao dịch
* Một phương thức thường: `check_balance()` trả về số dư hiện tại.

#### 2. **Tạo các lớp con kế thừa `PaymentMethod`:**

* `CreditCard`

  * Có thêm: `card_number`, `cvv`
  * `authenticate()` kiểm tra hợp lệ thông tin thẻ
  * `pay()` trừ tiền nếu đủ
* `PayPal`

  * Có thêm: `email`, `password`
  * `authenticate()` kiểm tra email và password hợp lệ
  * `pay()` thực hiện giao dịch nếu xác thực đúng
* `CryptoWallet`

  * Có thêm: `wallet_address`, `private_key`
  * `authenticate()` yêu cầu đúng private\_key
  * `pay()` trừ coin nếu đủ

#### 3. **Xây dựng lớp `TransactionSystem`:**

* Lưu danh sách các phương thức thanh toán đã được người dùng thêm vào hệ thống.
* Cho phép:

  * Thêm phương thức mới
  * Lựa chọn phương thức và thực hiện giao dịch (gọi `authenticate()` và `pay()`).
  * In báo cáo trạng thái từng tài khoản (ai còn bao nhiêu tiền).

---

### **Yêu cầu nâng cao (tuỳ chọn):**

* Ghi log lịch sử giao dịch vào file `log.txt`
* Mã hoá thông tin nhạy cảm (email, card number) đơn giản
* Cho phép nạp thêm tiền vào tài khoản

---

### **Gợi ý cấu trúc thư mục:**

```
project/
├── main.py
├── payment/
│   ├── __init__.py
│   ├── payment_method.py  # chứa abstract class
│   ├── credit_card.py
│   ├── paypal.py
│   └── crypto_wallet.py
└── system/
    └── transaction_system.py
```

---

### **Kết quả mong đợi khi chạy chương trình:**

```text
1. Thêm phương thức thanh toán
2. Thanh toán
3. Xem số dư
4. Thoát
Lựa chọn của bạn: 2

Chọn phương thức thanh toán:
1. CreditCard - Ngân hàng Techcom
2. PayPal - Email: user@example.com
> 1

Nhập thông tin xác thực: ...
Xác thực thành công.
Nhập số tiền cần thanh toán: 100000

Giao dịch thành công.
Số dư còn lại: 400000
```


English version

### **Objective:**

Design a system that allows users to make payments through different payment methods. The system should use abstract classes to enforce a common structure and ensure the ability to extend functionalities in the future.

---

### **Detailed Requirements:**

#### 1. **Create an abstract class `PaymentMethod`:**

* Required attributes: `user_name`, `balance`
* Abstract methods:

  * `authenticate()`: validates user credentials
  * `pay(amount)`: performs a transaction
* Regular method:

  * `check_balance()` – returns the current balance

#### 2. **Create subclasses that inherit from `PaymentMethod`:**

* `CreditCard`

  * Additional attributes: `card_number`, `cvv`
  * `authenticate()`: checks if card info is valid
  * `pay()`: deducts money if balance is sufficient
* `PayPal`

  * Additional attributes: `email`, `password`
  * `authenticate()`: verifies email and password
  * `pay()`: executes the transaction if authenticated
* `CryptoWallet`

  * Additional attributes: `wallet_address`, `private_key`
  * `authenticate()`: checks if the private key is correct
  * `pay()`: deducts coins if the balance is sufficient

#### 3. **Build a class `TransactionSystem`:**

* Stores a list of registered payment methods
* Provides functionality to:

  * Add a new payment method
  * Select a payment method and make a transaction (calls `authenticate()` and `pay()`)
  * Show the balance of each account

---

### **Advanced Requirements (Optional):**

* Log transaction history into a file named `log.txt`
* Mask sensitive information (e.g., email, card number)
* Support adding funds to a payment account

---

### **Suggested Project Structure:**

```
project/
├── main.py
├── payment/
│   ├── __init__.py
│   ├── payment_method.py    # contains the abstract class
│   ├── credit_card.py
│   ├── paypal.py
│   └── crypto_wallet.py
└── system/
    └── transaction_system.py
```

---

### **Expected Output:**

```text
1. Add a payment method
2. Make a payment
3. Check balances
4. Exit
Your choice: 2

Choose a payment method:
1. CreditCard - Bank: Techcombank
2. PayPal - Email: user@example.com
> 1

Enter authentication details...
Authentication successful.
Enter payment amount: 100000

Transaction completed.
Remaining balance: 400000
```


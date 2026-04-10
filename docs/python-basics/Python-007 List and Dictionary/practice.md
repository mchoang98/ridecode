## **Đề bài: Kiểm tra đăng nhập và khóa tài khoản**

### **Mô tả bài toán**

Bạn được cung cấp một danh sách các tài khoản và mật khẩu hợp lệ. Mỗi phần tử trong danh sách là một chuỗi có định dạng:

```
"username|password"
```

Ví dụ:

```python
accounts = [
    "letscode123|123456",
    "admin|admin123",
    "alice|qwerty",
]
```

Viết một chương trình cho phép người dùng đăng nhập bằng cách nhập tên tài khoản (`username`) và mật khẩu (`password`).

---

### **Yêu cầu bắt buộc**

1. Tách danh sách tài khoản thành các cặp `username` và `password` để dễ tra cứu.

2. Cho phép người dùng nhập vào `username` và `password`.

3. Kiểm tra xem tài khoản có tồn tại và mật khẩu có đúng không:

   * Nếu đúng: Hiển thị thông báo `"Đăng nhập thành công"` và kết thúc chương trình.
   * Nếu sai: Hiển thị `"Sai tài khoản hoặc mật khẩu"` và cho phép người dùng nhập lại.

4. Nếu người dùng nhập sai tổng cộng 3 lần liên tiếp (bất kỳ tài khoản nào), thì hiển thị `"Đăng nhập thất bại. Tạm biệt!"` và kết thúc chương trình.

---

### **Yêu cầu mở rộng (Khóa tài khoản)**

5. Nếu một tài khoản bị nhập sai mật khẩu 3 lần (không cần liên tiếp), thì tài khoản đó sẽ bị khóa. Sau đó:

   * Hiển thị thông báo: `"Tài khoản 'username' đã bị khóa do nhập sai quá 3 lần."`
   * Không cho phép người dùng đăng nhập bằng tài khoản này nữa.

6. Nếu người dùng cố đăng nhập bằng một tài khoản đã bị khóa, hiển thị thông báo: `"Tài khoản này đã bị khóa. Vui lòng liên hệ quản trị viên."`

---

### **Gợi ý kỹ thuật**

* Dùng `split("|")` để tách tài khoản và mật khẩu từ chuỗi ban đầu.
* Nên lưu thông tin tài khoản dưới dạng `dict` để tra cứu dễ hơn, ví dụ: `{"letscode123": "123456"}`.
* Sử dụng một `dict` để đếm số lần đăng nhập sai cho từng tài khoản.
* Sử dụng một `set` để lưu các tài khoản đã bị khóa.
* Dùng vòng lặp `while` để cho phép người dùng thử lại khi đăng nhập sai.
* Không cần sử dụng thư viện ngoài.

---

### **Mục tiêu bài học**

* Ôn tập và thực hành thao tác với chuỗi (`split`, `strip`, `join`, …).
* Tư duy logic xử lý điều kiện và đếm số lần thử.
* Vận dụng các cấu trúc dữ liệu như `list`, `tuple`, `dict`, `set`.
* Thực hành kiểm soát luồng chương trình với vòng lặp và câu lệnh điều kiện (`if`, `while`, `break`, `continue`).



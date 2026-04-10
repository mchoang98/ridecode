# BÀI GIẢNG: VENV TRONG PYTHON

---

## Mục tiêu bài học

Sau bài học này, học sinh sẽ:

* Hiểu được môi trường ảo trong Python là gì.
* Biết lý do cần sử dụng môi trường ảo khi lập trình.
* Biết cách tạo, kích hoạt, cài đặt thư viện, và xóa môi trường ảo.
* Biết cách sử dụng file `requirements.txt` để lưu trữ danh sách các thư viện đã cài.

---

## I. Môi trường ảo là gì?

Trong Python, một **môi trường ảo** (virtual environment) là một thư mục riêng biệt chứa:

* Một phiên bản riêng của trình thông dịch Python.
* Các thư viện (thư viện là những đoạn mã đã được viết sẵn mà ta có thể sử dụng lại).

Điều quan trọng là **môi trường ảo không ảnh hưởng đến các chương trình hoặc thư viện bên ngoài**.

---

## II. Tại sao cần sử dụng môi trường ảo?

Giả sử em có 2 dự án Python:

* Dự án A cần dùng thư viện `flask` phiên bản 1.1.
* Dự án B cần dùng `flask` phiên bản 2.0.

Nếu cài chung trên máy tính, có thể xảy ra xung đột. Môi trường ảo giúp:

* Tách riêng thư viện cho từng dự án.
* Tránh làm hỏng các chương trình khác.
* Dễ dàng chia sẻ dự án với người khác mà vẫn đảm bảo đúng các thư viện cần thiết.

---

## III. Cách tạo môi trường ảo

Python từ phiên bản 3.3 trở lên đã tích hợp sẵn module `venv` để tạo môi trường ảo.

### Bước 1: Mở terminal (hoặc Command Prompt nếu dùng Windows)

### Bước 2: Tạo môi trường ảo bằng lệnh:

```bash
python -m venv ten_moi_truong
```

Ví dụ:

```bash
python -m venv venv
```

Sau khi chạy xong, sẽ có một thư mục tên `venv` được tạo ra.

---

## IV. Cách kích hoạt môi trường ảo

Việc kích hoạt giúp ta sử dụng đúng môi trường ảo vừa tạo.

* Nếu dùng Windows:

```bash
venv\Scripts\activate
```

* Nếu dùng macOS hoặc Linux:

```bash
source venv/bin/activate
```

Sau khi kích hoạt, sẽ thấy tên môi trường hiện ở đầu dòng trong terminal. Ví dụ: `(venv)`.

---

## V. Cài đặt thư viện trong môi trường ảo

Sau khi đã kích hoạt môi trường, có thể cài thư viện bằng `pip`.

Ví dụ:

```bash
pip install requests
```

Thư viện này sẽ được cài **chỉ trong môi trường ảo**, không ảnh hưởng đến máy tính.

Để xem các thư viện đã cài:

```bash
pip list
```

---

## VI. Xuất danh sách thư viện ra file

Khi hoàn thành một dự án, ta có thể xuất danh sách các thư viện đã dùng ra file `requirements.txt`:

```bash
pip freeze > requirements.txt
```

File này giúp người khác cài đúng các thư viện khi chạy lại dự án của mình.

---

## VII. Cài đặt lại thư viện từ requirements.txt

Khi đã có file `requirements.txt`, có thể cài toàn bộ thư viện bằng lệnh:

```bash
pip install -r requirements.txt
```

---

## VIII. Tắt môi trường ảo

Khi không cần sử dụng nữa, có thể tắt bằng lệnh:

```bash
deactivate
```

Lúc này, terminal sẽ trở về trạng thái ban đầu.

---

## IX. Xóa môi trường ảo

Chỉ cần xóa thư mục `venv` là xong.

Ví dụ: nếu dùng Windows, có thể xóa như một thư mục bình thường. Nếu dùng dòng lệnh:

```bash
rm -rf venv
```

---

## X. Lưu ý

* Mỗi dự án Python nên có một môi trường ảo riêng.
* Không nên cài các thư viện trực tiếp vào hệ thống nếu không cần thiết.
* Thư mục `venv` không cần đưa lên GitHub. Thay vào đó, chỉ cần chia sẻ `requirements.txt`.

---

## Bài tập thực hành

1. Tạo thư mục mới tên `demo_virtual_env`.
2. Tạo môi trường ảo tên `venv`.
3. Kích hoạt môi trường.
4. Cài thư viện `requests`.
5. Xuất danh sách thư viện ra file `requirements.txt`.
6. Tắt môi trường.
7. Xóa thư mục `venv`.

---

## Kết luận

Môi trường ảo là một phần quan trọng trong lập trình Python, đặc biệt khi làm việc với nhiều dự án khác nhau. Biết cách sử dụng môi trường ảo giúp dự án của em trở nên ổn định, dễ chia sẻ và dễ bảo trì hơn.

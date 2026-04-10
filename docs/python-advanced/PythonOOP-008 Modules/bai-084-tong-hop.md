# Ôn tập tổng hợp module

## Đề bài: Thiết kế chương trình Python theo cấu trúc module và package

## Mục tiêu

Thiết kế lại một chương trình Python bạn đã từng thực hiện (hoặc tự chọn một chủ đề) sao cho:

* Có cấu trúc rõ ràng bằng cách sử dụng module và package.
* Sẵn sàng đóng gói như một thư viện để có thể tái sử dụng hoặc chia sẻ với người khác.
* Có thể phát hành trên Python Package Index (PyPI) nếu muốn.

## Yêu cầu chi tiết

### 1. Chọn hoặc xây dựng lại một bài toán

Chọn một trong các chương trình bạn đã làm (hoặc tự nghĩ ra một bài toán mới), ví dụ:

* Trình quản lý học sinh
* Trình quản lý thư viện
* Game đoán số hoặc trò chơi chữ
* Công cụ chuyển đổi đơn vị
* Trình phân tích dữ liệu đơn giản
* Trình kiểm tra mật khẩu an toàn

Bài toán không cần quá phức tạp, nhưng nên có ít nhất:

* Một hoặc nhiều class (theo lập trình hướng đối tượng)
* Một số hàm xử lý chức năng
* Tương tác đầu vào từ người dùng (qua terminal hoặc file)

### 2. Tổ chức lại cấu trúc chương trình theo module và package

Bạn cần chia chương trình thành các phần hợp lý. Gợi ý cấu trúc thư mục như sau:

```
project_name/
│
├── project_name/         # Thư mục chính (package chính)
│   ├── __init__.py
│   ├── main.py           # Chạy chương trình từ đây (nếu CLI)
│   ├── models/           # Các class chính
│   │   ├── __init__.py
│   │   └── ...py
│   ├── services/         # Hàm xử lý chính
│   │   ├── __init__.py
│   │   └── ...py
│   └── utils/            # Hàm tiện ích phụ
│       ├── __init__.py
│       └── ...py
│
├── tests/                # Thư mục kiểm thử (tùy chọn)
│   ├── __init__.py
│   └── test_*.py
│
├── setup.py              # File cấu hình cài đặt (nếu dùng setuptools)
├── pyproject.toml        # (Tùy chọn) theo chuẩn mới PEP 517/518
├── README.md             # Giới thiệu dự án
├── LICENSE               # Giấy phép sử dụng (có thể dùng MIT)
└── requirements.txt      # (Tùy chọn) Các thư viện cần cài đặt
```

### 3. Cấu hình đóng gói và cài đặt

#### a. `setup.py` (nếu không dùng `pyproject.toml`)

Ví dụ nội dung đơn giản:

```python
from setuptools import setup, find_packages

setup(
    name="project_name",
    version="0.1",
    packages=find_packages(),
    install_requires=[],
    author="Tên của bạn",
    description="Mô tả ngắn về dự án",
    entry_points={
        "console_scripts": [
            "project_name=project_name.main:main",
        ]
    },
)
```

#### b. `README.md`

Viết mô tả ngắn gọn:

* Chức năng chính của chương trình
* Hướng dẫn cài đặt: `pip install .`
* Cách sử dụng

#### c. `__init__.py`

Thêm file `__init__.py` rỗng vào mỗi thư mục con để Python hiểu đó là một package.

### 4. Kiểm tra import module

Thử import các phần của chương trình bằng cách sử dụng cú pháp:

```python
from project_name.models.user import User
from project_name.services.auth import login
```

Thay vì gộp tất cả logic vào một file duy nhất.

### 5. Kiểm tra chạy được chương trình

Chạy chương trình từ file chính:

```bash
python -m project_name.main
```

Hoặc nếu có thiết lập `console_scripts`, thử sau khi cài đặt:

```bash
pip install .
project_name
```

### 6. (Tùy chọn nâng cao) Đăng lên PyPI

Nếu bạn đã có tài khoản [https://pypi.org](https://pypi.org), bạn có thể thực hiện:

* Đóng gói: `python setup.py sdist bdist_wheel`
* Upload: `twine upload dist/*`

(Phần này có thể bỏ qua nếu chỉ học nội bộ)

---

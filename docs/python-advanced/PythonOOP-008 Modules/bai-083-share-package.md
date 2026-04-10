# BÀI GIẢNG: CÁCH TẠO PACKAGE VÀ CHIA SẺ LÊN PYPI

---

## I. Mục tiêu bài học

Học sinh sẽ:

* Biết cách cấu trúc một Python package đúng chuẩn.
* Biết cách tạo tài khoản và đưa package lên PyPI.
* Biết sử dụng `setup.py`, `pyproject.toml`, và công cụ `build`, `twine`.

---

## II. PyPI là gì?

* **PyPI (Python Package Index)** là nơi lưu trữ và chia sẻ các thư viện Python.
* Khi bạn `pip install ten_thu_vien`, pip sẽ tìm trên PyPI để tải về.

**Mục tiêu**: Đưa gói thư viện của chính mình lên PyPI để người khác có thể cài bằng:

```bash
pip install ten_thu_vien
```

---

## III. Tạo một package Python đơn giản

### Cấu trúc chuẩn:

```
my_package/
│
├── src/
│   └── my_package/
│       ├── __init__.py
│       └── math_utils.py
│
├── tests/
│   └── test_math_utils.py
│
├── README.md
├── LICENSE
├── pyproject.toml
├── setup.cfg
├── setup.py
```

### Ví dụ nội dung

`src/my_package/math_utils.py`

```python
def add(a, b):
    return a + b
```

`src/my_package/__init__.py`

```python
from .math_utils import add
```

---

## IV. Viết file `setup.py`

Tạo file `setup.py` ở gốc:

```python
from setuptools import setup, find_packages

setup(
    name="my_package",
    version="0.1.0",
    description="A simple math utility package",
    author="Phu Nguyen",
    author_email="youremail@example.com",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.7",
)
```

---

## V. Viết `pyproject.toml`

`pyproject.toml` giúp pip và các công cụ build hiểu được cách xử lý package của bạn.

```toml
[build-system]
requires = ["setuptools", "wheel"]
build-backend = "setuptools.build_meta"
```

---

## VI. Thêm mô tả dự án

Viết file `README.md` để giới thiệu về thư viện.

```md
# my_package

A simple math package that provides an `add` function.
```

---

## VII. Tạo gói cài đặt (build package)

Cài công cụ build:

```bash
pip install build
```

Chạy lệnh tạo package:

```bash
python -m build
```

Sau khi chạy, sẽ có thư mục `dist/` chứa file `.tar.gz` và `.whl`.

---

## VIII. Tạo tài khoản trên PyPI

1. Truy cập [https://pypi.org/account/register/](https://pypi.org/account/register/)
2. Đăng ký tài khoản.
3. Kích hoạt email.

---

## IX. Đăng package lên PyPI

Cài công cụ `twine`:

```bash
pip install twine
```

Đăng package:

```bash
twine upload dist/*
```

Sẽ yêu cầu nhập tài khoản và mật khẩu PyPI.

---

## X. Kiểm tra lại

Nếu thành công, bạn có thể lên [https://pypi.org/project/my\_package/](https://pypi.org/project/my_package/) để xem gói của mình đã được public.

Bây giờ, ai cũng có thể cài bằng:

```bash
pip install my_package
```

---

## XI. Lưu ý quan trọng

* Tên gói phải **chưa có ai dùng trên PyPI**.
* Gói nên có: `README.md`, `LICENSE`, `version`, `author`.
* Không đẩy file `venv`, `__pycache__`, hoặc dữ liệu không cần thiết.
* Mỗi lần cập nhật gói phải đổi version (`0.1.1`, `0.2.0`, v.v.)

---

## XII. Bài tập thực hành

1. Tạo gói thư viện tên `text_tools`, chứa:

   * Hàm `reverse_text(text)`
   * Hàm `remove_vowels(text)`
2. Cấu trúc chuẩn như hướng dẫn.
3. Tạo tài khoản PyPI test: [https://test.pypi.org](https://test.pypi.org)
4. Upload gói lên **test PyPI** bằng:

```bash
twine upload --repository testpypi dist/*
```

5. Cài thử bằng:

```bash
pip install -i https://test.pypi.org/simple/ text_tools
```


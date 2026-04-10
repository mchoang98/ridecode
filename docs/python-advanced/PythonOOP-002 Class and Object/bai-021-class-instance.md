# Bài 021 - Class Attribute vs Instance Attribute

## 1. Class Attribute (thuộc tính lớp)

* Dùng chung cho **mọi đối tượng**.
* Khai báo **ngoài `__init__`**.
* Chỉ có **một bản sao duy nhất** trong bộ nhớ.

---

## 2. Instance Attribute (thuộc tính đối tượng)

* **Riêng biệt cho từng đối tượng**.
* Khai báo trong `__init__` hoặc phương thức.
* Mỗi object giữ một **bản sao riêng**.

---

## 3. Ví dụ minh họa

```python
class Employee:
    company_name = "TechCorp"  # Class attribute

    def __init__(self, emp_id):
        self.emp_id = emp_id  # Instance attribute

e1 = Employee(101)
e2 = Employee(102)

print(e1.company_name)   # 👉 TechCorp
print(e2.emp_id)         # 👉 102
````

### 🔹 Sơ đồ minh họa

```mermaid
classDiagram
    class Employee {
        +company_name : string = "TechCorp" <<class>>
        +emp_id : int <<instance>>
    }

    Employee <|-- e1 : Instance
    Employee <|-- e2 : Instance
```

---

## 4. Thay đổi thuộc tính lớp

```python
Employee.company_name = "TechGlobal"

print(e1.company_name)   # 👉 TechGlobal
print(e2.company_name)   # 👉 TechGlobal
```

→ Tất cả đối tượng đều thấy thay đổi vì cùng trỏ đến `company_name` trong lớp.

```mermaid
flowchart TD
    A["Employee.company_name = 'TechGlobal'"] --> B["e1.company_name = TechGlobal"]
    A --> C["e2.company_name = TechGlobal"]
```

---

## 5. Thêm thuộc tính sau khi tạo

```python
e1.ten = "An"
e2.chuc_vu = "Giám đốc"
Employee.tru_so = "Hà Nội"

print(e1.ten)        # 👉 An
print(e2.chuc_vu)    # 👉 Giám đốc
print(e1.tru_so)     # 👉 Hà Nội
```

→ Python cho phép thêm thuộc tính vào **đối tượng hoặc lớp bất kỳ lúc nào**.

```mermaid
flowchart LR
    subgraph Employee Class
        A["company_name"]
        B["tru_so = 'Hà Nội'"]
    end

    subgraph e1 Instance
        C["emp_id=101"]
        D["ten = 'An'"]
    end

    subgraph e2 Instance
        E["emp_id=102"]
        F["chuc_vu = 'Giám đốc'"]
    end
```

---

## 6. Khi tên thuộc tính trùng nhau

```python
class Employee:
    dia_chi = "Hà Nội"

e = Employee(101)
e.dia_chi = "TP.HCM"

print(Employee.dia_chi)  # 👉 Hà Nội
print(e.dia_chi)         # 👉 TP.HCM
```

→ Nếu trùng tên, **thuộc tính của đối tượng ưu tiên hơn**.

```mermaid
flowchart TD
    A["Class Attribute: dia_chi = 'Hà Nội'"]
    B["Instance Attribute e.dia_chi = 'TP.HCM'"]
    B -->|"Ưu tiên khi gọi e.dia_chi"| C["Kết quả: TP.HCM"]
```

---

## 7. Tổng kết nhanh

| Khái niệm          | Đặc điểm chính                              |
| ------------------ | ------------------------------------------- |
| Class              | Khuôn mẫu định nghĩa thuộc tính & hành vi   |
| Object             | Một thực thể cụ thể của class               |
| Instance Attribute | Dữ liệu riêng biệt của mỗi object           |
| Class Attribute    | Dữ liệu dùng chung cho tất cả object        |
| `self`             | Đại diện cho đối tượng hiện tại trong class |
| `__init__`         | Hàm khởi tạo được gọi khi object được tạo   |

---

## 8. Gợi ý áp dụng

* Dùng **class attribute** cho thông tin chung: tên công ty, địa chỉ...
* Dùng **instance attribute** cho thông tin cá nhân: mã nhân viên, tên, chức vụ...

---

👉 **Tiếp theo:** Bạn sẽ học về các loại **phương thức trong lớp**: `instance method`, `class method`, `static method` và cách sử dụng decorator như `@classmethod`.


# BÀI GIẢNG: LÀM VIỆC VỚI API TRONG PYTHON (CHUYÊN SÂU, KHÔNG OOP)

## 1. Mục tiêu

Sau bài này, học sinh sẽ:

* Hiểu rõ HTTP request/response
* Sử dụng thư viện requests một cách chuẩn
* Xử lý JSON có cấu trúc phức tạp
* Viết code an toàn (error handling, timeout, retry)
* Thiết kế hàm gọi API có thể tái sử dụng

---

## 2. Kiến thức nền tảng cần hiểu

### 2.1 HTTP là gì?

Client (Python) gửi request → Server trả response

Một request gồm:

* Method: GET, POST, PUT, DELETE
* URL
* Headers
* Body (với POST/PUT)

Ví dụ:

```python
GET https://api.example.com/users
```

---

### 2.2 Response gồm gì?

* status_code
* headers
* body (thường là JSON)

```python
res = requests.get(url)
print(res.status_code)
print(res.headers)
print(res.text)
```

---

## 3. Sử dụng requests đúng cách

### 3.1 Cài đặt

```bash
pip install requests
```

---

### 3.2 GET cơ bản

```python
import requests

url = "https://jsonplaceholder.typicode.com/posts"
res = requests.get(url)

print(res.status_code)
print(res.json()[0])
```

---

### 3.3 Truyền query params

```python
params = {
    "userId": 1
}

res = requests.get(url, params=params)
print(res.url)
```

---

### 3.4 Headers

```python
headers = {
    "User-Agent": "my-app"
}

res = requests.get(url, headers=headers)
```

---

## 4. Làm việc với JSON nâng cao

### 4.1 JSON lồng nhau

```python
data = {
    "user": {
        "name": "An",
        "age": 12
    }
}

print(data["user"]["name"])
```

---

### 4.2 Truy cập an toàn (tránh crash)

```python
name = data.get("user", {}).get("name")
```

---

### 4.3 Lặp qua danh sách

```python
for post in res.json():
    print(post["title"])
```

---

## 5. Xử lý lỗi chuyên nghiệp

### 5.1 Kiểm tra status code

```python
if res.status_code != 200:
    print("Request failed")
```

---

### 5.2 try/except

```python
try:
    res = requests.get(url, timeout=5)
    res.raise_for_status()
except requests.exceptions.Timeout:
    print("Timeout")
except requests.exceptions.RequestException as e:
    print("Error:", e)
```

---

### 5.3 Timeout (rất quan trọng)

```python
requests.get(url, timeout=3)
```

---

## 6. Viết hàm gọi API chuẩn

```python
def fetch_json(url, params=None):
    try:
        res = requests.get(url, params=params, timeout=5)
        res.raise_for_status()
        return res.json()
    except Exception as e:
        print("API error:", e)
        return None
```

---

## 7. Retry (thử lại khi lỗi)

```python
import time

def fetch_with_retry(url, retries=3):
    for i in range(retries):
        try:
            res = requests.get(url, timeout=5)
            res.raise_for_status()
            return res.json()
        except:
            time.sleep(1)
    return None
```

---

## 8. POST request

```python
url = "https://jsonplaceholder.typicode.com/posts"

payload = {
    "title": "Hello",
    "body": "World",
    "userId": 1
}

res = requests.post(url, json=payload)
print(res.json())
```

---

## 9. Làm việc với các API thực tế

### 9.1 JSONPlaceholder

```python
data = fetch_json("https://jsonplaceholder.typicode.com/posts")
print(len(data))
```

---

### 9.2 Random User

```python
data = fetch_json("https://randomuser.me/api")
user = data["results"][0]
print(user["email"])
```

---

### 9.3 Joke API

```python
data = fetch_json("https://official-joke-api.appspot.com/random_joke")
print(data["setup"])
```

---

### 9.4 Dog API

```python
data = fetch_json("https://dog.ceo/api/breeds/image/random")
print(data["message"])
```

---

## 10. Thiết kế chương trình CLI (chuẩn)

```python
def main():
    while True:
        print("1. Joke")
        print("2. Random User")
        print("3. Exit")

        choice = input("Choose: ")

        if choice == "1":
            data = fetch_json("https://official-joke-api.appspot.com/random_joke")
            print(data["setup"])
        elif choice == "2":
            data = fetch_json("https://randomuser.me/api")
            print(data["results"][0]["email"])
        else:
            break

if __name__ == "__main__":
    main()
```

---

## 11. Các lỗi thường gặp

* KeyError: truy cập sai key JSON
* Timeout: server chậm
* 403/401: thiếu API key
* 429: bị giới hạn request

---

## 12. Best Practices

* Luôn dùng timeout
* Không hardcode API key
* Log lỗi rõ ràng
* Tách logic thành hàm

---

## 13. Bài tập nâng cao

1. Viết function cache API (lưu kết quả tạm)
2. Gộp 2 API thành 1 output
3. Viết logger ghi lỗi ra file
4. Tạo tool CLI hoàn chỉnh

---

## 14. Tổng kết

* requests là core tool
* JSON cần xử lý cẩn thận
* Error handling là bắt buộc
* Code phải reusable

---

## 15. Hướng phát triển

* Async (aiohttp)
* Web framework (Flask)
* Data pipeline

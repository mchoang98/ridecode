#  BÀI TẬP: Pokémo (dùng PokéAPI)

## 🎯 Mục tiêu

* Lấy dữ liệu Pokémon từ API
* Chuẩn hóa về format riêng
* Lấy và xử lý skill

---
Dưới đây là phiên bản **API chi tiết hơn (dựa trên docs + GitHub của PokéAPI)** nhưng vẫn giữ dạng dropdown gọn:

---

## 📡 API (chi tiết)

<details>
<summary><b>Xem hướng dẫn API chi tiết</b></summary>

## 1. Base URL

```text
https://pokeapi.co/api/v2/
```

* REST API, trả về JSON
* Không cần auth, dùng trực tiếp được ([Open Public APIs][1])

---

## 2. Endpoint: Pokémon

```http
GET /pokemon/{id or name}
```

Ví dụ:

```http
GET /pokemon/pikachu
GET /pokemon/25
```

---

### Cấu trúc response (rút gọn)

```json
{
  "name": "pikachu",
  "stats": [...],
  "types": [...],
  "moves": [...],
  "abilities": [...],
  "sprites": {...}
}
```

---

### Các field quan trọng

#### Stats

```json
{
  "base_stat": 55,
  "stat": { "name": "attack" }
}
```

👉 Map:

```text
hp       → HP
attack   → ATK
defense  → DEF
```

---

#### Type

```json
{
  "type": { "name": "electric" }
}
```

👉 Có thể có nhiều type, thường lấy `[0]`

---

#### Moves

```json
{
  "move": {
    "name": "thunder-shock",
    "url": "https://pokeapi.co/api/v2/move/84/"
  }
}
```

👉 Quan trọng:

* Không có `power`, `accuracy` ở đây
* Chỉ có **link → phải gọi tiếp API**

---

## 3. Endpoint: Move

```http
GET /move/{id or name}
```

Ví dụ:

```http
GET /move/84
GET /move/thunder-shock
```

---

### Cấu trúc response (rút gọn)

```json
{
  "name": "thunder-shock",
  "power": 40,
  "accuracy": 100,
  "pp": 30,
  "type": { "name": "electric" }
}
```

---

### Field quan trọng

```text
name       → tên skill
power      → damage base
accuracy   → % trúng
type       → hệ
```

---

### Lưu ý quan trọng

* `power` có thể = null
* `accuracy` có thể = null
* Có nhiều field không cần dùng (pp, effect, meta...) ([pokeapi.co][2])

---

## 4. Pagination (list Pokémon)

```http
GET /pokemon?limit=20&offset=0
```

Response:

```json
{
  "count": 1281,
  "results": [
    { "name": "bulbasaur", "url": "..." }
  ]
}
```

👉 Pattern:

* API trả **name + url**
* Muốn chi tiết → gọi tiếp từng `url`

➡️ Đây là thiết kế phổ biến để tránh trả quá nhiều data một lần ([Open Public APIs][1])

---

## 5. Cách API hoạt động (quan trọng)

PokéAPI dùng mô hình:

```text
List endpoint → trả danh sách (nhẹ)
Detail endpoint → trả chi tiết (nặng)
```

Ví dụ:

```text
/pokemon → list
/pokemon/{id} → detail
/move/{id} → detail move
```

👉 Nghĩa là:

* Luôn phải gọi **nhiều request**
* Client phải tự combine data

---

## 6. Resource liên quan (tham khảo thêm)

PokéAPI có rất nhiều endpoint:

```text
/pokemon
/move
/type
/ability
/item
/location
```

→ Tất cả đều theo cùng pattern ([pokeapi.co][3])

---

## 7. Wrapper (nếu không muốn gọi raw API)

Có thư viện chính thức:

* Python: `pokebase`
* JS: `pokedex-promise-v2`

→ có caching sẵn ([GitHub][4])

---

## 8. Tóm tắt nhanh

```text
/pokemon/{name} → stats, type, moves (chỉ link)
/move/{id}      → power, accuracy, type
/pokemon        → list (pagination)
```

---

</details>


---

## ⚔️ SPEC (game đơn giản)

### 1. Chỉ số

```text
HP, ATK, DEF, TYPE
```

---

### 2. Hệ

```text
Fire > Grass
Grass > Water
Water > Fire
```

| Quan hệ | Damage |
| ------- | ------ |
| Khắc    | x2     |
| Bị khắc | x0.5   |
| Thường  | x1     |

---

### 3. Skill

```text
name, power, type, accuracy
```

---

### 4. Damage

```text
damage = (ATK * power / DEF) * type_multiplier * random(0.8 → 1.2)
```

---

### 5. Cơ chế thêm

```text
MISS: random > accuracy
CRIT: 10% → x2
```

---

## ✅ Yêu cầu tối thiểu

* 1 Pokémon có ≥ 2 skill
* Có type system
* Có miss + random damage

---

## 🎯 Kết quả mẫu

```python
{
  "name": "pikachu",
  "HP": 35,
  "ATK": 55,
  "DEF": 40,
  "TYPE": "electric",
  "moves": [
    {"name": "thunder-shock", "power": 40, "type": "electric", "accuracy": 1.0}
  ]
}
```


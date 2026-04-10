# Bai14\_Generic

## Mục tiêu bài học

* Hiểu được Generic là gì và vì sao nên dùng
* Biết cách khai báo hàm và class với Generic
* Biết sử dụng Generic để tái sử dụng code với kiểu dữ liệu linh hoạt
* Biết kết hợp Generic với Interface, Constraint và Default Type

---

## Nội dung chính

### 1. Generic là gì?

* Generic là một cách để viết **code có thể làm việc với nhiều kiểu dữ liệu**, nhưng vẫn đảm bảo **kiểu an toàn** (type-safe).
* Thay vì dùng `any` (mất kiểm soát), Generic cho phép giữ lại thông tin kiểu.

```ts
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));
```

> `T` là kiểu dữ liệu được truyền vào tại thời điểm gọi hàm.

---

### 2. Hàm Generic – cơ bản

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement<number>([1, 2, 3]);
const str = getFirstElement<string>(["a", "b", "c"]);
```

---

### 3. Generic với nhiều tham số kiểu

```ts
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const result = pair<string, number>("tuổi", 25); // ["tuổi", 25]
```

---

### 4. Generic với Interface

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Phú", age: 22 },
  status: 200,
};
```

---

### 5. Generic Constraint (ràng buộc)

```ts
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("hello"); // ✅
logLength([1, 2, 3]); // ✅
// logLength(123); ❌ lỗi vì number không có thuộc tính length
```

---

### 6. Generic Class

```ts
class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberStorage = new Storage<number>();
numberStorage.add(1);
numberStorage.add(2);

const stringStorage = new Storage<string>();
stringStorage.add("A");
```

---

### 7. Default Type trong Generic

```ts
function makeList<T = string>(): T[] {
  return [];
}

const defaultList = makeList(); // string[]
const numberList = makeList<number>(); // number[]
```

---

## Bài tập

### Bài 1 – Hàm `wrapValue`

Viết một hàm generic `wrapValue` nhận vào giá trị bất kỳ và trả về object `{ value: ... }`.

---

### Bài 2 – `mergeObject<T, U>`

Tạo hàm `mergeObject<T, U>` kết hợp 2 object thành 1 object mới.

---

### Bài 3 – Lọc mảng theo kiểu

Viết hàm `filterByType<T>(arr: T[], type: string): T[]` để lọc phần tử theo typeof.

---

### Bài 4 – Class `Box<T>`

Tạo class `Box<T>` có phương thức `add()`, `getAll()`, `remove()`, có thể dùng cho string, number, object.

---

### Bài 5 – Gọi API với Generic

Tạo interface `ApiResponse<T>` như ví dụ. Tạo một hàm `getUserData(): ApiResponse<User>` để mô phỏng gọi API trả về user.


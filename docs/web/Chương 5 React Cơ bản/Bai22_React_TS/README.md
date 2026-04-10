# Bai22\_React\_TS

## Mục tiêu bài học

* Củng cố cách viết component React kết hợp chặt chẽ với TypeScript
* Làm việc với `props`, `state`, `event`, `ref`, `context`, `form` sử dụng kiểu dữ liệu rõ ràng
* Tổ chức cấu trúc project rõ ràng theo mô-đun
* Viết mã an toàn, dễ bảo trì với TypeScript trong môi trường React
* Hiểu cách tái sử dụng logic với custom hook

---

## Nội dung chính

### 1. Kiểu hóa `props` và `state` rõ ràng

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const MyButton = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```

```tsx
const [count, setCount] = useState<number>(0);
```

---

### 2. Gán kiểu cho `event`

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // xử lý submit
};
```

---

### 3. Sử dụng `ref` với kiểu dữ liệu

```tsx
import { useRef } from "react";

const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  inputRef.current?.focus();
};
```

---

### 4. Tạo Custom Hook với generic

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

---

### 5. Gán kiểu context với TypeScript

```tsx
type AuthContextType = {
  user: string | null;
  login: (username: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
```

---

### 6. Tổ chức cấu trúc dự án

```
src/
├── components/
│   └── Button.tsx
├── hooks/
│   └── useLocalStorage.ts
├── contexts/
│   └── AuthContext.tsx
├── types/
│   └── index.ts
├── pages/
│   └── Home.tsx
├── App.tsx
```

---

## Bài tập

### Bài 1 – Tạo component Button có props

Tạo component `Button` nhận `label` và `onClick`, kiểu hóa bằng `type`.

---

### Bài 2 – Gán kiểu cho form

Tạo form login (`username`, `password`) với state kiểu `LoginFormData`. In dữ liệu khi submit.

---

### Bài 3 – Custom Hook `useLocalStorage`

Viết hook `useLocalStorage` như nội dung bài, sử dụng để lưu username khi đăng nhập.

---

### Bài 4 – Dùng useRef

Tạo input có nút “Focus”, khi nhấn vào nút thì input được focus bằng `ref`.

---

### Bài 5 – Tạo Context

Tạo `AuthContext` chứa `user`, `login()`, `logout()`. Tạo `LoginPage`, `ProfilePage` để sử dụng context và hiển thị user.


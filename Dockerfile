# Вибираємо базовий образ Node.js 22 (alpine - легкий)
FROM node:22-alpine

# Створюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json (або yarn.lock)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли проекту
COPY . .

# Якщо ти будеш будувати TS, додай build крок:
RUN npm run build

# Виставляємо порт (якщо API на 3000)
EXPOSE 3000

# Команда запуску додатку
CMD ["node", "dist/main.js"]

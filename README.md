# ScholarDex

## 📌 Description

ScholarDex is a centralized student management platform built to streamline academic record-keeping and administrative workflows. The system features role-based authentication for both students and administrators, allowing authorized users to manage student profiles, update record details, and track authentication session logs.

---

## 🛠️ Tech Stack

| Category                    | Technologies Used                                                         |
| :-------------------------- | :------------------------------------------------------------------------ |
| 🌐 **Programming Language** | `TypeScript`                                                              |
| 🧩 **Framework**            | `NestJS`                                                                  |
| ⚛️ **Libraries**            | `Prisma`, `bcrypt.js`, `Passport`, `class-validator`, `class-transformer` |
| 🗄️ **Database**             | `Neon (PostgreSQL)`                                                       |
| ⚡ **Tool**                 | `Postman`                                                                 |

---

## ⚙️ Setup Instructions

1. **Prerequisites**
   - Node.js 24 or higher.
   - Git installed on your system.
   - PNPM 10 installed on your system (Optional).
   - An active [Neon](https://neon.com) account and Database Connection String.
   - Postman installed on your system.

2. **Neon Connection String Setup**
   - Visit the official [Neon website](https://neon.com).
   - Sign up for a new account or log in to your existing account.
   - Once redirected to the dashboard, navigate to the **Projects** menu and click **New Project**.
   - Set your project name, select your desired PostgreSQL version and region, then click **Create**.
   - Once created, click the **Connect** button to view your database connection details.
   - Copy the provided connection string to use during the environment configuration phase.

3. **Clone the Repository**

```bash
git clone https://github.com/Fikri-Rouzan/scholardex.git
cd scholardex
```

4. **Install Packages**

```bash
# Using npm
npm i

# Using pnpm
pnpm i
```

5. **Configure Environment Variables**

```bash
cp .env.example .env
```

- Open the `.env` file and configure the following variables

  ```env
  DATABASE_URL="YOUR_DATABASE_URL"

  JWT_SECRET="YOUR_JWT_SECRET"
  JWT_EXPIRES="YOUR_JWT_EXPIRES"

  ADMIN_USERNAME="YOUR_ADMIN_USERNAME"
  ADMIN_PASSWORD="YOUR_ADMIN_PASSWORD"
  ```

6. **Generate Database Client**

```bash
# Using npm
npx prisma generate

# Using pnpm
pnpm prisma generate
```

7. **Run Database Migration**

```bash
# Using npm
npx prisma migrate dev

# Using pnpm
pnpm prisma migrate dev
```

8. **Run the Admin Seeder**

```bash
# Using npm
npm run seed

# Using pnpm
pnpm seed
```

9. **Run the Program**

```bash
# Using npm
npm run start:dev

# Using pnpm
pnpm start:dev
```

---

## 📬 Import Postman Collection

- Open the `postman/` directory in this project.
- Import the provided `.json` file into your **Postman** workspace.
- Read the description for each request to understand the API endpoints, headers, and required parameters.

---

## 🪄 Running Prettier

```bash
# Using npm
npm run format

# Using pnpm
pnpm format
```

#Criar o package.json:
- npm init -y
- yarn init -y

# Instalar o typescript:
yarn add typescript -D
npm add typescript -D (dependencia de desenvolvimento)
#Instalar o express
yarn add express
npm add express
npm add @types/express -D (autocomplit)
#inicializar typescript
yarn tsc --init

#instalação do prisma

yarn add prisma
yarn add @prisma/client
npx prisma init

#Biblioteca para criptografa a senha do usuário:
yarn add bcryptjs
yarn add @types/bcryptjs -D
-- Para verificar se a senha está correta importar no auth: import { compare } from "bcryptjs";

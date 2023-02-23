# Geral de instação de dependências:
![MinionsGIF](https://user-images.githubusercontent.com/89320151/221033260-aa49bc4d-a43d-4902-a903-b3f3bc9e8dea.gif)


# Criar o package.json:

- npm init -y

- yarn init -y

# Instalar o typescript:

yarn add typescript -D

npm add typescript -D (dependencia de desenvolvimento)

# Instalar o express

yarn add express

npm add express

npm add @types/express -D (autocomplit)

# Inicializar typescript

yarn tsc --init

# Instalação do prisma

yarn add prisma

yarn add @prisma/client

npx prisma init

# Biblioteca para criptografa a senha do usuário:

yarn add bcryptjs

yarn add @types/bcryptjs -D

-- Para verificar se a senha está correta importar no auth: import { compare } from "bcryptjs";

# Autenticando com JWT

yarn add @types/jsonwebtoken -D

yarn add dotenv

OBS: AuthUserController = erro no process.env.JWT_SECRET, typescript não aceita quando deixa estrito p/ fazer tipagem. Pode-se se desabalitar no tsconfig mudando de true para false. ex: "strict": false.

Caso der erro de não encontrado no jsonwebtoken:

npm i jsonwebtoken

npm install jsonwebtoken --save


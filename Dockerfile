# Stage 1: The Builder - Yahan hum app ko build karenge
# Hum Node.js ka ek halka version (alpine) use kar rahe hain
FROM node:18-alpine AS builder

# Container ke andar ek '/app' folder banate hain aur usmein kaam karenge
WORKDIR /app

# Pehle sirf package files copy karenge taaki dependencies cache ho sakein
COPY package*.json ./
RUN npm install

# Ab baaki ka saara code copy karenge
COPY . .

# Next.js app ko production ke liye build karenge
RUN npm run build

# Stage 2: The Runner - Yahan hum build kiye hue app ko chalayenge
# Ek aur halka Node.js image use karenge final container ke liye
FROM node:18-alpine

WORKDIR /app

# Builder stage se sirf zaroori cheezein copy karenge
# Isse final image ka size bahut chhota ho jaata hai
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# App ko kaun se port par chalana hai, yeh batayenge
EXPOSE 3000

# Container start hone par yeh command chalegi
CMD ["npm", "start"]
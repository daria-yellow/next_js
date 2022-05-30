
FROM node:latest as dependencies
WORKDIR /next_js
COPY package*.json ./
RUN npm install 

FROM node:latest as builder
WORKDIR /next_js
COPY . .
COPY --from=dependencies /next_js/node_modules ./node_modules
RUN npm run build

FROM node:latest as runner
WORKDIR /next_js
ENV NODE_ENV production

COPY --from=builder /next_js/public ./public
COPY --from=builder /next_js/.next ./.next
COPY --from=builder /next_js/node_modules ./node_modules
COPY --from=builder /next_js/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
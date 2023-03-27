#base-image
FROM node:18-alpine as BUILD_IMAGE
RUN mkdir -p /app/
WORKDIR /app
COPY ./ ./
RUN npm install
RUN npm run build
RUN rm -rf node_modules
RUN npm install --production

FROM node:18-alpine 
ENV NODE_ENV production
RUN addgroup -g 1001 -S user_group
RUN adduser -S application -u 1001
RUN mkdir -p /app
WORKDIR /app

COPY --from=BUILD_IMAGE --chown=application:user_group /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=application:user_group /app/package.json ./
COPY --from=BUILD_IMAGE --chown=application:user_group /app/package-lock.json ./
COPY --from=BUILD_IMAGE --chown=application:user_group /app/public ./public
COPY --from=BUILD_IMAGE --chown=application:user_group /app/.next ./.next

EXPOSE 3000

CMD ["npm", "run", "start"]
# 使用 Node 官方轻量镜像
FROM node:20-alpine

WORKDIR /app

# 复制 package.json 以便 next start 依赖
COPY package*.json ./

# 安装生产依赖
RUN npm install --production

# 复制本地构建好的 Next.js
COPY .next ./.next
COPY public ./public
COPY next.config.ts ./

# 设置端口（Elastic Beanstalk 默认 8080）
ENV PORT=8080
EXPOSE 8080

# 启动 Next.js
CMD ["npx", "next", "start", "-p", "8080"]

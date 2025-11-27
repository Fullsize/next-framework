#!/bin/bash

echo "请选择构建模式："
echo "1) 正式环境构建（npm run build）"
echo "2) 开发环境构建（npm run build:dev）"
read -p "输入选项 (1 或 2): " choice

if [ "$choice" == "1" ]; then
  BUILD_CMD="npm run build"
elif [ "$choice" == "2" ]; then
  BUILD_CMD="npm run build:dev"
else
  echo "❌ 无效选项，退出"
  exit 1
fi

echo "🧹 删除旧的打包文件"
rm -rf app.zip dist 

echo "📦 执行构建命令: $BUILD_CMD"
$BUILD_CMD

if [ $? -ne 0 ]; then
  echo "❌ 构建失败，退出"
  exit 1
fi

echo "🗜️ 创建压缩包（排除 node_modules）"
zip -r app.zip dist public next.config.ts  Dockerfile  package.json package-lock.json

echo "✅ 构建完成并已打包为 app.zip"

echo "🧹 删除打包文件"
rm -rf dist 

@echo off
echo 🚀 Limpando pasta docs...
rmdir /S /Q docs
mkdir docs

echo 🔨 Gerando build de produção...
ng build --configuration production --output-path docs --base-href /ecommerce-githubpages/

echo 📄 Copiando index.html como 404.html...
copy docs\index.html docs\404.html

echo 📂 Adicionando todas as mudanças ao Git...
git add -A

echo 💾 Criando commit...
git commit -m "Deploy atualizado com fallback 404.html"

echo ⬆️ Enviando para GitHub...
git push origin main

echo 🌟 Deploy finalizado! Verifique no GitHub Pages.
pause

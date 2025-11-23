@echo off
echo 🚀 Limpando pasta docs...
rmdir /S /Q docs
mkdir docs

echo 🔨 Gerando build de produção...
ng build --configuration production --output-path docs --base-href /ecommerce-githubpages/

echo 📂 Adicionando arquivos ao Git...
git add -A

echo 💾 Criando commit...
git commit -m "Deploy atualizado"

echo ⬆️ Enviando para GitHub...
git push origin main

echo 🌟 Deploy finalizado! Verifique no GitHub Pages.
pause

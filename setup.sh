#!/bin/bash
set -e

echo "🚀 IN Process Safety - Setup Completo"
echo "======================================="
echo ""

# 1. npm install
echo "📦 Instalando dependências..."
npm install
echo "✅ Dependências instaladas!"
echo ""

# 2. GitHub
echo "📤 Configurando GitHub..."
if command -v gh &>/dev/null; then
  gh repo create inpsm-site --public --source=. --remote=origin --push
  echo "✅ Repositório criado e código enviado!"
else
  echo "⚠️  GitHub CLI (gh) não encontrado."
  echo "   Instale com: brew install gh"
  echo "   Depois rode: gh auth login"
  echo "   E então: gh repo create inpsm-site --public --source=. --remote=origin --push"
fi
echo ""

# 3. Vercel
echo "🌐 Deploy no Vercel..."
if command -v vercel &>/dev/null; then
  vercel --yes
  echo "✅ Deploy feito!"
else
  echo "⚠️  Vercel CLI não encontrado."
  echo "   Instale com: npm i -g vercel"
  echo "   Depois rode: vercel --yes"
  echo "   Ou importe direto em: https://vercel.com/new"
fi
echo ""

# 4. Cursor
echo "🖥️  Abrindo no Cursor..."
if command -v cursor &>/dev/null; then
  cursor .
  echo "✅ Projeto aberto no Cursor!"
elif [ -d "/Applications/Cursor.app" ]; then
  open -a "Cursor" .
  echo "✅ Projeto aberto no Cursor!"
else
  echo "⚠️  Cursor não encontrado."
  echo "   Baixe em: https://cursor.sh"
fi

echo ""
echo "🎉 Setup concluído!"

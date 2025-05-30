#!/bin/bash

# Springboard Project Setup Verification Script
# Run this after Trae completes the setup to verify everything is working

echo "🚀 Springboard Setup Verification"
echo "================================="

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ Environment file found"
else
    echo "❌ .env.local file missing"
    exit 1
fi

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "❌ node_modules directory missing"
    exit 1
fi

# Check if key files exist
files=(
    "package.json"
    "next.config.mjs"
    "tailwind.config.ts"
    "app/layout.tsx"
    "app/page.tsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check environment variables
echo ""
echo "🔧 Environment Variables Check:"
if grep -q "AIRTABLE_API_KEY" .env.local; then
    echo "✅ AIRTABLE_API_KEY configured"
else
    echo "❌ AIRTABLE_API_KEY missing"
fi

if grep -q "AIRTABLE_BASE_ID" .env.local; then
    echo "✅ AIRTABLE_BASE_ID configured"
else
    echo "❌ AIRTABLE_BASE_ID missing"
fi

echo ""
echo "📦 Package Information:"
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

echo ""
echo "🎯 Next Steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Test the submit idea form to verify Airtable integration"
echo ""
echo "Setup verification complete! 🎉"

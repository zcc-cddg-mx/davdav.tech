#!/usr/bin/env bash
set -e
source ~/.nvm/nvm.sh
nvm use 24

# Kill any process already holding port 3000
PORT=3000
PID=$(lsof -ti:$PORT 2>/dev/null || true)
if [ -n "$PID" ]; then
  echo "Killing process on port $PORT (PID $PID)..."
  kill "$PID" 2>/dev/null || true
  sleep 1
fi

npm run dev

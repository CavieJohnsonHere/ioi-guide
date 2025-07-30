#!/bin/bash

# Folder containing markdown files (current directory)
folder="."
# Output JSON file (in current directory)
output="./hashes.json"

# Start JSON array
echo "[" > "$output"

first=1
for file in "$folder"/*.md; do
  [ -e "$file" ] || continue  # skip if no .md files found
  hash=$(sha256sum "$file" | awk '{print $1}')
  filename=$(basename "$file")
  
  if [ $first -eq 1 ]; then
    first=0
  else
    echo "," >> "$output"
  fi
  
  printf '  {"FileName": "%s", "Hash": "%s"}' "$filename" "$hash" >> "$output"
done

echo "" >> "$output"
echo "]" >> "$output"

echo "Hash JSON written to $output"

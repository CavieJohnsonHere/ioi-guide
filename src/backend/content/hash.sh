#!/bin/bash
folder="."
output="./hashes.json"

# Start JSON array
echo "[" > "$output"

first=1
for file in "$folder"/*.md; do
  [ -e "$file" ] || continue
  hash=$(sha256sum "$file" | awk '{print $1}')
  filename=$(basename "$file")

  if [ "$first" = 1 ]; then
    first=0
  else
    echo "," >> "$output"
  fi

  printf '  {"FileName": "%s", "Hash": "%s"}' "$filename" "$hash" >> "$output"
done

# Append the two mock entries
echo "," >> "$output"
echo '  {"FileName": "__test_content.md", "Hash": "0000000000000000000000000000000000000000000000000000000000000000"}' >> "$output"
echo "," >> "$output"
echo '  {"FileName": "__mock_missing.md", "Hash": "1111111111111111111111111111111111111111111111111111111111111111"}' >> "$output"

echo "" >> "$output"
echo "]" >> "$output"

echo "Hash JSON (with mocks) written to $output"
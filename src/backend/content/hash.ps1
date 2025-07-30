# Relative folder containing markdown files (current directory)
$folderPath = "."
# Output JSON file path (in current directory)
$outputFile = ".\hashes.json"

# Get all markdown files in the folder
$files = Get-ChildItem -Path $folderPath -Filter "*.md"

# Create array of objects with filename and hash
$hashObjects = foreach ($file in $files) {
    $hash = Get-FileHash -Path $file.FullName -Algorithm SHA256
    [PSCustomObject]@{
        FileName = $file.Name
        Hash     = $hash.Hash
    }
}

# Convert the array to JSON and save to file
$hashObjects | ConvertTo-Json -Depth 2 | Set-Content -Path $outputFile

Write-Output "Hash JSON written to $outputFile"

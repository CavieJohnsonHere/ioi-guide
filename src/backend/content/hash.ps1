# Folder containing markdown files (current directory)
$folderPath = "."
$outputFile = ".\hashes.json"

# Get hash objects for real files
$hashObjects = Get-ChildItem -Path $folderPath -Filter "*.md" | ForEach-Object {
    [PSCustomObject]@{
        FileName = $_.Name
        Hash     = (Get-FileHash -Path $_.FullName -Algorithm SHA256).Hash
    }
}

# Add mock entries
$hashObjects += [PSCustomObject]@{
    FileName = "__test_content.md"
    Hash     = "0000000000000000000000000000000000000000000000000000000000000000"
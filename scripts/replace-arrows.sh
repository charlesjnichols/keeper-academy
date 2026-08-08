#!/usr/bin/env bash
set -euo pipefail

dir="${1:-src/content/docs}"

echo "Working in $dir"

while IFS= read -r file; do
  [[ -e "$file" ]] || continue
  sed -i \
    -e "/^'''mermaid\$/,/^'''\$/s/^'''\$/\\\`\\\`\\\`/" \
    -e "/^\`\`\`mermaid\$/,/^'''\$/s/^'''\$/\\\`\\\`\\\`/" \
    -e "s/'''mermaid/\`\`\`mermaid/" \
    -e 's/\$\\rightarrow\$/->/g' \
    -e 's/\\text{\([^}]*\)}/\1/g' \
    -e 's/\\times/x/g' \
    -e 's/\$//g' \
    -e 's/—/, /g' \
    "$file"
  done < <(find "$dir" -type f \( -name '*.md' -o -name '*.mdx' \))

echo "Done."
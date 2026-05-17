import re
import os

# Set the title number to extract.
title_number = "14"

# Change these paths as needed.
input_path = r"C:\Servers\Web\Docs\docs\docs\penal.md"
output_dir = rf"C:\Servers\Web\Docs\docs\docs\PENALCODE\Title {title_number}"
os.makedirs(output_dir, exist_ok=True)

with open(input_path, "r", encoding="utf-8") as f:
    content = f.read()

# Updated regex pattern.
# Matches from headers like:
#   "#### **(14)01**. Section Title"
# and captures the two-digit section number and the rest until the next header.
section_pattern = (
    r'^####\s+\*\*\(' + title_number + r'(\d{2})\)\.?\s+(.*?)'
    r'(?=^####\s+\*\*\(' + title_number + r'\d{2}\)|^###|\Z)'
)

sections = re.findall(section_pattern, content, re.MULTILINE | re.DOTALL)

if not sections:
    print("No sections found for Title", title_number)
else:
    for sec in sections:
        sec_number, header_and_body = sec[0], sec[1]
        # Split the section content into lines.
        header_line, *rest = header_and_body.splitlines()
        # Convert the header line from "#### **(14)XX**. Section Title" into your style:
        # "# [14.XX]  Section Title"
        new_header = re.sub(
            r'^(.*?)',
            rf'# [{title_number}.{sec_number}]  \1',
            header_line
        )
        new_section = "\n".join([new_header] + rest)
        
        # Convert section number to integer for naming and sidebar positioning.
        num_int = int(sec_number)
        filename = f"{num_int}.md"  # e.g. "14.md", "15.md", etc.
        file_path = os.path.join(output_dir, filename)
        
        frontmatter = f"""---
sidebar_position: {num_int}
---"""
        
        with open(file_path, "w", encoding="utf-8") as out_f:
            out_f.write(frontmatter + "\n" + new_section + "\n")
        print(f"Created {filename}")
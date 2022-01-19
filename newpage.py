import sys
import os

dest = './src/pages/'

name = sys.argv[1]

if not os.path.exists(dest + name):
    os.mkdir(dest + name)
    open(dest + name + '/index.js', 'x')

    original = dest + 'pageTemplate.js'
    target = dest + name + '/index.js'

    with open(original, 'rt') as fin:
        with open(target, 'wt') as fout:
            for line in fin:
                fout.write(line.replace('PageTemplate', 'Page'))

    print(f"Page {name} successfully created.")
else:
     print(f"Page {name} already exists.")

#!/usr/bin/node
/*
    Print a square with the character #

    The size of the square must be the first argument
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: node ./1-print_square.js <size>\n");
    process.stderr.write("Example: node ./1-print_square.js 8\n");
    process.exit(1)
}

let size = Number.parseInt(process.argv[2], 10)

if(!size)
{
    process.stderr.write("Usage: ./1-print_square.js <integer>\n");
    process.exit(1);
}

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}

# Tailwind mandates that all class names are typed out in full without generation (for the sake of tree shaking) so this script generates them for me

NUMBER_OF_SIZES = 9
INCREMENT = 4
START = 0
PREFIX = "md:ml-"

output = []

for i in range(0, NUMBER_OF_SIZES):
    output.append(PREFIX + str(START + (i * INCREMENT)))

print(output)
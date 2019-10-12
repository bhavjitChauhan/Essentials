import csv

output_file = open('colors.js', 'w')
output_file.write('var colors = {\n')

with open('colors.csv') as csv_file:
    read_csv = csv.reader(csv_file, delimiter=',')
    for row in read_csv:
        output_file.write('\t\'%s\': color(%s, %s, %s),\n' % tuple(row))

output_file.write('};')
output_file.close()

count = 1
table = {}

# with open('data.txt', 'r') as f:
#     rows  = f.readlines()
#     for row in rows:
#         #print(row)
#         if count == 1:
#             statename = row[:-1]

#         elif count == 2: # is names 
#             labels = row.split()
        
#         elif count == 3:
#             values = row.split()
#             table[statename] = [ { "label": labels[i], "value": values[i] } for i in range(3)]

#         count += 1
#         if count ==4:
#             count = 1

# print(table)

final_data = {}

import csv
with open('state_month_depression.csv', 'r') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        month = row[1]
        value = row[2]
        state = row[3]
        if month in final_data.keys():
            temp  = final_data[month]
            temp[state] = value
            final_data[month] = temp
        else:
            temp = {}
            temp[state] = value
            final_data[month] = temp


print (final_data)

        # if count == 1:
        #     statename = row[:-1]

        # elif count == 2: # is names
        #     labels = row.split()

        # elif count == 3:
        #     values = row.split()
        #     table[statename] = [ { "label": labels[i], "value": values[i] } for i in range(3)]

        # count += 1
        # if count ==4:
        #     count = 1





    
    


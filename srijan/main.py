F = 0
S = 1
Se = []
Se.append(F)
Se.append(S)
for i in range(3,9):
    T = F+S
    Se.append(T)
    F=S
    S=T
    
print(Se)
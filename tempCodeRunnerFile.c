#include <stdio.h>

int main() {
int i, j, sum =1, row = 6;

for (i = 1; i <= row ; i++) {
    


if( i == 1){
   
    for (j = 1; j <= row  ; j++) {

        printf(" ");
    }
 printf("1\n");
}
else{
    for (j = 1; j <= row - i +1 ; j++) {

printf(" ");

}
    
for (j = 1; j <= i-1; j++) {
printf("%d", j);

}
for (j = i-1; j >= 1; j -- ){
printf("%d", j);
}

printf("\n");
}
}
return 0;
}
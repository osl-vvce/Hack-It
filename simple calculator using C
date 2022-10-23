#include<stdio.h>
#include<conio.h>
int main()
{
   float num1, num2, res;
   int choice;
   do
   {
      printf("1. Addition\n");
      printf("2. Subtraction\n");
      printf("3. Multiplication\n");
      printf("4. Division\n");
      printf("5. Exit\n\n");
      printf("Enter Your Choice(1-5): ");
      scanf("%d", &choice);
      if(choice>=1 && choice<=4)
      {
         printf("\nEnter any two Numbers: ");
         scanf("%f %f", &num1, &num2);
      }
      switch(choice)
      {
         case 1:
            res = num1+num2;
            printf("\nResult = %0.2f", res);
            break;
         case 2:
            res = num1-num2;
            printf("\nResult = %0.2f", res);
            break;
         case 3:
            res = num1*num2;
            printf("\nResult = %0.2f", res);
            break;
         case 4:
            res = num1/num2;
            printf("\nResult = %0.2f", res);
            break;
         case 5:
            return 0;
         default:
            printf("\nWrong Choice!");
            break;
      }
      printf("\n------------------------\n");
   }while(choice!=5);
   getch();
   return 0;
}

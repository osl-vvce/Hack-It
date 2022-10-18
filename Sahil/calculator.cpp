// An overly complex application for simple calculator.

#include <iostream>

using namespace std;

class Calculator {
    int a, b;

public:
    void Calculator(int a, int b)   {
        this->a = a;
        this->b = b;
    }

    int add()   {
        return this->a + this->b;
    }

    int sub()   {
        return this->a - this->b;
    }

    int mul()   {
        return this->a * this->b;
    }

    int div()   {
        return this->a / this->b;
    }

    int mod()   {
        return this->a % this->b;
    }
}

int main()  {
    int choice, a, b;
    while (choice)  {
        cout << "1. Addition" << endl;
        cout << "2. Subtraction" << endl;
        cout << "3. Multiplication" << endl;
        cout << "4. Division" << endl;
        cout << "5. Modulus" << endl;
        cout << "0. Exit" << endl;
        cout << endl << "Enter your choice: ";

        cout << "Enter the numbers a & b" << endl;
        cin >> a >> b;
        calculator = Calculator(a, b);

        switch(choice)  {
            case 1:
                cout << calculator.add();
                break;

            case 2:
                cout << calculator.sub();
                break;

            case 3:
                cout << calculator.mul();
                break;

            case 4:
                cout << calculator.div();
                break;

            case 5:
                cout << calculator.mod();
                break;

            case 0:
                cout << "Thank you for using the calculator.";
                exit(0);

            default:
                cout << "Please enter correct option. Try again!" << endl << endl;
        }
    }
    return 0;
}
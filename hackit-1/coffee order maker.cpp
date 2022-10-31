#include<iostream>

using namespace std;

class AddOn{
    public :
        int milk, cream, latte;
};

class Coffee : public AddOn{};

class Espresso : public Coffee {
    public :
    	Espresso(){
    	milk = 60;
    	cream = 75;
    	latte = 100;
    	}
};

class Cappucino : public Coffee {
    public :
    	Cappucino (){
    	milk = 80;
    	cream = 90;
    	latte = 125;
    }
};

class Latte : public Coffee {
    public :
    	Latte(){
    	milk = 100;
    	cream = 125;
    	latte = 150;
		}
};

class CreateCoffee{
	public :
		int amount = 0;
		Coffee *user;
		CreateCoffee(char ch1){
			if (ch1=='1')
				user = new Espresso;
			else if (ch1=='2')
				user = new Cappucino ;
			else if (ch1=='3')
				user = new Latte;
		}
		int getBill(char ch2){
			    if (ch2 == '1')
				    amount = user->milk;
			    else if (ch2 == '2')
				    amount = user->cream;
			    else if (ch2 == '3')
				    amount = user->latte;		
				return amount;
			}
};

bool choice(char ch){
    if (ch > '0' && ch < '4')
        return true;
    cout<<endl<<"--------enter right choice !---------------- ";
    return false;
}

int main(){
    cout<<"--------WELCOME-----------";
    int totalBill = 0;
    while(1){
        cout<<endl<<"enter coffee type ";
        COFFEE : cout<<endl<<"\t1)Espresso \n\t2)Cappuccino \n\t3)Latte  ";
        cout<<endl<<"choice : ";
        char ch1,ch2;
        cin>>ch1;
        if(choice(ch1)){
            ADD : cout<<"\nenter coffee add-on choice : ";
                cout<<"\n \t1)Milk \n\t2)Cream \n\t3)Latte";
                cout<<endl<<"choice : ";
                cin>>ch2;
                if (choice(ch2)){
   		            CreateCoffee customer(ch1);
                    QUANTITY : cout<<endl<<"Enter quantity of same combination : ";
                    int quantity;
                    cin>>quantity;
                    if (quantity > 0){
   		                int currBill = customer.getBill(ch2) * quantity;
   		                CHOICE : totalBill += currBill;
                        cout<<endl<<"Current Generated bill : "<< totalBill;
                        cout<<endl<<"1)Add to Current Bill \n2)Create new Bill \n 3)Exit Program "<<endl<<"Enter choice : ";
                        char ch3;
                        cin>>ch3;
                        if(choice(ch3)){
                            if (ch3 == '1')
                                continue;
                            else if (ch3 == '2'){
                                cout<<endl<<"Total Bill generated is : "<<totalBill;
                                totalBill = 0;
                                }
                            else
                            	break;
                        }
                        else
                        	goto CHOICE;
   		            }
   		            else {
   		                cout<<endl<<"-------Enter Right Quantity----- !";
   		                goto QUANTITY;
   		            }
            }
   		    else
   		        goto ADD;
        }
        else
            goto COFFEE;
    }
    cout<<endl<<"Thank you for using the Application !";
    return 0;
}



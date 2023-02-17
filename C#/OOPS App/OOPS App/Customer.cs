using System;
using Assembly1;

namespace Assembly2
{
    public class Customer : User
    {
        public override void UserFunction()
        {
            Console.WriteLine("Customer Panel");
        }

        internal void Displayproducts()
        {
            throw new NotImplementedException();
        }
    }

    class MainClass
    {
        static void Main(string[] args)
        {
            Customer obj = new Customer();
     


        }
    }
}


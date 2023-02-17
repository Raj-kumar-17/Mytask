namespace Assembly1
{


    public interface Product
    {
        public static List<string> stock = new List<string>();
        public static List<string> products = new List<string>();

        public void Displayproducts()
        {
            Console.WriteLine("Products:");
            foreach (var data in products)
            {
                Console.WriteLine(data);
            }
        }
    }


    interface AddProduct : Product
    {
        internal void Addproduct(string product)
        {
            products.Add(product);
        }
       internal void Addproduct(string productType, string product)
        {
            stock.Add(product);
        }

    }

    public class Admin : User,AddProduct
    {
        public override void UserFunction()
        {
            Console.WriteLine("Admin Panel");
        }

    }
    public abstract class User:Product
    {
        private string name = "";
        private string password = "";
        private string userType = "";

        public void SetUser(string name, string password, string userType)
        {
            this.name = name;
            this.password = password;
            this.userType = userType;
        }

        public void GetUser()
        {
            Console.WriteLine("You are Logged in as " + userType + "(" + name + ")");
        }

        public abstract void UserFunction();

    }




}





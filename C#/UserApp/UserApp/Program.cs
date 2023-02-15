public class User
{
    private string username;
    private string password;
    private string game;
    private string slot;
    Stack<string> userSession = new Stack<string>();
    public void inputUser()

    {
        Console.WriteLine("Enter your Username");
        username = Console.ReadLine();
        Console.WriteLine("Enter your Password");
        password = Console.ReadLine();
        initUserSession();

    }
    public void nextUser()
    {
        if (userSession.Count == 0)
        {
            inputUser();
        }
        else
        {
            Console.WriteLine("An User is already Logged in!");
        }
    }

    public void initUserSession()
    {
        userSession.Push(username);
        Console.WriteLine("Select any one of the Following Game\n Cricket \nBadmitton");
        game =Console.ReadLine();
        Console.WriteLine("Enter the Time slot");
        slot= Console.ReadLine();

    }

    public void logoutUser()
    {

    }
    

}


public class MainClass{
    static void Main(string[] args)
    {
        User obj = new User();
        int input;
        do
        {
            Console.WriteLine("Welcome User!");
            Console.WriteLine("1.Login");
            Console.WriteLine("2.Logout");
            Console.WriteLine("3.<-Back");
            Console.WriteLine("4.Exit Console App");
            input = Convert.ToInt32(Console.ReadLine());
            switch (input)
            {
                case 1:
                    obj.inputUser();
                    break;



            }

        } while (input != 4);
    }
}
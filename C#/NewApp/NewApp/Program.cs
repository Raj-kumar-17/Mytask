

using System.Xml.Linq;

public class PNRFunction
{

    public void PnrFunction()
    {
        string name;
        DateTime dob;
        string t;
        DateTime journeyDate;
        string pnrstatus = "";
        int seatno;
        string seattype = "";

        Console.WriteLine("Enter your Name:");
        name = Console.ReadLine();
        Console.WriteLine("Enter your DOB:");
        dob = DateTime.Parse(Console.ReadLine());
        Console.WriteLine("Enter your Journey date:");
        journeyDate = DateTime.Parse(Console.ReadLine());
        Console.WriteLine("Enter your Seat no:");
        seatno = Convert.ToInt32((Console.ReadLine()));

        if (journeyDate.Day >= 1 && journeyDate.Day <= 10)
        {
            pnrstatus = "Confirmed";
        }
        if (journeyDate.Day >= 11 && journeyDate.Day <= 20)
        {
            pnrstatus = "Waiting List";
        }
        if (journeyDate.Day >= 21 && journeyDate.Day <= 31)
        {
            pnrstatus = "RAC";
        }

        if (seatno > 0 && seatno < 73)
            if (seatno % 8 == 1 || seatno % 8 == 4)
                seattype = "Lower Berth";

            else if (seatno % 8 == 2 ||
                    seatno % 8 == 5)
                seattype = "middle berth";

            else if (seatno % 8 == 3 ||
                    seatno % 8 == 6)
                seattype = "upper Berth";

            else if (seatno % 8 == 7)
                seattype = "side lower berth";

            else
                seattype = " side upper berth";

        else
            seattype = "invalid";

        Console.WriteLine("******************************************************************");
        Console.WriteLine("Name:" + name);
        Console.WriteLine("DOB:" + dob);
        Console.WriteLine("Journey Date:" + journeyDate);
        Console.WriteLine("PNR Status:" + pnrstatus);
        Console.WriteLine("Seat Type:" + seattype);
        Console.WriteLine("******************************************************************");

    }

  public string CodeFunction(int n1,int n2)
    {
        int s1 = 0, s2 = 0;
        for (int i = 1; i <= n1/2; i++)
        {
            if (n1 % i == 0)
                s1 +=i;
        }
 
        for (int i = 1; i <= n2/2; i++)
        {
            if (n2 % i == 0)
                s2 += i;
        }
        if (n1 == s2 && n2 == s1)
            return "valid";
        else
            return "notvalid";
    }

    public void CodeFunction1(int n1, int n2)
    {
        int sum = 0;
        string ans = "";
        for(int i = n1; i <= n2; i++)
        {
            for (int j = 1; j <= i/2; j++)
            {
                if (i % j == 0)
                    sum += j;
            }
            ans = CodeFunction(i, sum);
            if(ans=="valid")
                Console.WriteLine(i+","+sum);

            sum = 0;


        }

    }

}







class MainClass
{
    static void Main(string[] args)
    {
        PNRFunction obj = new PNRFunction();
        int input;
        int range1, range2;
        do
        {
            Console.WriteLine("1.Check PNR status");
            Console.WriteLine("2.Function 1");
            Console.WriteLine("3.Function 2");
            Console.WriteLine("4.Exit");
            input = Convert.ToInt32(Console.ReadLine());
            switch (input)
            {
                case 1:
                    obj.PnrFunction();
                    break;
                case 2:
                    range1= Convert.ToInt32((Console.ReadLine()));
                    range2= Convert.ToInt32((Console.ReadLine()));
                    Console.WriteLine(obj.CodeFunction(range1, range2)); 
                    break;
                case 3:
                    range1 = Convert.ToInt32((Console.ReadLine()));
                    range2 = Convert.ToInt32((Console.ReadLine()));
                    obj.CodeFunction1(range1, range2);
                    break;

                case 4:
                    break;

            }
        } while (input != 4);
    }
}



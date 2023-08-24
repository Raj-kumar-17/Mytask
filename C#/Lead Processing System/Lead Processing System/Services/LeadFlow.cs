using Lead_Processing_System.Models;

namespace Lead_Processing_System.Services
{
    public class LeadFlow
    {


        public LeadModel[] GetLeads()
        {
            LeadModel[] leads =
             {
                new LeadModel {
                FirstName = "Raj",
                LastName = "Kumar",
                Email = "test@test.com",
                PhoneNo = "7358227115",
                Source = "LinkedIn",
                DateTime = new DateTime(2023, 1, 12)
            },
                new LeadModel
                {
                FirstName = "Mathew",
                LastName = "Shelby",
                Email = "test@test2.com",
                PhoneNo = "9058227015",
                Source = "Facebook",
                DateTime = new DateTime(2023, 1, 10)
                },
                new LeadModel
                {
                FirstName = "Robert",
                LastName = "Pattinson",
                Email = "test@test3.com",
                PhoneNo = "9358227015",
                Source = "Instgram",
                DateTime = new DateTime(2023, 1, 20)
                }

            };
            return leads;
        }

    }

}

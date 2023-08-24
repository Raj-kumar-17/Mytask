using Lead_Processing_System.Services;
using Lead_Processing_System.Repository;
using Lead_Processing_System.Models;

public class LeadProcessor
{
    MongoCollection mongoCollections = new MongoCollection();

    public LeadProcessor()
    {

        mongoCollections.leadCollections = new Dictionary<string, List<LeadModel>>();
    }
    public void ProcessLead(LeadModel[] lead)
    {

        for (var i = 0; i < lead.Length; i++)
        {
            // Validate lead fields
            if (string.IsNullOrEmpty(lead[i].FirstName) || string.IsNullOrEmpty(lead[i].LastName) ||
                string.IsNullOrEmpty(lead[i].Email) || string.IsNullOrEmpty(lead[i].Source) ||
                lead[i].DateTime == default || (DateTime.Now - lead[i].DateTime).TotalDays < 90)
            {
                Console.WriteLine("Lead data is invalid.");
                return;
            }
            // Push lead to the mongocollection
            string collectionName = lead[i].Source.ToLower();
            if (!mongoCollections.leadCollections.ContainsKey(collectionName))
            {
                mongoCollections.leadCollections.Add(collectionName, new List<LeadModel>());
            }
            mongoCollections.leadCollections[collectionName].Add(lead[i]);

            Console.WriteLine("Lead processed and stored.");
        }
    }

    public static void Main(string[] args)
    {

        LeadProcessor leadProcessor = new LeadProcessor();
        LeadFlow leadFlow = new LeadFlow();
        Console.WriteLine("Consuming Leads from LeadFlow...");
        Console.WriteLine("Fetch Successful..");
        Console.WriteLine("Proccessing Leads...");
        leadProcessor.ProcessLead(leadFlow.GetLeads());
    }
}







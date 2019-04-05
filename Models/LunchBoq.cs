
namespace LunchBoqs.Models
{
  public class LunchBoq
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Entree { get; set; }
    public string Side1 { get; set; }
    public string Side2 { get; set; }


    //Navigation support
    public int RestaurantId { get; set; }
    public Restaurant Restaurant { get; set; }

  }
}
using System.Collections.Generic;

namespace LunchBoqs.Models
{
  public class Restaurant
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string ImgUrl { get; set; }
    public string Address { get; set; }
    public string PhoneNumber { get; set; }
    public string EmailAddress { get; set; }
    public bool IsActive { get; set; } = true;


    //Navigation support

    public List<LunchBoq> LunchBoqs { get; set; } = new List<LunchBoq>();
  }
}
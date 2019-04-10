using System.Collections.Generic;

namespace LunchBoqs.Models
{
  public class UserSelection
  {
    public int Id { get; set; }

    public string DayOfWeek { get; set; }
    //Navigation support
    public int LunchBoqsId { get; set; }
    public LunchBoq LunchBoqs { get; set; }

  }
}
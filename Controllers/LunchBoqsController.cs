using Microsoft.AspNetCore.Mvc;
using lunchboqs;
using System.Collections.Generic;
using LunchBoqs.Models;
using System.Linq;

namespace LunchBoqs.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class LunchBoqsController : ControllerBase
  {
    private DatabaseContext db;

    public LunchBoqsController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet]
    public ActionResult<IList<LunchBoq>> GetAllLunchBoqs()
    {
      var results = db
      .LunchBoqs

      .OrderBy(o => o.Week)
      .Select(s => new LunchBoq
      {
        Week = s.Week,
        Name = s.Name,
        Entree = s.Entree,
        Side1 = s.Side1,
        Side2 = s.Side2,
        Id = s.Id
      })
      .ToList();
      return results;
    }
  }
}






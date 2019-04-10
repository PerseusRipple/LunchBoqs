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

    [HttpGet("{restaurantId}")]
    public ActionResult<IList<LunchBoq>> GetAllLunchBoqsForRestaurant(int restaurantId)
    {
      // query the data for LunchBoqs. Where (w => w.restaurantId == restaurantId)
      var results = db
      .LunchBoqs
      .Where(w => w.RestaurantId == restaurantId)
      .OrderBy(o => o.Week);

      return results.ToList();
    }

    //return lunchboq names
    [HttpGet("name/{name}")]
    public ActionResult<IList<LunchBoq>> GetOneLunchBoq(string name)
    {
      var db = new DatabaseContext();
      var lunchboq = db.LunchBoqs.Where(f => f.Name.Contains(name));
      return lunchboq.ToList();
    }

    [HttpPost("{restaurantId}")]
    public ActionResult<LunchBoq> CreateLunchBoq([FromRoute]int restaurantId, [FromBody] LunchBoq lunchboqToAdd)
    {
      var db = new DatabaseContext();
      lunchboqToAdd.RestaurantId = restaurantId;
      db.LunchBoqs.Add(lunchboqToAdd);
      db.SaveChanges();
      return lunchboqToAdd;
    }

    //Delete
    [HttpDelete("{id}")]
    public ActionResult DeleteLunchBoq(int id)
    {
      var restaurant = db.LunchBoqs.FirstOrDefault(f => f.Id == id);

      db.SaveChanges();
      return Ok();
    }
  }

}









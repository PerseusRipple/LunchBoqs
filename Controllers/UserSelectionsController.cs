using System;
using System.Collections.Generic;
using System.Linq;
using lunchboqs;
using LunchBoqs.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LunchBoqs.Controllers
{

  [Route("api/[controller]")]
  [ApiController]

  public class UserSelectionsController : ControllerBase
  {
    private DatabaseContext db;
    public UserSelectionsController()
    {

      this.db = new DatabaseContext();

    }


    [HttpGet]
    public ActionResult<IList<UserSelection>> GetAllUserSelectionForRestaurant()
    {

      var results = db.UserSelections
        .Include(i => i.LunchBoqs)
        .ThenInclude(i => i.Restaurant);
      return results.ToList();
    }

    //add or update LunchBoq and DoW to dataBase
    [HttpPost]
    public ActionResult<UserSelection> CreateOrUpdateUserSelection([FromBody] UserSelection userselectionToAdd)
    {
      var db = new DatabaseContext();
      // check if the day exists  (if any for userselectionToAdd.dayOfWeek == exists)
      if (db.UserSelections.Any(a => a.DayOfWeek == userselectionToAdd.DayOfWeek))
      {
        // we already have that day
        var userselections = db.UserSelections.FirstOrDefault(f => f.DayOfWeek == userselectionToAdd.DayOfWeek);
        //   // update with the new lunchBoqsId
        userselections.LunchBoqsId = userselections.LunchBoqsId;
        db.SaveChanges();
        return userselections;
      }
      else
      {
        // wee need to create that day
        db.UserSelections.Add(userselectionToAdd);
        db.SaveChanges();
        return userselectionToAdd;
      }
    }

    [HttpDelete]
    public ActionResult<IList<UserSelection>> DeleteUserSelection([FromBody] UserSelection userselectionToDelete)
    {
      var userselections = db.UserSelections.Where(w => w.DayOfWeek == userselectionToDelete.DayOfWeek);
      db.UserSelections.RemoveRange(userselections);
      db.SaveChanges();
      return Ok();

    }



  }
}
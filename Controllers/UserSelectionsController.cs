using System.Collections.Generic;
using System.Linq;
using lunchboqs;
using LunchBoqs.Models;
using Microsoft.AspNetCore.Mvc;

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

      var results = db.UserSelections;
      return results.ToList();
    }

    //add or update LunchBoq and DoW to dataBase
    [HttpPost]
    public ActionResult<UserSelection> CreateOrUpdateUserSelection([FromBody] UserSelection userselectionToAdd)
    {
      var db = new DatabaseContext();
      // check if the day exists  (if any for userselectionToAdd.dayOfWeek == exists)
      // update with the new lunchBoqsId
      // else it doesnt exist yet
      // add it (already done)

      db.UserSelections.Add(userselectionToAdd);
      db.SaveChanges();
      return userselectionToAdd;
    }


  }
}
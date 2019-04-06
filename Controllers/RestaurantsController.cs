
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using LunchBoqs.Models;
using lunchboqs;
using System.Collections.Generic;

namespace Lunchboqs.Controllers
{


  [Route("api/[controller]")]
  [ApiController]
  public class RestaurantsController : ControllerBase
  {
    private DatabaseContext db;
    public RestaurantsController() => this.db = new DatabaseContext();
  }


  // public ActionResult<IList<Restaurant>> GetOneRestaurant(string name)
  // {

  // }





}
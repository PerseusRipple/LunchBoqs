
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

    //return all restaurants
    [HttpGet]
    public ActionResult<IList<Restaurant>> GetAllRestaurants()
    {
      var results = db
      .Restaurants
      .Where(w => w.IsActive)
      .OrderBy(o => o.Name)
      .Select(s => new Restaurant
      {
        Name = s.Name,
        ImgUrl = s.ImgUrl,
        Address = s.Address,
        PhoneNumber = s.PhoneNumber,
        EmailAddress = s.EmailAddress,
        Id = s.Id
      })
      .ToList();
      return results;
    }
    //return restaurant names
    [HttpGet("name/{name}")]
    public ActionResult<IList<Restaurant>> GetOneRestaurant(string name)
    {
      var db = new DatabaseContext();
      var restaurant = db.Restaurants.Where(f => f.Name.Contains(name));
      return restaurant.ToList();
    }
    //return restaurant direction
    [HttpGet("address/{address}")]

    public ActionResult<IList<Restaurant>> GetRestaurantAddress(string address)
    {
      var db = new DatabaseContext();
      var restaurant = db.Restaurants.Where(f => f.Address.ToLower().Contains(address.ToLower()));
      return restaurant.ToList();
    }

    [HttpGet("{id}")]

    public ActionResult<Restaurant> GetOneRestaurant(int id)
    {
      //go to the database
      var db = new DatabaseContext();
      //query the database for the animal with the id of id
      var restaurant = db.Restaurants.FirstOrDefault(f => f.Id == id);
      //return that animal
      return restaurant;
    }

    //add restaurant to dataBase
    [HttpPost]
    public ActionResult<Restaurant> CreateRestaurant([FromBody] Restaurant restaurantToAdd)
    {
      var db = new DatabaseContext();
      db.Restaurants.Add(restaurantToAdd);
      db.SaveChanges();
      return restaurantToAdd;
    }

    //PUT
    [HttpPut("{id}")]
    public ActionResult<Restaurant> UpdateRestaurant(int id, [FromBody] Restaurant newRestaurantData)
    {
      var restaurant = db.Restaurants.FirstOrDefault(f => f.Id == id);
      restaurant.Name = newRestaurantData.Name;
      restaurant.ImgUrl = newRestaurantData.ImgUrl;
      restaurant.Address = newRestaurantData.Address;
      restaurant.PhoneNumber = newRestaurantData.PhoneNumber;
      restaurant.EmailAddress = newRestaurantData.EmailAddress;
      db.SaveChanges();
      return restaurant;
    }

    //Delete
    [HttpDelete("{id}")]
    public ActionResult DeleteRestaurant(int id)
    {
      var restaurant = db.Restaurants.FirstOrDefault(f => f.Id == id);
      restaurant.IsActive = false;
      db.SaveChanges();
      return Ok();
    }
  }
}



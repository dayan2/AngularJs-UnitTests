using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UnitTesting_AngularJs.Models;

namespace UnitTesting_AngularJs.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var list = GetCatalogList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Page()
        {
            return View();
        }

        private List<Course> GetCatalogList()
        {
            List<Course> list = new List<Course>
            {
                new Course{id = 1, credits = 200, instructorName = "John Doe", name = "Neranjan Mendis"},
                new Course{id = 2, credits = 600, instructorName = "John Doe", name = "Dayan Mendis"},
                new Course{id = 3, credits = 900, instructorName = "John Doe", name = "Ewerdney Mendis"},
                new Course{id = 4, credits = 100, instructorName = "John Doe", name = "Dan Mendis"}
            };
            return list;
        }

    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UnitTesting_AngularJs.Models
{
    public class Course
    {
        public int id { get; set; }
        public string name { get; set; }
        public string instructorName { get; set; }
        public int credits { get; set; }
    }
}
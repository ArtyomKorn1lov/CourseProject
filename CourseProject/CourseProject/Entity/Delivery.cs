using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Entity
{
    public class Delivery
    {
        public List<Provider> Providers { get; set; }
        public List<Detail> Details { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int Price { get; set; }    
    }
}

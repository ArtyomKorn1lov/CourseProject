using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public interface IDetailService
    {
        List<Detail> GetAll();
        Detail GetById(int id);
        bool Create(Detail detail);
        //void Update(Detail detail);
        bool Delete(int id);
    }
}

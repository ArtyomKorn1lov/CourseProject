using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public interface IDetailRepository
    {
        List<Detail> GetAll();
        Detail GetById(int id);
        void Create(Detail detail);
        //void Update(Detail detail);
        void Delete(int id);
    }
}

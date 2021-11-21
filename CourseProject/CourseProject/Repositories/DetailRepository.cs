using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public class DetailRepository : IDetailRepository
    {
        private AutoDbContext _autoDbContext;

        public DetailRepository(AutoDbContext context)
        {
            _autoDbContext = context;
        }

        public void Create(Detail detail)
        {
            _autoDbContext.Set<Detail>().Add(detail);
        }

        public void Delete(int id)
        {
            Detail detail = _autoDbContext.Set<Detail>().FirstOrDefault(d => d.Id == id);
            if (detail != null)
                _autoDbContext.Set<Detail>().Remove(detail);
        }

        public List<Detail> GetAll()
        {
            return _autoDbContext.Set<Detail>().ToList();
        }

        public Detail GetById(int id)
        {
            return _autoDbContext.Set<Detail>().FirstOrDefault(d => d.Id == id);
        }
    }
}

using CourseProject.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject
{
    public class UnitOfWork : IUnitOfWork
    {
        private AutoDbContext _autoDbContext;

        public UnitOfWork(AutoDbContext autoDbContext)
        {
            _autoDbContext = autoDbContext;
        }

        public void Commit()
        {
            _autoDbContext.SaveChanges();
        }
    }
}

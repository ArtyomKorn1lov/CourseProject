using CourseProject.Entity;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
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

        public async Task Create(Detail detail)
        {
            await _autoDbContext.Set<Detail>().AddAsync(detail);
        }

        public async Task Delete(int id)
        {
            Detail detail = await _autoDbContext.Set<Detail>().FirstOrDefaultAsync(d => d.Id == id);
            if (detail != null)
                _autoDbContext.Set<Detail>().Remove(detail);
        }

        public async Task<List<Detail>> GetAll()
        {
            return await _autoDbContext.Set<Detail>().ToListAsync();
        }

        public async Task<Detail> GetById(int id)
        {
            return await _autoDbContext.Set<Detail>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task Update(Detail detail)
        {
            Detail _detail = await GetById(detail.Id);
            _detail.CopyFrom(detail);
        }
    }
}

using CourseProject.Entity;
using CourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class DetailService : IDetailService
    {
        private IDetailRepository _detailRepository;

        public DetailService(IDetailRepository detailRepository)
        {
            _detailRepository = detailRepository;
        }

        public async Task<bool> Create(Detail detail)
        {
            try
            {
                if(detail != null)
                    await _detailRepository.Create(detail);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                await _detailRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Detail>> GetAll()
        {
            return await _detailRepository.GetAll();
        }

        public async Task<Detail> GetById(int id)
        {
            return await _detailRepository.GetById(id);
        }

        public async Task<bool> Update(Detail detail)
        {
            try
            {
                await _detailRepository.Update(detail);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
